"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * مشهد كوني ثلاثي الأبعاد: حقل نجمي + كوكب ذهبي دوّار + حلقات أسطرلابية + غبار ذهبي
 */
export default function CosmicScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      300
    );
    camera.position.set(0, 0.6, 17);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // نسيج دائري للجزيئات (بدلاً من المربعات)
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 64;
    dotCanvas.height = 64;
    const dctx = dotCanvas.getContext("2d");
    if (dctx) {
      const grad = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.45, "rgba(255,255,255,0.55)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      dctx.fillStyle = grad;
      dctx.fillRect(0, 0, 64, 64);
    }
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    // ===== الإضاءة الذهبية =====
    scene.add(new THREE.AmbientLight(0x5a4630, 1.6));
    const keyLight = new THREE.PointLight(0xffdf9e, 900, 0, 2);
    keyLight.position.set(14, 10, 14);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xe8a020, 400, 0, 2);
    rimLight.position.set(-12, -6, 8);
    scene.add(rimLight);

    // ===== حقل النجوم =====
    const starCount = 2200;
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const palette = [0xfff2cf, 0xffe0aa, 0xf2d98a, 0xffffff];
    for (let i = 0; i < starCount; i++) {
      const r = 55 + Math.random() * 90;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      starPos[i * 3 + 2] = r * Math.cos(phi) - 40;
      const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.55,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ===== الكوكب الذهبي =====
    const planetGroup = new THREE.Group();
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0xc9962e,
      metalness: 0.9,
      roughness: 0.32,
      emissive: 0x2a1c05,
      emissiveIntensity: 0.5,
    });
    const planet = new THREE.Mesh(new THREE.SphereGeometry(4.6, 72, 72), planetMat);
    planetGroup.add(planet);

    // شبكة نجومية سلكية حول الكوكب (كأنها كرة أسطرلاب)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf2d98a,
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    });
    const wireSphere = new THREE.Mesh(new THREE.IcosahedronGeometry(5.15, 2), wireMat);
    planetGroup.add(wireSphere);
    planetGroup.position.set(0, -0.8, 0);
    scene.add(planetGroup);

    // ===== حلقات الأسطرلاب =====
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd4a53f,
      transparent: true,
      opacity: 0.55,
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8f6a1c,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(7.2, 0.045, 10, 160), ringMat);
    ring1.rotation.x = Math.PI / 2.4;
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(8.4, 0.032, 10, 170), ringMat2);
    ring2.rotation.x = Math.PI / 1.7;
    ring2.rotation.y = Math.PI / 6;
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(9.6, 0.025, 10, 180), ringMat);
    ring3.rotation.x = Math.PI / 3;
    ring3.rotation.z = -Math.PI / 5;
    const ringsGroup = new THREE.Group();
    ringsGroup.add(ring1, ring2, ring3);
    ringsGroup.position.copy(planetGroup.position);
    scene.add(ringsGroup);

    // كوكب صغير يدور على أحد الحلقات
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0xf2d98a,
      metalness: 0.7,
      roughness: 0.25,
      emissive: 0x4a3008,
      emissiveIntensity: 0.6,
    });
    const moon = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 32), moonMat);
    scene.add(moon);

    // ===== الغبار الذهبي المتطاير =====
    const dustCount = 420;
    const dustPos = new Float32Array(dustCount * 3);
    const dustSpeed = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 40;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 24 + 2;
      dustSpeed[i] = 0.008 + Math.random() * 0.02;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xe8b84b,
      size: 0.22,
      map: dotTexture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // ===== البرولكس: متابعة الفأرة =====
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ===== حلقة الرسم =====
    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      stars.rotation.y = t * 0.014;
      stars.rotation.x = Math.sin(t * 0.05) * 0.02;

      planet.rotation.y = t * 0.18;
      wireSphere.rotation.y = -t * 0.08;
      wireSphere.rotation.x = t * 0.04;

      ringsGroup.rotation.z = Math.sin(t * 0.12) * 0.08;
      ring1.rotation.z = t * 0.22;
      ring2.rotation.z = -t * 0.16;
      ring3.rotation.z = t * 0.1;

      // القمر يدور في مداره
      const moonAngle = t * 0.5;
      moon.position.set(
        Math.cos(moonAngle) * 7.2,
        Math.sin(moonAngle) * 7.2 * Math.cos(Math.PI / 2.4),
        Math.sin(moonAngle) * 3.2
      );

      // الغبار يطفو للأعلى
      const dp = dustGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < dustCount; i++) {
        dp[i * 3 + 1] += dustSpeed[i];
        if (dp[i * 3 + 1] > 13) dp[i * 3 + 1] = -13;
      }
      dustGeo.attributes.position.needsUpdate = true;

      // البرولكس ناعم للكاميرا
      camera.position.x += (mouse.x * 1.6 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 1.1 + 0.6 - camera.position.y) * 0.03;
      camera.lookAt(0, -0.4, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ===== التنظيف الكامل =====
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Points || obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mat = obj.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

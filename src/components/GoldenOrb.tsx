"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * كرة ذهبية أسطورية ثلاثية الأبعاد: مجسم عشروني الوجوه + حلقات مدارية + نجوم مدارية
 */
export default function GoldenOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // نسيج دائري للجزيئات
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

    const fit = () => {
      const size = canvas.clientWidth || 300;
      canvas.width = size;
      canvas.height = size;
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    fit();

    scene.add(new THREE.AmbientLight(0x5a4630, 1.4));
    const light = new THREE.PointLight(0xffdf9e, 160, 0, 2);
    light.position.set(6, 6, 8);
    scene.add(light);

    // المجسم العشروني الذهبي (رمز الهندسة الإلهية)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xd4a53f,
      metalness: 0.92,
      roughness: 0.28,
      emissive: 0x2a1c05,
      emissiveIntensity: 0.45,
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.9, 0), coreMat);
    scene.add(core);

    // غلاف سلكي متوهج
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf2d98a,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(2.55, 1), wireMat);
    scene.add(wire);

    // حلقتان مداريتان متعامدتان
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd4a53f,
      transparent: true,
      opacity: 0.6,
    });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.03, 8, 120), ringMat);
    ringA.rotation.x = Math.PI / 2;
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(3.7, 0.022, 8, 130), ringMat);
    ringB.rotation.y = Math.PI / 2.4;
    scene.add(ringA, ringB);

    // نجمة مدارية على كل حلقة
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xf2d98a,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x4a3008,
      emissiveIntensity: 0.7,
    });
    const orbA = new THREE.Mesh(new THREE.SphereGeometry(0.18, 24, 24), orbMat);
    const orbB = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), orbMat);
    scene.add(orbA, orbB);

    // غبار ذهبي محيط
    const count = 180;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 14;
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({
        color: 0xe8b84b,
        size: 0.12,
        map: dotTexture,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
      })
    );
    scene.add(dust);

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      core.rotation.x = t * 0.3;
      core.rotation.y = t * 0.42;
      wire.rotation.y = -t * 0.25;
      wire.rotation.x = t * 0.12;
      ringA.rotation.y = t * 0.35;
      ringB.rotation.z = -t * 0.28;
      orbA.position.set(
        Math.cos(t * 0.6) * 3.3,
        Math.sin(t * 0.6) * 3.3 * Math.cos(Math.PI / 2),
        Math.sin(t * 0.6) * 3.3 * Math.sin(Math.PI / 2)
      );
      orbB.position.set(
        Math.cos(t * 0.45) * 3.7,
        Math.sin(t * 0.9) * 1.1,
        Math.sin(t * 0.45) * 3.7
      );
      dust.rotation.y = t * 0.06;
      renderer.render(scene, camera);
    };
    animate();

    const ro = new ResizeObserver(fit);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
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
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}

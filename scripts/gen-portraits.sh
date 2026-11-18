#!/bin/bash
# توليد صور فنية أسلوبية للعلماء العرب التسعة بنمط ذهبي موحد
mkdir -p /home/z/my-project/public/scholars

STYLE="legendary portrait illustration, golden ornamental Islamic arabesque frame, deep dark cosmic night sky background with stars and nebula, warm gold amber and bronze tones, glowing soft light on face, intricate geometric patterns, epic masterpiece digital oil painting, dramatic chiaroscuro lighting, cinematic, ultra detailed, dignified wise expression, historical Arabic scholar robes and turban"

declare -a NAMES=(
  "alsufi"
  "battani"
  "ibnshatir"
  "khwarizmi"
  "thabit"
  "khayyam"
  "haytham"
  "biruni"
  "khazini"
)

declare -a PROMPTS=(
  "An elderly Persian astronomer in his observatory, holding an illuminated star chart manuscript showing constellations, a bronze astrolabe on a wooden table beside him, $STYLE"
  "A dignified middle-aged Arab astronomer measuring the sky with a large brass astrolabe and astronomical tables of sun and moon, a crescent moon glowing above, $STYLE"
  "A Damascene astronomer and clockmaker with an intricate bronze planetary gear device and a marble sundial, ancient Damascus minaret silhouette behind, $STYLE"
  "A wise mathematician writing algebra equations with Arabic calligraphy on parchment scrolls, geometric diagrams of circles and quadratic curves, an inkwell and books around, $STYLE"
  "A mathematician surrounded by floating golden platonic solids and geometric constructions, drawing perfect circles and triangles with compass on ancient manuscript, $STYLE"
  "A Persian poet-mathematician contemplating cubic equations drawn with conic section curves, a poetry book and a cup beside celestial globe, $STYLE"
  "A physicist with light rays passing through a small aperture in a dark chamber (camera obscura), beams of golden light refracting through a glass lens and prism toward his eyes, $STYLE"
  "A polymath geodesist measuring the earth radius with shadow rods and a dip angle instrument, a large bronze globe of earth and scales weighing minerals, $STYLE"
  "A physicist holding a magnificent golden balance scale (Balance of Wisdom) weighing a metal ingot, small floating objects demonstrating buoyancy, water vessels, $STYLE"
)

cd /home/z/my-project
for i in "${!NAMES[@]}"; do
  name="${NAMES[$i]}"
  prompt="${PROMPTS[$i]}"
  out="public/scholars/${name}.png"
  if [ -s "$out" ]; then
    echo "== EXISTS: $out"
    continue
  fi
  echo "== Generating: $name"
  for attempt in 1 2 3; do
    z-ai image -p "$prompt" -o "$out" -s 864x1152 && break
    echo "   retry $attempt for $name ..."
    sleep 3
  done
  if [ -s "$out" ]; then
    echo "   OK: $out"
  else
    echo "   FAILED: $name"
  fi
done
echo "DONE"

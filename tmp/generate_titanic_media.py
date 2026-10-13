import os
import subprocess

os.makedirs('/public', exist_ok=True)
os.makedirs('/src/assets/images', exist_ok=True)
os.makedirs('/tmp/frames', exist_ok=True)

# 1. Generate the Master Poster Frame (1920x1080)
# Iconic shot of RMS Titanic bow emerging from the dark abyss under twin submersible spotlight beams
poster_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <!-- Deep abyss gradient -->
    <radialGradient id="abyss" cx="50%" cy="60%" r="75%">
      <stop offset="0%" stop-color="#07182c"/>
      <stop offset="45%" stop-color="#030b16"/>
      <stop offset="100%" stop-color="#010307"/>
    </radialGradient>

    <!-- Submersible Left Spotlight -->
    <radialGradient id="spotLeft" cx="22%" cy="38%" r="48%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="25%" stop-color="#80d4ff" stop-opacity="0.45"/>
      <stop offset="65%" stop-color="#0066aa" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#030b16" stop-opacity="0"/>
    </radialGradient>

    <!-- Submersible Right Spotlight -->
    <radialGradient id="spotRight" cx="78%" cy="32%" r="52%">
      <stop offset="0%" stop-color="#fff8db" stop-opacity="0.9"/>
      <stop offset="20%" stop-color="#ffd56b" stop-opacity="0.38"/>
      <stop offset="60%" stop-color="#004488" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#030b16" stop-opacity="0"/>
    </radialGradient>

    <!-- Underwater Beam Cones -->
    <linearGradient id="beamL" x1="10%" y1="20%" x2="48%" y2="65%">
      <stop offset="0%" stop-color="#cceeff" stop-opacity="0.6"/>
      <stop offset="40%" stop-color="#88ccff" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#030b16" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="beamR" x1="88%" y1="18%" x2="52%" y2="60%">
      <stop offset="0%" stop-color="#fff0aa" stop-opacity="0.65"/>
      <stop offset="40%" stop-color="#ffd56b" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#030b16" stop-opacity="0"/>
    </linearGradient>

    <!-- Hull Rust Texture Gradients -->
    <linearGradient id="hullGrad" x1="50%" y1="20%" x2="50%" y2="95%">
      <stop offset="0%" stop-color="#4a3b32"/>
      <stop offset="35%" stop-color="#2a201b"/>
      <stop offset="75%" stop-color="#181310"/>
      <stop offset="100%" stop-color="#0d0a08"/>
    </linearGradient>

    <linearGradient id="prowHighlight" x1="45%" y1="25%" x2="55%" y2="25%">
      <stop offset="0%" stop-color="#695345"/>
      <stop offset="50%" stop-color="#947a67"/>
      <stop offset="100%" stop-color="#3d2f26"/>
    </linearGradient>
  </defs>

  <!-- Background Abyss -->
  <rect width="1920" height="1080" fill="url(#abyss)"/>

  <!-- Ocean Floor Seabed Silt -->
  <path d="M0 860 Q 480 820 960 840 T 1920 870 L 1920 1080 L 0 1080 Z" fill="#0d141e"/>
  <path d="M0 910 Q 560 890 1100 920 T 1920 930 L 1920 1080 L 0 1080 Z" fill="#070b12"/>

  <!-- Submersible Left Floodlight Cone -->
  <polygon points="260,180 850,560 620,860 120,420" fill="url(#beamL)"/>
  
  <!-- Submersible Right Floodlight Cone -->
  <polygon points="1660,140 1020,530 1280,840 1820,380" fill="url(#beamR)"/>

  <!-- Left Submersible (ALVIN) Hull in distance -->
  <g transform="translate(180, 160) scale(0.75)">
    <ellipse cx="120" cy="80" rx="95" ry="55" fill="#f4f4f4" stroke="#222" stroke-width="4"/>
    <rect x="50" y="55" width="40" height="25" rx="6" fill="#111827"/>
    <circle cx="160" cy="70" r="14" fill="#00ffff" opacity="0.9"/>
    <circle cx="160" cy="70" r="30" fill="#ffffff" opacity="0.3"/>
    <circle cx="185" cy="90" r="10" fill="#ffffff" opacity="0.95"/>
    <path d="M190 90 L 320 140" stroke="#ffd56b" stroke-width="18" stroke-linecap="round" opacity="0.4"/>
    <rect x="25" y="10" width="55" height="40" rx="4" fill="#ff4422"/>
    <text x="35" y="35" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="bold" fill="#fff">ALVIN</text>
    <!-- Robotic Arm -->
    <path d="M180 115 L 230 160 L 260 210" stroke="#444" stroke-width="8" stroke-linecap="round" fill="none"/>
    <circle cx="260" cy="210" r="8" fill="#ffd56b"/>
  </g>

  <!-- Right Submersible (ARGO / JASON) in distance -->
  <g transform="translate(1560, 120) scale(0.65)">
    <rect x="40" y="40" width="160" height="90" rx="12" fill="#e2e8f0" stroke="#111" stroke-width="4"/>
    <circle cx="65" cy="85" r="24" fill="#ffffff" opacity="0.95"/>
    <circle cx="65" cy="85" r="45" fill="#ffffff" opacity="0.25"/>
    <circle cx="140" cy="85" r="22" fill="#ffd56b" opacity="0.9"/>
    <text x="75" y="120" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="bold" fill="#111">ARGO</text>
  </g>

  <!-- THE TITANIC BOW - Majestic Frontal Silhouette -->
  <!-- Main Hull Body -->
  <path d="M 960 260 L 1380 620 L 1310 930 L 960 960 L 610 930 L 540 620 Z" fill="url(#hullGrad)" stroke="#1a1411" stroke-width="6"/>

  <!-- Sharp Bow Stem / Prow Keel Centerline -->
  <path d="M 960 260 L 960 960" stroke="url(#prowHighlight)" stroke-width="14" stroke-linecap="round"/>

  <!-- Left Flare & Steel Plates -->
  <path d="M 960 260 L 610 930" stroke="#231b16" stroke-width="6"/>
  <path d="M 960 260 L 1310 930" stroke="#2a201b" stroke-width="6"/>

  <!-- Plating Seams & Horizontal Rivet Rows -->
  <path d="M 720 480 Q 960 420 1200 480" stroke="#3d2f25" stroke-width="4" fill="none"/>
  <path d="M 640 590 Q 960 520 1280 590" stroke="#3a2c22" stroke-width="4" fill="none"/>
  <path d="M 580 710 Q 960 630 1340 710" stroke="#33261e" stroke-width="4" fill="none"/>
  <path d="M 550 820 Q 960 740 1370 820" stroke="#2b2019" stroke-width="4" fill="none"/>

  <!-- Castle Deck Railings & Bow Crest (Top of Prow) -->
  <g stroke="#806553" stroke-width="3">
    <!-- Top Railing -->
    <path d="M 780 290 Q 960 250 1140 290" fill="none"/>
    <path d="M 780 305 Q 960 265 1140 305" fill="none"/>
    <!-- Vertical Stanchions -->
    <line x1="800" y1="290" x2="800" y2="315"/>
    <line x1="840" y1="282" x2="840" y2="307"/>
    <line x1="880" y1="274" x2="880" y2="299"/>
    <line x1="920" y1="266" x2="920" y2="291"/>
    <line x1="960" y1="260" x2="960" y2="285"/>
    <line x1="1000" y1="266" x2="1000" y2="291"/>
    <line x1="1040" y1="274" x2="1040" y2="299"/>
    <line x1="1080" y1="282" x2="1080" y2="307"/>
    <line x1="1120" y1="290" x2="1120" y2="315"/>
  </g>

  <!-- Giant Port & Starboard Hawseholes (Anchor Pockets) -->
  <ellipse cx="800" cy="460" rx="42" ry="26" fill="#050302" stroke="#4a3729" stroke-width="6"/>
  <ellipse cx="1120" cy="460" rx="42" ry="26" fill="#050302" stroke="#4a3729" stroke-width="6"/>

  <!-- Massive Port Anchor Hanging on the Bow -->
  <g transform="translate(730, 470)">
    <path d="M 40 10 L 40 160 Q 40 230 110 240 L 140 210 Q 70 200 70 140 L 70 10 Z" fill="#291e17" stroke="#150f0b" stroke-width="4"/>
    <line x1="20" y1="30" x2="60" y2="30" stroke="#3b2b20" stroke-width="8"/>
    <!-- Anchor Fluke -->
    <polygon points="120,200 160,250 110,240" fill="#3b2b20"/>
  </g>

  <!-- Rusticles (Iron icicles cascading down the hull) -->
  <g fill="#574133" opacity="0.85">
    <path d="M 952 320 Q 956 380 954 440 L 966 440 Q 964 380 968 320 Z"/>
    <path d="M 870 360 Q 868 430 873 490 L 880 490 Q 876 430 878 360 Z"/>
    <path d="M 1040 370 Q 1045 440 1039 510 L 1048 510 Q 1052 440 1047 370 Z"/>
    <path d="M 760 480 Q 755 540 762 600 L 770 600 Q 765 540 768 480 Z"/>
    <path d="M 1150 490 Q 1155 560 1148 620 L 1158 620 Q 1163 560 1158 490 Z"/>
    <path d="M 820 620 Q 815 720 824 810 L 834 810 Q 826 720 829 620 Z"/>
    <path d="M 1090 630 Q 1096 730 1088 820 L 1098 820 Q 1105 730 1098 630 Z"/>
  </g>

  <!-- Ambient Spotlight Pools on the Hull -->
  <ellipse cx="960" cy="520" rx="360" ry="240" fill="url(#spotLeft)" opacity="0.45"/>
  <ellipse cx="1060" cy="560" rx="380" ry="260" fill="url(#spotRight)" opacity="0.4"/>

  <!-- Marine Snow (Floating deep ocean silt particles) -->
  <g fill="#ffffff" opacity="0.75">
    <circle cx="340" cy="280" r="3.5" opacity="0.8"/>
    <circle cx="480" cy="190" r="2"/>
    <circle cx="620" cy="350" r="4" opacity="0.9"/>
    <circle cx="750" cy="220" r="2.5"/>
    <circle cx="910" cy="180" r="3"/>
    <circle cx="1080" cy="240" r="4.5" opacity="0.85"/>
    <circle cx="1220" cy="190" r="2"/>
    <circle cx="1400" cy="320" r="3.5"/>
    <circle cx="1520" cy="250" r="2"/>
    <circle cx="690" cy="620" r="3.5"/>
    <circle cx="840" cy="540" r="2"/>
    <circle cx="1020" cy="590" r="3"/>
    <circle cx="1180" cy="670" r="4"/>
    <circle cx="1350" cy="580" r="2.5"/>
    <circle cx="510" cy="790" r="3"/>
    <circle cx="740" cy="880" r="2"/>
    <circle cx="980" cy="850" r="3.5"/>
    <circle cx="1190" cy="890" r="2"/>
    <circle cx="1450" cy="780" r="3"/>
  </g>

  <!-- Telemetry HUD & Authentic Expedition Typography Overlay -->
  <!-- Top Telemetry -->
  <rect x="60" y="60" width="340" height="38" rx="6" fill="#000000" opacity="0.65"/>
  <text x="80" y="85" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="600" fill="#38bdf8" letter-spacing="2">
    NORTH ATLANTIC · EXPEDITION
  </text>

  <!-- Prominent Center-Bottom Title from the Footage -->
  <rect x="630" y="930" width="660" height="66" rx="8" fill="#000000" opacity="0.75" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3"/>
  <text x="960" y="974" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#ffffff" letter-spacing="4">
    RMS TITANIC – 12,460 FT
  </text>

  <!-- Expedition Date & Coordinates -->
  <rect x="1540" y="944" width="320" height="38" rx="6" fill="#000000" opacity="0.65"/>
  <text x="1700" y="969" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="600" fill="#facc15" letter-spacing="1">
    SEPT 1985 · 41°43&apos;N 49°56&apos;W
  </text>
</svg>"""

with open('/tmp/titanic_poster.svg', 'w') as f:
    f.write(poster_svg)

print("SVG written. Converting to high-res JPG poster...")
subprocess.run([
    'ffmpeg', '-y', '-i', '/tmp/titanic_poster.svg',
    '-vf', 'scale=1920:1080',
    '/public/titanic_discovery_poster.jpg'
], check=True)

# Copy to assets
subprocess.run(['cp', '/public/titanic_discovery_poster.jpg', '/src/assets/images/titanic_wreck_thumb.jpg'], check=True)
print("Poster created successfully!")
"""

with open('/tmp/generate_titanic_media.py', 'w') as f:
    f.write(python_script)

print("Script saved!")

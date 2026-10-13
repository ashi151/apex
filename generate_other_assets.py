import os
import subprocess

# 1. Hero Adventure World (Clean Anime Ocean Adventure Illustration on White)
hero_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#f0f9ff"/>
      <stop offset="70%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="35%" stop-color="#0066cc"/>
      <stop offset="75%" stop-color="#075985"/>
      <stop offset="100%" stop-color="#0c4a6e"/>
    </linearGradient>
    <linearGradient id="islandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="50%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>

  <!-- Sky Field -->
  <rect width="1920" height="720" fill="url(#skyGrad)"/>

  <!-- Sun Symbol -->
  <circle cx="1480" cy="240" r="88" fill="#fef08a" opacity="0.9"/>
  <circle cx="1480" cy="240" r="130" fill="#fef9c3" opacity="0.4"/>

  <!-- Distant Clouds -->
  <g fill="#ffffff" stroke="#111111" stroke-width="3">
    <!-- Big puffy cloud left -->
    <path d="M 280 340 H 520 C 560 340 590 310 590 270 C 590 235 565 205 530 200 C 520 145 470 105 410 105 C 350 105 300 150 290 210 C 260 210 230 235 230 270 C 230 310 250 340 280 340 Z"/>
    <!-- Cloud right -->
    <path d="M 1120 380 H 1340 C 1375 380 1400 355 1400 320 C 1400 290 1380 265 1350 260 C 1340 210 1295 175 1245 175 C 1195 175 1150 215 1145 265 C 1120 265 1090 288 1090 320 C 1090 355 1105 380 1120 380 Z"/>
  </g>

  <!-- Distant Adventure Mountain Island on Horizon -->
  <polygon points="760,720 920,440 980,520 1080,390 1260,720" fill="url(#islandGrad)" stroke="#111111" stroke-width="4"/>
  <polygon points="900,470 920,440 950,490" fill="#ffffff"/>
  <polygon points="1060,420 1080,390 1110,435" fill="#ffffff"/>

  <!-- Ocean Field -->
  <rect y="720" width="1920" height="360" fill="url(#oceanGrad)"/>

  <!-- Cartography Dotted Line -->
  <path d="M 120 780 C 420 860 680 740 960 760 C 1240 780 1520 700 1820 740" stroke="#ffd56b" stroke-width="4" stroke-dasharray="14 14" fill="none"/>

  <!-- Ocean Waves -->
  <path d="M 0 740 Q 240 710 480 740 T 960 740 T 1440 740 T 1920 740" stroke="#38bdf8" stroke-width="6" fill="none"/>
  <path d="M 0 820 Q 300 790 600 820 T 1200 820 T 1800 820" stroke="#7dd3fc" stroke-width="4" fill="none"/>

  <!-- Adventure Sailing Caravel Ship in Center -->
  <g transform="translate(820, 520) scale(1.4)">
    <!-- Main Mast -->
    <line x1="120" y1="40" x2="120" y2="190" stroke="#111111" stroke-width="5" stroke-linecap="round"/>
    <line x1="50" y1="70" x2="50" y2="190" stroke="#111111" stroke-width="4" stroke-linecap="round"/>
    
    <!-- Red Flag -->
    <polygon points="120,40 160,50 120,60" fill="#e11d48" stroke="#111111" stroke-width="3"/>
    
    <!-- Main Billowing Sail -->
    <path d="M 120 60 Q 200 80 180 160 L 120 160 Z" fill="#ffffff" stroke="#111111" stroke-width="4"/>
    <path d="M 125 110 H 165" stroke="#0066cc" stroke-width="6" stroke-linecap="round"/>

    <!-- Front Jib Sail -->
    <path d="M 50 80 Q 0 100 20 160 L 50 160 Z" fill="#f0f9ff" stroke="#111111" stroke-width="4"/>

    <!-- Wooden Hull -->
    <path d="M -10 180 H 220 L 180 230 H 20 Z" fill="#f59e0b" stroke="#111111" stroke-width="5"/>
    <path d="M 10 195 H 190" stroke="#b45309" stroke-width="4"/>
    
    <!-- Wave Foam at Hull -->
    <ellipse cx="205" cy="225" rx="25" ry="10" fill="#ffffff"/>
    <ellipse cx="5" cy="225" rx="35" ry="10" fill="#ffffff"/>
  </g>

  <!-- Compass Rose in Upper Corner -->
  <g transform="translate(140, 140) scale(1.6)">
    <circle cx="50" cy="50" r="38" stroke="#111111" stroke-width="3" fill="#ffffff"/>
    <circle cx="50" cy="50" r="30" stroke="#0066cc" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
    <polygon points="50,16 57,50 50,46 43,50" fill="#e11d48"/>
    <polygon points="50,84 57,50 50,54 43,50" fill="#111111"/>
    <polygon points="84,50 50,57 54,50 50,43" fill="#111111"/>
    <polygon points="16,50 50,57 46,50 50,43" fill="#111111"/>
    <circle cx="50" cy="50" r="4" fill="#ffffff" stroke="#111111" stroke-width="2"/>
    <text x="50" y="11" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold" fill="#e11d48">N</text>
  </g>

  <!-- Bottom Coordinate Label -->
  <rect x="760" y="1000" width="400" height="44" rx="8" fill="#ffffff" stroke="#111111" stroke-width="2"/>
  <text x="960" y="1028" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="bold" fill="#111111">
    APEX.AI · 16°42&apos;N · 142°18&apos;E
  </text>
</svg>"""

with open('public/hero_adventure_world.svg', 'w') as f:
    f.write(hero_svg)

subprocess.run([
    'ffmpeg', '-y', '-i', 'public/hero_adventure_world.svg',
    '-vf', 'scale=1920:1080',
    'public/hero_adventure_world.jpg'
], check=True)

subprocess.run([
    'cp', 'public/hero_adventure_world.jpg',
    'src/assets/images/hero_adventure_world.jpg'
], check=True)

# 2. AI Visual Stories (Anime Clockwork Lighthouse & Ocean Horizon)
stories_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="storySky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
    <linearGradient id="storySea" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="740" fill="url(#storySky)"/>
  <rect y="740" width="1920" height="340" fill="url(#storySea)"/>
  
  <!-- Giant anime cloud -->
  <ellipse cx="1400" cy="400" rx="360" ry="220" fill="#ffffff" stroke="#111" stroke-width="4"/>
  <ellipse cx="1580" cy="360" rx="240" ry="170" fill="#ffffff"/>
  <ellipse cx="1220" cy="420" rx="200" ry="140" fill="#ffffff"/>

  <!-- Emerald Cliff -->
  <path d="M 0 580 Q 240 540 440 680 L 520 1080 L 0 1080 Z" fill="#10b981" stroke="#111" stroke-width="6"/>

  <!-- Whimsical Lighthouse -->
  <g transform="translate(240, 260)">
    <polygon points="120,400 80,140 160,140" fill="#ffffff" stroke="#111" stroke-width="5"/>
    <path d="M 90 200 H 150 M 85 270 H 155 M 82 340 H 158" stroke="#e11d48" stroke-width="8"/>
    <!-- Dome & Beacon -->
    <rect x="70" y="90" width="100" height="50" rx="6" fill="#fef08a" stroke="#111" stroke-width="5"/>
    <circle cx="120" cy="115" r="16" fill="#f59e0b"/>
    <polygon points="120,115 600,0 600,240" fill="#fef9c3" opacity="0.35"/>
    <polygon points="60,90 120,40 180,90" fill="#111"/>
    <!-- Brass Weathervane -->
    <line x1="120" y1="40" x2="120" y2="10" stroke="#f59e0b" stroke-width="5"/>
    <polygon points="120,10 145,15 120,20" fill="#f59e0b"/>
  </g>

  <!-- Seagulls -->
  <g stroke="#111" stroke-width="3" fill="none">
    <path d="M 800 320 Q 820 300 840 320 Q 860 300 880 320"/>
    <path d="M 940 280 Q 955 265 970 280 Q 985 265 1000 280"/>
  </g>
</svg>"""

with open('public/video_ai_visual_stories.svg', 'w') as f:
    f.write(stories_svg)

subprocess.run([
    'ffmpeg', '-y', '-i', 'public/video_ai_visual_stories.svg',
    '-vf', 'scale=1920:1080',
    'public/video_ai_visual_stories.jpg'
], check=True)

subprocess.run([
    'cp', 'public/video_ai_visual_stories.jpg',
    'src/assets/images/video_ai_visual_stories.jpg'
], check=True)

# 3. Vertical Short (9:16 Cartographer's Compass & Ancient Chart)
short_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="cabinWood" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e1814"/>
      <stop offset="50%" stop-color="#2d221b"/>
      <stop offset="100%" stop-color="#140f0c"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#cabinWood)"/>

  <!-- Unfolded Map Parchment -->
  <polygon points="120,380 940,260 980,1540 160,1660" fill="#fdf6e2" stroke="#111" stroke-width="6"/>
  <!-- Map Fold Lines -->
  <line x1="530" y1="320" x2="570" y2="1600" stroke="#d4b483" stroke-width="4" stroke-dasharray="8 8"/>
  <line x1="140" y1="1020" x2="960" y2="900" stroke="#d4b483" stroke-width="4" stroke-dasharray="8 8"/>

  <!-- Inked Island Coastlines on Map -->
  <path d="M 280 640 Q 380 580 440 680 T 560 760 Q 480 880 340 840 Z" fill="#e0f2fe" stroke="#0066cc" stroke-width="4"/>
  <path d="M 680 1100 Q 820 1020 860 1200 T 740 1340 Z" fill="#dcfce7" stroke="#059669" stroke-width="4"/>

  <!-- Dotted Voyage Route -->
  <path d="M 380 720 C 520 840 620 960 780 1160" stroke="#e11d48" stroke-width="5" stroke-dasharray="10 10" fill="none"/>
  <!-- Big Red X -->
  <line x1="750" y1="1130" x2="810" y2="1190" stroke="#e11d48" stroke-width="8" stroke-linecap="round"/>
  <line x1="810" y1="1130" x2="750" y2="1190" stroke="#e11d48" stroke-width="8" stroke-linecap="round"/>

  <!-- Massive Brass Astrolabe / Compass in Center -->
  <g transform="translate(540, 960) scale(1.5)">
    <circle cx="0" cy="0" r="160" fill="#fef08a" stroke="#111" stroke-width="8"/>
    <circle cx="0" cy="0" r="140" stroke="#b45309" stroke-width="4" stroke-dasharray="6 6" fill="none"/>
    <circle cx="0" cy="0" r="110" fill="#ffffff" stroke="#111" stroke-width="6"/>
    <!-- Compass Rose Points -->
    <polygon points="0,-95 24,0 0,-12 -24,0" fill="#e11d48"/>
    <polygon points="0,95 24,0 0,12 -24,0" fill="#111111"/>
    <polygon points="95,0 0,24 12,0 0,-24" fill="#111111"/>
    <polygon points="-95,0 0,24 -12,0 0,-24" fill="#111111"/>
    <circle cx="0" cy="0" r="16" fill="#f59e0b" stroke="#111" stroke-width="4"/>
  </g>

  <!-- Porthole Sunbeam overlay -->
  <polygon points="0,0 600,0 1080,1200 480,1920" fill="#ffffff" opacity="0.12"/>
</svg>"""

with open('public/short_ancient_map_voyage.svg', 'w') as f:
    f.write(short_svg)

subprocess.run([
    'ffmpeg', '-y', '-i', 'public/short_ancient_map_voyage.svg',
    '-vf', 'scale=1080:1920',
    'public/short_ancient_map_voyage.jpg'
], check=True)

subprocess.run([
    'cp', 'public/short_ancient_map_voyage.jpg',
    'src/assets/images/short_ancient_map_voyage.jpg'
], check=True)

print("All media assets generated successfully!")

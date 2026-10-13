export interface PromptItem {
  id: string;
  title: string;
  category: 'Geography' | 'History' | 'Visual Stories' | 'Animation' | 'Cinematic AI' | 'Satisfying AI';
  aiModel: string;
  videoModel: string;
  image: string;
  videoUrl?: string;
  shortDescription: string;
  imagePrompt: string;
  animationPrompt: string;
  settings: string;
  camera: string;
  aspectRatio: string;
  editingNotes: string;
  duration: string;
  viewsCount: string;
  youtubeUrl: string;
  coordinates: string;
}

export interface FeaturedVideo {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl: string;
  category: string;
  duration: string;
  promptId: string;
  primaryButtonLabel?: string;
  secondaryLinkLabel?: string;
  coordinates: string;
}

export interface ShortVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  image: string;
  videoUrl?: string;
  promptId: string;
  hookText: string;
}

export interface ToolItem {
  name: string;
  category: 'IMAGE' | 'VIDEO' | 'VOICE' | 'WRITING' | 'EDITING';
  purpose: string;
  exampleProject: string;
  examplePromptId: string;
}

export interface GuideItem {
  id: string;
  title: string;
  shortDescription: string;
  readTime: string;
  category: string;
  coverVariant: 'geography' | 'shorts' | 'consistency' | 'img2vid' | 'prompts';
  steps: {
    stepNumber: string;
    heading: string;
    body: string;
    proTip: string;
  }[];
  sampleTemplate: string;
}

export const HERO_IMAGE = '/public/hero_adventure_world.jpg';
export const TITANIC_WRECK_IMAGE = '/public/titanic_discovery_poster.jpg';
export const TITANIC_WRECK_VIDEO = '/titanic_discovery_wreck_21s.mp4';
export const STORIES_IMAGE = '/public/video_ai_visual_stories.jpg';
export const SHORT_COMPASS_IMAGE = '/public/short_ancient_map_voyage.jpg';

export const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: 'titanic-discovery-wreck',
    number: '01',
    title: 'TITANIC: DISCOVERY OF THE WRECK',
    subtitle: 'A cinematic AI recreation of the underwater expedition that revealed Titanic’s wreck on the ocean floor.',
    description:
      'Descend into the darkness of the North Atlantic and experience the discovery of Titanic through an AI-generated cinematic recreation. Deep-sea lights sweep across the ocean floor as the legendary wreck slowly emerges from the darkness.',
    image: TITANIC_WRECK_IMAGE,
    videoUrl: TITANIC_WRECK_VIDEO,
    category: 'AI CINEMATIC · HISTORY · VISUAL STORY',
    duration: '00:21',
    promptId: 'prompt-titanic-wreck',
    primaryButtonLabel: 'Watch video →',
    secondaryLinkLabel: 'Behind the scenes →',
    coordinates: "41°43'N · 49°56'W"
  },
  {
    id: 'submersible-chronicles',
    number: '02',
    title: 'SUBMERSIBLE CHRONICLES: THE ABYSS',
    subtitle: 'A cinematic AI deep-ocean exploration documentary experiment.',
    description:
      'Charting the silent 3,800-meter descent of Alvin and Argo through the midnight zone, utilizing volumetric lighting beams and micro-particle drift simulation.',
    image: TITANIC_WRECK_IMAGE,
    videoUrl: TITANIC_WRECK_VIDEO,
    category: 'History · Cinematic AI',
    duration: '00:21',
    promptId: 'prompt-titanic-wreck',
    primaryButtonLabel: 'Watch video →',
    secondaryLinkLabel: 'Behind the scenes →',
    coordinates: "41°43'N · 49°56'W"
  },
  {
    id: 'ai-visual-stories',
    number: '03',
    title: 'AI VISUAL STORIES',
    subtitle: 'Short-form animated storytelling.',
    description:
      'Hand-crafted anime horizon aesthetics blended with consistent character and environment references to tell self-contained ocean adventure fables.',
    image: STORIES_IMAGE,
    videoUrl: TITANIC_WRECK_VIDEO,
    category: 'Animation · Visual Stories',
    duration: '03:15',
    promptId: 'prompt-visual-stories',
    primaryButtonLabel: 'View video →',
    coordinates: "16°42'N · 142°18'E"
  }
];

export const SHORTS_VIDEOS: ShortVideo[] = [
  {
    id: 'short-01',
    title: 'Titanic: Emerging from the Midnight Zone',
    category: 'History',
    duration: '0:21',
    views: '2.4M views',
    image: TITANIC_WRECK_IMAGE,
    videoUrl: TITANIC_WRECK_VIDEO,
    promptId: 'prompt-titanic-wreck',
    hookText: 'Submersible floodlights revealing the iconic bow at 12,460 feet.'
  },
  {
    id: 'short-02',
    title: 'The Cartographer’s Compass',
    category: 'Visual Stories',
    duration: '0:52',
    views: '1.4M views',
    image: SHORT_COMPASS_IMAGE,
    promptId: 'prompt-visual-stories',
    hookText: 'How ancient navigators charted invisible ocean currents.'
  },
  {
    id: 'short-03',
    title: '3,800 Meters Below the Atlantic',
    category: 'Cinematic AI',
    duration: '0:21',
    views: '1.9M views',
    image: TITANIC_WRECK_IMAGE,
    videoUrl: TITANIC_WRECK_VIDEO,
    promptId: 'prompt-titanic-wreck',
    hookText: 'What Argo searchlights recorded in total abyssal darkness.'
  },
  {
    id: 'short-04',
    title: 'Skyward Lighthouse Horizon',
    category: 'Animation',
    duration: '0:44',
    views: '960K views',
    image: STORIES_IMAGE,
    promptId: 'prompt-visual-stories',
    hookText: 'Seamless cel-shaded ocean breeze loops rendered with AI.'
  }
];

export const PROMPTS_DATA: PromptItem[] = [
  {
    id: 'prompt-titanic-wreck',
    title: 'TITANIC: DISCOVERY OF THE WRECK — Spotlight Pass',
    category: 'History',
    aiModel: 'Midjourney v6.1 + Runway Gen-3 Alpha',
    videoModel: 'Runway Gen-3 Alpha Pro',
    image: TITANIC_WRECK_IMAGE,
    videoUrl: TITANIC_WRECK_VIDEO,
    shortDescription:
      'A cinematic AI recreation of the underwater expedition that revealed Titanic’s wreck on the ocean floor.',
    imagePrompt:
      'Ultra-detailed cinematic frame of the iconic RMS Titanic ship bow resting upright on the abyssal North Atlantic ocean floor at 12,460 feet depth, illuminated by powerful twin submersible searchlights cutting through pitch-black deep sea water, showing the rusted steel railings, towering prow, and anchor chain emerging from the darkness, floating marine snow silt particles, IMAX deep-sea exploration documentary footage, photorealistic, 8k resolution --ar 16:9 --style raw --v 6.1',
    animationPrompt:
      'Descend into the darkness of the North Atlantic as deep-sea submersible spotlights sweep across the ocean floor. Slow, controlled forward push-in toward the towering rusted prow of the Titanic as fine underwater silt particles drift softly upward in the ocean currents.',
    settings: 'CFG Scale: 7.0 · Motion Strength: 4/10 · Frame Rate: 24fps · Grain: 35mm Submersible Film',
    camera: 'Wide-angle 24mm underwater cinema housing, slow forward tracking dolly, locked tilt',
    aspectRatio: '16:9 (Cinema 4K)',
    editingNotes:
      'Mixed authentic hydrophone low-frequency resonance with 820Hz sonar pings every 5 seconds. Added subtle video-telemetry HUD text ("RMS TITANIC – 12,460 FT") and graded with deep Prussian blue falloff.',
    duration: '00:21',
    viewsCount: '3.1M views',
    youtubeUrl: 'https://www.youtube.com',
    coordinates: "41°43'N · 49°56'W"
  },
  {
    id: 'prompt-visual-stories',
    title: 'Skyward Lighthouse — Ocean Adventure World',
    category: 'Visual Stories',
    aiModel: 'Niji Journey v6 + Luma Dream Machine',
    videoModel: 'Luma Ray 2',
    image: STORIES_IMAGE,
    shortDescription: 'Anime-inspired ocean horizon storytelling with cel-shaded clouds and wind physics.',
    imagePrompt:
      'Vibrant anime architectural illustration of a whimsical brass-and-stone clockwork lighthouse standing on a sunlit emerald cliff overlooking a sparkling cerulean ocean, towering fluffy white cumulus clouds in a bright sky, Makoto Shinkai and classic ocean adventure anime background painting style, crisp cel-shaded details, warm afternoon breeze --ar 16:9 --niji 6',
    animationPrompt:
      'Gentle camera crane upward as the meadow grass sways in the ocean breeze. The brass weather vanes on the lighthouse rotate slowly, white seagulls glide across the sunlit horizon, and towering cumulus clouds drift softly across the blue sky.',
    settings: 'Style Reference (--sref): Locked · Loop: Enabled · Motion: Natural Breeze',
    camera: 'Low-angle 28mm wide lens tilting upward toward the horizon',
    aspectRatio: '16:9 & 9:16 Dual Crop',
    editingNotes:
      'Color-matched 14 consecutive shots by keeping the same `--sref` palette seed across every scene. Added acoustic guitar and ocean surf foley.',
    duration: '03:15',
    viewsCount: '1.4M views',
    youtubeUrl: 'https://www.youtube.com',
    coordinates: "16°42'N · 142°18'E"
  },
  {
    id: 'prompt-animation-voyage',
    title: 'The Grand Meridian — Sailing Ship Keyframe',
    category: 'Animation',
    aiModel: 'Midjourney v6.1 + Kling 1.6 Pro',
    videoModel: 'Kling 1.6 Pro',
    image: HERO_IMAGE,
    shortDescription: 'Clean editorial adventure ship gliding across stylized cerulean wave crests.',
    imagePrompt:
      'Clean modern anime adventure illustration of an original wooden exploration caravel ship with crisp white canvas sails cutting through bright cerulean ocean waves, distant twin-peak island on the sunny horizon, puffy white clouds, clean linework, bright optimistic color palette --ar 16:9 --v 6.1',
    animationPrompt:
      'The wooden adventure ship sails smoothly forward through sparkling blue waves. White foam trails behind the hull, canvas sails billow gently in the tailwind, and clouds drift slowly in the background.',
    settings: 'Character/Object Consistency: High · Motion: 5/10 · 30fps',
    camera: 'Tracking side-profile shot moving parallel with the vessel',
    aspectRatio: '16:9 (1920 × 1080)',
    editingNotes:
      'Composited subtle vector compass overlays and dotted map lines in After Effects using 2D camera tracking locked to the horizon line.',
    duration: '02:50',
    viewsCount: '1.1M views',
    youtubeUrl: 'https://www.youtube.com',
    coordinates: "08°19'S · 115°05'E"
  },
  {
    id: 'prompt-cinematic-cartography',
    title: 'Living Astrolabe & Nautical Parchment',
    category: 'Cinematic AI',
    aiModel: 'Flux 1.1 Pro + Runway Gen-3',
    videoModel: 'Runway Gen-3 Alpha Turbo',
    image: SHORT_COMPASS_IMAGE,
    shortDescription: 'Macro tabletop cinematography of brass navigation instruments coming to life.',
    imagePrompt:
      'Macro tabletop shot of an ornate brass astrolabe and magnetic compass resting on a hand-drawn nautical map inside a sunlit wooden ship cabin, warm golden sunbeams through a porthole, shallow depth of field, tactile paper fibers and engraved brass textures --ar 9:16',
    animationPrompt:
      'The brass rings of the astrolabe slowly rotate and align while the compass needle settles toward north. Warm dust motes float through the golden sunbeam as inked map lines subtly shimmer.',
    settings: 'Macro Focus Lock · Motion: 3/10 · High Texture Preservation',
    camera: '85mm macro prime lens at f/2.8, slow orbital arc around the compass',
    aspectRatio: '9:16 (Vertical Short)',
    editingNotes:
      'Synced mechanical clockwork clicks to the rotation of the brass rings for tactile audio satisfaction in the first 3 seconds of the Short.',
    duration: '0:52',
    viewsCount: '1.4M views',
    youtubeUrl: 'https://www.youtube.com',
    coordinates: "34°03'N · 118°14'W"
  },
  {
    id: 'prompt-satisfying-waves',
    title: 'Porcelain & Glass Ocean Wave Diorama',
    category: 'Satisfying AI',
    aiModel: 'Midjourney v6.1 + Luma Ray 2',
    videoModel: 'Luma Ray 2',
    image: HERO_IMAGE,
    shortDescription: 'Tactile miniature ocean wave cross-section rendered in translucent sea-glass.',
    imagePrompt:
      'Isometric miniature diorama cross-section of a curling turquoise ocean wave crafted from translucent layered sea-glass and polished white porcelain foam, resting on a clean white studio plinth, bright natural daylight, ultra-clean product cinematography --ar 16:9 --v 6.1',
    animationPrompt:
      'The translucent glass wave curls in smooth slow-motion inside the square diorama frame, with crystalline droplets rolling gently down the porcelain crest in a continuous seamless loop.',
    settings: 'Loop Mode: True · Physics Smoothness: High · 60fps Interpolated',
    camera: 'Isometric 45° orthographic lens, locked tripod frame',
    aspectRatio: '16:9 & 9:16',
    editingNotes:
      'Paired with crisp ASMR glass chime and water droplet foley. Zero background music so the kinetic motion carries the viewer.',
    duration: '0:44',
    viewsCount: '960K views',
    youtubeUrl: 'https://www.youtube.com',
    coordinates: "35°41'N · 139°41'E"
  }
];

export const AI_TOOLS_DATA: ToolItem[] = [
  {
    name: 'Midjourney v6.1 & Niji 6',
    category: 'IMAGE',
    purpose: 'Generating base keyframes, deep-ocean wrecks, and consistent `--sref` style palettes.',
    exampleProject: 'TITANIC: DISCOVERY OF THE WRECK',
    examplePromptId: 'prompt-titanic-wreck'
  },
  {
    name: 'Flux 1.1 Pro',
    category: 'IMAGE',
    purpose: 'High-precision architectural geometry, map typography, and macro instrument renders.',
    exampleProject: 'The Cartographer’s Compass',
    examplePromptId: 'prompt-cinematic-cartography'
  },
  {
    name: 'Runway Gen-3 Alpha',
    category: 'VIDEO',
    purpose: 'Controlled first-to-last keyframe transitions and volumetric underwater submersible lighting.',
    exampleProject: 'TITANIC: DISCOVERY OF THE WRECK',
    examplePromptId: 'prompt-titanic-wreck'
  },
  {
    name: 'Kling 1.6 Pro',
    category: 'VIDEO',
    purpose: 'Long-horizon camera glides and realistic ocean/sail physics from still frames.',
    exampleProject: 'The Grand Meridian Voyage',
    examplePromptId: 'prompt-animation-voyage'
  },
  {
    name: 'Luma Dream Machine (Ray 2)',
    category: 'VIDEO',
    purpose: 'Expressive anime camera crane shots and seamless kinetic loops for Shorts.',
    exampleProject: 'AI Visual Stories',
    examplePromptId: 'prompt-visual-stories'
  },
  {
    name: 'ElevenLabs Studio',
    category: 'VOICE',
    purpose: 'Paced expedition documentary narration and atmospheric hydrophone soundscapes.',
    exampleProject: 'TITANIC: DISCOVERY OF THE WRECK',
    examplePromptId: 'prompt-titanic-wreck'
  },
  {
    name: 'Notion & Custom Storyboards',
    category: 'WRITING',
    purpose: 'Scripting 21-second narrative hooks, pacing shot lists, and cataloging prompt seeds.',
    exampleProject: 'All apex.ai Shorts',
    examplePromptId: 'prompt-titanic-wreck'
  },
  {
    name: 'DaVinci Resolve & After Effects',
    category: 'EDITING',
    purpose: 'Color grading deep-sea footage, telemetry HUD overlay compositing, and final master.',
    exampleProject: 'TITANIC: DISCOVERY OF THE WRECK',
    examplePromptId: 'prompt-titanic-wreck'
  }
];

export const FREE_GUIDES_DATA: GuideItem[] = [
  {
    id: 'guide-geography',
    title: 'How I Create AI Deep-Sea & Geography Visuals',
    shortDescription:
      'My complete workflow for turning real bathymetry maps and historical records into sweeping cinematic AI recreations.',
    readTime: '6 min guide',
    category: 'Historical Recreations',
    coverVariant: 'geography',
    steps: [
      {
        stepNumber: '01',
        heading: 'Start with real archival coordinates & bathymetry',
        body: 'Before writing a single prompt, research real depths (3,800m / 12,460ft), historical telemetry, and survey photos (Argo/Alvin). Passing accurate references keeps the AI grounded in authentic deep-ocean history.',
        proTip: 'Specify lighting sources explicitly: "dual tungsten spotlights from an exploration submersible" rather than generic ambient light.'
      },
      {
        stepNumber: '02',
        heading: 'Simulate the midnight zone environment',
        body: 'At 12,000 feet, zero sunlight penetrates. Emphasize extreme contrast: pitch-black abyss falloff, volumetric light cones cutting through the gloom, and marine snow silt particles.',
        proTip: 'Append "--style raw" and use deep Prussian blue and muted charcoal rust grading.'
      },
      {
        stepNumber: '03',
        heading: 'Control motion with slow, steady camera drift',
        body: 'Real deep-sea submersibles move with heavy inertia. Keep motion values low (3/10 or 4/10) to create that eerie, breathless feeling of discovery.',
        proTip: 'Add authentic hydrophone sonar pings and low-frequency rumble in post-production.'
      }
    ],
    sampleTemplate:
      'Cinematic deep-sea documentary frame of [Subject/Wreck] resting on the abyssal ocean floor at [Depth], illuminated by twin submersible spotlight beams, floating marine snow particles, pitch black abyss background, IMAX documentary cinematography, 35mm lens --ar 16:9 --style raw'
  },
  {
    id: 'guide-shorts',
    title: 'How I Create Cinematic AI Shorts',
    shortDescription:
      'Structuring 21 to 50-second visual stories that hook viewers in the first 2 seconds without chaotic editing.',
    readTime: '5 min guide',
    category: 'Shorts & Pacing',
    coverVariant: 'shorts',
    steps: [
      {
        stepNumber: '01',
        heading: 'Design the 2-second visual anchor',
        body: 'Every high-retention Short begins with a single unmistakable visual contrast—like a warm submersible spotlight cutting through pitch-black ocean water to reveal the Titanic bow.',
        proTip: 'Compose vertical 9:16 frames with the main subject in the upper-middle third so captions never cover the action.'
      },
      {
        stepNumber: '02',
        heading: 'Pace cuts every 3.5 to 4.5 seconds',
        body: 'AI video clips look best in their first 4 seconds before morphing artifacts appear. Write scripts where each sentence corresponds to one deliberate visual beat.',
        proTip: 'Use sound bridges (ocean waves or clockwork clicks starting 0.5s before the cut) to make transitions seamless.'
      },
      {
        stepNumber: '03',
        heading: 'Let tactile sound design carry the realism',
        body: 'Viewers forgive stylized visuals when the audio feels physical. Layer quiet wind, paper rustles, water movement, and warm room tone underneath the narration.',
        proTip: 'Cut background music briefly during the climax reveal shot for maximum impact.'
      }
    ],
    sampleTemplate:
      'Vertical 9:16 composition, [Central Subject] positioned in upper-center third, strong foreground-to-background depth, [Lighting Contrast], clean uncluttered background, cinematic storytelling frame --ar 9:16'
  },
  {
    id: 'guide-consistency',
    title: 'How I Keep Visual Styles Consistent',
    shortDescription:
      'How to make 20 separate AI shots look like they belong to the exact same animated world and color script.',
    readTime: '7 min guide',
    category: 'Style & Worldbuilding',
    coverVariant: 'consistency',
    steps: [
      {
        stepNumber: '01',
        heading: 'Build a Master Color & Linework Bible first',
        body: 'Generate 3 hero environment frames that nail your exact ocean blue, cloud brushwork, and warm sunlight. Use these 3 images together as a multi-image Style Reference (--sref) for the entire project.',
        proTip: 'Never mix different rendering paradigms (e.g., photorealistic 3D + flat anime) inside the same story.'
      },
      {
        stepNumber: '02',
        heading: 'Use Character & Object Turnaround Sheets',
        body: 'For recurring vessels, compasses, or characters, generate a clean neutral-background turnaround sheet first. Pass that cropped reference into subsequent scene prompts.',
        proTip: 'Keep recurring signature details simple—like a white canvas sail with a specific blue stripe.'
      },
      {
        stepNumber: '03',
        heading: 'Final unify pass in DaVinci Resolve',
        body: 'Even with locked style references, AI video generators slightly shift contrast. Apply a subtle shared film curve and halation pass over the assembled timeline.',
        proTip: 'Match black levels and sky luminance across adjacent clips using the waveform scope.'
      }
    ],
    sampleTemplate:
      '[Scene Action & Setting], consistent cel-shaded anime background painting style, bright cerulean ocean palette, towering white cumulus clouds, warm golden rim light --sref [Master_Palette_URL] --sw 150 --ar 16:9'
  },
  {
    id: 'guide-img2vid',
    title: 'How I Turn Images Into AI Videos',
    shortDescription:
      'Avoiding warped faces and melting backgrounds when animating still images with Kling, Runway, and Luma.',
    readTime: '6 min guide',
    category: 'Animation Pipeline',
    coverVariant: 'img2vid',
    steps: [
      {
        stepNumber: '01',
        heading: 'Upscale and clean the keyframe before animating',
        body: 'Video models amplify whatever noise or blurry details exist in your input image. Always upscale your chosen still and fix any small artifacts before feeding it into an image-to-video tool.',
        proTip: 'Remove text or watermarks from the still image; video models will try to warp them.'
      },
      {
        stepNumber: '02',
        heading: 'Use First-Frame + Last-Frame keyframing',
        body: 'When you want a ship to sail from left to right or a camera to tilt up to an island, provide both the starting frame and ending frame so the AI interpolates a controlled path.',
        proTip: 'Generate the end frame by zooming out or panning your start frame in an image editor.'
      },
      {
        stepNumber: '03',
        heading: 'Separate camera motion from subject motion',
        body: 'Write your animation prompt in two clear clauses: first state what the camera does, then state what moves in the scene.',
        proTip: 'Avoid describing colors or art style in the animation prompt—the input image already defines the look.'
      }
    ],
    sampleTemplate:
      'Camera: Slow steady dolly forward. Scene: Deep-sea lights sweep across the ocean floor as the legendary wreck slowly emerges from the darkness.'
  },
  {
    id: 'guide-prompts',
    title: 'How I Write AI Animation Prompts',
    shortDescription:
      'A clear, repeatable formula for writing image and motion prompts without buzzword soup.',
    readTime: '4 min guide',
    category: 'Prompt Engineering',
    coverVariant: 'prompts',
    steps: [
      {
        stepNumber: '01',
        heading: 'Follow the 5-Part Image Prompt Architecture',
        body: 'Structure every image prompt in order of visual priority: 1) Shot Type & Angle, 2) Core Subject & Action, 3) Environment & Atmosphere, 4) Lighting & Color Palette, 5) Lens / Art Medium.',
        proTip: 'Cut filler words like "hyper-realistic, 8k, masterpiece, trending"—they dilute specific direction.'
      },
      {
        stepNumber: '02',
        heading: 'Use physical verbs for motion prompts',
        body: 'Instead of vague instructions like "make it cinematic," use concrete physical verbs: "sways gently," "billows in the tailwind," "rotates clockwise," "drifts upward."',
        proTip: 'Specify the speed of every movement ("slowly," "subtle," "steady") to prevent frantic AI jitter.'
      },
      {
        stepNumber: '03',
        heading: 'Keep a living Prompt Logbook',
        body: 'Save the exact seed, model version, and motion slider value alongside every winning clip so you can recreate the look months later.',
        proTip: 'Test one variable change at a time when iterating on a complex scene.'
      }
    ],
    sampleTemplate:
      '[1. Shot Type & Camera Angle] of [2. Subject & Key Detail] in [3. Environment & Horizon], illuminated by [4. Lighting & Color Palette], [5. Art Style / Lens Specification] --ar 16:9'
  }
];

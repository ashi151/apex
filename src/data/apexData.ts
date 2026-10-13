export interface PromptItem {
  id: string;
  title: string;
  category: 'Geography' | 'History' | 'Visual Stories' | 'Animation' | 'Cinematic AI' | 'Satisfying AI';
  aiModel: string;
  videoModel: string;
  image: string;
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
  category: string;
  duration: string;
  promptId: string;
  secondaryLinkLabel?: string;
  coordinates: string;
}

export interface ShortVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  image?: string;
  artVariant: 'compass' | 'islands' | 'atlantis' | 'kinetic';
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

export const HERO_IMAGE = '/src/assets/images/hero_adventure_world_1791370693447.jpg';
export const UAE_IMAGE = '/src/assets/images/video_uae_from_above_1791370703332.jpg';
export const TITANIC_IMAGE = '/src/assets/images/video_titanic_discovery_1791370714541.jpg';
export const STORIES_IMAGE = '/src/assets/images/video_ai_visual_stories_1791370730263.jpg';
export const SHORT_COMPASS_IMAGE = '/src/assets/images/short_ancient_map_voyage_1791370741743.jpg';

export const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: 'uae-from-above',
    number: '01',
    title: 'UAE FROM ABOVE',
    subtitle: 'Geography story created with AI.',
    description:
      'An aerial visual journey tracing how desert dunes, turquoise coastlines, and engineered archipelagos transformed the Arabian Peninsula over fifty years.',
    image: UAE_IMAGE,
    category: 'Geography · Aerial Documentary',
    duration: '04:18',
    promptId: 'prompt-uae-above',
    secondaryLinkLabel: 'See prompts →',
    coordinates: "25°12'N · 55°16'E"
  },
  {
    id: 'titanic-discovery',
    number: '02',
    title: 'TITANIC DISCOVERY',
    subtitle: 'A cinematic AI documentary experiment.',
    description:
      'Recreating the 1985 deep-ocean discovery at 3,800 meters depth using controlled lighting keyframes, volumetric underwater particles, and slow camera drift.',
    image: TITANIC_IMAGE,
    category: 'History · Cinematic AI',
    duration: '06:42',
    promptId: 'prompt-titanic-discovery',
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
    category: 'Animation · Visual Stories',
    duration: '03:15',
    promptId: 'prompt-visual-stories',
     coordinates: "16°42'N · 142°18'E"
  }
];

export const SHORTS_VIDEOS: ShortVideo[] = [
  {
    id: 'short-01',
    title: 'The Cartographer’s Compass',
    category: 'Visual Stories',
    duration: '0:52',
    views: '1.4M views',
    image: SHORT_COMPASS_IMAGE,
    artVariant: 'compass',
    promptId: 'prompt-visual-stories',
    hookText: 'How ancient navigators charted invisible ocean currents.'
  },
  {
    id: 'short-02',
    title: 'How Artificial Islands Are Built',
    category: 'Geography',
    duration: '0:58',
    views: '2.8M views',
    image: UAE_IMAGE,
    artVariant: 'islands',
    promptId: 'prompt-uae-above',
    hookText: 'Millions of tons of marine sand sculpted against ocean tides.'
  },
  {
    id: 'short-03',
    title: '3,800 Meters Below the Atlantic',
    category: 'History',
    duration: '0:49',
    views: '1.9M views',
    image: TITANIC_IMAGE,
    artVariant: 'atlantis',
    promptId: 'prompt-titanic-discovery',
    hookText: 'What submersible spotlights reveal in total abyssal darkness.'
  },
  {
    id: 'short-04',
    title: 'Clockwork Horizon Glassworks',
    category: 'Satisfying AI',
    duration: '0:44',
    views: '960K views',
    image: STORIES_IMAGE,
    artVariant: 'kinetic',
    promptId: 'prompt-satisfying-waves',
    hookText: 'Seamless mechanical wave simulations rendered at 60fps.'
  }
];

export const PROMPTS_DATA: PromptItem[] = [
  {
    id: 'prompt-uae-above',
    title: 'UAE From Above — Coastal Dune Geometry',
    category: 'Geography',
    aiModel: 'Midjourney v6.1 + Kling 1.6 Pro',
    videoModel: 'Kling 1.6 Pro',
    image: UAE_IMAGE,
    shortDescription: 'High-altitude satellite-to-drone transition over the Arabian Gulf coastline.',
    imagePrompt:
      'High-altitude aerial photography of the United Arab Emirates coastline where sweeping golden desert sand dunes meet vivid turquoise ocean water and sculpted coastal islands, crisp morning sunlight, sharp topographic shadows, National Geographic aerial documentary aesthetic, shot on Phase One XF IQ4 150MP, 35mm lens, natural color grading --ar 16:9 --style raw --v 6.1',
    animationPrompt:
      'Slow, steady forward aerial drone glide at high altitude over the coastline. Gentle turquoise ocean waves lapping against the golden sand bank. Subtle wind ripples moving across the desert crests. Zero camera shake, smooth documentary gimbal motion.',
    settings: 'CFG Scale: 6.5 · Motion Strength: 4/10 · Frame Rate: 24fps · Upscale: 4K Crisp',
    camera: 'Top-down 65° oblique aerial tilt, slow forward dolly, 35mm focal length',
    aspectRatio: '16:9 (3840 × 2160)',
    editingNotes:
      'Layered subtle wind ambience at -18dB with a low warm cello drone. Added animated SVG topographic contour lines in DaVinci Resolve Fusion to highlight the coastal shelf depth before fading into the raw AI motion clip.',
    duration: '04:18',
    viewsCount: '2.8M views',
    youtubeUrl: 'https://www.youtube.com',
    coordinates: "25°12'N · 55°16'E"
  },
  {
    id: 'prompt-titanic-discovery',
    title: 'Titanic Discovery — Abyssal Spotlight Pass',
    category: 'History',
    aiModel: 'Midjourney v6.1 + Runway Gen-3 Alpha',
    videoModel: 'Runway Gen-3 Alpha',
    image: TITANIC_IMAGE,
    shortDescription: 'Volumetric deep-sea submersible lighting revealing the historic bow at 3,800m.',
    imagePrompt:
      'Cinematic deep-sea documentary still of the historic Titanic ship bow resting on the dark silt ocean floor, illuminated by two warm tungsten spotlight beams from an exploration submersible in the foreground, floating marine snow particles, deep Prussian blue underwater falloff, IMAX underwater cinematography, high contrast --ar 16:9 --style raw --v 6.1',
    animationPrompt:
      'Extremely slow submersible camera push-in toward the ship bow. Volumetric spotlight beams sweep gently from left to right across the rusted railings while fine underwater silt particles drift upward in the current.',
    settings: 'Motion Bucket: 3 · Keyframe Lock: First & Last Frame · Seed: 4829104 · 24fps',
    camera: 'Wide-angle 24mm underwater housing lens, slow dolly forward + 3° pan',
    aspectRatio: '16:9 (Cinema Widescreen)',
    editingNotes:
      'Applied a subtle halation glow to the submersible lamps and mixed authentic hydrophone sonar pings every 6 seconds to establish scale and depth.',
    duration: '06:42',
    viewsCount: '1.9M views',
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
    image: UAE_IMAGE,
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
    purpose: 'Generating base keyframes, anime adventure worlds, and consistent `--sref` style palettes.',
    exampleProject: 'UAE From Above & AI Visual Stories',
    examplePromptId: 'prompt-uae-above'
  },
  {
    name: 'Flux 1.1 Pro',
    category: 'IMAGE',
    purpose: 'High-precision architectural geometry, map typography, and macro instrument renders.',
    exampleProject: 'The Cartographer’s Compass',
    examplePromptId: 'prompt-cinematic-cartography'
  },
  {
    name: 'Kling 1.6 Pro',
    category: 'VIDEO',
    purpose: 'Long-horizon aerial camera glides and realistic water/sail physics from still frames.',
    exampleProject: 'UAE From Above',
    examplePromptId: 'prompt-uae-above'
  },
  {
    name: 'Runway Gen-3 Alpha',
    category: 'VIDEO',
    purpose: 'Controlled first-to-last keyframe transitions and atmospheric underwater lighting.',
    exampleProject: 'Titanic Discovery',
    examplePromptId: 'prompt-titanic-discovery'
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
    purpose: 'Paced documentary narration, character voice prototyping, and bespoke ocean foley.',
    exampleProject: 'Titanic Discovery',
    examplePromptId: 'prompt-titanic-discovery'
  },
  {
    name: 'Notion & Custom Storyboards',
    category: 'WRITING',
    purpose: 'Scripting 60-second narrative hooks, pacing shot lists, and cataloging prompt seeds.',
    exampleProject: 'All apex.ai Shorts',
    examplePromptId: 'prompt-animation-voyage'
  },
  {
    name: 'DaVinci Resolve & After Effects',
    category: 'EDITING',
    purpose: 'Color matching clips, adding animated map route overlays, sound design, and final mastering.',
    exampleProject: 'UAE From Above',
    examplePromptId: 'prompt-uae-above'
  }
];

export const FREE_GUIDES_DATA: GuideItem[] = [
  {
    id: 'guide-geography',
    title: 'How I Create AI Geography Videos',
    shortDescription:
      'My complete workflow for turning satellite maps and historical data into sweeping aerial AI documentaries.',
    readTime: '6 min guide',
    category: 'Geography Workflow',
    coverVariant: 'geography',
    steps: [
      {
        stepNumber: '01',
        heading: 'Start with real cartography & elevation references',
        body: 'Before writing a single prompt, I capture real coastline shapes and elevation angles using satellite views. Passing a clean silhouette reference keeps the AI grounded in real-world geography rather than inventing random islands.',
        proTip: 'Use a 65° oblique aerial angle instead of straight 90° top-down for dramatic horizon depth.'
      },
      {
        stepNumber: '02',
        heading: 'Lock the sunlight direction across every shot',
        body: 'Specify exact time-of-day lighting (e.g., "crisp morning sunlight from the east, long topographic dune shadows") in every prompt so cuts between wide and close-up aerials feel filmed on the same flight.',
        proTip: 'Append "--style raw" to avoid over-saturated fantasy skies in documentary pieces.'
      },
      {
        stepNumber: '03',
        heading: 'Animate with slow, single-axis drone motion',
        body: 'When bringing aerial stills into Kling or Runway, request only ONE camera movement—such as a slow forward glide. Complex multi-axis spins break geographical scale.',
        proTip: 'Keep motion strength between 3 and 5 so coastlines remain razor-sharp.'
      }
    ],
    sampleTemplate:
      '[Location/Terrain] seen from high-altitude oblique aerial perspective, [Primary Geological Features], crisp morning sunlight casting subtle topographic shadows, shot on medium format aerial camera, 35mm lens, natural documentary color grading --ar 16:9 --style raw'
  },
  {
    id: 'guide-shorts',
    title: 'How I Create Cinematic AI Shorts',
    shortDescription:
      'Structuring 50-second vertical visual stories that hook viewers in the first 2 seconds without chaotic editing.',
    readTime: '5 min guide',
    category: 'Shorts & Pacing',
    coverVariant: 'shorts',
    steps: [
      {
        stepNumber: '01',
        heading: 'Design the 2-second visual anchor',
        body: 'Every high-retention Short begins with a single unmistakable visual contrast—like a warm submersible spotlight cutting through pitch-black ocean water, or a brass compass snapping north.',
        proTip: 'Compose vertical 9:16 frames with the main subject in the upper-middle third so captions never cover the action.'
      },
      {
        stepNumber: '02',
        heading: 'Pace cuts every 3.5 to 4.5 seconds',
        body: 'AI video clips look best in their first 4 seconds before morphing artifacts appear. Write scripts where each sentence corresponds to one deliberate 4-second visual beat.',
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
      'Camera: Slow steady dolly forward. Scene: The wooden ship glides gently across the water, white canvas sails billow in the wind, and clouds drift slowly across the horizon.'
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

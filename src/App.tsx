/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import {
  HERO_IMAGE,
  FEATURED_VIDEOS,
  SHORTS_VIDEOS,
  PROMPTS_DATA,
  AI_TOOLS_DATA,
  FREE_GUIDES_DATA,
  PromptItem,
  GuideItem,
  ShortVideo
} from './data/apexData';
import {
  CompassIcon,
  SunSymbol,
  CloudDoodle,
  WaveDivider,
  RopeDivider,
  StepMapIllustration,
  StepShipIllustration,
  StepTreasureIllustration,
  HorizonShipIllustration,
  GuideCoverIllustration
} from './components/AdventureIllustrations';
import { PromptDetailModal } from './components/PromptDetailModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { GuideReaderModal } from './components/GuideReaderModal';

type PromptCategoryFilter =
  | 'All'
  | 'Geography'
  | 'History'
  | 'Visual Stories'
  | 'Animation'
  | 'Cinematic AI'
  | 'Satisfying AI';

const PROMPT_CATEGORIES: PromptCategoryFilter[] = [
  'All',
  'Geography',
  'History',
  'Visual Stories',
  'Animation',
  'Cinematic AI',
  'Satisfying AI'
];

const TOOL_CATEGORIES: Array<'IMAGE' | 'VIDEO' | 'VOICE' | 'WRITING' | 'EDITING'> = [
  'IMAGE',
  'VIDEO',
  'VOICE',
  'WRITING',
  'EDITING'
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    subtitle: string;
    image: string;
    videoUrl?: string;
    duration: string;
    category: string;
    coordinates?: string;
    prompt?: PromptItem;
  } | null>(null);
  const [promptFilter, setPromptFilter] = useState<PromptCategoryFilter>('All');
  const [activeShortId, setActiveShortId] = useState<string | null>(null);

  const filteredPrompts =
    promptFilter === 'All'
      ? PROMPTS_DATA
      : PROMPTS_DATA.filter((p) => p.category === promptFilter);

  const openPromptById = (promptId: string) => {
    const found = PROMPTS_DATA.find((p) => p.id === promptId) || PROMPTS_DATA[0];
    setSelectedPrompt(found);
  };

  const handleOpenShort = (short: ShortVideo) => {
    const linkedPrompt = PROMPTS_DATA.find((p) => p.id === short.promptId);
    setActiveVideoModal({
      title: short.title,
      subtitle: short.hookText,
      image: short.image || HERO_IMAGE,
      videoUrl: short.videoUrl,
      duration: short.duration,
      category: `YouTube Short · ${short.category}`,
      prompt: linkedPrompt
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#E0F2FE] selection:text-[#0066CC]">
      {/* ==================================================
          NAVIGATION (Clean White Top Bar, Sticky, 3-Zone Contract)
         ================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="text-xl md:text-2xl font-extrabold tracking-tight text-[#111111] whitespace-nowrap"
          >
            apex.ai
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#111111]"
          >
            <a
              href="#videos"
              className="hover:text-[#0066CC] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Videos
            </a>
            <a
              href="#prompts"
              className="hover:text-[#0066CC] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Prompts
            </a>
            <a
              href="#guides"
              className="hover:text-[#0066CC] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              Free Guides
            </a>
            <a
              href="#tools"
              className="hover:text-[#0066CC] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              AI Tools
            </a>
            <a
              href="#about"
              className="hover:text-[#0066CC] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              About
            </a>
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111111] text-white text-xs sm:text-sm font-bold hover:bg-[#0066CC] transition-colors whitespace-nowrap shrink-0"
            >
              <span>YouTube ↗</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-11 h-11 rounded-lg border border-neutral-200 flex items-center justify-center text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-lg font-bold text-[#111111]">
              <a
                href="#videos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-[#0066CC]"
              >
                Videos
              </a>
              <a
                href="#prompts"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-[#0066CC]"
              >
                Prompts
              </a>
              <a
                href="#guides"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-[#0066CC]"
              >
                Free Guides
              </a>
              <a
                href="#tools"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-[#0066CC]"
              >
                AI Tools
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#0066CC]"
              >
                About
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ==================================================
            HERO SECTION
           ================================================== */}
        <section className="relative bg-white pt-14 pb-20 md:pt-24 md:pb-32 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#111111]">
                ✦ AI STORIES, IN MOTION.
              </p>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
                <CompassIcon className="w-4 h-4" />
                <span>LOG 01 · 16°42&apos;N · 142°18&apos;E</span>
              </div>
            </div>

            <h1
              className="text-5xl sm:text-7xl md:text-[84px] font-extrabold tracking-[-0.035em] text-[#111111] leading-[1.03] max-w-4xl mb-8"
              style={{ textWrap: 'balance' }}
            >
              Create stories.
              <br />
              Bring them to life{' '}
              <span className="text-[#0066CC]">with AI.</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10 font-normal">
              Explore AI-generated stories, animated videos, prompts and
              step-by-step workflows behind the videos on apex.ai.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#videos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#111111] text-white text-sm sm:text-base font-bold hover:bg-[#0066CC] hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <span>Watch the videos →</span>
              </a>

              <a
                href="#prompts"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-[#111111] border border-neutral-300 text-sm sm:text-base font-bold hover:border-[#111111] hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <span>Explore free prompts</span>
              </a>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-neutral-500 tracking-wide mb-14 md:mb-20">
              AI Videos • Animation • Stories • Shorts
            </div>

            {/* Hero Illustration */}
            <div className="relative w-full">
              <div className="hidden md:block absolute -top-7 left-8 z-10 animate-drift-cloud pointer-events-none">
                <CloudDoodle className="w-24 h-12" />
              </div>
              <div className="hidden md:block absolute -top-6 right-12 z-10 pointer-events-none">
                <SunSymbol className="w-9 h-9" />
              </div>

              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200 bg-[#F8FAFC]">
                <img
                  src={HERO_IMAGE}
                  alt="AI creator adventure world showing blue ocean, sailing ship, and cartography lines"
                  referrerPolicy="no-referrer"
                  className="w-full h-[300px] sm:h-[440px] md:h-[540px] object-cover"
                />

                <div className="bg-white/95 backdrop-blur-xs border-t border-neutral-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111111]">
                    <CompassIcon className="w-4 h-4 shrink-0" />
                    <span>Original Adventure World Keyframe</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-neutral-500 font-normal">
                      Created with Midjourney v6.1 &amp; Kling 1.6
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openPromptById('prompt-animation-voyage')}
                    className="text-xs font-bold text-[#0066CC] hover:text-[#111111] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Inspect Hero Prompt &amp; Seed →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider />

        {/* ==================================================
            SECTION — MADE WITH APEX.AI (01 / STORIES & VISUALS)
            Example 01: TITANIC: DISCOVERY OF THE WRECK (replaces UAE)
           ================================================== */}
        <section id="videos" className="bg-white py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-20 md:mb-28">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-2">
                <span>MADE WITH APEX.AI</span>
              </div>
              <div className="text-xs font-mono font-semibold text-neutral-400 tracking-widest uppercase mb-5">
                01 / STORIES &amp; VISUALS
              </div>
              <h2
                className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.06]"
                style={{ textWrap: 'balance' }}
              >
                See what AI can create.
              </h2>
            </div>

            <div className="space-y-24 md:space-y-36">
              {FEATURED_VIDEOS.map((video, index) => {
                const isReversed = index % 2 === 1;
                const linkedPrompt = PROMPTS_DATA.find((p) => p.id === video.promptId);

                return (
                  <article
                    key={video.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                  >
                    {/* Large Visual Column */}
                    <div
                      className={`lg:col-span-7 ${
                        isReversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div
                        onClick={() =>
                          setActiveVideoModal({
                            title: video.title,
                            subtitle: video.subtitle,
                            image: video.image,
                            videoUrl: video.videoUrl,
                            duration: video.duration,
                            category: video.category,
                            coordinates: video.coordinates,
                            prompt: linkedPrompt
                          })
                        }
                        className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC] cursor-pointer"
                      >
                        <img
                          src={video.image}
                          alt={video.title}
                          referrerPolicy="no-referrer"
                          className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                        />

                        {/* Subtle play bar indicator */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-bold shadow-xs group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>{video.primaryButtonLabel || 'Watch video →'} ({video.duration})</span>
                          </div>
                          <span className="text-xs font-mono text-white/90">
                            {video.coordinates}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Text Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                        <span>EXAMPLE {video.number}</span>
                        <span>·</span>
                        <span className="font-semibold text-[#0066CC]">{video.category}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mb-3">
                        {video.title}
                      </h3>

                      <p className="text-lg font-semibold text-[#111111] mb-4">
                        {video.subtitle}
                      </p>

                      <p className="text-base text-neutral-600 leading-relaxed mb-8">
                        {video.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-6">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveVideoModal({
                              title: video.title,
                              subtitle: video.subtitle,
                              image: video.image,
                              videoUrl: video.videoUrl,
                              duration: video.duration,
                              category: video.category,
                              coordinates: video.coordinates,
                              prompt: linkedPrompt
                            })
                          }
                          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-extrabold text-[#111111] hover:text-[#0066CC] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>{video.primaryButtonLabel || 'Watch video →'}</span>
                        </button>

                        {video.secondaryLinkLabel && (
                          <button
                            type="button"
                            onClick={() => openPromptById(video.promptId)}
                            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0066CC] hover:text-[#111111] transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <span>{video.secondaryLinkLabel}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION — SHORTS (4 Vertical 9:16 Videos, Swipeable on Mobile)
           ================================================== */}
        <section className="bg-white py-20 md:py-28 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="text-xs font-mono font-semibold text-[#0066CC] uppercase tracking-widest mb-3">
                  VERTICAL FORMAT · 9:16
                </div>
                <h2
                  className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.05]"
                  style={{ textWrap: 'balance' }}
                >
                  Short stories.
                  <br />
                  Big ideas.
                </h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-600 max-w-md">
                AI-generated stories built for YouTube Shorts and Reels.
              </p>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
              {SHORTS_VIDEOS.map((short, idx) => {
                const isPreviewing = activeShortId === short.id;
                return (
                  <div
                    key={short.id}
                    className="min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-start flex flex-col"
                  >
                    <div
                      onClick={() => handleOpenShort(short)}
                      onMouseEnter={() => setActiveShortId(short.id)}
                      onMouseLeave={() => setActiveShortId(null)}
                      className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC] cursor-pointer mb-4"
                    >
                      <img
                        src={short.image}
                        alt={short.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isPreviewing ? 'scale-105' : 'scale-100'
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex flex-col justify-between p-5">
                        <div className="flex items-center justify-between text-xs font-mono text-white/90">
                          <span>0{idx + 1}</span>
                          <span>{short.duration}</span>
                        </div>

                        <div>
                          <p className="text-white font-extrabold text-lg leading-snug mb-1.5">
                            {short.title}
                          </p>
                          <p className="text-white/80 text-xs line-clamp-2 mb-3">
                            {short.hookText}
                          </p>
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Watch Short</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
                      <span className="font-semibold text-[#111111]">{short.category}</span>
                      <span className="font-mono tabular-nums">{short.views}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <RopeDivider />

        {/* ==================================================
            SECTION — PROCESS (02 / HOW IT'S MADE)
           ================================================== */}
        <section className="bg-white py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-3">
                02 / HOW IT&apos;S MADE
              </div>
              <h2
                className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.06]"
                style={{ textWrap: 'balance' }}
              >
                From idea to animation.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* STEP 01 */}
              <div className="flex flex-col justify-between pt-6 border-t-2 border-[#111111]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111] font-mono tabular-nums">
                      01
                    </span>
                    <StepMapIllustration />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111] mb-4">
                    CREATE YOUR SCENES.
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    Use prompts and reference images to build the world,
                    characters and key moments.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-400">
                  WORLD &amp; KEYFRAME DESIGN
                </div>
              </div>

              {/* STEP 02 */}
              <div className="flex flex-col justify-between pt-6 border-t-2 border-[#111111]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0066CC] font-mono tabular-nums">
                      02
                    </span>
                    <StepShipIllustration />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111] mb-4">
                    BRING THEM TO LIFE.
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    Turn still images into animated scenes with AI video tools.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-400">
                  CAMERA &amp; MOTION PHYSICS
                </div>
              </div>

              {/* STEP 03 */}
              <div className="flex flex-col justify-between pt-6 border-t-2 border-[#111111]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111] font-mono tabular-nums">
                      03
                    </span>
                    <StepTreasureIllustration />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111] mb-4">
                    BUILD THE STORY.
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    Add narration, sound, music, captions and editing to create
                    the final video.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-400">
                  SOUND DESIGN &amp; FINAL CUT
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider />

        {/* ==================================================
            SECTION — PROMPTS (03 / FREE RESOURCES)
           ================================================== */}
        <section id="prompts" className="bg-white py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-3">
                  03 / FREE RESOURCES
                </div>
                <h2
                  className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.06] mb-4"
                  style={{ textWrap: 'balance' }}
                >
                  Use my prompts.
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Explore the prompts, references and settings behind selected
                  apex.ai videos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-neutral-200">
              {PROMPT_CATEGORIES.map((category) => {
                const active = promptFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setPromptFilter(category)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#111111] text-white'
                        : 'bg-transparent text-neutral-600 hover:text-[#111111] hover:bg-neutral-100'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {filteredPrompts.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedPrompt(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC] mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="font-bold text-[#0066CC]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{item.aiModel}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#111111] group-hover:text-[#0066CC] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>

                  <div className="mt-auto pt-1">
                    <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#111111] group-hover:text-[#0066CC] transition-colors">
                      Free prompts &amp; guide →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION — AI TOOLS
           ================================================== */}
        <section id="tools" className="bg-white py-20 md:py-32 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-3">
                CREATOR STACK
              </div>
              <h2
                className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.06] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Tools I use to create.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600">
                The exact generative models and editing software behind my workflow.
                Independent creator notes—no sponsorships.
              </p>
            </div>

            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {TOOL_CATEGORIES.map((category) => {
                const toolsInCategory = AI_TOOLS_DATA.filter(
                  (t) => t.category === category
                );
                return (
                  <div
                    key={category}
                    className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                  >
                    <div className="lg:col-span-3">
                      <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0066CC]">
                        {category}
                      </span>
                    </div>

                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {toolsInCategory.map((tool) => (
                        <div key={tool.name} className="flex flex-col">
                          <h3 className="text-xl font-extrabold text-[#111111] mb-2">
                            {tool.name}
                          </h3>
                          <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                            {tool.purpose}
                          </p>
                          <div className="mt-auto text-xs text-neutral-500">
                            <span>Example project: </span>
                            <button
                              type="button"
                              onClick={() => openPromptById(tool.examplePromptId)}
                              className="font-bold text-[#111111] underline underline-offset-4 hover:text-[#0066CC] transition-colors cursor-pointer"
                            >
                              {tool.exampleProject}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION — FREE GUIDES
           ================================================== */}
        <section id="guides" className="bg-white py-20 md:py-32 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-3">
                STEP-BY-STEP WORKFLOWS
              </div>
              <h2
                className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.06]"
                style={{ textWrap: 'balance' }}
              >
                Learn how I make them.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {FREE_GUIDES_DATA.map((guide) => (
                <article
                  key={guide.id}
                  onClick={() => setSelectedGuide(guide)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="mb-5">
                    <GuideCoverIllustration variant={guide.coverVariant} />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="font-semibold text-[#0066CC]">{guide.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{guide.readTime}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#111111] group-hover:text-[#0066CC] transition-colors mb-2">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {guide.shortDescription}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#111111] group-hover:text-[#0066CC] transition-colors">
                      Open free guide →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider />

        {/* ==================================================
            SECTION — ABOUT APEX.AI
           ================================================== */}
        <section id="about" className="bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0066CC] mb-4">
              <CompassIcon className="w-4 h-4" />
              <span>ABOUT APEX.AI</span>
            </div>

            <h2
              className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.08] mb-8"
              style={{ textWrap: 'balance' }}
            >
              Exploring new worlds
              <br />
              with artificial intelligence.
            </h2>

            <div className="space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl mb-10">
              <p>
                apex.ai is my creative space for experimenting with AI
                animation, visual storytelling and educational content.
              </p>
              <p>
                I use generative AI to turn ideas into images, animation and
                short films.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-base font-extrabold text-[#111111]">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0066CC] transition-colors"
              >
                YouTube →
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0066CC] transition-colors"
              >
                Instagram →
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION — YOUTUBE CTA
           ================================================== */}
        <section className="bg-[#F5FAFF] border-t border-b border-neutral-200 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0066CC] mb-4">
              <span>SET SAIL FOR THE NEXT STORY</span>
            </div>

            <h2
              className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-[#111111] leading-[1.06] mb-6"
              style={{ textWrap: 'balance' }}
            >
              The next adventure
              <br />
              is already rendering.
            </h2>

            <p className="text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed mb-9">
              Follow apex.ai on YouTube for new AI stories, experiments
              and visual adventures.
            </p>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#111111] text-white text-base font-bold hover:bg-[#E11D48] hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <span>Subscribe on YouTube →</span>
            </a>

            <div className="mt-10">
              <HorizonShipIllustration />
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================
          FOOTER
         ================================================== */}
      <footer className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-neutral-200">
            <div>
              <a
                href="#"
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] block mb-3"
              >
                apex.ai
              </a>
              <p className="text-sm text-neutral-500">
                AI stories, animation &amp; experiments.
              </p>
            </div>

            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-bold text-[#111111]"
            >
              <a href="#videos" className="hover:text-[#0066CC] transition-colors">
                Videos
              </a>
              <a href="#prompts" className="hover:text-[#0066CC] transition-colors">
                Prompts
              </a>
              <a href="#guides" className="hover:text-[#0066CC] transition-colors">
                Guides
              </a>
              <a href="#tools" className="hover:text-[#0066CC] transition-colors">
                AI Tools
              </a>
              <a href="#about" className="hover:text-[#0066CC] transition-colors">
                About
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0066CC] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0066CC] transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <span>© {new Date().getFullYear()} apex.ai. All rights reserved.</span>
            <span className="font-mono">CHARTED ON AN OPEN HORIZON</span>
          </div>
        </div>
      </footer>

      {/* ==================================================
          MODALS
         ================================================== */}
      <PromptDetailModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
        onSelectPrompt={(next) => setSelectedPrompt(next)}
        onPlayVideo={(p) => {
          setSelectedPrompt(null);
          setActiveVideoModal({
            title: p.title,
            subtitle: p.shortDescription,
            image: p.image,
            videoUrl: p.videoUrl,
            duration: p.duration,
            category: p.category,
            coordinates: p.coordinates,
            prompt: p
          });
        }}
      />

      <VideoPlayerModal
        video={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        onOpenPrompt={(p) => setSelectedPrompt(p)}
      />

      <GuideReaderModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
        onSelectGuide={(next) => setSelectedGuide(next)}
      />
    </div>
  );
}

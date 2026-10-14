import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ArrowLeft, Play } from 'lucide-react';
import { PromptItem, PROMPTS_DATA } from '../data/apexData';
import { CompassIcon } from './AdventureIllustrations';

interface PromptDetailModalProps {
  prompt: PromptItem | null;
  onClose: () => void;
  onSelectPrompt: (prompt: PromptItem) => void;
  onPlayVideo?: (prompt: PromptItem) => void;
}

export function PromptDetailModal({
  prompt,
  onClose,
  onSelectPrompt,
  onPlayVideo
}: PromptDetailModalProps) {
  const [copiedImage, setCopiedImage] = useState(false);
  const [copiedAnimation, setCopiedAnimation] = useState(false);

  useEffect(() => {
    setCopiedImage(false);
    setCopiedAnimation(false);
  }, [prompt]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (prompt) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [prompt, onClose]);

  if (!prompt) return null;

  const copyToClipboard = (text: string, type: 'image' | 'animation') => {
    navigator.clipboard.writeText(text);
    if (type === 'image') {
      setCopiedImage(true);
      setTimeout(() => setCopiedImage(false), 2200);
    } else {
      setCopiedAnimation(true);
      setTimeout(() => setCopiedAnimation(false), 2200);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prompt-page-title"
    >
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs border-b border-neutral-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#0066CC] transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to apex.ai</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
            <CompassIcon className="w-4 h-4" />
            <span>PROMPT LOGBOOK</span>
            <span>·</span>
            <span>{prompt.coordinates}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close prompt page"
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Clean White Editorial Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0066CC] mb-4">
          <span>03 / BEHIND THE SCENES &amp; PROMPTS</span>
          <span className="text-neutral-300">·</span>
          <span className="text-[#111111]">{prompt.category}</span>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-500 font-mono">{prompt.duration}</span>
        </div>

        <h1
          id="prompt-page-title"
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.1] mb-4"
          style={{ textWrap: 'balance' }}
        >
          {prompt.title}
        </h1>

        <p className="text-lg text-neutral-600 max-w-2xl mb-12 leading-relaxed">
          {prompt.shortDescription}
        </p>

        {/* 1. REFERENCE IMAGE */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              REFERENCE IMAGE
            </h2>
            <span className="text-xs font-mono text-neutral-400">
              Selected Keyframe ({prompt.aspectRatio})
            </span>
          </div>
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC]">
            <img
              src={prompt.image}
              alt={prompt.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[520px] object-cover"
            />
          </div>
        </div>

        {/* 2. IMAGE PROMPT + [Copy Prompt] */}
        <div className="mb-12 pb-12 border-b border-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                IMAGE PROMPT
              </h2>
              <p className="text-sm font-semibold text-[#111111]">
                Keyframe generation syntax
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(prompt.imagePrompt, 'image')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                copiedImage
                  ? 'bg-[#0066CC] text-white'
                  : 'bg-[#111111] text-white hover:bg-[#0066CC]'
              }`}
            >
              {copiedImage ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Prompt</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
          <div className="p-6 rounded-xl bg-[#F8FAFC] border border-neutral-200 font-mono text-sm text-[#111111] leading-relaxed select-all">
            {prompt.imagePrompt}
          </div>
        </div>

        {/* 3. ANIMATION PROMPT + [Copy Prompt] */}
        <div className="mb-12 pb-12 border-b border-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                ANIMATION PROMPT
              </h2>
              <p className="text-sm font-semibold text-[#111111]">
                Image-to-video motion instructions ({prompt.videoModel})
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(prompt.animationPrompt, 'animation')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                copiedAnimation
                  ? 'bg-[#0066CC] text-white'
                  : 'bg-[#111111] text-white hover:bg-[#0066CC]'
              }`}
            >
              {copiedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Prompt</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
          <div className="p-6 rounded-xl bg-[#F8FAFC] border border-neutral-200 font-mono text-sm text-[#111111] leading-relaxed select-all">
            {prompt.animationPrompt}
          </div>
        </div>

        {/* 4. TECHNICAL SPECIFICATIONS GRID: AI MODEL, SETTINGS, CAMERA, ASPECT RATIO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 pb-12 border-b border-neutral-200">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              AI MODEL
            </h3>
            <p className="text-base font-bold text-[#111111]">{prompt.aiModel}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              ASPECT RATIO
            </h3>
            <p className="text-base font-bold text-[#111111] font-mono tabular-nums">
              {prompt.aspectRatio}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              SETTINGS
            </h3>
            <p className="text-sm font-medium text-neutral-700 font-mono leading-relaxed">
              {prompt.settings}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
              CAMERA
            </h3>
            <p className="text-sm font-medium text-neutral-700 leading-relaxed">
              {prompt.camera}
            </p>
          </div>
        </div>

        {/* 5. EDITING NOTES */}
        <div className="mb-14 pb-12 border-b border-neutral-200">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            EDITING NOTES
          </h2>
          <p className="text-base text-neutral-800 leading-relaxed max-w-3xl">
            {prompt.editingNotes}
          </p>
        </div>

        {/* 6. FINAL RESULT */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              FINAL RESULT
            </h2>
            <span className="text-xs font-mono text-[#0066CC]">
              Duration: {prompt.duration} · High-Resolution Master
            </span>
          </div>

          <div
            onClick={() => onPlayVideo && onPlayVideo(prompt)}
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC] cursor-pointer group"
          >
            <img
              src={prompt.image}
              alt={`${prompt.title} final result`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-between p-6">
              <div className="flex items-center justify-between text-xs font-mono text-white/90">
                <span>CLICK TO PLAY ACTUAL FOOTAGE ({prompt.duration})</span>
                <span className="tabular-nums">{prompt.viewsCount}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-lg">{prompt.title}</p>
                  <p className="text-white/80 text-xs">{prompt.camera}</p>
                </div>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs font-bold group-hover:bg-[#0066CC] group-hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video ({prompt.duration})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other Prompts */}
        <div className="pt-8 border-t border-neutral-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            MORE PROMPTS FROM APEX.AI
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROMPTS_DATA.filter((item) => item.id !== prompt.id)
              .slice(0, 2)
              .map((other) => (
                <button
                  key={other.id}
                  onClick={() => onSelectPrompt(other)}
                  className="text-left group p-4 rounded-xl border border-neutral-200 hover:border-[#111111] transition-colors cursor-pointer flex items-center gap-4"
                >
                  <img
                    src={other.image}
                    alt={other.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-14 rounded-lg object-cover shrink-0 border border-neutral-200"
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-[#0066CC] font-semibold mb-0.5">
                      {other.category}
                    </p>
                    <p className="text-sm font-bold text-[#111111] truncate group-hover:text-[#0066CC] transition-colors">
                      {other.title}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

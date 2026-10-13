import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { PromptItem } from '../data/apexData';
import { CompassIcon } from './AdventureIllustrations';

interface VideoPlayerModalProps {
  video: {
    title: string;
    subtitle: string;
    image: string;
    duration: string;
    category: string;
    coordinates?: string;
    prompt?: PromptItem;
  } | null;
  onClose: () => void;
  onOpenPrompt: (prompt: PromptItem) => void;
}

export function VideoPlayerModal({
  video,
  onClose,
  onOpenPrompt
}: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    setIsPlaying(true);
    setProgress(15);
  }, [video]);

  useEffect(() => {
    if (!video || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 300);
    return () => clearInterval(interval);
  }, [video, isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className="w-full max-w-5xl bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xl">
        {/* Top Clean Editorial Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <div className="flex items-center gap-3 min-w-0">
            <CompassIcon className="w-5 h-5 shrink-0" />
            <div className="truncate">
              <span className="text-sm font-extrabold text-[#111111] mr-2">
                {video.title}
              </span>
              <span className="text-xs text-neutral-500 hidden sm:inline">
                · {video.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {video.prompt && (
              <button
                onClick={() => {
                  const targetPrompt = video.prompt!;
                  onClose();
                  onOpenPrompt(targetPrompt);
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#F0F9FF] text-[#0066CC] text-xs font-bold hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                See Prompts & Workflow →
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Close video player"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Motion Viewport */}
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative w-full aspect-video bg-[#F8FAFC] overflow-hidden cursor-pointer select-none"
        >
          <img
            src={video.image}
            alt={video.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
              isPlaying ? 'scale-110' : 'scale-100'
            }`}
          />

          {/* Subtle Cinema Scrim & Player Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between text-xs font-mono text-white/90">
              <span>APEX.AI RENDERING ENGINE · 4K 24FPS</span>
              {video.coordinates && <span>{video.coordinates}</span>}
            </div>

            <div>
              <p className="text-white text-xl sm:text-2xl font-extrabold mb-1">
                {video.title}
              </p>
              <p className="text-white/85 text-sm mb-5 max-w-2xl">
                {video.subtitle}
              </p>

              {/* Progress scrubber */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100))));
                }}
                className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden mb-4 cursor-pointer"
              >
                <div
                  className="h-full bg-[#38BDF8] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#111111] text-xs font-bold hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    aria-label="Toggle audio"
                    className="p-2 rounded-lg bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <span className="text-xs font-mono text-white/90 tabular-nums">
                    {video.duration}
                  </span>
                </div>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-bold text-white hover:text-[#38BDF8] transition-colors"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

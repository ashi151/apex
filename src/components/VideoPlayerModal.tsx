import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowUpRight, Compass } from 'lucide-react';
import { PromptItem } from '../data/apexData';
import { CompassIcon } from './AdventureIllustrations';

interface VideoPlayerModalProps {
  video: {
    title: string;
    subtitle: string;
    description?: string;
    image: string;
    fallbackImage?: string;
    duration: string;
    category: string;
    coordinates?: string;
    prompt?: PromptItem;
    youtubeUrl?: string;
    youtubeId?: string;
  } | null;
  onClose: () => void;
  onOpenPrompt: (prompt: PromptItem) => void;
}

function extractYouTubeId(url?: string, explicitId?: string): string | null {
  if (explicitId) return explicitId;
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

export function VideoPlayerModal({
  video,
  onClose,
  onOpenPrompt
}: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18);
  const [imgSrc, setImgSrc] = useState<string>('');

  const youtubeId = video ? extractYouTubeId(video.youtubeUrl, video.youtubeId) : null;
  const directYouTubeUrl = video?.youtubeUrl || (youtubeId ? `https://www.youtube.com/watch?v=MEwu2ZLYJgA` : 'https://www.youtube.com');

  useEffect(() => {
    if (video) {
      setImgSrc(video.image);
    }
  }, [video]);

  useEffect(() => {
    setIsPlaying(true);
    setProgress(15);
  }, [video]);

  useEffect(() => {
    if (!video || !isPlaying || youtubeId) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 300);
    return () => clearInterval(interval);
  }, [video, isPlaying, youtubeId]);

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
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className="w-full max-w-5xl bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xl my-auto">
        {/* Top Clean Editorial Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <CompassIcon className="w-5 h-5 shrink-0" />
            <div className="truncate">
              <span className="text-sm font-extrabold text-[#111111] mr-2 truncate">
                {video.title}
              </span>
              <span className="text-xs text-neutral-500 hidden sm:inline">
                · {video.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {video.prompt && (
              <button
                onClick={() => {
                  const targetPrompt = video.prompt!;
                  onClose();
                  onOpenPrompt(targetPrompt);
                }}
                className="hidden md:inline-flex px-3.5 py-1.5 rounded-lg bg-[#F0F9FF] text-[#0066CC] text-xs font-bold hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                See Prompts &amp; Workflow →
              </button>
            )}

            <a
              href={directYouTubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-bold text-[#111111] hover:border-[#111111] hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              <span>Watch on YouTube</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close video player"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        {youtubeId ? (
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            />
          </div>
        ) : (
          /* Fallback Motion Viewport for non-YouTube projects */
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative w-full aspect-video bg-[#F8FAFC] overflow-hidden cursor-pointer select-none"
          >
            <img
              src={imgSrc || video.image}
              alt={video.title}
              onError={() => {
                if (video.fallbackImage && imgSrc !== video.fallbackImage) {
                  setImgSrc(video.fallbackImage);
                }
              }}
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
        )}

        {/* Video Information Panel */}
        <div className="p-5 sm:p-7 bg-white border-t border-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="font-semibold text-[#0066CC]">{video.category}</span>
              {video.coordinates && (
                <>
                  <span>·</span>
                  <span>{video.coordinates}</span>
                </>
              )}
            </div>

            <div className="text-xs font-mono text-neutral-500">
              {video.duration} · 4K UHD
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] mb-2 leading-tight">
            {video.title}
          </h3>

          <p className="text-sm sm:text-base font-semibold text-[#111111] mb-3">
            {video.subtitle}
          </p>

          {video.description && (
            <p className="text-sm text-neutral-600 leading-relaxed mb-5 max-w-4xl">
              {video.description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={directYouTubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-bold hover:bg-[#E11D48] transition-colors whitespace-nowrap"
              >
                <span>Open in YouTube ↗</span>
              </a>

              {video.prompt && (
                <button
                  type="button"
                  onClick={() => {
                    const targetPrompt = video.prompt!;
                    onClose();
                    onOpenPrompt(targetPrompt);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 text-xs font-bold text-[#111111] hover:border-[#111111] hover:text-[#0066CC] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Behind the scenes &amp; Prompts →</span>
                </button>
              )}
            </div>

            <span className="text-xs text-neutral-400 font-mono">
              APEX.AI EMBEDDED PLAYER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

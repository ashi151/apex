import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Maximize2 } from 'lucide-react';
import { PromptItem } from '../data/apexData';
import { CompassIcon } from './AdventureIllustrations';

interface VideoPlayerModalProps {
  video: {
    title: string;
    subtitle: string;
    image: string;
    videoUrl?: string;
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(21);
  const [useFallbackAnimation, setUseFallbackAnimation] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setIsPlaying(true);
    setCurrentTime(0);
    setUseFallbackAnimation(false);
  }, [video]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const targetPercent = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = targetPercent * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className="w-full max-w-5xl bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Minimal Editorial Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white">
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
                Behind the scenes →
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

        {/* Video Player Container */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center group select-none">
          {!useFallbackAnimation && video.videoUrl ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.image}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
              onError={() => setUseFallbackAnimation(true)}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer"
            />
          ) : (
            <div
              onClick={togglePlay}
              className="relative w-full h-full cursor-pointer overflow-hidden"
            >
              <img
                src={video.image}
                alt={video.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-[21000ms] ease-linear ${
                  isPlaying ? 'scale-115' : 'scale-100'
                }`}
              />
            </div>
          )}

          {/* Submersible Telemetry Watermark Overlay */}
          <div className="absolute top-4 left-5 pointer-events-none">
            <span className="text-[11px] font-mono tracking-widest text-[#38BDF8] bg-black/60 px-2.5 py-1 rounded">
              ARGO DEPTH: 3,810M · 41°43&apos;N 49°56&apos;W
            </span>
          </div>

          <div className="absolute top-4 right-5 pointer-events-none">
            <span className="text-[11px] font-mono tracking-wider text-amber-300 bg-black/60 px-2.5 py-1 rounded">
              RMS TITANIC – 12,460 FT
            </span>
          </div>

          {/* Custom Sleek Transport Controls */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 flex flex-col justify-end opacity-95 group-hover:opacity-100 transition-opacity">
            {/* Scrubber Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-2 bg-white/25 rounded-full overflow-hidden mb-3.5 cursor-pointer relative hover:h-2.5 transition-all"
            >
              <div
                className="h-full bg-[#0066CC] transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  aria-label="Restart video"
                  className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <span className="font-mono text-white/90 tabular-nums ml-1">
                  {formatTime(currentTime)} / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-white/70 font-mono text-[11px] hidden sm:inline">
                  AI CINEMATIC EXPEDITION RECREATION
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.requestFullscreen) {
                        videoRef.current.requestFullscreen();
                      }
                    }
                  }}
                  aria-label="Fullscreen"
                  className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-5 sm:p-6 bg-white border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-[#111111] mb-1">
              {video.title}
            </h3>
            <p className="text-xs text-neutral-600 max-w-2xl leading-relaxed">
              {video.subtitle}
            </p>
          </div>

          {video.prompt && (
            <button
              onClick={() => {
                const targetPrompt = video.prompt!;
                onClose();
                onOpenPrompt(targetPrompt);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-bold hover:bg-[#0066CC] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Behind the scenes →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

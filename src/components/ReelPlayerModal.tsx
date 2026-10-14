import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { ShortVideo } from '../data/apexData';
import { CompassIcon } from './AdventureIllustrations';

interface ReelPlayerModalProps {
  short: ShortVideo | null;
  onClose: () => void;
}

export function ReelPlayerModal({ short, onClose }: ReelPlayerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (short) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [short, onClose]);

  if (!short) return null;

  const embedUrl = short.embedUrl || 'https://www.instagram.com/reel/Dd8u78mgLM3/embed';
  const externalUrl = short.externalUrl || 'https://www.instagram.com/reel/Dd8u78mgLM3/';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={short.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 bg-white shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <CompassIcon className="w-4 h-4 shrink-0" />
            <div className="truncate">
              <span className="text-sm font-extrabold text-[#111111] truncate block">
                {short.title}
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                {short.category} · {short.views}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-bold text-[#111111] hover:border-[#111111] hover:text-[#0066CC] transition-colors whitespace-nowrap"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close Instagram Reel player"
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Responsive 9:16 Instagram Reel Embed Container */}
        <div className="relative w-full aspect-[9/16] min-h-[500px] max-h-[72vh] bg-black overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            title={short.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Editorial Bar */}
        <div className="px-5 py-3.5 bg-[#F8FAFC] border-t border-neutral-200 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-neutral-500 truncate">
            {short.hookText}
          </div>
          <a
            href={externalUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#0066CC] hover:underline whitespace-nowrap shrink-0"
          >
            Watch on Instagram ↗
          </a>
        </div>
      </div>
    </div>
  );
}

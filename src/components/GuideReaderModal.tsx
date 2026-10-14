import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Copy, Check } from 'lucide-react';
import { GuideItem, FREE_GUIDES_DATA } from '../data/apexData';
import { CompassIcon, GuideCoverIllustration } from './AdventureIllustrations';

interface GuideReaderModalProps {
  guide: GuideItem | null;
  onClose: () => void;
  onSelectGuide: (guide: GuideItem) => void;
}

export function GuideReaderModal({
  guide,
  onClose,
  onSelectGuide
}: GuideReaderModalProps) {
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  useEffect(() => {
    setCopiedTemplate(false);
  }, [guide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (guide) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [guide, onClose]);

  if (!guide) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(guide.sampleTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs border-b border-neutral-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#0066CC] transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Free Guides</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
            <CompassIcon className="w-4 h-4" />
            <span>CREATOR HANDBOOK</span>
            <span>·</span>
            <span>{guide.readTime}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close guide"
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editorial Body */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0066CC] mb-4">
          <span>FREE CREATOR GUIDE</span>
          <span className="text-neutral-300">·</span>
          <span className="text-[#111111]">{guide.category}</span>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-500">{guide.readTime}</span>
        </div>

        <h1
          id="guide-modal-title"
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.1] mb-6"
          style={{ textWrap: 'balance' }}
        >
          {guide.title}
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          {guide.shortDescription}
        </p>

        <div className="mb-14 rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC]">
          {guide.image ? (
            <img
              src={guide.image}
              alt={guide.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[440px] object-cover"
            />
          ) : (
            <GuideCoverIllustration variant={guide.coverVariant} />
          )}
        </div>

        {/* Step-by-Step Breakdown */}
        <div className="space-y-12 mb-14">
          {guide.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="pb-10 border-b border-neutral-200 last:border-b-0"
            >
              <div className="text-3xl font-extrabold text-[#0066CC] font-mono mb-3">
                {step.stepNumber}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                {step.heading}
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                {step.body}
              </p>
              <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] text-sm text-[#111111]">
                <span className="font-bold text-[#0066CC] mr-2">Navigator’s Note:</span>
                {step.proTip}
              </div>
            </div>
          ))}
        </div>

        {/* Copyable Prompt Template */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-neutral-200 mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                READY-TO-USE TEMPLATE
              </h3>
              <p className="text-sm font-bold text-[#111111]">
                Copy and customize for your own scenes
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-bold hover:bg-[#0066CC] transition-colors cursor-pointer whitespace-nowrap"
            >
              {copiedTemplate ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Template</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Template</span>
                </>
              )}
            </button>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200 font-mono text-sm text-[#111111] leading-relaxed select-all">
            {guide.sampleTemplate}
          </div>
        </div>

        {/* Next Guide Navigation */}
        <div className="pt-8 border-t border-neutral-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
            CONTINUE LEARNING
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FREE_GUIDES_DATA.filter((g) => g.id !== guide.id)
              .slice(0, 2)
              .map((other) => (
                <button
                  key={other.id}
                  onClick={() => onSelectGuide(other)}
                  className="text-left p-5 rounded-xl border border-neutral-200 hover:border-[#111111] transition-colors cursor-pointer group"
                >
                  <p className="text-xs text-[#0066CC] font-semibold mb-1">
                    {other.readTime}
                  </p>
                  <p className="text-base font-bold text-[#111111] group-hover:text-[#0066CC] transition-colors">
                    {other.title} →
                  </p>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

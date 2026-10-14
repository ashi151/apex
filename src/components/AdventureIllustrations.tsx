import React from 'react';

export function CompassIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" stroke="#111111" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="10" stroke="#0066CC" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M16 3V6M16 26V29M3 16H6M26 16H29" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="16,6 19,16 16,14.5 13,16" fill="#E11D48" />
      <polygon points="16,26 19,16 16,17.5 13,16" fill="#111111" />
      <circle cx="16" cy="16" r="2" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
    </svg>
  );
}

export function SunSymbol({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="6.5" fill="#F59E0B" stroke="#111111" strokeWidth="1.5" />
      <path
        d="M16 3V6.5M16 25.5V29M3 16H6.5M25.5 16H29M6.8 6.8L9.3 9.3M22.7 22.7L25.2 25.2M25.2 6.8L22.7 9.3M9.3 22.7L6.8 25.2"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloudDoodle({ className = 'w-20 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26 44H94C102.837 44 110 36.8366 110 28C110 20.167 104.364 13.6487 96.916 12.266C94.451 5.695 88.118 1 80.667 1C72.521 1 65.662 6.615 63.816 14.19C60.752 12.16 57.07 11 53.11 11C42.987 11 34.714 18.84 33.91 28.76C31.49 27.64 28.81 27 26 27C16.611 27 9 34.611 9 44H26Z"
        fill="#F0F9FF"
        stroke="#111111"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M44 33C44 29.5 47 27 50.5 27C54 27 56.5 29.8 56.5 33C56.5 35.5 54.5 37.5 52 37.5"
        stroke="#0066CC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveDivider({ className = 'w-full h-6' }: { className?: string }) {
  return (
    <div className="w-full overflow-hidden py-4 select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1200 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} animate-wave-subtle`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 14C30 4 60 4 90 14C120 24 150 24 180 14C210 4 240 4 270 14C300 24 330 24 360 14C390 4 420 4 450 14C480 24 510 24 540 14C570 4 600 4 630 14C660 24 690 24 720 14C750 4 780 4 810 14C840 24 870 24 900 14C930 4 960 4 990 14C1020 24 1050 24 1080 14C1110 4 1140 4 1170 14C1185 19 1195 21 1200 14"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M360 14C390 4 420 4 450 14C480 24 510 24 540 14C570 4 600 4 630 14"
          stroke="#0066CC"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}

export function RopeDivider() {
  return (
    <div className="w-full flex items-center justify-center gap-4 py-6 select-none" aria-hidden="true">
      <div className="h-[1px] flex-1 bg-neutral-200" />
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
        <CompassIcon className="w-4 h-4" />
        <span>GRAND MERIDIAN LOG</span>
      </div>
      <div className="h-[1px] flex-1 bg-neutral-200" />
    </div>
  );
}

export function StepMapIllustration() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-28">
      <path
        d="M22 26L66 16L114 28L158 18V104L114 114L66 102L22 112V26Z"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M66 16V102M114 28V114" stroke="#E5E7EB" strokeWidth="1.5" />
      <path
        d="M40 72C44 62 54 60 58 72H40Z"
        fill="#E0F2FE"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M48 76C68 86 78 46 98 54C114 60 122 48 136 42"
        stroke="#0066CC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 5"
      />
      <path
        d="M132 36L144 48M144 36L132 48"
        stroke="#E11D48"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="44" cy="40" r="8" fill="#FEF3C7" stroke="#111111" strokeWidth="1.5" />
      <path d="M44 33V47M37 40H51" stroke="#111111" strokeWidth="1.2" />
    </svg>
  );
}

export function StepShipIllustration() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-28 animate-float-ship">
      <circle cx="140" cy="32" r="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M90 18V86" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M90 24C116 28 124 50 90 74Z"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M91 45H111" stroke="#0066CC" strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M86 28C66 36 60 54 86 72Z"
        fill="#F0F9FF"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M90 18L72 22L90 26" fill="#E11D48" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M48 82H132L118 102H62L48 82Z"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M56 90H124" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M24 104C38 96 52 96 66 104C80 112 94 112 108 104C122 96 136 96 150 104"
        stroke="#0066CC"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StepTreasureIllustration() {
  return (
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-28">
      <path
        d="M90 14L93 22L101 25L93 28L90 36L87 28L79 25L87 22L90 14Z"
        fill="#F59E0B"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="46"
        y="62"
        width="88"
        height="44"
        rx="4"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2"
      />
      <path
        d="M46 62C46 44 64 38 90 38C116 38 134 44 134 62H46Z"
        fill="#F0F9FF"
        stroke="#111111"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M66 40V106M114 40V106" stroke="#111111" strokeWidth="2" />
      <rect
        x="82"
        y="55"
        width="16"
        height="18"
        rx="3"
        fill="#F59E0B"
        stroke="#111111"
        strokeWidth="1.75"
      />
      <circle cx="90" cy="64" r="2" fill="#111111" />
      <polygon points="148,46 160,53 148,60" fill="#0066CC" />
    </svg>
  );
}

export function HorizonShipIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto pt-6 pb-2 select-none" aria-hidden="true">
      <svg viewBox="0 0 600 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <circle cx="300" cy="96" r="38" fill="#FEF3C7" />
        <path
          d="M262 96C262 75.0132 279.013 58 300 58C320.987 58 338 75.0132 338 96"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <path
          d="M90 96C102 74 122 72 136 96H90Z"
          fill="#E0F2FE"
          stroke="#111111"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M455 96C468 68 485 64 504 82C514 74 526 78 534 96H455Z"
          fill="#E0F2FE"
          stroke="#111111"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <g className="animate-drift-cloud">
          <path
            d="M140 44H190C196 44 200 39 200 34C200 29 195 25 190 25C188 18 181 14 173 14C164 14 157 20 156 28C153 27 149 27 145 29C138 31 135 38 140 44Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="1.5"
          />
        </g>
        <g className="animate-drift-cloud-reverse">
          <path
            d="M395 38H440C445 38 449 34 449 29C449 24 445 20 440 20C438 14 432 10 425 10C417 10 411 15 410 22C402 22 395 29 395 38Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="1.5"
          />
        </g>
        <path
          d="M40 112C120 124 200 102 275 98"
          stroke="#0066CC"
          strokeWidth="2"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
        <g className="animate-float-ship">
          <path d="M300 36V86" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M300 40C322 44 328 62 300 78Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M301 58H317" stroke="#0066CC" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M296 44C280 50 276 64 296 76Z"
            fill="#F0F9FF"
            stroke="#111111"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M300 36L285 39L300 42" fill="#E11D48" stroke="#111111" strokeWidth="1.5" />
          <path
            d="M268 84H332L322 96H278L268 84Z"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
        <line x1="20" y1="96" x2="580" y2="96" stroke="#111111" strokeWidth="1.75" strokeLinecap="round" />
        <path
          d="M160 108C185 102 210 102 235 108C260 114 285 114 310 108C335 102 360 102 385 108C410 114 435 114 460 108"
          stroke="#0066CC"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M230 120C255 115 280 115 305 120C330 125 355 125 380 120"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function GuideCoverIllustration({
  variant
}: {
  variant: 'geography' | 'shorts' | 'consistency' | 'img2vid' | 'prompts';
}) {
  return (
    <div className="w-full aspect-[16/10] bg-[#F8FAFC] border border-neutral-200 rounded-xl overflow-hidden flex items-center justify-center relative group-hover:border-[#111111] transition-colors">
      <span className="absolute top-3 left-3.5 font-mono text-[11px] text-neutral-400">
        {variant === 'geography' && 'GUIDE 01 · DEEP-SEA'}
        {variant === 'shorts' && 'GUIDE 02 · 9:16'}
        {variant === 'consistency' && 'GUIDE 03 · --SREF'}
        {variant === 'img2vid' && 'GUIDE 04 · MOTION'}
        {variant === 'prompts' && 'GUIDE 05 · SYNTAX'}
      </span>

      {variant === 'geography' && (
        <svg viewBox="0 0 240 140" fill="none" className="w-4/5 h-4/5">
          <ellipse cx="120" cy="78" rx="76" ry="34" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
          <ellipse cx="120" cy="78" rx="54" ry="23" fill="#E0F2FE" stroke="#0066CC" strokeWidth="1.75" />
          <path
            d="M88 78C98 52 114 50 126 68C136 58 148 62 154 78H88Z"
            fill="#FEF3C7"
            stroke="#111111"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="176" cy="36" r="10" fill="#F59E0B" stroke="#111111" strokeWidth="1.75" />
        </svg>
      )}

      {variant === 'shorts' && (
        <svg viewBox="0 0 240 140" fill="none" className="w-4/5 h-4/5">
          <rect x="44" y="24" width="42" height="92" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.75" />
          <rect x="154" y="24" width="42" height="92" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.75" />
          <rect x="95" y="16" width="50" height="108" rx="7" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" />
          <circle cx="120" cy="64" r="12" fill="#E0F2FE" stroke="#0066CC" strokeWidth="1.75" />
          <polygon points="117,59 126,64 117,69" fill="#0066CC" />
          <path d="M106 94H134M110 102H130" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {variant === 'consistency' && (
        <svg viewBox="0 0 240 140" fill="none" className="w-4/5 h-4/5">
          <rect x="34" y="38" width="52" height="64" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <rect x="94" y="38" width="52" height="64" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <rect x="154" y="38" width="52" height="64" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <circle cx="60" cy="64" r="10" fill="#0066CC" />
          <circle cx="120" cy="64" r="10" fill="#0066CC" />
          <circle cx="180" cy="64" r="10" fill="#0066CC" />
          <path d="M44 86H76M104 86H136M164 86H196" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <path d="M86 70H94M146 70H154" stroke="#E11D48" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      )}

      {variant === 'img2vid' && (
        <svg viewBox="0 0 240 140" fill="none" className="w-4/5 h-4/5">
          <rect x="34" y="34" width="68" height="72" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <path d="M50 84L66 64L86 84H50Z" fill="#E0F2FE" stroke="#111111" strokeWidth="1.5" />
          <path
            d="M112 70H144"
            stroke="#0066CC"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          <polygon points="142,65 152,70 142,75" fill="#0066CC" />
          <rect x="156" y="34" width="54" height="72" rx="6" fill="#F0F9FF" stroke="#0066CC" strokeWidth="2" />
          <polygon points="178,61 192,70 178,79" fill="#111111" />
        </svg>
      )}

      {variant === 'prompts' && (
        <svg viewBox="0 0 240 140" fill="none" className="w-4/5 h-4/5">
          <rect x="36" y="28" width="168" height="84" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
          <path d="M54 50H116" stroke="#0066CC" strokeWidth="3" strokeLinecap="round" />
          <path d="M126 50H174" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <path d="M54 68H154" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 86H104" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="176" cy="84" r="10" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1.75" />
        </svg>
      )}
    </div>
  );
}

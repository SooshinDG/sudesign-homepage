/**
 * DirectionMap — custom illustrated walking-direction schematic.
 * No external map service. Pure inline SVG with brand colours.
 * Aspect ratio 4:3  (viewBox 480 × 360)
 *
 * Route depicted:
 *   구일역 1번 출구  →  (east along main road)  →  (north on side street)  →  수디자인
 */
export default function DirectionMap() {
  return (
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="수디자인 도보 안내 지도"
      className="w-full h-full"
    >
      <defs>
        <filter id="dm-card-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0C0A07" floodOpacity="0.13" />
        </filter>
        <filter id="dm-pin-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#C9A87C" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* ── Background ── */}
      <rect width="480" height="360" fill="#F2EDE4" />

      {/* ── City blocks (slightly warmer / darker than road surface) ── */}
      <rect x="0"   y="0"   width="333" height="194" fill="#EAE4DA" />
      <rect x="360" y="0"   width="120" height="194" fill="#EAE4DA" />
      <rect x="0"   y="221" width="333" height="139" fill="#EAE4DA" />
      <rect x="360" y="221" width="120" height="139" fill="#EAE4DA" />

      {/* ── Secondary road lines (texture / context) ── */}
      <line x1="0"   y1="122" x2="333" y2="122" stroke="#D6CFC5" strokeWidth="0.5" />
      <line x1="172" y1="0"   x2="172" y2="194" stroke="#D6CFC5" strokeWidth="0.5" />

      {/* ── Main roads ── */}
      {/* Horizontal main road */}
      <rect x="0"   y="194" width="480" height="27" fill="#E1DAD0" />
      {/* Vertical side road */}
      <rect x="333" y="0"   width="27"  height="360" fill="#E1DAD0" />

      {/* Road edge lines */}
      <line x1="0"   y1="194" x2="480" y2="194" stroke="#C9C1B5" strokeWidth="0.7" />
      <line x1="0"   y1="221" x2="480" y2="221" stroke="#C9C1B5" strokeWidth="0.7" />
      <line x1="333" y1="0"   x2="333" y2="360" stroke="#C9C1B5" strokeWidth="0.7" />
      <line x1="360" y1="0"   x2="360" y2="360" stroke="#C9C1B5" strokeWidth="0.7" />

      {/* Road centre dashes (non-walking segments only) */}
      <line x1="0"   y1="207" x2="118" y2="207" stroke="#C9C1B5" strokeWidth="0.5" strokeDasharray="9,9" />
      <line x1="360" y1="207" x2="480" y2="207" stroke="#C9C1B5" strokeWidth="0.5" strokeDasharray="9,9" />
      <line x1="346" y1="221" x2="346" y2="360" stroke="#C9C1B5" strokeWidth="0.5" strokeDasharray="9,9" />

      {/* ── Walking path (gold dashed) ── */}
      {/* Station exit (118, 207) → east → (346, 207) → north → destination (346, 108) */}
      <path
        d="M 118,207 H 346 V 108"
        stroke="#C9A87C"
        strokeWidth="2.5"
        strokeDasharray="8,5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Directional arrows on path */}
      <polygon points="222,202 234,207 222,212" fill="#C9A87C" opacity="0.8" />
      <polygon points="341,163 346,152 351,163" fill="#C9A87C" opacity="0.8" />

      {/* Walking time badge */}
      <rect x="172" y="183" width="84" height="23" rx="11.5" fill="#1C1C1A" />
      <text
        x="214" y="198"
        textAnchor="middle"
        fontSize="9.5"
        fill="#C9A87C"
        fontWeight="500"
        letterSpacing="0.05em"
      >
        도보 약 8분
      </text>

      {/* ── Station ── */}
      {/* Subway symbol */}
      <circle cx="68" cy="207" r="21" fill="#1C1C1A" />
      <text
        x="68" y="212"
        textAnchor="middle"
        fontSize="15"
        fill="white"
        fontWeight="700"
      >
        M
      </text>

      {/* Connector line → exit circle */}
      <line x1="89" y1="207" x2="104" y2="207" stroke="#1C1C1A" strokeWidth="1.5" />
      <circle cx="113" cy="207" r="10" fill="white" stroke="#1C1C1A" strokeWidth="1.5" />
      <text
        x="113" y="211"
        textAnchor="middle"
        fontSize="8.5"
        fill="#1C1C1A"
        fontWeight="700"
      >
        1
      </text>

      {/* Station label */}
      <text
        x="68" y="238"
        textAnchor="middle"
        fontSize="10.5"
        fill="#1C1C1A"
        fontWeight="700"
        letterSpacing="0.02em"
      >
        구일역
      </text>
      <text
        x="113" y="238"
        textAnchor="start"
        fontSize="9.5"
        fill="#6B6460"
        letterSpacing="0.01em"
      >
        {' '}1번 출구
      </text>

      {/* ── Destination pin ── */}
      <g filter="url(#dm-pin-glow)">
        <path
          d="M346,108 C346,108 329,92 329,80 C329,69.5 336.8,62 346,62 C355.2,62 363,69.5 363,80 C363,92 346,108 346,108Z"
          fill="#C9A87C"
        />
        <circle cx="346" cy="80" r="7" fill="white" />
      </g>

      {/* Destination label card */}
      <rect x="306" y="112" width="80" height="27" rx="4" fill="white" filter="url(#dm-card-shadow)" />
      <text
        x="346" y="129"
        textAnchor="middle"
        fontSize="10.5"
        fill="#1C1C1A"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        수디자인
      </text>

      {/* ── North indicator ── */}
      <g transform="translate(451,30)">
        <circle cx="0" cy="0" r="14" fill="none" stroke="#C9A87C" strokeWidth="0.9" opacity="0.55" />
        <polygon points="-3,1 0,-9 3,1" fill="#6B6460" />
        <line x1="0" y1="1" x2="0" y2="7" stroke="#6B6460" strokeWidth="1.2" />
        <text
          x="0" y="21"
          textAnchor="middle"
          fontSize="7"
          fill="#9B9490"
          fontWeight="500"
          letterSpacing="0.1em"
        >
          N
        </text>
      </g>

      {/* ── Footnote ── */}
      <text
        x="20" y="348"
        fontSize="8"
        fill="#9B9490"
        letterSpacing="0.04em"
      >
        * 도보 이동 경로 기준
      </text>
    </svg>
  )
}

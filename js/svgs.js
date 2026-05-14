/* Shared SVG symbol definitions — injected into every page by main.js */

const SVG_DEFS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <symbol id="cup-outline" viewBox="0 0 60 70">
      <path d="M 12 14 L 48 14 L 44 64 Q 30 68 16 64 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M 10 14 Q 30 10 50 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M 14 11 L 14 5 Q 14 3 16 3 L 18 3 Q 20 3 20 5 L 20 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M 38 11 L 38 5 Q 38 3 40 3 L 42 3 Q 44 3 44 5 L 44 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </symbol>

    <symbol id="cup-with-straw" viewBox="0 0 60 70">
      <path d="M 10 18 L 50 18 L 45 64 Q 30 68 15 64 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M 8 18 Q 30 14 52 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="35" y1="18" x2="42" y2="2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="22" cy="50" r="2.5" fill="currentColor"/>
      <circle cx="30" cy="55" r="2.5" fill="currentColor"/>
      <circle cx="38" cy="50" r="2.5" fill="currentColor"/>
      <circle cx="26" cy="60" r="2.5" fill="currentColor"/>
      <circle cx="34" cy="60" r="2.5" fill="currentColor"/>
    </symbol>

    <symbol id="leaves" viewBox="0 0 100 120">
      <path d="M 50 10 Q 30 30 30 60 Q 30 80 50 90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M 50 15 Q 30 25 15 25 Q 25 35 35 35 Q 30 30 28 25" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 45 30 Q 25 35 12 40 Q 22 50 35 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 40 50 Q 20 55 8 60 Q 20 70 33 65" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M 38 70 Q 22 78 14 85 Q 25 92 38 85" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </symbol>

    <symbol id="star" viewBox="0 0 30 30">
      <path d="M 15 4 L 17 13 L 26 15 L 17 17 L 15 26 L 13 17 L 4 15 L 13 13 Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </symbol>

    <symbol id="heart" viewBox="0 0 30 30">
      <path d="M 15 24 Q 5 16 5 10 Q 5 5 10 5 Q 13 5 15 8 Q 17 5 20 5 Q 25 5 25 10 Q 25 16 15 24 Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </symbol>

    <symbol id="sparkle" viewBox="0 0 20 20">
      <line x1="10" y1="2" x2="10" y2="8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="10" y1="12" x2="10" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="2" y1="10" x2="8" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="12" y1="10" x2="18" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </symbol>

    <symbol id="big-cup-matcha" viewBox="0 0 280 380">
      <ellipse cx="140" cy="370" rx="105" ry="14" fill="rgba(45,61,31,0.15)"/>
      <ellipse cx="140" cy="45" rx="100" ry="14" fill="#e8e5db" stroke="#2d3d1f" stroke-width="2.5"/>
      <ellipse cx="140" cy="40" rx="100" ry="14" fill="#f5f2e8" stroke="#2d3d1f" stroke-width="2.5"/>
      <path d="M 50 50 L 65 360 Q 140 372 215 360 L 230 50 Z" fill="#7a9a52" stroke="#2d3d1f" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 52 60 L 67 320 Q 140 332 213 320 L 228 60 Z" fill="#8db05a"/>
      <path d="M 60 70 L 70 280" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="6" stroke-linecap="round"/>
      <g fill="#1f1810">
        <circle cx="80" cy="310" r="8"/><circle cx="100" cy="320" r="9"/>
        <circle cx="120" cy="315" r="8"/><circle cx="140" cy="325" r="9"/>
        <circle cx="160" cy="320" r="8"/><circle cx="180" cy="315" r="9"/>
        <circle cx="200" cy="320" r="8"/><circle cx="90" cy="335" r="7"/>
        <circle cx="115" cy="340" r="8"/><circle cx="140" cy="345" r="8"/>
        <circle cx="165" cy="340" r="8"/><circle cx="195" cy="335" r="7"/>
        <circle cx="105" cy="355" r="7"/><circle cx="135" cy="360" r="7"/>
        <circle cx="165" cy="355" r="7"/>
      </g>
      <text x="140" y="150" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="42" fill="#f5f2e8" font-weight="bold">Black</text>
      <text x="140" y="190" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="42" fill="#f5f2e8" font-weight="bold">Girl</text>
      <text x="140" y="230" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="42" fill="#f5f2e8" font-weight="bold">Boba</text>
      <text x="140" y="252" text-anchor="middle" font-family="Nunito, sans-serif" font-size="9" letter-spacing="2" fill="#f5f2e8" font-weight="800">BOBA TEA &amp; GOOD VIBES</text>
      <g transform="translate(125, 260)">
        <use href="#cup-with-straw" width="30" height="35" color="#f5f2e8"/>
      </g>
    </symbol>

    <symbol id="milktea-cup" viewBox="0 0 200 280">
      <ellipse cx="100" cy="272" rx="78" ry="10" fill="rgba(45,61,31,0.15)"/>
      <ellipse cx="100" cy="32" rx="75" ry="10" fill="#f5f2e8" stroke="#2d3d1f" stroke-width="2"/>
      <path d="M 30 35 L 40 264 Q 100 274 160 264 L 170 35 Z" fill="#d4a878" stroke="#2d3d1f" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 32 45 L 42 230 Q 100 240 158 230 L 168 45 Z" fill="#e8c499"/>
      <path d="M 38 50 L 44 200" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="round"/>
      <g fill="#1f1810">
        <circle cx="55" cy="225" r="6"/><circle cx="72" cy="232" r="7"/>
        <circle cx="90" cy="228" r="6"/><circle cx="108" cy="235" r="7"/>
        <circle cx="125" cy="228" r="6"/><circle cx="142" cy="232" r="6"/>
        <circle cx="65" cy="247" r="6"/><circle cx="85" cy="252" r="6"/>
        <circle cx="105" cy="255" r="6"/><circle cx="125" cy="252" r="6"/>
        <circle cx="145" cy="247" r="6"/>
      </g>
      <text x="100" y="115" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="26" fill="#2d3d1f">Black</text>
      <text x="100" y="140" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="26" fill="#2d3d1f">Girl</text>
      <text x="100" y="165" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="26" fill="#2d3d1f">Boba</text>
      <text x="100" y="180" text-anchor="middle" font-family="Nunito, sans-serif" font-size="6" letter-spacing="1.5" fill="#2d3d1f" font-weight="800">BOBA TEA &amp; GOOD VIBES</text>
    </symbol>

    <symbol id="tote-bag" viewBox="0 0 140 160">
      <path d="M 20 50 L 30 150 Q 70 156 110 150 L 120 50 Z" fill="#f0eadb" stroke="#2d3d1f" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M 45 50 Q 45 25 70 25 Q 95 25 95 50" fill="none" stroke="#2d3d1f" stroke-width="2.2" stroke-linecap="round"/>
      <text x="70" y="82" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="14" fill="#2d3d1f">Black</text>
      <text x="70" y="98" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="14" fill="#2d3d1f">Girl</text>
      <text x="70" y="114" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="14" fill="#2d3d1f">Boba</text>
      <text x="70" y="124" text-anchor="middle" font-family="Nunito, sans-serif" font-size="4" letter-spacing="0.5" fill="#2d3d1f" font-weight="800">BOBA TEA &amp; GOOD VIBES</text>
    </symbol>

    <symbol id="tshirt" viewBox="0 0 140 140">
      <path d="M 30 35 L 10 50 L 20 65 L 35 55 L 35 125 L 105 125 L 105 55 L 120 65 L 130 50 L 110 35 L 90 30 Q 85 38 70 38 Q 55 38 50 30 Z" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2" stroke-linejoin="round"/>
    </symbol>

    <symbol id="tumbler" viewBox="0 0 100 160">
      <path d="M 25 25 L 30 145 Q 50 152 70 145 L 75 25 Z" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2"/>
      <ellipse cx="50" cy="25" rx="25" ry="6" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2"/>
      <path d="M 35 50 L 38 130" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3" stroke-linecap="round"/>
    </symbol>

    <symbol id="hat" viewBox="0 0 140 100">
      <path d="M 30 60 Q 40 25 70 25 Q 100 25 110 60 L 105 70 Q 70 78 35 70 Z" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2"/>
      <path d="M 20 70 Q 70 85 120 70 L 115 80 Q 70 92 25 80 Z" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2"/>
    </symbol>

    <symbol id="stickers" viewBox="0 0 140 140">
      <rect x="25" y="25" width="40" height="40" rx="6" fill="#c4d3a8" stroke="#2d3d1f" stroke-width="2" transform="rotate(-8 45 45)"/>
      <rect x="70" y="20" width="40" height="40" rx="6" fill="#f5f2e8" stroke="#2d3d1f" stroke-width="2" transform="rotate(5 90 40)"/>
      <rect x="30" y="75" width="40" height="40" rx="6" fill="#f5f2e8" stroke="#2d3d1f" stroke-width="2" transform="rotate(6 50 95)"/>
      <rect x="75" y="80" width="40" height="40" rx="6" fill="#c4d3a8" stroke="#2d3d1f" stroke-width="2" transform="rotate(-4 95 100)"/>
      <text x="45" y="50" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="14" fill="#2d3d1f" transform="rotate(-8 45 45)">BGB</text>
      <text x="95" y="105" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="14" fill="#2d3d1f" transform="rotate(-4 95 100)">✦</text>
    </symbol>

    <symbol id="journal" viewBox="0 0 120 140">
      <rect x="20" y="15" width="80" height="115" rx="4" fill="#f0eadb" stroke="#2d3d1f" stroke-width="2.2"/>
      <line x1="30" y1="15" x2="30" y2="130" stroke="#2d3d1f" stroke-width="2.2"/>
      <text x="65" y="78" text-anchor="middle" font-family="Caveat Brush, cursive" font-size="16" fill="#2d3d1f">BGB</text>
    </symbol>

    <symbol id="gift" viewBox="0 0 140 140">
      <rect x="20" y="50" width="100" height="80" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2"/>
      <rect x="15" y="40" width="110" height="20" fill="currentColor" stroke="#2d3d1f" stroke-width="2.2"/>
      <line x1="70" y1="40" x2="70" y2="130" stroke="#2d3d1f" stroke-width="2.2"/>
      <path d="M 50 40 Q 40 20 50 15 Q 60 18 70 40 Q 80 18 90 15 Q 100 20 90 40" fill="none" stroke="#2d3d1f" stroke-width="2.2" stroke-linejoin="round"/>
    </symbol>
  </defs>
</svg>`;

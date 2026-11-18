/* ================================================================
   IKON — menggantikan Font Awesome dengan SVG inline terpusat.
   Pemakaian: <span data-icon="nama" class="text-goldBright"></span>
   ================================================================ */

const ICON_PATHS = {
    'arrow-right': ['<path d="M5 12h14"/>', '<path d="M13 6l6 6-6 6"/>'],
    'book-open': ['<path d="M12 6a9 9 0 00-6-2.3c-1 0-2 .2-3 .5v14.3a9 9 0 013-.5c2.3 0 4.4.9 6 2.3m0-14.3a9 9 0 016-2.3c1 0 2 .2 3 .5v14.3a9 9 0 00-3-.5c-2.3 0-4.4.9-6 2.3m0-14.3v14.3"/>'],
    'check-circle': ['<circle cx="12" cy="12" r="9"/>', '<path d="M8 12l3 3 5-6"/>'],
    'chevron-left': ['<path d="M15 18l-6-6 6-6"/>'],
    'chevron-right': ['<path d="M9 18l6-6-6-6"/>'],
    'circle-check': ['<circle cx="12" cy="12" r="9"/>', '<path d="M8 12l3 3 5-6"/>'],
    'circle-info': ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 11v5"/>', '<path d="M12 8h.01"/>'],
    'circle-xmark': ['<circle cx="12" cy="12" r="9"/>', '<path d="M15 9l-6 6"/>', '<path d="M9 9l6 6"/>'],
    'clipboard-check': ['<path d="M9 4h6v3H9z"/>', '<path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>', '<path d="M9 14l2 2 4-4"/>'],
    'code': ['<path d="M8 8l-4 4 4 4"/>', '<path d="M16 8l4 4-4 4"/>', '<path d="M14 4l-4 16"/>'],
    'compass': ['<circle cx="12" cy="12" r="9"/>', '<path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>'],
    'diagram-project': ['<path d="M5 3v5h5"/>', '<path d="M5 8h14v5"/>', '<path d="M19 13v5H5"/>', '<path d="M12 13v5"/>'],
    'expand': ['<path d="M8 3H3v5"/>', '<path d="M16 3h5v5"/>', '<path d="M8 21H3v-5"/>', '<path d="M16 21h5v-5"/>'],
    'google': ['<circle cx="12" cy="12" r="9"/>', '<path d="M3 12h18"/>', '<path d="M12 3a14 14 0 010 18"/>', '<path d="M12 3a14 14 0 000 18"/>'],
    'hand-pointer': ['<path d="M8 13V5a2 2 0 014 0v6"/>', '<path d="M12 11V7a2 2 0 014 0v5"/>', '<path d="M16 12V9a2 2 0 014 0v7a6 6 0 01-6 6h-2a6 6 0 01-5-3l-3-5a2 2 0 013-2l2 3"/>'],
    'handshake-angle': ['<path d="M3 12l3-3 4 2 4-2 3 3"/>', '<path d="M7 11l3 3 2-2 2 2 3-3"/>', '<path d="M12 14v4"/>'],
    'house': ['<path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"/>', '<path d="M9 21v-7h6v7"/>'],
    'landmark': ['<path d="M3 10h18"/>', '<path d="M5 10l7-6 7 6"/>', '<path d="M4 21h16"/>', '<path d="M6 10v8M10 10v8M14 10v8M18 10v8"/>'],
    'list-ul': ['<path d="M8 6h13M8 12h13M8 18h13"/>', '<circle cx="3.5" cy="6" r="1"/>', '<circle cx="3.5" cy="12" r="1"/>', '<circle cx="3.5" cy="18" r="1"/>'],
    'microphone-lines': ['<rect x="9" y="3" width="6" height="11" rx="3"/>', '<path d="M5 11a7 7 0 0014 0"/>', '<path d="M12 18v3M8 21h8"/>'],
    'mosque': ['<path d="M4 21V10a8 8 0 0116 0v11"/>', '<path d="M2 21h20"/>', '<path d="M9 21v-6a3 3 0 016 0v6"/>', '<path d="M12 2v2"/>'],
    'mountain': ['<path d="M2 20l7-11 4 6 2-3 7 8H2z"/>'],
    'palette': ['<path d="M12 3a9 9 0 000 18h1.5a2 2 0 001.5-3.3 2 2 0 012-3.2H19a2 2 0 002-2A9 9 0 0012 3z"/>', '<circle cx="7.5" cy="11" r="1"/>', '<circle cx="10" cy="7" r="1"/>', '<circle cx="15" cy="7.5" r="1"/>'],
    'rotate-left': ['<path d="M3 12a9 9 0 109-9 9 9 0 00-6 2.5L3 8"/>', '<path d="M3 3v5h5"/>'],
    'school': ['<path d="M12 3L2 8l10 5 10-5-10-5z"/>', '<path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>', '<path d="M22 8v5"/>'],
    'scroll': ['<path d="M6 4h11a3 3 0 013 3v12a2 2 0 01-2 2H7a3 3 0 01-3-3V6a2 2 0 012-2z"/>', '<path d="M4 6h13M8 10h7M8 14h7"/>'],
    'star-and-crescent': ['<path d="M20 15a8 8 0 11-9-11 7 7 0 009 11z"/>', '<path d="M17 3l.6 1.8 1.9.6-1.9.6L17 8l-.6-1.9-1.9-.6 1.9-.6L17 3z"/>'],
    'users': ['<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>', '<circle cx="9" cy="7" r="4"/>', '<path d="M22 21v-2a4 4 0 00-3-3.9"/>', '<path d="M16 3.1a4 4 0 010 7.8"/>'],
    'user-shield': ['<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>', '<path d="M12 8v5"/>', '<path d="M9.5 10.5L12 13l2.5-2.5"/>'],
    'xmark': ['<path d="M6 6l12 12M18 6L6 18"/>'],
    'info': ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 11v5"/>', '<path d="M12 8h.01"/>'],

    /* ---- Ikon tambahan untuk modul game, pedoman & periode Makkah ---- */
    'arrow-down': ['<path d="M12 4v16"/>', '<path d="M6 14l6 6 6-6"/>'],
    'arrow-down-1-9': ['<path d="M4 7h10M4 12h7M4 17h4"/>', '<path d="M17 4v16"/>', '<path d="M14 7l3-3 3 3"/>', '<path d="M14 17h6M17 14v6"/>'],
    'award': ['<circle cx="12" cy="9" r="6"/>', '<path d="M9 14l-2 7 5-3 5 3-2-7"/>'],
    'bolt': ['<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>'],
    'book-quran': ['<path d="M12 6a9 9 0 00-6-2.3c-1 0-2 .2-3 .5v14.3a9 9 0 013-.5c2.3 0 4.4.9 6 2.3m0-14.3a9 9 0 016-2.3c1 0 2 .2 3 .5v14.3a9 9 0 00-3-.5c-2.3 0-4.4.9-6 2.3m0-14.3v14.3"/>', '<path d="M12 6v14"/>'],
    'book-sparkles': ['<path d="M12 6a9 9 0 00-6-2.3c-1 0-2 .2-3 .5v14.3a9 9 0 013-.5c2.3 0 4.4.9 6 2.3m0-14.3a9 9 0 016-2.3c1 0 2 .2 3 .5v14.3a9 9 0 00-3-.5c-2.3 0-4.4.9-6 2.3m0-14.3v14.3"/>', '<path d="M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3z"/>'],
    'bookmark': ['<path d="M6 3h12v18l-6-4-6 4V3z"/>'],
    'chalkboard-user': ['<rect x="3" y="4" width="18" height="12" rx="2"/>', '<path d="M12 16v4M8 20h8"/>', '<circle cx="12" cy="9" r="2"/>'],
    'chart-line': ['<path d="M3 3v18h18"/>', '<path d="M7 15l4-5 3 3 5-7"/>'],
    'check': ['<path d="M5 12l4 4L19 6"/>'],
    'check-double': ['<path d="M2 12l4 4 8-9"/>', '<path d="M10 15l2 2 9-10"/>'],
    'chevron-down': ['<path d="M6 9l6 6 6-6"/>'],
    'chevron-up': ['<path d="M6 15l6-6 6 6"/>'],
    'clipboard-question': ['<path d="M9 4h6v3H9z"/>', '<path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>', '<path d="M10 11a2 2 0 114 1c-1 1-2 1-2 3"/>', '<path d="M12 18h.01"/>'],
    'clock': ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 7v5l3 2"/>'],
    'coins': ['<ellipse cx="9" cy="7" rx="6" ry="3"/>', '<path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/>', '<path d="M15 10c3 0 5 1.2 5 3v4c0 1.7-2.7 3-6 3-1 0-2-.1-3-.4"/>'],
    'copy': ['<rect x="8" y="8" width="13" height="13" rx="2"/>', '<path d="M16 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2h3"/>'],
    'crown': ['<path d="M3 7l4 4 5-7 5 7 4-4-2 11H5L3 7z"/>', '<path d="M5 21h14"/>'],
    'exclamation': ['<path d="M12 4v10"/>', '<path d="M12 18h.01"/>'],
    'external-link': ['<path d="M14 4h6v6"/>', '<path d="M20 4l-9 9"/>', '<path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>'],
    'feather': ['<path d="M20 4C10 4 5 9 5 15v5h5c6 0 11-5 11-15z"/>', '<path d="M5 20L20 4"/>'],
    'file-check': ['<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>', '<path d="M14 2v6h6"/>', '<path d="M9 15l2 2 4-4"/>'],
    'file-export': ['<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>', '<path d="M14 2v6h6"/>', '<path d="M12 12v7M9 15l3-3 3 3"/>'],
    'film': ['<rect x="3" y="4" width="18" height="16" rx="2"/>', '<path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>'],
    'fire': ['<path d="M12 22a7 7 0 007-7c0-4-3-6-4-9-1 2-3 3-4 5-1-1-1-3-1-4-2 2-5 5-5 8a7 7 0 007 7z"/>'],
    'flag-checkered': ['<path d="M4 21V4"/>', '<path d="M4 4h13v9H4z"/>', '<path d="M4 13h13M10.5 4v9M4 8.5h13"/>', '<path d="M17 4l3 2-3 2"/>'],
    'heart': ['<path d="M20.8 5.6a5.5 5.5 0 00-7.8 0L12 6.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/>'],
    'kaaba': ['<path d="M4 20h16"/>', '<path d="M6 20V9l6-5 6 5v11"/>', '<path d="M9 20v-6h6v6"/>', '<path d="M6 9h12"/>'],
    'laptop-code': ['<rect x="4" y="4" width="16" height="12" rx="2"/>', '<path d="M2 20h20"/>', '<path d="M10 8l-2 2 2 2M14 8l2 2-2 2"/>'],
    'layer-group': ['<path d="M12 3L2 8l10 5 10-5-10-5z"/>', '<path d="M2 13l10 5 10-5"/>', '<path d="M2 17l10 5 10-5"/>'],
    'lightbulb': ['<path d="M9 18h6M10 22h4"/>', '<path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/>'],
    'list-check': ['<path d="M9 6h12M9 12h12M9 18h12"/>', '<path d="M3 6l2 2 3-3"/>', '<path d="M3 14l2 2 3-3"/>'],
    'list-ol': ['<path d="M10 6h11M10 12h11M10 18h11"/>', '<path d="M4 5h1v4M3 15h2l-2 3h2"/>'],
    'magnifying-glass': ['<circle cx="11" cy="11" r="7"/>', '<path d="M20 20l-4-4"/>'],
    'magnifying-glass-chart': ['<circle cx="10" cy="10" r="6"/>', '<path d="M19 19l-5-5"/>', '<path d="M7 11l2-2 2 2 2-3"/>'],
    'map': ['<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/>', '<path d="M9 3v15M15 6v15"/>'],
    'map-location-dot': ['<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/>', '<path d="M9 3v15M15 6v15"/>', '<circle cx="12" cy="11" r="2"/>'],
    'print': ['<path d="M6 9V3h12v6"/>', '<path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>', '<path d="M6 14h12v7H6z"/>'],
    'puzzle-piece': ['<path d="M9 3h6v3a2 2 0 104 0V3h3v6h-3a2 2 0 100 4h3v8h-6v-3a2 2 0 10-4 0v3H3v-6h3a2 2 0 100-4H3V3h6z"/>'],
    'rotate-right': ['<path d="M21 12a9 9 0 11-3-6.7L21 8"/>', '<path d="M21 3v5h-5"/>'],
    'scale-balanced': ['<path d="M12 3v18M5 7h14M8 21h8"/>', '<path d="M5 7l-3 6h6L5 7zM19 7l-3 6h6l-3-6z"/>'],
    'scissors': ['<circle cx="6" cy="6" r="3"/>', '<circle cx="6" cy="18" r="3"/>', '<path d="M8.5 8.5L20 20M8.5 15.5L20 4"/>'],
    'shield-check': ['<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>', '<path d="M9 12l2 2 4-4"/>'],
    'shield-heart': ['<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>', '<path d="M12 14a2.5 2.5 0 002.5-2.5c0-1.5-2.5-3-2.5-3s-2.5 1.5-2.5 3A2.5 2.5 0 0012 14z"/>'],
    'sparkles': ['<path d="M12 3l.7 2.3L15 6l-2.3.7L12 9l-.7-2.3L9 6l2.3-.7L12 3z"/>', '<path d="M19 13l.5 1.5L21 15l-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13z"/>', '<path d="M5 13l.5 1.5L7 15l-1.5.5L5 17l-.5-1.5L3 15l1.5-.5L5 13z"/>'],
    'statue': ['<path d="M5 21h14M8 21v-4h8v4"/>', '<path d="M9 17c0-4-2-5-2-9a5 5 0 0110 0c0 4-2 5-2 9"/>', '<path d="M7 8h10"/>'],
    'toolbox': ['<rect x="3" y="8" width="18" height="13" rx="2"/>', '<path d="M9 8V5a2 2 0 012-2h2a2 2 0 012 2v3M3 13h18M10 12v3h4v-3"/>'],
    'triangle-exclamation': ['<path d="M12 3l10 18H2L12 3z"/>', '<path d="M12 9v5"/>', '<path d="M12 18h.01"/>'],
    'trophy': ['<path d="M8 4h8v5a4 4 0 01-8 0V4z"/>', '<path d="M8 6H5v2a3 3 0 003 3M16 6h3v2a3 3 0 01-3 3"/>', '<path d="M12 13v4M8 21h8M9 17h6"/>'],
    'user': ['<circle cx="12" cy="8" r="4"/>', '<path d="M4 21a8 8 0 0116 0"/>'],
    'wand-magic-sparkles': ['<path d="M4 20L16 8"/>', '<path d="M14 4l.6 1.8 1.8.6-1.8.6L14 9l-.6-1.9-1.8-.6 1.8-.6L14 4z"/>', '<path d="M19 12l.4 1.2 1.2.4-1.2.4L19 16l-.4-1.9-1.2-.4 1.2-.4L19 12z"/>'],
    'youtube': ['<rect x="2" y="5" width="20" height="14" rx="4"/>', '<path d="M10 9l5 3-5 3V9z"/>']
};

function svgIkon(nama) {
    const path = ICON_PATHS[nama] || ICON_PATHS.info;
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-[1em] h-[1em] shrink-0" aria-hidden="true"><g>${path.join('')}</g></svg>`;
}

function hydrateIcons(root) {
    const area = root || document;
    area.querySelectorAll('[data-icon]').forEach(el => {
        if (el.dataset.iconReady === '1') return;
        el.innerHTML = svgIkon(el.dataset.icon);
        el.dataset.iconReady = '1';
        el.classList.add('inline-flex', 'items-center', 'justify-center', 'shrink-0');
    });
}

function pasangPengamatIkon() {
    if (!document.body) return;
    hydrateIcons(document.body);
    new MutationObserver(() => hydrateIcons(document.body)).observe(document.body, {
        childList: true,
        subtree: true
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pasangPengamatIkon);
} else {
    pasangPengamatIkon();
}

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
    'info': ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 11v5"/>', '<path d="M12 8h.01"/>']
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

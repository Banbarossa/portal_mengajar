/* ================================================================
   KOMPONEN BERSAMA — header & footer identik di semua halaman.
   Gunakan:
   <div data-site-header data-base="../../" data-active="modul-ajar"></div>
   <div data-site-footer data-base=""></div>
   ================================================================ */

function escapeHtml(teks) {
    return String(teks).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function headerMarkup(base, active) {
    const guru = escapeHtml(DATA_GURU.nama);
    const beranda = `${base}index.html#beranda`;
    const modul = `${base}index.html#modul-ajar`;
    const link = (href, label, kunci, mobile) => {
        const aktif = active === kunci;
        const kelas = mobile
            ? `px-3 py-1.5 rounded-full border shrink-0 text-xs font-semibold transition ${aktif ? 'bg-goldWarm/25 border-goldBright text-goldBright' : 'bg-white/10 border-white/10 hover:bg-white/20'}`
            : `px-3.5 py-2 rounded-xl font-semibold transition ${aktif ? 'bg-white/15 text-goldBright' : 'hover:bg-white/10'}`;
        return `<a href="${href}" class="${kelas}"${aktif ? ' aria-current="page"' : ''}>${label}</a>`;
    };

    return `<header class="sticky top-0 z-40 bg-emeraldDark/95 backdrop-blur text-white border-b-2 border-goldBright shadow-lg">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            <a href="${beranda}" class="flex items-center gap-3 group shrink-0">
                <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-goldBright to-goldWarm flex items-center justify-center text-emeraldDark shadow-md group-hover:scale-105 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
                </span>
                <span class="block">
                    <span class="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-amber-200 leading-none">Merdeka Belajar</span>
                    <span class="block font-bold text-sm sm:text-base leading-tight mt-1">Portal Belajar</span>
                </span>
            </a>

            <nav class="hidden md:flex items-center gap-1 text-sm text-emerald-50/90" aria-label="Menu utama">
                ${link(beranda, 'Beranda', 'beranda', false)}
                ${link(modul, 'Modul Ajar', 'modul-ajar', false)}
            </nav>

            <span class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-bold">
                <span class="w-1.5 h-1.5 rounded-full bg-goldBright"></span>${guru}
            </span>
        </div>

        <nav class="md:hidden px-4 pb-2.5 flex gap-2 overflow-x-auto" aria-label="Menu utama mobile">
            ${link(beranda, 'Beranda', 'beranda', true)}
            ${link(modul, 'Modul Ajar', 'modul-ajar', true)}
        </nav>
    </header>`;
}

function footerMarkup(base) {
    return `<footer class="mt-auto bg-emeraldDark text-white border-t-2 border-goldBright">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-goldWarm text-emeraldDark flex items-center justify-center font-extrabold text-sm">MI</div>
                <div>
                    <p class="text-[11px] text-emerald-200/80">Portal Belajar &middot; ${escapeHtml(DATA_GURU.nama)}</p>
                </div>
            </div>
            <a href="${base}index.html#beranda" class="text-xs font-bold text-amber-200 hover:text-white transition">Kembali ke atas &uarr;</a>
        </div>
    </footer>`;
}

function pasangKomponenBersama() {
    document.querySelectorAll('[data-site-header]').forEach(mount => {
        mount.innerHTML = headerMarkup(mount.dataset.base || '', mount.dataset.active || 'beranda');
    });
    document.querySelectorAll('[data-site-footer]').forEach(mount => {
        mount.innerHTML = footerMarkup(mount.dataset.base || '');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pasangKomponenBersama);
} else {
    pasangKomponenBersama();
}

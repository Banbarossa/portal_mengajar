/* ================================================================
   LOGIKA HALAMAN UTAMA — hanya merender data ke DOM.
   Data ada di data.js, komponen ada di components.js.
   ================================================================ */

const ambilMapel = (kode) => DAFTAR_PELAJARAN.find(m => m.kode === kode) ||
    { kode: kode, nama: kode, warna: '#047857', lembut: '#ecfdf5', teks: '#065f46' };

function inisialisasiHalamanUtama() {
    // Header & footer diisi oleh components.js, jadi tidak perlu diset di sini.
    document.getElementById('heroSekolah').textContent = DATA_SEKOLAH.nama;

    // Identitas guru (fallback inisial hanya dipakai jika foto gagal dimuat)
    const img = document.getElementById('fotoGuru');
    const fallback = document.getElementById('fallbackFoto');
    if (fallback) fallback.textContent = DATA_GURU.inisial || DATA_GURU.nama.charAt(0);
    if (img) {
        img.src = DATA_GURU.foto;
        img.alt = `Foto guru ${DATA_GURU.nama}`;
    }
    document.getElementById('namaGuru').textContent = DATA_GURU.nama;
    document.getElementById('peranGuru').textContent = `${DATA_GURU.peran} · Kelas ${DATA_SEKOLAH.kelasDilayani.join(', ')}`;
    document.getElementById('sambutanGuru').textContent = DATA_GURU.sambutan;
    document.getElementById('chipsMapelGuru').innerHTML = DATA_GURU.mapelDiampu.map(kode => {
        const m = ambilMapel(kode);
        return `<span class="px-3 py-1.5 rounded-lg text-[11px] font-extrabold border" style="background:${m.lembut};color:${m.teks};border-color:${m.warna}33">${escapeHtml(kode)}</span>`;
    }).join('');

    // Statistik
    document.getElementById('statKelas').textContent = DATA_SEKOLAH.kelasDilayani.length;
    document.getElementById('statMapel').textContent = DAFTAR_PELAJARAN.length;
    document.getElementById('statModul').textContent = DAFTAR_MODUL.filter(m => m.status === 'aktif' && m.file).length;

    // Opsi filter
    document.getElementById('filterKelas').innerHTML =
        `<option value="semua">Semua kelas</option>` +
        DATA_SEKOLAH.kelasDilayani.map(k => `<option value="${escapeHtml(k)}">Kelas ${escapeHtml(k)}</option>`).join('');
    document.getElementById('filterMapel').innerHTML =
        `<option value="semua">Semua pelajaran</option>` +
        DAFTAR_PELAJARAN.map(m => `<option value="${escapeHtml(m.kode)}">${escapeHtml(m.kode)} — ${escapeHtml(m.nama)}</option>`).join('');

    renderModul();
}

function tampilkanInisialFoto(gambar) {
    gambar.style.display = 'none';
    const fallback = document.getElementById('fallbackFoto');
    if (fallback) fallback.classList.remove('hidden');
}

function ikonMapel(kode) {
    if (kode === 'SKI') return '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>';
    if (kode === 'TIK') return '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>';
    return '<path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>';
}

function renderModul() {
    const kelas = document.getElementById('filterKelas').value;
    const mapel = document.getElementById('filterMapel').value;
    const cari = document.getElementById('cariModul').value.trim().toLowerCase();

    const hasil = DAFTAR_MODUL.filter(d => {
        const cocokKelas = kelas === 'semua' || d.kelas === kelas;
        const cocokMapel = mapel === 'semua' || d.pelajaran === mapel;
        const cocokCari = !cari || `${d.judul} ${d.kode} ${d.deskripsi}`.toLowerCase().includes(cari);
        return cocokKelas && cocokMapel && cocokCari;
    });

    document.getElementById('jumlahModul').textContent = hasil.length;
    document.getElementById('modulKosong').classList.toggle('hidden', hasil.length > 0);

    document.getElementById('daftarModul').innerHTML = hasil.map(d => {
        const m = ambilMapel(d.pelajaran);
        const aktif = d.status === 'aktif' && !!d.file;
        return `<article class="modul-card bg-white rounded-2xl border border-creamBorder shadow-sm overflow-hidden flex flex-col">
            <div class="h-1" style="background:${m.warna}"></div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-start justify-between gap-2">
                    <span class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background:${m.lembut};color:${m.warna}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">${ikonMapel(d.pelajaran)}</svg>
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${aktif ? '' : 'opacity-80'}" style="background:${m.lembut};color:${m.teks}">
                        ${aktif ? 'Tersedia' : 'Segera hadir'}
                    </span>
                </div>

                <p class="mt-4 font-mono text-[11px] font-bold tracking-wide" style="color:${m.warna}">${escapeHtml(d.kode)}</p>
                <h3 class="mt-1 text-sm font-extrabold text-emeraldDark leading-snug">${escapeHtml(d.judul)}</h3>
                <p class="mt-2 text-xs text-slate-500 leading-relaxed flex-1">${escapeHtml(d.deskripsi)}</p>

                <div class="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-400">
                    <span class="px-2 py-1 rounded bg-slate-100">Kelas ${escapeHtml(d.kelas)}</span>
                    <span class="px-2 py-1 rounded bg-slate-100">${escapeHtml(d.pelajaran)}</span>
                    <span class="px-2 py-1 rounded bg-slate-100">${escapeHtml(d.topik)}</span>
                </div>

                <div class="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2">
                    ${aktif
                        ? `<a href="${escapeHtml(d.file)}" target="_blank" rel="noopener" class="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-extrabold text-white transition hover:opacity-90" style="background:${m.warna}">
                             Buka Modul
                             <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                           </a>`
                        : `<button type="button" disabled class="flex-1 py-2.5 rounded-xl text-xs font-extrabold bg-slate-100 text-slate-400 cursor-not-allowed">Belum tersedia</button>`}
                    <button type="button" onclick="salinKode('${escapeHtml(d.kode)}')" title="Salin kode materi" class="w-10 h-10 shrink-0 rounded-xl border border-stone-200 bg-white hover:bg-emeraldLight flex items-center justify-center text-slate-500 hover:text-emeraldDark transition">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                    </button>
                </div>
            </div>
        </article>`;
    }).join('');
}

function resetFilter() {
    document.getElementById('filterKelas').value = 'semua';
    document.getElementById('filterMapel').value = 'semua';
    document.getElementById('cariModul').value = '';
    renderModul();
}

function salinKode(kode) {
    const tampilToast = () => {
        const toast = document.getElementById('toastSalin');
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 1800);
    };
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(kode).then(tampilToast).catch(() => fallbackSalin(kode, tampilToast));
    } else {
        fallbackSalin(kode, tampilToast);
    }
}

function fallbackSalin(kode, callback) {
    const input = document.createElement('textarea');
    input.value = kode;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try { document.execCommand('copy'); } catch (e) { /* abaikan */ }
    document.body.removeChild(input);
    callback();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inisialisasiHalamanUtama);
} else {
    inisialisasiHalamanUtama();
}

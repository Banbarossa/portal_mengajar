# Portal Inovasi Mengajar — MAS IMAM SYAFI'I

Situs statis (HTML + CSS + JS) dengan **Tailwind CSS hasil build**, komponen bersama, dan data terpusat.

## Struktur

```
index.html                     Halaman utama
ski/10/*.html                  Halaman modul flip book
assets/css/input.css           Sumber Tailwind (@tailwind + komponen)
assets/css/output.css          Hasil build — yang dipakai semua halaman
assets/js/data.js              Semua data (sekolah, guru, mapel, modul)
assets/js/components.js        Header & footer bersama
assets/js/icons.js             Ikon SVG terpusat (data-icon)
assets/js/main.js              Logika halaman utama
assets/foto-guru.svg           Placeholder foto guru
tailwind.config.js             Warna, font, animasi
package.json                   Script build Tailwind
```

## Build CSS

```bash
npm install
npm run build:css      # menghasilkan assets/css/output.css
npm run watch:css      # build otomatis saat file berubah
```

Saat hosting, unggah seluruh folder (termasuk `assets/css/output.css`). `node_modules` tidak perlu diunggah.

## Mengubah konten

Semua teks dan daftar modul ada di `assets/js/data.js`:

- `DATA_SEKOLAH` — nama, jenjang, alamat, kelas
- `DATA_GURU` — nama, peran, path foto, sambutan, mapel
- `DAFTAR_PELAJARAN` — kode, nama, warna kartu
- `DAFTAR_MODUL` — kode, judul, pelajaran, kelas, `file`, deskripsi, status

Menambah modul: salin salah satu objek di `DAFTAR_MODUL`, isi `file` dengan path HTML modul, lalu jalankan `npm run build:css` (atau `watch:css`).

## Header konsisten

Setiap halaman memasang komponen yang sama:

```html
<div data-site-header data-base="" data-active="beranda"></div>
<div data-site-footer data-base=""></div>
```

Untuk halaman di dalam folder (mis. `ski/10/`), gunakan `data-base="../../"` dan `data-active="modul-ajar"`.

Semua styling berasal dari Tailwind. Tidak ada `<style>` inline maupun CDN Tailwind di halaman mana pun.

/* ================================================================
   DATA PUSAT — ubah konten situs hanya di file ini.
   Dipakai oleh halaman utama maupun header bersama.
   ================================================================ */

/* ---------- 1. DATA SEKOLAH ---------- */
const DATA_SEKOLAH = {
    nama: "MAS IMAM SYAFI'I",
    jenjang: "Madrasah Aliyah Swasta (MAS)",
    alamat: "Reuhat Tuha, Sukamakmur, Aceh Besar",
    kelasDilayani: ["10"]
};

/* ---------- 2. DATA GURU ----------
   Ganti nilai `foto` dengan path foto asli, misalnya:
   foto: "assets/foto-guru-khairuddin.jpg"
   lalu letakkan file JPG/PNG tersebut di folder assets/.
-------------------------------------- */
const DATA_GURU = {
    nama: "Khairuddin, S.Pd.I",
    peran: "Guru Pengampu",
    foto: "assets/Khairuddin.jpeg",
    inisial: "K",
    mapelDiampu: ["SKI", "TIK", "KKA"],
    sambutan: "Belajar bukan sekadar membaca, melainkan memahami dan mengamalkan. Selamat belajar, sahabat siswa!"
};

/* ---------- 3. DATA MATA PELAJARAN ----------
   `warna`, `lembut`, dan `teks` memengaruhi tampilan kartu (hex bebas diganti).
---------------------------------------------- */
const DAFTAR_PELAJARAN = [
    { kode: "SKI", nama: "Sejarah Kebudayaan Islam", warna: "#047857", lembut: "#ecfdf5", teks: "#065f46" },
    { kode: "TIK", nama: "Teknologi Informasi dan Komunikasi", warna: "#d97706", lembut: "#fffbeb", teks: "#92400e" },
    { kode: "KKA", nama: "Koding dan Kecerdasan Artifisial", warna: "#6d28d9", lembut: "#f5f3ff", teks: "#5b21b6" }
];

/* ---------- 4. DATA MODUL AJAR ----------
   Tambah/ubah modul cukup dengan menambah objek di array ini.
   - kode   : kode materi yang ditampilkan & bisa disalin siswa
   - file   : path relatif ke file HTML modul; kosongkan jika belum ada
   - status : "aktif" atau "segera"
-------------------------------------------- */
const DAFTAR_MODUL = [
    {
        kode: "SKI-10-01",
        judul: "Estafet Kepemimpinan Umat: Khulafaur Rasyidin",
        pelajaran: "SKI",
        kelas: "10",
        file: "ski/10/khulafaur_rasyidin.html",
        deskripsi: "Modul flip book interaktif tentang masa Khulafaur Rasyidin, kodifikasi Al-Qur'an, dan reformasi administrasi negara.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "SKI-10-02",
        judul: "Jejak Cahaya Yastrib: Strategi Dakwah Periode Madinah",
        pelajaran: "SKI",
        kelas: "10",
        file: "ski/10/jejak-cahaya-yastrib.html",
        deskripsi: "Modul flip book interaktif tentang strategi dakwah di Madinah, Piagam Madinah, dan nilai toleransi dalam masyarakat madani.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "SKI-10-03",
        judul: "Dakwah Rasulullah SAW Periode Makkah",
        pelajaran: "SKI",
        kelas: "10",
        file: "ski/10/periode_makkah.html",
        deskripsi: "Modul interaktif pretest, video, dan materi dakwah periode Makkah lengkap dengan post-test untuk mengukur pemahaman siswa.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "SKI-10-04",
        judul: "Ekspedisi Jejak Peradaban Islam (Game Edukasi)",
        pelajaran: "SKI",
        kelas: "10",
        file: "ski/10/game-ekspedisi-jejak-peradaban-islam.html",
        deskripsi: "Game edukasi berbasis misi dengan kuis cepat, susun kronologi, dan detektif tokoh untuk mengulang materi peradaban Islam.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "SKI-10-05",
        judul: "Pedoman Praktikum & Proyek Sejarah",
        pelajaran: "SKI",
        kelas: "10",
        file: "ski/10/pedoman-praktikum.html",
        deskripsi: "Panduan praktikum dan proyek sejarah: alur kerja, pilihan proyek, checklist kesiapan, serta rubrik dan kalkulator penilaian.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "TIK-10-01",
        judul: "Literasi Digital & Etika Berdigital: Cakap Menyaring Informasi",
        pelajaran: "TIK",
        kelas: "10",
        file: "tik/10/literasi-digital-etika-berdigital.html",
        deskripsi: "Modul interaktif literasi digital Fase E: pretest, empat pilar Komdigi, lab analisis hoaks, simulasi izin aplikasi, kartu panduan siswa, serta refleksi dan posttest berbasis deep learning.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "TIK-10-02",
        judul: "Pedoman Praktikum TIK: Laboratorium Literasi & Keamanan Digital",
        pelajaran: "TIK",
        kelas: "10",
        file: "tik/10/pedoman-praktikum.html",
        deskripsi: "Pedoman praktikum kelas 10: alur empat tahapan, pakta integritas digital, tiga pilihan proyek, checklist kesiapan, serta rubrik dan kalkulator penilaian mandiri.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "KKA-10-01",
        judul: "Koding & Kecerdasan Artifisial: Melatih Mesin, Menjaga Manusia",
        pelajaran: "KKA",
        kelas: "10",
        file: "kka/10/koding-dan-kecerdasan-artifisial.html",
        deskripsi: "Modul interaktif koding dan AI Fase E: konsep koding-data-model, lab perceptron yang bisa dilatih di browser, simulasi etika AI UNESCO, kartu AI bertanggung jawab, serta refleksi dan posttest.",
        topik: "Fase E",
        status: "aktif"
    },
    {
        kode: "KKA-10-02",
        judul: "Pedoman Praktikum KKA: Laboratorium Kode, Data & Model",
        pelajaran: "KKA",
        kelas: "10",
        file: "kka/10/pedoman-praktikum.html",
        deskripsi: "Pedoman praktikum kelas 10: alur empat tahapan, pakta integritas koding dan AI, tiga pilihan proyek, checklist kesiapan, serta rubrik dan kalkulator penilaian mandiri.",
        topik: "Fase E",
        status: "aktif"
    }
];

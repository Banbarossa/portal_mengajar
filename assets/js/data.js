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
    foto: "assets/khairuddin.jpeg",
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
    { kode: "KKA", nama: "KKA", warna: "#6d28d9", lembut: "#f5f3ff", teks: "#5b21b6" }
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
        kode: "TIK-10-01",
        judul: "Modul Ajar TIK Kelas 10",
        pelajaran: "TIK",
        kelas: "10",
        file: "",
        deskripsi: "Modul TIK sedang disiapkan. Kode materi sudah dipesan agar dapat dibagikan lebih awal kepada siswa.",
        topik: "Fase E",
        status: "segera"
    },
    {
        kode: "KKA-10-01",
        judul: "Modul Ajar KKA Kelas 10",
        pelajaran: "KKA",
        kelas: "10",
        file: "",
        deskripsi: "Modul KKA sedang disiapkan. Isi path file pada objek ini setelah modul selesai dibuat.",
        topik: "Fase E",
        status: "segera"
    }
];

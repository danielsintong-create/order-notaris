// ---------------------------------------------------------------------------
// Katalog Akademi — produk berbayar (bank soal, template, materi, kelas, bimbingan).
// Satu sumber untuk halaman Akademi DAN bagian "Materi Premium" di Edukasi.
//
// price: null  -> tampil "Harga segera diumumkan" (isi string harga, mis. "Rp149.000").
// checkout: null -> tombol "Daftar Minat" via WhatsApp; isi URL (mis. halaman Mayar)
//                   saat siap dijual, tombol berubah menjadi "Beli Sekarang".
// Judul & isi adalah RENCANA — sesuaikan dengan materi yang benar-benar disiapkan.
// ---------------------------------------------------------------------------

const STAGE_LABELS = {
  mkn: "Mahasiswa M.Kn.",
  alb: "Seleksi ALB INI",
  uken: "Magang & UKEN",
  ppat: "ALB IPPAT & Ujian PPAT",
  praktik: "Praktik",
};

const TYPES = {
  "bank-soal": { label: "Bank Soal", icon: "clipboard" },
  template: { label: "Template", icon: "doc" },
  materi: { label: "Materi", icon: "book" },
  kelas: { label: "Kelas", icon: "cap" },
  bimbingan: { label: "Bimbingan", icon: "searchDoc" },
};

const PRODUCTS = [
  // --- Mahasiswa M.Kn. ---
  {
    id: "template-tesis-mkn",
    stage: "mkn",
    type: "template",
    title: "Template Kerangka Proposal & Tesis M.Kn.",
    desc: "Kerangka penulisan proposal dan tesis Magister Kenotariatan, dari rumusan masalah hingga sistematika bab.",
    points: ["Kerangka bab demi bab", "Contoh rumusan masalah & metode", "Panduan penyusunan daftar pustaka"],
    format: "File digital",
    price: null,
    checkout: null,
  },
  {
    id: "bootcamp-tesis-mkn",
    stage: "mkn",
    type: "kelas",
    title: "Bootcamp Menulis Tesis M.Kn.",
    desc: "Pendampingan terstruktur dari pemilihan topik, rumusan masalah, metodologi, hingga strategi penulisan tesis.",
    points: ["Sesi terjadwal", "Review rumusan masalah", "Diskusi metodologi penelitian"],
    format: "Kelas online",
    price: null,
    checkout: null,
  },
  {
    id: "bimbingan-jurnal-ilmiah",
    stage: "mkn",
    type: "bimbingan",
    title: "Bimbingan Penerbitan Jurnal Ilmiah Sinta 1–5",
    desc: "Pendampingan penulisan dan proses submit artikel ilmiah hukum menuju jurnal terakreditasi Sinta 1–5.",
    points: ["Diskusi topik & kerangka artikel", "Masukan atas draf sebelum submit", "Arahan proses submission"],
    format: "Bimbingan 1:1, jadwal menyesuaikan",
    note: "Keputusan penerimaan artikel sepenuhnya berada pada redaksi jurnal tujuan.",
    price: null,
    checkout: null,
  },
  // --- Seleksi ALB INI ---
  {
    id: "bank-soal-alb-ini",
    stage: "alb",
    type: "bank-soal",
    title: "Bank Soal Seleksi ALB INI + Pembahasan",
    desc: "Latihan soal pilihan ganda dan esai seputar Anggaran Dasar, Anggaran Rumah Tangga, dan Peraturan Perkumpulan INI.",
    points: ["Soal pilihan ganda & esai", "Pembahasan per soal dengan rujukan", "Mengikuti komponen tes tertulis seleksi ALB"],
    format: "File digital",
    featured: true,
    price: null,
    checkout: null,
  },
  // --- Magang & UKEN ---
  {
    id: "ringkasan-kode-etik",
    stage: "uken",
    type: "materi",
    title: "Ringkasan Kode Etik Notaris Beranotasi",
    desc: "Ringkasan pasal-pasal Kode Etik Notaris beserta anotasi dan contoh penerapannya dalam praktik.",
    points: ["Ringkasan per pasal", "Anotasi & contoh kasus", "Poin-poin kunci untuk UKEN"],
    format: "File digital",
    price: null,
    checkout: null,
  },
  {
    id: "bank-soal-uken",
    stage: "uken",
    type: "bank-soal",
    title: "Bank Soal UKEN + Pembahasan",
    desc: "Latihan soal persiapan Ujian Kode Etik Notaris dengan pembahasan yang merujuk pada aturan terkait.",
    points: ["Soal latihan Kode Etik Notaris", "Pembahasan dengan rujukan aturan", "Ringkasan materi kunci"],
    format: "File digital",
    featured: true,
    price: null,
    checkout: null,
  },
  // --- ALB IPPAT & Ujian PPAT ---
  {
    id: "bank-soal-ppat",
    stage: "ppat",
    type: "bank-soal",
    title: "Bank Soal Ujian PPAT + Pembahasan",
    desc: "Latihan soal per bidang materi ujian PPAT — hukum pertanahan, pendaftaran tanah, jabatan PPAT, hingga etika profesi.",
    points: ["Soal per bidang materi", "Pembahasan per soal", "Latihan pembuatan akta PPAT"],
    format: "File digital",
    featured: true,
    price: null,
    checkout: null,
  },
  {
    id: "template-akta-ppat",
    stage: "ppat",
    type: "template",
    title: "Template Akta PPAT Beranotasi",
    desc: "Contoh akta-akta PPAT dengan anotasi pada setiap bagian untuk memahami struktur dan isi akta.",
    points: ["Contoh akta jual beli, hibah, dan lainnya", "Anotasi per bagian akta", "Catatan kesalahan yang sering terjadi"],
    format: "File digital",
    featured: true,
    price: null,
    checkout: null,
  },
  {
    id: "kelas-praktik-ppat",
    stage: "ppat",
    type: "kelas",
    title: "Kelas Praktik PPAT: Dari Teori ke Lapangan",
    desc: "Menjembatani teori dan praktik PPAT melalui studi kasus, dokumen contoh, dan diskusi situasi nyata.",
    points: ["Studi kasus peralihan hak", "Pembahasan dokumen contoh", "Sesi tanya jawab"],
    format: "Kelas online",
    price: null,
    checkout: null,
  },
  // --- Praktik ---
  {
    id: "template-akta-notaris",
    stage: "praktik",
    type: "template",
    title: "Kumpulan Template & Contoh Akta Notaris",
    desc: "Format dan contoh draf akta notaris untuk berbagai jenis transaksi umum sebagai referensi belajar.",
    points: ["Beragam jenis akta umum", "Penjelasan klausul penting", "Referensi belajar, bukan dokumen siap pakai"],
    format: "File digital",
    note: "Tetap memerlukan penyesuaian dan verifikasi notaris sebelum digunakan pada transaksi nyata.",
    price: null,
    checkout: null,
  },
  {
    id: "studi-kasus-sale-leaseback",
    stage: "praktik",
    type: "materi",
    title: "Studi Kasus Sale and Leaseback",
    desc: "Telaah struktur transaksi sale and leaseback beserta isu keabsahan peralihan hak dan dokumentasinya.",
    points: ["Struktur transaksi", "Isu hukum & risiko", "Kerangka analisis kasus"],
    format: "File digital",
    price: null,
    checkout: null,
  },
  {
    id: "workshop-akta-pembiayaan",
    stage: "praktik",
    type: "kelas",
    title: "Workshop Penyusunan Akta Pembiayaan & Leasing",
    desc: "Workshop praktis mengenai struktur dan penyusunan akta pada transaksi pembiayaan dan leasing.",
    points: ["Struktur akta pembiayaan", "Klausul penting & risikonya", "Latihan penyusunan"],
    format: "Live workshop",
    price: null,
    checkout: null,
  },
];

const ACADEMY_FAQ = [
  {
    q: "Bagaimana cara memesan materi atau kelas?",
    a: "Klik Daftar Minat pada materi yang Anda pilih untuk menghubungi tim kami via WhatsApp. Harga, cara pembayaran, dan cara menerima materi akan dikonfirmasi langsung.",
  },
  {
    q: "Apakah bank soal sama dengan soal ujian resmi?",
    a: "Tidak. Bank soal disusun oleh tim ORDER.NOTARIS sebagai bahan latihan, bukan soal ujian resmi, bocoran, atau jaminan kelulusan, dan tidak berafiliasi dengan penyelenggara ujian mana pun.",
  },
  {
    q: "Apakah template akta bisa langsung dipakai untuk transaksi?",
    a: "Tidak. Template dan contoh akta adalah referensi belajar. Akta untuk transaksi nyata tetap harus dibuat dan disesuaikan oleh notaris atau PPAT yang berwenang.",
  },
  {
    q: "Apakah ada materi gratis?",
    a: "Ada. Artikel, ringkasan, checklist, dan kuis latihan tersedia gratis di halaman Edukasi tanpa perlu mendaftar.",
  },
];

module.exports = { STAGE_LABELS, TYPES, PRODUCTS, ACADEMY_FAQ };

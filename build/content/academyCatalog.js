// ---------------------------------------------------------------------------
// Katalog produk berbayar ORDER.NOTARIS — satu sumber data.
//
//   PRODUCTS  -> produk digital belajar MANDIRI (bank soal, template, materi);
//                tampil di halaman EDUKASI sebagai "Materi Premium".
//   PROGRAMS  -> KELAS DIGITAL belajar DIDAMPINGI (kelas online, bootcamp, workshop,
//                bimbingan); tampil di halaman AKADEMI.
//   VIDEOS    -> video course (segera rilis); tampil di halaman AKADEMI.
//
// price: null    -> "Harga segera diumumkan" (isi string, mis. "Rp149.000").
// checkout: null -> tombol "Daftar Minat" via WhatsApp; isi URL (mis. Mayar) saat siap
//                   dijual dan tombol berubah menjadi "Beli Sekarang".
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
  kelas: { label: "Kelas Online", icon: "cap" },
  bootcamp: { label: "Bootcamp", icon: "cap" },
  workshop: { label: "Workshop", icon: "briefcase" },
  bimbingan: { label: "Bimbingan", icon: "searchDoc" },
  video: { label: "Video Course", icon: "play" },
};

// ---- Edukasi: produk digital belajar mandiri ----
const PRODUCTS = [
  {
    id: "template-tesis-mkn",
    stage: "mkn",
    type: "template",
    title: "Template Kerangka Proposal & Tesis M.Kn.",
    points: ["Kerangka bab demi bab", "Contoh rumusan masalah & metode", "Panduan penyusunan daftar pustaka"],
    price: null,
    checkout: null,
  },
  {
    id: "bank-soal-alb-ini",
    stage: "alb",
    type: "bank-soal",
    title: "Bank Soal Seleksi ALB INI + Pembahasan",
    points: ["Soal pilihan ganda & esai", "Pembahasan per soal dengan rujukan", "Mengikuti komponen tes tertulis seleksi ALB"],
    price: null,
    checkout: null,
  },
  {
    id: "ringkasan-kode-etik",
    stage: "uken",
    type: "materi",
    title: "Ringkasan Kode Etik Notaris Beranotasi",
    points: ["Ringkasan per pasal", "Anotasi & contoh kasus", "Poin-poin kunci untuk UKEN"],
    price: null,
    checkout: null,
  },
  {
    id: "bank-soal-uken",
    stage: "uken",
    type: "bank-soal",
    title: "Bank Soal UKEN + Pembahasan",
    points: ["Soal latihan Kode Etik Notaris", "Pembahasan dengan rujukan aturan", "Ringkasan materi kunci"],
    price: null,
    checkout: null,
  },
  {
    id: "bank-soal-ppat",
    stage: "ppat",
    type: "bank-soal",
    title: "Bank Soal Ujian PPAT + Pembahasan",
    points: ["Soal per bidang materi", "Pembahasan per soal", "Latihan pembuatan akta PPAT"],
    price: null,
    checkout: null,
  },
  {
    id: "template-akta-ppat",
    stage: "ppat",
    type: "template",
    title: "Template Akta PPAT Beranotasi",
    points: ["Contoh akta jual beli, hibah, dan lainnya", "Anotasi per bagian akta", "Catatan kesalahan yang sering terjadi"],
    price: null,
    checkout: null,
  },
  {
    id: "template-akta-notaris",
    stage: "praktik",
    type: "template",
    title: "Kumpulan Template & Contoh Akta Notaris",
    points: ["Beragam jenis akta umum", "Penjelasan klausul penting", "Referensi belajar, bukan dokumen siap pakai"],
    price: null,
    checkout: null,
  },
  {
    id: "studi-kasus-sale-leaseback",
    stage: "praktik",
    type: "materi",
    title: "Studi Kasus Sale and Leaseback",
    points: ["Struktur transaksi", "Isu hukum & risiko", "Kerangka analisis kasus"],
    price: null,
    checkout: null,
  },
];

// ---- Akademi: kelas digital belajar didampingi ----
const PROGRAMS = [
  {
    id: "bootcamp-tesis-mkn",
    stage: "mkn",
    type: "bootcamp",
    title: "Bootcamp Menulis Tesis M.Kn.",
    desc: "Pendampingan terstruktur dari pemilihan topik, rumusan masalah, metodologi, hingga strategi penulisan tesis.",
    points: ["Sesi online terjadwal", "Review rumusan masalah", "Diskusi metodologi penelitian"],
    format: "Kelas online, beberapa sesi",
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
    format: "Bimbingan 1:1 online, jadwal menyesuaikan",
    note: "Keputusan penerimaan artikel sepenuhnya berada pada redaksi jurnal tujuan.",
    price: null,
    checkout: null,
  },
  {
    id: "kelas-seleksi-alb-ini",
    stage: "alb",
    type: "kelas",
    title: "Kelas Persiapan Seleksi ALB INI",
    desc: "Pembahasan Anggaran Dasar, Anggaran Rumah Tangga, dan Peraturan Perkumpulan INI, serta simulasi tes tertulis dan wawancara.",
    points: ["Pembahasan materi organisasi INI", "Simulasi tes tertulis", "Persiapan wawancara"],
    format: "Kelas online",
    price: null,
    checkout: null,
  },
  {
    id: "kelas-uken",
    stage: "uken",
    type: "kelas",
    title: "Kelas Persiapan Ujian Kode Etik Notaris",
    desc: "Pendalaman Kode Etik Notaris melalui pembahasan kasus dan latihan soal bersama pengajar.",
    points: ["Pembahasan pasal & kasus", "Latihan soal terbimbing", "Sesi tanya jawab"],
    format: "Kelas online",
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
  {
    id: "workshop-akta-pembiayaan",
    stage: "praktik",
    type: "workshop",
    title: "Workshop Penyusunan Akta Pembiayaan & Leasing",
    desc: "Workshop praktis mengenai struktur dan penyusunan akta pada transaksi pembiayaan dan leasing.",
    points: ["Struktur akta pembiayaan", "Klausul penting & risikonya", "Latihan penyusunan"],
    format: "Live workshop online",
    price: null,
    checkout: null,
  },
];

// ---- Akademi: video course (segera rilis) ----
const VIDEOS = [
  { id: "video-dasar-kenotariatan", stage: "mkn", title: "Dasar-Dasar Kenotariatan", desc: "Peta kewenangan notaris dan PPAT, istilah kunci, dan alur kerja kantor notaris." },
  { id: "video-kode-etik", stage: "uken", title: "Memahami Kode Etik Notaris", desc: "Pembahasan pasal demi pasal Kode Etik Notaris beserta contoh penerapannya." },
  { id: "video-akta-ppat", stage: "ppat", title: "Pembuatan Akta PPAT", desc: "Langkah penyusunan akta-akta PPAT, dari pemeriksaan dokumen hingga pendaftaran." },
  { id: "video-akta-pembiayaan", stage: "praktik", title: "Akta dalam Transaksi Pembiayaan", desc: "Struktur akta pada transaksi pembiayaan dan leasing, termasuk sale and leaseback." },
];

const ACADEMY_FAQ = [
  {
    q: "Apa beda Akademi dengan Edukasi?",
    a: "Edukasi untuk belajar mandiri: artikel dan kuis gratis, serta materi premium seperti bank soal dan template. Akademi untuk belajar didampingi: kelas digital, bootcamp, workshop, bimbingan, dan video course.",
  },
  {
    q: "Bagaimana cara mendaftar kelas?",
    a: "Klik Daftar Minat pada kelas yang Anda pilih untuk menghubungi tim kami via WhatsApp. Jadwal, harga, dan cara pembayaran dikonfirmasi langsung.",
  },
  {
    q: "Kapan video course tersedia?",
    a: "Video course sedang disiapkan. Klik Kabari Saya agar Anda mendapat informasi pertama saat video dirilis.",
  },
  {
    q: "Apakah kelas menjamin kelulusan ujian?",
    a: "Tidak. Kelas membantu persiapan dan pemahaman materi, tetapi kelulusan sepenuhnya ditentukan oleh penyelenggara ujian. Materi kelas bukan soal ujian resmi.",
  },
];

module.exports = { STAGE_LABELS, TYPES, PRODUCTS, PROGRAMS, VIDEOS, ACADEMY_FAQ };

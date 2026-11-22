// ---------------------------------------------------------------------------
// Kurikulum halaman Edukasi — disusun mengikuti perjalanan karier kenotariatan.
//
// Status materi:
//   type: "free"    + slug   -> artikel gratis yang SUDAH terbit (link ke /media/<slug>/)
//   type: "free"    tanpa slug -> materi gratis yang direncanakan (tampil "Segera Terbit")
//   type: "premium"           -> materi berbayar (tampil terkunci; harga belum ditetapkan)
//
// Judul materi "Segera Terbit" dan isi paket premium adalah RENCANA — ubah sesuai
// materi yang benar-benar Anda siapkan.
// ---------------------------------------------------------------------------

const STAGES = [
  {
    id: "mkn",
    step: "01",
    short: "Mahasiswa M.Kn.",
    title: "Fondasi Kenotariatan & Tesis",
    audience: "Mahasiswa Magister Kenotariatan",
    image: "/assets/photos/lecture-hall.jpg",
    outcome:
      "Memahami peta kewenangan notaris dan PPAT, istilah dasar praktik, serta menyusun tesis yang relevan dengan dunia kerja.",
    lessons: [
      { type: "free", title: "5 Kesalahan Umum Mahasiswa M.Kn. Saat Menyusun Tesis", slug: "kesalahan-umum-tesis-mkn" },
      { type: "free", title: "Peta Kewenangan Notaris dan PPAT" },
      { type: "free", title: "Panduan Memilih Topik Tesis M.Kn." },
      { type: "premium", title: "Template Kerangka Proposal & Tesis M.Kn.", product: "template-tesis-mkn" },
    ],
  },
  {
    id: "alb",
    step: "02",
    short: "Seleksi ALB INI",
    title: "Menuju Anggota Luar Biasa INI",
    audience: "Lulusan M.Kn. yang akan mengikuti seleksi ALB",
    image: "/assets/photos/meeting-room.jpg",
    outcome:
      "Memahami syarat, jadwal, dan komponen seleksi ALB INI — tes tertulis dan wawancara — beserta materi organisasi yang perlu dikuasai.",
    lessons: [
      { type: "free", title: "Status Hukum Organisasi Notaris: Kedudukan INI", slug: "status-hukum-organisasi-notaris-ini" },
      { type: "free", title: "Syarat & Jadwal Seleksi ALB INI" },
      { type: "free", title: "Ringkasan AD, ART & Peraturan Perkumpulan INI" },
      { type: "premium", title: "Bank Soal Latihan Seleksi ALB INI + Pembahasan", product: "bank-soal-alb-ini" },
    ],
  },
  {
    id: "uken",
    step: "03",
    short: "Magang & UKEN",
    title: "Magang Menuju Ujian Kode Etik Notaris",
    audience: "ALB INI yang sedang menjalani magang",
    image: "/assets/photos/library-archive.jpg",
    outcome:
      "Memenuhi persyaratan UKEN — magang, magang bersama, dan poin kegiatan — serta menguasai Kode Etik Notaris untuk menghadapi ujian.",
    lessons: [
      { type: "free", title: "Syarat UKEN: Magang, Magang Bersama & Poin Kegiatan" },
      { type: "free", title: "Checklist Dokumen Selama Masa Magang" },
      { type: "premium", title: "Ringkasan Kode Etik Notaris Beranotasi", product: "ringkasan-kode-etik" },
      { type: "premium", title: "Bank Soal Latihan UKEN + Pembahasan", product: "bank-soal-uken" },
    ],
  },
  {
    id: "ppat",
    step: "04",
    short: "Ujian PPAT",
    title: "Persiapan Ujian PPAT",
    audience: "Calon PPAT",
    image: "/assets/photos/hero-building.jpg",
    outcome:
      "Menguasai materi pertanahan dan jabatan PPAT — dari hukum pertanahan nasional dan pendaftaran tanah hingga pembuatan akta PPAT.",
    lessons: [
      { type: "free", title: "Peran PPAT dalam Peralihan Hak Atas Tanah: Panduan Singkat", slug: "peran-ppat-peralihan-hak-tanah" },
      { type: "free", title: "Peta Materi Ujian PPAT" },
      { type: "premium", title: "Template Akta PPAT Beranotasi", product: "template-akta-ppat" },
      { type: "premium", title: "Bank Soal Latihan Ujian PPAT + Pembahasan", product: "bank-soal-ppat" },
    ],
  },
  {
    id: "praktik",
    step: "05",
    short: "Praktik",
    title: "Praktik Notaris & PPAT",
    audience: "Notaris, PPAT, dan profesional legal",
    image: "/assets/photos/pen-seal.jpg",
    outcome:
      "Memperdalam praktik penyusunan akta, isu pembiayaan dan leasing, serta perkembangan kenotariatan di era digital.",
    lessons: [
      { type: "free", title: "Digitalisasi Akta Notaris: Peluang dan Tantangan", slug: "digitalisasi-akta-notaris" },
      { type: "free", title: "Glosarium Istilah Kenotariatan A–Z" },
      { type: "premium", title: "Kumpulan Template & Contoh Akta Notaris", product: "template-akta-notaris" },
      { type: "premium", title: "Studi Kasus Sale and Leaseback", product: "studi-kasus-sale-leaseback" },
    ],
  },
];

// Kuis gratis — pengetahuan dasar, BUKAN soal ujian resmi.
// Setiap jawaban disertai dasar/rujukannya; tinjau ulang bila regulasi berubah.
const QUIZ = [
  {
    q: "Berapa usia minimal untuk dapat diangkat menjadi notaris menurut UU Jabatan Notaris?",
    options: ["25 tahun", "27 tahun", "30 tahun", "35 tahun"],
    answer: 1,
    why: "Pasal 3 UU No. 2 Tahun 2014 (perubahan UU No. 30 Tahun 2004) mensyaratkan usia paling rendah 27 tahun.",
  },
  {
    q: "Berapa lama magang minimal di kantor notaris sebagai syarat pengangkatan notaris?",
    options: ["12 bulan", "18 bulan", "24 bulan berturut-turut", "36 bulan"],
    answer: 2,
    why: "Pasal 3 UU No. 2 Tahun 2014: magang paling singkat 24 bulan berturut-turut di kantor notaris.",
  },
  {
    q: "Pendidikan apa yang disyaratkan untuk diangkat menjadi notaris?",
    options: ["S1 Hukum saja", "Strata dua kenotariatan", "Pendidikan khusus notariat non-gelar", "S2 hukum bisnis"],
    answer: 1,
    why: "Pasal 3 UU No. 2 Tahun 2014 mensyaratkan berijazah sarjana hukum dan lulusan jenjang strata dua kenotariatan.",
  },
  {
    q: "Bagaimana bobot penilaian seleksi Anggota Luar Biasa (ALB) INI?",
    options: ["Tertulis 50%, wawancara 50%", "Tertulis 60%, wawancara 40%", "Tertulis 70%, wawancara 30%", "Tertulis 100%"],
    answer: 1,
    why: "Berdasarkan Peraturan Perkumpulan INI No. 22/PERKUM/INI/2021: tes tertulis 60% dan wawancara 40%.",
  },
  {
    q: "Pada bulan apa saja seleksi ALB INI diselenggarakan?",
    options: [
      "Januari, April, Juli, Oktober",
      "Februari, Mei, Agustus, November",
      "Maret, Juni, September, Desember",
      "Setiap bulan",
    ],
    answer: 1,
    why: "Peraturan Perkumpulan INI No. 22/PERKUM/INI/2021 menjadwalkan seleksi ALB pada Februari, Mei, Agustus, dan November.",
  },
  {
    q: "Berapa poin kegiatan minimal untuk dapat mengikuti Ujian Kode Etik Notaris (UKEN)?",
    options: ["10 poin", "15 poin", "18 poin", "25 poin"],
    answer: 2,
    why: "Peraturan Perkumpulan INI No. 23/PERKUM/INI/2021 mensyaratkan paling sedikit 18 poin.",
  },
  {
    q: "Berapa kali magang bersama yang disyaratkan untuk mengikuti UKEN?",
    options: ["2 kali", "3 kali", "4 kali", "6 kali"],
    answer: 2,
    why: "Peraturan Perkumpulan INI No. 23/PERKUM/INI/2021 mensyaratkan 4 kali magang bersama.",
  },
  {
    q: "Ujian Pengangkatan Notaris (UPN) yang diatur Kementerian Hukum dan HAM dibatalkan melalui…",
    options: [
      "Putusan MK No. 49/PUU-X/2012",
      "Putusan MA No. 50 P/HUM/2018",
      "Peraturan Menteri baru tahun 2020",
      "Keputusan Kongres INI",
    ],
    answer: 1,
    why: "Ketentuan UPN dibatalkan melalui Putusan Mahkamah Agung No. 50 P/HUM/2018.",
  },
  {
    q: "Instansi mana yang menyelenggarakan Ujian PPAT?",
    options: ["Ikatan Notaris Indonesia", "Kementerian Hukum", "Kementerian ATR/BPN", "Mahkamah Agung"],
    answer: 2,
    why: "Ujian PPAT diselenggarakan oleh Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional.",
  },
  {
    q: "Undang-undang yang menjadi dasar hukum pertanahan nasional (UUPA) adalah…",
    options: ["UU No. 5 Tahun 1960", "UU No. 2 Tahun 2014", "UU No. 4 Tahun 1996", "UU No. 1 Tahun 1974"],
    answer: 0,
    why: "Undang-Undang Pokok Agraria adalah UU No. 5 Tahun 1960.",
  },
];

const FAQ = [
  {
    q: "Apakah materi gratis perlu mendaftar?",
    a: "Tidak. Semua materi bertanda Gratis bisa dibaca langsung tanpa membuat akun.",
  },
  {
    q: "Apakah soal latihan sama dengan soal ujian resmi?",
    a: "Tidak. Soal latihan disusun oleh tim ORDER.NOTARIS sebagai bahan belajar dan bukan soal ujian resmi, bocoran, atau jaminan kelulusan.",
  },
  {
    q: "Bagaimana cara mendapatkan materi Premium?",
    a: "Klik Daftar Minat pada materi Premium yang Anda pilih di halaman ini; harga dan cara pembayaran dikonfirmasi langsung oleh tim kami via WhatsApp. Untuk kelas dengan pendampingan, lihat Akademi.",
  },
  {
    q: "Apakah materi mengikuti regulasi terbaru?",
    a: "Materi disusun berdasarkan peraturan yang berlaku saat penulisan. Karena regulasi dapat berubah, selalu cocokkan dengan sumber resmi terbaru.",
  },
];

module.exports = { STAGES, QUIZ, FAQ };

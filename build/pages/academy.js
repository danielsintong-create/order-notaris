const icons = require("../components/icons");
const sectionHeading = require("../components/sectionHeading");

const CLASSES = [
  { tag: "Pemula", title: "Kelas Dasar Kenotariatan untuk Pemula", desc: "Pengantar dasar dunia kenotariatan bagi mahasiswa hukum dan calon mahasiswa M.Kn. — terminologi, alur kerja, dan gambaran karier.", format: "Kelas online (self-paced)" },
  { tag: "Menengah", title: "Workshop Penyusunan Akta Pembiayaan & Leasing", desc: "Workshop praktis mengenai struktur dan penyusunan akta pada transaksi pembiayaan dan leasing, termasuk sale and leaseback.", format: "Live workshop" },
  { tag: "Mahasiswa M.Kn.", title: "Bootcamp Menulis Tesis M.Kn. dengan Efektif", desc: "Pendampingan terstruktur dari pemilihan topik, rumusan masalah, metodologi, hingga strategi penulisan tesis yang efektif.", format: "Kelas kohort (4 minggu)" },
  { tag: "Profesional", title: "Kelas Praktik PPAT: Dari Teori ke Lapangan", desc: "Menjembatani teori dan praktik lapangan PPAT melalui studi kasus, dokumen contoh, dan diskusi situasi nyata.", format: "Kelas online + studi kasus" },
  { tag: "Sertifikasi", title: "Certificate Legal Officer (CLO)", desc: "Program sertifikasi kompetensi legal officer untuk kebutuhan korporasi — kontrak, kepatuhan, dan dokumentasi legal dasar.", format: "Kelas + ujian kompetensi internal", note: "Ini adalah sertifikasi kompetensi internal dari ORDER.NOTARIS Academy, bukan sertifikasi resmi dari lembaga sertifikasi profesi negara." },
];

const MATERIALS = [
  {
    tag: "Template & Contoh Akta",
    title: "Kumpulan Template & Contoh Akta Notaris",
    desc: "Kumpulan format dan contoh draf akta notaris untuk berbagai jenis transaksi umum, sebagai bahan referensi dalam mempelajari struktur dan susunan akta.",
    points: [
      "Kumpulan format draf akta untuk berbagai jenis transaksi umum",
      "Disusun sebagai bahan referensi belajar, bukan dokumen siap pakai",
      "Tetap memerlukan penyesuaian dan verifikasi oleh notaris sebelum digunakan pada transaksi nyata",
    ],
    note: "Materi ini bersifat referensi pembelajaran dan tidak menggantikan akta resmi yang dibuat notaris berdasarkan kebutuhan spesifik masing-masing pihak. Info ketersediaan dan harga melalui WhatsApp.",
  },
  {
    tag: "Materi Belajar Mandiri",
    title: "Kumpulan Contoh Soal Ujian Notaris & PPAT",
    desc: "Kumpulan soal latihan berdasarkan topik-topik umum kenotariatan dan PPAT, untuk membantu persiapan belajar mandiri.",
    points: [
      "Kumpulan soal latihan berdasarkan topik-topik umum kenotariatan dan PPAT",
      "Disusun sebagai bahan latihan mandiri, bukan bocoran maupun soal resmi ujian",
      "Tidak berafiliasi dengan dan tidak mewakili penyelenggara ujian resmi mana pun",
    ],
    note: "Materi latihan mandiri untuk membantu pemahaman konsep, bukan jaminan kelulusan ujian. Info ketersediaan dan harga melalui WhatsApp.",
  },
];

const RESOURCES = [
  { title: "Checklist Dokumen Akta Jual Beli", desc: "Daftar periksa dokumen umum yang biasanya diperlukan dalam proses akta jual beli.", tag: "Checklist (PDF)" },
  { title: "Template Studi Kasus Sale and Leaseback", desc: "Kerangka studi kasus untuk mempelajari struktur transaksi sale and leaseback.", tag: "Template" },
  { title: "Glosarium Istilah Kenotariatan A–Z", desc: "Kumpulan istilah dasar kenotariatan untuk mahasiswa dan pemula.", tag: "Glosarium" },
  { title: "Panduan Singkat Memilih Topik Tesis M.Kn.", desc: "Kerangka berpikir singkat untuk membantu menentukan topik tesis yang relevan dan terukur.", tag: "Panduan (PDF)" },
];

// Bimbingan Jurnal Ilmiah lives here (not in /services/) because it's academic writing
// mentorship, not a notarial/PPAT/corporate-legal service — see note in content/services.js.
const services = require("../content/services");
const journalService = services.find((s) => s.slug === "bimbingan-jurnal-ilmiah");

function academy(config) {
  return `
  <section class="page-hero page-hero--photo" style="background-image:url('/assets/photos/lecture-hall.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Akademi</div>
      <span class="eyebrow eyebrow--onlight">Pengembangan Profesional</span>
      <h1 class="display">Akademi ORDER.NOTARIS</h1>
      <p>Kelas, workshop, dan sertifikasi kompetensi terstruktur seputar kenotariatan dan legal korporat, materi/template yang bisa dipesan, serta resource gratis — dari dasar untuk pemula hingga praktik lanjutan untuk profesional.</p>
    </div>
  </section>

  <section class="section--tight" style="border-bottom:1px solid var(--line);background:var(--navy-100);">
    <div class="container center">
      <p class="small" style="color:var(--navy-800);font-weight:700;">
        Status saat ini: kelas-kelas di bawah berada pada tahap perencanaan (Segera Hadir). Daftarkan minatmu lewat WhatsApp untuk mendapat info jadwal dan harga saat kelas dibuka.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({ eyebrow: "Katalog Kelas", title: "Pilih jalur sesuai levelmu" })}
      <div class="card-grid card-grid--2">
        ${CLASSES.map(
          (c) => `
          <div class="academy-card">
            <div class="card-tags">
              <span class="tag">${c.tag}</span>
              <span class="badge badge-soon">Segera Hadir</span>
            </div>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            <p class="small">${c.format}</p>
            ${c.note ? `<p class="small" style="margin-top:6px;color:var(--ink-500);">${c.note}</p>` : ""}
            <span class="badge badge-placeholder">Contoh Konten</span>
            <a class="btn btn-wa btn-block" style="margin-top:10px;" href="${config.waLink(`Halo, saya ingin daftar minat untuk kelas: ${c.title}`)}" target="_blank" rel="noopener">
              ${icons.whatsapp()} Daftar Minat
            </a>
          </div>`
        ).join("")}

        <div class="academy-card">
          <div class="card-tags">
            <span class="tag">Akademik & Publikasi</span>
            <span class="badge badge-soon">Segera Hadir</span>
          </div>
          <h3>${journalService.title}</h3>
          <p>${journalService.summary}</p>
          <p class="small">Bimbingan 1:1, jadwal menyesuaikan</p>
          <span class="badge badge-placeholder">Contoh Konten</span>
          <a class="btn btn-wa btn-block" style="margin-top:10px;" href="${config.waLink(`Halo, saya ingin bertanya tentang: ${journalService.title}`)}" target="_blank" rel="noopener">
            ${icons.whatsapp()} Tanya via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Materi & Template",
        title: "Bahan belajar mandiri, siap dipesan",
        lede: "Template/contoh akta dan kumpulan soal latihan sebagai bahan referensi belajar — bukan pengganti dokumen resmi atau soal ujian resmi.",
      })}
      <div class="card-grid card-grid--2">
        ${MATERIALS.map(
          (m) => `
          <div class="academy-card">
            <div class="card-tags">
              <span class="tag">${m.tag}</span>
              <span class="badge badge-soon">Segera Hadir</span>
            </div>
            <h3>${m.title}</h3>
            <p>${m.desc}</p>
            <ul class="small" style="margin-top:6px;padding-left:18px;display:grid;gap:4px;">
              ${m.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
            <p class="small" style="margin-top:6px;color:var(--ink-500);">${m.note}</p>
            <a class="btn btn-wa btn-block" style="margin-top:10px;" href="${config.waLink(`Halo, saya tertarik dengan materi: ${m.title}`)}" target="_blank" rel="noopener">
              ${icons.whatsapp()} Tanya via WhatsApp
            </a>
          </div>`
        ).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Resource Gratis",
        title: "Checklist, template, dan panduan singkat — tanpa biaya",
        lede: "File belum tersedia untuk diunduh otomatis. Klik tombol pada tiap resource untuk memintanya langsung lewat WhatsApp — kami kirimkan begitu siap.",
      })}
      <div class="card-grid card-grid--2">
        ${RESOURCES.map(
          (r) => `
          <div class="resource-card">
            <div class="pillar-card__icon">${icons.download()}</div>
            <span class="badge badge-placeholder">Contoh Konten</span>
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
            <span class="tag" style="width:fit-content;">${r.tag}</span>
            <a class="btn btn-wa btn-block" style="margin-top:6px;" href="${config.waLink(`Halo, saya ingin mendapatkan resource gratis: ${r.title}`)}" target="_blank" rel="noopener">
              ${icons.whatsapp()} Minta via WhatsApp
            </a>
          </div>`
        ).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container center">
      <span class="eyebrow" style="justify-content:center;">Daftar Minat</span>
      <h2 class="display" style="margin-top:10px;">Ingin jadi yang pertama tahu saat kelas atau materi tersedia?</h2>
      <p class="lede mx-auto max-w-prose" style="margin-top:12px;">Kirim pesan WhatsApp dengan menyebutkan kelas atau materi yang kamu minati — tim kami akan menghubungimu kembali saat sudah tersedia.</p>
      <a class="btn btn-wa btn-lg" style="margin-top:22px;" href="${config.waLink("Halo, saya ingin daftar minat untuk kelas/materi Akademi ORDER.NOTARIS.")}" target="_blank" rel="noopener">
        ${icons.whatsapp()} Daftar Minat via WhatsApp
      </a>
    </div>
  </section>
  `;
}

module.exports = academy;

const icons = require("../components/icons");
const sectionHeading = require("../components/sectionHeading");

const TRACKS = [
  {
    level: "01 — Dasar",
    title: "Pengantar Dunia Kenotariatan",
    audience: "Mahasiswa hukum & pemula",
    points: [
      "Apa itu notaris, PPAT, dan perbedaan kewenangannya",
      "Istilah dasar yang sering digunakan dalam praktik",
      "Gambaran umum jenjang karier di bidang kenotariatan",
    ],
    reads: [{ slug: "status-hukum-organisasi-notaris-ini", title: "Status Hukum Organisasi Notaris: Kedudukan Ikatan Notaris Indonesia (INI)" }],
  },
  {
    level: "02 — Menengah",
    title: "Praktik Akta & Dokumen",
    audience: "Mahasiswa M.Kn. & staf kenotariatan",
    points: [
      "Struktur dan anatomi akta otentik",
      "Alur kerja PPAT dalam peralihan hak atas tanah",
      "Dokumen pendukung yang umum diperlukan dalam berbagai transaksi",
    ],
    reads: [
      { slug: "peran-ppat-peralihan-hak-tanah", title: "Peran PPAT dalam Peralihan Hak Atas Tanah: Panduan Singkat" },
      { slug: "kesalahan-umum-tesis-mkn", title: "5 Kesalahan Umum Mahasiswa M.Kn. Saat Menyusun Tesis" },
    ],
  },
  {
    level: "03 — Lanjutan",
    title: "Pembiayaan, Leasing & Isu Kontemporer",
    audience: "Profesional & akademisi",
    points: [
      "Struktur transaksi pembiayaan dan sale and leaseback",
      "Isu digitalisasi akta dan tanda tangan elektronik",
      "Studi kasus lintas sektor: maritim, korporasi, dan properti",
    ],
    reads: [{ slug: "digitalisasi-akta-notaris", title: "Digitalisasi Akta Notaris: Peluang dan Tantangan" }],
  },
];

function education(config) {
  return `
  <section class="page-hero page-hero--photo" style="background-image:url('/assets/photos/law-books.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Edukasi</div>
      <span class="eyebrow eyebrow--onlight">Pilar 1 — Bacaan Gratis</span>
      <h1 class="display">Edukasi Kenotariatan, Disusun Bertahap</h1>
      <p>Dari pengantar untuk mahasiswa tingkat pertama hingga topik lanjutan untuk profesional — artikel gratis, tanpa perlu daftar, disusun berjenjang agar mudah diikuti tanpa mengorbankan kedalaman.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Jalur Belajar",
        title: "Tiga tingkatan, satu alur yang runtut",
        lede: "Baca gratis, sesuai levelmu — tanpa perlu daftar. Untuk format kelas dengan jadwal dan pendampingan, lihat Akademi.",
      })}
      <div class="card-grid" style="gap:20px;">
        ${TRACKS.map(
          (t) => `
          <div class="service-card">
            <span class="eyebrow">${t.level}</span>
            <h3 style="margin-top:6px;">${t.title}</h3>
            <p class="small" style="color:var(--ink-400);">Untuk: ${t.audience}</p>
            <ul>${t.points.map((p) => `<li>${p}</li>`).join("")}</ul>
            <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--line);display:grid;gap:8px;">
                    <span class="small" style="font-weight:700;color:var(--navy-800);">Mulai baca:</span>
                    ${t.reads
                      .map(
                        (r) => `
                    <a href="/media/${r.slug}/" class="small" style="display:flex;align-items:center;gap:4px;color:var(--navy-900);font-weight:600;">
                      ${r.title} ${icons.chevronRight()}
                    </a>`
                      )
                      .join("")}
                  </div>
          </div>`
        ).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container two-col">
      <div>
        ${sectionHeading({
          eyebrow: "Semua Bacaan",
          title: "Ingin lihat semua artikel, bukan per level?",
          lede: "Kunjungi Media untuk daftar lengkap artikel, termasuk yang belum masuk ke salah satu jalur di atas.",
        })}
        <a class="btn btn-navy" href="/media/">Kunjungi Media ${icons.arrowRight()}</a>
      </div>
      <div>
        ${sectionHeading({
          eyebrow: "Kelas Terstruktur & Berbayar",
          title: "Ingin format kelas, sertifikasi, atau template siap pakai?",
          lede: "Akademi ORDER.NOTARIS menghadirkan kelas berjadwal, sertifikasi, serta materi dan template yang bisa dipesan.",
        })}
        <a class="btn btn-outline" href="/academy/">Lihat Akademi ${icons.arrowRight()}</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Punya Pertanyaan Spesifik?</span>
        <h2 class="display">Diskusikan kebutuhan belajarmu langsung dengan tim kami</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-wa btn-lg" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
          <a class="btn btn-outline--onlight btn-lg" href="/academy/">Lihat Resource Gratis</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = education;

const icons = require("../components/icons");
const { STAGE_LABELS, TYPES, PROGRAMS, VIDEOS, ACADEMY_FAQ } = require("../content/academyCatalog");

// Akademi = belajar DIDAMPINGI: kelas digital (kelas online, bootcamp, workshop, bimbingan)
// and video courses (coming soon). Self-study digital products live in Edukasi.

function programCta(config, p) {
  if (p.checkout) {
    return `<a class="btn btn-navy btn-block" href="${p.checkout}" target="_blank" rel="noopener">Daftar Sekarang</a>`;
  }
  return `<a class="btn btn-navy btn-block" href="${config.waLink(`Halo ORDER.NOTARIS, saya ingin mendaftar minat untuk: ${p.title}`)}" target="_blank" rel="noopener">Daftar Minat</a>`;
}

function programCard(config, p) {
  const t = TYPES[p.type];
  return `
  <article class="product-card" id="${p.id}">
    <div class="product-card__top">
      <span class="product-card__type"><span class="product-card__icon">${icons[t.icon]()}</span>${t.label}</span>
      <span class="product-card__stage">${STAGE_LABELS[p.stage]}</span>
    </div>
    <h3 class="product-card__title">${p.title}</h3>
    <p class="product-card__desc">${p.desc}</p>
    <ul class="product-card__points">
      ${p.points.map((pt) => `<li>${icons.check()}<span>${pt}</span></li>`).join("")}
    </ul>
    ${p.note ? `<p class="product-card__note">${p.note}</p>` : ""}
    <div class="product-card__foot">
      <div class="product-card__meta">
        <span>${p.format}</span>
        <strong>${p.price || "Harga segera diumumkan"}</strong>
      </div>
      ${programCta(config, p)}
    </div>
  </article>`;
}

function videoCard(config, v) {
  return `
  <article class="video-card" id="${v.id}">
    <div class="video-card__thumb" aria-hidden="true">
      <span class="video-card__play">${icons.play()}</span>
      <span class="video-card__soon">Segera Rilis</span>
    </div>
    <div class="video-card__body">
      <span class="product-card__stage">${STAGE_LABELS[v.stage]}</span>
      <h3 class="video-card__title">${v.title}</h3>
      <p class="video-card__desc">${v.desc}</p>
      <a class="btn btn-outline btn-block" href="${config.waLink(`Halo ORDER.NOTARIS, kabari saya saat video course "${v.title}" dirilis.`)}" target="_blank" rel="noopener">Kabari Saya</a>
    </div>
  </article>`;
}

function academy(config) {
  return `
  <section class="page-hero page-hero--photo edu-hero" style="background-image:url('/assets/photos/lecture-hall.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Akademi</div>
      <span class="eyebrow eyebrow--onlight">Akademi ORDER.NOTARIS</span>
      <h1 class="display">Kelas Digital Kenotariatan &amp; PPAT</h1>
      <p>Program pembelajaran untuk membangun kompetensi dan kesiapan profesional di dunia kenotariatan dan PPAT, sejak lulus M.Kn., masa ALB INI &amp; IPPAT, hingga lulus Ujian Kode Etik Notaris dan PPAT.</p>
      <div class="edu-hero__cta">
        <a class="btn btn-light btn-lg" href="#kelas">Lihat Kelas Digital ${icons.arrowRight()}</a>
        <a class="btn btn-outline--onlight btn-lg" href="#video">Video Course</a>
      </div>
    </div>
  </section>

  <section class="section academy-values">
    <div class="container academy-values__grid">
      <div class="academy-value">
        <span class="academy-value__icon">${icons.cap()}</span>
        <div><h3>Belajar didampingi</h3><p>Kelas, workshop, dan bimbingan bersama pengajar, dengan ruang untuk bertanya dan berdiskusi.</p></div>
      </div>
      <div class="academy-value">
        <span class="academy-value__icon">${icons.clock()}</span>
        <div><h3>Sepenuhnya online</h3><p>Ikuti dari mana saja, tanpa perlu datang ke lokasi.</p></div>
      </div>
      <div class="academy-value">
        <span class="academy-value__icon">${icons.book()}</span>
        <div><h3>Mengikuti tahapan karier</h3><p>Dari tesis M.Kn., seleksi ALB INI, UKEN, ujian PPAT, hingga praktik.</p></div>
      </div>
    </div>
  </section>

  <section class="section section--dim" id="kelas">
    <div class="container">
      <h2 class="display center-heading">Kelas Digital</h2>
      <p class="center-sub">Kelas online, bootcamp, workshop, dan bimbingan untuk setiap tahap.</p>
      <div class="product-grid academy-grid">
        ${PROGRAMS.map((p) => programCard(config, p)).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="video">
    <div class="container">
      <h2 class="display center-heading">Video Course</h2>
      <p class="center-sub">Belajar lewat video kapan saja. Sedang disiapkan — daftar untuk mendapat kabar pertama.</p>
      <div class="video-grid">
        ${VIDEOS.map((v) => videoCard(config, v)).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <h2 class="display center-heading">Cara Mengikuti Kelas</h2>
      <div class="step-grid academy-steps">
        <div class="step-card"><span class="academy-step__num">1</span><h3 class="step-card__title">Pilih Kelas</h3><p class="step-card__desc">Temukan kelas sesuai tahap yang sedang Anda jalani.</p></div>
        <div class="step-card"><span class="academy-step__num">2</span><h3 class="step-card__title">Daftar via WhatsApp</h3><p class="step-card__desc">Klik Daftar Minat; jadwal, harga, dan pembayaran dikonfirmasi langsung.</p></div>
        <div class="step-card"><span class="academy-step__num">3</span><h3 class="step-card__title">Ikuti Kelas Online</h3><p class="step-card__desc">Bergabung di sesi online sesuai jadwal yang disepakati.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Lebih Suka Belajar Mandiri?</span>
        <h2 class="display">Materi gratis, bank soal, dan template tersedia di Edukasi</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-light btn-lg" href="/education/">Buka Edukasi ${icons.arrowRight()}</a>
          <a class="btn btn-outline--onlight btn-lg" href="/education/#kuis">Coba 10 Soal Gratis</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--dim" id="faq">
    <div class="container faq-wrap">
      <h2 class="display center-heading">Pertanyaan Umum</h2>
      <div class="faq">
        ${ACADEMY_FAQ.map(
          (f) => `
        <details class="faq__item">
          <summary>${f.q}<span class="faq__icon" aria-hidden="true">${icons.plus()}</span></summary>
          <p>${f.a}</p>
        </details>`
        ).join("")}
      </div>
    </div>
  </section>
  `;
}

module.exports = academy;

const icons = require("../components/icons");

const MISI = [
  { kicker: "LEARN.", title: "Edukasi", desc: "Menyediakan edukasi kenotariatan yang runtut dan mudah diakses." },
  { kicker: "INFORM.", title: "Media", desc: "Menyajikan kabar dan wawasan kenotariatan yang akurat dari sumber resmi." },
  { kicker: "SERVE.", title: "Layanan", desc: "Menghubungkan setiap kebutuhan dengan layanan kenotariatan yang tepat." },
];

function about(config) {
  return `
  <section class="page-hero page-hero--photo edu-hero" style="background-image:url('/assets/photos/meeting-room.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Tentang</div>
      <span class="eyebrow eyebrow--onlight">Tentang Kami</span>
      <h1 class="display">Tentang ${config.brand.name}</h1>
    </div>
  </section>

  <section class="section">
    <div class="container about-statement">
      <p>ORDER.NOTARIS adalah ekosistem digital kenotariatan Indonesia yang menghimpun edukasi, media, dan layanan dalam satu platform.</p>
      <p>ORDER.NOTARIS berkomitmen untuk memberikan edukasi, media dan layanan kenotariatan menjadi terjangkau, terpercaya dan aman.</p>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <h2 class="display center-heading">Visi &amp; Misi</h2>
      <div class="vm-visi">
        <span class="vm-label">Visi</span>
        <p>Menjadi ekosistem digital kenotariatan Indonesia yang terjangkau, terpercaya, dan aman.</p>
      </div>
      <div class="vm-misi">
        <span class="vm-label">Misi</span>
        <div class="vm-misi__grid">
          ${MISI.map(
            (m) => `
          <div class="vm-item">
            <span class="vm-item__kicker">${m.kicker}</span>
            <h3>${m.title}</h3>
            <p>${m.desc}</p>
          </div>`
          ).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Kenalan Lebih Jauh</span>
        <h2 class="display">Punya pertanyaan tentang ORDER.NOTARIS?</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-wa btn-lg" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
          <a class="btn btn-outline--onlight btn-lg" href="/contact/">Hubungi Kami</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = about;

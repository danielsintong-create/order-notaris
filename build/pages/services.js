const icons = require("../components/icons");
const sectionHeading = require("../components/sectionHeading");
const { placeholderBadge } = require("../components/card");
const services = require("../content/services");

function serviceCard(service) {
  return `
  <div class="service-card">
    <div class="pillar-card__icon">${icons.briefcase()}</div>
    ${placeholderBadge(service)}
    <h3>${service.title}</h3>
    <p>${service.summary}</p>
    <ul>${service.points.map((p) => `<li>${p}</li>`).join("")}</ul>
    <p class="small" style="margin-top:6px;">${service.note}</p>
    <a class="btn btn-outline btn-block" style="margin-top:8px;" href="/services/${service.slug}/">Lihat Detail ${icons.arrowRight()}</a>
  </div>`;
}

function servicesIndex(config) {
  // Bimbingan Jurnal Ilmiah (category "akademik") lives under /academy/ now, not here —
  // see the note on that entry in content/services.js.
  const visibleServices = services.filter((s) => s.category !== "akademik");
  return `
  <section class="page-hero page-hero--photo" style="background-image:url('/assets/photos/pen-seal.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Layanan</div>
      <span class="eyebrow eyebrow--onlight">Pilar 3</span>
      <h1 class="display">Layanan Notaris &amp; PPAT</h1>
      <p>Kategori layanan berikut menggambarkan cakupan umum. Detail ruang lingkup, dokumen, dan proses disesuaikan melalui konsultasi lebih lanjut.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({ eyebrow: "Kategori Layanan", title: "Pilih layanan sesuai kebutuhanmu" })}
      <div class="card-grid card-grid--2">
        ${visibleServices.map(serviceCard).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Konsultasi Awal</span>
        <h2 class="display">Belum yakin layanan mana yang kamu butuhkan?</h2>
        <p>Ceritakan kebutuhanmu lewat WhatsApp — tim kami akan membantu mengarahkan ke layanan yang tepat.</p>
        <div class="cta-banner__actions">
          <a class="btn btn-wa btn-lg" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = servicesIndex;

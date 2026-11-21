const icons = require("../components/icons");
const { placeholderBadge } = require("../components/card");
const services = require("../content/services");

function servicesSlugPage(config, service) {
  const others = services.filter((s) => s.slug !== service.slug && s.category !== "akademik").slice(0, 3);
  return `
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / <a href="/services/">Layanan</a> / ${service.title}</div>
      <span class="eyebrow eyebrow--onlight">Layanan</span>
      <h1 class="display" style="font-size:30px;">${service.title}</h1>
      <p>${service.summary}</p>
    </div>
  </section>

  <section class="section">
    <div class="container two-col">
      <div>
        ${placeholderBadge(service) ? `<span class="badge badge-placeholder" style="margin-bottom:16px;display:inline-flex;">Contoh Konten</span>` : ""}
        <h3 class="display" style="font-size:20px;">Cakupan Umum</h3>
        <ul class="numbered-list" style="margin-top:16px;">
          ${service.points
            .map(
              (p, i) => `
            <li class="numbered-item">
              <span class="mono-index">0${i + 1}</span>
              <div><p>${p}</p></div>
            </li>`
            )
            .join("")}
        </ul>
        <p class="small" style="margin-top:20px;">${service.note}</p>
      </div>
      <div class="service-card">
        <h3>Tertarik dengan layanan ini?</h3>
        <p>Hubungi tim kami untuk konsultasi awal — tanpa komitmen.</p>
        <a class="btn btn-wa btn-block" href="${config.waLink(`Halo, saya ingin bertanya tentang layanan: ${service.title}`)}" target="_blank" rel="noopener">
          ${icons.whatsapp()} Tanya via WhatsApp
        </a>
        <a class="btn btn-outline btn-block" href="/services/">Lihat Layanan Lain</a>
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <h3 class="display" style="font-size:20px;margin-bottom:20px;">Layanan Lainnya</h3>
      <div class="card-grid card-grid--3">
        ${others
          .map(
            (s) => `
          <a class="service-card" href="/services/${s.slug}/" style="display:flex;">
            <h3>${s.title}</h3>
            <p>${s.summary}</p>
          </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner">
        <h2 class="display">Masih ada pertanyaan lain?</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-wa btn-lg" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
          <a class="btn btn-outline--onlight btn-lg" href="/contact/">Halaman Kontak</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = servicesSlugPage;

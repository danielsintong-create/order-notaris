const icons = require("../components/icons");

function ctaBanner({ eyebrow, title, waText, altHref, altLabel }) {
  return `
  <div class="cta-banner">
    ${eyebrow ? `<span class="eyebrow eyebrow--onlight">${eyebrow}</span>` : ""}
    <h2 class="display">${title}</h2>
    <div class="cta-banner__actions">
      <a class="btn btn-wa btn-lg" href="${waText}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
      <a class="btn btn-outline--onlight btn-lg" href="${altHref}">${altLabel}</a>
    </div>
  </div>`;
}

function about(config) {
  return `
  <section class="page-hero page-hero--photo" style="background-image:url('/assets/photos/meeting-room.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Tentang</div>
      <span class="eyebrow eyebrow--onlight">Tentang Kami</span>
      <h1 class="display">Tentang ${config.brand.name}</h1>
      <p>${config.brand.description}</p>
    </div>
  </section>

  <section class="section">
    <div class="container two-col">
      <div>
        <span class="eyebrow">Misi</span>
        <h2 class="display" style="font-size:26px;margin-top:10px;">Membuat ilmu kenotariatan mudah diakses dan dipraktikkan</h2>
        <p class="lede" style="margin-top:14px;">
          Banyak materi kenotariatan tersebar dan sulit diakses, terutama bagi mahasiswa tingkat awal.
          ORDER.NOTARIS hadir untuk merapikan itu — mulai dari edukasi dasar, bacaan reflektif,
          hingga jalur menuju layanan dan pengembangan karier profesional.
        </p>
      </div>
      <div>
        <span class="eyebrow">Visi</span>
        <h2 class="display" style="font-size:26px;margin-top:10px;">Ekosistem digital kenotariatan Indonesia</h2>
        <p class="lede" style="margin-top:14px;">
          Dalam jangka panjang, ORDER.NOTARIS ingin menjadi rumah bagi edukasi, media, pengembangan
          profesional, dan layanan kenotariatan Indonesia — dibangun bersama komunitasnya, bukan untuknya semata.
        </p>
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <span class="eyebrow">Mengapa ORDER.NOTARIS</span>
      <h2 class="display" style="font-size:26px;margin-top:10px;max-width:640px;">Dibangun dari kebutuhan nyata di dunia kenotariatan Indonesia</h2>
      <div class="numbered-list" style="margin-top:24px;max-width:720px;">
        <div class="numbered-item">
          <span class="mono-index">01</span>
          <div><h4>Kesenjangan Akses Ilmu</h4><p>Materi kenotariatan yang berkualitas sering tersebar dan sulit diakses, terutama bagi mahasiswa tingkat awal dan calon notaris.</p></div>
        </div>
        <div class="numbered-item">
          <span class="mono-index">02</span>
          <div><h4>Kebutuhan Jembatan Praktik</h4><p>Dunia akademik dan dunia praktik kenotariatan kerap berjalan terpisah — ORDER.NOTARIS ingin menjadi penghubung keduanya.</p></div>
        </div>
        <div class="numbered-item">
          <span class="mono-index">03</span>
          <div><h4>Komunitas, Bukan Sekadar Platform</h4><p>Dibangun bersama komunitas hukum yang lebih luas — notaris, PPAT, akademisi, dan mahasiswa — bukan untuknya semata.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${ctaBanner({
        eyebrow: "Kenalan Lebih Jauh",
        title: "Punya pertanyaan tentang ORDER.NOTARIS?",
        waText: config.waLink(),
        altHref: "/contact/",
        altLabel: "Hubungi Kami",
      })}
    </div>
  </section>
  `;
}

module.exports = about;

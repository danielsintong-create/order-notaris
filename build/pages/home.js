const icons = require("../components/icons");
const sectionHeading = require("../components/sectionHeading");
const { articleCard } = require("../components/card");
const articles = require("../content/articles");

const PILLARS = [
  {
    kicker: "LEARN.",
    title: "EDUKASI",
    description: "Artikel, insight, dan pembelajaran untuk memahami dunia kenotariatan.",
    href: "/education/",
    image: "/assets/photos/law-books.jpg",
    linkLabel: "Jelajahi Edukasi",
  },
  {
    kicker: "INFORM.",
    title: "MEDIA",
    description: "Berita, perspektif, dan perkembangan dunia kenotariatan.",
    href: "/media/",
    image: "/assets/photos/writing-desk.jpg",
    linkLabel: "Baca Media",
  },
  {
    kicker: "SERVE.",
    title: "LAYANAN",
    description: "Solusi dan layanan kenotariatan untuk kebutuhan profesional.",
    href: "/services/",
    image: "/assets/photos/pen-seal.jpg",
    linkLabel: "Jelajahi Layanan",
  },
];

// 3 service categories for the "Apa yang Anda butuhkan?" entry section. Each category
// links to the most relevant destination page directly (static links, no JS filtering —
// kept in the site's restrained editorial style rather than an interactive selector).
const SERVICE_CATEGORIES = [
  {
    title: "Notaris",
    description: "Pembuatan akta otentik untuk kebutuhan perorangan, korporasi, dan lembaga.",
    href: "/services/pembuatan-akta-notaris/",
    icon: icons.briefcase(),
  },
  {
    title: "PPAT",
    description: "Peralihan hak atas tanah dan bangunan — jual beli, hibah, dan proses terkait.",
    href: "/services/ppat-peralihan-hak-tanah/",
    icon: icons.briefcase(),
  },
  {
    title: "Korporasi & Legal",
    description: "Konsultasi hukum korporasi, pembiayaan, serta legal due diligence.",
    href: "/services/",
    icon: icons.briefcase(),
  },
];

const HOW_IT_WORKS = [
  {
    title: "Jelajahi Kebutuhan",
    description: "Pilih kategori layanan yang relevan, atau baca materi edukasi untuk memahami kebutuhanmu lebih dulu.",
  },
  {
    title: "Konsultasi via WhatsApp",
    description: "Sampaikan kebutuhanmu langsung ke tim kami — konsultasi awal tanpa komitmen.",
  },
  {
    title: "Kesepakatan & Pengerjaan",
    description: "Ruang lingkup pekerjaan dan ketentuan disepakati bersama sebelum pekerjaan resmi dimulai.",
  },
];

// Pillar card with a photo on top. Each photo matches the hero photo of the page the
// card links to (Edukasi/Media/Layanan), so the click lands somewhere visually familiar.
function pillarPhotoCard({ index, kicker, title, description, href, image, linkLabel }) {
  return `
  <a class="pillar-photo" href="${href}">
    <div class="pillar-photo__media">
      <img src="${image}" alt="" loading="lazy" width="1456" height="1088" />
    </div>
    <div class="pillar-photo__body">
      <div class="pillar-photo__meta">
        <span class="mono-index">0${index}</span>
        <span class="editorial-item__kicker">${kicker}</span>
      </div>
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="editorial-item__link">${linkLabel} ${icons.arrowRight()}</span>
    </div>
  </a>`;
}

function categoryCard({ index, title, description, href, icon }) {
  return `
  <a class="service-card" href="${href}" style="display:flex;">
    <div class="pillar-card__icon">${icon}</div>
    <h3>${title}</h3>
    <p>${description}</p>
  </a>`;
}

function home(config) {
  const featuredArticles = articles.slice(0, 3);

  return `
  <section class="hero hero--photo" style="background-image:url('/assets/photos/hero-building.jpg');">
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="container hero__inner">
      <h1 class="hero__title">Ekosistem Kenotariatan Indonesia</h1>
      <p class="hero__tagline">Learn. Inform. Serve.</p>
      <div class="hero__cta">
        <a class="btn-text btn-text--onlight" href="/education/">Jelajahi ${icons.arrowRight()}</a>
      </div>
    </div>
  </section>

  <section class="section section--pillars" aria-label="Learn, Inform, Serve">
    <div class="container">
      <div class="pillar-photo-grid">
        ${PILLARS.map((p, i) => pillarPhotoCard({ index: i + 1, ...p })).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Mulai di Sini",
        title: "Apa yang Anda butuhkan?",
        lede: "Pilih kategori layanan yang paling sesuai dengan kebutuhanmu saat ini.",
      })}
      <div class="card-grid card-grid--3">
        ${SERVICE_CATEGORIES.map((c, i) => categoryCard({ index: i + 1, ...c })).join("")}
      </div>
    </div>
  </section>

  <section class="photo-band" style="background-image:url('/assets/photos/library-archive.jpg');">
    <div class="container photo-band__inner">
      <span class="eyebrow eyebrow--onlight">Komitmen Kami</span>
      <h2 class="display" style="font-size:26px;margin-top:10px;">Ilmu kenotariatan yang tersusun rapi, bukan tersebar dan sulit ditemukan.</h2>
      <p class="lede" style="margin-top:12px;max-width:56ch;">Setiap artikel, kelas, dan materi di ${config.brand.name} disusun berjenjang — dari pengantar untuk mahasiswa tingkat pertama hingga praktik lanjutan untuk profesional.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Bagaimana Prosesnya",
        title: "How It Works",
        lede: "Tiga langkah sederhana dari menemukan kebutuhanmu hingga pekerjaan dimulai.",
      })}
      <div class="editorial-grid editorial-grid--3col">
        ${HOW_IT_WORKS.map(
          (s, i) => `
        <div class="editorial-item">
          <span class="mono-index">0${i + 1}</span>
          <div>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
          </div>
        </div>`
        ).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Knowledge",
        title: "Wawasan untuk Profesi Anda",
        lede: "Perspektif, analisis, dan wawasan untuk memahami dunia kenotariatan.",
        link: { href: "/media/", label: "Lihat Semua Artikel" },
      })}
      <div class="card-grid card-grid--3">
        ${featuredArticles.map(articleCard).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="academy-teaser academy-teaser--photo" style="background-image:url('/assets/photos/lecture-hall.jpg');">
        <span class="academy-teaser__kicker">AKADEMI</span>
        <h2>ORDER.NOTARIS ACADEMY</h2>
        <p class="academy-teaser__sub">Belajar dari praktisi dan akademisi.</p>
        <p class="body">Program pembelajaran untuk membangun kompetensi dan kesiapan profesional di dunia
        kenotariatan — dari mahasiswa M.Kn. hingga praktisi yang ingin memperdalam praktik.</p>
        <div class="academy-teaser__cta">
          <a class="btn-text btn-text--onlight" href="/academy/">Segera Hadir ${icons.arrowRight()}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Siap Memulai?</span>
        <h2 class="display">Ceritakan kebutuhanmu, kami bantu arahkan ke langkah berikutnya</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-wa btn-lg" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
          <a class="btn btn-outline--onlight btn-lg" href="/contact/">Halaman Kontak</a>
        </div>
      </div>
    </div>
  </section>

  <section class="credibility-strip">
    <div class="container">
      <span class="eyebrow" style="justify-content:center;">Dibangun untuk Komunitas Hukum Indonesia</span>
      <p>
        <strong>Profesor</strong> · <strong>Notaris</strong> · <strong>PPAT</strong> · <strong>Advokat</strong> ·
        <strong>Mahasiswa M.Kn.</strong> · <strong>Mahasiswa Hukum</strong> · <strong>Profesional Legal Korporat</strong>
      </p>
    </div>
  </section>
  `;
}

module.exports = home;

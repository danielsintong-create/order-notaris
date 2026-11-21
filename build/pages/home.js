const icons = require("../components/icons");
const sectionHeading = require("../components/sectionHeading");
const { articleCard } = require("../components/card");
const articles = require("../content/articles");
const services = require("../content/services");

const PILLARS = [
  {
    kicker: "LEARN.",
    title: "EDUKASI",
    description: "Artikel, insight, dan pembelajaran untuk memahami dunia kenotariatan.",
    href: "/education/",
    linkLabel: "Jelajahi Edukasi",
  },
  {
    kicker: "INFORM.",
    title: "MEDIA",
    description: "Berita, perspektif, dan perkembangan dunia kenotariatan.",
    href: "/media/",
    linkLabel: "Baca Media",
  },
  {
    kicker: "SERVE.",
    title: "LAYANAN",
    description: "Solusi dan layanan kenotariatan untuk kebutuhan profesional.",
    href: "/services/",
    linkLabel: "Jelajahi Layanan",
  },
];

const AUDIENCE = [
  { title: "Mahasiswa Hukum", description: "Bangun fondasi hukum dan kenali dunia kenotariatan sejak dini." },
  { title: "Mahasiswa M.Kn.", description: "Perluas wawasan akademik dan persiapkan perjalanan profesional." },
  { title: "Notaris & PPAT", description: "Temukan insight, informasi, dan layanan yang relevan dengan praktik." },
  { title: "Legal Professional", description: "Perspektif hukum untuk kebutuhan profesional dan korporasi." },
  { title: "ALB INI & IPPAT", description: "Ikuti perkembangan regulasi dan wawasan praktis sebagai Anggota Luar Biasa menuju pengangkatan sebagai notaris/PPAT." },
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

function editorialItem({ index, kicker, title, description, href, linkLabel }) {
  return `
  <a class="editorial-item" href="${href}" style="text-decoration:none;">
    <span class="mono-index">0${index}</span>
    <div>
      ${kicker ? `<span class="editorial-item__kicker">${kicker}</span>` : ""}
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="editorial-item__link">${linkLabel} ${icons.arrowRight()}</span>
    </div>
  </a>`;
}

function audienceItem({ index, title, description }) {
  return `
  <div class="editorial-item">
    <span class="mono-index">0${index}</span>
    <div>
      <h3 style="font-size:18px;">${title}</h3>
      <p>${description}</p>
    </div>
  </div>`;
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
  const featuredServices = services.filter((s) => s.category !== "akademik").slice(0, 3);

  return `
  <section class="hero hero--photo" style="background-image:url('/assets/photos/hero-building.jpg');">
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="container hero__inner">
      <span class="eyebrow eyebrow--onlight">Ekosistem Digital Kenotariatan Indonesia</span>
      <h1 class="hero__title">
        Dunia Kenotariatan Indonesia,
        <span class="accent">dalam Satu Ekosistem.</span>
      </h1>
      <div class="hero__cta">
        <a class="btn-text btn-text--onlight" href="/education/">Jelajahi ${icons.arrowRight()}</a>
      </div>
    </div>
  </section>

  <section class="section">
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

  <section class="section section--dim">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Layanan Unggulan",
        title: "Layanan Notarial & PPAT",
        lede: "Didampingi melalui proses yang jelas, dengan konsultasi awal sebelum penugasan dimulai.",
      })}
      <div class="services-list">
        ${featuredServices
          .map(
            (s) => `
          <div class="service-row">
            <div>
              <div class="service-row__title">${s.title}</div>
              <p class="service-row__desc">${s.summary}</p>
            </div>
            <a class="service-row__link" href="/services/${s.slug}/">Lihat Detail ${icons.arrowRight()}</a>
          </div>`
          )
          .join("")}
      </div>
      <div class="services-actions">
        <a class="btn btn-navy" href="/services/">Jelajahi Semua Layanan ${icons.arrowRight()}</a>
        <a class="btn-text" href="${config.waLink()}" target="_blank" rel="noopener">Konsultasi via WhatsApp ${icons.arrowRight()}</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Mengapa ORDER.NOTARIS",
        title: "Tiga Pilar ORDER.NOTARIS",
        lede: "Ekosistem yang dirancang untuk menemani perjalanan profesional Anda — dari belajar hingga berkarya.",
      })}
      <div class="editorial-grid editorial-grid--3col">
        ${PILLARS.map((p, i) => editorialItem({ index: i + 1, ...p })).join("")}
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

  <section class="section section--dim">
    <div class="container">
      ${sectionHeading({
        eyebrow: "Untuk Siapa",
        title: "Dibangun untuk Dunia Kenotariatan",
      })}
      <div class="editorial-grid editorial-grid--2col">
        ${AUDIENCE.map((a, i) => audienceItem({ index: i + 1, ...a })).join("")}
      </div>
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

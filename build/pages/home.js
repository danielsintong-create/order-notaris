const icons = require("../components/icons");
const sectionHeading = require("../components/sectionHeading");
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

// Three full-bleed photo panels under the hero, modelled on umbra.law's interactive
// banners: the title is always visible, the body text fades in on hover/focus (and is
// shown permanently on touch screens, which have no hover). Each panel links onward.
const INSIGHT_PANELS = [
  {
    title: "What is ORDER.NOTARIS?",
    body: "<p>A digital ecosystem for Indonesian notarial practice, bringing education, media, and services together in one platform.</p>",
    href: "/about/",
    image: "/assets/photos/reception.jpg",
  },
  {
    title: "What ORDER.NOTARIS Does?",
    body: "<p><b>LEARN</b> &mdash; structured notarial learning, step by step<br><b>INFORM</b> &mdash; regulatory updates and practice perspectives<br><b>SERVE</b> &mdash; guidance toward the right service</p>",
    href: "/education/",
    image: "/assets/photos/lecture-hall.jpg",
  },
  {
    title: "How Can ORDER.NOTARIS Help You?",
    body: "<p>Choose a service or tell us what you need, and we will guide you to the next step, starting with an initial consultation via WhatsApp.</p>",
    href: "/contact/",
    image: "/assets/photos/meeting-room.jpg",
  },
];

// "Layanan Paling Diminati" carousel (pattern from hukumku.id): tall photo cards with a
// navy tint, a white icon top-left and the title bottom-left. Photos are temporary picks
// from the existing set until service-specific photos are supplied.
// Items without their own page link to WhatsApp with a prefilled message (waText).
const FEATURED_SERVICES = [
  { title: "Template Soal ALB INI dan IPPAT", href: "/education/#bank-soal-alb-ini", icon: "clipboard", image: "/assets/photos/law-books.jpg", pos: "30% 50%" },
  { title: "Konsultasi Akta Notaris", href: "/services/pembuatan-akta-notaris/", icon: "stamp", image: "/assets/photos/pen-seal.jpg", pos: "70% 60%" },
  { title: "Konsultasi Kasus Pengurusan Pertanahan", href: "/services/ppat-peralihan-hak-tanah/", icon: "landHome", image: "/assets/photos/hero-building.jpg", pos: "65% 50%" },
  { title: "Bimbingan Jurnal Ilmiah", href: "/academy/#bimbingan-jurnal-ilmiah", icon: "cap", image: "/assets/photos/writing-desk.jpg", pos: "30% 60%" },
  { title: "Konsultasi Penyelesaian Hutang", waText: "Halo ORDER.NOTARIS, saya ingin konsultasi mengenai penyelesaian hutang.", icon: "scale", image: "/assets/photos/meeting-room.jpg", pos: "45% 60%" },
];

// Process steps, laid out like a fintech "cara mudah" flow: an illustration tile, a
// numbered title and a short line under it. Illustrations are inline SVG in the brand navy.
const STEP_ART = {
  explore: `<svg viewBox="0 0 200 200" aria-hidden="true"><rect x="62" y="28" width="76" height="144" rx="14" fill="#fff" stroke="#2b4661" stroke-width="4"/><rect x="88" y="37" width="24" height="5" rx="2.5" fill="#2b4661"/><rect x="74" y="54" width="52" height="14" rx="7" fill="#e6edf4" stroke="#9cb8d3" stroke-width="2"/><circle cx="84" cy="61" r="3.5" fill="none" stroke="#46739f" stroke-width="2"/><rect x="74" y="82" width="10" height="10" rx="2" fill="#6b94bd"/><rect x="90" y="84" width="34" height="6" rx="3" fill="#cad9e8"/><rect x="74" y="100" width="10" height="10" rx="2" fill="#6b94bd"/><rect x="90" y="102" width="28" height="6" rx="3" fill="#cad9e8"/><rect x="74" y="118" width="10" height="10" rx="2" fill="#6b94bd"/><rect x="90" y="120" width="32" height="6" rx="3" fill="#cad9e8"/><circle cx="134" cy="136" r="18" fill="#fff" stroke="#2b4661" stroke-width="5"/><path d="M147 149l14 14" stroke="#2b4661" stroke-width="7" stroke-linecap="round"/></svg>`,
  consult: `<svg viewBox="0 0 200 200" aria-hidden="true"><rect x="62" y="28" width="76" height="144" rx="14" fill="#fff" stroke="#2b4661" stroke-width="4"/><rect x="88" y="37" width="24" height="5" rx="2.5" fill="#2b4661"/><rect x="72" y="56" width="42" height="16" rx="8" fill="#e6edf4"/><rect x="86" y="80" width="42" height="16" rx="8" fill="#2b4661"/><rect x="72" y="104" width="48" height="16" rx="8" fill="#e6edf4"/><circle cx="80" cy="134" r="2.5" fill="#9cb8d3"/><circle cx="88" cy="134" r="2.5" fill="#9cb8d3"/><circle cx="96" cy="134" r="2.5" fill="#9cb8d3"/><circle cx="136" cy="140" r="20" fill="#1f9d55"/><path d="M136 129a11 11 0 0 0-9.5 16.5l-1.5 5.5 5.7-1.5A11 11 0 1 0 136 129Z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/></svg>`,
  agree: `<svg viewBox="0 0 200 200" aria-hidden="true"><rect x="56" y="30" width="88" height="128" rx="8" fill="#fff" stroke="#2b4661" stroke-width="4"/><rect x="70" y="46" width="44" height="7" rx="3.5" fill="#2b4661"/><rect x="70" y="64" width="60" height="5" rx="2.5" fill="#cad9e8"/><rect x="70" y="76" width="56" height="5" rx="2.5" fill="#cad9e8"/><rect x="70" y="88" width="60" height="5" rx="2.5" fill="#cad9e8"/><rect x="70" y="100" width="40" height="5" rx="2.5" fill="#cad9e8"/><path d="M72 130c6-10 10-10 12-2s6 6 10-2 8-6 12 0" fill="none" stroke="#46739f" stroke-width="3" stroke-linecap="round"/><rect x="70" y="138" width="46" height="2" rx="1" fill="#9cb8d3"/><circle cx="140" cy="146" r="20" fill="#2b4661"/><path d="M131 146l6 6 12-12" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

const HOW_IT_WORKS = [
  {
    art: "explore",
    title: "Jelajahi Kebutuhan",
    description: "Pilih kategori layanan yang relevan, atau baca materi edukasi untuk memahami kebutuhanmu lebih dulu.",
  },
  {
    art: "consult",
    title: "Konsultasi via WhatsApp",
    description: "Sampaikan kebutuhanmu langsung ke tim kami — konsultasi awal tanpa komitmen.",
  },
  {
    art: "agree",
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

function insightPanel({ title, body, href, image }) {
  return `
  <a class="insight-panel" href="${href}">
    <img src="${image}" alt="" loading="lazy" width="1456" height="1088" />
    <div class="insight-panel__body">
      <h3 class="insight-panel__title">${title}</h3>
      <div class="insight-panel__content">${body}</div>
    </div>
  </a>`;
}

function serviceSlide(config, { title, href, waText, icon, image, pos }) {
  const link = waText ? `href="${config.waLink(waText)}" target="_blank" rel="noopener"` : `href="${href}"`;
  return `
  <a class="service-slide" ${link}>
    <img src="${image}" alt="" loading="lazy" width="1456" height="1088" style="object-position:${pos};" />
    <span class="service-slide__icon">${icons[icon]()}</span>
    <h3 class="service-slide__title">${title}</h3>
  </a>`;
}

// Article tile in umbra.law's "Insights" format: photo, date, category, title.
function articleTile(article) {
  return `
  <a class="article-tile" href="/media/${article.slug}/">
    <div class="article-tile__media">
      <img src="${article.image}" alt="" loading="lazy" width="1456" height="1088" />
      <span class="article-tile__overlay" aria-hidden="true">${icons.plus()}</span>
    </div>
    <span class="article-tile__date">${article.date}</span>
    <span class="article-tile__cat">${article.category}</span>
    <h3 class="article-tile__title">${article.title}</h3>
  </a>`;
}

function stepCard({ art, title, description }, i) {
  return `
  <div class="step-card">
    <div class="step-card__art">${STEP_ART[art]}</div>
    <h3 class="step-card__title">${i + 1}. ${title}</h3>
    <p class="step-card__desc">${description}</p>
  </div>`;
}

function home(config) {
  const featuredArticles = articles.slice(0, 4);

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

  <section class="insight-panels" aria-label="Tentang ORDER.NOTARIS">
    ${INSIGHT_PANELS.map(insightPanel).join("")}
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
      <h2 class="display center-heading">Layanan Paling Diminati</h2>
      <div class="service-carousel" data-carousel>
        <button class="service-carousel__btn service-carousel__btn--prev" type="button" aria-label="Sebelumnya" data-carousel-prev>${icons.chevronLeft()}</button>
        <div class="service-carousel__track" data-carousel-track>
          ${FEATURED_SERVICES.map((s) => serviceSlide(config, s)).join("")}
        </div>
        <button class="service-carousel__btn service-carousel__btn--next" type="button" aria-label="Berikutnya" data-carousel-next>${icons.chevronRight()}</button>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({
        title: "Media &amp; Artikel",
        link: { href: "/media/", label: "Lihat Semua Artikel" },
      })}
      <div class="article-tile-grid">
        ${featuredArticles.map(articleTile).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <div class="academy-teaser academy-teaser--photo" style="background-image:url('/assets/photos/lecture-hall.jpg');">
        <span class="academy-teaser__kicker">AKADEMI</span>
        <h2>ORDER.NOTARIS ACADEMY</h2>
        <p class="academy-teaser__sub">Belajar dari praktisi dan akademisi.</p>
        <p class="body">Program pembelajaran untuk membangun kompetensi dan kesiapan profesional di dunia
        kenotariatan dan PPAT, sejak lulus M.Kn., masa ALB INI &amp; IPPAT, hingga lulus Ujian Kode Etik Notaris dan PPAT.</p>
        <div class="academy-teaser__cta">
          <a class="btn-text btn-text--onlight" href="/academy/">Akses Akademi ${icons.arrowRight()}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="display center-heading">Cara Mudah Memulai Bersama ${config.brand.name}</h2>
      <p class="center-sub">Proses jelas, terarah, dan tanpa komitmen di awal.</p>
      <div class="step-grid">
        ${HOW_IT_WORKS.map(stepCard).join("")}
      </div>
    </div>
  </section>

  <script>
    (function () {
      var root = document.querySelector('[data-carousel]');
      if (!root) return;
      var track = root.querySelector('[data-carousel-track]');
      function step() {
        var card = track.querySelector('.service-slide');
        return card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0) : 300;
      }
      function atEnd() { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }
      function next() { if (atEnd()) { track.scrollTo({ left: 0, behavior: 'smooth' }); } else { track.scrollBy({ left: step(), behavior: 'smooth' }); } }
      function prev() { if (track.scrollLeft <= 4) { track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' }); } else { track.scrollBy({ left: -step(), behavior: 'smooth' }); } }
      root.querySelector('[data-carousel-next]').addEventListener('click', next);
      root.querySelector('[data-carousel-prev]').addEventListener('click', prev);
      // Auto-advance every 4s; pauses while hovered/focused/touched, off for reduced motion.
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var paused = false;
      ['mouseenter', 'focusin', 'touchstart'].forEach(function (ev) { root.addEventListener(ev, function () { paused = true; }, { passive: true }); });
      ['mouseleave', 'focusout'].forEach(function (ev) { root.addEventListener(ev, function () { paused = false; }); });
      setInterval(function () { if (!paused && !document.hidden) next(); }, 4000);
    })();
  </script>
  `;
}

module.exports = home;

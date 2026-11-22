const icons = require("../components/icons");
const { articleTile, newsStatus, newsBadge, newsCard } = require("../components/card");
const articles = require("../content/articles");
const news = require("../content/news");

// Status refresher shared by the Media index and news pages: flips "Akan Datang" to
// "Telah Berlangsung" in the visitor's browser once an event's end date has passed.
const STATUS_SCRIPT = `
  <script>
    (function () {
      var now = new Date();
      document.querySelectorAll('[data-event-end]').forEach(function (el) {
        var end = new Date(el.getAttribute('data-event-end') + 'T23:59:59+07:00');
        var up = now <= end;
        el.textContent = up ? 'Akan Datang' : 'Telah Berlangsung';
        el.classList.toggle('news-status--upcoming', up);
        el.classList.toggle('news-status--past', !up);
      });
    })();
  </script>`;

// Upcoming events first (soonest first), then past items (most recent first).
function sortedNews() {
  return news.slice().sort((a, b) => {
    const sa = newsStatus(a), sb = newsStatus(b);
    if (sa !== sb) return sa === "upcoming" ? -1 : 1;
    return sa === "upcoming" ? a.eventEnd.localeCompare(b.eventEnd) : b.eventEnd.localeCompare(a.eventEnd);
  });
}

function featuredNews(item) {
  return `
  <article class="news-feature">
    <a class="news-feature__media" href="/media/kabar/${item.slug}/" aria-label="${item.title}">
      <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
    </a>
    <div class="news-feature__body">
      <div class="news-card__meta"><span class="news-card__cat">${item.category}</span>${newsBadge(item)}</div>
      <h3 class="news-feature__title"><a href="/media/kabar/${item.slug}/">${item.title}</a></h3>
      <p class="news-feature__summary">${item.summary}</p>
      <dl class="news-feature__facts">
        <div><dt>Tanggal acara</dt><dd>${item.eventDate}</dd></div>
        <div><dt>Sumber</dt><dd>${item.source}</dd></div>
      </dl>
      <a class="btn btn-navy" href="/media/kabar/${item.slug}/">Baca Selengkapnya ${icons.arrowRight()}</a>
    </div>
  </article>`;
}

function mediaIndex(config) {
  const list = sortedNews();
  const [lead, ...rest] = list;
  const cats = [...new Set(articles.map((a) => a.category))];
  return `
  <section class="page-hero page-hero--photo edu-hero" style="background-image:url('/assets/photos/writing-desk.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Media &amp; Artikel</div>
      <span class="eyebrow eyebrow--onlight">Pilar 2 — Inform</span>
      <h1 class="display">Media &amp; Artikel</h1>
      <p>Kabar dan agenda terkini dunia kenotariatan, serta artikel analitis seputar praktik notaris, PPAT, dan isu hukum kontemporer di Indonesia.</p>
      <div class="edu-hero__cta">
        <a class="btn btn-light btn-lg" href="#media">Kabar &amp; Agenda ${icons.arrowRight()}</a>
        <a class="btn btn-outline--onlight btn-lg" href="#artikel">Baca Artikel</a>
      </div>
    </div>
  </section>

  <nav class="media-tabs" aria-label="Bagian halaman">
    <div class="container media-tabs__row">
      <a href="#media">Media <span>${news.length}</span></a>
      <a href="#artikel">Artikel <span>${articles.length}</span></a>
    </div>
  </nav>

  <section class="section" id="media">
    <div class="container">
      <div class="media-head">
        <div>
          <span class="eyebrow">Media</span>
          <h2 class="display">Kabar &amp; Agenda Kenotariatan</h2>
          <p class="media-head__lede">Pengumuman dan agenda dari organisasi profesi dan instansi terkait, dirangkum dengan sumber resminya.</p>
        </div>
      </div>
      ${lead ? featuredNews(lead) : ""}
      ${rest.length ? `<div class="news-grid">${rest.map(newsCard).join("")}</div>` : ""}
      <p class="media-note">Informasi agenda bersumber dari penyelenggara dan dapat berubah. Selalu konfirmasi ke narahubung resmi sebelum mendaftar atau melakukan pembayaran.</p>
    </div>
  </section>

  <section class="section section--dim" id="artikel">
    <div class="container">
      <div class="media-head">
        <div>
          <span class="eyebrow">Artikel</span>
          <h2 class="display">Wawasan &amp; Analisis</h2>
          <p class="media-head__lede">Bacaan reflektif dan analitis untuk mahasiswa M.Kn., calon notaris, hingga praktisi.</p>
        </div>
      </div>
      <div class="filter-chips" role="group" aria-label="Filter kategori artikel" data-filter-group>
        <button type="button" class="chip is-active" data-filter="*">Semua</button>
        ${cats.map((c) => `<button type="button" class="chip" data-filter="${c}">${c}</button>`).join("")}
      </div>
      <div class="article-index-grid" data-filter-items>
        ${articles.map((a) => articleTile(a)).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Punya Kabar atau Agenda?</span>
        <h2 class="display">Kirimkan informasi kegiatan kenotariatan untuk dimuat di Media</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-wa btn-lg" href="${config.waLink("Halo ORDER.NOTARIS, saya ingin mengirimkan informasi kegiatan/agenda kenotariatan untuk dimuat di Media.")}" target="_blank" rel="noopener">${icons.whatsapp()} Kirim via WhatsApp</a>
        </div>
      </div>
    </div>
  </section>

  ${STATUS_SCRIPT}
  <script>
    (function () {
      var group = document.querySelector('[data-filter-group]');
      var items = document.querySelectorAll('[data-filter-items] [data-cat]');
      if (!group) return;
      group.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-filter]');
        if (!btn) return;
        var f = btn.getAttribute('data-filter');
        group.querySelectorAll('[data-filter]').forEach(function (b) { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        items.forEach(function (it) { it.hidden = !(f === '*' || it.getAttribute('data-cat') === f); });
      });
    })();
  </script>
  `;
}

mediaIndex.STATUS_SCRIPT = STATUS_SCRIPT;
module.exports = mediaIndex;

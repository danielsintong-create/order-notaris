const icons = require("../components/icons");
const { newsBadge, newsCard } = require("../components/card");
const news = require("../content/news");
const { STATUS_SCRIPT } = require("./media");

// Detail page for one Media item (kabar/agenda): text + key facts + the official flyer.
function mediaNewsPage(config, item) {
  const others = news.filter((n) => n.slug !== item.slug).slice(0, 3);
  const url = `https://ordernotaris.com/media/kabar/${item.slug}/`;
  const share = `https://wa.me/?text=${encodeURIComponent(`${item.title} — ${url}`)}`;
  return `
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / <a href="/media/">Media &amp; Artikel</a> / Kabar</div>
      <div class="news-card__meta news-hero__meta"><span class="eyebrow eyebrow--onlight">${item.category}</span>${newsBadge(item)}</div>
      <h1 class="display news-hero__title">${item.title}</h1>
      <p class="news-hero__by">Diumumkan ${item.published} · Sumber: ${item.source}</p>
    </div>
  </section>

  <section class="section">
    <div class="container news-detail">
      <div class="news-detail__main">
        <div class="news-detail__text">
          ${item.body.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <h2 class="news-detail__h">Informasi Penting</h2>
        <dl class="news-facts">
          ${item.details.map((d) => `<div><dt>${d.label}</dt><dd>${d.value}</dd></div>`).join("")}
        </dl>
        <p class="media-note">Informasi ini dirangkum dari e-flyer resmi penyelenggara dan dapat berubah. ${config.brand.name} bukan penyelenggara kegiatan ini; konfirmasi ke narahubung resmi sebelum mendaftar atau melakukan pembayaran.</p>
        <div class="news-detail__actions">
          <a class="btn btn-wa" href="${share}" target="_blank" rel="noopener">${icons.whatsapp()} Bagikan via WhatsApp</a>
          <a class="btn btn-outline" href="/media/#media">Kabar Lainnya</a>
        </div>
      </div>
      <aside class="news-detail__flyer">
        <a href="${item.image}" target="_blank" rel="noopener" title="Buka e-flyer ukuran penuh">
          <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
        </a>
        <p class="news-detail__caption">E-flyer resmi · klik untuk memperbesar</p>
      </aside>
    </div>
  </section>

  ${
    others.length
      ? `<section class="section section--dim">
    <div class="container">
      <h2 class="display news-detail__h" style="margin-top:0;">Kabar Lainnya</h2>
      <div class="news-grid">${others.map(newsCard).join("")}</div>
    </div>
  </section>`
      : ""
  }
  ${STATUS_SCRIPT}
  `;
}

module.exports = mediaNewsPage;

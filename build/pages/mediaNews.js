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
      <p class="news-hero__by">${item.published} · Sumber: ${item.source}</p>
    </div>
  </section>

  <section class="section">
    <div class="container news-detail">
      <div class="news-detail__main">
        <div class="news-detail__text">
          ${item.body.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <h2 class="news-detail__h">${item.eventDate ? "Informasi Penting" : "Poin Penting"}</h2>
        <dl class="news-facts">
          ${item.details.map((d) => `<div><dt>${d.label}</dt><dd>${d.value}</dd></div>`).join("")}
        </dl>
        ${
          item.sources
            ? `<h2 class="news-detail__h">Sumber</h2>
        <ul class="news-sources">${item.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join("")}</ul>`
            : ""
        }
        <p class="media-note">${
          item.flyer
            ? `Informasi ini dirangkum dari e-flyer resmi penyelenggara dan dapat berubah. ${config.brand.name} bukan penyelenggara kegiatan ini; konfirmasi ke narahubung resmi sebelum mendaftar atau melakukan pembayaran.`
            : `Kabar ini dirangkum oleh redaksi ${config.brand.name} dari sumber yang dicantumkan dan dapat berubah. Untuk keperluan resmi, selalu rujuk pengumuman atau peraturan dari instansi terkait.`
        }</p>
        <div class="news-detail__actions">
          <a class="btn btn-wa" href="${share}" target="_blank" rel="noopener">${icons.whatsapp()} Bagikan via WhatsApp</a>
          <a class="btn btn-outline" href="/media/#media">Kabar Lainnya</a>
        </div>
      </div>
      <aside class="news-detail__flyer${item.flyer ? "" : " news-detail__flyer--cover"}">
        ${
          item.flyer
            ? `<a href="${item.image}" target="_blank" rel="noopener" title="Buka e-flyer ukuran penuh">
          <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
        </a>
        <p class="news-detail__caption">E-flyer resmi · klik untuk memperbesar</p>`
            : `<img src="${item.image}" alt="" loading="lazy" />
        <p class="news-detail__caption">Ilustrasi</p>`
        }
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

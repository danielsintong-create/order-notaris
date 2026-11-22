const { articleTile } = require("../components/card");
const articles = require("../content/articles");

function mediaSlugPage(config, article) {
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return `
  <section class="page-hero">
    <div class="container article-hero">
      <div class="breadcrumb"><a href="/">Beranda</a> / <a href="/media/">Media &amp; Artikel</a> / Artikel</div>
      <span class="eyebrow eyebrow--onlight">${article.category}</span>
      <h1 class="display article-hero__title">${article.title}</h1>
      <p class="article-hero__meta">${article.date} · ${article.readTime} · ${article.author}</p>
    </div>
  </section>

  <section class="section article-section">
    <div class="container article-wrap">
      <img class="article-cover" src="${article.image}" alt="" width="1200" height="900" />
      <div class="article-body">
        ${article.body.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <h2 class="display news-detail__h" style="margin-top:0;">Artikel Lainnya</h2>
      <div class="article-index-grid article-index-grid--3">
        ${others.map((a) => articleTile(a, { summary: false })).join("")}
      </div>
    </div>
  </section>
  `;
}

module.exports = mediaSlugPage;

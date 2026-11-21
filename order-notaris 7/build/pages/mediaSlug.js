const { articleCard } = require("../components/card");
const articles = require("../content/articles");

function mediaSlugPage(config, article) {
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return `
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / <a href="/media/">Media</a> / ${article.title}</div>
      <span class="eyebrow eyebrow--onlight">${article.category}</span>
      <h1 class="display" style="font-size:30px;">${article.title}</h1>
      <p class="small" style="color:rgba(255,255,255,0.65);display:flex;gap:14px;align-items:center;margin-top:16px;">
        <span style="display:flex;align-items:center;gap:5px;">${article.readTime}</span>
        <span>·</span>
        <span>${article.author}</span>
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container" style="max-width:760px;">
      <div class="max-w-prose" style="display:grid;gap:18px;">
        ${article.body.map((p) => `<p class="lede" style="color:var(--ink-700);">${p}</p>`).join("")}
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <h3 class="display" style="font-size:20px;margin-bottom:20px;">Artikel Lainnya</h3>
      <div class="card-grid card-grid--3">
        ${others.map(articleCard).join("")}
      </div>
    </div>
  </section>
  `;
}

module.exports = mediaSlugPage;

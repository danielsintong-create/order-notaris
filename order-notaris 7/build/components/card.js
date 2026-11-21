const icons = require("./icons");

function placeholderBadge(item) {
  return item.placeholder ? `<span class="badge badge-placeholder">Contoh Konten</span>` : "";
}

function articleCard(article) {
  return `
  <a class="article-card" href="/media/${article.slug}/">
    <div class="article-card__body">
      <div class="article-card__meta">
        <span class="article-card__cat">${article.category}</span>
        ${placeholderBadge(article)}
      </div>
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <div class="article-card__foot">
        <span class="small">${article.readTime} · ${article.date}</span>
        <span class="small" style="display:flex;align-items:center;gap:4px;color:var(--navy-900);font-weight:700;">Baca ${icons.chevronRight()}</span>
      </div>
    </div>
  </a>`;
}

function serviceLinkCard(service) {
  return `
  <a class="service-card" href="/services/${service.slug}/" style="display:flex;">
    <h3>${service.title}</h3>
    <p>${service.summary}</p>
  </a>`;
}

module.exports = { articleCard, serviceLinkCard, placeholderBadge };

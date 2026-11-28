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

// Article tile in umbra.law's "Insights" format: cover, date, category, title (+ summary).
function articleTile(article, { summary = true } = {}) {
  return `
  <a class="article-tile" href="/media/${article.slug}/" data-cat="${article.category}">
    <div class="article-tile__media">
      <img src="${article.image}" alt="" loading="lazy" width="1200" height="900" />
      <span class="article-tile__overlay" aria-hidden="true">${icons.plus()}</span>
    </div>
    <span class="article-tile__date">${article.date} · ${article.readTime}</span>
    <span class="article-tile__cat">${article.category}</span>
    <h3 class="article-tile__title">${article.title}</h3>
    ${summary ? `<p class="article-tile__summary">${article.summary}</p>` : ""}
  </a>`;
}

// News card for the Media (kabar & agenda) list. Status is computed at build time and
// refreshed in the browser from data-event-end.
function newsStatus(item, now = new Date()) {
  if (!item.eventEnd) return "news";
  const end = new Date(item.eventEnd + "T23:59:59+07:00");
  return now <= end ? "upcoming" : "past";
}
function newsBadge(item) {
  const st = newsStatus(item);
  if (st === "news") return "";
  return `<span class="news-status news-status--${st}" data-event-end="${item.eventEnd}">${st === "upcoming" ? "Akan Datang" : "Telah Berlangsung"}</span>`;
}
function newsCard(item) {
  return `
  <a class="news-card" href="/media/kabar/${item.slug}/">
    <div class="news-card__media${item.flyer ? "" : " news-card__media--cover"}"><img src="${item.image}" alt="" loading="lazy" /></div>
    <div class="news-card__body">
      <div class="news-card__meta"><span class="news-card__cat">${item.category}</span>${newsBadge(item)}</div>
      <h3 class="news-card__title">${item.title}</h3>
      <p class="news-card__date">${item.eventDate || item.published}</p>
    </div>
  </a>`;
}

module.exports = { articleCard, serviceLinkCard, placeholderBadge, articleTile, newsStatus, newsBadge, newsCard };

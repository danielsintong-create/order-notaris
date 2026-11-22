const icons = require("./icons");

function footer(config) {
  const cols = config.footerLinks
    .map(
      (col) => `
      <div>
        <h4>${col.heading}</h4>
        <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
      </div>`
    )
    .join("");

  const year = new Date().getFullYear();

  return `
  <footer class="site-footer">
    <div class="container site-footer__top">
      <div class="site-footer__brand">
        <a href="/" class="brand" style="gap:10px">
          <span class="brand__mark"><img src="${config.brand.logo.white}" alt="" width="36" height="52" /></span>
          <span class="brand__word" style="color:#fff">ORDER<b style="color:var(--navy-300)">.NOTARIS</b></span>
        </a>
        <p class="small" style="letter-spacing:0.08em;font-weight:700;color:var(--navy-300);margin-top:2px;">LEARN. INFORM. SERVE.</p>
        <p class="site-footer__desc">${config.brand.description}</p>
      </div>
      <div class="site-footer__cols">${cols}</div>
    </div>
    <div class="container site-footer__bottom">
      <span>&copy; ${year} ${config.brand.name}. Seluruh hak cipta dilindungi.</span>
      <div class="site-footer__social">
        <a href="${config.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram()}</a>
        <a href="${config.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${icons.tiktok()}</a>
        <a href="${config.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icons.facebook()}</a>
        <a href="${config.social.threads}" target="_blank" rel="noopener" aria-label="Threads">${icons.threads()}</a>
        <a href="${config.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icons.youtube()}</a>
        <a href="mailto:${config.contact.email}" aria-label="Email">${icons.mail()}</a>
      </div>
    </div>
  </footer>`;
}

module.exports = footer;

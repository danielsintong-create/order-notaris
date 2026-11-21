const icons = require("../components/icons");
const footer = require("../components/footer");

function header(config, currentPath) {
  const navItems = (ul) =>
    config.nav
      .map((n) => `<li><a href="${n.href}" ${n.href === currentPath ? 'aria-current="page"' : ""}>${n.label}</a></li>`)
      .join("");

  return `
  <header class="site-header">
    <div class="container site-header__row">
      <a href="/" class="brand" aria-label="ORDER.NOTARIS — Beranda">
        <span class="brand__mark"><img src="${config.brand.logo.navy}" alt="" width="36" height="52" /></span>
        <span class="brand__word">ORDER<b>.NOTARIS</b></span>
      </a>

      <nav class="nav-desktop" aria-label="Navigasi utama">
        <ul>${navItems()}</ul>
      </nav>

      <div class="header-actions">
        <a class="btn btn-wa" href="${config.waLink()}" target="_blank" rel="noopener">
          ${icons.whatsapp()} WhatsApp
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Buka menu" aria-expanded="false" aria-controls="mobileNav">
          ${icons.menu()}
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    <ul class="mobile-nav__list">${navItems()}</ul>
    <div class="mobile-nav__cta">
      <a class="btn btn-wa btn-block btn-lg" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Chat via WhatsApp</a>
      <a class="btn btn-outline btn-block" href="/instagram/">${icons.instagram()} Kunjungi Instagram</a>
    </div>
  </div>

  <script>
    (function () {
      var toggle = document.getElementById('navToggle');
      var menu = document.getElementById('mobileNav');
      if (!toggle || !menu) return;
      var menuIcon = ${JSON.stringify(icons.menu())};
      var closeIcon = ${JSON.stringify(icons.close())};
      toggle.addEventListener('click', function () {
        var isOpen = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.innerHTML = isOpen ? closeIcon : menuIcon;
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.innerHTML = menuIcon;
        });
      });
    })();
  </script>`;
}

function layout({ config, title, description, path, body, minimal }) {
  const canonical = `https://ordernotaris.com${path}`;
  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} · ${config.brand.name}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${config.brand.name}" />
  <meta property="og:title" content="${title} · ${config.brand.name}" />
  <meta property="og:description" content="${description}" />
  <meta name="theme-color" content="#2b4661" />
  <link rel="icon" href="/assets/favicon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,500;0,8..60,600;0,8..60,700;0,8..60,800;1,8..60,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/styles/main.css" />
</head>
<body class="">
  ${minimal ? "" : header(config, path)}
  <main>
    ${body}
  </main>
  ${
    minimal
      ? ""
      : `${footer(config)}
  <a class="wa-fab" href="${config.waLink()}" target="_blank" rel="noopener" aria-label="Chat via WhatsApp">
    ${icons.whatsapp()}<span>Chat WhatsApp</span>
  </a>`
  }
  <script src="/assets/scripts/reveal.js" defer></script>
</body>
</html>`;
}

module.exports = layout;

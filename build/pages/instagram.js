const icons = require("../components/icons");

function instagram(config) {
  const links = [
    { href: "/education/", label: "Mulai Belajar — Edukasi Kenotariatan", icon: icons.book(), variant: "" },
    { href: "/academy/", label: "Akademi, Materi & Resource Gratis", icon: icons.cap(), variant: "primary" },
    { href: "/services/", label: "Butuh Layanan Notaris/PPAT?", icon: icons.briefcase(), variant: "" },
    { href: "/media/", label: "Baca Artikel Terbaru", icon: icons.newspaper(), variant: "" },
    { href: config.waLink("Halo ORDER.NOTARIS, saya lihat dari Instagram dan ingin bertanya lebih lanjut."), label: "Chat via WhatsApp", icon: icons.whatsapp(), variant: "wa", external: true },
  ];

  const linkItems = links
    .map(
      (l) => `
    <a class="ig-link ${l.variant === "primary" ? "ig-link--primary" : l.variant === "wa" ? "ig-link--wa" : ""}"
       href="${l.href}" ${l.external ? 'target="_blank" rel="noopener"' : ""}>
      <span class="ig-link__icon">${l.icon}</span>
      <span>${l.label}</span>
    </a>`
    )
    .join("");

  return `
  <div class="section--tight">
    <div class="container ig-page">
      <div class="ig-hero">
        <div class="ig-avatar"><img src="${config.brand.logo.white}" alt="${config.brand.name}" /></div>
        <div class="ig-handle">${config.social.instagramHandle}</div>
        <h1 class="display" style="font-size:22px;margin-top:10px;">${config.brand.name}</h1>
        <p class="ig-bio">${config.brand.shortTagline}<br/>Edukasi &amp; layanan kenotariatan Indonesia 🇮🇩</p>
      </div>

      <div class="ig-link-list">${linkItems}</div>

      <div style="display:flex;justify-content:center;gap:16px;margin-top:26px;">
        <a href="${config.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram" style="color:var(--navy-800);">${icons.instagram()}</a>
        <a href="${config.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok" style="color:var(--navy-800);">${icons.tiktok()}</a>
        <a href="${config.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook" style="color:var(--navy-800);">${icons.facebook()}</a>
        <a href="${config.social.threads}" target="_blank" rel="noopener" aria-label="Threads" style="color:var(--navy-800);">${icons.threads()}</a>
        <a href="${config.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube" style="color:var(--navy-800);">${icons.youtube()}</a>
        <a href="mailto:${config.contact.email}" aria-label="Email" style="color:var(--navy-800);">${icons.mail()}</a>
      </div>
    </div>
  </div>`;
}

module.exports = instagram;

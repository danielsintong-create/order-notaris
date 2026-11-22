function sectionHeading({ eyebrow, title, lede, link }) {
  return `
  <div class="section-head">
    <div class="section-head__top">
      <div>
        ${eyebrow ? `<span class="eyebrow ">${eyebrow}</span>` : ""}
        <h2 class="display"${eyebrow ? ' style="margin-top:10px;"' : ""}>${title}</h2>
      </div>
      ${link ? `<a class="section-head__link" href="${link.href}" style="">${link.label} →</a>` : ""}
    </div>
    ${lede ? `<p class="lede" style="">${lede}</p>` : ""}
  </div>`;
}

module.exports = sectionHeading;

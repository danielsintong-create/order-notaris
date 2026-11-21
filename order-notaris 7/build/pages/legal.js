const legalDocs = require("../content/legal.js");

function legalPage(config, doc) {
  const others = legalDocs.filter((d) => d.slug !== doc.slug);
  return `
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / ${doc.title}</div>
      <span class="eyebrow eyebrow--onlight">Legal</span>
      <h1 class="display" style="font-size:30px;">${doc.title}</h1>
      <p class="small" style="color:rgba(255,255,255,0.65);margin-top:16px;max-width:620px;">${doc.heroDescription}</p>
    </div>
  </section>

  <section class="section">
    <div class="container" style="max-width:760px;">
      <p class="small" style="color:var(--ink-400);margin-bottom:28px;">Terakhir diperbarui: ${doc.lastUpdated}</p>
      <div style="display:grid;gap:28px;">
        ${doc.sections
          .map(
            (s) => `
        <div>
          <h3 style="font-size:17px;margin-bottom:10px;">${s.heading}</h3>
          <div class="max-w-prose" style="display:grid;gap:12px;">
            ${s.paragraphs.map((p) => `<p class="lede" style="font-size:15.5px;color:var(--ink-700);">${p}</p>`).join("")}
          </div>
        </div>`
          )
          .join("")}
      </div>
      <div style="margin-top:36px;padding-top:24px;border-top:1px solid var(--line);display:flex;gap:18px;flex-wrap:wrap;">
        ${others.map((d) => `<a class="small" style="font-weight:700;color:var(--navy-900);" href="/${d.slug}/">${d.title}</a>`).join("")}
      </div>
    </div>
  </section>
  `;
}

module.exports = legalPage;

const sectionHeading = require("../components/sectionHeading");
const { articleCard } = require("../components/card");
const articles = require("../content/articles");

function mediaIndex(config) {
  return `
  <section class="page-hero page-hero--photo" style="background-image:url('/assets/photos/writing-desk.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Media</div>
      <span class="eyebrow eyebrow--onlight">Pilar 2</span>
      <h1 class="display">Media &amp; Artikel</h1>
      <p>Bacaan reflektif dan analitis seputar praktik kenotariatan, PPAT, dan isu hukum kontemporer di Indonesia.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHeading({
        eyebrow: `${articles.length} Artikel`,
        title: "Semua artikel",
        lede: "Bacaan reflektif dan analitis seputar praktik kenotariatan, PPAT, dan isu hukum kontemporer di Indonesia — diperbarui secara berkala.",
      })}
      <div class="card-grid card-grid--3">
        ${articles.map(articleCard).join("")}
      </div>
    </div>
  </section>
  `;
}

module.exports = mediaIndex;

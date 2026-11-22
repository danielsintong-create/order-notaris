const icons = require("../components/icons");
const { STAGE_LABELS, TYPES, PRODUCTS, ACADEMY_FAQ } = require("../content/academyCatalog");

// Akademi = where learners buy: bank soal, template, materi, kelas, bimbingan — grouped by
// the same career stages as Edukasi (where the free material lives).

function productCta(config, p) {
  if (p.checkout) {
    return `<a class="btn btn-navy btn-block" href="${p.checkout}" target="_blank" rel="noopener">Beli Sekarang</a>`;
  }
  return `<a class="btn btn-navy btn-block" href="${config.waLink(`Halo ORDER.NOTARIS, saya ingin mendaftar minat untuk: ${p.title}`)}" target="_blank" rel="noopener">Daftar Minat</a>`;
}

function productCard(config, p) {
  const t = TYPES[p.type];
  return `
  <article class="product-card" id="${p.id}" data-stage="${p.stage}">
    <div class="product-card__top">
      <span class="product-card__type"><span class="product-card__icon">${icons[t.icon]()}</span>${t.label}</span>
      <span class="product-card__stage">${STAGE_LABELS[p.stage]}</span>
    </div>
    <h3 class="product-card__title">${p.title}</h3>
    <p class="product-card__desc">${p.desc}</p>
    <ul class="product-card__points">
      ${p.points.map((pt) => `<li>${icons.check()}<span>${pt}</span></li>`).join("")}
    </ul>
    ${p.note ? `<p class="product-card__note">${p.note}</p>` : ""}
    <div class="product-card__foot">
      <div class="product-card__meta">
        <span>${p.format}</span>
        <strong>${p.price || "Harga segera diumumkan"}</strong>
      </div>
      ${productCta(config, p)}
    </div>
  </article>`;
}

function academy(config) {
  const stages = Object.keys(STAGE_LABELS);
  return `
  <section class="page-hero page-hero--photo edu-hero" style="background-image:url('/assets/photos/lecture-hall.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Akademi</div>
      <span class="eyebrow eyebrow--onlight">Akademi ORDER.NOTARIS</span>
      <h1 class="display">Persiapan Terarah, dari M.Kn. hingga Lulus Ujian</h1>
      <p>Program pembelajaran untuk membangun kompetensi dan kesiapan profesional di dunia kenotariatan dan PPAT, sejak lulus M.Kn., masa ALB INI &amp; IPPAT, hingga lulus Ujian Kode Etik Notaris dan PPAT.</p>
      <div class="edu-hero__cta">
        <a class="btn btn-light btn-lg" href="#katalog">Lihat Katalog ${icons.arrowRight()}</a>
        <a class="btn btn-outline--onlight btn-lg" href="${config.waLink("Halo ORDER.NOTARIS, saya ingin berkonsultasi tentang program Akademi.")}" target="_blank" rel="noopener">Konsultasi Program</a>
      </div>
    </div>
  </section>

  <section class="section academy-values">
    <div class="container academy-values__grid">
      <div class="academy-value">
        <span class="academy-value__icon">${icons.cap()}</span>
        <div><h3>Mengikuti tahapan karier</h3><p>Materi dikelompokkan per tahap: M.Kn., seleksi ALB INI, UKEN, ALB IPPAT &amp; ujian PPAT, hingga praktik.</p></div>
      </div>
      <div class="academy-value">
        <span class="academy-value__icon">${icons.book()}</span>
        <div><h3>Pembahasan berbasis aturan</h3><p>Setiap pembahasan merujuk pada peraturan dan ketentuan organisasi yang berlaku saat penyusunan.</p></div>
      </div>
      <div class="academy-value">
        <span class="academy-value__icon">${icons.doc()}</span>
        <div><h3>Transparan</h3><p>Soal latihan disusun mandiri, bukan soal resmi atau bocoran, dan template adalah referensi belajar.</p></div>
      </div>
    </div>
  </section>

  <section class="section section--dim" id="katalog">
    <div class="container">
      <h2 class="display center-heading">Katalog Akademi</h2>
      <p class="center-sub">Pilih tahap Anda untuk melihat materi yang relevan.</p>
      <div class="filter-chips filter-chips--center" role="group" aria-label="Filter tahap" data-filter-group>
        <button type="button" class="chip is-active" data-filter="*" aria-pressed="true">Semua <span>${PRODUCTS.length}</span></button>
        ${stages
          .map(
            (s) =>
              `<button type="button" class="chip" data-filter="${s}" aria-pressed="false">${STAGE_LABELS[s]} <span>${PRODUCTS.filter((p) => p.stage === s).length}</span></button>`
          )
          .join("")}
      </div>
      <div class="product-grid" data-filter-items>
        ${PRODUCTS.map((p) => productCard(config, p)).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="display center-heading">Cara Mendapatkan Materi</h2>
      <div class="step-grid academy-steps">
        <div class="step-card"><span class="academy-step__num">1</span><h3 class="step-card__title">Pilih Materi</h3><p class="step-card__desc">Temukan materi atau kelas sesuai tahap yang sedang Anda jalani.</p></div>
        <div class="step-card"><span class="academy-step__num">2</span><h3 class="step-card__title">Daftar Minat</h3><p class="step-card__desc">Klik Daftar Minat untuk terhubung dengan tim kami via WhatsApp.</p></div>
        <div class="step-card"><span class="academy-step__num">3</span><h3 class="step-card__title">Konfirmasi &amp; Akses</h3><p class="step-card__desc">Harga, pembayaran, dan cara menerima materi dikonfirmasi langsung oleh tim kami.</p></div>
      </div>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <div class="cta-banner">
        <span class="eyebrow eyebrow--onlight">Belum Siap Membeli?</span>
        <h2 class="display">Mulai dari materi gratis dan kuis latihan di Edukasi</h2>
        <div class="cta-banner__actions">
          <a class="btn btn-light btn-lg" href="/education/">Buka Edukasi ${icons.arrowRight()}</a>
          <a class="btn btn-outline--onlight btn-lg" href="/education/#kuis">Coba 10 Soal Gratis</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="faq">
    <div class="container faq-wrap">
      <h2 class="display center-heading">Pertanyaan Umum</h2>
      <div class="faq">
        ${ACADEMY_FAQ.map(
          (f) => `
        <details class="faq__item">
          <summary>${f.q}<span class="faq__icon" aria-hidden="true">${icons.plus()}</span></summary>
          <p>${f.a}</p>
        </details>`
        ).join("")}
      </div>
    </div>
  </section>

  <script>
    (function () {
      var group = document.querySelector('[data-filter-group]');
      var items = document.querySelectorAll('[data-filter-items] [data-stage]');
      if (!group) return;
      function apply(f) {
        group.querySelectorAll('[data-filter]').forEach(function (b) { var on = b.getAttribute('data-filter') === f; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        items.forEach(function (it) { it.hidden = !(f === '*' || it.getAttribute('data-stage') === f); });
      }
      group.addEventListener('click', function (e) { var b = e.target.closest('[data-filter]'); if (b) apply(b.getAttribute('data-filter')); });
      // Deep link (e.g. /academy/#bank-soal-uken from Edukasi): make sure the card is visible and highlighted.
      var id = location.hash.replace('#', '');
      var target = id && document.getElementById(id);
      if (target && target.classList.contains('product-card')) {
        apply('*');
        target.classList.add('is-highlight');
        setTimeout(function () { target.scrollIntoView({ block: 'center' }); }, 50);
      }
    })();
  </script>
  `;
}

module.exports = academy;

const icons = require("../components/icons");
const { STAGES, QUIZ, FAQ } = require("../content/curriculum");
const { STAGE_LABELS, PRODUCTS } = require("../content/academyCatalog");

// Edukasi = the learning hub. Free material is readable without signup; premium items are
// shown locked with a "daftar minat" route until prices and checkout are set up.
// Layout borrows the module-list presentation of akademicrypto.com (thumbnail + outcome +
// timeline), adapted to a free + premium catalogue.

function lessonItem(config, l) {
  if (l.type === "premium") {
    return `
    <li class="lesson lesson--premium">
      <span class="lesson__icon">${icons.lock()}</span>
      <a class="lesson__title" href="#${l.product}">${l.title}</a>
      <span class="lesson-badge lesson-badge--premium">Premium</span>
    </li>`;
  }
  if (l.slug) {
    return `
    <li class="lesson lesson--free">
      <span class="lesson__icon">${icons.doc()}</span>
      <a class="lesson__title" href="/media/${l.slug}/">${l.title}</a>
      <span class="lesson-badge lesson-badge--free">Gratis</span>
    </li>`;
  }
  return `
    <li class="lesson lesson--soon">
      <span class="lesson__icon">${icons.doc()}</span>
      <span class="lesson__title">${l.title}</span>
      <span class="lesson-badge lesson-badge--soon">Segera Terbit</span>
    </li>`;
}

function moduleRow(config, s) {
  const free = s.lessons.filter((l) => l.type === "free").length;
  const premium = s.lessons.length - free;
  return `
  <article class="module" id="tahap-${s.id}">
    <div class="module__media">
      <img src="${s.image}" alt="" loading="lazy" width="1456" height="1088" />
      <div class="module__media-label">
        <span>Tahap ${s.step}</span>
        <strong>${s.short}</strong>
      </div>
    </div>
    <div class="module__rail" aria-hidden="true"><span class="module__dot">${icons.check()}</span></div>
    <div class="module__body">
      <span class="module__step">Tahap ${s.step} · ${s.short}</span>
      <h3 class="module__title">${s.title}</h3>
      <p class="module__audience">Untuk: ${s.audience}</p>
      <p class="module__outcome">${s.outcome}</p>
      <p class="module__count">${free} materi gratis · ${premium} materi premium</p>
      <ul class="lesson-list">
        ${s.lessons.map((l) => lessonItem(config, l)).join("")}
      </ul>
    </div>
  </article>`;
}

function premiumCard(config, p) {
  return `
  <div class="premium-card" id="${p.id}">
    <div class="premium-card__top">
      <span class="lesson-badge lesson-badge--premium">${icons.lock()} Premium</span>
      <span class="premium-card__stage">${STAGE_LABELS[p.stage]}</span>
    </div>
    <h3 class="premium-card__title">${p.title}</h3>
    <ul class="premium-card__points">
      ${p.points.map((pt) => `<li>${icons.check()}<span>${pt}</span></li>`).join("")}
    </ul>
    <p class="premium-card__price">${p.price ? p.price : "Harga segera diumumkan"}</p>
    ${p.checkout ? `<a class="btn btn-navy btn-block" href="${p.checkout}" target="_blank" rel="noopener">Beli Sekarang</a>` : `<a class="btn btn-navy btn-block" href="${config.waLink(`Halo ORDER.NOTARIS, saya ingin mendaftar minat untuk materi premium: ${p.title}`)}" target="_blank" rel="noopener">Daftar Minat</a>`}
  </div>`;
}

function education(config) {
  const quizData = JSON.stringify(QUIZ).replace(/</g, "\\u003c");
  return `
  <section class="page-hero page-hero--photo edu-hero" style="background-image:url('/assets/photos/law-books.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Edukasi</div>
      <span class="eyebrow eyebrow--onlight">Edukasi ORDER.NOTARIS</span>
      <h1 class="display">Belajar Kenotariatan, dari M.Kn. hingga Praktik</h1>
      <p>Materi disusun mengikuti perjalanan karier: mahasiswa M.Kn., seleksi ALB INI, magang menuju UKEN, ujian PPAT, hingga praktik. Bacaan gratis tanpa perlu daftar, dengan materi premium untuk pendalaman.</p>
      <div class="edu-hero__cta">
        <a class="btn btn-light btn-lg" href="#perjalanan">Mulai Belajar Gratis ${icons.arrowRight()}</a>
        <a class="btn btn-outline--onlight btn-lg" href="#premium">Lihat Materi Premium</a>
      </div>
    </div>
  </section>

  <section class="section edu-journey-section" id="perjalanan">
    <div class="container">
      <h2 class="display center-heading">Peta Perjalanan Belajar</h2>
      <p class="center-sub">Pilih tahap yang sedang Anda jalani.</p>
      <ol class="journey">
        ${STAGES.map(
          (s) => `
        <li class="journey__step">
          <a href="#tahap-${s.id}">
            <span class="journey__num">${s.step}</span>
            <span class="journey__label">${s.short}</span>
          </a>
        </li>`
        ).join("")}
      </ol>
    </div>
  </section>

  <section class="section section--dim">
    <div class="container">
      <div class="module-legend" aria-label="Keterangan">
        <span class="module-legend__item"><span class="lesson-badge lesson-badge--free">Gratis</span> dapat dibaca sekarang</span>
        <span class="module-legend__item"><span class="lesson-badge lesson-badge--soon">Segera Terbit</span> gratis, sedang disiapkan</span>
        <span class="module-legend__item"><span class="lesson-badge lesson-badge--premium">Premium</span> materi berbayar</span>
      </div>
      <div class="module-list">
        ${STAGES.map((s) => moduleRow(config, s)).join("")}
      </div>
    </div>
  </section>

  <section class="section" id="kuis">
    <div class="container">
      <div class="quiz" data-quiz>
        <span class="eyebrow">Latihan Gratis</span>
        <h2 class="display quiz__heading">Coba 10 Soal Pengetahuan Dasar</h2>
        <p class="quiz__intro">Uji pemahaman Anda tentang syarat dan tahapan menjadi notaris dan PPAT. Setiap jawaban disertai dasar hukumnya. Bukan soal ujian resmi.</p>
        <div class="quiz__card" data-quiz-card>
          <div class="quiz__progress"><span data-quiz-count>Soal 1 dari ${QUIZ.length}</span><span class="quiz__bar"><span data-quiz-bar></span></span></div>
          <p class="quiz__q" data-quiz-q></p>
          <div class="quiz__options" data-quiz-options></div>
          <p class="quiz__why" data-quiz-why hidden></p>
          <button class="btn btn-navy" type="button" data-quiz-next hidden>Soal Berikutnya ${icons.arrowRight()}</button>
        </div>
        <div class="quiz__result" data-quiz-result hidden>
          <p class="quiz__score" data-quiz-score></p>
          <p>Ingin latihan lebih lengkap? Bank soal premium disusun per tahap — seleksi ALB INI, UKEN, dan ujian PPAT — lengkap dengan pembahasan.</p>
          <div class="quiz__result-actions">
            <a class="btn btn-navy" href="#premium">Lihat Materi Premium</a>
            <button class="btn btn-outline" type="button" data-quiz-restart>Ulangi Kuis</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--dim" id="premium">
    <div class="container">
      <h2 class="display center-heading">Materi Premium</h2>
      <p class="center-sub">Bank soal, template, dan materi untuk belajar mandiri. Harga diumumkan saat materi dirilis — daftarkan minat Anda lebih dulu.</p>
      <div class="premium-grid">
        ${PRODUCTS.map((p) => premiumCard(config, p)).join("")}
      </div>
      <p class="premium-more">Ingin belajar didampingi pengajar? <a href="/academy/">Lihat Kelas Digital di Akademi ${icons.arrowRight()}</a></p>
    </div>
  </section>

  <section class="section" id="faq">
    <div class="container faq-wrap">
      <h2 class="display center-heading">Pertanyaan Umum</h2>
      <div class="faq">
        ${FAQ.map(
          (f) => `
        <details class="faq__item">
          <summary>${f.q}<span class="faq__icon" aria-hidden="true">${icons.plus()}</span></summary>
          <p>${f.a}</p>
        </details>`
        ).join("")}
      </div>
      <p class="faq__more">Ingin membaca semua artikel? <a href="/media/">Kunjungi Media &amp; Artikel ${icons.arrowRight()}</a></p>
    </div>
  </section>

  <script>
    (function () {
      var root = document.querySelector('[data-quiz]');
      if (!root) return;
      var Q = ${quizData}.map(function (item) {
        var order = item.options.map(function (_, k) { return k; });
        for (var a = order.length - 1; a > 0; a--) { var r = Math.floor(Math.random() * (a + 1)); var t = order[a]; order[a] = order[r]; order[r] = t; }
        return { q: item.q, why: item.why, options: order.map(function (k) { return item.options[k]; }), answer: order.indexOf(item.answer) };
      });
      var i = 0, score = 0, answered = false;
      var el = function (s) { return root.querySelector('[data-quiz-' + s + ']'); };
      var card = el('card'), result = el('result');
      function render() {
        answered = false;
        var item = Q[i];
        el('count').textContent = 'Soal ' + (i + 1) + ' dari ' + Q.length;
        el('bar').style.width = ((i) / Q.length * 100) + '%';
        el('q').textContent = item.q;
        el('why').hidden = true;
        el('next').hidden = true;
        var box = el('options');
        box.innerHTML = '';
        item.options.forEach(function (opt, k) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'quiz__opt';
          b.innerHTML = '<span class="quiz__letter">' + 'ABCD'.charAt(k) + '</span><span></span>';
          b.lastChild.textContent = opt;
          b.addEventListener('click', function () { choose(k, b); });
          box.appendChild(b);
        });
      }
      function choose(k, btn) {
        if (answered) return;
        answered = true;
        var item = Q[i];
        var opts = el('options').children;
        for (var n = 0; n < opts.length; n++) {
          opts[n].disabled = true;
          if (n === item.answer) opts[n].classList.add('is-correct');
        }
        if (k === item.answer) { score++; } else { btn.classList.add('is-wrong'); }
        var why = el('why');
        why.textContent = (k === item.answer ? 'Benar. ' : 'Kurang tepat. ') + item.why;
        why.hidden = false;
        var next = el('next');
        next.hidden = false;
        next.firstChild.textContent = i === Q.length - 1 ? 'Lihat Hasil ' : 'Soal Berikutnya ';
        next.focus();
      }
      el('next').addEventListener('click', function () {
        if (i < Q.length - 1) { i++; render(); }
        else {
          card.hidden = true; result.hidden = false;
          el('score').textContent = 'Skor Anda: ' + score + ' dari ' + Q.length;
        }
      });
      el('restart').addEventListener('click', function () { i = 0; score = 0; result.hidden = true; card.hidden = false; render(); });
      render();
    })();
  </script>
  `;
}

module.exports = education;

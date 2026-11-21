const icons = require("../components/icons");

function contact(config) {
  return `
  <section class="page-hero page-hero--photo" style="background-image:url('/assets/photos/reception.jpg');">
    <div class="container">
      <div class="breadcrumb"><a href="/">Beranda</a> / Kontak</div>
      <span class="eyebrow eyebrow--onlight">Kontak</span>
      <h1 class="display">Hubungi Kami</h1>
      <p>Cara tercepat untuk terhubung dengan tim ${config.brand.name} adalah melalui WhatsApp.</p>
    </div>
  </section>

  <section class="section">
    <div class="container two-col">
      <div>
        <div class="service-card" style="margin-bottom:20px;background:var(--navy-900);border-color:var(--navy-900);">
          <div class="pillar-card__icon" style="background:#128c53;color:#fff;">${icons.whatsapp()}</div>
          <h3 style="color:#fff;">Chat via WhatsApp</h3>
          <p style="color:rgba(255,255,255,0.72);">Respons tercepat untuk pertanyaan layanan, akademi, maupun kerja sama.</p>
          <a class="btn btn-wa btn-block" href="${config.waLink()}" target="_blank" rel="noopener">${icons.whatsapp()} Mulai Chat</a>
        </div>

        <div class="stat-row" style="grid-template-columns:1fr;gap:12px;">
          <div class="stat-box" style="text-align:left;display:flex;align-items:center;gap:12px;">
            ${icons.mail()}
            <div><span class="small" style="display:block;">Email</span><b style="font-size:15px;">${config.contact.email}</b></div>
          </div>
          <div class="stat-box" style="text-align:left;display:flex;align-items:center;gap:12px;">
            ${icons.pin()}
            <div><span class="small" style="display:block;">Lokasi</span><b style="font-size:15px;">${config.contact.city}</b></div>
          </div>
          <div class="stat-box" style="text-align:left;display:flex;align-items:center;gap:12px;">
            ${icons.instagram()}
            <div><span class="small" style="display:block;">Instagram</span><b style="font-size:15px;">${config.social.instagramHandle}</b></div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="display" style="font-size:20px;margin-bottom:6px;">Atau kirim pesan singkat</h3>
        <p class="small" style="margin-bottom:18px;">Isi form di bawah dan tim kami akan menghubungi balik — untuk respons tercepat, gunakan WhatsApp.</p>
        <form id="contactForm" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p class="sr-only">
            <label>Jangan isi jika Anda manusia: <input name="bot-field" /></label>
          </p>
          <div class="form-field">
            <label for="name">Nama</label>
            <input id="name" name="name" type="text" placeholder="Nama lengkap" required />
          </div>
          <div class="form-field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="nama@email.com" required />
          </div>
          <div class="form-field">
            <label for="topic">Topik</label>
            <input id="topic" name="topic" type="text" placeholder="Layanan, Akademi, kerja sama, dll." />
          </div>
          <div class="form-field">
            <label for="message">Pesan</label>
            <textarea id="message" name="message" rows="4" placeholder="Tuliskan pertanyaanmu di sini" required></textarea>
          </div>
          <button class="btn btn-navy btn-block" type="submit">Kirim Pesan</button>
          <p class="form-note" id="contactFormNote" hidden style="margin-top:12px;color:var(--navy-800);font-weight:600;">
            Pesan terkirim — terima kasih, tim kami akan menghubungi Anda kembali secepatnya.
          </p>
          <p class="form-note" id="contactFormError" hidden style="margin-top:12px;color:#b3261e;font-weight:600;">
            Pesan belum berhasil terkirim — koneksi mungkin sedang bermasalah. Coba kirim ulang, atau hubungi kami langsung via WhatsApp.
          </p>
        </form>
      </div>
    </div>
  </section>
  <script>
    (function () {
      var form = document.getElementById('contactForm');
      if (!form) return;
      var note = document.getElementById('contactFormNote');
      var errorNote = document.getElementById('contactFormError');
      var submitBtn = form.querySelector('button[type="submit"]');

      function encode(data) {
        return Object.keys(data)
          .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]); })
          .join('&');
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (note) note.hidden = true;
        if (errorNote) errorNote.hidden = true;
        var data = {};
        new FormData(form).forEach(function (value, key) { data[key] = value; });
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Mengirim…'; }

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(data),
        })
          .then(function (res) {
            if (!res.ok) throw new Error('Submit failed: ' + res.status);
            form.reset();
            if (note) note.hidden = false;
          })
          .catch(function () {
            if (errorNote) errorNote.hidden = false;
          })
          .finally(function () {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Kirim Pesan'; }
          });
      });
    })();
  </script>`;
}

module.exports = contact;

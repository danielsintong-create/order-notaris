function notFound(config) {
  return `
  <section class="section center">
    <div class="container">
      <span class="eyebrow" style="justify-content:center;">404</span>
      <h1 class="display" style="margin-top:12px;">Halaman tidak ditemukan</h1>
      <p class="lede mx-auto max-w-prose" style="margin-top:12px;">Tautan yang kamu buka mungkin sudah berubah atau tidak tersedia.</p>
      <a class="btn btn-navy btn-lg" style="margin-top:22px;" href="/">Kembali ke Beranda</a>
    </div>
  </section>`;
}

module.exports = notFound;

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");

const config = require("./site.config");
const layout = require("./templates/layout");

const home = require("./pages/home");
const education = require("./pages/education");
const mediaIndex = require("./pages/media");
const mediaSlugPage = require("./pages/mediaSlug");
const mediaNewsPage = require("./pages/mediaNews");
const news = require("./content/news");
const servicesIndex = require("./pages/services");
const servicesSlugPage = require("./pages/servicesSlug");
const academyPage = require("./pages/academy");
const aboutPage = require("./pages/about");
const contactPage = require("./pages/contact");
const instagramPage = require("./pages/instagram");
const legalPage = require("./pages/legal");
const notFoundPage = require("./pages/404");

const articles = require("./content/articles");
const services = require("./content/services");
const legalDocs = require("./content/legal");

console.log("Building ORDER.NOTARIS static site…\n");

const routes = [
  { path: "/", title: "Beranda", description: config.brand.description, minimal: false, body: home(config) },
  { path: "/instagram/", title: "Instagram", description: config.brand.description, minimal: true, body: instagramPage(config) },
  { path: "/education/", title: "Edukasi", description: config.brand.description, minimal: false, body: education(config) },
  { path: "/media/", title: "Media & Artikel", description: config.brand.description, minimal: false, body: mediaIndex(config) },
  { path: "/services/", title: "Layanan", description: config.brand.description, minimal: false, body: servicesIndex(config) },
  { path: "/academy/", title: "Akademi", description: config.brand.description, minimal: false, body: academyPage(config) },
  { path: "/about/", title: "Tentang", description: config.brand.description, minimal: false, body: aboutPage(config) },
  { path: "/contact/", title: "Kontak", description: config.brand.description, minimal: false, body: contactPage(config) },
];

articles.forEach((a) =>
  routes.push({ path: `/media/${a.slug}/`, title: a.title, description: a.summary, minimal: false, body: mediaSlugPage(config, a) })
);
news.forEach((n) =>
  routes.push({ path: `/media/kabar/${n.slug}/`, title: n.title, description: n.summary, minimal: false, body: mediaNewsPage(config, n) })
);
// Bimbingan Jurnal Ilmiah (category "akademik") is surfaced from /academy/ instead of
// getting its own /services/ page — see the note on that entry in content/services.js.
services
  .filter((s) => s.category !== "akademik")
  .forEach((s) =>
    routes.push({ path: `/services/${s.slug}/`, title: s.title, description: s.summary, minimal: false, body: servicesSlugPage(config, s) })
  );
legalDocs.forEach((d) =>
  routes.push({ path: `/${d.slug}/`, title: d.title, description: d.heroDescription, minimal: false, body: legalPage(config, d) })
);

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

routes.forEach((r) => {
  const html = layout({ config, title: r.title, description: r.description, path: r.path, body: r.body, minimal: r.minimal });
  const outDir = path.join(DIST, r.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`  ✓ ${r.path === "/" ? "index.html" : r.path.slice(1) + "index.html"}`);
});

// 404 page lives at the dist root, not under a trailing-slash folder.
const notFoundHtml = layout({
  config,
  title: "Halaman Tidak Ditemukan",
  description: config.brand.description,
  path: "/404.html",
  body: notFoundPage(config),
});
fs.writeFileSync(path.join(DIST, "404.html"), notFoundHtml);
console.log("  ✓ 404.html");

// Static assets.
fs.mkdirSync(path.join(DIST, "styles"), { recursive: true });
fs.copyFileSync(path.join(ROOT, "styles", "main.css"), path.join(DIST, "styles", "main.css"));

fs.mkdirSync(path.join(DIST, "assets", "photos"), { recursive: true });
fs.readdirSync(path.join(ROOT, "assets", "photos")).forEach((file) => {
  fs.copyFileSync(path.join(ROOT, "assets", "photos", file), path.join(DIST, "assets", "photos", file));
});
["logo-navy.png", "logo-white.png", "favicon.png"].forEach((file) => {
  fs.copyFileSync(path.join(ROOT, "assets", file), path.join(DIST, "assets", file));
});

fs.mkdirSync(path.join(DIST, "assets", "scripts"), { recursive: true });
fs.readdirSync(path.join(ROOT, "assets", "scripts")).forEach((file) => {
  fs.copyFileSync(path.join(ROOT, "assets", "scripts", file), path.join(DIST, "assets", "scripts", file));
});

// robots.txt + sitemap.xml
fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: https://ordernotaris.com/sitemap.xml\n"
);

const sitemapUrls = routes.map((r) => `  <url><loc>https://ordernotaris.com${r.path}</loc></url>`).join("\n");
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`
);

console.log(`\nDone. ${routes.length + 1} pages generated in /dist.`);

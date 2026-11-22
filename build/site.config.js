const WHATSAPP_NUMBER = "6285817389841";

const DEFAULT_WA_TEXT = "Halo ORDER.NOTARIS, saya ingin bertanya lebih lanjut mengenai layanan/akademi Anda.";

function waLink(text) {
  const message = text || DEFAULT_WA_TEXT;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const config = {
  brand: {
    name: "ORDER.NOTARIS",
    shortTagline: "Ekosistem Digital Kenotariatan Indonesia",
    description:
      "ORDER.NOTARIS adalah ekosistem digital kenotariatan Indonesia yang menghimpun edukasi, media, dan layanan dalam satu platform. Kami mendampingi perjalanan profesional di bidang kenotariatan dan PPAT, sejak lulus M.Kn., masa ALB INI & IPPAT, hingga lulus Ujian Kode Etik Notaris dan PPAT.",
    logo: {
      navy: "/assets/logo-navy.png",
      white: "/assets/logo-white.png",
    },
  },
  contact: {
    // NOTE: "Notarius" (not "Notaris") — re-confirm this spelling is intentional before
    // treating this as final; consider a branded @ordernotaris.com address instead.
    email: "Order.Notarius@gmail.com",
    whatsappNumber: WHATSAPP_NUMBER,
    city: "Jakarta, Indonesia",
  },
  social: {
    instagram: "https://instagram.com/order.notaris",
    instagramHandle: "@order.notaris",
    tiktok: "https://www.tiktok.com/@order.notaris",
    facebook: "https://www.facebook.com/order.notaris",
    threads: "https://www.threads.com/@order.notaris",
    youtube: "https://www.youtube.com/@order.notaris",
    // LinkedIn deliberately withheld until a real company/personal account is confirmed.
  },
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Edukasi", href: "/education/" },
    { label: "Media", href: "/media/" },
    { label: "Layanan", href: "/services/" },
    { label: "Akademi", href: "/academy/" },
    { label: "Tentang", href: "/about/" },
  ],
  footerLinks: [
    {
      heading: "Ekosistem",
      links: [
        { label: "Edukasi", href: "/education/" },
        { label: "Media & Artikel", href: "/media/" },
        { label: "Layanan Notaris/PPAT", href: "/services/" },
        { label: "Akademi & Kelas Digital", href: "/academy/" },
      ],
    },
    {
      heading: "ORDER.NOTARIS",
      links: [
        { label: "Tentang Kami", href: "/about/" },
        { label: "Kontak & WhatsApp", href: "/contact/" },
        { label: "Instagram", href: "/instagram/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Kebijakan Privasi", href: "/privacy/" },
        { label: "Syarat & Ketentuan", href: "/terms/" },
        { label: "Disclaimer", href: "/disclaimer/" },
      ],
    },
  ],
  waLink,
};

module.exports = config;

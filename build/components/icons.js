function svg(inner, extra) {
  return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra || ""}>${inner}</svg>`;
}

const icons = {
  whatsapp: () =>
    svg(
      '<path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.8-1.2A9 9 0 1 0 12 3Z"/><path d="M8.6 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.5-.1.2-.3.3-.4.5-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9.9.3.1.5.2.5.3.1.2.1.9-.2 1.6-.3.7-1.6 1.4-2.2 1.4-.6 0-1.3.2-4.3-1-3-1.3-4.9-4.4-5-4.6-.1-.2-.9-1.3-.9-2.4 0-1.2.6-1.7.8-2Z" fill="currentColor" stroke="none"/>',
      'aria-hidden="true"'
    ),
  mail: () => svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'),
  pin: () => svg('<path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>'),
  instagram: () => svg('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/>'),
  tiktok: () => svg('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M13.2 7v7.4a2.4 2.4 0 1 1-2-2.36"/><path d="M13.2 7c.25 1.7 1.35 2.9 2.9 3.1"/>'),
  facebook: () => svg('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M13.6 20v-6.2h2l.4-2.5h-2.4v-1.5c0-.75.2-1.3 1.3-1.3h1.1V6.1c-.5-.1-1.3-.2-2-.2-2.1 0-3.5 1.3-3.5 3.6v1.5H8.5v2.5h2v6.2"/>'),
  threads: () => svg('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M11.9 8.2c-2.3 0-3.5 1.6-3.5 3.8 0 2.3 1.2 4 3.5 4 1.6 0 2.6-.7 3-1.7"/><path d="M11.9 8.2c2 0 3.1 1.3 3.2 3.1.1 2.3-1 3.8-3.1 3.8-1.3 0-2.1-.7-2.1-1.7 0-1.1 1-1.6 2.3-1.6.7 0 1.4.1 1.9.3"/>'),
  youtube: () => svg('<rect x="2.5" y="6" width="19" height="12" rx="3.5"/><path d="M10.5 9.7v4.6l4.2-2.3-4.2-2.3Z" fill="currentColor" stroke="none"/>'),
  book: () => svg('<path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z"/><path d="M20 5.5C20 4.7 19.3 4 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"/>'),
  cap: () => svg('<path d="M12 4 2 9l10 5 10-5-10-5Z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/>'),
  briefcase: () => svg('<rect x="3" y="7.5" width="18" height="12" rx="1.6"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>'),
  newspaper: () => svg('<rect x="3" y="5" width="14" height="15" rx="1.4"/><path d="M17 8h4v10a2 2 0 0 1-2 2h-2"/><path d="M6.5 9h6M6.5 12h6M6.5 15h4"/>'),
  download: () => svg('<path d="M12 3v13"/><path d="M7 12l5 5 5-5"/><path d="M4 19h16"/>'),
  clock: () => svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  menu: () => svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: () => svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  arrowRight: () => svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  chevronRight: () => svg('<path d="M9 6l6 6-6 6"/>'),
  chevronLeft: () => svg('<path d="M15 6l-6 6 6 6"/>'),
  plus: () => svg('<path d="M12 5v14M5 12h14"/>'),
  play: () => svg('<path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" stroke="none"/>'),
  lock: () => svg('<rect x="5" y="10.5" width="14" height="10" rx="1.8"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),
  check: () => svg('<path d="m5 12.5 4.2 4.2L19 7"/>'),
  doc: () => svg('<path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8L14 3.5Z"/><path d="M14 3.5V8h4.5"/><path d="M9 13h6M9 16.5h4"/>'),
  // service icons (white, on photo cards)
  clipboard: () => svg('<rect x="5" y="4.5" width="14" height="16.5" rx="1.6"/><path d="M9 4.5V3.5h6v1"/><path d="M8.5 10l1.2 1.2L12 9"/><path d="M13.5 10.5H16"/><path d="M8.5 15l1.2 1.2L12 14"/><path d="M13.5 15.5H16"/>'),
  scale: () => svg('<path d="M12 4v16"/><path d="M8 20h8"/><path d="M5 7h14"/><path d="M12 4.5 9 6.5M12 4.5l3 2"/><path d="M5 7 2.5 13a2.6 2.6 0 0 0 5 0L5 7Z"/><path d="m19 7-2.5 6a2.6 2.6 0 0 0 5 0L19 7Z"/>'),
  stamp: () => svg('<path d="M9.5 3.5h5v4.2c0 1 .6 1.9 1.4 2.4l.6.4c.9.5 1.5 1.5 1.5 2.5V14H6v-1c0-1 .6-2 1.5-2.5l.6-.4c.8-.5 1.4-1.4 1.4-2.4V3.5Z"/><path d="M5 17h14"/><path d="M7 20.5h10"/>'),
  landHome: () => svg('<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 9.8V20h13V9.8"/><path d="M10 20v-5h4v5"/>'),
  building: () => svg('<rect x="5" y="3.5" width="14" height="17" rx="1"/><path d="M9 7.5h2M13 7.5h2M9 11h2M13 11h2M9 14.5h2M13 14.5h2"/><path d="M10.5 20.5v-3h3v3"/>'),
  searchDoc: () => svg('<path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h5"/><path d="M14 3.5 18.5 8v2.5"/><path d="M14 3.5V8h4.5"/><circle cx="16" cy="15.5" r="3"/><path d="m18.2 17.7 2.3 2.3"/>'),
};

module.exports = icons;

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
};

module.exports = icons;

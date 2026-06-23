const tiktok = [
  { id: "tt-profile", label: "TikTok Profile", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://www.tiktok.com/@${u}` },
  { id: "tt-google-dork", label: "Google Dork", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://www.google.com/search?q=site%3Atiktok.com+%22${encodeURIComponent(u)}%22` },
  { id: "tt-bing-dork", label: "Bing Dork", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://www.bing.com/search?q=site%3Atiktok.com+%22${encodeURIComponent(u)}%22` },
  { id: "tt-yandex-dork", label: "Yandex Dork", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://yandex.com/search/?text=site%3Atiktok.com+%22${encodeURIComponent(u)}%22` },
  { id: "tt-hashtag", label: "TikTok Hashtag", tag: "Search", status: "active", inputs: ["hashtag"], url: (h) => `https://www.tiktok.com/tag/${h}` },
  { id: "tt-search", label: "TikTok Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.tiktok.com/search?q=${encodeURIComponent(t)}` },
  { id: "tt-socialblade", label: "Social Blade", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://socialblade.com/tiktok/user/${u}` },
  { id: "tt-savetok", label: "SaveTok Downloader", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://savetok.net/` },
  { id: "tt-exolyt", label: "Exolyt Analytics", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://exolyt.com/user/${u}` },
];

export default tiktok;

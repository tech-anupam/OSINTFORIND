const images = [
  {
    id: "google-lens",
    label: "Google Lens Target Scan",
    tag: "Search",
    status: "active",
    inputs: ["url"],
    url: (u) => "https://lens.google.com/upload"
  },
  {
    id: "yandex-images",
    label: "Yandex Visual Search",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://yandex.com/images/search?text=${encodeURIComponent(q)}`
  },
  {
    id: "bing-visual",
    label: "Bing Visual Search",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.bing.com/visualsearch?q=${encodeURIComponent(q)}`
  },
  {
    id: "tineye",
    label: "TinEye Reverse Match",
    tag: "Search",
    status: "active",
    inputs: ["url"],
    url: (u) => `https://tineye.com/search/?url=${encodeURIComponent(u)}`
  },
  {
    id: "pimeyes",
    label: "PimEyes Face Recognition",
    tag: "Commercial",
    status: "login",
    inputs: ["url"],
    url: (u) => "https://pimeyes.com/"
  },
  {
    id: "google-images",
    label: "Google Image Search",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`
  },
  {
    id: "bing-images",
    label: "Bing Image Search",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.bing.com/images/search?q=${encodeURIComponent(q)}`
  },
  {
    id: "yandex-reverse",
    label: "Yandex Reverse Image (URL)",
    tag: "Search",
    status: "active",
    inputs: ["url"],
    url: (u) => `https://yandex.com/images/search?url=${encodeURIComponent(u)}&rpt=imageview`
  },
  {
    id: "google-faces",
    label: "Google Face Finder Dork",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}&tbm=isch&tbs=itp:face`
  }
];

export default images;

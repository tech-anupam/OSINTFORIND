const news = [
  {
    id: "google-news-india",
    label: "Google News India",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://news.google.com/search?q=${encodeURIComponent(q)}&hl=en-IN&gl=IN&ceid=IN:en`
  },
  {
    id: "toi-search",
    label: "Times of India",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://timesofindia.indiatimes.com/search.cms?q=${encodeURIComponent(q)}`
  },
  {
    id: "ht-search",
    label: "Hindustan Times",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.hindustantimes.com/search?searchtype=News&searchtext=${encodeURIComponent(q)}`
  },
  {
    id: "ndtv-search",
    label: "NDTV",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.ndtv.com/search?searchtext=${encodeURIComponent(q)}`
  },
  {
    id: "india-today",
    label: "India Today",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.indiatoday.in/search?searchtype=News&searchtext=${encodeURIComponent(q)}`
  },
  {
    id: "the-hindu",
    label: "The Hindu",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.thehindu.com/search/?q=${encodeURIComponent(q)}&order=DESC`
  },
  {
    id: "pressreader",
    label: "PressReader India",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.pressreader.com/search?query=${encodeURIComponent(q)}`
  },
  {
    id: "indian-express",
    label: "Indian Express",
    tag: "News",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://indianexpress.com/search/?s=${encodeURIComponent(q)}`
  },
  {
    id: "google-dork-news",
    label: "Google News Dork India",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}+site%3Atimesofindia.indiatimes.com+OR+site%3Andtv.com+OR+site%3Ahindustantimes.com`
  },
  {
    id: "wayback-news",
    label: "Wayback Machine News",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://web.archive.org/web/*/${encodeURIComponent(q)}`
  }
];

export default news;

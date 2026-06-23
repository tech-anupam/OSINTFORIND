const documents = [
  {
    id: "doc-pdf",
    label: "Google PDF Search",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=filetype%3Apdf+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-xls",
    label: "Google Excel / CSV",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=(filetype%3axlsx+OR+filetype%3axls+OR+filetype%3acsv)+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-word",
    label: "Google Word Docs",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=(filetype%3adocx+OR+filetype%3adoc)+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-ppt",
    label: "Google Presentations",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=(filetype%3appt+OR+filetype%3apptx)+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-gov-pdf",
    label: "Indian Govt PDF Index",
    tag: "Government",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=site%3Agov.in+OR+site%3Anic.in+filetype%3Apdf+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-gov-xls",
    label: "Indian Govt Sheets Index",
    tag: "Government",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=site%3Agov.in+OR+site%3Anic.in+(filetype%3axlsx+OR+filetype%3acsv)+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-pdfdrive",
    label: "PDFDrive",
    tag: "Commercial",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.pdfdrive.com/search?q=${encodeURIComponent(q)}`
  },
  {
    id: "doc-scribd",
    label: "Scribd Google Dork",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=site%3Ascribd.com+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-slideshare",
    label: "SlideShare Google Dork",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=site%3Aslideshare.net+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-academia",
    label: "Academia.edu Dork",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=site%3Aacademia.edu+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-researchgate",
    label: "ResearchGate Dork",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://www.google.com/search?q=site%3Aresearchgate.net+%22${encodeURIComponent(q)}%22`
  },
  {
    id: "doc-archive",
    label: "Internet Archive Texts",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://archive.org/details/texts?query=${encodeURIComponent(q)}`
  },
  {
    id: "doc-libgen",
    label: "Library Genesis",
    tag: "Search",
    status: "active",
    inputs: ["query"],
    url: (q) => `https://libgen.is/search.php?req=${encodeURIComponent(q)}`
  }
];

export default documents;

const business = [
  { id: "mca-google", label: "MCA Portal Company Dork (Google)", tag: "Government", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Amca.gov.in+%22${encodeURIComponent(c)}%22` },
  { id: "mca-bing", label: "MCA Portal Company Dork (Bing)", tag: "Government", status: "active", inputs: ["company"], url: (c) => `https://www.bing.com/search?q=site%3Amca.gov.in+%22${encodeURIComponent(c)}%22` },
  { id: "gstin-lookup-dork", label: "GSTIN Taxpayer Search Dork (Google)", tag: "Government", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Agst.gov.in+%22${encodeURIComponent(c)}%22` },
  { id: "roc-signatories-dork", label: "ROC Signatories Dork (Google)", tag: "Government", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Amca.gov.in%2Fmcafoportal+%22${encodeURIComponent(c)}%22` },
  { id: "sebi-google", label: "SEBI Registered Entities (Google)", tag: "Government", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Asebi.gov.in+%22${encodeURIComponent(c)}%22` },
  { id: "sebi-bing", label: "SEBI Registered Entities (Bing)", tag: "Government", status: "active", inputs: ["company"], url: (c) => `https://www.bing.com/search?q=site%3Asebi.gov.in+%22${encodeURIComponent(c)}%22` },
  { id: "zaubacorp-dork", label: "ZaubaCorp Search (Google Dork)", tag: "Search", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Azaubacorp.com+%22${encodeURIComponent(c)}%22` },
  { id: "tofler-dork", label: "Tofler Search (Google Dork)", tag: "Search", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Atofler.in+%22${encodeURIComponent(c)}%22` },
  { id: "indiafilings-dork", label: "IndiaFilings Search (Google Dork)", tag: "Search", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Aindiafilings.com+%22${encodeURIComponent(c)}%22` },
  { id: "indiamart-dork", label: "IndiaMart Search (Google Dork)", tag: "Search", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Aindiamart.com+%22${encodeURIComponent(c)}%22` },
  { id: "tradeindia-dork", label: "TradeIndia Search (Google Dork)", tag: "Search", status: "active", inputs: ["company"], url: (c) => `https://www.google.com/search?q=site%3Atradeindia.com+%22${encodeURIComponent(c)}%22` },
  { id: "zaubacorp-portal", label: "ZaubaCorp Portal", tag: "Commercial", status: "active", inputs: [], url: () => "https://www.zaubacorp.com/" },
  { id: "tofler-portal", label: "Tofler Portal", tag: "Commercial", status: "active", inputs: [], url: () => "https://www.tofler.in/" },
  { id: "indiafilings-portal", label: "IndiaFilings Portal", tag: "Commercial", status: "active", inputs: [], url: () => "https://www.indiafilings.com/" },
  { id: "justdial-business", label: "JustDial Business Finder", tag: "Commercial", status: "active", inputs: ["company"], url: (c) => `https://www.justdial.com/search?q=${encodeURIComponent(c)}` },
  { id: "company-gov-dork-yandex", label: "Company Nic.in / Gov.in Yandex Dork", tag: "Search", status: "active", inputs: ["company"], url: (c) => `https://yandex.com/search/?text=%22${encodeURIComponent(c)}%22+site%3Agov.in+OR+site%3Anic.in` }
];

export default business;

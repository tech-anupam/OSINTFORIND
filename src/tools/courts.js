const courts = [
  {
    id: "ecourts-portal",
    label: "eCourts Services India Portal",
    tag: "Government",
    status: "active",
    inputs: [],
    url: () => "https://ecourts.gov.in/"
  },
  {
    id: "njdg-portal",
    label: "National Judicial Data Grid (NJDG) Portal",
    tag: "Government",
    status: "active",
    inputs: [],
    url: () => "https://njdg.ecourts.gov.in/"
  },
  {
    id: "supreme-court-dork",
    label: "Supreme Court of India (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Asci.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "delhi-hc-dork",
    label: "Delhi High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Adelhihighcourt.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "bombay-hc-dork",
    label: "Bombay High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Abombayhighcourt.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "allahabad-hc-dork",
    label: "Allahabad High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Aallahabadhighcourt.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "madras-hc-dork",
    label: "Madras High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Amadrashighcourt.tn.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "karnataka-hc-dork",
    label: "Karnataka High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Akarnatakajudiciary.kar.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "calcutta-hc-dork",
    label: "Calcutta High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Acalcuttahighcourt.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "gujarat-hc-dork",
    label: "Gujarat High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Agujarathighcourt.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "rajasthan-hc-dork",
    label: "Rajasthan High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Ahcraj.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "kerala-hc-dork",
    label: "Kerala High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Ahighcourtofkerala.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "patna-hc-dork",
    label: "Patna High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Apatnahighcourt.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "punjab-haryana-hc-dork",
    label: "Punjab & Haryana High Court (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Ahighcourtchd.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "ncdrc-dork",
    label: "National Consumer Commission (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Ancdrc.nic.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "cat-tribunal-dork",
    label: "Central Administrative Tribunal (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Acgat.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "ngt-dork",
    label: "National Green Tribunal (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Agreentribunal.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "ipr-trademarks-portal",
    label: "Indian Intellectual Property Registry Portal",
    tag: "Government",
    status: "active",
    inputs: [],
    url: () => "https://ipindiaservices.gov.in/tmrpublicsearch/"
  },
  {
    id: "lok-adalat-dork",
    label: "Lok Adalat & NALSA (Google Dork)",
    tag: "Government",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=site%3Analsa.gov.in+%22${encodeURIComponent(n)}%22`
  },
  {
    id: "google-dork-court",
    label: "Google eCourts Case Dork",
    tag: "Search",
    status: "active",
    inputs: ["name"],
    url: (n) => `https://www.google.com/search?q=%22${encodeURIComponent(n)}%22+site%3Aecourts.gov.in`
  }
];

export default courts;

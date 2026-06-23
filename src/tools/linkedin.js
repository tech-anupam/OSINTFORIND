const linkedin = [
  { id: "li-profile", label: "LinkedIn Profile", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://www.linkedin.com/in/${u}` },
  { id: "li-company", label: "Company Page", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://www.linkedin.com/company/${u}` },
  { id: "li-school", label: "School Page", tag: "Social", status: "active", inputs: ["username"], url: (u) => `https://www.linkedin.com/school/${u}` },
  { id: "li-search-people", label: "People Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(t)}` },
  { id: "li-search-company", label: "Company Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(t)}` },
  { id: "li-search-jobs", label: "Jobs Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(t)}` },
  { id: "li-search-groups", label: "Group Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.linkedin.com/search/results/groups/?keywords=${encodeURIComponent(t)}` },
  { id: "li-search-events", label: "Event Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.linkedin.com/search/results/events/?keywords=${encodeURIComponent(t)}` },
  { id: "li-search-schools", label: "School Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.linkedin.com/search/results/schools/?keywords=${encodeURIComponent(t)}` },
  { id: "li-google-company", label: "Google Company Dork", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.google.com/search?q=site%3Alinkedin.com%2Fcompany+%22${encodeURIComponent(t)}%22` },
  { id: "li-google-dork", label: "Google Profile Dork", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://www.google.com/search?q=site%3Alinkedin.com%2Fin+%22${encodeURIComponent(u)}%22` },
  { id: "li-bing-dork", label: "Bing Profile Dork", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://www.bing.com/search?q=site%3Alinkedin.com%2Fin+%22${encodeURIComponent(u)}%22` },
  { id: "li-yandex-dork", label: "Yandex Profile Dork", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://yandex.com/search/?text=site%3Alinkedin.com%2Fin+%22${encodeURIComponent(u)}%22` },
  { id: "li-mobile-friendly", label: "Mobile-Friendly Test", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://search.google.com/test/mobile-friendly?url=http://linkedin.com/in/${u}` },
  { id: "li-google-photos", label: "Google Image Index", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://www.google.com/search?q=site:linkedin.com+${encodeURIComponent(u)}&tbm=isch` },
  { id: "li-bing-photos", label: "Bing Image Index", tag: "Search", status: "active", inputs: ["username"], url: (u) => `https://www.bing.com/images/search?q=site%3Alinkedin.com+${encodeURIComponent(u)}` },
  { id: "li-videos-search", label: "Videos Index Search", tag: "Search", status: "active", inputs: ["term"], url: (t) => `https://www.google.com/search?q=site:linkedin.com+${encodeURIComponent(t)}&tbm=vid` },
];

export default linkedin;

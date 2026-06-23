const phone = [
  {
    id: "truecaller",
    label: "Truecaller Web India",
    tag: "Commercial",
    status: "active",
    inputs: ["phone"],
    description: "Search the name and spam score of this number on Truecaller's database.",
    url: (p) => `https://www.truecaller.com/search/in/${p}`
  },
  {
    id: "sanchar-saathi",
    label: "Sanchar Saathi Portal Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Find occurrences of this number indexed on the official Sanchar Saathi (DoT) portal.",
    url: (p) => `https://www.google.com/search?q=site%3Asancharsaathi.gov.in+%22${p}%22`
  },
  {
    id: "tafcop",
    label: "TAFCOP Connections Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Search the TAFCOP subscriber network portal for reports related to this number.",
    url: (p) => `https://www.google.com/search?q=site%3Atafcop.sancharsaathi.gov.in+%22${p}%22`
  },
  {
    id: "kym",
    label: "KYM Device Verification Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Search Know-Your-Mobile database references for this target number.",
    url: (p) => `https://www.google.com/search?q=site%3Akym.sancharsaathi.gov.in+%22${p}%22`
  },
  {
    id: "justdial-phone",
    label: "JustDial Reverse Directory",
    tag: "Commercial",
    status: "active",
    inputs: ["phone"],
    description: "Perform a reverse business lookup on JustDial to see if it is associated with a listing.",
    url: (p) => `https://www.justdial.com/search?q=${p}`
  },
  {
    id: "bsnl-directory",
    label: "BSNL Phone Directory Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Search BSNL directories and databases for corporate landline or mobile registry.",
    url: (p) => `https://www.google.com/search?q=site%3Absnl.co.in+%22${p}%22`
  },
  {
    id: "mtnl-directory",
    label: "MTNL Phone Directory Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Search MTNL Delhi & Mumbai directories for subscriber registrations.",
    url: (p) => `https://www.google.com/search?q=site%3Amtnl.net.in+%22${p}%22`
  },
  {
    id: "telecom-circle",
    label: "Mobile Number Tracker India",
    tag: "Commercial",
    status: "active",
    inputs: ["phone"],
    description: "Search Indian telecom circles, operator codes, and network providers for this number prefix.",
    url: (p) => `https://www.google.com/search?q=mobile+number+tracker+india+${p}`
  },
  {
    id: "cyber-cell-helpline",
    label: "Cyber Crime Helpline Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Search cybercrime.gov.in portal for reported scams or cases involving this number.",
    url: (p) => `https://www.google.com/search?q=%22${p}%22+site%3Acybercrime.gov.in`
  },
  {
    id: "google-dork-phone",
    label: "Google Dork Phone",
    tag: "Search",
    status: "active",
    inputs: ["phone"],
    description: "Run a global exact-phrase search on Google for this phone number.",
    url: (p) => `https://www.google.com/search?q=%22${p}%22`
  },
  {
    id: "bing-phone",
    label: "Bing Phone Search",
    tag: "Search",
    status: "active",
    inputs: ["phone"],
    description: "Run a global exact-phrase search on Bing for this phone number.",
    url: (p) => `https://www.bing.com/search?q=%22${p}%22`
  },
  {
    id: "yandex-phone",
    label: "Yandex Phone Search",
    tag: "Search",
    status: "active",
    inputs: ["phone"],
    description: "Run a global search on Yandex to trace Eastern European/international links or leaks.",
    url: (p) => `https://yandex.com/search/?text=%22${p}%22`
  },
  {
    id: "syncme",
    label: "Sync.me Lookup",
    tag: "Commercial",
    status: "active",
    inputs: ["phone"],
    description: "Alternative caller ID name search via Sync.me database.",
    url: (p) => `https://sync.me/search?number=${p}`
  },
  {
    id: "numlookup",
    label: "NumLookup Search",
    tag: "Commercial",
    status: "active",
    inputs: ["phone"],
    description: "Trace carrier operator name and location details globally.",
    url: (p) => `https://www.numlookup.com/?phone=${p}`
  },
  {
    id: "whatsapp-check",
    label: "WhatsApp Profile Link",
    tag: "Social",
    status: "active",
    inputs: ["phone"],
    description: "Open a direct chat window to view the target's WhatsApp profile photo and about text.",
    url: (p) => `https://wa.me/${p}`
  },
  {
    id: "telegram-phone",
    label: "Telegram Mobile Link",
    tag: "Social",
    status: "active",
    inputs: ["phone"],
    description: "Attempt to open a direct message or voice channel to the phone number on Telegram.",
    url: (p) => `https://t.me/+${p}`
  },
  {
    id: "traidnd",
    label: "TRAI DND Registry Dork",
    tag: "Government",
    status: "active",
    inputs: ["phone"],
    description: "Search TRAI databases to verify if this number is registered in the national DND database.",
    url: (p) => `https://www.google.com/search?q=site%3Atrai.gov.in+%22${p}%22`
  }
];

export default phone;

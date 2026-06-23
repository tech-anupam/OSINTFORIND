const domain = [
  {
    id: "nixi-in",
    label: "NIXI .IN Registry WHOIS",
    tag: "Government",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.registry.in/`
  },
  {
    id: "ernet-registry",
    label: "ERNET Academic Registry (.res.in / .edu.in)",
    tag: "Government",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.ernet.in/`
  },
  {
    id: "whois-whois",
    label: "WHOIS Domain Registry",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://who.is/whois/${d}`
  },
  {
    id: "whois-iana",
    label: "IANA WHOIS Database",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.iana.org/whois?q=${d}`
  },
  {
    id: "domain-rdap",
    label: "ICANN RDAP Lookup",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://lookup.icann.org/lookup?name=${d}`
  },
  {
    id: "domain-dns",
    label: "DNS Records Checker",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://viewdns.info/dnsrecord/?domain=${d}`
  },
  {
    id: "domain-mxtoolbox",
    label: "MXToolbox SuperTool",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://mxtoolbox.com/SuperTool.aspx?action=mx%3a${d}`
  },
  {
    id: "domain-crtsh",
    label: "crt.sh Certificate Records",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://crt.sh/?q=${d}`
  },
  {
    id: "domain-subdomains",
    label: "crt.sh Subdomain Finder",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://crt.sh/?q=%25.${d}`
  },
  {
    id: "domain-sectrails",
    label: "SecurityTrails Domain Intel",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://securitytrails.com/domain/${d}`
  },
  {
    id: "domain-wayback",
    label: "Wayback Historical Archive",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://web.archive.org/web/*/${d}`
  },
  {
    id: "domain-urlscan",
    label: "URLScan.io Threat Scan",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://urlscan.io/search/#domain%3A${d}`
  },
  {
    id: "domain-virustotal",
    label: "VirusTotal Malware Check",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.virustotal.com/gui/domain/${d}`
  },
  {
    id: "domain-shodan",
    label: "Shodan Port Enumeration",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.shodan.io/search?query=hostname%3A${d}`
  },
  {
    id: "domain-intelx",
    label: "Intelligence X Leak Check",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://intelx.io/?s=${d}`
  },
  {
    id: "domain-google-dork",
    label: "Google Domain Index Dork",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.google.com/search?q=site%3A${d}`
  },
  {
    id: "domain-dnsdumpster",
    label: "DNSDumpster Map Tracker",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://dnsdumpster.com/`
  },
  {
    id: "domain-builtwith",
    label: "BuiltWith Tech Stack",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://builtwith.com/${d}`
  },
  {
    id: "domain-similarsites",
    label: "SimilarSites Competitors",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://www.similarsites.com/site/${d}`
  },
  {
    id: "domain-hunter",
    label: "Hunter.io Domain Search",
    tag: "Search",
    status: "active",
    inputs: ["domain"],
    url: (d) => `https://hunter.io/search/${d}`
  }
];

export default domain;

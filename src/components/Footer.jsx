import { Heart, ExternalLink, Terminal } from "lucide-react";

const externalTools = [
  { name: "ExifTool", desc: "Extract metadata from images", url: "https://exiftool.org/" },
  { name: "Sherlock", desc: "Username search across 300+ sites", url: "https://github.com/sherlock-project/sherlock" },
  { name: "PhoneInfoga", desc: "Phone number OSINT scanner", url: "https://github.com/sundowndev/phoneinfoga" },
  { name: "theHarvester", desc: "Email and subdomain harvester", url: "https://github.com/laramies/theHarvester" },
  { name: "Maltego CE", desc: "Visual link analysis tool", url: "https://www.maltego.com/" },
  { name: "Maigret", desc: "Search 2500+ sites for accounts", url: "https://github.com/soxoj/maigret" },
  { name: "SpiderFoot", desc: "Automated OSINT across 200+ sources", url: "https://github.com/smicallef/spiderfoot" },
  { name: "Recon-ng", desc: "Full-stack OSINT framework", url: "https://github.com/lanmaster53/recon-ng" },
  { name: "GHunt", desc: "Google account investigation", url: "https://github.com/mxrch/GHunt" },
  { name: "Amass", desc: "Deep subdomain enumeration", url: "https://github.com/owasp-amass/amass" },
  { name: "Sn0int", desc: "Semi-automatic OSINT framework", url: "https://github.com/kpcyrd/sn0int" },
  { name: "Photon", desc: "Web crawler for data extraction", url: "https://github.com/s0md3v/Photon" },
  { name: "FOCA", desc: "Document metadata extraction", url: "https://github.com/ElevenPaths/FOCA" },
  { name: "Metagoofil", desc: "Public document harvester", url: "https://github.com/laramies/metagoofil" },
  { name: "Nmap", desc: "Network port and host scanner", url: "https://nmap.org/" },
  { name: "WhatWeb", desc: "Website technology identifier", url: "https://github.com/urbanadventurer/WhatWeb" }
];

export default function Footer() {
  return (
    <footer className="footer glass-card">
      <div className="footer-section">
        <div className="footer-brand">
          <h2 className="footer-title">OSINTFORIND</h2>
          <p className="footer-tagline">Open Source Intelligence Toolkit for India</p>
          <p className="footer-credit">
            Built with <Heart size={14} className="icon-saffron" /> by <a href="https://instagram.com/tech.anupam" target="_blank" rel="noopener noreferrer">@tech.anupam</a>
          </p>
          <p className="footer-disclaimer">
            For authorized use only. All tools launch external websites. OSINTFORIND does not store or transmit any data.
            Use responsibly and in compliance with applicable laws.
          </p>
        </div>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">
          <Terminal size={16} />
          Recommended External Tools
        </h3>
        <p className="footer-subtext">
          For deeper investigation, use these tools locally. Extract EXIF data from images, scan subdomains, harvest emails, and map connections.
        </p>
        <div className="footer-tools-grid">
          {externalTools.map((tool, i) => (
            <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer" className="footer-tool-link">
              <span className="footer-tool-name">{tool.name}</span>
              <span className="footer-tool-desc">{tool.desc}</span>
              <ExternalLink size={12} className="footer-tool-arrow" />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>OSINTFORIND -- 2026</span>
        <span>No data collected. No APIs. No backend. Pure URL construction.</span>
      </div>
    </footer>
  );
}

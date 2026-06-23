import { useState, useEffect } from "react";
import { Search, Zap, Smartphone, Mail, Globe, Car, MapPin, User, Radar, Scale, FileText, Network, Shield, Landmark, Banknote, Image, Camera, Hash, MessageSquare, Play, AtSign } from "lucide-react";

export default function UnifiedDashboard({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [detectedType, setDetectedType] = useState("generic");
  const [selectedType, setSelectedType] = useState("generic");

  const cleanQuery = query.trim();

  useEffect(() => {
    if (!cleanQuery) {
      setDetectedType("generic");
      setSelectedType("generic");
      return;
    }
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanQuery);
    const isPhone = /^(?:\+?91)?[6-9]\d{9}$/.test(cleanQuery.replace(/[\s-]/g, ""));
    const isVehicle = /^[A-Z]{2}[ -]?[0-9]{2}[ -]?[A-Z]{1,2}[ -]?[0-9]{4}$/i.test(cleanQuery);
    const isIp = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(cleanQuery);
    const isDomain = !cleanQuery.includes("_") && !cleanQuery.startsWith("@") && /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:com|org|net|edu|gov|mil|int|info|biz|co|in|io|me|xyz|us|uk|ca|au|de|fr|jp|cn|br|ru|ua|dev|app|store|tech|online|site|net\.in|org\.in|edu\.in|gov\.in|ac\.in)$/i.test(cleanQuery);
    const isUsername = /^@?[a-zA-Z0-9_.-]+$/.test(cleanQuery) && !cleanQuery.includes(" ") && (cleanQuery.includes("_") || cleanQuery.includes(".") || cleanQuery.startsWith("@") || cleanQuery.length > 3) && !isEmail && !isPhone && !isVehicle && !isIp && !isDomain;

    if (isEmail) {
      setDetectedType("email");
      setSelectedType("email");
    } else if (isPhone) {
      setDetectedType("phone");
      setSelectedType("phone");
    } else if (isVehicle) {
      setDetectedType("vehicle");
      setSelectedType("vehicle");
    } else if (isIp) {
      setDetectedType("ip");
      setSelectedType("ip");
    } else if (isDomain) {
      setDetectedType("domain");
      setSelectedType("domain");
    } else if (isUsername) {
      setDetectedType("username");
      setSelectedType("username");
    } else {
      setDetectedType("generic");
      setSelectedType("generic");
    }
  }, [cleanQuery]);

  const categoryMapping = {
    phone: "phone",
    email: "email",
    vehicle: "vehicles",
    ip: "domain",
    domain: "domain",
    username: "usernames",
    generic: "people",
    instagram: "instagram",
    facebook: "facebook",
    twitter: "twitter",
    linkedin: "linkedin",
    tiktok: "tiktok",
    social: "social"
  };

  const categoryLabels = {
    phone: "Phone Numbers",
    email: "Email Addresses",
    vehicle: "Vehicles & RTO",
    ip: "Domains & IP",
    domain: "Domains & IP",
    username: "Usernames",
    generic: "People / Names",
    instagram: "Instagram Search",
    facebook: "Facebook Search",
    twitter: "X / Twitter Search",
    linkedin: "LinkedIn Search",
    tiktok: "TikTok Search",
    social: "Social Media Hub"
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (!cleanQuery) return;
    const destCat = categoryMapping[selectedType];
    if (onNavigate && destCat) {
      onNavigate(destCat, cleanQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && cleanQuery) {
      handleSearchSubmit();
    }
  };

  const entityTypes = [
    { id: "generic", label: "General / Name", icon: User },
    { id: "phone", label: "Phone Number", icon: Smartphone },
    { id: "email", label: "Email Address", icon: Mail },
    { id: "vehicle", label: "Vehicle Plate", icon: Car },
    { id: "username", label: "Username", icon: User },
    { id: "domain", label: "Domain Name", icon: Globe },
    { id: "ip", label: "IP Address", icon: Network },
    { id: "instagram", label: "Instagram", icon: Hash },
    { id: "facebook", label: "Facebook", icon: Globe },
    { id: "twitter", label: "X / Twitter", icon: AtSign },
    { id: "linkedin", label: "LinkedIn", icon: MessageSquare },
    { id: "tiktok", label: "TikTok", icon: Play },
    { id: "social", label: "Social Hub", icon: Smartphone }
  ];

  const quickCategories = [
    { id: "phone", label: "Phone Numbers", icon: Smartphone, desc: "TAFCOP, Sanchar Saathi, BSNL, JustDial" },
    { id: "people", label: "People / Names", icon: User, desc: "Judgments, voter roles, MCA directories" },
    { id: "vehicles", label: "Vehicles & RTO", icon: Car, desc: "Parivahan RTO, Challan tracking, RTO specs" },
    { id: "property", label: "Property & Land", icon: Landmark, desc: "State Bhulekh land registration portals" },
    { id: "courts", label: "Court Records", icon: Scale, desc: "National consumer case status, High Courts" },
    { id: "government", label: "Gov Records", icon: Landmark, desc: "DigiLocker, Aadhaar verify, EPFO portals" },
    { id: "financial", label: "Financial & SEBI", icon: Banknote, desc: "Corporate disclosures, defaulters logs" },
    { id: "instagram", label: "Instagram", icon: Hash, desc: "Permanent User ID tracking, profile dorks" },
    { id: "facebook", label: "Facebook", icon: Globe, desc: "Graph queries, search dorks, page trackers" },
    { id: "twitter", label: "X / Twitter", icon: AtSign, desc: "Incoming/outgoing mentions, dork searches" },
    { id: "linkedin", label: "LinkedIn", icon: MessageSquare, desc: "Company and employee registry searches" },
    { id: "tiktok", label: "TikTok", icon: Play, desc: "Video searches, dorks, trends analytics" },
    { id: "domain", label: "Domains & IP", icon: Network, desc: "WHOIS registry, IANA, certificate logs" },
    { id: "email", label: "Email Addresses", icon: Mail, desc: "HaveIBeenPwned, DeHashed, PGP keys" },
    { id: "documents", label: "Documents", icon: FileText, desc: "Unprotected PDF, Excel, Word data dorks" },
    { id: "images", label: "Image / Faces", icon: Image, desc: "Yandex Visual, PimEyes, visual matchers" },
    { id: "cameras", label: "Cameras", icon: Camera, desc: "Indian states highway & city traffic camera feeds" },
    { id: "maps", label: "Maps & Geo", icon: MapPin, desc: "ISRO Bhuvan satellite map registries" }
  ];

  return (
    <div className="unified-dashboard">
      <div className="console-header glass-card">
        <div className="console-brand">
          <Radar className="radar-icon" size={32} />
          <div>
            <h1 className="console-title">Interactive OSINT Console</h1>
            <p className="console-subtitle">INDIAN TARGET SEARCH ENGINE & LOGIC FILTERS</p>
          </div>
        </div>
      </div>

      <div className="console-input-section glass-card">
        <form onSubmit={handleSearchSubmit} className="console-search-form">
          <div className="console-input-wrapper">
            <input
              type="text"
              className="console-input"
              placeholder="Type target (e.g. name, +919876543210, DL1CA1234, email, IP, domain)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="console-input-glow" />
          </div>

          {cleanQuery && (
            <div className="type-detector-panel">
              <div className="detector-badge">
                <span className="detector-label">Auto Detected:</span>
                <span className={`badge badge-${detectedType}`}>
                  {detectedType.toUpperCase()}
                </span>
              </div>
              <div className="override-switches">
                {entityTypes.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className={`override-btn ${selectedType === t.id ? "active" : ""}`}
                      onClick={() => setSelectedType(t.id)}
                    >
                      <Icon size={12} />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="target-redirect-preview glass-card">
                <div className="preview-redirect-text">
                  Target will be processed in the <strong className="redirect-category-highlight">{categoryLabels[selectedType]}</strong> section.
                </div>
                <button type="submit" className="btn btn-saffron search-redirect-btn">
                  <Zap size={15} />
                  <span>Find Information</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="quick-categories-section">
        <h2 className="section-title">Jump to Category Tools</h2>
        <div className="categories-grid">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="category-quick-card glass-card"
                onClick={() => {
                  if (onNavigate) onNavigate(cat.id, cleanQuery);
                }}
              >
                <div className="quick-card-icon-box">
                  <Icon size={24} className="quick-icon" />
                </div>
                <div className="quick-card-content">
                  <h3 className="quick-card-label">{cat.label}</h3>
                  <p className="quick-card-desc">{cat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

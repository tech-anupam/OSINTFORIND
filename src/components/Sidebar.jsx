import { Phone, User, Building2, Home, Car, Scale, Landmark, Banknote, Smartphone, Search, Mail, Image, Newspaper, Globe, MapPin, Shield, Hash, AtSign, MessageSquare, Play, Link, X, Radar, FileText, Camera, Database } from "lucide-react";

const categories = [
  { id: "unified", label: "Unified Console", icon: Radar },
  { id: "phone", label: "Phone Numbers", icon: Phone },
  { id: "people", label: "People / Names", icon: User },
  { id: "business", label: "Business & Companies", icon: Building2 },
  { id: "property", label: "Property & Addresses", icon: Home },
  { id: "vehicles", label: "Vehicles", icon: Car },
  { id: "courts", label: "Court Records", icon: Scale },
  { id: "government", label: "Government Records", icon: Landmark },
  { id: "financial", label: "Financial & SEBI", icon: Banknote },
  { id: "social", label: "Social Media", icon: Smartphone },
  { id: "instagram", label: "Instagram", icon: Hash },
  { id: "facebook", label: "Facebook", icon: Globe },
  { id: "twitter", label: "X / Twitter", icon: AtSign },
  { id: "linkedin", label: "LinkedIn", icon: MessageSquare },
  { id: "tiktok", label: "TikTok", icon: Play },
  { id: "engines", label: "Search Engines", icon: Search },
  { id: "email", label: "Email Addresses", icon: Mail },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "databreach", label: "Data Breaches", icon: Database },
  { id: "images", label: "Image / Face Search", icon: Image },
  { id: "cameras", label: "Cameras", icon: Camera },
  { id: "news", label: "News & Media", icon: Newspaper },
  { id: "usernames", label: "Usernames", icon: User },
  { id: "domain", label: "Domains & IP", icon: Link },
  { id: "maps", label: "Maps", icon: MapPin },
  { id: "obfuscators", label: "Code Compilers", icon: Shield },
  { id: "advanced", label: "Dork Builder", icon: Shield },
];

export default function Sidebar({ activeCategory, setActiveCategory, mobileOpen, setMobileOpen }) {
  const sections = [
    { label: "Overview", ids: ["unified"] },
    { label: "People & Entities", ids: ["phone","people","business","property","vehicles"] },
    { label: "Records", ids: ["courts","government","financial"] },
    { label: "Social Media", ids: ["social","instagram","facebook","twitter","linkedin","tiktok"] },
    { label: "Intelligence", ids: ["engines","email","documents","databreach","images","cameras","news","usernames","domain","maps","obfuscators","advanced"] },
  ];

  return (
    <>
      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">OSINTFORIND</span>
          <button className="sidebar-close" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
          {sections.map((sec) => (
            <div key={sec.label}>
              <div className="sidebar-section-label">{sec.label}</div>
              {sec.ids.map((id) => {
                const cat = categories.find((c) => c.id === id);
                if (!cat) return null;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    className={`sidebar-btn ${activeCategory === cat.id ? "sidebar-btn-active" : ""}`}
                    onClick={() => { setActiveCategory(cat.id); setMobileOpen(false); }}
                  >
                    <Icon size={17} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

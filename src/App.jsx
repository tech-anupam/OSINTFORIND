import { useState, useEffect, useMemo } from "react";
import { Menu, Filter, X, Radar } from "lucide-react";
import Sidebar from "./components/Sidebar";
import ToolPage from "./components/ToolPage";
import AdvancedTools from "./components/AdvancedTools";
import UnifiedDashboard from "./components/UnifiedDashboard";
import Footer from "./components/Footer";
import phone from "./tools/phone";
import people from "./tools/people";
import business from "./tools/business";
import property from "./tools/property";
import vehicles from "./tools/vehicles";
import courts from "./tools/courts";
import government from "./tools/government";
import financial from "./tools/financial";
import social from "./tools/social";
import instagram from "./tools/instagram";
import facebook from "./tools/facebook";
import twitter from "./tools/twitter";
import linkedin from "./tools/linkedin";
import tiktok from "./tools/tiktok";
import engines from "./tools/engines";
import email from "./tools/email";
import images from "./tools/images";
import news from "./tools/news";
import usernames from "./tools/usernames";
import domain from "./tools/domain";
import maps from "./tools/maps";
import documents from "./tools/documents";
import cameras from "./tools/cameras";
import databreach from "./tools/databreach";

const combinedSocial = [
  ...social,
  ...instagram.map((t) => ({ ...t, platform: "Instagram" })),
  ...facebook.map((t) => ({ ...t, platform: "Facebook" })),
  ...twitter.map((t) => ({ ...t, platform: "X / Twitter" })),
  ...linkedin.map((t) => ({ ...t, platform: "LinkedIn" })),
  ...tiktok.map((t) => ({ ...t, platform: "TikTok" }))
];

const toolMap = { phone, people, business, property, vehicles, courts, government, financial, social: combinedSocial, instagram, facebook, twitter, linkedin, tiktok, engines, email, documents, databreach, images, news, usernames, domain, maps, cameras };

const inputLabelsMap = {
  phone: { phone: "Phone Number" },
  people: { name: "Full Name", city: "City or Area" },
  business: { company: "Company Name" },
  property: { address: "Address / Area" },
  vehicles: { plate: "Vehicle Plate / Number", dl: "Driving License Number" },
  courts: { name: "Person Name / Case Number" },
  government: { id: "Document ID / Card Number" },
  financial: { company: "Company Name" },
  social: { username: "Username", term: "Word to search", username2: "Second Username (Check Connections)", hashtag: "Hashtag (#)", id: "User ID Number", domain: "Domain or IP" },
  instagram: { username: "Username", term: "Word to search", username2: "Second Username (Check Connections)", hashtag: "Hashtag (#)" },
  facebook: { username: "Username or ID", term: "Word to search" },
  twitter: { username: "Username", term: "Word to search", hashtag: "Hashtag (#)" },
  linkedin: { username: "Username", term: "Word to search" },
  tiktok: { username: "Username", term: "Word to search", hashtag: "Hashtag (#)" },
  engines: { query: "Word / Sentence to search" },
  email: { email: "Email Address" },
  documents: { query: "Word to search" },
  databreach: { query: "Email, Username, or IP" },
  images: { url: "Image Link / URL", query: "Word to search" },
  news: { query: "Word to search" },
  usernames: { username: "Username" },
  domain: { domain: "Domain or IP" },
  maps: { location: "Location / Place" },
  cameras: { location: "City / Location" },
};

const tagOptions = ["All", "Government", "Social", "Commercial", "News", "Search"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("unified");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filterTag, setFilterTag] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const [recents, setRecents] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("osintforind-recents");
    if (saved) {
      try { setRecents(JSON.parse(saved)); } catch { }
    }
  }, []);

  const handleRecentsSave = (cat, data) => {
    setRecents((prev) => ({ ...prev, [cat]: data }));
  };

  const filteredTools = useMemo(() => {
    const tools = toolMap[activeCategory];
    if (!tools) return [];
    if (filterTag === "All") return tools;
    return tools.filter((t) => t.tag === filterTag);
  }, [activeCategory, filterTag]);

  return (
    <div className="app">
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main className="main">
        <header className="top-bar">
          <div className="top-bar-left">
            <button className="hamburger" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="top-bar-brand">
              <Radar size={22} className="icon-saffron" />
              <h1 className="top-bar-title">OSINTFORIND</h1>
            </div>
          </div>
          <div className="top-bar-right">
            <div className="filter-wrapper">
              <button className={`btn btn-ghost btn-sm ${showFilter ? "btn-active" : ""}`} onClick={() => setShowFilter(!showFilter)}>
                <Filter size={14} />
                <span>Filter</span>
                {filterTag !== "All" && <span className="filter-active-badge">{filterTag}</span>}
              </button>
              {showFilter && (
                <div className="filter-dropdown glass-card">
                  {tagOptions.map((tag) => (
                    <button key={tag} className={`filter-option ${filterTag === tag ? "filter-option-active" : ""}`} onClick={() => { setFilterTag(tag); setShowFilter(false); }}>
                      {tag}
                      {filterTag === tag && <X size={12} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="content">
          {activeCategory === "unified" ? (
            <UnifiedDashboard onNavigate={(cat, val) => {
              if (val) {
                localStorage.setItem("osintforind-prefill", val);
              }
              setActiveCategory(cat);
            }} />
          ) : activeCategory === "advanced" ? (
            <AdvancedTools />
          ) : (
            <ToolPage
              tools={filteredTools}
              category={activeCategory}
              onRecentsSave={handleRecentsSave}
              recents={recents}
              inputLabels={inputLabelsMap[activeCategory]}
            />
          )}
          <Footer />
        </div>
      </main>
    </div>
  );
}

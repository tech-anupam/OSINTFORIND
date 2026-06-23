import { useState, useMemo } from "react";
import { Search, Copy, Check, ExternalLink, Shield, Zap, Terminal, HelpCircle } from "lucide-react";

const searchEngines = [
  { id: "google", label: "Google", url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "bing", label: "Bing", url: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "yahoo", label: "Yahoo", url: (q) => `https://search.yahoo.com/search?p=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "yandex", label: "Yandex", url: (q) => `https://yandex.com/search/?text=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "duckduckgo", label: "DuckDuckGo", url: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "startpage", label: "StartPage", url: (q) => `https://startpage.com/do/search?q=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "brave", label: "Brave", url: (q) => `https://search.brave.com/search?q=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "qwant", label: "Qwant", url: (q) => `https://www.qwant.com/?q=${encodeURIComponent(q)}`, requiresTor: false },
  { id: "ahmia", label: "Ahmia (Tor)", url: (q) => `https://ahmia.fi/search/?q=${encodeURIComponent(q)}`, requiresTor: true },
  { id: "torlink", label: "Torlink (Tor)", url: (q) => `https://tor.link/?q=${encodeURIComponent(q)}`, requiresTor: true },
  { id: "torch", label: "Torch (.onion)", url: (q) => `http://torch4st4l57l2u2vr5wqwvwyueucvnrao4xajqr2klmcmicrv7ccaad.onion/search?query=${encodeURIComponent(q)}&action=search`, requiresTor: true },
  { id: "tor66", label: "Tor66 (.onion)", url: (q) => `http://www.tor66sewebgixwhcqfnp5inzp5x5uohhdy3kvtnyfxc2e5mxiuh34iid.onion/search?q=${encodeURIComponent(q)}`, requiresTor: true },
  { id: "haystack", label: "Haystack (.onion)", url: (q) => `http://haystak5njsmn2hqkewecpaxetahtwhsbsa64jom2k22z5afxhnpxfid.onion/?q=${encodeURIComponent(q)}`, requiresTor: true },
  { id: "onionland", label: "OnionLand (.onion)", url: (q) => `http://3bbad7fauom4d6sgppalyqddsqbf5u5p56b5k5uk2zxsy3d6ey2jobad.onion/search?q=${encodeURIComponent(q)}`, requiresTor: true },
  { id: "phobos", label: "Phobos (.onion)", url: (q) => `http://phobosxilamwcg75xt22id7aywkzol6q6rfl2flipcqoc4e4ahima5id.onion/search?query=${encodeURIComponent(q)}`, requiresTor: true },
  { id: "deepsearch", label: "DeepSearch (.onion)", url: (q) => `http://searchgf7gdtauh7bhnbyed4ivxqmuoat3nm6zfrg3ymkq6mtnpye3ad.onion/search?q=${encodeURIComponent(q)}`, requiresTor: true }
];

export default function AdvancedTools() {
  const [keyword, setKeyword] = useState("");
  const [phrase, setPhrase] = useState("");
  const [site, setSite] = useState("");
  const [inurl, setInurl] = useState("");
  const [intitle, setIntitle] = useState("");
  const [intext, setIntext] = useState("");
  const [exclude, setExclude] = useState("");
  const [filetype, setFiletype] = useState("");
  const [customFiletype, setCustomFiletype] = useState("");
  const [copied, setCopied] = useState(false);

  const builtQuery = useMemo(() => {
    const parts = [];
    if (site.trim()) parts.push(`site:${site.trim()}`);
    
    const activeFiletype = filetype === "custom" ? customFiletype : filetype;
    if (activeFiletype.trim()) parts.push(`filetype:${activeFiletype.trim()}`);
    
    if (intitle.trim()) parts.push(`intitle:"${intitle.trim()}"`);
    if (inurl.trim()) parts.push(`inurl:"${inurl.trim()}"`);
    if (intext.trim()) parts.push(`intext:"${intext.trim()}"`);
    if (phrase.trim()) parts.push(`"${phrase.trim()}"`);
    if (exclude.trim()) {
      const words = exclude.trim().split(/\s+/);
      words.forEach(w => parts.push(`-${w}`));
    }
    if (keyword.trim()) parts.push(keyword.trim());
    return parts.join(" ");
  }, [keyword, phrase, site, inurl, intitle, intext, exclude, filetype, customFiletype]);

  const copyQuery = () => {
    navigator.clipboard.writeText(builtQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="tool-page">
      <div className="tool-page-header glass-card">
        <div className="module-status-bar">
          <div className="status-indicator">
            <Shield size={22} className="icon-saffron pulse-glow" />
            <div>
              <h1 className="module-title">Advanced Dork Builder</h1>
              <p className="module-subtitle">CONSTRUCT HIGHLY TARGETED SEARCH OPERATORS FOR DEEP INVESTIGATION</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-assistants-container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div className="parameter-assistant-panel glass-card" style={{ padding: "24px" }}>
          <div className="panel-header">
            <Terminal size={20} className="icon-saffron" />
            <h3 className="panel-title">Dork Parameters</h3>
          </div>

          <div className="panel-inputs-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            <div className="panel-input-group">
              <label className="panel-label">Primary Keyword(s)</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. Target Name or Alias..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">Exact Phrase Match</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. 'confidential document'..."
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">Site / Domain Restriction</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. gov.in, instagram.com..."
                value={site}
                onChange={(e) => setSite(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">URL Contains Keyword (inurl)</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. admin, backup, login..."
                value={inurl}
                onChange={(e) => setInurl(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">Title Contains Keyword (intitle)</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. 'index of', staff..."
                value={intitle}
                onChange={(e) => setIntitle(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">Page Contains Keyword (intext)</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. password, passport, confidential..."
                value={intext}
                onChange={(e) => setIntext(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">Exclude Words / Domains</label>
              <input
                type="text"
                className="panel-input"
                placeholder="e.g. facebook.com, login..."
                value={exclude}
                onChange={(e) => setExclude(e.target.value)}
              />
            </div>

            <div className="panel-input-group">
              <label className="panel-label">File Type Extension</label>
              <div style={{ display: "flex", gap: "8px" }}>
                <select
                  className="panel-input"
                  style={{ flex: 1 }}
                  value={filetype}
                  onChange={(e) => setFiletype(e.target.value)}
                >
                  <option value="">None</option>
                  <option value="pdf">PDF Document (.pdf)</option>
                  <option value="xls">Excel Spreadsheet (.xls/.xlsx)</option>
                  <option value="doc">Word Document (.doc/.docx)</option>
                  <option value="txt">Text File (.txt)</option>
                  <option value="sql">SQL / Database (.sql/.db/.sqlite)</option>
                  <option value="zip">ZIP / Archive (.zip/.rar/.tar.gz)</option>
                  <option value="custom">Custom Extension...</option>
                </select>
                {filetype === "custom" && (
                  <input
                    type="text"
                    className="panel-input"
                    style={{ flex: 1 }}
                    placeholder="e.g. conf, bak..."
                    value={customFiletype}
                    onChange={(e) => setCustomFiletype(e.target.value)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="parameter-assistant-panel glass-card" style={{ padding: "24px" }}>
          <div className="panel-header">
            <HelpCircle size={20} className="icon-saffron" />
            <h3 className="panel-title">Generated Dork Preview</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <textarea
              className="preview-textarea"
              value={builtQuery || "Build a query by typing parameters above..."}
              readOnly
              rows={3}
              style={{ fontSize: "1.1rem", padding: "12px", background: "rgba(0,0,0,0.5)" }}
            />
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ flex: 1, padding: "12px" }}
                onClick={copyQuery}
                disabled={!builtQuery.trim()}
              >
                {copied ? <Check size={16} className="icon-green" /> : <Copy size={16} />}
                <span>{copied ? "Copied Query!" : "Copy Dork Query"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="parameter-assistant-panel glass-card" style={{ padding: "24px" }}>
          <div className="panel-header">
            <Search size={20} className="icon-saffron" />
            <h3 className="panel-title">Search Engines (Click to Launch)</h3>
          </div>
          <div className="tool-grid-square" style={{ marginTop: 0 }}>
            {searchEngines.map((engine) => {
              const url = engine.url(builtQuery);
              return (
                <div key={engine.id} className="tool-square-card glass-card" style={{ minHeight: "auto", padding: "16px" }}>
                  <div className="card-top" style={{ marginBottom: "8px" }}>
                    <div className="card-tags">
                      <span className="tag tag-search">{engine.requiresTor ? "DARKNET" : "CLEARNET"}</span>
                      {engine.requiresTor && (
                        <span className="tag tag-tor">Tor Required</span>
                      )}
                    </div>
                  </div>
                  <div className="card-middle" style={{ margin: 0, gap: "4px" }}>
                    <h3 className="card-label">{engine.label}</h3>
                    {engine.requiresTor && (
                      <span style={{ color: "#c084fc", fontSize: "0.68rem", fontWeight: "700" }}>Requires Tor Browser</span>
                    )}
                  </div>
                  <div className="card-bottom-actions" style={{ borderTop: "none", paddingTop: "8px", marginTop: "8px" }}>
                    <button
                      type="button"
                      className="card-action-btn copy"
                      onClick={() => copyQuery()}
                    >
                      <Copy size={12} />
                      <span>Copy</span>
                    </button>
                    <a
                      href={builtQuery.trim() ? url : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card-action-btn launch ${!builtQuery.trim() ? "disabled" : ""}`}
                    >
                      <ExternalLink size={12} />
                      <span>Search</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

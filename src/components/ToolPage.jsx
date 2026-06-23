import { useState, useEffect, useMemo } from "react";
import { Search, X, Check, Copy, ExternalLink, Shield, Zap, Keyboard, HelpCircle } from "lucide-react";

const categoryTitles = {
  phone: "Phone Numbers", people: "People / Names", business: "Business & Companies",
  property: "Property & Addresses", vehicles: "Vehicles", courts: "Court Records",
  government: "Government Records", financial: "Financial & SEBI", social: "Social Media",
  instagram: "Instagram", facebook: "Facebook", twitter: "X / Twitter",
  linkedin: "LinkedIn", tiktok: "TikTok", engines: "Search Engines",
  email: "Email Addresses", documents: "Documents", databreach: "Data Breaches", images: "Image / Face Search", news: "News & Media",
  usernames: "Usernames", domain: "Domains & IP", maps: "Maps", cameras: "Cameras"
};

const primaryInputKeys = {
  phone: "phone", people: "name", business: "company", property: "address",
  vehicles: "plate", courts: "name", government: "id", financial: "company",
  social: "username", instagram: "username", facebook: "username",
  twitter: "username", linkedin: "username", tiktok: "username",
  engines: "query", email: "email", documents: "query", databreach: "query", images: "query",
  news: "query", usernames: "username", domain: "domain", maps: "location",
  cameras: "location"
};

const dorkModifiers = [
  { id: "pdf", label: "PDF Documents", dork: "filetype:pdf" },
  { id: "excel", label: "Excel Sheets", dork: "(filetype:xls OR filetype:xlsx OR filetype:csv)" },
  { id: "word", label: "Word Docs", dork: "(filetype:doc OR filetype:docx)" },
  { id: "text", label: "Text/Logs", dork: "(filetype:txt OR filetype:log)" },
  { id: "db", label: "Database Files", dork: "(filetype:sql OR filetype:db OR filetype:sqlite OR filetype:bak)" },
  { id: "indexof", label: "Directory Index", dork: 'intitle:"index of"' },
  { id: "admin", label: "Admin/Login", dork: "(inurl:admin OR inurl:login OR inurl:signin)" },
  { id: "confidential", label: "Confidential Info", dork: '(intitle:confidential OR intitle:restricted OR intitle:secret)' }
];

const isSearchEngineUrl = (urlStr) => {
  if (!urlStr) return false;
  try {
    const isAbsolute = urlStr.startsWith("http://") || urlStr.startsWith("https://");
    const base = isAbsolute ? undefined : "https://dummy.com";
    const urlObj = new URL(urlStr, base);
    const host = urlObj.hostname.toLowerCase();
    return (
      host.includes("google.") ||
      host.includes("bing.com") ||
      host.includes("yahoo.com") ||
      host.includes("yandex.") ||
      host.includes("baidu.com") ||
      host.includes("duckduckgo.com") ||
      host.includes("startpage.com") ||
      host.includes("qwant.com") ||
      host.includes("brave.com") ||
      host.includes("ahmia.fi") ||
      host.includes("tor.link") ||
      host.includes("baresearch.org") ||
      host.endsWith(".onion")
    );
  } catch (e) {}
  return false;
};

const applyModifiersToUrl = (urlStr, modifiers) => {
  if (!modifiers || modifiers.length === 0 || !urlStr || !isSearchEngineUrl(urlStr)) return urlStr;
  try {
    const isAbsolute = urlStr.startsWith("http://") || urlStr.startsWith("https://");
    const base = isAbsolute ? undefined : "https://dummy.com";
    const urlObj = new URL(urlStr, base);
    const params = urlObj.searchParams;
    const searchKeys = ["q", "query", "p", "text", "wd", "req", "s", "email"];
    let foundKey = null;
    for (const key of searchKeys) {
      if (params.has(key)) {
        foundKey = key;
        break;
      }
    }
    if (foundKey) {
      let currentVal = params.get(foundKey) || "";
      const extraDorks = modifiers.map(m => {
        const found = dorkModifiers.find(dm => dm.id === m);
        return found ? found.dork : "";
      }).filter(Boolean);
      if (extraDorks.length > 0) {
        currentVal = currentVal.trim();
        const suffix = extraDorks.join(" ");
        if (currentVal) {
          currentVal = `${currentVal} ${suffix}`;
        } else {
          currentVal = suffix;
        }
        params.set(foundKey, currentVal);
        const result = urlObj.toString();
        return isAbsolute ? result : result.replace("https://dummy.com", "");
      }
    }
  } catch (e) {}
  return urlStr;
};

export default function ToolPage({ tools, category, onRecentsSave, recents, inputLabels }) {
  const allCategoryInputs = useMemo(() => {
    return Array.from(new Set(tools.flatMap((t) => t.inputs)));
  }, [tools]);

  const primaryInput = useMemo(() => {
    return primaryInputKeys[category] || allCategoryInputs[0] || "";
  }, [category, allCategoryInputs]);

  const uniqueInputs = useMemo(() => {
    return primaryInput ? [primaryInput] : allCategoryInputs;
  }, [primaryInput, allCategoryInputs]);

  const showDorkPanel = useMemo(() => {
    return tools.some((tool) => {
      const dummyArgs = tool.inputs.map(() => "DUMMY_VALUE_9999");
      return isSearchEngineUrl(tool.url(...dummyArgs));
    });
  }, [tools]);

  const [targetValues, setTargetValues] = useState(() => {
    return allCategoryInputs.reduce((acc, inp) => ({ ...acc, [inp]: "" }), {});
  });

  const [localValues, setLocalValues] = useState(() => {
    return allCategoryInputs.reduce((acc, inp) => ({ ...acc, [inp]: "" }), {});
  });

  const [initialized, setInitialized] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [editedUrls, setEditedUrls] = useState({});
  const [selectedModifiers, setSelectedModifiers] = useState([]);

  useEffect(() => {
    setEditedUrls({});
  }, [targetValues]);

  const bypassSetupCategories = useMemo(() => ["images", "cameras"], []);

  const uniqueStates = useMemo(() => {
    const states = tools.map((t) => t.state).filter(Boolean);
    if (states.length === 0) return [];
    return ["All", ...Array.from(new Set(states))];
  }, [tools]);

  const uniquePlatforms = useMemo(() => {
    const platforms = tools.map((t) => t.platform).filter(Boolean);
    if (platforms.length === 0) return [];
    return ["All", ...Array.from(new Set(platforms))];
  }, [tools]);

  useEffect(() => {
    setFilterQuery("");
    setSelectedState("All");
    setSelectedPlatform("All");
    setSelectedModifiers([]);
    const prefill = localStorage.getItem("osintforind-prefill");
    if (prefill) {
      localStorage.removeItem("osintforind-prefill");
      const updated = allCategoryInputs.reduce((acc, inp) => ({ ...acc, [inp]: inp === primaryInput ? prefill : "" }), {});
      setTargetValues(updated);
      setLocalValues(updated);
      setInitialized(true);
      saveToRecents(prefill);
    } else {
      const isBypassed = bypassSetupCategories.includes(category);
      setInitialized(isBypassed);
      const empty = allCategoryInputs.reduce((acc, inp) => ({ ...acc, [inp]: "" }), {});
      setTargetValues(empty);
      setLocalValues(empty);
    }
  }, [category, allCategoryInputs, bypassSetupCategories]);

  const handleLocalChange = (inp, val) => {
    setLocalValues((prev) => ({ ...prev, [inp]: val }));
  };

  const handleCommitInput = (inp) => {
    setTargetValues((prev) => ({ ...prev, [inp]: localValues[inp] || "" }));
  };

  const handleInitialize = (e) => {
    if (e) e.preventDefault();
    if (Object.values(localValues).some((v) => v.trim())) {
      setTargetValues(localValues);
      setInitialized(true);
      const firstVal = Object.values(localValues).find((v) => v.trim()) || "";
      saveToRecents(firstVal);
    }
  };

  const saveToRecents = (val) => {
    if (!val || !val.trim()) return;
    const saved = JSON.parse(localStorage.getItem("osintforind-recents") || "{}");
    const catRecents = saved[category] || [];
    const filtered = catRecents.filter((r) => r !== val);
    filtered.unshift(val);
    saved[category] = filtered.slice(0, 10);
    localStorage.setItem("osintforind-recents", JSON.stringify(saved));
  };

  const loadRecent = (val) => {
    const updated = allCategoryInputs.reduce((acc, inp) => ({ ...acc, [inp]: inp === primaryInput ? val : "" }), {});
    setTargetValues(updated);
    setLocalValues(updated);
    setInitialized(true);
    saveToRecents(val);
  };

  const filteredTools = useMemo(() => {
    return tools.filter((t) => {
      const labelMatch = t.label.toLowerCase().includes(filterQuery.toLowerCase());
      const tagMatch = t.tag.toLowerCase().includes(filterQuery.toLowerCase());
      const stateMatch = selectedState === "All" || t.state === selectedState;
      const platformMatch = selectedPlatform === "All" || t.platform === selectedPlatform;
      return (labelMatch || tagMatch) && stateMatch && platformMatch;
    });
  }, [tools, filterQuery, selectedState, selectedPlatform]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(""), 1500);
  };

  const categoryRecents = recents[category] || [];

  if (!initialized) {
    return (
      <div className="module-setup-container">
        <div className="module-setup-card glass-card">
          <div className="setup-header">
            <Shield size={36} className="setup-icon" />
            <div>
              <h2 className="setup-title">Find Information on {categoryTitles[category]}</h2>
              <p className="setup-subtitle">ENTER THE SEARCH CRITERIA TO GET DETAILED RECORDS</p>
            </div>
          </div>

          <form onSubmit={handleInitialize} className="setup-form">
            {uniqueInputs.map((inp) => (
              <div key={inp} className="setup-input-group">
                <div className="label-row">
                  <label className="setup-label">{(inputLabels && inputLabels[inp]) || inp.toUpperCase()}</label>
                </div>
                <input
                  type="text"
                  required
                  className="setup-input"
                  placeholder={category === "domain" && inp === "domain" ? "google.com" : `Enter ${(inputLabels && inputLabels[inp]) || inp}...`}
                  value={localValues[inp] || ""}
                  onChange={(e) => handleLocalChange(inp, e.target.value)}
                />
                {category === "domain" && inp === "domain" && (
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted, #888)", display: "block", marginTop: "0.25rem" }}>
                    Do not include http:// or https:// (e.g. google.com)
                  </span>
                )}
              </div>
            ))}

            {allCategoryInputs.filter(inp => inp !== primaryInput && inp !== "id").map((inp) => (
              <div key={inp} className="setup-input-group">
                <div className="label-row">
                  <label className="setup-label">
                    {(inputLabels && inputLabels[inp]) || inp.toUpperCase()}{" "}
                    <span style={{ color: "var(--text-muted, #888)", fontSize: "0.7rem", fontWeight: "normal" }}>(Optional)</span>
                  </label>
                </div>
                <input
                  type="text"
                  className="setup-input"
                  placeholder={`Enter ${(inputLabels && inputLabels[inp]) || inp}...`}
                  value={localValues[inp] || ""}
                  onChange={(e) => handleLocalChange(inp, e.target.value)}
                />
              </div>
            ))}

            <button type="submit" className="btn btn-saffron setup-submit-btn">
              <Zap size={16} />
              <span>Find Information</span>
            </button>
          </form>

          {categoryRecents.length > 0 && (
            <div className="setup-recents">
              <span className="recents-label">Recent Searches:</span>
              <div className="recents-pills">
                {categoryRecents.map((r, i) => (
                  <button key={i} className="recent-pill-btn" onClick={() => loadRecent(r)}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="tool-page">
      <div className="tool-page-header glass-card">
        <div className="module-status-bar">
          <div className="status-indicator">
            <Zap size={18} className="icon-saffron pulse-glow" />
            <div>
              <h1 className="module-title">{categoryTitles[category] || category} Records</h1>
              <p className="module-subtitle">ACTIVE SEARCH PARAMETERS</p>
            </div>
          </div>
          <div className="active-targets-pills">
            {uniqueInputs.map((inp) => (
              <div key={inp} className="target-pill">
                <span className="target-pill-label">{(inputLabels && inputLabels[inp]) || inp}:</span>
                <span className="target-pill-value">{targetValues[inp] || "None"}</span>
              </div>
            ))}
            <button className="btn btn-ghost btn-sm" onClick={() => setInitialized(false)}>
              Change Target
            </button>
          </div>
        </div>

        <div className="module-toolbar">
          <div className="toolbar-search-wrapper">
            <div className="toolbar-search">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search links and dorks..."
                className="toolbar-search-input"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
              />
              {filterQuery && (
                <button className="clear-search" onClick={() => setFilterQuery("")}>
                  <X size={14} />
                </button>
              )}
            </div>

            {primaryInput && (
              <div className="toolbar-global-input">
                <input
                  type="text"
                  placeholder={category === "domain" && primaryInput === "domain" ? "Set target (no http/https, e.g. google.com)..." : `Set target ${(inputLabels && inputLabels[primaryInput]) || primaryInput}...`}
                  className="toolbar-search-input global-target-input"
                  value={localValues[primaryInput] || ""}
                  onChange={(e) => handleLocalChange(primaryInput, e.target.value)}
                  onBlur={() => handleCommitInput(primaryInput)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommitInput(primaryInput);
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {uniqueStates.length > 1 && (
        <div className="state-selector-panel glass-card">
          <span className="state-label">Filter by State / Region:</span>
          <div className="state-pills">
            {uniqueStates.map((st) => (
              <button
                key={st}
                type="button"
                className={`state-pill-btn ${selectedState === st ? "active" : ""}`}
                onClick={() => setSelectedState(st)}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      )}
      {uniquePlatforms.length > 1 && (
        <div className="state-selector-panel glass-card">
          <span className="state-label">Filter by Platform:</span>
          <div className="state-pills">
            {uniquePlatforms.map((pl) => (
              <button
                key={pl}
                type="button"
                className={`state-pill-btn ${selectedPlatform === pl ? "active" : ""}`}
                onClick={() => setSelectedPlatform(pl)}
              >
                {pl}
              </button>
            ))}
          </div>
        </div>
      )}
      {showDorkPanel && (
        <div className="state-selector-panel glass-card">
          <span className="state-label">Search Modifiers (Dork Filters):</span>
          <div className="state-pills">
            {dorkModifiers.map((dm) => (
              <button
                key={dm.id}
                type="button"
                className={`state-pill-btn ${selectedModifiers.includes(dm.id) ? "active" : ""}`}
                onClick={() => {
                  setSelectedModifiers((prev) =>
                    prev.includes(dm.id)
                      ? prev.filter((id) => id !== dm.id)
                      : [...prev, dm.id]
                  );
                }}
              >
                {dm.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="tool-grid-square">
        {filteredTools.map((tool) => {
          const dummyArgs = tool.inputs.map(() => "DUMMY_VALUE_9999");
          const isStatic = tool.url(...dummyArgs) === tool.url(...tool.inputs.map(() => ""));
          const missingInputs = isStatic ? [] : tool.inputs.filter(inp => !targetValues[inp]?.trim());
          const hasMissing = tool.inputs.includes(primaryInput) ? !targetValues[primaryInput]?.trim() : false;
          const args = tool.inputs.map((inp) => targetValues[inp] || "");
          const builtUrl = applyModifiersToUrl(tool.url(...args), selectedModifiers);
          const activeUrl = editedUrls[tool.id] !== undefined ? editedUrls[tool.id] : builtUrl;

          return (
            <div key={tool.id} className={`tool-square-card glass-card ${hasMissing ? "has-missing-params" : ""}`}>
              <div className="card-top">
                <div className="card-tags">
                  {hasMissing ? (
                    <span className="tag tag-missing">Awaiting Parameters</span>
                  ) : (
                    <span className={`tag tag-${tool.tag.toLowerCase()}`}>{tool.tag}</span>
                  )}
                  {tool.requiresTor && (
                    <span className="tag tag-tor">Tor Required</span>
                  )}
                  {tool.status !== "active" && (
                    <span className={`tag tag-${tool.status}`}>{tool.status.toUpperCase()}</span>
                  )}
                </div>
              </div>

              <div className="card-middle">
                <h3 className="card-label">{tool.label}</h3>
                {tool.description && (
                  <p className="card-description">{tool.description}</p>
                )}
                {tool.requiresTor && (
                  <div style={{ color: "#c084fc", fontSize: "0.72rem", fontWeight: "700", marginTop: "4px", marginBottom: "4px" }}>
                    Requires Tor Browser / VPN
                  </div>
                )}
                {missingInputs.filter(inp => inp !== primaryInput).length > 0 && (
                  <div className="card-inline-inputs" onClick={(e) => e.stopPropagation()}>
                    {missingInputs.filter(inp => inp !== primaryInput).map((inp) => (
                      <div key={inp} className="inline-input-group">
                        <label className="inline-label">{(inputLabels && inputLabels[inp]) || inp.toUpperCase()}</label>
                        <input
                          type="text"
                          className="inline-input"
                          placeholder={`Enter ${(inputLabels && inputLabels[inp]) || inp}...`}
                          value={localValues[inp] || ""}
                          onChange={(e) => handleLocalChange(inp, e.target.value)}
                          onBlur={() => handleCommitInput(inp)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleCommitInput(inp);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="card-preview-block">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="preview-label">{isStatic ? "Official Portal Link" : "Generated Query (Editable)"}</span>
                    {editedUrls[tool.id] !== undefined && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditedUrls((prev) => {
                            const next = { ...prev };
                            delete next[tool.id];
                            return next;
                          });
                        }}
                        style={{ background: "none", border: "none", color: "var(--saffron)", fontSize: "0.7rem", cursor: "pointer", padding: 0 }}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <textarea
                    className="preview-textarea"
                    value={activeUrl}
                    onChange={(e) => setEditedUrls(prev => ({ ...prev, [tool.id]: e.target.value }))}
                    rows={2}
                  />
                </div>
              </div>

              <div className="card-bottom-actions">
                <button
                  className="card-action-btn copy"
                  onClick={() => copyToClipboard(activeUrl, tool.id)}
                >
                  {copiedLink === tool.id ? <Check size={14} className="icon-green" /> : <Copy size={14} />}
                  <span>{copiedLink === tool.id ? "Copied" : "Copy Link"}</span>
                </button>
                <a
                  href={activeUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-btn launch"
                >
                  <ExternalLink size={14} />
                  <span>{isStatic ? "Open Portal" : "Launch"}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bottom-assistants-container">
        {(category === "instagram" || category === "social") && (
          <div className="instagram-assistant-panel glass-card">
            <div className="assistant-header">
              <HelpCircle size={20} className="icon-saffron" />
              <div>
                <h3 className="assistant-title">Instagram User ID Finder</h3>
                <p className="assistant-subtitle">Resolve and input numerical User ID for advanced dorks</p>
              </div>
            </div>
            <div className="assistant-body">
              <p className="assistant-text">
                Instagram User IDs are unique, permanent numerical keys assigned to accounts. While user handles can change, IDs are immutable, allowing continuous tracking in investigations.
              </p>
              <div className="assistant-controls">
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(localValues.username || "");
                    window.open("https://commentpicker.com/instagram-user-id.php", "_blank");
                  }}
                >
                  <Copy size={12} />
                  <span>Copy Handle & Search CommentPicker</span>
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(localValues.username || "");
                    window.open("https://www.instafollowers.co/find-instagram-user-id", "_blank");
                  }}
                >
                  <Copy size={12} />
                  <span>Copy Handle & Search InstaFollowers</span>
                </button>
              </div>
              <div className="assistant-input-wrapper">
                <label className="assistant-input-label">Numeric User ID</label>
                <input
                  type="text"
                  className="panel-input id-input"
                  placeholder="Enter numeric User ID (e.g. 218947291)..."
                  value={localValues.id || ""}
                  onChange={(e) => handleLocalChange("id", e.target.value)}
                  onBlur={() => handleCommitInput("id")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommitInput("id");
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {allCategoryInputs.filter(inp => inp !== primaryInput && inp !== "id").length > 0 && (
          <div className="parameter-assistant-panel glass-card">
            <div className="panel-header">
              <Keyboard size={18} className="icon-saffron" />
              <h3 className="panel-title">Additional Search Parameters</h3>
            </div>
            <div className="panel-inputs-grid">
              {allCategoryInputs.filter(inp => inp !== primaryInput && inp !== "id").map((inp) => (
                <div key={inp} className="panel-input-group">
                  <label className="panel-label">{(inputLabels && inputLabels[inp]) || inp.toUpperCase()}</label>
                  <input
                    type="text"
                    className="panel-input"
                    placeholder={`Enter ${(inputLabels && inputLabels[inp]) || inp}...`}
                    value={localValues[inp] || ""}
                    onChange={(e) => handleLocalChange(inp, e.target.value)}
                    onBlur={() => handleCommitInput(inp)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCommitInput(inp);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

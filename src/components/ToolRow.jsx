import { useState, useRef, useEffect } from "react";
import { ExternalLink, Copy, Check, AlertTriangle, Clock } from "lucide-react";

export default function ToolRow({ tool, onValuesChange, populateValue, inputLabels }) {
  const [values, setValues] = useState(tool.inputs.reduce((acc, inp) => ({ ...acc, [inp]: "" }), {}));
  const [copied, setCopied] = useState(false);
  const inputRefs = useRef({});

  useEffect(() => {
    if (populateValue && populateValue.length > 0) {
      const newValues = {};
      tool.inputs.forEach((inp, i) => {
        newValues[inp] = populateValue[i] || populateValue[0] || "";
      });
      setValues(newValues);
      onValuesChange(tool.id, newValues);
    }
  }, [populateValue]);

  const handleChange = (inputName, val) => {
    const newValues = { ...values, [inputName]: val };
    setValues(newValues);
    onValuesChange(tool.id, newValues);
  };

  const builtUrl = tool.url(...tool.inputs.map((inp) => values[inp] || ""));

  const launch = () => {
    if (Object.values(values).some((v) => v.trim())) {
      window.open(builtUrl, "_blank");
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(builtUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const statusIcon = () => {
    switch (tool.status) {
      case "slow":
        return <Clock size={14} className="status-slow" title="Slow response" />;
      case "login":
        return <AlertTriangle size={14} className="status-login" title="May require login" />;
      default:
        return null;
    }
  };

  const tagClass = () => {
    switch (tool.tag) {
      case "Government":
        return "tag tag-gov";
      case "Social":
        return "tag tag-social";
      case "Commercial":
        return "tag tag-commercial";
      case "News":
        return "tag tag-news";
      default:
        return "tag tag-search";
    }
  };

  return (
    <div className="tool-row glass-card">
      <div className="tool-row-header">
        <div className="tool-row-label">
          {statusIcon()}
          <span className="tool-name">{tool.label}</span>
          <span className={tagClass()}>{tool.tag}</span>
        </div>
        <div className="tool-row-actions">
          <button className="icon-btn" onClick={copyUrl} title="Copy URL">
            {copied ? <Check size={16} className="icon-copied" /> : <Copy size={16} />}
          </button>
          <button className="launch-btn" onClick={launch} title="Launch">
            <ExternalLink size={16} />
            <span>Launch</span>
          </button>
        </div>
      </div>
      <div className="tool-row-inputs">
        {tool.inputs.map((inp) => (
          <div key={inp} className="input-group">
            <label className="input-label">{(inputLabels && inputLabels[inp]) || inp}</label>
            <input
              ref={(el) => (inputRefs.current[inp] = el)}
              className="tool-input"
              type="text"
              placeholder={`Enter ${(inputLabels && inputLabels[inp]) || inp}...`}
              value={values[inp]}
              onChange={(e) => handleChange(inp, e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && launch()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const databreach = [
  { id: "db-hibp", label: "HaveIBeenPwned", tag: "Search", status: "active", inputs: ["query"], description: "Check if the email or username is involved in a data breach.", url: (q) => `https://haveibeenpwned.com/account/${encodeURIComponent(q)}` },
  { id: "db-dehashed", label: "DeHashed Search", tag: "Search", status: "active", inputs: ["query"], description: "Search credentials, passwords, and hashed leaks on DeHashed database.", url: (q) => `https://dehashed.com/search?query=%22${encodeURIComponent(q)}%22` },
  { id: "db-directory", label: "BreachDirectory Lookup", tag: "Search", status: "active", inputs: ["query"], description: "Lookup emails, usernames, domains, and phone numbers in leaked databases.", url: (q) => `https://breachdirectory.org/${encodeURIComponent(q)}` },
  { id: "db-hudsonrock", label: "HudsonRock Leak Preview", tag: "Search", status: "active", inputs: ["query"], description: "Search for info-stealer malware infections and credentials leaks.", url: (q) => `https://cavalier.hudsonrock.com/api/json/v2/preview/search-by-login/osint-tools?email=${encodeURIComponent(q)}` },
  { id: "db-intelx", label: "Intelligence X Search", tag: "Search", status: "active", inputs: ["query"], description: "Search the dark web, leak archives, and public directories.", url: (q) => `https://intelx.io/?s=${encodeURIComponent(q)}` },
  { id: "db-leakix", label: "LeakIX Leak Index", tag: "Search", status: "active", inputs: ["query"], description: "Search indexed breaches, leaks, and exposed public configs.", url: (q) => `https://leakix.net/search?scope=leak&q=%22${encodeURIComponent(q)}%22` },
  { id: "db-snusbase", label: "Snusbase Search", tag: "Search", status: "active", inputs: ["query"], description: "Search leaked databases and pastebins for credentials.", url: (q) => `https://snusbase.com/` },
  { id: "db-leaklookup", label: "Leak-Lookup Checker", tag: "Search", status: "active", inputs: ["query"], description: "Search email addresses, usernames, and domains in database leaks.", url: (q) => `https://leak-lookup.com/` },
  { id: "db-cybernews", label: "Cybernews Leak Check", tag: "Search", status: "active", inputs: ["query"], description: "Verify if the target email is listed in major leaked databases.", url: (q) => `https://check.cybernews.com/chk/?lang=en_US&e=${encodeURIComponent(q)}` },
  { id: "db-psbdmp", label: "PSBDMP Paste Search", tag: "Search", status: "active", inputs: ["query"], description: "Search indexed Pastebin dumps for leaks containing the query.", url: (q) => `https://psbdmp.ws/api/search/${encodeURIComponent(q)}` }
];

export default databreach;

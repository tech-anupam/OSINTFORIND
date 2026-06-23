# OSINTFORIND

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-osintforind.netlify.app-amber?style=for-the-badge&logo=netlify&logoColor=white)](https://osintforind.netlify.app)
[![Platform Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=statuspage)](https://osintforind.netlify.app)
[![Vite Version](https://img.shields.io/badge/Vite-v8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://osintforind.netlify.app)

</div>

OSINTFORIND is a premium, high-performance, and client-side open-source intelligence (OSINT) helper platform. Engineered with a mobile-first design, it is built for investigators, security analysts, and researchers to perform deep investigations without leaving digital footprints.

Unlike traditional OSINT utility indexers (such as IntelTechniques), OSINTFORIND operates entirely on the client side with zero tracking, features real-time search modifier injection, incorporates Tor-required darknet index mappings, and packages an advanced multi-engine Dork Builder with aggressive compiled optimizations.

---

## Comparison: IntelTechniques vs. OSINTFORIND

| Feature | IntelTechniques.com | OSINTFORIND |
| :--- | :--- | :--- |
| **Privacy & Logging** | Uses server-side components, trackers, and external API relays. | **100% Client-Side**. No backend APIs, no database logs, no tracking. |
| **Input Usability** | Updates URL instantly on keystroke, causing cursor jumping and half-formed URL submissions. | **Local Input Buffering**. Target inputs update only on field blur or pressing `Enter`. |
| **Search Engine Support** | Limited to Google standard dorks. | **16 Search Engines** (8 Clearnet engines + 8 Darknet/Onion indexers). |
| **Dynamic Dork Filtering** | None. Must compile search queries manually. | **Togglable Modifier Pills** (PDF, Excel, SQL database, admin pages) with auto-domain validation. |
| **Onion/Tor Warning** | None. Destination links crash on normal browsers. | **Dedicated Tor Badges** and warning flags for darknet tools. |
| **Mobile Responsiveness** | Traditional, hard-to-read desktop tables. | **Mobile-First Glassmorphism Grid** that stacks and resizes on viewports under 600px. |
| **Payload Utilities** | None. | **Integrated Code Compilers & Obfuscators** (CyberChef, JSObfuscator, etc.). |

---

## Core Modules & Functionality

### 1. Unified Console
- Maps a single target value instantly to all relevant search categories.
- Features dynamic target routing to automatically suggest the most relevant OSINT categories (e.g. usernames to Social Media, plate numbers to Vehicles, etc.).

### 2. People & Entities
- **Phone Numbers**: Operator prefix lookup, JustDial registry indexes, global carrier trackers, and BSNL/MTNL dork directories.
- **People / Names**: Director lookups on Tofler and ZaubaCorp via active Google Dorks, avoiding paywalled direct search APIs.
- **Business & Companies**: MCA filings, SEBI intermediaries logs, and ROC signatory dorks.
- **Property & Addresses**: Land registries, address maps, and localized area searches.
- **Vehicles**: Real-time vehicle registries, regional registration indexes, and driving license dorks.
- **Court Records**: Case numbers and litigant tracking indexes across Indian court circles.
- **Government Records**: MyLPG registry lookup and Startup India database directories.

### 3. Aggregated Social Media Hub
- Consolidates profile lookups across 9 platforms (Reddit, HackerNews, Telegram, Discord, Facebook, X, Instagram, LinkedIn, TikTok) in a single page.
- Features togglable platform pills to filter target lists.
- Implements numerical Instagram User ID resolvers (integrating InstaFollowers and CommentPicker) to construct permanent, handle-change-resistant tracking queries.
- Utilizes `OR` dork operators for social username associations to widen query matching.

### 4. Intelligence & Darknet Indexers
- **Search Engines**: Standard web indices (Google, Bing, Yahoo, Yandex, DuckDuckGo, StartPage, Brave, Qwant).
- **Darknet Indexers**: direct queries to Torch, Tor66, Haystack, OnionLand, Phobos, DeepSearch, Ahmia, and Torlink.
- **Data Breaches**: Checks credentials against HaveIBeenPwned, DeHashed, BreachDirectory, HudsonRock malware logs, IntelX, and leak configurations.
- **Cameras**: Live CCTV feed registries and IP camera mapping (collapsing CCTV tools by location).
- **Domains & IP**: WHOIS records, DNS entries, SSL transparency listings (`crt.sh`), and Wayback historical archives.
- **Documents**: Document sharing indexers (Scribd, SlideShare, Academia.edu, ResearchGate, Internet Archive).

### 5. Advanced Dork Builder
- A fully responsive workspace to compile search operators in real time.
- Inputs include keywords, exact phrase matches, domain restraints, URL parameters (`inurl`), title terms (`intitle`), content terms (`intext`), and exclusions (`-`).
- Custom file extension selectors (PDF, XLS, DOC, TXT, SQL, ZIP).
- Launch built queries on any of the 16 web and darknet search engines with a single click.

### 6. Code Compilers & Obfuscators
- Quick-access portal to protect tools and reverse engineer malware:
  - JSObfuscator (Code obfuscation tool)
  - CyberChef (Base64, Hex, cryptography)
  - Compiler Explorer (Godbolt assembly generator)
  - Python Obfuscator
  - Invoke-Obfuscation (PowerShell payload protection)
  - OnlineGDB & JDoodle online sandboxed debuggers

---

## Production Build & Security

The platform is designed to compile securely:
- **Zero Footprint**: Since there are no databases or APIs, the platform cannot be blocked by rate limits or leak user data.
- **Aggressive Compacting**: The Vite config compiles all files (React scripts, SVG assets, CSS) into a single monolithic bundle file.
- **Obfuscation Ready**: The output bundle is optimized, variable names are mangled, and all developer logs/comments are stripped to ensure the deployment target is optimized and tamper-proof.

To build the optimized client bundle:
```bash
npm run build
```

To start the dev server locally:
```bash
npm run dev
```

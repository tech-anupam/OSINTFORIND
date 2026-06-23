const maps = [
  {
    id: "google-maps",
    label: "Google Maps India Search",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://www.google.com/maps/search/${encodeURIComponent(l)}`
  },
  {
    id: "bhuvan-isro",
    label: "Bhuvan ISRO Geo-Portal",
    tag: "Government",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://bhuvan.nrsc.gov.in/`
  },
  {
    id: "bhuvan-2d",
    label: "Bhuvan 2D Map Application",
    tag: "Government",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://bhuvan-app1.nrsc.gov.in/bhuvan2d/bhuvan2d.php`
  },
  {
    id: "mappls-mapmyindia",
    label: "Mappls MapMyIndia",
    tag: "Commercial",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://www.mappls.com/`
  },
  {
    id: "osm-search",
    label: "OpenStreetMap Coordinates",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://www.openstreetmap.org/search?query=${encodeURIComponent(l)}`
  },
  {
    id: "wikimapia",
    label: "Wikimapia Registry Search",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://wikimapia.org/#lang=en&lat=0&lon=0&z=2&q=${encodeURIComponent(l)}`
  },
  {
    id: "google-earth",
    label: "Google Earth Web Client",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://earth.google.com/web/search/${encodeURIComponent(l)}`
  },
  {
    id: "sentinel-satellite",
    label: "Sentinel Hub EO Browser",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://apps.sentinel-hub.com/eo-browser/`
  },
  {
    id: "india-census-gis",
    label: "India Census GIS Map Service",
    tag: "Government",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://censusindia.gov.in/`
  },
  {
    id: "geohack-coord",
    label: "GeoHack Coordinate Converter",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://geohack.toolforge.org/geohack.php?params=${encodeURIComponent(l)}`
  },
  {
    id: "google-dork-address",
    label: "Google Geolocation Dork",
    tag: "Search",
    status: "active",
    inputs: ["location"],
    url: (l) => `https://www.google.com/search?q=%22${encodeURIComponent(l)}%22`
  }
];

export default maps;

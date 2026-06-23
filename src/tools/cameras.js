const cameras = [
  {
    id: "insecam-india",
    label: "Insecam India (Public IP Cams)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => "https://www.insecam.org/en/bycountry/IN/"
  },
  {
    id: "shodan-axis-in",
    label: "Shodan Axis Live View (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.shodan.io/search?query=title%3A%22Axis+Video+Server%22+country%3A%22IN%22`
  },
  {
    id: "shodan-hikvision-in",
    label: "Shodan Hikvision IP Cameras (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.shodan.io/search?query=title%3A%22Hikvision%22+country%3A%22IN%22`
  },
  {
    id: "shodan-dahua-in",
    label: "Shodan Dahua DVR (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.shodan.io/search?query=title%3A%22Web+Service%22+dahua+country%3A%22IN%22`
  },
  {
    id: "shodan-webcamxp-in",
    label: "Shodan WebcamXP Cameras (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.shodan.io/search?query=%22webcamXP%22+country%3A%22IN%22`
  },
  {
    id: "shodan-mjpg-in",
    label: "Shodan MJPG Streamer (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.shodan.io/search?query=%22mjpg-streamer%22+country%3A%22IN%22`
  },
  {
    id: "censys-axis-in",
    label: "Censys Axis Cameras (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://search.censys.io/search?resource=hosts&q=services.http.response.html_title%3A+%22Live+View+-+%2F+-+AXIS%22+and+location.country_code%3A+%22IN%22`
  },
  {
    id: "censys-hikvision-in",
    label: "Censys Hikvision Cameras (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://search.censys.io/search?resource=hosts&q=services.http.response.html_title%3A+%22Hikvision%22+and+location.country_code%3A+%22IN%22`
  },
  {
    id: "zoomeye-webcams-in",
    label: "ZoomEye Webcams (India)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.zoomeye.org/searchResult?q=device%3A%22webcam%22%20%2Bcountry%3A%22India%22`
  },
  {
    id: "dork-axis-shtml-google",
    label: "Axis Live View SHTML (Google)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.google.com/search?q=inurl%3Aview%2Fview.shtml+country%3AIndia`
  },
  {
    id: "dork-axis-shtml-bing",
    label: "Axis Live View SHTML (Bing)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.bing.com/search?q=inurl%3Aview%2Fview.shtml+India`
  },
  {
    id: "dork-axis-shtml-yandex",
    label: "Axis Live View SHTML (Yandex)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://yandex.com/search/?text=inurl%3Aview%2Fview.shtml+India`
  },
  {
    id: "dork-hikvision-google",
    label: "Hikvision Login Interface (Google)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.google.com/search?q=intitle%3A%22hikvision%22+inurl%3Alogin+India`
  },
  {
    id: "dork-hikvision-yandex",
    label: "Hikvision Login Interface (Yandex)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://yandex.com/search/?text=intitle%3A%22hikvision%22+inurl%3Alogin+India`
  },
  {
    id: "dork-axis-top-google",
    label: "Axis top.htm CurrentTime (Google)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.google.com/search?q=inurl%3Atop.htm+inurl%3Acurrenttime+India`
  },
  {
    id: "dork-mjpg-google",
    label: "MJPG Video Live Feed (Google)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.google.com/search?q=inurl%3A%22%2Fmjpg%2Fvideo.mjpg%22+India`
  },
  {
    id: "dork-mjpg-bing",
    label: "MJPG Video Live Feed (Bing)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: [],
    url: () => `https://www.bing.com/search?q=inurl%3A%22%2Fmjpg%2Fvideo.mjpg%22+India`
  },
  {
    id: "traffic-cameras-delhi-g",
    label: "Delhi NCR Traffic Live Cameras (Google)",
    tag: "Government",
    status: "active",
    state: "Delhi",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Adelhitrafficpolice.nic.in+inurl%3Afeed+OR+inurl%3Astream+OR+inurl%3Acamera"
  },
  {
    id: "traffic-cameras-delhi-b",
    label: "Delhi NCR Traffic Live Cameras (Bing)",
    tag: "Government",
    status: "active",
    state: "Delhi",
    inputs: [],
    url: () => "https://www.bing.com/search?q=site%3Adelhitrafficpolice.nic.in+inurl%3Afeed+OR+inurl%3Astream+OR+inurl%3Acamera"
  },
  {
    id: "traffic-cameras-mumbai-g",
    label: "Mumbai (MH) Traffic Cams (Google)",
    tag: "Government",
    status: "active",
    state: "Maharashtra",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Amumbaipolice.gov.in+inurl%3Acctv+OR+inurl%3Astream"
  },
  {
    id: "traffic-cameras-mumbai-b",
    label: "Mumbai (MH) Traffic Cams (Bing)",
    tag: "Government",
    status: "active",
    state: "Maharashtra",
    inputs: [],
    url: () => "https://www.bing.com/search?q=site%3Amumbaipolice.gov.in+inurl%3Acctv+OR+inurl%3Astream"
  },
  {
    id: "traffic-cameras-blr-g",
    label: "Bangalore (KA) Traffic Live (Google)",
    tag: "Government",
    status: "active",
    state: "Karnataka",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3A*.karnataka.gov.in+inurl%3Acamera+OR+inurl%3Acctv+OR+inurl%3Afeed"
  },
  {
    id: "traffic-cameras-blr-b",
    label: "Bangalore (KA) Traffic Live (Bing)",
    tag: "Government",
    status: "active",
    state: "Karnataka",
    inputs: [],
    url: () => "https://www.bing.com/search?q=site%3A*.karnataka.gov.in+inurl%3Acamera+OR+inurl%3Acctv+OR+inurl%3Afeed"
  },
  {
    id: "traffic-cameras-chennai-g",
    label: "Chennai (TN) Traffic Live (Google)",
    tag: "Government",
    status: "active",
    state: "Tamil Nadu",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Atn.gov.in+inurl%3Acamera+OR+inurl%3Acctv+traffic"
  },
  {
    id: "traffic-cameras-chennai-b",
    label: "Chennai (TN) Traffic Live (Bing)",
    tag: "Government",
    status: "active",
    state: "Tamil Nadu",
    inputs: [],
    url: () => "https://www.bing.com/search?q=site%3Atn.gov.in+inurl%3Acamera+OR+inurl%3Acctv+traffic"
  },
  {
    id: "traffic-cameras-kolkata-g",
    label: "Kolkata (WB) Traffic Live (Google)",
    tag: "Government",
    status: "active",
    state: "West Bengal",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Akolkatapolice.gov.in+inurl%3Acctv+OR+inurl%3Acamera"
  },
  {
    id: "traffic-cameras-kolkata-b",
    label: "Kolkata (WB) Traffic Live (Bing)",
    tag: "Government",
    status: "active",
    state: "West Bengal",
    inputs: [],
    url: () => "https://www.bing.com/search?q=site%3Akolkatapolice.gov.in+inurl%3Acctv+OR+inurl%3Acamera"
  },
  {
    id: "traffic-cameras-hyd-g",
    label: "Hyderabad (TS) Traffic Cam (Google)",
    tag: "Government",
    status: "active",
    state: "Telangana",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3A*.telangana.gov.in+inurl%3Acctv+OR+inurl%3Acamera+traffic"
  },
  {
    id: "traffic-cameras-hyd-b",
    label: "Hyderabad (TS) Traffic Cam (Bing)",
    tag: "Government",
    status: "active",
    state: "Telangana",
    inputs: [],
    url: () => "https://www.bing.com/search?q=site%3A*.telangana.gov.in+inurl%3Acctv+OR+inurl%3Acamera+traffic"
  },
  {
    id: "traffic-cameras-up-g",
    label: "Uttar Pradesh Highway Cams (Google)",
    tag: "Government",
    status: "active",
    state: "Uttar Pradesh",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Aup.gov.in+inurl%3Acctv+OR+inurl%3Acamera+highway"
  },
  {
    id: "traffic-cameras-kerala-g",
    label: "Kerala Highway CCTV Streams (Google)",
    tag: "Government",
    status: "active",
    state: "Kerala",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Akeralapolice.gov.in+inurl%3Acctv+OR+inurl%3Acamera"
  },
  {
    id: "traffic-cameras-gujarat-g",
    label: "Gujarat Smart City CCTV (Google)",
    tag: "Government",
    status: "active",
    state: "Gujarat",
    inputs: [],
    url: () => "https://www.google.com/search?q=site%3Agujarat.gov.in+inurl%3Acctv+OR+inurl%3Astream"
  },
  {
    id: "loc-shodan-cam",
    label: "Shodan Location-based IP Cam Lookup",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: ["location"],
    url: (loc) => `https://www.shodan.io/search?query=webcam+city%3A%22${encodeURIComponent(loc)}%22+country%3A%22IN%22`
  },
  {
    id: "loc-censys-cam",
    label: "Censys Location-based Axis Cam",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: ["location"],
    url: (loc) => `https://search.censys.io/search?resource=hosts&q=services.http.response.html_title%3A+%22Live+View+-+%2F+-+AXIS%22+and+location.city%3A+%22${encodeURIComponent(loc)}%22+and+location.country_code%3A+%22IN%22`
  },
  {
    id: "loc-dork-cam-google",
    label: "Location-based Axis Cam (Google)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: ["location"],
    url: (loc) => `https://www.google.com/search?q=inurl%3Aview%2Fview.shtml+%22${encodeURIComponent(loc)}%22+India`
  },
  {
    id: "loc-dork-cam-yandex",
    label: "Location-based Axis Cam (Yandex)",
    tag: "Search",
    status: "active",
    state: "Global",
    inputs: ["location"],
    url: (loc) => `https://yandex.com/search/?text=inurl%3Aview%2Fview.shtml+%22${encodeURIComponent(loc)}%22+India`
  }
];

export default cameras;

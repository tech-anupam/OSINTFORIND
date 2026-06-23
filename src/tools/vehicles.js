const vehicles = [
  { id: "carinfo-dork", label: "CarInfo Index Check (Google)", tag: "Search", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Acarinfo.in+%22${p.toUpperCase()}%22` },
  { id: "rtovehicle-dork", label: "RTO Vehicle Info Index (Google)", tag: "Search", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Artovehicleinfo.com+%22${p.toUpperCase()}%22` },
  { id: "findvehicle-dork", label: "FindVehicle Index Check (Google)", tag: "Search", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Afindvehicle.in+%22${p.toUpperCase()}%22` },
  { id: "carinfo-portal", label: "CarInfo Portal", tag: "Commercial", status: "active", inputs: [], url: () => "https://www.carinfo.in/" },
  { id: "rtovehicle-portal", label: "RTO Vehicle Info Portal", tag: "Commercial", status: "active", inputs: [], url: () => "https://www.rtovehicleinfo.com/" },
  { id: "findvehicle-portal", label: "FindVehicle Portal", tag: "Commercial", status: "active", inputs: [], url: () => "https://www.findvehicle.in/" },
  { id: "vahan-google", label: "Vahan Registration Search (Google Dork)", tag: "Government", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Avahan.parivahan.gov.in+%22${p}%22` },
  { id: "echallan-national-google", label: "Parivahan e-Challan Dork (Google)", tag: "Government", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Aechallan.parivahan.gov.in+%22${p}%22` },
  { id: "echallan-delhi-google", label: "Delhi Traffic Notice Dork (Google)", tag: "Government", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Atraffic.delhipolice.gov.in+%22${p}%22` },
  { id: "echallan-mumbai-google", label: "Maha e-Challan Dork (Google)", tag: "Government", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Amahatrafficesg.gov.in+%22${p}%22` },
  { id: "echallan-kar-google", label: "Karnataka Traffic Fine Dork (Google)", tag: "Government", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Akarnataka.gov.in+fine+%22${p}%22` },
  { id: "echallan-ts-google", label: "Telangana Traffic Challan Dork (Google)", tag: "Government", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3A*.telangana.gov.in+challan+%22${p}%22` },
  { id: "hsrp-booking-google", label: "HSRP Plate Booking Status (Google Dork)", tag: "Commercial", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=site%3Abookmyhsrp.com+%22${p}%22` },
  { id: "google-dork-plate", label: "Google Plate Citation Dork", tag: "Search", status: "active", inputs: ["plate"], url: (p) => `https://www.google.com/search?q=%22${p}%22` },
  { id: "bing-dork-plate", label: "Bing Plate Citation Dork", tag: "Search", status: "active", inputs: ["plate"], url: (p) => `https://www.bing.com/search?q=%22${p}%22` },
  { id: "yandex-dork-plate", label: "Yandex Plate Citation Dork", tag: "Search", status: "active", inputs: ["plate"], url: (p) => `https://yandex.com/search/?text=%22${p}%22` },
  { id: "sarathi-dl-portal", label: "Sarathi DL Verification Portal", tag: "Government", status: "active", inputs: [], url: () => "https://parivahan.gov.in/rcdlstatus/" },
  { id: "sarathi-dl-google", label: "Sarathi DL Verification (Google Dork)", tag: "Government", status: "active", inputs: ["dl"], url: (dl) => `https://www.google.com/search?q=site%3Asarathi.parivahan.gov.in+%22${dl}%22` },
  { id: "digilocker-dl-google", label: "DigiLocker DL Verification (Google Dork)", tag: "Government", status: "active", inputs: ["dl"], url: (dl) => `https://www.google.com/search?q=site%3Adigilocker.gov.in+%22${dl}%22` }
];

export default vehicles;

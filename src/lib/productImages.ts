// Map product names to specific search keywords for themed photography.
// Falls back to "<sport> <product>" if a product isn't listed.
const PRODUCT_KEYWORDS: Record<string, string> = {
  // Cricket
  "Cricket Bats": "english willow cricket bat",
  "Tennis Bats": "tennis cricket bat",
  "Practice Bats": "cricket practice bat",
  "Junior Bats": "junior cricket bat",
  "Cricket Balls": "red cricket ball leather",
  "Tennis Balls": "tennis ball yellow",
  "Season Balls": "season cricket ball",
  "Wickets": "cricket wicket stumps",
  "Batting Gloves": "cricket batting gloves",
  "Batting Pads": "cricket batting pads",
  "Helmets": "cricket helmet",
  "Thigh Guards": "cricket thigh guard pad",
  "Cricket Shoes": "cricket shoes spikes",
  "Spike Shoes": "cricket spike shoes",
  "Kit Bags": "cricket kit bag",
  "Wheel Bags": "cricket wheel bag",
  "Practice Equipment": "cricket nets practice",
  "Stumps & Bails": "cricket stumps bails",
  "Grips & Tapes": "cricket bat grip tape",

  // Football
  "Match Footballs": "soccer match football",
  "Training Footballs": "training football soccer ball",
  "Futsal Balls": "futsal ball",
  "Junior Footballs": "kids soccer football",
  "Football Studs": "football boots studs cleats",
  "Turf Shoes": "turf soccer shoes",
  "Indoor Shoes": "indoor soccer shoes",
  "Junior Studs": "junior football cleats",
  "Shin Guards": "football shin guards",
  "Goalkeeper Gloves": "goalkeeper gloves",
  "Ankle Supports": "ankle support brace sports",
  "Knee Pads": "knee pads sports",
  "Training Cones": "training cones football",
  "Jerseys": "football jersey kit",
  "Nets": "football goal net",

  // Basketball
  "Indoor Basketballs": "indoor basketball orange",
  "Outdoor Basketballs": "outdoor basketball",
  "Training Basketballs": "training basketball",
  "Junior Basketballs": "junior basketball kids",
  "Basketball Shoes": "basketball shoes sneakers",
  "Training Shoes": "training shoes sports",
  "Junior Shoes": "kids sports shoes",
  "Insoles": "shoe insoles sports",
  "Training Accessories": "basketball training",
  "Ball Pumps": "ball pump inflator",

  // Volleyball
  "Match Volleyballs": "match volleyball white",
  "Training Volleyballs": "training volleyball",
  "Beach Volleyballs": "beach volleyball sand",
  "Junior Volleyballs": "junior volleyball",
  "Antennas": "volleyball antenna net",
  "Boundary Lines": "volleyball court line",
  "Posts": "volleyball net post",
  "Knee Supports": "knee support brace volleyball",
  "Ankle Braces": "ankle brace volleyball",
  "Training Equipment": "volleyball training equipment",

  // Badminton
  "Pro Rackets": "professional badminton racket",
  "Intermediate Rackets": "badminton racket",
  "Beginner Rackets": "badminton racket beginner",
  "Junior Rackets": "junior badminton racket kids",
  "Feather Shuttlecocks": "feather shuttlecock",
  "Nylon Shuttlecocks": "nylon shuttlecock",
  "Training Shuttlecocks": "shuttlecock training",
  "Tournament Shuttles": "tournament shuttlecock",
  "Badminton Shoes": "badminton court shoes",
  "Court Shoes": "court shoes indoor",
  "Racket Bags": "badminton racket bag",
  "Backpacks": "sports backpack",
  "Grip Tapes": "racket grip tape",
  "String Reels": "badminton string reel",
  "Wristbands": "wristbands sweatbands",

  // Indoor
  "Chess Boards": "chess board pieces wooden",
  "Tournament Sets": "tournament chess set",
  "Wooden Sets": "wooden chess set staunton",
  "Chess Clocks": "chess clock timer",
  "Carrom Boards": "carrom board",
  "Tournament Boards": "tournament carrom board",
  "Coins": "carrom coins",
  "Strikers": "carrom striker",
  "Carrom Powder": "carrom board powder",

  Accessories: "sports accessories",
};

export function productImageUrl(productName: string, sport: string): string {
  const specific = PRODUCT_KEYWORDS[productName];
  const keywords = specific
    ? specific
    : `${sport} ${productName}`.toLowerCase();
  const tags = keywords.trim().replace(/\s+/g, ",");
  // Deterministic lock so each product always gets the same photo.
  const lock = Math.abs(hashCode(productName + sport)) % 1000;
  return `https://loremflickr.com/800/1000/${encodeURIComponent(tags)}/all?lock=${lock}`;
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}

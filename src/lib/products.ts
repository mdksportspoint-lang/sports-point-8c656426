import dscOrange from "@/assets/products/dsc-lava-orange.jpg.asset.json";
import dscRed from "@/assets/products/dsc-lava-red.jpg.asset.json";
import bull1 from "@/assets/products/bull-beast-power-1.jpg.asset.json";
import bull2 from "@/assets/products/bull-beast-power-2.jpg.asset.json";
import ssGreen from "@/assets/products/ss-kashmir-green.jpg.asset.json";
import ssYellow from "@/assets/products/ss-kashmir-yellow.jpg.asset.json";
import novax from "@/assets/products/novax-bahubali.jpg.asset.json";
import maspro from "@/assets/products/maspro-tennis.jpg.asset.json";
import turbo from "@/assets/products/turbo-tennis.jpg.asset.json";
import stumps from "@/assets/products/cricket-stumps.jpg.asset.json";
import coscoB18 from "@/assets/products/cosco-b18.jpg.asset.json";
import coscoBerlin from "@/assets/products/cosco-berlin.jpg.asset.json";
import coscoMilano from "@/assets/products/cosco-milano.jpg.asset.json";
import shiningStar from "@/assets/products/shining-star.jpg.asset.json";
import niviaTrainer from "@/assets/products/nivia-trainer.jpg.asset.json";
import niviaSuperSynthetic from "@/assets/products/nivia-super-synthetic.jpg.asset.json";
import niviaBlueYellow from "@/assets/products/nivia-blue-yellow.jpg.asset.json";
import niviaClassicVision from "@/assets/products/nivia-classic-vision.jpg.asset.json";
import chessFoldable from "@/assets/products/chess-magnetic-foldable.jpg.asset.json";
import chessPieces from "@/assets/products/chess-tournament-pieces.jpg.asset.json";
import chessClock from "@/assets/products/chess-dgt-clock.jpg.asset.json";
import chessBag from "@/assets/products/chess-carry-bag.jpg.asset.json";
import carromBoard from "@/assets/products/carrom-board-tournament.jpg.asset.json";
import carromCoins from "@/assets/products/carrom-wooden-coins.jpg.asset.json";
import carromStrikers from "@/assets/products/carrom-designer-strikers.jpg.asset.json";
import carromPowder from "@/assets/products/carrom-powder.jpg.asset.json";
import spaldingRebound from "@/assets/products/spalding-rebound.jpg.asset.json";
import coscoDribble from "@/assets/products/cosco-dribble.jpg.asset.json";
import niviaEngraver from "@/assets/products/nivia-engraver.jpg.asset.json";
import niviaRebounder from "@/assets/products/nivia-rebounder.jpg.asset.json";
import boldfitSwishking from "@/assets/products/boldfit-swishking.jpg.asset.json";
import liningRed from "@/assets/products/lining-red-racket.jpg.asset.json";
import yonexNanorayBlue from "@/assets/products/yonex-nanoray-blue.jpg.asset.json";
import yonexZrRedBlue from "@/assets/products/yonex-zr-red-blue.jpg.asset.json";
import yonexVoltricRed from "@/assets/products/yonex-voltric-red.jpg.asset.json";
import yonexNanoray6000i from "@/assets/products/yonex-nanoray-6000i.jpg.asset.json";
import yonexNanorayLight18i from "@/assets/products/yonex-nanoray-light-18i.jpg.asset.json";

export type ProductCategory =
  | "cricket"
  | "football"
  | "basketball"
  | "volleyball"
  | "badminton"
  | "chess"
  | "carrom"
  | "indoor-games";


export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  images: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "dsc-lava-cricket-bat",
    name: "DSC Lava Cricket Bat",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Explosive power with a striking finish.",
    description:
      "The DSC Lava is built for aggressive stroke-makers who want a bold look and reliable pickup. Premium willow, thick edges and a comfortable grip make it a favourite for club and tournament players.",
    highlights: [
      "Premium grade willow",
      "Thick edges & full profile",
      "Comfortable cushion grip",
      "Ideal for tournament & club play",
    ],
    images: [dscOrange.url, dscRed.url],
  },
  {
    slug: "bull-sports-beast-power",
    name: "Bull Sports Player Edition — Beast Power",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Player edition performance for serious batters.",
    description:
      "The Bull Sports Beast Power Player Edition is crafted for players who demand a big hitting bat with pro-level balance. Premium willow, refined sweet spot and a hand-finished handle for elite performance.",
    highlights: [
      "Player Edition — hand finished",
      "Big sweet spot for power hitting",
      "Premium cane handle",
      "Tournament ready",
    ],
    images: [bull1.url, bull2.url],
  },
  {
    slug: "ss-kashmir-willow-green",
    name: "SS Kashmir Willow Cricket Bat",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Trusted Kashmir willow, everyday performance.",
    description:
      "The SS Kashmir Willow bat delivers dependable feel and pickup — perfect for practice sessions and weekend matches. Balanced weight and comfortable grip for players of all levels.",
    highlights: [
      "Genuine Kashmir willow",
      "Balanced pickup",
      "All-round profile",
      "Great value for regular play",
    ],
    images: [ssGreen.url],
  },
  {
    slug: "ss-kashmir-willow-yellow",
    name: "SS Kashmir Willow — Player Series",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Bold graphics, clean strokes.",
    description:
      "A Kashmir willow bat from SS with a striking Player Series finish. Balanced middle and traditional profile — reliable for match play and net sessions alike.",
    highlights: [
      "Kashmir willow construction",
      "Traditional profile",
      "Comfortable premium grip",
      "Match & practice ready",
    ],
    images: [ssYellow.url],
  },
  {
    slug: "novax-bahubali-tennis-bat",
    name: "Novax Bahubali Prince Tennis Bat",
    category: "cricket",
    categoryLabel: "Tennis Bats",
    tagline: "Built for tennis-ball cricket dominance.",
    description:
      "The Novax Bahubali Prince is designed for tennis-ball cricket with a scooped back for maximum power and lightweight pickup. Ideal for gully, street and turf tennis-ball matches.",
    highlights: [
      "Scooped back for power",
      "Lightweight pickup",
      "Bold Bahubali graphics",
      "Perfect for tennis-ball cricket",
    ],
    images: [novax.url],
  },
  {
    slug: "maspro-tennis-bats",
    name: "Maspro Tennis Cricket Bats",
    category: "cricket",
    categoryLabel: "Tennis Bats",
    tagline: "Colourful, durable, ready to play.",
    description:
      "Maspro tennis-ball cricket bats in vibrant colours. Durable construction and comfortable grips — a top pick for casual play, gully cricket and quick weekend games.",
    highlights: [
      "Multiple colour options",
      "Durable build",
      "Cushioned grip",
      "Great for all ages",
    ],
    images: [maspro.url],
  },
  {
    slug: "turbo-mse-tennis-bats",
    name: "Turbo, MSE & NRI Tennis Bat Collection",
    category: "cricket",
    categoryLabel: "Tennis Bats",
    tagline: "A full range of tennis-ball bats in one place.",
    description:
      "A curated collection of Turbo, MSE and NRI tennis-ball cricket bats. Multiple models, weights and finishes — visit the store to pick the one that suits your game.",
    highlights: [
      "Multiple trusted brands",
      "Range of weights & profiles",
      "Season & tennis-ball ready",
      "In-store selection available",
    ],
    images: [turbo.url],
  },
  {
    slug: "cricket-stumps",
    name: "Cricket Stumps Set",
    category: "cricket",
    categoryLabel: "Wickets & Stumps",
    tagline: "Ground-ready stumps for match and practice.",
    description:
      "Strong, straight cricket stumps ideal for nets, practice pitches and matches. Available in singles and full sets with bails.",
    highlights: [
      "Durable seasoned wood",
      "Standard match dimensions",
      "Available with bails",
      "Practice & match use",
    ],
    images: [stumps.url],
  },
  {
    slug: "cosco-b18-football-pump",
    name: "Cosco B-18 Football with Pump",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Classic black & white match football with pump.",
    description:
      "The Cosco B-18 is a classic hand-stitched football in the iconic black-and-white panel design. Made in India, durable synthetic construction — comes bundled with a Cosco hand pump for on-the-go inflation.",
    highlights: [
      "Hand-stitched panels",
      "Comes with Cosco hand pump",
      "Match & practice ready",
      "Made in India",
    ],
    images: [coscoB18.url],
  },
  {
    slug: "cosco-berlin-football",
    name: "Cosco Berlin Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Vibrant yellow match ball with striking graphics.",
    description:
      "The Cosco Berlin (C-16) is a bright yellow football with bold red, green and black accents. Built for club matches, school teams and enthusiastic weekend players.",
    highlights: [
      "Eye-catching Berlin design",
      "Durable synthetic cover",
      "Great grip in all weather",
      "Size 5 match ball",
    ],
    images: [coscoBerlin.url],
  },
  {
    slug: "cosco-milano-football",
    name: "Cosco Milano Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Bold blue Milano — premium look, tournament feel.",
    description:
      "The Cosco Milano combines a striking blue-and-white geometric design with a durable stitched build. A favourite for club players who want a football that looks as good as it plays.",
    highlights: [
      "Premium Milano graphics",
      "Machine-stitched durability",
      "Balanced flight & control",
      "Suits turf & ground play",
    ],
    images: [coscoMilano.url],
  },
  {
    slug: "shining-star-football",
    name: "Shining Star Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Pro-look football for club and turf matches.",
    description:
      "The Shining Star football features a modern orange, blue and white panel design with a durable synthetic surface — great grip and flight on turf and ground pitches.",
    highlights: [
      "Modern pro-style design",
      "Excellent surface grip",
      "Ideal for turf & ground",
      "Match-ready size",
    ],
    images: [shiningStar.url],
  },
  {
    slug: "nivia-trainer-football",
    name: "Nivia Trainer Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Trusted Nivia trainer for daily practice.",
    description:
      "The Nivia Trainer is built for regular training sessions and club practice. Reinforced stitching and a durable outer cover stand up to daily use on hard grounds.",
    highlights: [
      "Reinforced stitched panels",
      "Durable training cover",
      "Consistent shape retention",
      "Perfect for daily practice",
    ],
    images: [niviaTrainer.url],
  },
  {
    slug: "nivia-super-synthetic-fb272",
    name: "Nivia Super Synthetic Football (FB-272)",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Bright yellow Nivia — Size 5 match ball.",
    description:
      "The Nivia Super Synthetic (FB-272) is a Size 5 football with a bright yellow synthetic cover. Made by Freewill Sports — a reliable pick for schools, clubs and enthusiasts.",
    highlights: [
      "Size 5 official match ball",
      "Super synthetic cover",
      "Hand-stitched durability",
      "6-8 LBS inflation",
    ],
    images: [niviaSuperSynthetic.url],
  },
  {
    slug: "nivia-blue-yellow-football",
    name: "Nivia Football — Blue & Yellow",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Vibrant blue & yellow wave-pattern football.",
    description:
      "A striking Nivia football in a blue and yellow wave-pattern design. Bright, durable and built for practice sessions and casual matches.",
    highlights: [
      "Vibrant wave-pattern design",
      "Nivia trusted quality",
      "Durable stitched build",
      "Practice & casual match ready",
    ],
    images: [niviaBlueYellow.url],
  },
  {
    slug: "nivia-classic-vision-fb281",
    name: "Nivia Classic Vision 2014 (FB-281)",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Neon yellow & orange — Size 5 Classic Vision.",
    description:
      "The Nivia Classic Vision 2014 (FB-281) is a Size 5 football with a bright fluorescent yellow surface and bold orange accents. Excellent visibility, reliable stitching and true Nivia durability.",
    highlights: [
      "Fluorescent high-visibility yellow",
      "Size 5 — 6 to 8 LBS",
      "Hand-stitched Nivia build",
      "Great for evening & indoor play",
    ],
    images: [niviaClassicVision.url],
  },
  {
    slug: "magnetic-foldable-chess-board",
    name: "Magnetic Foldable Chess Board",
    category: "chess",
    categoryLabel: "Chess Boards",
    tagline: "Travel-ready magnetic chess with a foldable case.",
    description:
      "A premium foldable magnetic chess board designed for travel and casual play. Magnetic pieces stay in place, and the board folds neatly into its own carrying case for easy storage.",
    highlights: [
      "Strong magnetic pieces",
      "Foldable travel design",
      "Classic wood-grain finish",
      "Great for beginners & clubs",
    ],
    images: [chessFoldable.url],
  },
  {
    slug: "tournament-chess-pieces",
    name: "Tournament Staunton Chess Pieces",
    category: "chess",
    categoryLabel: "Chess Pieces",
    tagline: "Weighted Staunton pieces for tournament play.",
    description:
      "Classic Staunton-style chess pieces in ivory white and rich brown wood finish. Balanced weight, felted bases and premium build — ideal for serious players and clubs.",
    highlights: [
      "Staunton tournament design",
      "Ivory & wood-brown finish",
      "Weighted with felted bases",
      "Complete 32-piece set",
    ],
    images: [chessPieces.url],
  },
  {
    slug: "dgt-2010-chess-clock",
    name: "DGT 2010 Digital Chess Clock",
    category: "chess",
    categoryLabel: "Chess Clocks",
    tagline: "FIDE-approved digital timer for serious play.",
    description:
      "The DGT 2010 is the official FIDE tournament chess clock — supports every time control from classical to blitz and Bronstein delay. A must-have for rated players and clubs.",
    highlights: [
      "FIDE-approved tournament clock",
      "All standard time controls",
      "Bronstein & Fischer delay",
      "Large, clear LCD display",
    ],
    images: [chessClock.url],
  },
  {
    slug: "chess-carry-bag",
    name: "Chess Board Carry Bag",
    category: "chess",
    categoryLabel: "Chess Accessories",
    tagline: "Padded carry bag for board, pieces and clock.",
    description:
      "A rugged padded carry bag sized for standard tournament chess boards. Includes handles and a smooth zip closure — protects board, pieces and clock on the way to matches.",
    highlights: [
      "Fits standard tournament boards",
      "Padded protective interior",
      "Sturdy zip & carry handles",
      "Perfect for coaching classes",
    ],
    images: [chessBag.url],
  },
  {
    slug: "tournament-carrom-board",
    name: "Tournament Carrom Board",
    category: "carrom",
    categoryLabel: "Carrom Boards",
    tagline: "Full-size tournament carrom with smooth play surface.",
    description:
      "A full-size tournament carrom board with a smooth, well-finished playing surface and sturdy hardwood frame. Made in India — perfect for homes, clubs and championship matches.",
    highlights: [
      "Tournament size & finish",
      "Smooth ply playing surface",
      "Sturdy hardwood frame",
      "Made in India",
    ],
    images: [carromBoard.url],
  },
  {
    slug: "wooden-carrom-coins-set",
    name: "Wooden Carrom Coins Set",
    category: "carrom",
    categoryLabel: "Carrom Coins",
    tagline: "Classic wooden coins with queen — complete set.",
    description:
      "A complete set of hand-finished wooden carrom coins — 9 black, 9 white and 1 red queen. Balanced weight and smooth edges for consistent, controlled play.",
    highlights: [
      "9 black + 9 white + 1 queen",
      "Hand-finished hardwood",
      "Balanced weight for control",
      "Standard tournament size",
    ],
    images: [carromCoins.url],
  },
  {
    slug: "designer-carrom-strikers",
    name: "Designer Carrom Strikers",
    category: "carrom",
    categoryLabel: "Carrom Strikers",
    tagline: "Premium designer strikers with vibrant patterns.",
    description:
      "A collection of premium designer carrom strikers with beautiful patterns and finishes. Perfect weight and grip for pro-level flicks and accurate shots.",
    highlights: [
      "Premium designer patterns",
      "Tournament-legal weight",
      "Smooth glide surface",
      "Great gift for carrom fans",
    ],
    images: [carromStrikers.url],
  },
  {
    slug: "carrom-board-powder",
    name: "Carrom Board Powder",
    category: "carrom",
    categoryLabel: "Carrom Accessories",
    tagline: "Ultra-smooth boric powder for pro-level glide.",
    description:
      "High-quality carrom board powder for a fast, smooth playing surface. Even-spread formula improves accuracy and keeps the board glide-ready for hours of play.",
    highlights: [
      "Ultra-smooth sliding",
      "Even-spread formula",
      "Improves striker accuracy",
      "Long-lasting performance",
    ],
    images: [carromPowder.url],
  },
  {
    slug: "spalding-rebound-basketball",
    name: "Spalding Rebound Basketball",
    category: "basketball",
    categoryLabel: "Basketballs",
    tagline: "Iconic Spalding grip for outdoor courts.",
    description:
      "The Spalding Rebound is a durable rubber basketball built for outdoor play. Deep-channel design and reliable grip make it a go-to ball for schools, clubs and street courts.",
    highlights: [
      "Durable rubber cover",
      "Deep-channel grip",
      "Built for outdoor courts",
      "Official size & weight",
    ],
    images: [spaldingRebound.url],
  },
  {
    slug: "cosco-dribble-basketball",
    name: "Cosco Dribble Basketball",
    category: "basketball",
    categoryLabel: "Basketballs",
    tagline: "BFI-approved total grip control.",
    description:
      "The Cosco Dribble is a BFI-approved basketball with nylon wound construction and a butyl bladder for consistent bounce. Official size and weight — perfect for all playing surfaces.",
    highlights: [
      "BFI approved",
      "Nylon wound + butyl bladder",
      "Total grip control",
      "All-surface performance",
    ],
    images: [coscoDribble.url],
  },
  {
    slug: "nivia-engraver-basketball",
    name: "Nivia Engraver Basketball",
    category: "basketball",
    categoryLabel: "Basketballs",
    tagline: "Classic tan finish with premium feel.",
    description:
      "The Nivia Engraver features a rich tan pebbled surface with bold branding for excellent grip and control. A trusted match-ready ball for players of every level.",
    highlights: [
      "Premium pebbled grip",
      "Consistent bounce",
      "Match-ready size",
      "Trusted Nivia quality",
    ],
    images: [niviaEngraver.url],
  },
  {
    slug: "nivia-rebounder-basketball",
    name: "Nivia Rebounder Basketball",
    category: "basketball",
    categoryLabel: "Basketballs",
    tagline: "Bold black & gold Size 7 basketball.",
    description:
      "The Nivia Rebounder in a striking black and gold finish. Size 7 rubber build with deep grooves for excellent handling on outdoor and indoor courts.",
    highlights: [
      "Striking black & gold design",
      "Size 7 official",
      "Deep-groove handling",
      "Indoor & outdoor ready",
    ],
    images: [niviaRebounder.url],
  },
  {
    slug: "boldfit-swishking-basketball",
    name: "Boldfit Swishking Basketball",
    category: "basketball",
    categoryLabel: "Basketballs",
    tagline: "Two-tone Swishking with free hand pump.",
    description:
      "The Boldfit Swishking is a two-tone tan and cream basketball with excellent grip and a durable rubber build. Comes with a free hand pump for on-the-go inflation.",
    highlights: [
      "Two-tone premium look",
      "Includes free hand pump",
      "Durable rubber cover",
      "Great grip & bounce",
    ],
    images: [boldfitSwishking.url],
  },
  {
    slug: "lining-badminton-racket-red",
    name: "Li-Ning Smash Series Badminton Racket",
    category: "badminton",
    categoryLabel: "Badminton Rackets",
    tagline: "Bold red Li-Ning racket for aggressive smashers.",
    description:
      "A stylish Li-Ning badminton racket in a striking red and black finish. Balanced head-heavy feel for powerful smashes and controlled defence — perfect for club players and intermediate enthusiasts.",
    highlights: [
      "Head-heavy for smash power",
      "Durable alloy frame",
      "Comfortable PU grip",
      "Pre-strung, ready to play",
    ],
    images: [liningRed.url],
  },
  {
    slug: "yonex-nanoray-blue-badminton-racket",
    name: "Yonex Nanoray Blue Badminton Racket",
    category: "badminton",
    categoryLabel: "Badminton Rackets",
    tagline: "Fast, aerodynamic Nanoray for lightning-quick play.",
    description:
      "The Yonex Nanoray in a vibrant blue and black finish is built for speed. Aerodynamic frame and lightweight balance help you attack fast and recover faster — an all-rounder for club and tournament play.",
    highlights: [
      "Aerodynamic Nanoray frame",
      "Lightweight, fast swing",
      "Excellent control",
      "Pre-strung with premium grip",
    ],
    images: [yonexNanorayBlue.url],
  },
  {
    slug: "yonex-zr-red-blue-badminton-racket",
    name: "Yonex ZR Series Badminton Racket — Red & Blue",
    category: "badminton",
    categoryLabel: "Badminton Rackets",
    tagline: "Durable Yonex ZR — powerful all-round performance.",
    description:
      "The Yonex ZR Series in a bold red frame with a blue handle. Steel shaft and aluminium head deliver robust durability with a satisfying feel — a great choice for beginners and daily players.",
    highlights: [
      "Aluminium head + steel shaft",
      "Balanced power & control",
      "Cushioned Yonex grip",
      "Pre-strung, tournament ready",
    ],
    images: [yonexZrRedBlue.url],
  },
  {
    slug: "yonex-voltric-red-badminton-racket",
    name: "Yonex Voltric Badminton Racket",
    category: "badminton",
    categoryLabel: "Badminton Rackets",
    tagline: "Explosive Voltric power for attacking players.",
    description:
      "The Yonex Voltric is designed for players who love to attack. Its head-heavy profile stores extra weight for devastating smashes without compromising manoeuvrability.",
    highlights: [
      "Head-heavy Voltric build",
      "Ideal for smash-focused play",
      "High-tension stringing",
      "Premium finish & feel",
    ],
    images: [yonexVoltricRed.url],
  },
  {
    slug: "yonex-nanoray-6000i-badminton-racket",
    name: "Yonex Nanoray 6000i Badminton Racket",
    category: "badminton",
    categoryLabel: "Badminton Rackets",
    tagline: "The classic Nanoray 6000i — trusted all-rounder.",
    description:
      "The Yonex Nanoray 6000i is one of the most trusted badminton rackets in India. Isometric head shape gives a larger sweet spot, while the balanced feel makes it perfect for both attack and defence.",
    highlights: [
      "Isometric head shape",
      "Balanced weight distribution",
      "Larger sweet spot",
      "Recommended for all levels",
    ],
    images: [yonexNanoray6000i.url],
  },
  {
    slug: "yonex-nanoray-light-18i-badminton-racket",
    name: "Yonex Nanoray Light 18i Badminton Racket",
    category: "badminton",
    categoryLabel: "Badminton Rackets",
    tagline: "Ultra-light 18i for fast, effortless swings.",
    description:
      "The Yonex Nanoray Light 18i is an ultra-lightweight racket with a slim aerodynamic frame. Effortless swing speed and quick response — perfect for players who prioritise agility and control.",
    highlights: [
      "Ultra-lightweight construction",
      "Aerodynamic slim frame",
      "Fast swing & quick response",
      "Comfortable grip for long play",
    ],
    images: [yonexNanorayLight18i.url],
  },
];


export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const productsByCategory = (category: Product["category"]) =>
  PRODUCTS.filter((p) => p.category === category);

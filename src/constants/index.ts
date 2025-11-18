const navLinks = [
  {
    id: "cocktails",
    title: "Kahwahs",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Shahi Kahwah",
    country: "ROYAL BLEND",
    detail: "Saffron and Almonds",
    price: "₹59",
  },
  {
    name: "Nawabi Kahwah",
    country: "RICH BLEND",
    detail: "Cherries & Raisins",
    price: "₹69",
  },
  {
    name: "Mogul Kahwah",
    country: "MUGHAL MIX",
    detail: "Spiced Mix",
    price: "₹79",
  },
  {
    name: "Spice-Heavy Kahwah",
    country: "MEDICINAL MIX",
    detail: "Ginger, Fennel, Black Pepper",
    price: "₹89",
  },
];

const mockTailLists = [
  {
    name: "Apple Bloom",
    country: "ANANTNAG",
    detail: "450ml",
    price: "₹99",
  },
  {
    name: "Passionfruit Mint",
    country: "SRINAGAR",
    detail: "450",
    price: "₹99",
  },
  {
    name: "Citrus Glow",
    country: "SHOPIAN",
    detail: "750 ml",
    price: "₹129",
  },
  {
    name: "Lavender Fizz",
    country: "PAMPORE",
    detail: "600 ml",
    price: "₹129",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, K.P. Road, Anantnag, J&K 192101",
  contact: {
    phone: "(+91) 94190-33333",
    email: "hello@kashmiripunches.com",
  },
};

const openingHours = [
  { day: "Mon-Thu", time: "09:00am – 08:00pm" },
  { day: "Fri", time: "02:00pm – 10:00pm" },
  { day: "Sat", time: "07:00am – 08:00pm" },
  { day: "Sun", time: "08:00am – 11:00pm" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Shahi Kahwah",
    image: "/images/glass1.jpeg",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "A royal blend that emphasizes premium ingredients, particularly a generous amount of saffron and high-quality almonds.",
  },
  {
    id: 2,
    name: "Nawabi Kahwah",
    image: "/images/glass2.jpg",
    title: "A Zesty Classic That Never Fails",
    description:
      "Similar to Shahi, this term often implies a rich preparation, occasionally incorporating dried fruits like cherries or raisins in addition to nuts.",
  },
  {
    id: 3,
    name: "Mogul Kahwah",
    image: "/images/glass3.jpeg",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Historically, Kashmiris referred to this spiced tea as Mogul chai, indicating its introduction to the valley by the Mughal emperors, though the preparation is the same",
  },
  {
    id: 4,
    name: "Spice-Heavy Kahwah",
    image: "/images/glass4.jpg",
    title: "Crafted With Care, Poured With Love",
    description:
      "Some variations increase the quantities of ginger, fennel, black pepper, or star anise for enhanced medicinal properties or a stronger, spicier flavor profile, often for cold and cough relief.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};

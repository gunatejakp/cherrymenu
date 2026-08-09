export const RESTAURANT_INFO = {
  name: "Cherry Dhaba & Restaurant",
  tagline: "The Taste You Expect",
  subtitle: "Cherry’s Super Spicy Delight Menu",
  since: "2013",
  phone: "+919063249532",
  displayPhone: "+91 90632 49532",
  address: "Suryapet road, Thorrur - Thirumalagiri Rd, Mali Puram, Telangana 508223",
  mapsUrl: "https://www.google.com/maps/dir//Cherry+Dhaba+%26+Restaurant,+Suryapet+road,+Thorrur+-+Thirumalagiri+Rd,+Mali+Puram,+Telangana+508223/@17.4633327,78.3380127,9z/data=!4m17!1m8!3m7!1s0x3a34b4173e08e2b1:0x811f61a4970e846f!2sCherry+Dhaba+%26+Restaurant!8m2!3d17.4628412!4d79.4575429!15sCgxjaGVycnkgZGhhYmFaDiIMY2hlcnJ5IGRoYWJhkgERaW5kaWFuX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11c5s4fq5t!4m7!1m0!1m5!1m1!1s0x3a34b4173e08e2b1:0x811f61a4970e846f!2m2!1d79.4575429!2d17.4628412?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJseIIPhe0NDoRb4QOl6RhH4E",
  prepNotice: "Please allow 15 minutes for order preparation.",
  fssaiNumber: "FSSAI Certified • Food Safety & Standards Authority of India",
  highlights: ["Freshly prepared", "Quality ingredients", "Hygienic kitchen"],
  openingHours: "Open Daily: 11:00 AM – 11:00 PM"
};

// Curated high quality food thumbnail images
const IMAGES = {
  biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
  chicken65: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=80",
  tandoori: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80",
  paneerTikka: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80",
  butterChicken: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format&fit=crop&q=80",
  dalTadka: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
  naan: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&auto=format&fit=crop&q=80",
  prawns: "https://images.unsplash.com/photo-1559742811-822863cc4c7e?w=500&auto=format&fit=crop&q=80",
  fish: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=80",
  friedRice: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80",
  manchurian: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&auto=format&fit=crop&q=80",
  crispyCorn: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=80",
  eggCurry: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop&q=80",
  lassi: "https://images.unsplash.com/photo-1571006682880-92a5439c3620?w=500&auto=format&fit=crop&q=80",
  genericVeg: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
  genericNonVeg: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80"
};

export const FEATURED_DISHES = [
  {
    id: "chicken-dum-biryani-full",
    name: "Chicken Dum Biryani (Full)",
    category: "Biryani",
    price: 180,
    type: "non-veg",
    image: IMAGES.biryani,
    description: "Slow-cooked aromatic basmati rice layered with tender marinated chicken and dhaba secret spices.",
    popular: true,
    chefSpecial: false,
    mustTry: true
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka (8 Pcs)",
    category: "Veg Starters",
    price: 180,
    type: "veg",
    image: IMAGES.paneerTikka,
    description: "Char-grilled fresh cottage cheese cubes marinated in spiced yogurt & aromatic herbs.",
    popular: true,
    chefSpecial: true,
    mustTry: false
  },
  {
    id: "butter-chicken-bl",
    name: "Butter Chicken (BL)",
    category: "Non-Veg Curries",
    price: 220,
    type: "non-veg",
    image: IMAGES.butterChicken,
    description: "Rich boneless chicken cooked in a creamy tomato-butter gravy finished with fresh cream & fenugreek.",
    popular: true,
    chefSpecial: true,
    mustTry: false
  },
  {
    id: "tandoori-chicken-full",
    name: "Tandoori Chicken (Full)",
    category: "Non-Veg Starters",
    price: 600,
    type: "non-veg",
    image: IMAGES.tandoori,
    description: "Whole chicken marinated overnight in traditional tandoori spices and clay-oven roasted to perfection.",
    popular: false,
    chefSpecial: true,
    mustTry: true
  },
  {
    id: "dilkhush-chicken-biryani",
    name: "Dilkhush Chicken Biryani",
    category: "Biryani",
    price: 380,
    type: "non-veg",
    image: IMAGES.biryani,
    description: "House special rich chicken biryani cooked with extra dry fruits, egg, and special gravy blend.",
    popular: true,
    chefSpecial: true,
    mustTry: true
  }
];

export const MENU_CATEGORIES = [
  { id: "all", name: "All Items", icon: "Utensils" },
  { id: "non-veg-starters", name: "Non-Veg Starters", icon: "Flame" },
  { id: "non-veg-curries", name: "Non-Veg Curries", icon: "Soup" },
  { id: "veg-starters", name: "Veg Starters", icon: "Leaf" },
  { id: "veg-curries", name: "Veg Curries", icon: "Salad" },
  { id: "biryanis", name: "Biryanis", icon: "Sparkles" },
  { id: "prawn-fish", name: "Prawns & Fish", icon: "Fish" },
  { id: "egg-specials", name: "Egg Specials", icon: "Egg" },
  { id: "rotis-naan", name: "Rotis & Naan", icon: "Wheat" },
  { id: "rice-items", name: "Rice & Fried Rice", icon: "Bowl" },
  { id: "side-servings", name: "Side Servings", icon: "GlassWater" }
];

export const MENU_DATA = [
  {
    categoryId: "non-veg-starters",
    categoryName: "Non-Veg Starters",
    description: "Hot, crispy & fiery appetizers freshly char-grilled or wok-tossed",
    items: [
      { id: "nvs-1", name: "Chicken 65", price: 220, type: "non-veg", image: IMAGES.chicken65, description: "Classic spicy deep-fried chicken tossed with curry leaves & green chilies.", popular: true },
      { id: "nvs-2", name: "Chicken Manchuria", price: 220, type: "non-veg", image: IMAGES.manchurian, description: "Crispy chicken bites tossed in tangy Indo-Chinese Manchurian sauce." },
      { id: "nvs-3", name: "Chilli Chicken", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Boneless chicken pieces tossed with capsicum, onion, and hot chili glaze." },
      { id: "nvs-4", name: "Chicken Fry", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Dhaba style dry roasted chicken fried with grounded regional spices." },
      { id: "nvs-5", name: "Dry Chicken", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Succulent spiced chicken pan-roasted to dry perfection." },
      { id: "nvs-6", name: "Chicken Roast", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Deep roasted chicken marinated with whole black pepper and herbs." },
      { id: "nvs-7", name: "Apollo Chicken", price: 260, type: "non-veg", image: IMAGES.chicken65, description: "Famous Hyderabadi style boneless strips cooked in curd & red chili paste.", popular: true },
      { id: "nvs-8", name: "Pepper Chicken", price: 260, type: "non-veg", image: IMAGES.genericNonVeg, description: "Freshly crushed black pepper tossed roasted chicken strips." },
      { id: "nvs-9", name: "Chicken Fried Wings (8 pcs)", price: 260, type: "non-veg", image: IMAGES.genericNonVeg, description: "Crispy crunchy chicken wings coated in secret Dhaba batter." },
      { id: "nvs-10", name: "Chicken Drumstick (6 pcs)", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Juicy chicken lollipops fried golden brown with dipping sauce." },
      { id: "nvs-11", name: "Chicken Rajadhani", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Royal spicy chicken starter tossed with rich spiced gravy reduction." },
      { id: "nvs-12", name: "Chicken Majestic", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Thin chicken strips cooked in buttermilk, mint, and garlic sauce.", chefSpecial: true },
      { id: "nvs-13", name: "Chicken 555", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Fried chicken tossed in spicy garlic tomato chili masala glaze." },
      { id: "nvs-14", name: "Chicken Tikka (8 Pcs)", price: 300, type: "non-veg", image: IMAGES.tandoori, description: "Smoky tandoor roasted boneless chicken chunks with mint chutney.", mustTry: true },
      { id: "nvs-15", name: "Chicken Kabab (2 Pcs)", price: 180, type: "non-veg", image: IMAGES.tandoori, description: "Skewered juicy minced chicken roasted in clay oven." },
      { id: "nvs-16", name: "Dragon Chicken", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Sweet & spicy crunchy chicken strips tossed with cashew nuts." },
      { id: "nvs-17", name: "Yoga Chicken", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Special chef infused roasted chicken with unique herb blend." },
      { id: "nvs-18", name: "Natukodi Fry", price: 280, type: "non-veg", image: IMAGES.genericNonVeg, description: "Country chicken (Natukodi) pan-fried with roasted country spices.", popular: true },
      { id: "nvs-19", name: "Natukodi Dry", price: 280, type: "non-veg", image: IMAGES.genericNonVeg, description: "Authentic spicy dry Natukodi roasted with curry leaves & garlic." },
      { id: "nvs-20", name: "Tandoori Chicken Full", price: 600, type: "non-veg", image: IMAGES.tandoori, description: "Whole bird clay-oven char-roasted in spicy yogurt marinade.", chefSpecial: true }
    ]
  },
  {
    categoryId: "non-veg-curries",
    categoryName: "Non-Veg Curries",
    description: "Rich, aromatic and flavorful chicken, country chicken & seafood curries",
    items: [
      { id: "nvc-1", name: "Chicken Curry (Classic)", price: 180, type: "non-veg", image: IMAGES.genericNonVeg, description: "Homestyle classic onion tomato Dhaba chicken curry." },
      { id: "nvc-2", name: "Butter Chicken (BL)", price: 220, type: "non-veg", image: IMAGES.butterChicken, description: "Creamy butter tomato gravy with tender boneless chicken.", popular: true },
      { id: "nvc-3", name: "Chicken Kolhapur", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Spicy roasted coconut and dry chili Maharashtrian style gravy." },
      { id: "nvc-4", name: "Chicken Jaipuri", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Rich Rajasthani cashew and onion gravy cooked with boneless chicken." },
      { id: "nvc-5", name: "Kadai Chicken", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Chicken simmered with bell peppers and freshly pounded kadai spices." },
      { id: "nvc-6", name: "Kadai Chicken (BL)", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Boneless chicken pieces cooked with crushed coriander & bell peppers." },
      { id: "nvc-7", name: "Afgani Chicken (BL)", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Mild, rich cashew and poppy seed gravy with tender chicken chunks." },
      { id: "nvc-8", name: "Chicken Chat Pat (BL)", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Tangy and spicy boneless chicken curry with lime and dry mango touch." },
      { id: "nvc-9", name: "Ginger Chicken", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Fragrant ginger infused chicken curry cooked in thick gravy." },
      { id: "nvc-10", name: "Punjabi Chicken", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Robust North Indian Dhaba style chicken simmered in rich gravy." },
      { id: "nvc-11", name: "Punjabi Chicken Masala", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Thick onion-tomato masala coated chicken curry." },
      { id: "nvc-12", name: "Telangana Chicken", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Spicy regional special chicken curry made with roasted spices.", chefSpecial: true },
      { id: "nvc-13", name: "Chicken Sahadani (BL)", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Royal creamy gravy cooked with boneless chicken pieces." },
      { id: "nvc-14", name: "Handi Chicken", price: 260, type: "non-veg", image: IMAGES.genericNonVeg, description: "Earthen pot cooked slow-simmered aromatic chicken curry." },
      { id: "nvc-15", name: "Chicken Maharani", price: 220, type: "non-veg", image: IMAGES.genericNonVeg, description: "Mildly spiced royal almond and cashew chicken curry." },
      { id: "nvc-16", name: "Rara Chicken", price: 260, type: "non-veg", image: IMAGES.genericNonVeg, description: "Juicy chicken pieces simmered in spicy chicken keema gravy." },
      { id: "nvc-17", name: "Kaju Chicken", price: 260, type: "non-veg", image: IMAGES.genericNonVeg, description: "Rich chicken curry loaded with golden fried cashew nuts." },
      { id: "nvc-18", name: "Chicken Tikka Masala", price: 260, type: "non-veg", image: IMAGES.butterChicken, description: "Smoky tandoori chicken tikka cooked in rich onion tomato gravy.", popular: true },
      { id: "nvc-19", name: "Natukodi Curry", price: 240, type: "non-veg", image: IMAGES.genericNonVeg, description: "Authentic country chicken curry prepared in traditional Dhaba pot." },
      { id: "nvc-20", name: "Mogalai Chicken", price: 260, type: "non-veg", image: IMAGES.genericNonVeg, description: "Mughlai style creamy chicken gravy enriched with egg drop & cream." },
      { id: "nvc-21", name: "Fish Curry", price: 220, type: "non-veg", image: IMAGES.fish, description: "Tangy and spicy tamarind fish curry cooked Dhaba style." },
      { id: "nvc-22", name: "Prawns Curry", price: 220, type: "non-veg", image: IMAGES.prawns, description: "Juicy prawns cooked in spicy onion tomato curry reduction." },
      { id: "nvc-23", name: "Chicken Liver Curry", price: 150, type: "non-veg", image: IMAGES.genericNonVeg, description: "Fresh chicken liver cooked with coarse pepper masala." }
    ]
  },
  {
    categoryId: "veg-starters",
    categoryName: "Veg Starters",
    description: "Crispy vegetarian bites, Paneer tikkas, and Indo-Chinese specials",
    items: [
      { id: "vs-1", name: "French Fries", price: 150, type: "veg", image: IMAGES.crispyCorn, description: "Golden crispy potato fries seasoned with salt & herbs." },
      { id: "vs-2", name: "Crispy Corn", price: 150, type: "veg", image: IMAGES.crispyCorn, description: "Crunchy fried sweet corn kernels tossed with spices & lime juice.", popular: true },
      { id: "vs-3", name: "Boiled Corn", price: 150, type: "veg", image: IMAGES.crispyCorn, description: "Steamed sweet corn buttered and seasoned with chat masala." },
      { id: "vs-4", name: "Veg Manchurian", price: 130, type: "veg", image: IMAGES.manchurian, description: "Minced veg dumplings fried and tossed in garlic soya sauce." },
      { id: "vs-5", name: "Paneer Tikka (8 Pcs)", price: 180, type: "veg", image: IMAGES.paneerTikka, description: "Tandoor roasted marinated paneer cubes with bell peppers.", chefSpecial: true },
      { id: "vs-6", name: "Paneer Manchurian", price: 220, type: "veg", image: IMAGES.paneerTikka, description: "Crispy paneer cubes tossed in tangy Chinese Manchurian sauce." },
      { id: "vs-7", name: "Paneer 65", price: 220, type: "veg", image: IMAGES.paneerTikka, description: "Spicy South Indian style fried paneer tossed with curry leaves." },
      { id: "vs-8", name: "Kaju Roast", price: 220, type: "veg", image: IMAGES.crispyCorn, description: "Whole cashew nuts fried golden brown and roasted with spices." },
      { id: "vs-9", name: "Mushroom Manchurian", price: 220, type: "veg", image: IMAGES.genericVeg, description: "Crispy button mushrooms tossed in spicy Manchurian glaze." },
      { id: "vs-10", name: "Mushroom Fry", price: 220, type: "veg", image: IMAGES.genericVeg, description: "Pan fried button mushrooms cooked with black pepper & coriander." },
      { id: "vs-11", name: "Mushroom 65", price: 220, type: "veg", image: IMAGES.genericVeg, description: "Deep fried mushrooms marinated in 65 spice batter." },
      { id: "vs-12", name: "Veg Spring Roll", price: 200, type: "veg", image: IMAGES.manchurian, description: "Crispy rolls stuffed with seasoned vegetables and noodles." },
      { id: "vs-13", name: "Gobi Manchurian", price: 150, type: "veg", image: IMAGES.manchurian, description: "Crispy cauliflower florets tossed in tangy Manchurian sauce." },
      { id: "vs-14", name: "Cashew Nut Veg", price: 180, type: "veg", image: IMAGES.genericVeg, description: "Assorted vegetables wok fried with crunchy cashews." },
      { id: "vs-15", name: "Paneer Satay", price: 260, type: "veg", image: IMAGES.paneerTikka, description: "Grilled paneer skewers served with rich spicy dipping sauce." }
    ]
  },
  {
    categoryId: "veg-curries",
    categoryName: "Veg Curries",
    description: "Hearty cottage cheese, cashew, lentil & vegetable main dishes",
    items: [
      { id: "vc-1", name: "Tomato Curry", price: 120, type: "veg", image: IMAGES.genericVeg, description: "Tangy Dhaba style tomato onion curry with mustard tempered oil." },
      { id: "vc-2", name: "Kaju Tomato Curry", price: 180, type: "veg", image: IMAGES.genericVeg, description: "Rich cashew nuts cooked in tangy tomato onion gravy." },
      { id: "vc-3", name: "Mixed Vegetable Curry", price: 180, type: "veg", image: IMAGES.genericVeg, description: "Garden fresh seasonal vegetables simmered in spiced gravy." },
      { id: "vc-4", name: "Veg Chat Pat", price: 180, type: "veg", image: IMAGES.genericVeg, description: "Tangy mixed vegetable curry infused with chat spices." },
      { id: "vc-5", name: "Plain Palak", price: 130, type: "veg", image: IMAGES.genericVeg, description: "Smooth pureed fresh spinach cooked with mild aromatic spices." },
      { id: "vc-6", name: "Palak Paneer", price: 220, type: "veg", image: IMAGES.genericVeg, description: "Fresh cottage cheese cubes simmered in creamy spinach puree." },
      { id: "vc-7", name: "Paneer Butter Masala", price: 200, type: "veg", image: IMAGES.paneerTikka, description: "Iconic rich tomato, butter and cream gravy with soft paneer.", popular: true },
      { id: "vc-8", name: "Kaju Paneer", price: 220, type: "veg", image: IMAGES.paneerTikka, description: "Delightful combination of cashews and paneer in rich gravy." },
      { id: "vc-9", name: "Mushroom Curry", price: 220, type: "veg", image: IMAGES.genericVeg, description: "Button mushrooms cooked in thick Dhaba onion tomato curry." },
      { id: "vc-10", name: "Matar Mushroom", price: 230, type: "veg", image: IMAGES.genericVeg, description: "Green peas and tender mushrooms cooked together in gravy." },
      { id: "vc-11", name: "Methi Chaman Curry", price: 220, type: "veg", image: IMAGES.genericVeg, description: "Fresh fenugreek leaves and paneer cooked in mild creamy spinach sauce." },
      { id: "vc-12", name: "Paneer Pasand", price: 260, type: "veg", image: IMAGES.paneerTikka, description: "Stuffed paneer triangles cooked in royal cashew gravy." },
      { id: "vc-13", name: "Paneer Lababdar", price: 230, type: "veg", image: IMAGES.paneerTikka, description: "Grated and cubed paneer cooked in creamy tomato onion masala.", chefSpecial: true },
      { id: "vc-14", name: "Paneer Chat Pat", price: 230, type: "veg", image: IMAGES.paneerTikka, description: "Spicy & tangy paneer gravy tossed with capsicum." },
      { id: "vc-15", name: "Aloo Gobi Masala", price: 160, type: "veg", image: IMAGES.genericVeg, description: "Potatoes and cauliflower florets roasted with dry spices." },
      { id: "vc-16", name: "Dal Fry", price: 120, type: "veg", image: IMAGES.dalTadka, description: "Yellow lentils tempered with ghee, cumin, garlic and green chilies." },
      { id: "vc-17", name: "Dal Tadka", price: 130, type: "veg", image: IMAGES.dalTadka, description: "Double tempered aromatic yellow dal with red chili & ghee.", popular: true },
      { id: "vc-18", name: "Kashmir Damaal", price: 250, type: "veg", image: IMAGES.genericVeg, description: "Stuffed baby potatoes cooked in Kashmiri red gravy." },
      { id: "vc-19", name: "Malai Kofta Curry", price: 240, type: "veg", image: IMAGES.genericVeg, description: "Melt-in-mouth paneer & potato dumplings in sweet creamy gravy." }
    ]
  },
  {
    categoryId: "biryanis",
    categoryName: "Biryanis & Special Rice",
    description: "Authentic Dum cooked aromatic Basmati Rice prepared with secret Dhaba masalas",
    items: [
      { id: "bir-1", name: "Chicken Dum Biryani (Single)", price: 130, type: "non-veg", image: IMAGES.biryani, description: "Single portion aromatic basmati biryani with succulent chicken piece." },
      { id: "bir-2", name: "Chicken Dum Biryani (Full)", price: 180, type: "non-veg", image: IMAGES.biryani, description: "Full portion signature chicken dum biryani served with raita & mirchi ka salan.", popular: true },
      { id: "bir-3", name: "Chicken Dum Biryani (Family Pack)", price: 450, type: "non-veg", image: IMAGES.biryani, description: "Generous family portion (serves 3-4) with extra chicken pieces." },
      { id: "bir-4", name: "Chicken Dum Biryani (Jumbo Pack)", price: 650, type: "non-veg", image: IMAGES.biryani, description: "Jumbo portion for groups (serves 5-6) packed with flavor." },
      { id: "bir-5", name: "Chicken Fry Piece Biryani (Single)", price: 160, type: "non-veg", image: IMAGES.biryani, description: "Spicy fried chicken piece served over spiced biryani rice." },
      { id: "bir-6", name: "Chicken Fry Piece Biryani (Full)", price: 200, type: "non-veg", image: IMAGES.biryani, description: "Full biryani topped with crisp fried spicy chicken pieces.", chefSpecial: true },
      { id: "bir-7", name: "Chicken Fry Piece Biryani (Family Pack)", price: 480, type: "non-veg", image: IMAGES.biryani, description: "Family pack topped with crisp fried chicken pieces." },
      { id: "bir-8", name: "Chicken Fry Piece Biryani (Jumbo Pack)", price: 700, type: "non-veg", image: IMAGES.biryani, description: "Jumbo party pack of fry piece biryani." },
      { id: "bir-9", name: "Chicken Special Biryani (Full)", price: 240, type: "non-veg", image: IMAGES.biryani, description: "Boneless chicken biryani served with boiled egg & extra gravy." },
      { id: "bir-10", name: "Chicken Special Biryani (Family Pack)", price: 580, type: "non-veg", image: IMAGES.biryani, description: "Boneless chicken special biryani family pack." },
      { id: "bir-11", name: "Prawns Biryani (Full)", price: 240, type: "non-veg", image: IMAGES.prawns, description: "Spicy prawns cooked with fragrant biryani rice." },
      { id: "bir-12", name: "Prawns Biryani (Family Pack)", price: 580, type: "non-veg", image: IMAGES.prawns, description: "Family pack prawns biryani." },
      { id: "bir-13", name: "Plain Biryani Rice", price: 100, type: "veg", image: IMAGES.biryani, description: "Flavorful basmati biryani rice cooked in aromatic spices broth." },
      { id: "bir-14", name: "Fish Biryani", price: 240, type: "non-veg", image: IMAGES.fish, description: "Boneless fish fillets cooked with layered biryani rice." },
      { id: "bir-15", name: "Dilkhush Chicken Biryani", price: 380, type: "non-veg", image: IMAGES.biryani, description: "Special chef delight biryani loaded with boneless chicken & nuts.", mustTry: true },
      { id: "bir-16", name: "Afgani Biryani", price: 500, type: "non-veg", image: IMAGES.biryani, description: "Mild, creamy and aromatic Afghan style chicken biryani." },
      { id: "bir-17", name: "Natukodi Chicken Biryani", price: 260, type: "non-veg", image: IMAGES.biryani, description: "Authentic country chicken biryani cooked slow dum style." },
      { id: "bir-18", name: "Egg Biryani", price: 160, type: "non-veg", image: IMAGES.eggCurry, description: "Spiced biryani rice served with 2 boiled eggs." },
      { id: "bir-19", name: "Special Egg Biryani", price: 180, type: "non-veg", image: IMAGES.eggCurry, description: "Egg biryani cooked with extra fried egg masala." },
      { id: "bir-20", name: "Vegetable Biryani", price: 180, type: "veg", image: IMAGES.biryani, description: "Fragrant basmati rice dum cooked with fresh mixed vegetables." },
      { id: "bir-21", name: "Paneer Biryani", price: 220, type: "veg", image: IMAGES.paneerTikka, description: "Basmati biryani loaded with marinated soft paneer cubes.", popular: true },
      { id: "bir-22", name: "Mushroom Biryani", price: 220, type: "veg", image: IMAGES.biryani, description: "Juicy mushrooms cooked in biryani spices." },
      { id: "bir-23", name: "Kaju Biryani", price: 220, type: "veg", image: IMAGES.biryani, description: "Biryani enriched with fried golden cashew nuts." },
      { id: "bir-24", name: "Kaju Paneer Biryani", price: 220, type: "veg", image: IMAGES.paneerTikka, description: "Royal combination of cashews and paneer in dum biryani." }
    ]
  },
  {
    categoryId: "prawn-fish",
    categoryName: "Prawns, Fish & Liver Specials",
    description: "Fresh coastal seafood delicacies & special meats cooked to order",
    items: [
      { id: "pf-1", name: "Prawns Fry", price: 240, type: "non-veg", image: IMAGES.prawns, description: "Crispy pan-fried prawns coated in red chili garlic paste." },
      { id: "pf-2", name: "Loose Prawns", price: 240, type: "non-veg", image: IMAGES.prawns, description: "Batter fried crispy prawns tossed with chili garlic pepper seasoning.", popular: true },
      { id: "pf-3", name: "Chilli Prawns", price: 240, type: "non-veg", image: IMAGES.prawns, description: "Indo-Chinese style chili sauce tossed juicy prawns." },
      { id: "pf-4", name: "Dry Prawns", price: 240, type: "non-veg", image: IMAGES.prawns, description: "Spicy dry roasted prawns with onion and curry leaves." },
      { id: "pf-5", name: "Gongura Prawns Fry", price: 260, type: "non-veg", image: IMAGES.prawns, description: "Tangy Andhra sorrel leaf (Gongura) tossed prawn fry.", chefSpecial: true },
      { id: "pf-6", name: "Fish Fry", price: 240, type: "non-veg", image: IMAGES.fish, description: "Shallow fried fish fillets marinated in spicy masala." },
      { id: "pf-7", name: "Fish Roast", price: 240, type: "non-veg", image: IMAGES.fish, description: "Pan roasted fish pieces with black pepper and spices." },
      { id: "pf-8", name: "Dry Fish", price: 240, type: "non-veg", image: IMAGES.fish, description: "Crispy dry roasted fish pieces." },
      { id: "pf-9", name: "Fish Tikka", price: 260, type: "non-veg", image: IMAGES.fish, description: "Clay oven roasted boneless fish cubes marinated in spices." },
      { id: "pf-10", name: "Liver Fry", price: 150, type: "non-veg", image: IMAGES.genericNonVeg, description: "Pan fried chicken liver with onion chili seasoning." },
      { id: "pf-11", name: "Liver Roast", price: 150, type: "non-veg", image: IMAGES.genericNonVeg, description: "Dry roasted chicken liver with crushed spices." },
      { id: "pf-12", name: "Dry Liver", price: 150, type: "non-veg", image: IMAGES.genericNonVeg, description: "Crispy dry chicken liver fry." }
    ]
  },
  {
    categoryId: "egg-specials",
    categoryName: "Egg Specials",
    description: "Protein packed egg starters, curries, and roasts",
    items: [
      { id: "egg-1", name: "Boiled Eggs (2 Pcs)", price: 30, type: "non-veg", image: IMAGES.eggCurry, description: "Freshly boiled eggs with salt & pepper pinch." },
      { id: "egg-2", name: "Egg Roast (2 Pcs)", price: 40, type: "non-veg", image: IMAGES.eggCurry, description: "Boiled eggs roasted with onion chili pepper paste." },
      { id: "egg-3", name: "Egg Bhurji", price: 150, type: "non-veg", image: IMAGES.eggCurry, description: "Dhaba style scrambled eggs cooked with onion, tomato & chilies." },
      { id: "egg-4", name: "Egg Manchurian", price: 150, type: "non-veg", image: IMAGES.manchurian, description: "Fried egg bites tossed in tangy Manchurian sauce." },
      { id: "egg-5", name: "Chilli Egg", price: 150, type: "non-veg", image: IMAGES.eggCurry, description: "Batter fried egg pieces tossed with capsicum and chili sauce." },
      { id: "egg-6", name: "Egg 65", price: 150, type: "non-veg", image: IMAGES.eggCurry, description: "Spicy fried egg cubes tossed with curry leaves." },
      { id: "egg-7", name: "Egg Curry (Classic)", price: 130, type: "non-veg", image: IMAGES.eggCurry, description: "Boiled eggs simmered in spicy Dhaba gravy." },
      { id: "egg-8", name: "Egg Tomato", price: 150, type: "non-veg", image: IMAGES.eggCurry, description: "Tangy tomato masala cooked with boiled eggs." },
      { id: "egg-9", name: "Egg Keema", price: 130, type: "non-veg", image: IMAGES.eggCurry, description: "Minced egg cooked in rich spiced gravy." },
      { id: "egg-10", name: "Egg Masala", price: 130, type: "non-veg", image: IMAGES.eggCurry, description: "Thick onion tomato masala gravy with eggs." },
      { id: "egg-11", name: "Egg Pepper Curry", price: 130, type: "non-veg", image: IMAGES.eggCurry, description: "Black pepper crushed gravy simmered with eggs." },
      { id: "egg-12", name: "Egg Butter Masala", price: 150, type: "non-veg", image: IMAGES.eggCurry, description: "Creamy butter tomato gravy cooked with eggs." }
    ]
  },
  {
    categoryId: "rotis-naan",
    categoryName: "Rotis & Naan",
    description: "Freshly baked Indian breads from our clay tandoor",
    items: [
      { id: "rn-1", name: "Pulka", price: 15, type: "veg", image: IMAGES.naan, description: "Soft flame puffed whole wheat flatbread." },
      { id: "rn-2", name: "Tandoori Roti", price: 15, type: "veg", image: IMAGES.naan, description: "Traditional clay oven baked whole wheat roti." },
      { id: "rn-3", name: "Butter Roti", price: 20, type: "veg", image: IMAGES.naan, description: "Tandoori roti brushed with fresh melt butter." },
      { id: "rn-4", name: "Plain Naan", price: 25, type: "veg", image: IMAGES.naan, description: "Soft pillow-like clay oven baked white flour bread." },
      { id: "rn-5", name: "Butter Naan", price: 30, type: "veg", image: IMAGES.naan, description: "Flaky soft naan brushed with rich butter.", popular: true },
      { id: "rn-6", name: "Garlic Naan", price: 45, type: "veg", image: IMAGES.naan, description: "Naan topped with minced garlic & cilantro butter.", chefSpecial: true },
      { id: "rn-7", name: "Coriander Naan", price: 35, type: "veg", image: IMAGES.naan, description: "Naan baked with fresh coriander leaves." }
    ]
  },
  {
    categoryId: "rice-items",
    categoryName: "Rice & Fried Rice",
    description: "Steamed rice, flavored rice and wok fried Indo-Chinese rice",
    items: [
      { id: "rice-1", name: "Plain Rice", price: 60, type: "veg", image: IMAGES.friedRice, description: "Steamed fine quality white rice." },
      { id: "rice-2", name: "Jeera Rice", price: 100, type: "veg", image: IMAGES.friedRice, description: "Basmati rice tempered with cumin seeds & ghee." },
      { id: "rice-3", name: "Egg Fried Rice", price: 100, type: "non-veg", image: IMAGES.friedRice, description: "Wok fried basmati rice tossed with egg & veggies." },
      { id: "rice-4", name: "Special Egg Fried Rice", price: 130, type: "non-veg", image: IMAGES.friedRice, description: "Fried rice loaded with double eggs & chef seasonings." },
      { id: "rice-5", name: "Veg Fried Rice", price: 100, type: "veg", image: IMAGES.friedRice, description: "Classic Chinese wok tossed fried rice with vegetables." },
      { id: "rice-6", name: "Paneer Fried Rice", price: 140, type: "veg", image: IMAGES.friedRice, description: "Wok fried rice tossed with crispy paneer cubes." },
      { id: "rice-7", name: "Kaju Fried Rice", price: 140, type: "veg", image: IMAGES.friedRice, description: "Fried rice enriched with golden fried cashews." },
      { id: "rice-8", name: "Chicken Fried Rice", price: 130, type: "non-veg", image: IMAGES.friedRice, description: "Classic wok fried rice with seasoned chicken bits." },
      { id: "rice-9", name: "Special Chicken Fried Rice", price: 150, type: "non-veg", image: IMAGES.friedRice, description: "Fried rice with extra chicken, egg & secret spices." },
      { id: "rice-10", name: "Curd Rice", price: 80, type: "veg", image: IMAGES.friedRice, description: "Soothing rice mixed with fresh curd & mustard tempering." },
      { id: "rice-11", name: "Special Curd Rice", price: 100, type: "veg", image: IMAGES.friedRice, description: "Rich curd rice garnished with pomegranate seeds & cashews." }
    ]
  },
  {
    categoryId: "side-servings",
    categoryName: "Side Servings & Refreshments",
    description: "Accompaniments, salads, fresh chutneys and curd",
    items: [
      { id: "ss-1", name: "Plain Curd", price: 20, type: "veg", image: IMAGES.lassi, description: "Fresh thick set chilled curd." },
      { id: "ss-2", name: "Butter Milk", price: 20, type: "veg", image: IMAGES.lassi, description: "Refreshing spiced buttermilk with cumin & coriander." },
      { id: "ss-3", name: "Onion & Lemon Slices", price: 30, type: "veg", image: IMAGES.genericVeg, description: "Fresh cut onion rings with fresh lemon wedges." },
      { id: "ss-4", name: "Pudhina Chutney", price: 25, type: "veg", image: IMAGES.genericVeg, description: "Fresh mint and cilantro green chutney." },
      { id: "ss-5", name: "Green Salad", price: 40, type: "veg", image: IMAGES.genericVeg, description: "Sliced cucumber, carrots, tomatoes & onions." },
      { id: "ss-6", name: "Green / Red Sauce", price: 25, type: "veg", image: IMAGES.genericVeg, description: "Dipping sauces." }
    ]
  }
];

// ==========================================
// SHOP.JS - 75 PRODUCTS (15 PER PAGE = 5 PAGES)
// ==========================================

// PRODUCT DATA - CURATED 75 PRODUCTS
const allProducts = [
  
  // ==========================================
  // SOFAS & LIVING ROOM (12 Products)
  // ==========================================
  {
    id: 1,
    name: "Modern Chesterfield 3-Seater Sofa – Faux Leather",
    category: "Sofas & Living Room",
    price: 285000,
    oldPrice: 420000,
    image: "https://m.media-amazon.com/images/I/8108kcQAkaL._AC_UF894,1000_QL80_.jpg",
    rating: 4.5,
    reviews: 127,
    badges: ["sale", "hot"],
    discount: 32
  },
  {
    id: 2,
    name: "Contemporary Living Room Sofa Set (3+2)",
    category: "Sofas & Living Room",
    price: 395000,
    oldPrice: null,
    image: "https://www.coasterfurniture.com/wp-content/uploads/gano-living-room-set.png",
    rating: 5,
    reviews: 89,
    badges: ["hot"],
    discount: null
  },
  {
    id: 13,
    name: "L-Shaped Sectional Sofa with Chaise – Dark Gray",
    category: "Sofas & Living Room",
    price: 550000,
    oldPrice: 735000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    rating: 4.5,
    reviews: 203,
    badges: ["sale"],
    discount: 25
  },
  {
    id: 14,
    name: "Single Recliner Armchair – Leather Finish Brown",
    category: "Sofas & Living Room",
    price: 165000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    rating: 4.5,
    reviews: 78,
    badges: [],
    discount: null
  },
  {
    id: 16,
    name: "Mid-Century Modern 3-Seater Sofa – Mustard Yellow",
    category: "Sofas & Living Room",
    price: 320000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
    rating: 5,
    reviews: 312,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 17,
    name: "Complete Living Room Set (3+2+1) – Premium Leather",
    category: "Sofas & Living Room",
    price: 680000,
    oldPrice: 970000,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    rating: 5,
    reviews: 156,
    badges: ["sale", "bestseller"],
    discount: 30
  },
  {
    id: 19,
    name: "U-Shaped Modular Sectional – 7 Seater Gray",
    category: "Sofas & Living Room",
    price: 750000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    rating: 4.5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },
  {
    id: 21,
    name: "Power Reclining Sofa with USB – Black Leather",
    category: "Sofas & Living Room",
    price: 385000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&q=80",
    rating: 4.5,
    reviews: 134,
    badges: ["new", "hot"],
    discount: null
  },
  {
    id: 23,
    name: "Modular Corner Sofa – Light Beige Fabric",
    category: "Sofas & Living Room",
    price: 620000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
    rating: 4.5,
    reviews: 98,
    badges: ["new"],
    discount: null
  },
  {
    id: 116,
    name: "Modern Grey Sectional Sofa – L-Shape with Chaise",
    category: "Sofas & Living Room",
    price: 695000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1676321688606-2f3b026710a5?w=800&q=80",
    rating: 4.5,
    reviews: 145,
    badges: ["new"],
    discount: null
  },
  {
    id: 120,
    name: "Plush Velvet 3-Seater Sofa – Sage Green",
    category: "Sofas & Living Room",
    price: 365000,
    oldPrice: 468000,
    image: "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=800&q=80",
    rating: 5,
    reviews: 178,
    badges: ["sale"],
    discount: 22
  },
  {
    id: 125,
    name: "Classic Tufted Chesterfield Set – Velvet Navy Blue",
    category: "Sofas & Living Room",
    price: 595000,
    oldPrice: 850000,
    image: "https://plus.unsplash.com/premium_photo-1706152482966-a295c922cdcf?w=800&q=80",
    rating: 5,
    reviews: 203,
    badges: ["sale", "bestseller"],
    discount: 30
  },

  // ==========================================
  // DINING SETS (12 Products)
  // ==========================================
  {
    id: 3,
    name: "9-Piece Extendable Dining Table Set – Solid Wood",
    category: "Dining Sets",
    price: 480000,
    oldPrice: 650000,
    image: "https://m.media-amazon.com/images/I/818vNipOGKL.jpg",
    rating: 4.5,
    reviews: 94,
    badges: ["sale"],
    discount: 26
  },
  {
    id: 26,
    name: "8-Seater Solid Wood Dining Table – Natural Brown",
    category: "Dining Sets",
    price: 480000,
    oldPrice: 650000,
    image: "https://m.media-amazon.com/images/I/51cSjmsCEKL._AC_UF894,1000_QL80_.jpg",
    rating: 4.5,
    reviews: 112,
    badges: ["sale"],
    discount: 26
  },
  {
    id: 27,
    name: "6-Seater Modern Dining Set – White with Wood Accents",
    category: "Dining Sets",
    price: 420000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    rating: 5,
    reviews: 156,
    badges: ["new"],
    discount: null
  },
  {
    id: 28,
    name: "4-Seater Round Wooden Dining Set – Light Oak",
    category: "Dining Sets",
    price: 320000,
    oldPrice: 390000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    rating: 4.5,
    reviews: 87,
    badges: ["sale"],
    discount: 18
  },
  {
    id: 31,
    name: "8-Seater Elegant Formal Dining Set – Dark Walnut",
    category: "Dining Sets",
    price: 780000,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/818vNipOGKL.jpg",
    rating: 5,
    reviews: 287,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 32,
    name: "6-Seater Glass Top Dining Table – Chrome Base",
    category: "Dining Sets",
    price: 290000,
    oldPrice: 450000,
    image: "https://cdn11.bigcommerce.com/s-3uyyclsi/images/stencil/original/products/509/8156/CR110401-S5_21-1__75716.1724256294.jpg?c=2",
    rating: 4,
    reviews: 67,
    badges: ["sale"],
    discount: 35
  },
  {
    id: 34,
    name: "4-Seater Round Marble Top Dining Set – Gold Base",
    category: "Dining Sets",
    price: 460000,
    oldPrice: null,
    image: "https://www.lunafurn.com/cdn/shop/files/Vida-6-Piece-White-Marble-Dining-Set-Table-4-Side-Chairs-Luna-Furniture-27076204429366.jpg?v=1768306987&width=1645",
    rating: 5,
    reviews: 134,
    badges: ["new", "hot"],
    discount: null
  },
  {
    id: 38,
    name: "6-Seater Mid-Century Dining Set – Teak Wood",
    category: "Dining Sets",
    price: 720000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=800&q=80",
    rating: 5,
    reviews: 178,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 40,
    name: "8-Seater Luxury Dining Set – Velvet Upholstered",
    category: "Dining Sets",
    price: 1250000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    rating: 5,
    reviews: 89,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 131,
    name: "Modern White Dining Set – 6-Seater Upholstered",
    category: "Dining Sets",
    price: 485000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1673214881759-4bd60b76acae?w=800&q=80",
    rating: 4.5,
    reviews: 134,
    badges: ["new"],
    discount: null
  },
  {
    id: 135,
    name: "Luxury Velvet Dining Chairs Set of 4 – Emerald Green",
    category: "Dining Sets",
    price: 245000,
    oldPrice: 350000,
    image: "https://images.unsplash.com/photo-1758977245928-296e47fa2155?w=800&q=80",
    rating: 5,
    reviews: 167,
    badges: ["sale"],
    discount: 30
  },
  {
    id: 140,
    name: "Extendable Dining Table Set – Walnut 6-10 Seater",
    category: "Dining Sets",
    price: 580000,
    oldPrice: 805000,
    image: "https://images.unsplash.com/photo-1758565811572-22622d91c2e1?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,
    reviews: 112,
    badges: ["sale"],
    discount: 28
  },

  // ==========================================
  // BEDS & BEDROOM (12 Products)
  // ==========================================
  {
    id: 4,
    name: "Queen Size Upholstered Platform Bed – Beige",
    category: "Beds & Bedroom",
    price: 195000,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/81imf690CRL._AC_UF894,1000_QL80_.jpg",
    rating: 4,
    reviews: 112,
    badges: ["new"],
    discount: null
  },
  {
    id: 41,
    name: "King Size Platform Bed – Upholstered Gray Fabric",
    category: "Beds & Bedroom",
    price: 380000,
    oldPrice: 510000,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    rating: 4.5,
    reviews: 156,
    badges: ["sale", "hot"],
    discount: 25
  },
  {
    id: 43,
    name: "Complete Bedroom Set – King Bed + 2 Nightstands",
    category: "Beds & Bedroom",
    price: 720000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    rating: 5,
    reviews: 287,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 44,
    name: "Queen Tufted Headboard Bed – Velvet Navy Blue",
    category: "Beds & Bedroom",
    price: 345000,
    oldPrice: 495000,
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80",
    rating: 4.5,
    reviews: 134,
    badges: ["sale"],
    discount: 30
  },
  {
    id: 47,
    name: "Luxury 5-Piece Bedroom Set – King Bed + Dresser",
    category: "Beds & Bedroom",
    price: 1450000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    rating: 5,
    reviews: 312,
    badges: ["bestseller", "hot"],
    discount: null
  },
  {
    id: 48,
    name: "King Floating Platform Bed – Contemporary White",
    category: "Beds & Bedroom",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    rating: 4.5,
    reviews: 98,
    badges: ["new"],
    discount: null
  },
  {
    id: 53,
    name: "King Modern Platform Bed with LED Lights – White",
    category: "Beds & Bedroom",
    price: 650000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    rating: 4.5,
    reviews: 145,
    badges: ["new", "hot"],
    discount: null
  },
  {
    id: 55,
    name: "King Wingback Bed – Emerald Green Velvet",
    category: "Beds & Bedroom",
    price: 495000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    rating: 5,
    reviews: 167,
    badges: ["new"],
    discount: null
  },
  {
    id: 149,
    name: "Luxury Tufted Headboard Bed – King Velvet Grey",
    category: "Beds & Bedroom",
    price: 485000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1681980021035-5db5823c974b?w=800&q=80",
    rating: 5,
    reviews: 189,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 154,
    name: "Velvet Wingback Bed – King Navy Blue Gold Accents",
    category: "Beds & Bedroom",
    price: 565000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1660324407967-572d05e41def?w=800&q=80",
    rating: 5,
    reviews: 134,
    badges: ["new"],
    discount: null
  },
  {
    id: 155,
    name: "Complete Master Bedroom Set – King + Dresser + Mirror",
    category: "Beds & Bedroom",
    price: 1150000,
    oldPrice: 1597000,
    image: "https://plus.unsplash.com/premium_photo-1673014201794-0b086630d541?w=800&q=80",
    rating: 5,
    reviews: 203,
    badges: ["sale", "bestseller"],
    discount: 28
  },
  {
    id: 160,
    name: "Luxury Velvet Ottoman Storage Bed – King Emerald",
    category: "Beds & Bedroom",
    price: 495000,
    oldPrice: 635000,
    image: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&q=80",
    rating: 5,
    reviews: 156,
    badges: ["sale"],
    discount: 22
  },

  // ==========================================
  // WARDROBES (12 Products)
  // ==========================================
  {
    id: 5,
    name: "4-Door Sliding Wardrobe with Mirror – Walnut",
    category: "Wardrobes",
    price: 320000,
    oldPrice: 450000,
    image: "https://futonland.com/common/images/products2/large/PI-8206M-WRD-MC.jpg",
    rating: 4.5,
    reviews: 67,
    badges: ["sale"],
    discount: 29
  },
  {
    id: 56,
    name: "Premium Walk-in Closet System – White",
    category: "Wardrobes",
    price: 850000,
    oldPrice: null,
    image: "https://s3.amazonaws.com/media.thestowcompany.com/managed_media/filer_public/57/53/575305ee-1f18-4730-836f-80bf14fa1836/ec_703.jpg",
    rating: 5,
    reviews: 156,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 57,
    name: "3-Door Hinged Wardrobe with Drawers – Classic White",
    category: "Wardrobes",
    price: 320000,
    oldPrice: 450000,
    image: "https://roomanddecor.com/cdn/shop/files/20230703_1151a31407e74831cdd88a7e6ac111e7.jpg?v=1725018522&width=1946",
    rating: 4.5,
    reviews: 89,
    badges: ["sale"],
    discount: 29
  },
  {
    id: 59,
    name: "4-Door Sliding Wardrobe with Mirror – Modern White",
    category: "Wardrobes",
    price: 385000,
    oldPrice: 550000,
    image: "https://www.oppoliahome.com/wp-content/uploads/2022/12/white-wardrobe-with-mirror-obw23-l03.jpg",
    rating: 4.5,
    reviews: 245,
    badges: ["sale", "bestseller"],
    discount: 30
  },
  {
    id: 61,
    name: "Walk-in Closet with Shoe Racks & Shelves – Gray",
    category: "Wardrobes",
    price: 420000,
    oldPrice: 525000,
    image: "https://www.idfdesign.com/images/walk-in-closets/walk-in-closet-ak-14-walk-in-closet-3.jpg",
    rating: 5,
    reviews: 134,
    badges: ["sale"],
    discount: 20
  },
  {
    id: 64,
    name: "Compact 2-Door Wardrobe for Small Spaces – White",
    category: "Wardrobes",
    price: 125000,
    oldPrice: 195000,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/bd7e7249-212c-4fd6-9c30-ba1af17df594.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    rating: 4,
    reviews: 78,
    badges: ["sale"],
    discount: 36
  },
  {
    id: 65,
    name: "Expandable Modular Closet System – Light Oak",
    category: "Wardrobes",
    price: 680000,
    oldPrice: null,
    image: "https://d1b9sdpix36q7o.cloudfront.net/blog-content/blog/wp-content/uploads/2022/06/Sereno_Canyon_Callum_PCloset_3469.jpg",
    rating: 5,
    reviews: 112,
    badges: ["new"],
    discount: null
  },
  {
    id: 70,
    name: "Luxury Master Walk-in Closet System – Premium Gray",
    category: "Wardrobes",
    price: 1250000,
    oldPrice: null,
    image: "https://d1b9sdpix36q7o.cloudfront.net/blog-content/blog/wp-content/uploads/2022/06/Sereno_Canyon_Callum_PCloset_3469.jpg",
    rating: 5,
    reviews: 89,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 161,
    name: "Modern Sliding Door Wardrobe – 3-Door White Gloss",
    category: "Wardrobes",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=800&q=80",
    rating: 4.5,
    reviews: 134,
    badges: ["new"],
    discount: null
  },
  {
    id: 162,
    name: "Walk-In Closet System – Complete Modular Unit",
    category: "Wardrobes",
    price: 1250000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1683181181300-44c0c991a2cf?w=800&q=80",
    rating: 5,
    reviews: 178,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 166,
    name: "Built-In Wardrobe System – Floor to Ceiling White",
    category: "Wardrobes",
    price: 680000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1687953413905-731f620177ae?w=800&q=80",
    rating: 5,
    reviews: 145,
    badges: ["new"],
    discount: null
  },
  {
    id: 170,
    name: "Luxury Walk-In Closet with Glass Doors",
    category: "Wardrobes",
    price: 1450000,
    oldPrice: 2014000,
    image: "https://images.unsplash.com/photo-1708397016786-8916880649b8?w=800&q=80",
    rating: 5,
    reviews: 98,
    badges: ["sale", "bestseller"],
    discount: 28
  },

  // ==========================================
  // INTERIOR DECOR (10 Products)
  // ==========================================
  {
    id: 6,
    name: "Modern Glass Top Coffee Table with Storage",
    category: "Interior Decor",
    price: 85000,
    oldPrice: null,
    image: "https://www.expressfurniture.net/wp-content/uploads/2021/06/426449_791x633_01.jpg",
    rating: 4,
    reviews: 67,
    badges: ["new"],
    discount: null
  },
  {
    id: 71,
    name: "Large Round Wall Mirror – Gold Metal Frame 90cm",
    category: "Interior Decor",
    price: 85000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    rating: 4.5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },
  {
    id: 74,
    name: "Modern Arc Floor Lamp – Marble Base & Brass",
    category: "Interior Decor",
    price: 78000,
    oldPrice: 112000,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
    rating: 4.5,
    reviews: 112,
    badges: ["sale"],
    discount: 30
  },
  {
    id: 76,
    name: "Hand-Woven Geometric Area Rug – 200x300cm Beige",
    category: "Interior Decor",
    price: 145000,
    oldPrice: 182000,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
    rating: 5,
    reviews: 134,
    badges: ["sale"],
    discount: 20
  },
  {
    id: 79,
    name: "Elegant Marble Top Console Table – Gold Legs",
    category: "Interior Decor",
    price: 125000,
    oldPrice: 148000,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    rating: 5,
    reviews: 156,
    badges: ["sale"],
    discount: 15
  },
  {
    id: 83,
    name: "Large Abstract Canvas Art – Neutral Tones 100x150cm",
    category: "Interior Decor",
    price: 78000,
    oldPrice: 98000,
    image: "https://images.unsplash.com/photo-1732050527656-a388091fa1c6?w=800&q=80",
    rating: 4.5,
    reviews: 78,
    badges: ["sale"],
    discount: 20
  },
  {
    id: 180,
    name: "Scandinavian TV Console Unit – White Oak",
    category: "Interior Decor",
    price: 185000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    rating: 4.5,
    reviews: 112,
    badges: ["new"],
    discount: null
  },
  {
    id: 184,
    name: "Natural Rattan Pendant Light – Woven Dome 50cm",
    category: "Interior Decor",
    price: 58000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1748680224201-9fddd428f5bb?w=800&q=80",
    rating: 4.5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },
  {
    id: 188,
    name: "Luxury Knit Throw Blanket – Chunky Weave Cream",
    category: "Interior Decor",
    price: 48000,
    oldPrice: 62000,
    image: "https://plus.unsplash.com/premium_photo-1681558314163-6b2bf9316d94?w=800&q=80",
    rating: 5,
    reviews: 134,
    badges: ["sale"],
    discount: 22
  },
  {
    id: 190,
    name: "Modern Geometric Wall Clock – Silent Gold 60cm",
    category: "Interior Decor",
    price: 42000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1698861299194-a433039dfd2f?w=800&q=80",
    rating: 4.5,
    reviews: 98,
    badges: ["new"],
    discount: null
  },

  // ==========================================
  // DOORS & WINDOWS (9 Products)
  // ==========================================
  {
    id: 86,
    name: "Modern Minimalist Entry Door – Matte Black Steel",
    category: "Doors & Windows",
    price: 285000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1677833638083-6e5138b718c4?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },
  {
    id: 88,
    name: "Floor-to-Ceiling Glass Window Panel – Black Frame",
    category: "Doors & Windows",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1496092607007-ca127e0b6a10?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    reviews: 134,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 90,
    name: "Arched Gothic Window – Decorative Iron Frame",
    category: "Doors & Windows",
    price: 225000,
    oldPrice: 300000,
    image: "https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,
    reviews: 78,
    badges: ["sale"],
    discount: 25
  },
  {
    id: 94,
    name: "Classic Solid Wood Entry Door – Dark Walnut",
    category: "Doors & Windows",
    price: 195000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1683129719276-4e7ce97627cc?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    reviews: 167,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 97,
    name: "Rustic Green Double Entry Door – Farmhouse Style",
    category: "Doors & Windows",
    price: 285000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1647742313929-719f3d6e4a3b?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },
  {
    id: 98,
    name: "Hand-Carved Ornate Wooden Door – Antique Brown",
    category: "Doors & Windows",
    price: 385000,
    oldPrice: 494000,
    image: "https://images.unsplash.com/photo-1729649232543-99f541d806eb?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    reviews: 112,
    badges: ["sale"],
    discount: 22
  },
  {
    id: 100,
    name: "Bay Window Set with Seating – White Wood Frame",
    category: "Doors & Windows",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1642428670090-6da936be333a?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    reviews: 145,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 197,
    name: "Oversized Pivot Entry Door – Luxury Wood Finish",
    category: "Doors & Windows",
    price: 685000,
    oldPrice: null,
    image: "https://i.pinimg.com/736x/4b/c5/96/4bc5961f9c0af43fc2ca1f8fc35fc6b4.jpg",
    rating: 5,
    reviews: 78,
    badges: ["new"],
    discount: null
  },
  {
    id: 199,
    name: "Grand Double Entry Door – Solid Wood Carved",
    category: "Doors & Windows",
    price: 750000,
    oldPrice: 1000000,
    image: "https://i.pinimg.com/1200x/19/c4/17/19c417691304b674c3241c689f7f6e96.jpg",
    rating: 5,
    reviews: 134,
    badges: ["sale", "bestseller"],
    discount: 25
  },

  // ==========================================
  // OFFICE FURNITURE (8 Products)
  // ==========================================
  {
    id: 8,
    name: "Ergonomic Home Office Chair – Mesh Back",
    category: "Office Furniture",
    price: 68900,
    oldPrice: null,
    image: "https://www.content.upliftdesk.com/content/img/product/RAY344/blk.jpg?compression=lossy",
    rating: 5,
    reviews: 234,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 101,
    name: "Executive L-Shaped Office Desk – Walnut Finish",
    category: "Office Furniture",
    price: 385000,
    oldPrice: 515000,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    rating: 5,
    reviews: 156,
    badges: ["sale"],
    discount: 25
  },
  {
    id: 102,
    name: "Ergonomic Mesh Office Chair – Lumbar Support Black",
    category: "Office Furniture",
    price: 125000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    rating: 5,
    reviews: 312,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 103,
    name: "Electric Height Adjustable Standing Desk – White",
    category: "Office Furniture",
    price: 295000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    rating: 4.5,
    reviews: 189,
    badges: ["new", "hot"],
    discount: null
  },
  {
    id: 108,
    name: "8-Person Conference Table – Modern Walnut",
    category: "Office Furniture",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    rating: 5,
    reviews: 134,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 111,
    name: "RGB Gaming Desk with Cable Management – Carbon",
    category: "Office Furniture",
    price: 225000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    rating: 4.5,
    reviews: 178,
    badges: ["new", "hot"],
    discount: null
  },
  {
    id: 113,
    name: "Modern Reception Desk – High Gloss White",
    category: "Office Furniture",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    rating: 5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },
  {
    id: 210,
    name: "Executive Manager Desk with Side Return – Walnut",
    category: "Office Furniture",
    price: 425000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    reviews: 145,
    badges: ["bestseller"],
    discount: null
  }
];

// ==========================================
// SETTINGS
// ==========================================
const PRODUCTS_PER_PAGE = 15;
let currentPage = 1;

// ==========================================
// INITIALIZE PAGE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
});

// ==========================================
// RENDER PRODUCTS
// ==========================================
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  
  // Calculate which products to show
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productsToShow = allProducts.slice(startIndex, endIndex);

  // Build HTML for products
  let html = '';
  
  for (let i = 0; i < productsToShow.length; i++) {
    const product = productsToShow[i];
    html += createProductCard(product);
  }

  productGrid.innerHTML = html;

  // Update results count
  updateResultsCount(startIndex, endIndex);

  // Render pagination
  renderPagination();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// CREATE PRODUCT CARD
// ==========================================
function createProductCard(product) {
  // Create stars HTML
  let starsHtml = '';
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalfStar) {
    starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="fa-regular fa-star"></i>';
  }

  // Create badges HTML
  let badgesHtml = '';
  if (product.badges && product.badges.length > 0) {
    badgesHtml = '<div class="product-badges">';
    for (let i = 0; i < product.badges.length; i++) {
      const badge = product.badges[i];
      if (badge === 'sale' && product.discount) {
        badgesHtml += '<span class="badge sale">-' + product.discount + '%</span>';
      } else if (badge === 'new') {
        badgesHtml += '<span class="badge new">New</span>';
      } else if (badge === 'hot') {
        badgesHtml += '<span class="badge hot">Hot</span>';
      } else if (badge === 'bestseller') {
        badgesHtml += '<span class="badge bestseller">Bestseller</span>';
      }
    }
    badgesHtml += '</div>';
  }

  // Create price HTML
  let priceHtml = '<span class="price">₦' + product.price.toLocaleString() + '</span>';
  if (product.oldPrice) {
    priceHtml += ' <span class="old-price">₦' + product.oldPrice.toLocaleString() + '</span>';
  }

  // Return complete card HTML
  return `
    <div class="product-card">
      ${badgesHtml}
      <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
      <a href="product.html?id=${product.id}" class="product-link">
        <div class="product-img-container">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <div class="product-name">${product.name}</div>
          <div class="product-rating">
            <span class="stars">${starsHtml}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-prices">${priceHtml}</div>
        </div>
      </a>
      <button class="add-to-cart-btn"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
    </div>
  `;
}

// ==========================================
// UPDATE RESULTS COUNT
// ==========================================
function updateResultsCount(startIndex, endIndex) {
  const resultsCount = document.getElementById('resultsCount');
  const total = allProducts.length;
  const showing = Math.min(endIndex, total);
  
  resultsCount.innerHTML = 'Showing <strong>' + (startIndex + 1) + '-' + showing + '</strong> of <strong>' + total + '</strong> products';
}

// ==========================================
// RENDER PAGINATION
// ==========================================
function renderPagination() {
  const pagination = document.getElementById('pagination');
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  
  let html = '';

  // Previous Button
  if (currentPage === 1) {
    html += '<button class="page-btn prev" disabled><i class="fa-solid fa-chevron-left"></i> Previous</button>';
  } else {
    html += '<button class="page-btn prev" onclick="goToPage(' + (currentPage - 1) + ')"><i class="fa-solid fa-chevron-left"></i> Previous</button>';
  }

  // Page Numbers
  html += '<div class="page-numbers">';
  
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += '<button class="page-num active">' + i + '</button>';
    } else {
      html += '<button class="page-num" onclick="goToPage(' + i + ')">' + i + '</button>';
    }
  }
  
  html += '</div>';

  // Next Button
  if (currentPage === totalPages) {
    html += '<button class="page-btn next" disabled>Next <i class="fa-solid fa-chevron-right"></i></button>';
  } else {
    html += '<button class="page-btn next" onclick="goToPage(' + (currentPage + 1) + ')">Next <i class="fa-solid fa-chevron-right"></i></button>';
  }

  pagination.innerHTML = html;
}

// ==========================================
// GO TO PAGE
// ==========================================
function goToPage(pageNumber) {
  currentPage = pageNumber;
  renderProducts();
}
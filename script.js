// Put this in script.js (or in a <script> tag at bottom of both pages)

document.addEventListener('DOMContentLoaded', () => {
  // Find search input (same on both pages)
  const searchInput = document.querySelector('.search-bar input');
  if (!searchInput) return;

  // Try to find homepage grid first, then fallback to shop grid
  let productGrid = document.getElementById('flashSalesGrid') || 
                    document.getElementById('productGrid');

  if (!productGrid) return; // no grid on this page → do nothing

  const productCards = productGrid.querySelectorAll('.product-card');

  // Only run search if we actually found cards
  if (productCards.length === 0) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    productCards.forEach(card => {
      const nameElement = card.querySelector('.product-name');
      if (!nameElement) return;

      const nameText = nameElement.textContent.toLowerCase();

      // Show if matches or search is empty
      card.style.display = nameText.includes(query) || query === '' ? '' : 'none';
    });
  });

  // Optional: clear search when input is empty (visual feedback)
  searchInput.addEventListener('search', () => {
    productCards.forEach(card => card.style.display = '');
  });
});

  const clearBtn = document.querySelector('.clear-search');
searchInput.addEventListener('input', (e) => {
  clearBtn.style.display = e.target.value ? 'block' : 'none';
  // ... rest of filter code
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  // trigger filter to show all
  productCards.forEach(card => card.style.display = 'block');
});


// products.js - Store all product data here


const products = [
  {
    id: 1,
    name: "Modern Chesterfield 3-Seater Sofa – Faux Leather",
    price: 285000,
    oldPrice: 420000,
    image: "https://m.media-amazon.com/images/I/8108kcQAkaL._AC_UF894,1000_QL80_.jpg",
    category: "Sofas & Living Room",
    description: "Elevate your living room with this stunning Modern Chesterfield 3-Seater Sofa. Crafted with premium faux leather upholstery, this sofa combines classic elegance with contemporary comfort. The deep button-tufted back and rolled arms create a timeless look that suits any home décor.",
    dimensions: "Length: 220cm | Depth: 85cm | Height: 75cm",
    stock: 15
  },
  {
    id: 2,
    name: "Contemporary Living Room Sofa Set (3+2)",
    price: 395000,
    oldPrice: null,
    image: "https://www.coasterfurniture.com/wp-content/uploads/gano-living-room-set.png",
    category: "Sofas & Living Room",
    description: "Transform your living space with this elegant Contemporary Living Room Sofa Set. This 3+2 combination includes a spacious 3-seater and a cozy 2-seater, perfect for family gatherings and entertaining guests. Modern design meets exceptional comfort.",
    dimensions: "3-Seater: 200cm x 85cm x 80cm | 2-Seater: 150cm x 85cm x 80cm",
    stock: 8
  },
  {
    id: 3,
    name: "9-Piece Extendable Dining Table Set – Solid Wood",
    price: 480000,
    oldPrice: 650000,
    image: "https://m.media-amazon.com/images/I/818vNipOGKL.jpg",
    category: "Dining Sets",
    description: "Host memorable dinner parties with this magnificent 9-Piece Extendable Dining Table Set. Crafted from solid wood, this set includes one extendable dining table and eight matching chairs. The rich finish adds warmth and sophistication to your dining area.",
    dimensions: "Table: 180-220cm x 100cm x 76cm | Chair: 45cm x 50cm x 95cm",
    stock: 5
  },
  {
    id: 4,
    name: "Queen Size Upholstered Platform Bed – Beige",
    price: 195000,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/81imf690CRL._AC_UF894,1000_QL80_.jpg",
    category: "Beds & Bedroom",
    description: "Sleep in style with this luxurious Queen Size Upholstered Platform Bed. The soft beige fabric headboard adds a touch of elegance to your bedroom while providing comfortable back support for reading or watching TV in bed.",
    dimensions: "Length: 210cm | Width: 160cm | Headboard Height: 120cm",
    stock: 12
  },
  {
    id: 5,
    name: "4-Door Sliding Wardrobe with Mirror – Walnut",
    price: 320000,
    oldPrice: 450000,
    image: "https://futonland.com/common/images/products2/large/PI-8206M-WRD-MC.jpg",
    category: "Wardrobes",
    description: "Maximize your storage space with this stunning 4-Door Sliding Wardrobe. The built-in mirrors add depth to your room while serving a practical purpose. The walnut finish brings warmth and sophistication to your bedroom.",
    dimensions: "Width: 250cm | Depth: 60cm | Height: 220cm",
    stock: 6
  },
  {
    id: 6,
    name: "Modern Glass Top Coffee Table with Storage",
    price: 85000,
    oldPrice: null,
    image: "https://www.expressfurniture.net/wp-content/uploads/2021/06/426449_791x633_01.jpg",
    category: "Interior Decor",
    description: "Add a modern touch to your living room with this sleek Glass Top Coffee Table. The tempered glass surface sits atop a stylish base with convenient storage space for magazines, remotes, and decorative items.",
    dimensions: "Length: 120cm | Width: 60cm | Height: 45cm",
    stock: 20
  },
  {
    id: 7,
    name: "Floating TV Stand – 55-65 inch – Oak Finish",
    price: 145000,
    oldPrice: 210000,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/805c58fd-4f3f-40be-9979-e7be40caf4cd.__CR0,188,1500,1125_PT0_SX800_V1___.jpg",
    category: "Home Entertainment",
    description: "Create a clean, modern look with this Floating TV Stand. Wall-mounted design saves floor space while providing ample storage for your entertainment devices. The oak finish adds natural warmth to your living room.",
    dimensions: "Width: 180cm | Depth: 35cm | Height: 30cm",
    stock: 10
  },
  {
    id: 8,
    name: "Ergonomic Home Office Chair – Mesh Back",
    price: 68900,
    oldPrice: null,
    image: "https://www.content.upliftdesk.com/content/img/product/RAY344/blk.jpg?compression=lossy",
    category: "Office Furniture",
    description: "Work comfortably all day with this Ergonomic Home Office Chair. The breathable mesh back keeps you cool while the adjustable features ensure perfect posture. Ideal for home offices and long working hours.",
    dimensions: "Seat Width: 50cm | Seat Depth: 45cm | Height: 95-105cm",
    stock: 25
  },
  {
    id: 9,
    name: "5-Tier Modern Bookshelf – Oak",
    price: 112000,
    oldPrice: 158000,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/969f5713-23c1-4057-81fc-033a8cd71c68.__CR0,0,2910,1800_PT0_SX970_V1___.jpg",
    category: "Office Furniture",
    description: "Organize your books and display your favorite items with this 5-Tier Modern Bookshelf. The oak finish and clean lines complement any room style. Perfect for living rooms, home offices, or bedrooms.",
    dimensions: "Width: 80cm | Depth: 30cm | Height: 180cm",
    stock: 14
  },
  {
    id: 10,
    name: "Single Recliner Armchair – Leather Finish",
    price: 165000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    category: "Sofas & Living Room",
    description: "Relax in ultimate comfort with this Single Recliner Armchair. The leather finish adds a touch of luxury while the reclining mechanism lets you find your perfect relaxation angle. Perfect for reading, watching TV, or afternoon naps.",
    dimensions: "Width: 85cm | Depth: 90-150cm | Height: 100cm",
    stock: 9
  },
  {
    id: 11,
    name: "Modern Chesterfield 3-Seater Sofa – Faux Leather",
    price: 285000,
    oldPrice: 420000,
    image: "https://m.media-amazon.com/images/I/8108kcQAkaL._AC_UF894,1000_QL80_.jpg",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Elevate your living room with this stunning Modern Chesterfield 3-Seater Sofa. Crafted with premium faux leather upholstery, deep button-tufted back, and rolled arms for timeless elegance and comfort.",
    dimensions: "220cm × 90cm × 85cm",
    stock: 18
  },
  {
    id: 12,
    name: "Contemporary Living Room Sofa Set (3+2) – Gray Fabric",
    price: 395000,
    oldPrice: null,
    image: "https://www.coasterfurniture.com/wp-content/uploads/gano-living-room-set.png",
    category: "Sofas & Living Room",
    brand: "Coaster",
    description: "Spacious and stylish 3+2 sofa set in soft gray fabric. Perfect for family gatherings with plush seating and modern design.",
    dimensions: "3-Seater: 200cm × 85cm × 80cm | 2-Seater: 150cm × 85cm × 80cm",
    stock: 10
  },
  {
    id: 13,
    name: "L-Shaped Sectional Sofa with Chaise – Dark Gray",
    price: 550000,
    oldPrice: 735000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Ashley Furniture",
    description: "Versatile L-shaped sectional with chaise lounge in durable dark gray fabric. Ideal for large families or open-plan living spaces.",
    dimensions: "280cm × 160cm × 85cm (configurable)",
    stock: 7
  },
  {
    id: 14,
    name: "Single Recliner Armchair – Leather Finish Brown",
    price: 165000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Homelegance",
    description: "Comfortable single recliner armchair with rich brown leather finish and smooth manual reclining mechanism.",
    dimensions: "85cm × 90-150cm × 100cm",
    stock: 12
  },
  {
    id: 15,
    name: "Modern 2-Seater Loveseat – Velvet Blue",
    price: 195000,
    oldPrice: 245000,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Elegant 2-seater loveseat in luxurious velvet blue fabric. Perfect accent piece for modern living rooms or cozy corners.",
    dimensions: "150cm × 85cm × 80cm",
    stock: 9
  },
  {
    id: 16,
    name: "Mid-Century Modern 3-Seater Sofa – Mustard Yellow",
    price: 320000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Signature Design",
    description: "Bold mid-century 3-seater sofa in vibrant mustard yellow. Tapered wooden legs and clean lines for a retro-contemporary look.",
    dimensions: "210cm × 80cm × 78cm",
    stock: 6
  },
  {
    id: 17,
    name: "Complete Living Room Set (3+2+1) – Premium Leather",
    price: 680000,
    oldPrice: 970000,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Ashley Furniture",
    description: "Luxurious full living room set (3-seater + 2-seater + armchair) in premium black leather. Timeless comfort and high-end style.",
    dimensions: "3-Seater: 220cm × 90cm × 85cm | 2-Seater: 170cm × 90cm × 85cm | Armchair: 90cm × 90cm × 85cm",
    stock: 4
  },
  {
    id: 18,
    name: "Modern Accent Armchair – Fabric Beige",
    price: 89000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Versatile modern accent armchair in neutral beige fabric. Sleek design that complements any living room or bedroom setup.",
    dimensions: "75cm × 80cm × 85cm",
    stock: 20
  },
  {
    id: 19,
    name: "U-Shaped Modular Sectional – 7 Seater Gray",
    price: 750000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Coaster",
    description: "Large U-shaped modular sectional sofa for 7 people. Flexible layout in soft gray fabric – ideal for big families or entertaining.",
    dimensions: "350cm × 250cm × 85cm (configurable)",
    stock: 5
  },
  {
    id: 20,
    name: "Scandinavian Style 3-Seater Sofa – Light Gray",
    price: 245000,
    oldPrice: 290000,
    image: "https://images.unsplash.com/photo-1491926626787-62db157af940?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Signature Design",
    description: "Minimalist Scandinavian 3-seater sofa in light gray. Clean lines and airy feel perfect for modern Nordic-inspired interiors.",
    dimensions: "205cm × 85cm × 78cm",
    stock: 11
  },
  {
    id: 21,
    name: "Power Reclining Sofa with USB – Black Leather",
    price: 385000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Ashley Furniture",
    description: "Power reclining 3-seater sofa in black leather with built-in USB ports. Ultimate comfort for movie nights or relaxing.",
    dimensions: "220cm × 95-170cm × 100cm",
    stock: 8
  },
  {
    id: 22,
    name: "Storage Ottoman Bench – Velvet Green",
    price: 45000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Stylish velvet green storage ottoman bench. Doubles as extra seating and hidden storage for blankets, remotes, or toys.",
    dimensions: "100cm × 50cm × 45cm",
    stock: 25
  }
];

// Function to get product by ID
// function getProductById(id) {
//   return products.find(product => product.id === parseInt(id));
// }

// Function to format price in Naira
function formatPrice(price) {
  return "₦" + price.toLocaleString();
}

function redirect(){
  window.location.href = "shop.html"
}
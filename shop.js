 
// PRODUCT DATA
 
const allProducts = [
  // SOFAS & LIVING ROOM
  {
    id: 11,
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
    id: 12,
    name: "Contemporary Living Room Sofa Set (3+2) – Gray",
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
    id: 15,
    name: "Modern 2-Seater Loveseat – Velvet Blue",
    category: "Sofas & Living Room",
    price: 195000,
    oldPrice: 245000,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    rating: 4,
    reviews: 54,
    badges: ["sale"],
    discount: 20
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

  // DINING SETS
  {
    id: 23,
    name: "8-Seater Solid Wood Dining Table – Natural Brown",
    category: "Dining Sets",
    price: 480000,
    oldPrice: 650000,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    rating: 4.5,
    reviews: 94,
    badges: ["sale"],
    discount: 28
  },
  {
    id: 24,
    name: "6-Seater Modern Dining Set – White with Wood Accents",
    category: "Dining Sets",
    price: 420000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    rating: 5,
    reviews: 112,
    badges: ["new"],
    discount: null
  },
  {
    id: 25,
    name: "4-Seater Round Wooden Dining Set – Light Oak",
    category: "Dining Sets",
    price: 320000,
    oldPrice: 390000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    rating: 4.5,
    reviews: 76,
    badges: ["sale"],
    discount: 18
  },
  {
    id: 26,
    name: "6-Seater Rustic Farmhouse Table – Reclaimed Wood",
    category: "Dining Sets",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80",
    rating: 4,
    reviews: 65,
    badges: [],
    discount: null
  },
  {
    id: 29,
    name: "6-Seater Glass Top Dining Table – Chrome Base",
    category: "Dining Sets",
    price: 290000,
    oldPrice: 450000,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53b55e5c?w=800&q=80",
    rating: 4,
    reviews: 67,
    badges: ["sale"],
    discount: 35
  },
  {
    id: 35,
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

  // BEDS & BEDROOM
  {
    id: 38,
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
    id: 39,
    name: "Queen Size Wooden Bed Frame – Natural Walnut",
    category: "Beds & Bedroom",
    price: 295000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80",
    rating: 5,
    reviews: 203,
    badges: ["new"],
    discount: null
  },
  {
    id: 40,
    name: "Complete Bedroom Set – King Bed + 2 Nightstands White",
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
    id: 41,
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
    id: 44,
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
    id: 45,
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

  // WARDROBES
  {
    id: 53,
    name: "4-Door Sliding Wardrobe with Mirror – Walnut",
    category: "Wardrobes",
    price: 320000,
    oldPrice: 450000,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    rating: 4.5,
    reviews: 89,
    badges: ["sale"],
    discount: 25
  },
  {
    id: 54,
    name: "6-Door Walk-in Wardrobe System – White",
    category: "Wardrobes",
    price: 850000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
    rating: 5,
    reviews: 178,
    badges: ["bestseller"],
    discount: null
  },
  {
    id: 55,
    name: "6-Drawer Dresser with Mirror – Elegant White",
    category: "Wardrobes",
    price: 280000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    rating: 4.5,
    reviews: 134,
    badges: [],
    discount: null
  },

  // Interior Decor
  {
    id: 60,
    name: "Modern Glass Top Coffee Table with Storage",
    category: "Interior Decor",
    price: 85000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    rating: 4,
    reviews: 67,
    badges: ["new"],
    discount: null
  },
  {
    id: 61,
    name: "Rustic Wooden Coffee Table – Reclaimed Oak",
    category: "Interior Decor",
    price: 95000,
    oldPrice: 120000,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
    rating: 4,
    reviews: 78,
    badges: ["sale"],
    discount: 20
  },
  {
    id: 62,
    name: "Round Marble Coffee Table – Gold Metal Base",
    category: "Interior Decor",
    price: 135000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80",
    rating: 5,
    reviews: 89,
    badges: ["new"],
    discount: null
  },

  // Home Entertainment
  {
    id: 65,
    name: "Floating TV Stand – 55-65 inch – Oak Finish",
    category: "Home Entertainment",
    price: 145000,
    oldPrice: 210000,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    rating: 4.5,
    reviews: 112,
    badges: ["sale"],
    discount: 30
  },
  {
    id: 66,
    name: "Full Wall Entertainment Center – Walnut",
    category: "Home Entertainment",
    price: 380000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    rating: 4.5,
    reviews: 145,
    badges: ["new", "hot"],
    discount: null
  },
  {
    id: 67,
    name: "Corner TV Stand with LED Lights – White",
    category: "Home Entertainment",
    price: 165000,
    oldPrice: 200000,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    rating: 4,
    reviews: 67,
    badges: ["sale"],
    discount: 18
  },

  // OFFICE FURNITURE
  {
    id: 70,
    name: "Ergonomic Home Office Chair – Mesh Back",
    category: "Office Furniture",
    price: 68900,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    rating: 5,
    reviews: 234,
    badges: [],
    discount: null
  },
  {
    id: 71,
    name: "Executive L-Shaped Desk with Drawers – Dark Oak",
    category: "Office Furniture",
    price: 245000,
    oldPrice: 290000,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    rating: 5,
    reviews: 98,
    badges: ["sale"],
    discount: 15
  },
  {
    id: 72,
    name: "5-Tier Modern Bookshelf – Industrial Oak",
    category: "Office Furniture",
    price: 112000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    rating: 4,
    reviews: 56,
    badges: [],
    discount: null
  },
  {
    id: 73,
    name: "Electric Standing Desk – Adjustable Height White",
    category: "Office Furniture",
    price: 320000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    rating: 4.5,
    reviews: 87,
    badges: ["new"],
    discount: null
  },
  {
    id: 74,
    name: "Gaming Chair – Ergonomic Racing Style Black/Red",
    category: "Office Furniture",
    price: 125000,
    oldPrice: 165000,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    rating: 4.5,
    reviews: 198,
    badges: ["sale", "hot"],
    discount: 24
  },
  {
    id: 75,
    name: "Filing Cabinet 3-Drawer – Steel Gray",
    category: "Office Furniture",
    price: 78000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    rating: 4,
    reviews: 45,
    badges: [],
    discount: null
  }
];

 
// SETTINGS
 
const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;

 
// INITIALIZE PAGE
 
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
});

 
// RENDER PRODUCTS
 
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

 
// CREATE PRODUCT CARD
 
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
  if (product.badges.length > 0) {
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

 
// UPDATE RESULTS COUNT
 
function updateResultsCount(startIndex, endIndex) {
  const resultsCount = document.getElementById('resultsCount');
  const total = allProducts.length;
  const showing = Math.min(endIndex, total);
  
  resultsCount.innerHTML = 'Showing <strong>' + (startIndex + 1) + '-' + showing + '</strong> of <strong>' + total + '</strong> products';
}

 
// RENDER PAGINATION
 
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

 
// GO TO PAGE
 
function goToPage(pageNumber) {
  currentPage = pageNumber;
  renderProducts();
}
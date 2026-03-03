const targetDate = new Date("March 7, 2026 23:59:59").getTime();

function countdown(){
  const now = new Date().getTime();
  const distance = targetDate - now;

  const day = document.getElementById("days");
  const hour = document.getElementById("hours");
  const minute = document.getElementById("minutes");
  const second = document.getElementById("seconds");

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % ( 1000 * 60)) / 1000);

  (days < 10) ? day.textContent = "0" + days : day.textContent = days;
  (hours < 10) ? hour.textContent = "0" + hours : hour.textContent = hours;
  (minutes < 10) ? minute.textContent = "0" + minutes : minute.textContent = minutes;
  (seconds < 10) ? second.textContent = "0" + seconds : second.textContent = seconds;

  if(distance < 0){
    day.textContent = "00";
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
  }
}

const countdownInterval = setInterval(countdown, 1000);


// ==========================================
// NEWSLETTER SIGNUP - SIMPLE VERSION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Get the button and email input
  const signUpBtn = document.querySelector('.newsletter button.normal');
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  
  // If button exists, add click event
  if (signUpBtn) {
    
    signUpBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Stop page from refreshing
      
      // Get the email value
      const email = emailInput.value.trim();
      
      // Check if email is empty
      if (email === '') {
        alert('⚠️ Please enter your email address');
        return;
      }
      
      // Check if email has @ and . (simple validation)
      if (!email.includes('@') || !email.includes('.')) {
        alert('⚠️ Please enter a valid email address');
        return;
      }
      
      // Success! Show thank you message
      alert('🎉 Thank you for subscribing!\n\nYou will receive exclusive deals and updates at:\n' + email);
      
      // Clear the input
      emailInput.value = '';
      
    });
  }
  
});


// ============ PRODUCT DATABASE ============
const allProducts = [
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
    image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&q=80",
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
  },
  {
    id: 23,
    name: "Modular Corner Sofa – Light Beige Fabric",
    price: 620000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Flexible modular corner sofa in light beige fabric. Customizable layout with deep seating and modern design – perfect for large living spaces.",
    dimensions: "320cm × 220cm × 85cm (configurable)",
    stock: 6
  },
  {
    id: 24,
    name: "Grey Fabric Sectional Sofa with Chaise – 5 Seater",
    price: 580000,
    oldPrice: 780000,
    image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Ashley Furniture",
    description: "Spacious 5-seater sectional with chaise in soft grey fabric. Reversible chaise and plush cushions for ultimate comfort and flexibility.",
    dimensions: "300cm × 180cm × 85cm",
    stock: 5
  },
  {
    id: 25,
    name: "Velvet Green 3-Seater Sofa – Tufted Back",
    price: 410000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Signature Design",
    description: "Elegant 3-seater sofa in rich velvet green with classic tufted back design. Luxurious texture and deep seating for a sophisticated living room.",
    dimensions: "210cm × 90cm × 85cm",
    stock: 8
  },
 {
    id: 26,
    name: "8-Seater Solid Wood Dining Table – Natural Brown",
    price: 480000,
    oldPrice: 650000,
    image: "https://m.media-amazon.com/images/I/51cSjmsCEKL._AC_UF894,1000_QL80_.jpg",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Elegant 8-seater solid wood dining table with rich natural brown finish. Sturdy legs and smooth surface make it perfect for large family meals or gatherings.",
    dimensions: "240cm × 100cm × 76cm",
    stock: 8
  },
  {
    id: 27,
    name: "6-Seater Modern Dining Set – White with Wood Accents",
    price: 420000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    category: "Dining Sets",
    brand: "Coaster",
    description: "Sleek modern 6-seater dining set in crisp white with warm wood accent legs. Clean lines and contemporary design brighten any dining space.",
    dimensions: "Table: 180cm × 90cm × 75cm | Chairs: 45cm × 50cm × 95cm",
    stock: 12
  },
  {
    id: 28,
    name: "4-Seater Round Wooden Dining Set – Light Oak",
    price: 320000,
    oldPrice: 390000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    category: "Dining Sets",
    brand: "Ashley Furniture",
    description: "Cozy round 4-seater dining set in light oak finish. Space-saving circular design with comfortable chairs – ideal for small to medium dining areas.",
    dimensions: "Table diameter: 120cm × 76cm | Chairs: 45cm × 50cm × 90cm",
    stock: 10
  },
  {
    id: 29,
    name: "6-Seater Rustic Farmhouse Table – Reclaimed Wood",
    price: 520000,
    oldPrice: null,
    image: "https://i.etsystatic.com/7407610/r/il/58f2df/4039016457/il_fullxfull.4039016457_kgws.jpg",
    category: "Dining Sets",
    brand: "Signature Design",
    description: "Authentic rustic farmhouse 6-seater dining table made from reclaimed wood. Distressed finish adds character and warmth to casual or farmhouse-style dining rooms.",
    dimensions: "200cm × 100cm × 78cm",
    stock: 7
  },
  {
    id: 30,
    name: "4-Seater Minimalist Dining Set – Scandinavian White",
    price: 280000,
    oldPrice: 360000,
    image: "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/06/Scandinavian-dining-room-with-light-wood-tones.jpg?width=900",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Minimalist 4-seater dining set in bright Scandinavian white. Clean, airy design with light wood tones – perfect for modern Nordic or contemporary homes.",
    dimensions: "Table: 140cm × 80cm × 75cm | Chairs: 42cm × 48cm × 90cm",
    stock: 9
  },
  {
    id: 31,
    name: "8-Seater Elegant Formal Dining Set – Dark Walnut",
    price: 780000,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/I/818vNipOGKL.jpg",
    category: "Dining Sets",
    brand: "Homelegance",
    description: "Sophisticated 8-seater formal dining set in deep dark walnut finish. Classic detailing and luxurious feel – ideal for elegant dining rooms.",
    dimensions: "Table: 240cm × 110cm × 76cm | Chairs: 48cm × 52cm × 98cm",
    stock: 5
  },
  {
    id: 32,
    name: "6-Seater Glass Top Dining Table – Chrome Base",
    price: 290000,
    oldPrice: 450000,
    image: "https://cdn11.bigcommerce.com/s-3uyyclsi/images/stencil/original/products/509/8156/CR110401-S5_21-1__75716.1724256294.jpg?c=2",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Modern 6-seater dining set with clear tempered glass top and polished chrome base. Opens up the space visually and adds a sleek contemporary touch.",
    dimensions: "Table: 180cm × 90cm × 75cm | Chairs: 45cm × 50cm × 92cm",
    stock: 11
  },
  {
    id: 33,
    name: "6-Seater Industrial Dining Set – Metal & Wood",
    price: 380000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
    category: "Dining Sets",
    brand: "Coaster",
    description: "Bold industrial 6-seater dining set combining black metal frame with natural wood top. Urban loft style with rugged yet stylish appeal.",
    dimensions: "Table: 190cm × 95cm × 76cm | Chairs: 44cm × 50cm × 90cm",
    stock: 8
  },
  {
    id: 34,
    name: "4-Seater Round Marble Top Dining Set – Gold Base",
    price: 460000,
    oldPrice: null,
    image: "https://www.lunafurn.com/cdn/shop/files/Vida-6-Piece-White-Marble-Dining-Set-Table-4-Side-Chairs-Luna-Furniture-27076204429366.jpg?v=1768306987&width=1645",
    category: "Dining Sets",
    brand: "Signature Design",
    description: "Luxurious round 4-seater dining set with elegant white marble top and shiny gold base. Sophisticated centerpiece for modern or upscale dining rooms.",
    dimensions: "Table diameter: 130cm × 76cm | Chairs: 46cm × 50cm × 95cm",
    stock: 6
  },
  {
    id: 35,
    name: "6-8 Seater Extendable Dining Table – Modern White",
    price: 380000,
    oldPrice: 620000,
    image: "https://images.unsplash.com/photo-1615066390971-03e4e3400c09?w=800&q=80",
    category: "Dining Sets",
    brand: "Ashley Furniture",
    description: "Versatile extendable dining table (6–8 seats) in clean modern white finish. Leaf extension for extra guests – ideal for flexible family dining.",
    dimensions: "160–220cm × 90cm × 75cm (extended)",
    stock: 9
  },
  {
    id: 36,
    name: "4-Seater Kitchen Breakfast Nook Set – Natural Wood",
    price: 310000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Cozy 4-seater breakfast nook set in warm natural wood. Compact and functional design – perfect for kitchens or small dining areas.",
    dimensions: "Table: 120cm × 80cm × 75cm | Benches/Chairs: built-in style",
    stock: 14
  },
  {
    id: 37,
    name: "6-Seater Contemporary Dining Set – Warm Walnut",
    price: 350000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
    category: "Dining Sets",
    brand: "Coaster",
    description: "Elegant 6-seater contemporary dining set in rich warm walnut finish. Clean lines, comfortable chairs, and timeless appeal for everyday dining.",
    dimensions: "Table: 180cm × 90cm × 76cm | Chairs: 45cm × 50cm × 94cm",
    stock: 10
  },
  {
    id: 38,
    name: "6-Seater Mid-Century Dining Set – Teak Wood",
    price: 720000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=800&q=80",
    category: "Dining Sets",
    brand: "Ashley Furniture",
    description: "Mid-century modern 6-seater dining set in premium teak wood. Tapered legs and organic shapes create a warm, timeless dining experience.",
    dimensions: "Table: 190cm × 95cm × 75cm | Chairs: 44cm × 48cm × 90cm",
    stock: 5
  },
  {
    id: 39,
    name: "6-Seater Outdoor Patio Dining Set – Weather Resistant",
    price: 420000,
    oldPrice: 600000,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    category: "Dining Sets",
    brand: "Signature Design",
    description: "Durable 6-seater outdoor patio dining set built to withstand weather. Stylish and practical for balconies, terraces, gardens or poolside dining.",
    dimensions: "Table: 180cm × 90cm × 75cm | Chairs: 46cm × 52cm × 90cm",
    stock: 7
  },
  {
    id: 40,
    name: "8-Seater Luxury Dining Set – Velvet Upholstered Chairs",
    price: 1250000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    category: "Dining Sets",
    brand: "Homelegance",
    description: "Opulent 8-seater luxury dining set with plush velvet-upholstered chairs. Grand scale, elegant detailing, and high-end comfort for formal dining.",
    dimensions: "Table: 260cm × 110cm × 78cm | Chairs: 50cm × 55cm × 100cm",
    stock: 4
  },
  {
    id: 41,
    name: "King Size Platform Bed – Upholstered Gray Fabric",
    price: 380000,
    oldPrice: 510000,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Sleek king-size platform bed with soft gray upholstered headboard and low-profile frame. Modern minimalist design with excellent mattress support and clean lines for contemporary bedrooms.",
    dimensions: "210cm × 200cm × 35cm (platform height) | Headboard: 120cm",
    stock: 9
  },
  {
    id: 42,
    name: "Queen Size Wooden Bed Frame – Natural Walnut Finish",
    price: 295000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Ashley Furniture",
    description: "Elegant queen-size wooden bed frame in warm natural walnut finish. Sturdy solid wood construction with timeless panel headboard – perfect for classic or transitional bedrooms.",
    dimensions: "Queen: 205cm × 160cm × 35cm | Headboard: 110cm height",
    stock: 12
  },
  {
    id: 43,
    name: "Complete Bedroom Set – King Bed + 2 Nightstands White",
    price: 720000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Signature Design",
    description: "Luxurious 3-piece bedroom set including king platform bed and two matching nightstands in crisp white finish. Modern design with ample storage and clean aesthetic.",
    dimensions: "Bed: 210cm × 200cm × 35cm | Nightstands: 50cm × 40cm × 60cm each",
    stock: 5
  },
  {
    id: 44,
    name: "Queen Tufted Headboard Bed – Velvet Navy Blue",
    price: 345000,
    oldPrice: 495000,
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Homelegance",
    description: "Sophisticated queen bed with deep tufted navy blue velvet headboard. Luxurious texture and elegant button detailing – ideal for romantic or upscale bedroom setups.",
    dimensions: "Queen: 205cm × 160cm × 40cm | Headboard: 130cm height",
    stock: 8
  },
  {
    id: 45,
    name: "King Storage Bed with 4 Drawers – Oak Finish",
    price: 420000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Practical king-size storage bed with 4 spacious drawers for blankets, linens, or seasonal clothing. Oak finish with modern platform design – maximizes bedroom space.",
    dimensions: "210cm × 200cm × 45cm (with drawers) | Headboard: 110cm",
    stock: 7
  },
  {
    id: 46,
    name: "Queen Minimalist Metal Bed Frame – Matte Black",
    price: 125000,
    oldPrice: 210000,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Coaster",
    description: "Sleek minimalist queen metal bed frame in matte black finish. Simple, sturdy design with no headboard – perfect for modern industrial or Scandinavian bedrooms.",
    dimensions: "Queen: 205cm × 160cm × 30cm",
    stock: 15
  },
  {
    id: 47,
    name: "Luxury 5-Piece Bedroom Set – King Bed + Dresser + Mirror",
    price: 1450000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Ashley Furniture",
    description: "Complete luxury 5-piece bedroom set including king bed, dresser, mirror, and two nightstands. Elegant design with premium finishes – transforms any bedroom into a high-end retreat.",
    dimensions: "Bed: 210cm × 200cm × 40cm | Dresser: 150cm × 45cm × 90cm",
    stock: 4
  },
  {
    id: 48,
    name: "King Floating Platform Bed – Contemporary White",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Signature Design",
    description: "Ultra-modern king floating platform bed in glossy white. Wall-mounted illusion design creates a spacious, airy feel – perfect for contemporary or minimalist bedrooms.",
    dimensions: "210cm × 200cm × 35cm | Floating height: 10cm from wall",
    stock: 6
  },
  {
    id: 49,
    name: "King Canopy Bed Frame – Romantic Gold Metal",
    price: 520000,
    oldPrice: 650000,
    image: "https://images.unsplash.com/photo-1578898886225-c7c894047899?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Homelegance",
    description: "Romantic king canopy bed frame in elegant gold metal. Graceful posts and clean lines – ideal for adding drama and luxury to any bedroom.",
    dimensions: "210cm × 200cm × 220cm (canopy height)",
    stock: 5
  },
  {
    id: 50,
    name: "Queen Upholstered Bed – Soft Beige Linen",
    price: 275000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Cozy queen upholstered bed in soft beige linen fabric. Padded headboard for comfortable back support – simple and inviting design for everyday bedrooms.",
    dimensions: "205cm × 160cm × 40cm | Headboard: 115cm",
    stock: 11
  },
  {
    id: 51,
    name: "King Panel Bed with Headboard – Dark Espresso Wood",
    price: 365000,
    oldPrice: 430000,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Coaster",
    description: "Classic king panel bed in rich dark espresso wood finish. Solid headboard and footboard design – timeless and sturdy for traditional or modern bedrooms.",
    dimensions: "210cm × 200cm × 40cm | Headboard: 130cm",
    stock: 8
  },
  {
    id: 52,
    name: "King Sleigh Bed – Traditional Cherry Wood",
    price: 580000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1558882268-85c1b3f0ede2?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Ashley Furniture",
    description: "Elegant traditional king sleigh bed in warm cherry wood. Curved headboard and footboard create a sophisticated, timeless look for classic bedrooms.",
    dimensions: "210cm × 200cm × 140cm (headboard height)",
    stock: 6
  },
  {
    id: 53,
    name: "King Modern Platform Bed with LED Lights – White Gloss",
    price: 650000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Signature Design",
    description: "Futuristic king platform bed in glossy white with built-in LED lights. Modern design with ambient lighting – perfect for contemporary or tech-savvy bedrooms.",
    dimensions: "210cm × 200cm × 35cm | LED strip lighting included",
    stock: 7
  },
  {
    id: 54,
    name: "King Rustic Bed Frame – Reclaimed Barnwood Style",
    price: 310000,
    oldPrice: 480000,
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Rustic king bed frame made from reclaimed barnwood. Distressed finish adds authentic farmhouse charm – ideal for cozy, natural bedroom designs.",
    dimensions: "210cm × 200cm × 40cm | Headboard: 120cm",
    stock: 9
  },
  {
    id: 55,
    name: "King Wingback Bed – Emerald Green Velvet",
    price: 495000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Homelegance",
    description: "Luxurious king wingback bed in rich emerald green velvet. Tall padded headboard with elegant wings – adds drama and comfort to upscale bedrooms.",
    dimensions: "210cm × 200cm × 150cm (headboard height)",
    stock: 6
  },
  {
    id: 56,
    name: "Premium Walk-in Closet System – White Organization",
    price: 850000,
    oldPrice: null,
    image: "https://s3.amazonaws.com/media.thestowcompany.com/managed_media/filer_public/57/53/575305ee-1f18-4730-836f-80bf14fa1836/ec_703.jpg",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "Complete premium walk-in closet system in clean white finish. Includes adjustable shelves, hanging rails, shoe storage, and drawers for maximum organization and accessibility in master bedrooms.",
    dimensions: "Customizable – typical setup: 300cm × 200cm × 240cm",
    stock: 4
  },
  {
    id: 57,
    name: "3-Door Hinged Wardrobe with Drawers – Classic White",
    price: 320000,
    oldPrice: 450000,
    image: "https://roomanddecor.com/cdn/shop/files/20230703_1151a31407e74831cdd88a7e6ac111e7.jpg?v=1725018522&width=1946",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Classic 3-door hinged wardrobe in timeless white finish with integrated drawers and generous hanging space. Smooth operation and elegant design – perfect for bedrooms with classic or transitional style.",
    dimensions: "180cm × 60cm × 220cm",
    stock: 8
  },
  {
    id: 58,
    name: "Industrial Open Closet System with Shelves & Rails",
    price: 265000,
    oldPrice: null,
    image: "https://www.thespruce.com/thmb/rmbYdFsfabTrrcHpUUHfbTq6DQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-14212728751-c8ab1106fd3c45ed92b042e39d38582e.jpg",
    category: "Wardrobes",
    brand: "Ashley Furniture",
    description: "Modern industrial open closet system with black metal frame and natural wood shelves. Open design for easy access, includes hanging rails and multiple storage levels – ideal for loft or urban bedrooms.",
    dimensions: "200cm × 50cm × 220cm",
    stock: 10
  },
  {
    id: 59,
    name: "4-Door Sliding Wardrobe with Mirror – Modern White",
    price: 385000,
    oldPrice: 550000,
    image: "https://www.oppoliahome.com/wp-content/uploads/2022/12/white-wardrobe-with-mirror-obw23-l03.jpg",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Spacious 4-door sliding wardrobe with full-length mirror in modern white finish. Smooth gliding doors, internal shelving, and hanging rails – maximizes space and adds light reflection to any bedroom.",
    dimensions: "240cm × 60cm × 220cm",
    stock: 7
  },
  {
    id: 60,
    name: "Fitted Built-in Wardrobe with Drawers – Oak Finish",
    price: 520000,
    oldPrice: null,
    image: "https://www.strachan.co.uk/app/uploads/bedroom-verona-english-oak31.jpg",
    category: "Wardrobes",
    brand: "Homelegance",
    description: "Custom-fitted built-in wardrobe in warm oak finish with multiple drawers, hanging sections, and shelves. Seamless wall integration for maximum storage in bedrooms or dressing areas.",
    dimensions: "Customizable – typical: 300cm × 60cm × 240cm",
    stock: 5
  },
  {
    id: 61,
    name: "Walk-in Closet with Shoe Racks & Shelves – Gray",
    price: 420000,
    oldPrice: 525000,
    image: "https://www.idfdesign.com/images/walk-in-closets/walk-in-closet-ak-14-walk-in-closet-3.jpg",
    category: "Wardrobes",
    brand: "Coaster",
    description: "Organized walk-in closet system in contemporary gray tones. Features dedicated shoe racks, adjustable shelves, hanging rails, and island unit – perfect for organized luxury.",
    dimensions: "250cm × 200cm × 240cm",
    stock: 6
  },
  {
    id: 62,
    name: "2-Door Minimalist Sliding Wardrobe – Scandinavian White",
    price: 245000,
    oldPrice: null,
    image: "https://img.interiorcompany.com/interior/webproduct/624638700372367318078.png?aio=w-1200;",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "Clean minimalist 2-door sliding wardrobe in bright Scandinavian white. Smooth operation, simple design, and efficient storage – ideal for small to medium bedrooms.",
    dimensions: "160cm × 60cm × 220cm",
    stock: 11
  },
  {
    id: 63,
    name: "6-Drawer Tall Dresser Chest – Natural Wood",
    price: 285000,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3058f48c-15db-4881-bf79-dd11319831f4.__CR0,0,800,600_PT0_SX800_V1___.png",
    category: "Wardrobes",
    brand: "Ashley Furniture",
    description: "Elegant tall 6-drawer chest in natural wood finish. Ample storage for clothing, accessories, or linens – perfect as a standalone piece or part of a bedroom set.",
    dimensions: "80cm × 45cm × 130cm",
    stock: 9
  },
  {
    id: 64,
    name: "Compact 2-Door Wardrobe for Small Spaces – White",
    price: 125000,
    oldPrice: 195000,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/bd7e7249-212c-4fd6-9c30-ba1af17df594.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Space-saving compact 2-door wardrobe in clean white finish. Ideal for apartments, guest rooms, children's rooms, or any area with limited space.",
    dimensions: "100cm × 55cm × 180cm",
    stock: 14
  },
  {
    id: 65,
    name: "Expandable Modular Closet System – Light Oak",
    price: 680000,
    oldPrice: null,
    image: "https://d1b9sdpix36q7o.cloudfront.net/blog-content/blog/wp-content/uploads/2022/06/Sereno_Canyon_Callum_PCloset_3469.jpg",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "Flexible expandable modular closet system in light oak finish. Adjustable shelves, hanging rails, drawers, and customizable layout – perfect for growing storage needs.",
    dimensions: "Expandable – typical: 200–400cm × 60cm × 220cm",
    stock: 5
  },
  {
    id: 66,
    name: "5-Drawer Tall Chest of Drawers – Natural Wood",
    price: 165000,
    oldPrice: null,
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fff71001-107e-49f9-b0eb-b44766ead29e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    category: "Wardrobes",
    brand: "Coaster",
    description: "Tall 5-drawer chest in natural wood finish. Versatile storage for clothing, accessories, or bedroom essentials – clean and timeless design.",
    dimensions: "75cm × 40cm × 125cm",
    stock: 10
  },
  {
    id: 67,
    name: "Colorful 2-Door Kids Wardrobe with Shelves",
    price: 118000,
    oldPrice: 140000,
    image: "https://thumbs.dreamstime.com/b/colorful-children-s-clothing-arranged-wardrobe-shelves-vibrant-kids-outfits-neatly-hung-kids-fashion-concept-colorful-children-331503484.jpg",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Fun and functional 2-door kids wardrobe with colorful accents and internal shelves. Encourages organization while adding playful style to children's rooms.",
    dimensions: "90cm × 55cm × 180cm",
    stock: 13
  },
  {
    id: 68,
    name: "Classic 2-Door Armoire Wardrobe – Cherry Wood",
    price: 345000,
    oldPrice: null,
    image: "https://www.idfdesign.com/images/luxury-classic-wardrobe-closet/piranesi-ra-0830-worked-wardrobes-4.jpg",
    category: "Wardrobes",
    brand: "Homelegance",
    description: "Traditional 2-door armoire wardrobe in rich cherry wood finish. Classic carved details and timeless design – perfect for bedrooms or entryways.",
    dimensions: "110cm × 60cm × 210cm",
    stock: 7
  },
  {
    id: 69,
    name: "4-Door Wardrobe with Frosted Glass Doors – Warm Grey",
    price: 465000,
    oldPrice: 595000,
    image: "https://m.media-amazon.com/images/I/81Z3OBi8JBL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg",
    category: "Wardrobes",
    brand: "Ashley Furniture",
    description: "Modern 4-door wardrobe with elegant frosted glass doors in warm grey finish. Combines visibility, sophistication, and practical storage for contemporary bedrooms.",
    dimensions: "200cm × 60cm × 220cm",
    stock: 6
  },
  {
    id: 70,
    name: "Luxury Master Walk-in Closet System – Premium Gray",
    price: 1250000,
    oldPrice: null,
    image: "https://d1b9sdpix36q7o.cloudfront.net/blog-content/blog/wp-content/uploads/2022/06/Sereno_Canyon_Callum_PCloset_3469.jpg",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "High-end luxury master walk-in closet system in premium gray tones. Extensive shelving, hanging space, island unit, and integrated lighting – designed for organized elegance.",
    dimensions: "Customizable – typical: 350cm × 300cm × 240cm",
    stock: 3
  },
  {
    id: 71,
    name: "Large Round Wall Mirror – Gold Metal Frame 90cm",
    price: 85000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Elegant large round wall mirror with luxurious gold metal frame. 90cm diameter – perfect as a statement piece above console tables, in entryways or bedrooms.",
    dimensions: "Diameter: 90cm | Frame width: 5cm",
    stock: 12
  },
  {
    id: 72,
    name: "Large Minimalist Wall Clock – Black Silent Movement 50cm",
    price: 28000,
    oldPrice: 38000,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80",
    category: "Interior Decor",
    brand: "Signature Design",
    description: "Modern minimalist large wall clock in matte black with silent sweeping movement. 50cm diameter – clean design for living rooms, offices or kitchens.",
    dimensions: "Diameter: 50cm | Depth: 4cm",
    stock: 15
  },
  {
    id: 73,
    name: "Ceramic Table Lamp with Fabric Shade – White & Gold",
    price: 45000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    category: "Interior Decor",
    brand: "Ashley Home",
    description: "Stylish ceramic table lamp with white base, gold accents, and fabric shade. Perfect accent lighting for bedside tables, consoles or living room side tables.",
    dimensions: "Height: 60cm | Shade diameter: 35cm",
    stock: 10
  },
  {
    id: 74,
    name: "Modern Arc Floor Lamp – Marble Base & Brass Finish",
    price: 78000,
    oldPrice: 112000,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Elegant modern arc floor lamp with heavy marble base and brass finish arm. Adjustable height and direction – ideal for reading nooks or living room corners.",
    dimensions: "Height: 180–220cm adjustable | Base diameter: 40cm",
    stock: 8
  },
  {
    id: 75,
    name: "Set of 4 Luxury Throw Pillows – Velvet & Geometric",
    price: 32000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    category: "Interior Decor",
    brand: "Homelegance",
    description: "Luxurious set of 4 velvet throw pillows with geometric patterns. Soft and plush – perfect for adding texture and color to sofas, beds or accent chairs.",
    dimensions: "45cm × 45cm each",
    stock: 20
  },
  {
    id: 76,
    name: "Hand-Woven Geometric Area Rug – 200x300cm Beige",
    price: 145000,
    oldPrice: 182000,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
    category: "Interior Decor",
    brand: "Signature Design",
    description: "Hand-woven geometric area rug in neutral beige tones. Soft texture and durable weave – ideal for living rooms, bedrooms or dining areas.",
    dimensions: "200cm × 300cm",
    stock: 9
  },
  {
    id: 77,
    name: "Modern Ceramic Vase Set of 3 – Minimalist White",
    price: 38000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Minimalist set of 3 white ceramic vases in varying heights. Clean modern design – perfect for displaying dried flowers, branches or as standalone decor.",
    dimensions: "Heights: 25cm, 35cm, 45cm",
    stock: 18
  },
  {
    id: 78,
    name: "Set of 3 Floating Wall Shelves – Rustic Wood",
    price: 42000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    category: "Interior Decor",
    brand: "Coaster",
    description: "Rustic wood floating wall shelves set of 3. Clean lines and natural finish – great for displaying books, plants, photos or decorative items.",
    dimensions: "Lengths: 60cm, 80cm, 100cm | Depth: 20cm each",
    stock: 14
  },
  {
    id: 79,
    name: "Elegant Marble Top Console Table – Gold Legs",
    price: 125000,
    oldPrice: 148000,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    category: "Interior Decor",
    brand: "Ashley Home",
    description: "Sophisticated marble top console table with slim gold metal legs. Perfect for entryways, hallways or behind sofas – adds luxury and elegance.",
    dimensions: "120cm × 40cm × 80cm",
    stock: 7
  },
  {
    id: 80,
    name: "Round Glass Accent Side Table – Gold Frame",
    price: 58000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Modern round glass side table with gold metal frame. Sleek and lightweight – ideal as an accent piece next to sofas, chairs or beds.",
    dimensions: "Diameter: 45cm | Height: 55cm",
    stock: 12
  },
  {
    id: 81,
    name: "Gallery Wall Picture Frame Set – 6 Black Frames",
    price: 24000,
    oldPrice: 38000,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
    category: "Interior Decor",
    brand: "Signature Design",
    description: "Set of 6 black gallery wall picture frames in mixed sizes. Perfect for creating a personalized photo wall or art display in living rooms or hallways.",
    dimensions: "Various sizes – total layout approx 120cm × 100cm",
    stock: 15
  },
  {
    id: 82,
    name: "Crystal Candle Holder Set of 3 – Elegant Glass",
    price: 28000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1602528495790-96f93f0e5cf6?w=800&q=80",
    category: "Interior Decor",
    brand: "Homelegance",
    description: "Elegant set of 3 crystal glass candle holders. Sparkling faceted design – perfect for dining tables, mantelpieces or as ambient lighting accents.",
    dimensions: "Heights: 15cm, 20cm, 25cm",
    stock: 20
  },
  {
    id: 83,
    name: "3-Tier Bamboo Plant Stand – Indoor Display",
    price: 35000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    category: "Interior Decor",
    brand: "Coaster",
    description: "Natural bamboo 3-tier plant stand for indoor plants. Lightweight and eco-friendly – great for displaying succulents, herbs or small potted plants.",
    dimensions: "60cm × 40cm × 100cm",
    stock: 11
  },
  {
    id: 84,
    name: "Set of 3 Woven Seagrass Storage Baskets",
    price: 28000,
    oldPrice: 34000,
    image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Natural woven seagrass storage baskets set of 3. Versatile for organizing blankets, toys, magazines or plants – adds boho texture to any room.",
    dimensions: "Sizes: 30cm, 40cm, 50cm diameter",
    stock: 16
  },
  {
    id: 85,
    name: "Large Artificial Monstera Plant – 150cm with Pot",
    price: 65000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    category: "Interior Decor",
    brand: "Ashley Home",
    description: "Lifelike large artificial Monstera plant (150cm tall) with realistic leaves and included pot. Low-maintenance greenery – perfect for corners, living rooms or offices.",
    dimensions: "Height: 150cm | Pot diameter: 30cm",
    stock: 13
  },

  {
    id: 86,
    name: "Modern Minimalist Entry Door – Matte Black Steel",
    price: 285000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1677833638083-6e5138b718c4?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Sleek modern front entry door in matte black steel finish. Minimalist design with clean lines and durable construction – perfect statement piece for contemporary homes.",
    dimensions: "Standard: 90cm × 210cm (single door)",
    stock: 8
  },
  {
    id: 87,
    name: "Vintage Painted Wooden Door – Sunshine Yellow",
    price: 125000,
    oldPrice: 156000,
    image: "https://images.unsplash.com/photo-1559871753-75a00941f6b2?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Mediterranean Style",
    description: "Charming vintage-style wooden entry door painted in vibrant sunshine yellow. Hand-finished with distressed details – adds warmth and character to Mediterranean or eclectic homes.",
    dimensions: "90cm × 210cm",
    stock: 10
  },
  {
    id: 88,
    name: "Floor-to-Ceiling Glass Window Panel – Black Frame",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1496092607007-ca127e0b6a10?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "ModernLux",
    description: "Large floor-to-ceiling glass window panel with slim black aluminum frame. Maximizes natural light and creates open, modern feel – ideal for living rooms or patios.",
    dimensions: "240cm × 300cm (customizable)",
    stock: 5
  },
  {
    id: 89,
    name: "Classic Multi-Panel Window Set – White Wood Frame",
    price: 165000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Traditional multi-panel casement window set in white-painted wood frame. Classic charm with excellent ventilation – perfect for bedrooms, kitchens, or historic-style homes.",
    dimensions: "Each panel: 60cm × 120cm (set of 3–4)",
    stock: 7
  },
  {
    id: 90,
    name: "Arched Gothic Window – Decorative Iron Frame",
    price: 225000,
    oldPrice: 300000,
    image: "https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Elegant arched gothic-style window with decorative wrought iron frame. Adds architectural interest and romantic charm – great for entryways, stairwells, or accent walls.",
    dimensions: "120cm width × 180cm height",
    stock: 6
  },
  {
    id: 91,
    name: "Rustic Wooden Window with Shutters – Natural Brown",
    price: 145000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1518286602730-0829d2fdd245?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Rustic Home",
    description: "Rustic wooden window with functional exterior shutters in natural brown finish. Classic farmhouse or cottage style – durable and charming for countryside or suburban homes.",
    dimensions: "100cm × 140cm (with shutters)",
    stock: 9
  },
  {
    id: 92,
    name: "Mediterranean Blue Window Frame – Coastal Design",
    price: 98000,
    oldPrice: 140000,
    image: "https://images.unsplash.com/photo-1588614881226-8d90e8662fcf?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Mediterranean Style",
    description: "Vibrant Mediterranean blue window frame with coastal-inspired details. Bright and cheerful – perfect for beach houses, patios, or rooms with sea views.",
    dimensions: "90cm × 120cm",
    stock: 11
  },
  {
    id: 93,
    name: "Industrial Steel Frame Window – Factory Style Black",
    price: 320000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1469730268873-dc89e712948a?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "ModernLux",
    description: "Bold industrial-style steel frame window in matte black. Multi-pane grid design – creates loft, warehouse, or urban modern aesthetic with excellent durability.",
    dimensions: "150cm × 180cm",
    stock: 6
  },
  {
    id: 94,
    name: "Classic Solid Wood Entry Door – Dark Walnut",
    price: 195000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1683129719276-4e7ce97627cc?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Timeless solid wood entry door in rich dark walnut finish. Classic panel design with high-quality hardware – elegant and durable for any home exterior.",
    dimensions: "90cm × 210cm",
    stock: 8
  },
  {
    id: 95,
    name: "Modern Interior Door with Glass Panel – White",
    price: 85000,
    oldPrice: 104000,
    image: "https://plus.unsplash.com/premium_photo-1676893374848-220c6eaad411?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Sleek modern interior door in pure white with frosted glass panel. Lets light flow between rooms while maintaining privacy – clean and contemporary look.",
    dimensions: "80cm × 210cm",
    stock: 12
  },
  {
    id: 96,
    name: "Vintage Blue Painted Door – Santorini Style",
    price: 135000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1678338049616-cfa9d462f85a?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Mediterranean Style",
    description: "Iconic Santorini-inspired vintage blue painted wooden door. Weathered finish and arched top – brings Greek island charm to entrances or garden gates.",
    dimensions: "90cm × 210cm",
    stock: 9
  },
  {
    id: 97,
    name: "Rustic Green Double Entry Door – Farmhouse Style",
    price: 285000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1647742313929-719f3d6e4a3b?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Rustic Home",
    description: "Charming double entry door in rustic green with farmhouse details. Solid wood construction and glass panels – welcoming and traditional for country or suburban homes.",
    dimensions: "180cm × 210cm (double door)",
    stock: 5
  },
  {
    id: 98,
    name: "Hand-Carved Ornate Wooden Door – Antique Brown",
    price: 385000,
    oldPrice: 494000,
    image: "https://images.unsplash.com/photo-1729649232543-99f541d806eb?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Luxurious hand-carved ornate wooden entry door in antique brown finish. Intricate detailing and solid construction – adds grandeur and timeless elegance to any home.",
    dimensions: "100cm × 220cm",
    stock: 4
  },
  {
    id: 99,
    name: "Contemporary Flush Interior Door – Pure White",
    price: 65000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1671885891786-573edcda4437?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "ModernLux",
    description: "Sleek contemporary flush interior door in pure white. Smooth, handle-free design – minimalist and modern for bedrooms, offices, or living spaces.",
    dimensions: "80cm × 210cm",
    stock: 14
  },
  {
    id: 100,
    name: "Bay Window Set with Seating – White Wood Frame",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1642428670090-6da936be333a?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Beautiful bay window set with built-in seating bench and white wood frame. Maximizes light and creates cozy reading nook – ideal for living rooms or dining areas.",
    dimensions: "240cm width × 150cm projection × 220cm height",
    stock: 5
  },
  {
    id: 101,
    name: "Executive L-Shaped Office Desk – Walnut Finish",
    price: 385000,
    oldPrice: 515000,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Spacious executive L-shaped desk in rich walnut finish. Features ample workspace, built-in cable management, and two storage drawers. Perfect for professional home offices or corporate environments.",
    dimensions: "180cm × 150cm × 75cm (L-shape configuration)",
    stock: 8
  },
  {
    id: 102,
    name: "Ergonomic Mesh Office Chair – Lumbar Support Black",
    price: 125000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    category: "Office Furniture",
    brand: "Herman Miller Style",
    description: "Premium ergonomic office chair with breathable mesh back and adjustable lumbar support. Features adjustable armrests, seat height, and tilt mechanism for all-day comfort during long working hours.",
    dimensions: "65cm × 65cm × 95-115cm (adjustable height)",
    stock: 25
  },
  {
    id: 103,
    name: "Electric Height Adjustable Standing Desk – White",
    price: 295000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    category: "Office Furniture",
    brand: "FlexiDesk",
    description: "Modern electric standing desk with smooth height adjustment from 72cm to 120cm. Features memory presets, anti-collision technology, and spacious desktop. Promotes healthy working posture and productivity.",
    dimensions: "160cm × 80cm × 72-120cm (adjustable)",
    stock: 12
  },
  {
    id: 104,
    name: "5-Tier Modern Bookshelf – Natural Oak Wood",
    price: 112000,
    oldPrice: 140000,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Elegant 5-tier bookshelf in natural oak wood finish. Open design with sturdy construction, perfect for books, files, decorative items, and office supplies. Wall anchor included for safety.",
    dimensions: "80cm × 30cm × 180cm",
    stock: 18
  },
  {
    id: 105,
    name: "Computer Desk with Drawers & Shelves – White",
    price: 165000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?w=800&q=80",
    category: "Office Furniture",
    brand: "Ashley Furniture",
    description: "Functional computer desk with integrated storage including two drawers and side shelves. Clean white finish complements any modern office or bedroom setup. Keyboard tray included.",
    dimensions: "120cm × 55cm × 75cm",
    stock: 15
  },
  {
    id: 106,
    name: "3-Drawer Metal Filing Cabinet – Lockable Gray",
    price: 85000,
    oldPrice: 122000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Office Furniture",
    brand: "Coaster",
    description: "Durable 3-drawer metal filing cabinet with secure lock system. Smooth ball-bearing drawer slides and anti-tip mechanism. Perfect for organizing documents, files, and office supplies.",
    dimensions: "47cm × 62cm × 103cm",
    stock: 20
  },
  {
    id: 107,
    name: "Executive High-Back Leather Chair – Brown",
    price: 185000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&q=80",
    category: "Office Furniture",
    brand: "Signature Design",
    description: "Luxurious high-back executive chair in rich brown leather. Features padded armrests, adjustable height and tilt, and premium cushioning for ultimate comfort during long meetings or work sessions.",
    dimensions: "70cm × 70cm × 115-125cm (adjustable)",
    stock: 10
  },
  {
    id: 108,
    name: "8-Person Conference Table – Modern Walnut",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Impressive 8-person conference table in modern walnut finish. Features integrated cable management with power outlets and USB ports. Sturdy construction for professional boardrooms and meeting spaces.",
    dimensions: "240cm × 120cm × 75cm",
    stock: 5
  },
  {
    id: 109,
    name: "Complete Home Office Set – Desk + Chair + Shelf",
    price: 345000,
    oldPrice: 406000,
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=800&q=80",
    category: "Office Furniture",
    brand: "Homelegance",
    description: "Complete home office furniture set including a functional desk with drawers, ergonomic office chair, and matching bookshelf. Coordinated design in neutral tones suits any home office setup.",
    dimensions: "Desk: 140cm × 60cm × 75cm | Chair: adjustable | Shelf: 60cm × 30cm × 150cm",
    stock: 7
  },
  {
    id: 110,
    name: "Corner Computer Desk – Space Saving Black",
    price: 142000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80",
    category: "Office Furniture",
    brand: "Ashley Furniture",
    description: "Space-efficient corner computer desk in sleek black finish. Maximizes room corners with L-shaped design. Features keyboard tray, CPU stand, and cable management for organized workspaces.",
    dimensions: "140cm × 140cm × 75cm (corner configuration)",
    stock: 14
  },
  {
    id: 111,
    name: "RGB Gaming Desk with Cable Management – Carbon",
    price: 225000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    category: "Office Furniture",
    brand: "FlexiDesk",
    description: "Ultimate gaming desk with RGB LED lighting and carbon fiber texture surface. Features headphone hook, cup holder, controller stand, and full-length mouse pad surface. Built for serious gamers.",
    dimensions: "160cm × 70cm × 75cm",
    stock: 11
  },
  {
    id: 112,
    name: "Office Storage Cabinet with Doors – White",
    price: 135000,
    oldPrice: 173000,
    image: "https://images.unsplash.com/photo-1595428773960-5bea2c748e2b?w=800&q=80",
    category: "Office Furniture",
    brand: "Coaster",
    description: "Versatile office storage cabinet with adjustable shelves and soft-close doors. Clean white finish keeps office supplies, files, and equipment organized and out of sight.",
    dimensions: "80cm × 40cm × 120cm",
    stock: 13
  },
  {
    id: 113,
    name: "Modern Reception Desk – High Gloss White",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    category: "Office Furniture",
    brand: "Signature Design",
    description: "Stunning modern reception desk in high gloss white finish. Features transaction counter, lockable storage, and cable management. Creates a professional first impression for any business.",
    dimensions: "200cm × 60cm × 110cm (counter height)",
    stock: 4
  },
  {
    id: 114,
    name: "Adjustable Drafting Table – Artist Studio Desk",
    price: 178000,
    oldPrice: 217000,
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Professional adjustable drafting table for artists, architects, and designers. Features tilting surface, adjustable height, built-in ruler, and storage tray. Perfect for detailed creative work.",
    dimensions: "100cm × 60cm × 75-115cm (adjustable)",
    stock: 9
  },
  {
    id: 115,
    name: "Office Desk with Hutch & Keyboard Tray – Espresso",
    price: 265000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&q=80",
    category: "Office Furniture",
    brand: "Homelegance",
    description: "Traditional office desk with hutch in rich espresso finish. Features multiple shelves, cabinet storage, pull-out keyboard tray, and ample desktop space. Classic design for professional home offices.",
    dimensions: "150cm × 60cm × 180cm (including hutch)",
    stock: 8
  },

  {
    id: 116,
    name: "Modern Grey Sectional Sofa – L-Shape with Chaise Lounge",
    price: 695000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1676321688606-2f3b026710a5?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Signature Design",
    description: "Spacious L-shaped sectional sofa in modern grey fabric. Features deep seating, chaise lounge extension, and sturdy wooden frame. Perfect for family movie nights or entertaining guests in contemporary living rooms.",
    dimensions: "280cm × 160cm × 85cm (L-shape configuration)",
    stock: 7
  },
  {
    id: 117,
    name: "Contemporary Beige Sofa Set – 3-Seater with Matching Ottoman",
    price: 485000,
    oldPrice: 675000,
    image: "https://images.unsplash.com/photo-1655392032265-fdf00640d2ad?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Ashley Furniture",
    description: "Elegant 3-seater sofa with matching ottoman in soft beige fabric. Clean lines, plush cushions, and tapered legs give a timeless contemporary look. Ideal for small to medium living spaces.",
    dimensions: "Sofa: 220cm × 90cm × 85cm | Ottoman: 80cm × 60cm × 45cm",
    stock: 9
  },
  {
    id: 118,
    name: "Minimalist White 3-Seater Sofa – Premium Linen Fabric",
    price: 395000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1699901524281-423398392936?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Sleek minimalist 3-seater sofa in crisp white premium linen. Low-profile design with clean lines and high-density foam seating. Perfect for Scandinavian or modern minimalist interiors.",
    dimensions: "210cm × 90cm × 80cm",
    stock: 6
  },
  {
    id: 119,
    name: "Luxury Cream Modular Sofa – 5-Piece Configurable Set",
    price: 1150000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1683140425081-14c44089acd0?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Premium Collection",
    description: "High-end modular sofa set in luxurious cream fabric. Fully configurable 5-piece design allows multiple layouts. Plush seating, sturdy frame, and elegant detailing — ideal for large living rooms.",
    dimensions: "Configurable – max layout approx 350cm × 250cm × 85cm",
    stock: 4
  },
  {
    id: 120,
    name: "Plush Velvet 3-Seater Sofa – Deep Cushion Sage Green",
    price: 365000,
    oldPrice: 468000,
    image: "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Homelegance",
    description: "Rich sage green velvet 3-seater sofa with deep, plush cushions and tufted back. Luxurious feel and timeless elegance — perfect statement piece for sophisticated living spaces.",
    dimensions: "230cm × 95cm × 88cm",
    stock: 8
  },
  {
    id: 121,
    name: "Scandinavian Style Living Room Set – Sofa with Coffee Table",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Coaster",
    description: "Complete Scandinavian-inspired living room set including 3-seater sofa and matching coffee table. Light wood tones, clean lines, and minimalist design — ideal for bright, airy spaces.",
    dimensions: "Sofa: 200cm × 85cm × 80cm | Table: 120cm × 60cm × 45cm",
    stock: 5
  },
  {
    id: 122,
    name: "Modern Curved Sectional Sofa – Boucle Fabric Off-White",
    price: 875000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1705705601724-4bfd790aa1d3?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Signature Design",
    description: "Trendy curved sectional sofa in soft off-white boucle fabric. Generous seating, rounded arms, and modern silhouette — perfect centerpiece for contemporary open-plan living rooms.",
    dimensions: "320cm × 180cm × 85cm (curved layout)",
    stock: 6
  },
  {
    id: 123,
    name: "Compact Apartment Sofa – Space-Saving 2-Seater Light Grey",
    price: 225000,
    oldPrice: 275000,
    image: "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Space-efficient 2-seater sofa in light grey fabric. Slim profile, deep comfortable seating, and easy-to-clean material — ideal for small apartments, studios, or guest rooms.",
    dimensions: "160cm × 85cm × 80cm",
    stock: 11
  },
  {
    id: 124,
    name: "Premium Leather Living Room Suite – Complete 7-Seater Set",
    price: 1450000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1705705601487-3bbca732fa4d?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Premium Collection",
    description: "Luxury full leather living room suite including 3-seater, 2-seater, and accent chairs. Top-grain leather, high-density foam, and solid wood frame — ultimate comfort and durability.",
    dimensions: "Configurable – total seating for 7 adults",
    stock: 3
  },
  {
    id: 125,
    name: "Classic Tufted Chesterfield Set – Velvet Navy Blue (3+2)",
    price: 595000,
    oldPrice: 850000,
    image: "https://plus.unsplash.com/premium_photo-1706152482966-a295c922cdcf?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Ashley Furniture",
    description: "Timeless Chesterfield set in rich navy blue velvet. Deep button tufting, rolled arms, and turned legs — classic elegance meets modern comfort for sophisticated living rooms.",
    dimensions: "3-seater: 230cm × 90cm × 85cm | 2-seater: 170cm × 90cm × 85cm",
    stock: 5
  },
  {
    id: 126,
    name: "Boho Rattan Accent Chair – Natural Wicker with Cushion",
    price: 125000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Coaster",
    description: "Bohemian-style rattan accent chair with handwoven natural wicker and plush cushion. Lightweight yet sturdy — perfect reading nook or conversation corner piece.",
    dimensions: "80cm × 75cm × 95cm",
    stock: 10
  },
  {
    id: 127,
    name: "Elegant Cream Loveseat – Rolled Arms with Gold Legs",
    price: 285000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1649511134921-67afc567280c?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Homelegance",
    description: "Sophisticated cream loveseat with rolled arms and elegant gold metal legs. Plush seating and luxurious fabric — ideal for intimate seating areas or accent pieces.",
    dimensions: "150cm × 90cm × 85cm",
    stock: 8
  },
  {
    id: 128,
    name: "Rattan Peacock Accent Chair – Handwoven Natural Wicker",
    price: 145000,
    oldPrice: 195000,
    image: "https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "LeezWorld Original",
    description: "Iconic peacock chair in handwoven natural rattan. High backrest, wide seat, and boho-chic vibe — statement piece for living rooms, patios, or reading corners.",
    dimensions: "90cm × 85cm × 140cm",
    stock: 7
  },
  {
    id: 129,
    name: "Luxury Velvet Sofa Set – Complete Living Room Package",
    price: 985000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1683133939183-edd5476e6200?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Signature Design",
    description: "Complete luxury velvet living room package including sofa, loveseat, and accent chair. Rich fabric, deep seating, and elegant design — perfect for upscale homes.",
    dimensions: "Configurable – full set seating for 6–7 people",
    stock: 4
  },
  {
    id: 130,
    name: "Modern Minimalist 4-Seater Sofa – Low Profile Design Beige",
    price: 465000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1722942631531-5b09fed44978?w=800&q=80",
    category: "Sofas & Living Room",
    brand: "Premium Collection",
    description: "Sleek 4-seater minimalist sofa in neutral beige. Low-profile arms, clean lines, and high-density foam — modern comfort for open-plan living spaces.",
    dimensions: "260cm × 90cm × 75cm",
    stock: 6
  },

  {
    id: 131,
    name: "Modern White Dining Set – 6-Seater with Upholstered Chairs",
    price: 485000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1673214881759-4bd60b76acae?w=800&q=80",
    category: "Dining Sets",
    brand: "Signature Design",
    description: "Sleek modern 6-seater dining set featuring a crisp white table and comfortable upholstered chairs. Clean lines and durable finish – perfect for contemporary dining rooms or open-plan kitchens.",
    dimensions: "Table: 180cm × 90cm × 75cm | Chair height: 95cm",
    stock: 8
  },
  {
    id: 132,
    name: "Scandinavian Oak Dining Table – 8-Seater Natural Wood Finish",
    price: 620000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1671269943736-3ffe2ac923f6?w=800&q=80",
    category: "Dining Sets",
    brand: "Ashley Furniture",
    description: "Elegant Scandinavian-style solid oak dining table for 8 people. Natural wood grain finish with clean tapered legs – timeless design that complements minimalist and Nordic-inspired interiors.",
    dimensions: "240cm × 100cm × 75cm",
    stock: 6
  },
  {
    id: 133,
    name: "Minimalist 4-Seater Dining Set – White Table with Black Chairs",
    price: 345000,
    oldPrice: 460000,
    image: "https://images.unsplash.com/photo-1758977404683-d04c315a005b?w=800&q=80",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Compact and modern 4-seater dining set with white table and sleek black chairs. Space-saving design ideal for apartments, small families, or breakfast nooks.",
    dimensions: "Table: 140cm × 80cm × 75cm | Chair height: 90cm",
    stock: 10
  },
  {
    id: 134,
    name: "Industrial Style Dining Table – Reclaimed Wood with Metal Legs",
    price: 425000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1733514692319-221bfd102d5d?w=800&q=80",
    category: "Dining Sets",
    brand: "Homelegance",
    description: "Rustic-industrial dining table made from reclaimed-look wood with sturdy black metal legs. Bold statement piece for loft-style or urban dining spaces.",
    dimensions: "200cm × 90cm × 76cm",
    stock: 7
  },
  {
    id: 135,
    name: "Luxury Velvet Dining Chairs Set of 4 – Emerald Green with Gold Legs",
    price: 245000,
    oldPrice: 350000,
    image: "https://images.unsplash.com/photo-1758977245928-296e47fa2155?w=800&q=80",
    category: "Dining Sets",
    brand: "Signature Design",
    description: "Set of 4 luxurious emerald green velvet dining chairs with elegant gold metal legs. Plush cushioning and sophisticated look – perfect for upgrading any dining table.",
    dimensions: "Each chair: 50cm × 55cm × 95cm",
    stock: 12
  },
  {
    id: 136,
    name: "Rustic Farmhouse Dining Set – 6-Seater Solid Pine Wood",
    price: 550000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1770988962875-1a9f50e56eb6?w=800&q=80",
    category: "Dining Sets",
    brand: "Ashley Furniture",
    description: "Classic farmhouse 6-seater dining set in solid pine wood with distressed finish. Timeless rustic charm – ideal for family gatherings and cozy country-style homes.",
    dimensions: "Table: 180cm × 90cm × 78cm | Bench + chairs included",
    stock: 5
  },
  {
    id: 137,
    name: "Contemporary Tempered Glass Dining Table – Chrome Base 8-Seater",
    price: 395000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1745816456001-009279ca7666?w=800&q=80",
    category: "Dining Sets",
    brand: "Premium Collection",
    description: "Sleek contemporary 8-seater dining table with thick tempered glass top and polished chrome base. Modern luxury that opens up any space visually.",
    dimensions: "220cm × 110cm × 75cm",
    stock: 6
  },
  {
    id: 138,
    name: "Modern Marble Top Dining Set – 6-Seater with Leather Chairs",
    price: 720000,
    oldPrice: 900000,
    image: "https://images.unsplash.com/photo-1761666254267-afe141cdc951?w=800&q=80",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Premium 6-seater dining set featuring a genuine marble top table and high-back leather chairs. Sophisticated and durable – perfect for formal dining rooms.",
    dimensions: "Table: 200cm × 100cm × 76cm | Chair height: 100cm",
    stock: 4
  },
  {
    id: 139,
    name: "Round Pedestal Dining Table – White Tulip Base 4-Seater",
    price: 285000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    category: "Dining Sets",
    brand: "Coaster",
    description: "Iconic round pedestal dining table with white tulip base and glass or wood top. Seats 4 comfortably – mid-century modern classic for small to medium spaces.",
    dimensions: "Diameter: 120cm × Height: 75cm",
    stock: 9
  },
  {
    id: 140,
    name: "Extendable Dining Table Set – Walnut 6 to 10 Seater",
    price: 580000,
    oldPrice: 805000,
    image: "https://images.unsplash.com/photo-1758565811572-22622d91c2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY4fHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    category: "Dining Sets",
    brand: "Homelegance",
    description: "Versatile extendable walnut dining table set that expands from 6 to 10 seats. Rich finish and sturdy build – ideal for growing families or entertaining.",
    dimensions: "Closed: 180cm × Open: 240cm × 100cm × 76cm",
    stock: 5
  },
  {
    id: 141,
    name: "Compact Breakfast Nook Set – Corner Bench with Storage",
    price: 265000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
    category: "Dining Sets",
    brand: "LeezWorld Original",
    description: "Space-saving breakfast nook set with corner storage bench and compact table. Perfect for small kitchens, apartments, or cozy morning coffee corners.",
    dimensions: "Table: 120cm × 80cm × 75cm | Bench + 2 chairs",
    stock: 8
  },
  {
    id: 142,
    name: "Luxury 10-Seater Formal Dining Set – Mahogany with Carved Details",
    price: 1250000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53a4a457?w=800&q=80",
    category: "Dining Sets",
    brand: "Premium Collection",
    description: "Opulent 10-seater formal dining set in rich mahogany with hand-carved details. Includes table, chairs, and bench – perfect for large family gatherings or executive dining.",
    dimensions: "Table: 300cm × 120cm × 78cm | Full set seating 10",
    stock: 3
  },
  {
    id: 143,
    name: "Mid-Century Modern Dining Set – Teak Wood 6-Seater",
    price: 465000,
    oldPrice: 568000,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80",
    category: "Dining Sets",
    brand: "Signature Design",
    description: "Mid-century modern 6-seater dining set in warm teak wood. Tapered legs, clean lines, and timeless design – ideal for retro-inspired or contemporary homes.",
    dimensions: "Table: 180cm × 90cm × 75cm | Chair height: 90cm",
    stock: 7
  },
  {
    id: 144,
    name: "Outdoor Patio Dining Set – Weather-Resistant Rattan 6-Seater",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    category: "Dining Sets",
    brand: "Ashley Furniture",
    description: "Durable outdoor patio dining set in weather-resistant synthetic rattan. Includes 6-seater table and chairs – perfect for balconies, terraces, or garden dining.",
    dimensions: "Table: 180cm × 90cm × 75cm | Stackable chairs",
    stock: 5
  },
  {
    id: 145,
    name: "Counter Height Bar Dining Set – 4-Seater with Storage Shelf",
    price: 325000,
    oldPrice: 418000,
    image: "https://images.unsplash.com/photo-1762545352529-1e624dad0548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    category: "Dining Sets",
    brand: "Coaster",
    description: "Modern counter-height bar dining set with 4 stools and under-table storage shelf. Casual yet stylish – great for kitchen islands or open-plan breakfast bars.",
    dimensions: "Table: 140cm × 80cm × 90cm | Stool height: 65cm",
    stock: 9
  },

  {
    id: 146,
    name: "Modern Upholstered Platform Bed – Queen Size Beige Fabric",
    price: 285000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Signature Design",
    description: "Sleek modern upholstered platform bed in soft beige fabric. Low-profile design with padded headboard and sturdy frame – perfect for contemporary bedrooms with a clean, minimalist look.",
    dimensions: "Queen: 160cm × 200cm × 35cm (platform height)",
    stock: 9
  },
  {
    id: 147,
    name: "Minimalist White Bedroom Set – King Bed with Nightstands",
    price: 750000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1675615649456-5c0a8b0ad0ac?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Ashley Furniture",
    description: "Complete minimalist bedroom set in crisp white finish. Includes king platform bed and two matching nightstands. Clean lines and ample storage – ideal for bright, airy master bedrooms.",
    dimensions: "Bed: 193cm × 203cm × 35cm | Nightstand: 50cm × 40cm × 60cm each",
    stock: 5
  },
  {
    id: 148,
    name: "Scandinavian Oak Bed Frame – Queen Size Natural Wood Finish",
    price: 345000,
    oldPrice: 460000,
    image: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Elegant Scandinavian-inspired queen bed frame in natural oak. Simple slatted headboard and low profile – pairs beautifully with neutral bedding for a calm, Nordic-style bedroom.",
    dimensions: "Queen: 160cm × 200cm × 30cm",
    stock: 8
  },
  {
    id: 149,
    name: "Luxury Tufted Headboard Bed – King Size Velvet Grey",
    price: 485000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1681980021035-5db5823c974b?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Premium Collection",
    description: "Opulent king-size bed with deep button-tufted velvet headboard in sophisticated grey. High-density foam and solid wood frame – luxurious centerpiece for upscale bedrooms.",
    dimensions: "King: 193cm × 203cm × 120cm (headboard height)",
    stock: 6
  },
  {
    id: 150,
    name: "Modern Storage Bed with Drawers – Queen Size White",
    price: 365000,
    oldPrice: 522000,
    image: "https://images.unsplash.com/photo-1625334782252-da92af3ad887?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Homelegance",
    description: "Space-saving modern queen storage bed with 4 large drawers. Crisp white finish and hydraulic lift option – ideal for small bedrooms needing extra storage without compromising style.",
    dimensions: "Queen: 160cm × 200cm × 60cm (with drawers)",
    stock: 7
  },
  {
    id: 151,
    name: "Classic Wooden Sleigh Bed – King Size Dark Walnut",
    price: 520000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Ashley Furniture",
    description: "Timeless sleigh bed in rich dark walnut finish. Curved headboard and footboard with carved details – classic elegance for traditional or transitional master bedrooms.",
    dimensions: "King: 193cm × 203cm × 140cm (headboard height)",
    stock: 5
  },
  {
    id: 152,
    name: "Contemporary Low Platform Bed – King Size Charcoal Grey",
    price: 395000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1671269943825-e45b177add8f?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Signature Design",
    description: "Sleek low-profile platform bed in charcoal grey upholstery. Minimalist design with no box spring needed – modern comfort for urban bedrooms.",
    dimensions: "King: 193cm × 203cm × 30cm",
    stock: 8
  },
  {
    id: 153,
    name: "Boho Rattan Headboard Bed Frame – Queen Size Natural Wicker",
    price: 298000,
    oldPrice: 372000,
    image: "https://plus.unsplash.com/premium_photo-1675615667748-83da03046d30?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Boho-inspired queen bed frame with handwoven natural rattan headboard. Lightweight, airy, and textured – perfect for relaxed, tropical, or eclectic bedroom vibes.",
    dimensions: "Queen: 160cm × 200cm × 110cm (headboard height)",
    stock: 9
  },
  {
    id: 154,
    name: "Velvet Wingback Bed – King Size Navy Blue with Gold Accents",
    price: 565000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1660324407967-572d05e41def?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Premium Collection",
    description: "Dramatic king-size wingback bed in rich navy velvet with gold trim accents. Tall dramatic headboard – luxurious focal point for bold, glamorous bedrooms.",
    dimensions: "King: 193cm × 203cm × 150cm (headboard height)",
    stock: 4
  },
  {
    id: 155,
    name: "Complete Master Bedroom Set – King Bed + Dresser + Mirror + Nightstands",
    price: 1150000,
    oldPrice: 1597000,
    image: "https://plus.unsplash.com/premium_photo-1673014201794-0b086630d541?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Ashley Furniture",
    description: "Full master bedroom package including king bed, dresser, mirror, and two nightstands. Coordinated design in neutral tones – complete solution for a stylish bedroom refresh.",
    dimensions: "Bed: 193cm × 203cm | Dresser: 150cm × 45cm × 85cm",
    stock: 3
  },
  {
    id: 156,
    name: "Floating Platform Bed with LED Lights – King Size Modern Black",
    price: 445000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1670950411964-a87bb0977b90?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Coaster",
    description: "Ultra-modern floating platform bed in matte black with built-in LED underlighting. Sleek illusion of levitation – perfect for tech-savvy or futuristic bedroom aesthetics.",
    dimensions: "King: 193cm × 203cm × 35cm (with LED strip)",
    stock: 6
  },
  {
    id: 157,
    name: "Modern Canopy Bed Frame – King Size Black Metal Industrial",
    price: 385000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1593194632872-3d19dab6e278?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Premium Collection",
    description: "Industrial-style black metal canopy bed frame for king mattress. Tall posts with clean lines – dramatic yet minimalist, great for loft or urban bedrooms.",
    dimensions: "King: 193cm × 203cm × 220cm (canopy height)",
    stock: 5
  },
  {
    id: 158,
    name: "Upholstered Panel Bed – Queen Size Cream Linen with Nailhead Trim",
    price: 275000,
    oldPrice: 335000,
    image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Homelegance",
    description: "Elegant queen upholstered panel bed in cream linen with decorative nailhead trim. Padded headboard and footboard – soft and sophisticated for classic or transitional bedrooms.",
    dimensions: "Queen: 160cm × 200cm × 130cm (headboard height)",
    stock: 7
  },
  {
    id: 159,
    name: "Japanese Inspired Low Profile Bed – King Size Natural Oak",
    price: 425000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1631048834981-27b558f7a3e7?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "Signature Design",
    description: "Zen-inspired low-profile king bed in natural oak. Minimalist slatted platform design – promotes calm and spacious feel, ideal for Japanese or Scandinavian-style bedrooms.",
    dimensions: "King: 193cm × 203cm × 25cm",
    stock: 6
  },
  {
    id: 160,
    name: "Luxury Velvet Ottoman Storage Bed – King Size Emerald Green",
    price: 495000,
    oldPrice: 635000,
    image: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=800&q=80",
    category: "Beds & Bedroom",
    brand: "LeezWorld Original",
    description: "Luxurious king-size storage bed in rich emerald green velvet. Hydraulic lift ottoman base with ample storage – combines elegance, comfort, and smart space-saving functionality.",
    dimensions: "King: 193cm × 203cm × 60cm (with storage base)",
    stock: 5
  },
  {
    id: 161,
    name: "Modern Sliding Door Wardrobe – 3-Door White Gloss with Mirror",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=800&q=80",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "Sleek modern 3-door sliding wardrobe in high-gloss white with full-length mirror panel. Smooth gliding doors, ample internal shelving and hanging space – perfect for contemporary bedrooms.",
    dimensions: "180cm × 60cm × 220cm",
    stock: 7
  },
  {
    id: 162,
    name: "Walk-In Closet System – Complete Modular Organization Unit",
    price: 1250000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1683181181300-44c0c991a2cf?w=800&q=80",
    category: "Wardrobes",
    brand: "Premium Collection",
    description: "Luxury modular walk-in closet system with adjustable shelves, hanging rods, drawers, and island storage. Fully customizable layout – ideal for master bedrooms or dressing rooms.",
    dimensions: "Configurable – typical setup 300cm × 250cm × 240cm",
    stock: 3
  },
  {
    id: 163,
    name: "Open Concept Wardrobe System – Industrial Metal Frame Black",
    price: 345000,
    oldPrice: 460000,
    image: "https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?w=800&q=80",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Industrial-style open wardrobe with black metal frame and wooden shelves. Open concept design for easy access – great for minimalist or loft-style bedrooms.",
    dimensions: "150cm × 50cm × 200cm",
    stock: 8
  },
  {
    id: 164,
    name: "Luxury Dressing Room Set – Island Storage with LED Lighting",
    price: 1850000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1670076515866-73822a3d610d?w=800&q=80",
    category: "Wardrobes",
    brand: "Ashley Furniture",
    description: "Premium dressing room set featuring central island with drawers, LED-lit shelving, and full-length mirror. High-end organization for luxury wardrobes and walk-in closets.",
    dimensions: "Island: 120cm × 60cm × 90cm | Shelving units customizable",
    stock: 2
  },
  {
    id: 165,
    name: "Minimalist Closet Organizer – Wall-Mounted White Shelving System",
    price: 295000,
    oldPrice: 422000,
    image: "https://plus.unsplash.com/premium_photo-1674815329029-6473c5a1b70f?w=800&q=80",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "Clean minimalist wall-mounted closet organizer in white. Adjustable shelves, hanging rods, and shoe storage – perfect for small bedrooms or apartment wardrobes.",
    dimensions: "180cm × 40cm × 220cm (wall-mounted)",
    stock: 9
  },
  {
    id: 166,
    name: "Built-In Wardrobe System – Floor to Ceiling White with Drawers",
    price: 680000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1687953413905-731f620177ae?w=800&q=80",
    category: "Wardrobes",
    brand: "Premium Collection",
    description: "Floor-to-ceiling built-in wardrobe in glossy white with multiple drawers and hanging sections. Maximizes vertical space – ideal for master bedrooms with limited floor area.",
    dimensions: "300cm × 60cm × 240cm (floor-to-ceiling)",
    stock: 4
  },
  {
    id: 167,
    name: "Classic Wooden Armoire – 2-Door Traditional Oak with Carvings",
    price: 445000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1562008088-e8fe0711f7e8?w=800&q=80",
    category: "Wardrobes",
    brand: "Homelegance",
    description: "Traditional 2-door armoire in solid oak with decorative carvings. Spacious interior with shelves and hanging rod – timeless piece for classic or vintage-style bedrooms.",
    dimensions: "120cm × 60cm × 200cm",
    stock: 6
  },
  {
    id: 168,
    name: "Open Clothes Rail Wardrobe – Double Hanging Rod with Shelf",
    price: 125000,
    oldPrice: 156000,
    image: "https://images.unsplash.com/photo-1649361811423-a55616f7ab11?w=800&q=80",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Simple open clothes rail wardrobe with double hanging rods and top shelf. Industrial pipe design – affordable and functional for small spaces or seasonal clothing storage.",
    dimensions: "150cm × 50cm × 180cm",
    stock: 11
  },
  {
    id: 169,
    name: "Wooden Drawer Cabinet – 6-Drawer Dresser Natural Oak Finish",
    price: 195000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    category: "Wardrobes",
    brand: "Coaster",
    description: "Elegant 6-drawer dresser in natural oak finish. Smooth-gliding drawers and sturdy construction – perfect standalone piece or complement to any wardrobe system.",
    dimensions: "140cm × 45cm × 85cm",
    stock: 8
  },
  {
    id: 170,
    name: "Luxury Walk-In Closet – Complete System with Glass Doors",
    price: 1450000,
    oldPrice: 2014000,
    image: "https://images.unsplash.com/photo-1708397016786-8916880649b8?w=800&q=80",
    category: "Wardrobes",
    brand: "Premium Collection",
    description: "High-end luxury walk-in closet with glass-fronted doors, LED lighting, and premium organization features. Full customization available – ultimate wardrobe solution for master suites.",
    dimensions: "Configurable – typical 350cm × 250cm × 240cm",
    stock: 2
  },
  {
    id: 171,
    name: "Modern Hinged Door Wardrobe – 4-Door Grey Wood Grain Finish",
    price: 385000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1662454419622-a41092ecd245?w=800&q=80",
    category: "Wardrobes",
    brand: "Ashley Furniture",
    description: "Contemporary 4-door hinged wardrobe in modern grey wood grain. Spacious interior with adjustable shelves and hanging space – great value for medium to large bedrooms.",
    dimensions: "200cm × 60cm × 220cm",
    stock: 7
  },
  {
    id: 172,
    name: "Compact Entryway Wardrobe – Hall Tree with Hooks and Bench",
    price: 165000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1530411554903-7e745b9f1f6d?w=800&q=80",
    category: "Wardrobes",
    brand: "LeezWorld Original",
    description: "Space-saving entryway wardrobe with coat hooks, bench seating, and small storage compartments. Perfect for hallways, apartments, or small homes needing organized entry storage.",
    dimensions: "100cm × 40cm × 180cm",
    stock: 10
  },
  {
    id: 173,
    name: "Corner Wardrobe Unit – L-Shape Space Saving Design White",
    price: 425000,
    oldPrice: 518000,
    image: "https://images.unsplash.com/photo-1722349674028-a148f4364e43?w=800&q=80",
    category: "Wardrobes",
    brand: "Signature Design",
    description: "Smart L-shaped corner wardrobe in white finish. Maximizes unused corner space with shelves, hanging rods, and drawers – ideal for small or awkwardly shaped bedrooms.",
    dimensions: "160cm × 160cm × 220cm (corner configuration)",
    stock: 6
  },
  {
    id: 174,
    name: "Mirrored Sliding Wardrobe – 2-Door Full Length Mirror Black Frame",
    price: 365000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
    category: "Wardrobes",
    brand: "Homelegance",
    description: "Elegant 2-door sliding wardrobe with full-length mirrored panels in black frame. Creates illusion of larger space while providing practical storage – great for bedrooms.",
    dimensions: "180cm × 60cm × 220cm",
    stock: 8
  },
  {
    id: 175,
    name: "Modular Cube Storage Wardrobe – 16 Cube DIY Assembly White",
    price: 145000,
    oldPrice: 186000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Wardrobes",
    brand: "Coaster",
    description: "Versatile 16-cube modular wardrobe system in white. DIY assembly with customizable layout – perfect for shoes, folded clothes, bags, or creative storage solutions.",
    dimensions: "128cm × 37cm × 128cm (16 cubes)",
    stock: 12
  },

  {
    id: 176,
    name: "Modern Decorative Vases Set – Minimalist Ceramic Collection",
    price: 68000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1682259448848-90967eec2edb?w=800&q=80",
    category: "Interior Decor",
    brand: "Signature Design",
    description: "Elegant set of 3 minimalist ceramic vases in neutral tones. Perfect for modern shelves, console tables, or dining centerpieces – adds subtle sophistication to any room.",
    dimensions: "Heights: 25cm, 35cm, 45cm | Diameter approx 12–18cm",
    stock: 12
  },
  {
    id: 177,
    name: "Wall Mounted Plant Shelf – 3-Tier Floating Display with Pots",
    price: 52000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Space-saving 3-tier wall-mounted floating shelf for plants. Includes 3 ceramic pots – ideal for adding greenery to living rooms, bedrooms, or hallways without taking floor space.",
    dimensions: "80cm × 20cm × 60cm (total installed)",
    stock: 10
  },
  {
    id: 178,
    name: "Luxury Velvet Cushion Set – 4 Piece Earth Tones Collection",
    price: 38000,
    oldPrice: 51000,
    image: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?w=800&q=80",
    category: "Interior Decor",
    brand: "Ashley Home",
    description: "Set of 4 luxurious velvet decorative cushions in earthy tones. Soft texture and rich colors – perfect accent for sofas, beds, or armchairs to elevate any living space.",
    dimensions: "45cm × 45cm each",
    stock: 15
  },
  {
    id: 179,
    name: "Arched Decorative Wall Mirror – Brass Frame 120cm",
    price: 95000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1671269942067-bb709a81273c?w=800&q=80",
    category: "Interior Decor",
    brand: "Homelegance",
    description: "Elegant arched wall mirror with slim brass frame. Full-length or above-console size – adds light, depth, and sophistication to entryways, bedrooms, or living rooms.",
    dimensions: "120cm height × 80cm width",
    stock: 8
  },
  {
    id: 180,
    name: "Scandinavian TV Console Unit – White Oak with Storage",
    price: 185000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Clean Scandinavian-style TV console in white oak finish. Ample storage drawers and open shelving – modern and functional for living rooms or media spaces.",
    dimensions: "160cm × 40cm × 50cm",
    stock: 7
  },
  {
    id: 181,
    name: "Boho Macrame Wall Decor – Handwoven Cotton 90cm",
    price: 28000,
    oldPrice: 40000,
    image: "https://images.unsplash.com/photo-1729164967239-23452247681b?w=800&q=80",
    category: "Interior Decor",
    brand: "Coaster",
    description: "Handwoven boho macrame wall hanging in natural cotton. Intricate patterns and fringe details – perfect bohemian accent for bedrooms, living rooms, or above beds.",
    dimensions: "90cm × 120cm (hanging length)",
    stock: 14
  },
  {
    id: 182,
    name: "Minimalist Ceramic Planter Set – 3 Piece White & Grey",
    price: 42000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1681810789517-9f1ff5e3c3f9?w=800&q=80",
    category: "Interior Decor",
    brand: "Signature Design",
    description: "Set of 3 minimalist ceramic planters in matte white and grey tones. Sleek modern shapes – ideal for succulents, small plants, or decorative display on shelves and tables.",
    dimensions: "Heights: 15cm, 20cm, 25cm",
    stock: 11
  },
  {
    id: 183,
    name: "Large Abstract Canvas Art – Neutral Tones 100x150cm",
    price: 78000,
    oldPrice: 98000,
    image: "https://images.unsplash.com/photo-1732050527656-a388091fa1c6?w=800&q=80",
    category: "Interior Decor",
    brand: "Ashley Home",
    description: "Oversized abstract canvas artwork in soft neutral tones. Hand-painted style – large statement piece for living rooms, bedrooms, or above sofas to add texture and depth.",
    dimensions: "100cm × 150cm",
    stock: 6
  },
  {
    id: 184,
    name: "Natural Rattan Pendant Light – Woven Dome 50cm",
    price: 58000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1748680224201-9fddd428f5bb?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Handwoven natural rattan pendant light fixture with dome shape. Warm diffused lighting – boho-chic addition for dining areas, bedrooms, or living room corners.",
    dimensions: "Diameter 50cm × Height 60cm (with cord)",
    stock: 9
  },
  {
    id: 185,
    name: "Marble Decorative Bookends – Modern Geometric Pair",
    price: 32000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1695624759572-c6faca013cdb?w=800&q=80",
    category: "Interior Decor",
    brand: "Homelegance",
    description: "Pair of sleek marble bookends with modern geometric design. Heavy and stable – elegant accent for shelves, desks, or console tables in any contemporary space.",
    dimensions: "Each: 15cm × 10cm × 18cm",
    stock: 13
  },
  {
    id: 186,
    name: "Modern Ceramic Table Lamp – Textured Base with Linen Shade",
    price: 45000,
    oldPrice: 55000,
    image: "https://images.unsplash.com/photo-1678855894736-94d4ddc23a0a?w=800&q=80",
    category: "Interior Decor",
    brand: "Coaster",
    description: "Contemporary ceramic table lamp with textured base and neutral linen shade. Soft ambient lighting – perfect for bedside tables, consoles, or reading nooks.",
    dimensions: "Height 55cm | Shade diameter 30cm",
    stock: 10
  },
  {
    id: 187,
    name: "Handwoven Seagrass Storage Baskets – Set of 3 Natural",
    price: 35000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1700502418297-535c711d63c6?w=800&q=80",
    category: "Interior Decor",
    brand: "Signature Design",
    description: "Set of 3 natural handwoven seagrass storage baskets in varying sizes. Rustic yet modern – great for toys, blankets, magazines, or plant pot covers.",
    dimensions: "Small: 30cm × 25cm | Medium: 40cm × 30cm | Large: 50cm × 35cm",
    stock: 14
  },
  {
    id: 188,
    name: "Luxury Knit Throw Blanket – Chunky Weave Cream 150x200cm",
    price: 48000,
    oldPrice: 62000,
    image: "https://plus.unsplash.com/premium_photo-1681558314163-6b2bf9316d94?w=800&q=80",
    category: "Interior Decor",
    brand: "Ashley Home",
    description: "Cozy chunky knit throw blanket in soft cream. Oversized and luxurious – perfect layering piece for sofas, beds, or armchairs to add texture and warmth.",
    dimensions: "150cm × 200cm",
    stock: 12
  },
  {
    id: 189,
    name: "Premium Scented Candle Collection – Set of 4 Soy Wax",
    price: 38000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1693569881532-7c381535ba52?w=800&q=80",
    category: "Interior Decor",
    brand: "LeezWorld Original",
    description: "Luxury set of 4 soy wax scented candles in elegant glass jars. Long burn time and premium fragrances – ideal for creating relaxing ambiance in any room.",
    dimensions: "Each: 8cm × 10cm | Burn time: 40–50 hours",
    stock: 15
  },
  {
    id: 190,
    name: "Modern Geometric Wall Clock – Silent Movement Gold 60cm",
    price: 42000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1698861299194-a433039dfd2f?w=800&q=80",
    category: "Interior Decor",
    brand: "Homelegance",
    description: "Large modern geometric wall clock in gold finish with silent quartz movement. Bold design statement – perfect for living rooms, offices, or entryways.",
    dimensions: "Diameter 60cm",
    stock: 10
  },
  {
    id: 191,
    name: "French Style Window with Curtains – Elegant White",
    price: 185000,
    oldPrice: 218000,
    image: "https://images.unsplash.com/photo-1721989521740-64f25460c768?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Elegant French-style window with multiple glass panes and included sheer curtains. Classic white frame – brings timeless sophistication and natural light to living rooms or dining areas.",
    dimensions: "150cm × 200cm (window) + curtains",
    stock: 7
  },
  {
    id: 192,
    name: "Large Picture Window – Panoramic View Black Frame",
    price: 445000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1752847898108-37824b846918?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "ModernLux",
    description: "Oversized picture window with slim black frame for unobstructed panoramic views. Maximizes daylight and creates a seamless indoor-outdoor connection – ideal for modern homes.",
    dimensions: "240cm × 180cm",
    stock: 5
  },
  {
    id: 193,
    name: "Tempered Glass Pivot Door – Frameless Modern",
    price: 365000,
    oldPrice: null,
    image: "https://plus.unsplash.com/premium_photo-1711412120015-2b9243910324?w=600&auto=format&fit=crop&q=60",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Sleek frameless pivot door made from tempered glass with minimal hardware. Ultra-modern design – perfect for interior spaces, bathrooms, or as a stylish room divider.",
    dimensions: "90cm × 210cm",
    stock: 6
  },
  {
    id: 194,
    name: "Elegant Carved Entry Door – Premium Mahogany",
    price: 425000,
    oldPrice: 590000,
    image: "https://i.pinimg.com/736x/1d/56/d3/1d56d36a89265439e0aae29bd9a7666b.jpg",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Premium solid mahogany entry door with hand-carved elegant details. Rich warm finish – luxurious focal point for upscale homes or villas.",
    dimensions: "100cm × 220cm",
    stock: 4
  },
  {
    id: 195,
    name: "Heavy Duty Steel Security Door – Multi-Point Lock",
    price: 345000,
    oldPrice: null,
    image: "https://i.pinimg.com/736x/11/4f/8d/114f8d783f18585df886ab27bdf0f1d3.jpg",
    category: "Doors & Windows",
    brand: "SafeGuard",
    description: "Robust heavy-duty steel security door with multi-point locking system. High-security design with reinforced frame – essential for safety-conscious homes.",
    dimensions: "90cm × 210cm",
    stock: 8
  },
  {
    id: 196,
    name: "6-Panel Classic Interior Door – Oak Finish",
    price: 78000,
    oldPrice: 97500,
    image: "https://i.pinimg.com/736x/7a/b3/a5/7ab3a5a8aac2adbe4796263e77e1700a.jpg",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Traditional 6-panel interior door in warm oak finish. Classic raised moulding design – timeless and versatile for bedrooms, offices, or hallways.",
    dimensions: "80cm × 210cm",
    stock: 12
  },
  {
    id: 197,
    name: "Oversized Pivot Entry Door – Luxury Wood Finish",
    price: 685000,
    oldPrice: null,
    image: "https://i.pinimg.com/736x/4b/c5/96/4bc5961f9c0af43fc2ca1f8fc35fc6b4.jpg",
    category: "Doors & Windows",
    brand: "ModernLux",
    description: "Grand oversized pivot entry door with luxurious wood veneer finish. Smooth pivot mechanism and dramatic scale – statement piece for modern luxury homes.",
    dimensions: "120cm × 240cm",
    stock: 5
  },
  {
    id: 198,
    name: "Arched Top Entry Door with Iron Details – Cherry",
    price: 545000,
    oldPrice: null,
    image: "https://i.pinimg.com/1200x/14/74/7e/14747eecc8c83fa1d80740d5d6254c95.jpg",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Striking arched-top entry door in rich cherry wood with decorative iron accents. Architectural elegance – perfect for Mediterranean, Tuscan, or traditional homes.",
    dimensions: "100cm × 230cm",
    stock: 6
  },
  {
    id: 199,
    name: "Grand Double Entry Door – Solid Wood Carved",
    price: 750000,
    oldPrice: 1000000,
    image: "https://i.pinimg.com/1200x/19/c4/17/19c417691304b674c3241c689f7f6e96.jpg",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Impressive grand double entry door in solid carved wood. Ornate detailing and substantial presence – ideal for large homes, villas, or estates.",
    dimensions: "180cm × 220cm (double)",
    stock: 4
  },
  {
    id: 200,
    name: "Wrought Iron & Glass Entry Door – Decorative Black",
    price: 485000,
    oldPrice: null,
    image: "https://i.pinimg.com/1200x/50/6f/3e/506f3e8a26026091415693e395936ee9.jpg",
    category: "Doors & Windows",
    brand: "SafeGuard",
    description: "Sophisticated wrought iron and tempered glass entry door in decorative black finish. Combines security with elegant design – perfect for modern-classic homes.",
    dimensions: "90cm × 210cm",
    stock: 7
  },
  {
    id: 201,
    name: "Sliding Barn Door with Hardware – Reclaimed Wood",
    price: 165000,
    oldPrice: 201000,
    image: "https://i.pinimg.com/736x/db/71/e3/db71e3735f6b1961a4214a0004a118b6.jpg",
    category: "Doors & Windows",
    brand: "Rustic Home",
    description: "Authentic sliding barn door made from reclaimed wood complete with heavy-duty hardware. Rustic industrial charm – great for interior room dividers or pantry doors.",
    dimensions: "90cm × 210cm (single panel)",
    stock: 9
  },
  {
    id: 202,
    name: "French Double Door with Glass Panels – White Frame",
    price: 385000,
    oldPrice: null,
    image: "https://i.pinimg.com/1200x/ac/94/8d/ac948d471264addc8922bccc33061a1a.jpg",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Elegant French double door with clear glass panels in crisp white frame. Classic design that floods rooms with light – ideal for patios, balconies, or interior transitions.",
    dimensions: "180cm × 210cm (double)",
    stock: 6
  },
  {
    id: 203,
    name: "Craftsman Style Entry Door – Natural Teak Wood",
    price: 295000,
    oldPrice: null,
    image: "https://i.pinimg.com/1200x/52/03/f8/5203f884b7b94adf7b5be68250d8f1b9.jpg",
    category: "Doors & Windows",
    brand: "LeezWorld Original",
    description: "Authentic Craftsman-style entry door in natural teak wood. Clean lines, glass panels, and sturdy build – timeless American design for modern or traditional homes.",
    dimensions: "90cm × 210cm",
    stock: 8
  },
  {
    id: 204,
    name: "Solid Wood Door with Glass Insert – Frosted Panel",
    price: 185000,
    oldPrice: 237000,
    image: "https://i.pinimg.com/736x/de/5a/ef/de5aef37549e69e172b4f09219133796.jpg",
    category: "Doors & Windows",
    brand: "ModernLux",
    description: "Solid wood interior door with elegant frosted glass insert. Provides privacy while allowing soft light through – modern and sophisticated for bedrooms or offices.",
    dimensions: "80cm × 210cm",
    stock: 10
  },
  {
    id: 205,
    name: "Luxury Grand Entry Door – Hand-Carved Mahogany",
    price: 895000,
    oldPrice: null,
    image: "https://i.pinimg.com/1200x/8a/54/72/8a54725b23b671626ac4a1e2fefd3835.jpg",
    category: "Doors & Windows",
    brand: "Signature Design",
    description: "Opulent grand entry door in hand-carved premium mahogany. Intricate detailing and rich finish – ultimate luxury statement for high-end residences.",
    dimensions: "120cm × 240cm",
    stock: 3
  },

  {
    id: 206,
    name: "Modern Minimalist Writing Desk – Light Oak",
    price: 158000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Sleek minimalist writing desk in light oak finish. Clean lines, ample workspace, and subtle modern design – perfect for home offices, study rooms, or small apartments.",
    dimensions: "120cm × 60cm × 75cm",
    stock: 9
  },
  {
    id: 207,
    name: "Ergonomic Task Chair with Headrest – Gray Mesh",
    price: 145000,
    oldPrice: 181000,
    image: "https://images.unsplash.com/photo-1643219798695-800299630f61?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Herman Miller Style",
    description: "Fully ergonomic office task chair with adjustable headrest, lumbar support, breathable mesh back, and smooth-rolling casters. Designed for long hours of comfortable work.",
    dimensions: "Seat width 50cm | Back height 70cm | Adjustable height 110–130cm",
    stock: 12
  },
  {
    id: 208,
    name: "Open Plan 4-Person Workstation – Modern White",
    price: 680000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Signature Design",
    description: "Spacious open-plan workstation for 4 people in clean white finish. Includes privacy panels, cable management, and ample surface area – ideal for co-working spaces or home offices.",
    dimensions: "240cm × 120cm × 75cm (total)",
    stock: 4
  },
  {
    id: 209,
    name: "Compact Study Desk with Shelf – Natural Wood",
    price: 95000,
    oldPrice: 112000,
    image: "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Ashley Furniture",
    description: "Space-efficient compact study desk with built-in upper shelf in natural wood finish. Perfect for small bedrooms, student rooms, or corner home offices.",
    dimensions: "90cm × 50cm × 140cm (with shelf)",
    stock: 10
  },
  {
    id: 210,
    name: "Executive Manager Desk with Side Return – Walnut",
    price: 425000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Professional executive L-shaped desk with side return in rich walnut finish. Spacious work surface, multiple drawers, and elegant design – ideal for managers or home offices.",
    dimensions: "180cm × 180cm × 75cm (L-shape)",
    stock: 6
  },
  {
    id: 211,
    name: "Collaborative Meeting Table – 6 Seater White",
    price: 365000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "FlexiDesk",
    description: "Modern 6-seater collaborative meeting table in crisp white. Spacious top with cable ports – perfect for team discussions, brainstorming, or small conference rooms.",
    dimensions: "240cm × 120cm × 75cm",
    stock: 5
  },
  {
    id: 212,
    name: "Home Office Corner Unit with Storage – White Oak",
    price: 198000,
    oldPrice: 264000,
    image: "https://images.unsplash.com/photo-1679309981674-cef0e23a7864?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Homelegance",
    description: "Space-saving corner office unit in white oak finish with shelves, drawers, and desk surface. Maximizes corner space – great for small home offices or study corners.",
    dimensions: "160cm × 160cm × 180cm (corner configuration)",
    stock: 7
  },
  {
    id: 213,
    name: "Floating Wall-Mounted Desk – Space Saver White",
    price: 78000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1696453423495-046a7d83bf55?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Coaster",
    description: "Ultra-slim floating wall-mounted desk in white. Clean minimalist design – perfect for tiny apartments, hallways, or bedrooms needing a compact workspace.",
    dimensions: "100cm × 50cm × 20cm (depth when folded)",
    stock: 11
  },
  {
    id: 214,
    name: "Mobile Pedestal 3-Drawer Unit – Lockable White",
    price: 65000,
    oldPrice: 93000,
    image: "https://images.unsplash.com/photo-1750306957820-f778b67c4e13?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Signature Design",
    description: "Lockable mobile 3-drawer pedestal in white. Smooth casters and full-extension drawers – ideal under-desk storage for files, supplies, or personal items.",
    dimensions: "40cm × 55cm × 60cm",
    stock: 13
  },
  {
    id: 215,
    name: "Modern Office Reception Sofa Set – Gray Fabric",
    price: 485000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "LeezWorld Original",
    description: "Contemporary 3-seater reception sofa set in durable gray fabric. Clean lines and comfortable cushions – perfect for office waiting areas, lobbies, or home offices.",
    dimensions: "200cm × 85cm × 80cm (sofa)",
    stock: 5
  },
  {
    id: 216,
    name: "Stackable Visitor Chair Set of 4 – Black Frame",
    price: 98000,
    oldPrice: 120000,
    image: "https://images.unsplash.com/photo-1657757996603-acec063f1d9b?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Coaster",
    description: "Set of 4 stackable visitor chairs with black metal frame and cushioned seat. Space-saving design – great for meeting rooms, training areas, or waiting spaces.",
    dimensions: "Each: 50cm × 55cm × 85cm",
    stock: 10
  },
  {
    id: 217,
    name: "Industrial Style Desk – Metal Frame Rustic Wood",
    price: 175000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1604062527894-55b0712bbee3?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Ashley Furniture",
    description: "Rugged industrial desk with black metal frame and rustic wood top. Spacious surface and sturdy build – perfect for home offices with a loft or urban vibe.",
    dimensions: "140cm × 70cm × 75cm",
    stock: 8
  },
  {
    id: 218,
    name: "Freestanding Office Partition Screen – Fabric Gray",
    price: 58000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "FlexiDesk",
    description: "Portable freestanding fabric partition screen in neutral gray. Creates privacy zones in open offices or home workspaces – lightweight and easy to move.",
    dimensions: "150cm × 20cm × 180cm",
    stock: 9
  },
  {
    id: 219,
    name: "Monitor Stand with Desk Organizer – Bamboo",
    price: 28000,
    oldPrice: 36000,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "Homelegance",
    description: "Eco-friendly bamboo monitor stand with built-in drawer and organizer compartments. Raises screen to eye level and reduces desk clutter – ideal for ergonomic setups.",
    dimensions: "60cm × 25cm × 15cm",
    stock: 14
  },
  {
    id: 220,
    name: "Dual Monitor Arm Mount – Adjustable Aluminum",
    price: 45000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=600&auto=format&fit=crop&q=60",
    category: "Office Furniture",
    brand: "FlexiDesk",
    description: "Heavy-duty dual monitor arm mount in aluminum with full adjustability. Gas-spring mechanism for smooth positioning – frees up desk space and improves ergonomics.",
    dimensions: "Supports up to 32\" monitors | Max weight 9kg per arm",
    stock: 10
  }
];

// ============ SEARCH FUNCTIONALITY ============

// Format price with Naira symbol
function formatPrice(price) {
  return '₦' + price.toLocaleString();
}

// Generate star rating HTML
function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalfStar) {
    stars += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="fa-regular fa-star"></i>';
  }
  return stars;
}

// Search products
function searchProducts(query) {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchTerms = query.toLowerCase().trim().split(' ');
  
  return allProducts.filter(product => {
    const searchableText = `
      ${product.name} 
      ${product.brand} 
      ${product.category}
    `.toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
}

// Perform search and redirect to results page
function performSearch(query) {
  if (!query || query.trim() === '') {
    alert('Please enter a search term');
    return;
  }
  
  const results = searchProducts(query);
  
  // Store results and query in localStorage
  localStorage.setItem('searchResults', JSON.stringify(results));
  localStorage.setItem('searchQuery', query);
  
  // Redirect to search results page
  window.location.href = 'search-results.html';
}

// ============ SEARCH BAR EVENT LISTENERS ============
document.addEventListener('DOMContentLoaded', function() {
  
  // Hero search bar
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  
  if (heroSearchInput && heroSearchBtn) {
    // Click search button
    heroSearchBtn.addEventListener('click', function() {
      performSearch(heroSearchInput.value);
    });
    
    // Press Enter key
    heroSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(heroSearchInput.value);
      }
    });
  }
  
  // Live search suggestions (optional)
  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', function() {
      const query = this.value;
      if (query.length >= 2) {
        showSearchSuggestions(query);
      } else {
        hideSearchSuggestions();
      }
    });
  }
});

// ============ SEARCH SUGGESTIONS (AUTOCOMPLETE) ============
function showSearchSuggestions(query) {
  const results = searchProducts(query).slice(0, 5); // Show max 5 suggestions
  
  let suggestionsContainer = document.getElementById('searchSuggestions');
  
  // Create suggestions container if it doesn't exist
  if (!suggestionsContainer) {
    suggestionsContainer = document.createElement('div');
    suggestionsContainer.id = 'searchSuggestions';
    suggestionsContainer.className = 'search-suggestions';
    
    const heroSearch = document.querySelector('.hero-search');
    if (heroSearch) {
      heroSearch.style.position = 'relative';
      heroSearch.appendChild(suggestionsContainer);
    }
  }
  
  if (results.length === 0) {
    suggestionsContainer.innerHTML = '<div class="suggestion-item no-results">No products found</div>';
    suggestionsContainer.style.display = 'block';
    return;
  }
  
  suggestionsContainer.innerHTML = results.map(product => `
    <a href="product.html?id=${product.id}" class="suggestion-item">
      <img src="${product.image}" alt="${product.name}">
      <div class="suggestion-info">
        <span class="suggestion-name">${product.name}</span>
        <span class="suggestion-price">${formatPrice(product.price)}</span>
      </div>
    </a>
  `).join('');
  
  suggestionsContainer.style.display = 'block';
}

function hideSearchSuggestions() {
  const suggestionsContainer = document.getElementById('searchSuggestions');
  if (suggestionsContainer) {
    suggestionsContainer.style.display = 'none';
  }
}

// Hide suggestions when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.hero-search')) {
    hideSearchSuggestions();
  }
});


function redirect(){
  window.location.href = "shop.html"
}

const varDelete = document.getElementById("del");
varDelete.addEventListener("click", (e) => {
  
})




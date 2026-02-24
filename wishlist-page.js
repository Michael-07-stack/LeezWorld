// wishlist-page.js - Handles wishlist page display and interactions

document.addEventListener('DOMContentLoaded', function() {
  // Load and display wishlist items
  displayWishlistItems();
  
  // Setup clear all button
  setupClearAllButton();
  
  // Setup modal
  setupModal();
  
  // Load recommended products
  loadRecommendedProducts();
});

// Display all wishlist items
function displayWishlistItems() {
  const wishlistContent = document.getElementById('wishlistContent');
  const emptyWishlist = document.getElementById('emptyWishlist');
  const itemCount = document.getElementById('wishlistItemCount');
  const clearBtn = document.getElementById('clearAllBtn');
  
  // Get wishlist from localStorage
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  // Update item count
  itemCount.textContent = `(${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'})`;
  
  // Show/hide appropriate sections
  if (wishlist.length === 0) {
    wishlistContent.style.display = 'none';
    emptyWishlist.style.display = 'block';
    clearBtn.style.display = 'none';
    document.getElementById('recommendedSection').style.display = 'block';
  } else {
    wishlistContent.style.display = 'grid';
    emptyWishlist.style.display = 'none';
    clearBtn.style.display = 'flex';
    
    // Clear existing content
    wishlistContent.innerHTML = '';
    
    // Add each wishlist item
    wishlist.forEach(function(item) {
      const itemElement = createWishlistItemElement(item);
      wishlistContent.appendChild(itemElement);
    });
    
    // Setup remove buttons
    setupRemoveButtons();
    
    // Setup add to cart buttons
    setupAddToCartButtons();
  }
  
  // Update wishlist count in header
  updateWishlistCount();
}

// Create HTML element for a wishlist item
function createWishlistItemElement(item) {
  const div = document.createElement('div');
  div.className = 'wishlist-item';
  div.setAttribute('data-id', item.id);
  
  // Calculate discount if old price exists
  let discountBadge = '';
  if (item.oldPrice && item.oldPrice > item.price) {
    const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
    discountBadge = `<span class="discount">-${discount}%</span>`;
  }
  
  // Old price display
  let oldPriceHtml = '';
  if (item.oldPrice && item.oldPrice > item.price) {
    oldPriceHtml = `<span class="old-price">${formatPrice(item.oldPrice)}</span>`;
  }
  
  div.innerHTML = `
    <div class="wishlist-item-image">
      <a href="${item.link || 'product.html?id=' + item.id}">
        <img src="${item.image}" alt="${item.name}">
      </a>
    </div>
    
    <div class="wishlist-item-details">
      <div>
        ${item.brand ? `<div class="wishlist-item-brand">${item.brand}</div>` : ''}
        <h3 class="wishlist-item-name">
          <a href="${item.link || 'product.html?id=' + item.id}">${item.name}</a>
        </h3>
        <div class="wishlist-item-price">
          <span class="current-price">${formatPrice(item.price)}</span>
          ${oldPriceHtml}
          ${discountBadge}
        </div>
      </div>
      
      <div class="wishlist-item-actions">
        <button class="add-to-cart-btn-wishlist" data-id="${item.id}">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
        <a href="${item.link || 'product.html?id=' + item.id}" class="view-product-btn">
          <i class="fa-solid fa-eye"></i> View Product
        </a>
      </div>
    </div>
    
    <button class="remove-item-btn" data-id="${item.id}" title="Remove from wishlist">
      <i class="fa-solid fa-times"></i>
    </button>
  `;
  
  return div;
}

// Format price with Naira symbol
function formatPrice(price) {
  return '₦' + price.toLocaleString();
}

// Setup remove buttons
function setupRemoveButtons() {
  const removeButtons = document.querySelectorAll('.remove-item-btn');
  
  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productId = parseInt(button.getAttribute('data-id'));
      const itemElement = button.closest('.wishlist-item');
      
      // Add remove animation
      itemElement.style.opacity = '0';
      itemElement.style.transform = 'translateX(20px)';
      itemElement.style.transition = 'all 0.3s ease';
      
      setTimeout(function() {
        // Remove from localStorage
        removeFromWishlist(productId);
        
        // Re-display items
        displayWishlistItems();
        
        // Show notification
        showNotification('Removed from wishlist', 'remove');
      }, 300);
    });
  });
}

// Setup add to cart buttons
function setupAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn-wishlist');
  
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productId = parseInt(button.getAttribute('data-id'));
      
      // Add to cart
      addToCartFromWishlist(productId);
      
      // Change button text temporarily
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
      button.style.background = '#2e7d32';
      
      setTimeout(function() {
        button.innerHTML = originalText;
        button.style.background = '';
      }, 2000);
    });
  });
}

// Setup clear all button
function setupClearAllButton() {
  const clearBtn = document.getElementById('clearAllBtn');
  
  clearBtn.addEventListener('click', function() {
    // Show confirmation modal
    document.getElementById('confirmModal').classList.add('active');
  });
}

// Setup modal
function setupModal() {
  const modal = document.getElementById('confirmModal');
  const cancelBtn = document.getElementById('cancelClear');
  const confirmBtn = document.getElementById('confirmClear');
  
  // Cancel button
  cancelBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });
  
  // Confirm button
  confirmBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    
    // Clear wishlist
    clearWishlist();
    
    // Re-display (will show empty state)
    displayWishlistItems();
    
    // Show notification
    showNotification('Wishlist cleared', 'remove');
  });
  
  // Click outside modal to close
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Load recommended products (you can customize this)
function loadRecommendedProducts() {
  const container = document.getElementById('recommendedProducts');
  
  // Sample recommended products
  const recommendedProducts = [
    {
      id: 38,
      name: "King Size Platform Bed – Upholstered Gray Fabric",
      price: 380000,
      oldPrice: 510000,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
    },
    {
      id: 40,
      name: "Complete Bedroom Set – King Bed + 2 Nightstands White",
      price: 720000,
      oldPrice: null,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
    },
    {
      id: 44,
      name: "Luxury 5-Piece Bedroom Set – King Bed + Dresser",
      price: 1450000,
      oldPrice: null,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80"
    },
    {
      id: 50,
      name: "King Modern Platform Bed with LED Lights",
      price: 650000,
      oldPrice: null,
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80"
    }
  ];
  
  container.innerHTML = '';
  
  recommendedProducts.forEach(function(product) {
    const card = document.createElement('a');
    card.href = `product.html?id=${product.id}`;
    card.className = 'product-card';
    
    let oldPriceHtml = '';
    if (product.oldPrice) {
      oldPriceHtml = `<span class="old-price">${formatPrice(product.oldPrice)}</span>`;
    }
    
    card.innerHTML = `
      <div class="product-img-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div>
          <span class="price">${formatPrice(product.price)}</span>
          ${oldPriceHtml}
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}
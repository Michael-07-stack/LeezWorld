  
// WISHLIST.JS - FIXED VERSION
  

// Use the SAME key as cart.js
const WISHLIST_CART_KEY = 'leezworld_cart';

// Initialize wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
  
  // Update wishlist buttons on any page
  updateWishlistButtons();
  
  // Update wishlist count in header
  updateWishlistCount();
  
  // Setup click events for heart buttons
  setupWishlistButtons();
  
  // If we're on the wishlist page, load the items
  if (document.getElementById('wishlistContent')) {
    displayWishlistItems();
    setupClearAllButton();
    setupModal();
  }
});

  
// CORE FUNCTIONS (Used on all pages)
  

// Setup click events for wishlist buttons
function setupWishlistButtons() {
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');
  
  wishlistButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const productCard = button.closest('.product-card');
      const product = getProductFromCard(productCard);
      
      toggleWishlist(product, button);
    });
  });
}

// Get product information from a product card
function getProductFromCard(card) {
  const productLink = card.querySelector('.product-link');
  const href = productLink ? productLink.getAttribute('href') : '';
  const idMatch = href.match(/id=(\d+)/);
  const id = idMatch ? parseInt(idMatch[1]) : Date.now();
  
  const name = card.querySelector('.product-name')?.textContent.trim() || 'Unknown Product';
  const brand = card.querySelector('.product-brand')?.textContent.trim() || '';
  const image = card.querySelector('.product-img-container img')?.src || '';
  const priceText = card.querySelector('.price')?.textContent.trim() || '₦0';
  const oldPriceText = card.querySelector('.old-price')?.textContent.trim() || null;
  
  const price = parseWishlistPrice(priceText);
  const oldPrice = oldPriceText ? parseWishlistPrice(oldPriceText) : null;
  
  return {
    id: id,
    name: name,
    brand: brand,
    image: image,
    price: price,
    oldPrice: oldPrice,
    link: href
  };
}

// Parse price string to number (renamed to avoid conflict)
function parseWishlistPrice(priceString) {
  return parseInt(priceString.replace(/[₦,]/g, '')) || 0;
}

// Format price with Naira symbol (renamed to avoid conflict)
function formatWishlistPrice(price) {
  return '₦' + price.toLocaleString();
}

// Toggle item in wishlist
function toggleWishlist(product, button) {
  const index = wishlist.findIndex(item => item.id === product.id);
  
  if (index > -1) {
    // Remove from wishlist
    wishlist.splice(index, 1);
    button.classList.remove('active');
    button.innerHTML = '<i class="fa-regular fa-heart"></i>';
    showWishlistNotification('Removed from wishlist', 'remove');
  } else {
    // Add to wishlist
    wishlist.push(product);
    button.classList.add('active');
    button.innerHTML = '<i class="fa-solid fa-heart"></i>';
    showWishlistNotification('Added to wishlist!', 'add');
  }
  
  saveWishlist();
  updateWishlistCount();
}

// Save wishlist to localStorage
function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Update all wishlist buttons to show correct state
function updateWishlistButtons() {
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');
  
  wishlistButtons.forEach(function(button) {
    const productCard = button.closest('.product-card');
    const productLink = productCard?.querySelector('.product-link');
    const href = productLink ? productLink.getAttribute('href') : '';
    const idMatch = href.match(/id=(\d+)/);
    const productId = idMatch ? parseInt(idMatch[1]) : null;
    
    if (productId && isInWishlist(productId)) {
      button.classList.add('active');
      button.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
  });
}

// Check if product is in wishlist
function isInWishlist(productId) {
  return wishlist.some(item => item.id === productId);
}

// Update wishlist count in header
function updateWishlistCount() {
  const countElements = document.querySelectorAll('.wishlist-count');
  countElements.forEach(function(el) {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

// Show notification popup (renamed to avoid conflict)
function showWishlistNotification(message, type) {
  // Remove existing notification
  const existing = document.querySelector('.wishlist-notification');
  if (existing) existing.remove();
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = 'wishlist-notification ' + type;
  notification.innerHTML = `
    <i class="fa-solid ${type === 'add' ? 'fa-heart' : 'fa-heart-crack'}"></i>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Remove after delay
  setTimeout(function() {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Remove item from wishlist by ID
function removeFromWishlist(productId) {
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist();
  updateWishlistCount();
}

// Clear entire wishlist
function clearWishlist() {
  wishlist = [];
  saveWishlist();
  updateWishlistCount();
}

  
// ADD TO CART FROM WISHLIST - FIXED!
  
function addToCartFromWishlist(productId) {
  const product = wishlist.find(item => item.id === productId);
  if (!product) return;
  
  // FIXED: Use the same key as cart.js!
  let cart = JSON.parse(localStorage.getItem(WISHLIST_CART_KEY)) || [];
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  // FIXED: Use the same key as cart.js!
  localStorage.setItem(WISHLIST_CART_KEY, JSON.stringify(cart));
  
  // Call the cart.js updateCartCount function if it exists
  if (typeof updateCartCount === 'function') {
    updateCartCount();
  }
  
  showWishlistNotification('Added to cart!', 'add');
}

  
// WISHLIST PAGE FUNCTIONS (Only for wishlist.html)
  

// Display all wishlist items
function displayWishlistItems() {
  const wishlistContent = document.getElementById('wishlistContent');
  const emptyWishlist = document.getElementById('emptyWishlist');
  const itemCount = document.getElementById('wishlistItemCount');
  const clearBtn = document.getElementById('clearAllBtn');
  
  // Update item count
  if (itemCount) {
    itemCount.textContent = `(${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'})`;
  }
  
  if (wishlist.length === 0) {
    if (wishlistContent) wishlistContent.style.display = 'none';
    if (emptyWishlist) emptyWishlist.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
  } else {
    if (wishlistContent) {
      wishlistContent.style.display = 'grid';
      wishlistContent.innerHTML = '';
      
      wishlist.forEach(function(item) {
        const itemElement = createWishlistItemElement(item);
        wishlistContent.appendChild(itemElement);
      });
      
      setupRemoveButtons();
      setupWishlistAddToCartButtons();
    }
    if (emptyWishlist) emptyWishlist.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'flex';
  }
}

// Create HTML element for a wishlist item
function createWishlistItemElement(item) {
  const div = document.createElement('div');
  div.className = 'wishlist-item';
  div.setAttribute('data-id', item.id);
  
  // Calculate discount
  let discountBadge = '';
  let oldPriceHtml = '';
  
  if (item.oldPrice && item.oldPrice > item.price) {
    const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
    discountBadge = `<span class="discount">-${discount}%</span>`;
    oldPriceHtml = `<span class="old-price">${formatWishlistPrice(item.oldPrice)}</span>`;
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
          <span class="current-price">${formatWishlistPrice(item.price)}</span>
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

// Setup remove buttons on wishlist page
function setupRemoveButtons() {
  const removeButtons = document.querySelectorAll('.remove-item-btn');
  
  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productId = parseInt(button.getAttribute('data-id'));
      const itemElement = button.closest('.wishlist-item');
      
      // Animate out
      itemElement.style.opacity = '0';
      itemElement.style.transform = 'translateX(20px)';
      itemElement.style.transition = 'all 0.3s ease';
      
      setTimeout(function() {
        removeFromWishlist(productId);
        displayWishlistItems();
        showWishlistNotification('Removed from wishlist', 'remove');
      }, 300);
    });
  });
}

// Setup add to cart buttons on wishlist page (renamed to avoid conflict)
function setupWishlistAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn-wishlist');
  
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productId = parseInt(button.getAttribute('data-id'));
      
      addToCartFromWishlist(productId);
      
      // Show success feedback
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
  if (!clearBtn) return;
  
  clearBtn.addEventListener('click', function() {
    const modal = document.getElementById('confirmModal');
    if (modal) modal.classList.add('active');
  });
}

// Setup modal
function setupModal() {
  const modal = document.getElementById('confirmModal');
  if (!modal) return;
  
  const cancelBtn = document.getElementById('cancelClear');
  const confirmBtn = document.getElementById('confirmClear');
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      modal.classList.remove('active');
    });
  }
  
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function() {
      modal.classList.remove('active');
      clearWishlist();
      displayWishlistItems();
      showWishlistNotification('Wishlist cleared', 'remove');
    });
  }
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}
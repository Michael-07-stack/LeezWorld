  
// WISHLIST-PAGE.JS - FIXED VERSION
  

// Use the SAME key as cart.js
const CART_STORAGE_KEY = 'leezworld_cart';

document.addEventListener('DOMContentLoaded', function() {
  // Load and display wishlist items
  displayWishlistPageItems();
  
  // Setup clear all button
  setupClearAllBtn();
  
  // Setup modal
  setupConfirmModal();
  
  // Load recommended products
  if (typeof loadRecommendedProducts === 'function') {
    loadRecommendedProducts();
  }
  
  // Update cart count (call cart.js function)
  if (typeof updateCartCount === 'function') {
    updateCartCount();
  }
});

  
// DISPLAY WISHLIST ITEMS
  
function displayWishlistPageItems() {
  const wishlistContent = document.getElementById('wishlistContent');
  const emptyWishlist = document.getElementById('emptyWishlist');
  const itemCount = document.getElementById('wishlistItemCount');
  const clearBtn = document.getElementById('clearAllBtn');
  const recommendedSection = document.getElementById('recommendedSection');
  
  // Get wishlist from localStorage
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  // Update item count
  if (itemCount) {
    itemCount.textContent = `(${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'})`;
  }
  
  // Show/hide appropriate sections
  if (wishlist.length === 0) {
    if (wishlistContent) wishlistContent.style.display = 'none';
    if (emptyWishlist) emptyWishlist.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
    if (recommendedSection) recommendedSection.style.display = 'block';
  } else {
    if (wishlistContent) {
      wishlistContent.style.display = 'grid';
      wishlistContent.innerHTML = '';
      
      // Add each wishlist item
      wishlist.forEach(function(item) {
        const itemElement = createWishlistPageItem(item);
        wishlistContent.appendChild(itemElement);
      });
      
      // Setup buttons
      setupWishlistRemoveButtons();
      setupWishlistCartButtons();
    }
    if (emptyWishlist) emptyWishlist.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'flex';
  }
  
  // Update wishlist count in header
  updateWishlistHeaderCount();
}

  
// CREATE WISHLIST ITEM ELEMENT
  
function createWishlistPageItem(item) {
  const div = document.createElement('div');
  div.className = 'wishlist-item';
  div.setAttribute('data-id', item.id);
  
  // Calculate discount if old price exists
  let discountBadge = '';
  let oldPriceHtml = '';
  
  if (item.oldPrice && item.oldPrice > item.price) {
    const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
    discountBadge = `<span class="discount">-${discount}%</span>`;
    oldPriceHtml = `<span class="old-price">${formatWishlistPagePrice(item.oldPrice)}</span>`;
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
          <span class="current-price">${formatWishlistPagePrice(item.price)}</span>
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

  
// FORMAT PRICE (Unique name to avoid conflicts)
  
function formatWishlistPagePrice(price) {
  return '₦' + price.toLocaleString();
}

  
// UPDATE WISHLIST COUNT IN HEADER
  
function updateWishlistHeaderCount() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const countElements = document.querySelectorAll('.wishlist-count');
  
  countElements.forEach(function(el) {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

  
// SETUP REMOVE BUTTONS
  
function setupWishlistRemoveButtons() {
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
        removeItemFromWishlist(productId);
        
        // Re-display items
        displayWishlistPageItems();
        
        // Show notification
        showWishlistPageNotification('Removed from wishlist', 'remove');
      }, 300);
    });
  });
}

  
// REMOVE ITEM FROM WISHLIST
  
function removeItemFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(item => item.id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

  
// SETUP ADD TO CART BUTTONS (Unique name!)
  
function setupWishlistCartButtons() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn-wishlist');
  
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const productId = parseInt(button.getAttribute('data-id'));
      
      // Add to cart
      addWishlistItemToCart(productId);
      
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

  
// ADD TO CART FROM WISHLIST - FIXED!
  
function addWishlistItemToCart(productId) {
  // Get wishlist
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const product = wishlist.find(item => item.id === productId);
  
  if (!product) return;
  
  // FIXED: Use the SAME key as cart.js!
  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  
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
  
  // FIXED: Save with the SAME key as cart.js!
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  
  // Update cart count using cart.js function
  if (typeof updateCartCount === 'function') {
    updateCartCount();
  }
  
  // Show notification
  showWishlistPageNotification('Added to cart!', 'add');
}

  
// SETUP CLEAR ALL BUTTON
  
function setupClearAllBtn() {
  const clearBtn = document.getElementById('clearAllBtn');
  
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      const modal = document.getElementById('confirmModal');
      if (modal) modal.classList.add('active');
    });
  }
}

  
// SETUP CONFIRMATION MODAL
  
function setupConfirmModal() {
  const modal = document.getElementById('confirmModal');
  if (!modal) return;
  
  const cancelBtn = document.getElementById('cancelClear');
  const confirmBtn = document.getElementById('confirmClear');
  
  // Cancel button
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      modal.classList.remove('active');
    });
  }
  
  // Confirm button
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function() {
      modal.classList.remove('active');
      
      // Clear wishlist
      localStorage.setItem('wishlist', JSON.stringify([]));
      
      // Re-display (will show empty state)
      displayWishlistPageItems();
      
      // Show notification
      showWishlistPageNotification('Wishlist cleared', 'remove');
    });
  }
  
  // Click outside modal to close
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

  
// SHOW NOTIFICATION (Unique name!)
  
function showWishlistPageNotification(message, type) {
  // Remove existing notification
  const existing = document.querySelector('.wishlist-notification');
  if (existing) existing.remove();
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = 'wishlist-notification ' + type;
  notification.innerHTML = `
    <i class="fa-solid ${type === 'add' ? 'fa-check-circle' : 'fa-heart-crack'}"></i>
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

  
// LOAD RECOMMENDED PRODUCTS (if needed)
  
function loadRecommendedProducts() {
  // Add your recommended products logic here
  // This is optional
}
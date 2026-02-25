// ============================================
// SIMPLE CART FUNCTIONALITY
// ============================================

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];

// ============================================
// UPDATE CART COUNT IN HEADER
// ============================================
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('#cartCount, .cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCountElements.forEach(function(element) {
    element.textContent = totalItems;
    
    if (totalItems === 0) {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex';
    }
  });
}

// ============================================
// SHOW MESSAGE
// ============================================
function showMessage(message, type) {
  // Remove existing message
  const existingMessage = document.querySelector('.cart-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.className = 'cart-message';
  
  if (type === 'success') {
    messageDiv.style.background = '#28a745';
    messageDiv.innerHTML = '<i class="fa-solid fa-check-circle"></i><span>' + message + '</span>';
  } else if (type === 'error') {
    messageDiv.style.background = '#dc3545';
    messageDiv.innerHTML = '<i class="fa-solid fa-exclamation-circle"></i><span>' + message + '</span>';
  } else {
    messageDiv.innerHTML = '<i class="fa-solid fa-info-circle"></i><span>' + message + '</span>';
  }

  document.body.appendChild(messageDiv);

  // Show the message
  setTimeout(() => {
    messageDiv.classList.add('show');
  }, 10);

  // Remove after 3 seconds
  setTimeout(function() {
    messageDiv.classList.remove('show');
    setTimeout(function() {
      messageDiv.remove();
    }, 300);
  }, 3000);
}

// ============================================
// ADD TO CART
// ============================================
function addToCart(productId, productName, productPrice, productImage) {
  // Check if item already in cart
  const existingItem = cart.find(function(item) {
    return item.id === productId;
  });

  if (existingItem) {
    existingItem.quantity += 1;
    showMessage('Item quantity updated in cart!', 'success');
  } else {
    // Add new item
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    });
    showMessage('Added to cart!', 'success');
  }

  // Save to localStorage
  localStorage.setItem('leezworld_cart', JSON.stringify(cart));

  // Update cart count
  updateCartCount();
}

// ============================================
// REMOVE FROM CART
// ============================================
function removeFromCart(productId) {
  cart = cart.filter(function(item) {
    return item.id !== productId;
  });

  localStorage.setItem('leezworld_cart', JSON.stringify(cart));
  updateCartCount();

  if (document.getElementById('cartItems')) {
    renderCartPage();
  }

  showMessage('Item removed from cart', 'success');
}

// ============================================
// UPDATE QUANTITY
// ============================================
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(function(item) {
    return item.id === productId;
  });

  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem('leezworld_cart', JSON.stringify(cart));
    updateCartCount();
    
    if (document.getElementById('cartItems')) {
      renderCartPage();
    }
  }
}

// ============================================
// GET CART TOTAL
// ============================================
function getCartTotal() {
  let total = 0;
  cart.forEach(function(item) {
    total += item.price * item.quantity;
  });
  return total;
}

// ============================================
// CLEAR CART
// ============================================
function clearCart() {
  cart = [];
  localStorage.setItem('leezworld_cart', JSON.stringify(cart));
  updateCartCount();
  
  if (document.getElementById('cartItems')) {
    renderCartPage();
  }
  
  showMessage('Cart cleared', 'success');
}

// ============================================
// RENDER CART PAGE
// ============================================
function renderCartPage() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  const emptyCart = document.getElementById('emptyCart');

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'none';
    if (emptyCart) emptyCart.style.display = 'block';
    return;
  }

  cartItemsContainer.style.display = 'block';
  if (cartSummary) cartSummary.style.display = 'block';
  if (emptyCart) emptyCart.style.display = 'none';

  let html = '';
  
  cart.forEach(function(item) {
    const itemTotal = item.price * item.quantity;
    
    html += `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-price">₦${item.price.toLocaleString()}</p>
        </div>
        <div class="cart-item-quantity">
          <button class="qty-btn minus" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn plus" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div class="cart-item-total">
          <p>₦${itemTotal.toLocaleString()}</p>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = html;

  const subtotal = getCartTotal();
  const delivery = subtotal >= 150000 ? 0 : 15000;
  const total = subtotal + delivery;

  const subtotalElement = document.getElementById('cartSubtotal');
  const deliveryElement = document.getElementById('cartDelivery');
  const totalElement = document.getElementById('cartTotal');

  if (subtotalElement) subtotalElement.textContent = '₦' + subtotal.toLocaleString();
  if (deliveryElement) {
    deliveryElement.textContent = delivery === 0 ? 'FREE' : '₦' + delivery.toLocaleString();
  }
  if (totalElement) totalElement.textContent = '₦' + total.toLocaleString();
}

// ============================================
// HANDLE ADD TO CART CLICK - Using Event Delegation
// ============================================
function handleAddToCartClick(e) {
  // Check if clicked element is add to cart button or inside one
  const button = e.target.closest('.add-to-cart-btn');
  
  if (!button) return; // Not an add to cart button
  
  e.preventDefault();
  e.stopPropagation();

  console.log('Add to cart clicked!');

  // Get product info from the product card
  const productCard = button.closest('.product-card');
  
  if (!productCard) {
    console.error('Product card not found!');
    return;
  }

  const productLink = productCard.querySelector('.product-link');
  const productImage = productCard.querySelector('.product-img-container img');
  const productName = productCard.querySelector('.product-name');
  const productPrice = productCard.querySelector('.price');

  // Extract product ID from link
  let productId = Date.now(); // Default to timestamp
  if (productLink) {
    const href = productLink.getAttribute('href');
    const match = href.match(/id=(\d+)/);
    if (match) {
      productId = parseInt(match[1]);
    }
  }

  // Extract price number
  let price = 0;
  if (productPrice) {
    const priceText = productPrice.textContent;
    price = parseInt(priceText.replace(/[₦,]/g, ''));
  }

  // Get other info
  const name = productName ? productName.textContent.trim() : 'Product';
  const image = productImage ? productImage.getAttribute('src') : '';

  console.log('Adding to cart:', { productId, name, price, image });

  // Add to cart
  addToCart(productId, name, price, image);

  // Button animation
  const originalHTML = button.innerHTML;
  button.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
  button.style.background = '#28a745';

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.style.background = '';
  }, 2000);
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('Cart.js loaded!');
  
  // Update cart count on all pages
  updateCartCount();

  // Use event delegation - attach listener to document
  // This works even if buttons are added later
  document.addEventListener('click', handleAddToCartClick);

  // Render cart page if on cart page
  if (document.getElementById('cartItems')) {
    renderCartPage();
  }
  
  console.log('Cart setup complete!');
});

function checkout(){
  window.location.href = "checkout.html";
}
  
// SIMPLE CART FUNCTIONALITY
  

let cart = [];

  
// UPDATE CART COUNT IN HEADER
  
function updateCartCount() {
  // ALWAYS get fresh data from localStorage
  const freshCart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];
  
  const cartCountElements = document.querySelectorAll('#cartCount, .cart-count');
  const totalItems = freshCart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCountElements.forEach(function(element) {
    element.textContent = totalItems;
    
    if (totalItems === 0) {
      element.style.display = 'none';
    } else {
      element.style.display = 'inline-flex';
    }
  });
  
  // Also update the global variable
  cart = freshCart;
}

  
// SHOW MESSAGE
  
function showMessage(message, type) {
  const existingMessage = document.querySelector('.cart-message');
  if (existingMessage) {
    existingMessage.remove();
  }

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

  setTimeout(() => {
    messageDiv.classList.add('show');
  }, 10);

  setTimeout(function() {
    messageDiv.classList.remove('show');
    setTimeout(function() {
      messageDiv.remove();
    }, 300);
  }, 3000);
}

  
// ADD TO CART
  
function addToCart(productId, productName, productPrice, productImage) {
  // Get fresh cart data
  cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];
  
  const existingItem = cart.find(function(item) {
    return item.id === productId;
  });

  if (existingItem) {
    existingItem.quantity += 1;
    showMessage('Item quantity updated in cart!', 'success');
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    });
    showMessage('Added to cart!', 'success');
  }

  localStorage.setItem('leezworld_cart', JSON.stringify(cart));
  updateCartCount();
}

  
// REMOVE FROM CART
  
function removeFromCart(productId) {
  cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];
  
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

  
// UPDATE QUANTITY
  
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];

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

  
// GET CART TOTAL
  
function getCartTotal() {
  cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];
  let total = 0;
  cart.forEach(function(item) {
    total += item.price * item.quantity;
  });
  return total;
}

  
// CLEAR CART
  
function clearCart() {
  cart = [];
  localStorage.setItem('leezworld_cart', JSON.stringify(cart));
  updateCartCount();
  
  if (document.getElementById('cartItems')) {
    renderCartPage();
  }
  
  showMessage('Cart cleared', 'success');
}

  
// RENDER CART PAGE
function renderCartPage() {
  cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];
  
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

  
// HANDLE ADD TO CART CLICK
  
function handleAddToCartClick(e) {
  const button = e.target.closest('.add-to-cart-btn');
  
  if (!button) return;
  
  e.preventDefault();
  e.stopPropagation();

  const productCard = button.closest('.product-card');
  
  if (!productCard) {
    console.error('Product card not found!');
    return;
  }

  const productLink = productCard.querySelector('.product-link');
  const productImage = productCard.querySelector('.product-img-container img');
  const productName = productCard.querySelector('.product-name');
  const productPrice = productCard.querySelector('.price');

  let productId = Date.now();
  if (productLink) {
    const href = productLink.getAttribute('href');
    const match = href.match(/id=(\d+)/);
    if (match) {
      productId = parseInt(match[1]);
    }
  }

  let price = 0;
  if (productPrice) {
    const priceText = productPrice.textContent;
    price = parseInt(priceText.replace(/[₦,]/g, ''));
  }

  const name = productName ? productName.textContent.trim() : 'Product';
  const image = productImage ? productImage.getAttribute('src') : '';

  addToCart(productId, name, price, image);

  const originalHTML = button.innerHTML;
  button.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
  button.style.background = '#28a745';

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.style.background = '';
  }, 2000);
}

  
// INITIALIZE
  
function initCart() {
  // Get cart from localStorage
  cart = JSON.parse(localStorage.getItem('leezworld_cart')) || [];
  
  // Update the count display
  updateCartCount();
  
  // Add click handler
  document.addEventListener('click', handleAddToCartClick);
  
  // Render cart page if on cart page
  if (document.getElementById('cartItems')) {
    renderCartPage();
  }
}

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initCart);

// Run on pageshow (back/forward navigation)
window.addEventListener('pageshow', function() {
  updateCartCount();
  if (document.getElementById('cartItems')) {
    renderCartPage();
  }
});



// Checkout function
function checkout() {
  window.location.href = "checkout.html";
}
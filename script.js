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





function redirect(){
  window.location.href = "shop.html"
}
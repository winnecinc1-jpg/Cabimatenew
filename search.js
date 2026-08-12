let products = [];

// Load product catalog from root folder
fetch('/products.json')
  .then(response => response.json())
  .then(data => { products = data; })
  .catch(err => console.error("Could not load products.json:", err));

function searchProducts() {
  const inputEl = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  
  if (!inputEl || !resultsContainer) return;

  const input = inputEl.value.toLowerCase().trim();
  resultsContainer.innerHTML = '';

  if (input.length === 0) {
    resultsContainer.style.display = 'none';
    return;
  }

  // Filter matches across SKU, title, category, or finish
  const filtered = products.filter(product => 
    (product.sku && product.sku.toLowerCase().includes(input)) ||
    (product.title && product.title.toLowerCase().includes(input)) ||
    (product.category && product.category.toLowerCase().includes(input)) ||
    (product.finish && product.finish.toLowerCase().includes(input))
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<div class="no-results">No hardware found</div>';
    resultsContainer.style.display = 'block';
    return;
  }

  // Render items with SKU pill/badge
  filtered.forEach(product => {
    const item = document.createElement('a');
    item.href = product.url;
    item.className = 'search-item';
    item.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="search-item-info">
        <div class="search-item-header">
          <span class="search-item-title">${product.title}</span>
          ${product.sku ? `<span class="search-item-sku">SKU: ${product.sku}</span>` : ''}
        </div>
        <span class="search-item-meta">${product.finish}</span>
      </div>
    `;
    resultsContainer.appendChild(item);
  });

  resultsContainer.style.display = 'block';
}

// Hide popup if clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    const container = document.getElementById('searchResults');
    if (container) container.style.display = 'none';
  }
});
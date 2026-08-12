let products = [];

// Load products from root directory
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

  // Filter by title, category, or finish
  const filtered = products.filter(product => 
    (product.title && product.title.toLowerCase().includes(input)) ||
    (product.category && product.category.toLowerCase().includes(input)) ||
    (product.finish && product.finish.toLowerCase().includes(input))
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<div class="no-results">No hardware found</div>';
    resultsContainer.style.display = 'block';
    return;
  }

  // Build result items
  filtered.forEach(product => {
    const item = document.createElement('a');
    item.href = product.url;
    item.className = 'search-item';
    item.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="search-item-info">
        <span class="search-item-title">${product.title}</span>
        <span class="search-item-meta">${product.finish}</span>
      </div>
    `;
    resultsContainer.appendChild(item);
  });

  resultsContainer.style.display = 'block';
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    const container = document.getElementById('searchResults');
    if (container) container.style.display = 'none';
  }
});
const products = [
  {
    skus: ["A25-000", "A25-128", "A25-192", "A25-320", "A25-A18"],
    name: "Belfast",
    url: "/details/Belfast.html"
  },
  {
    skus: ["A23-000", "A23-128", "A23-160", "A23-320"],
    name: "Bradford",
    url: "/details/Bradford.html"
  },
  {
    skus: ["A32-000", "A32-128", "A32-160", "A32-320"],
    name: "Brimingham",
    url: "/details/Briminghan.html"
  },
  {
    skus: ["A24-000", "A24-128", "A24-160", "A24-320"],
    name: "Bristol",
    url: "/details/Bristol.html"
  }
];

const searchInput = document.getElementById("searchInput");
const resultsBox = document.getElementById("searchResults");

// debounce (important for scaling)
function debounce(fn, delay = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function renderResults(matches) {
  resultsBox.innerHTML = "";

  if (!matches.length) {
    resultsBox.innerHTML = `
      <div class="search-item" style="cursor:default;">
        No results found
      </div>
    `;
    resultsBox.style.display = "block";
    return;
  }

  matches.forEach(product => {
    const item = document.createElement("div");
    item.className = "search-item";

    item.innerHTML = `
      <div class="search-text">
        <div class="search-title">${product.name}</div>
        <div class="search-sku">${product.skus[0]}</div>
      </div>
    `;

    item.addEventListener("click", () => {
      window.location.href = product.url;
    });

    resultsBox.appendChild(item);
  });

  resultsBox.style.display = "block";
}

const handleSearch = debounce(function (e) {
  const keyword = e.target.value.trim().toLowerCase();

  if (!keyword) {
    resultsBox.style.display = "none";
    resultsBox.innerHTML = "";
    return;
  }

  const matches = products.filter(product =>
    product.name.toLowerCase().includes(keyword) ||
    product.skus.some(sku => sku.toLowerCase().includes(keyword))
  );

  renderResults(matches);
}, 150);

searchInput.addEventListener("input", handleSearch);

// close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-search")) {
    resultsBox.style.display = "none";
  }
});

// show dropdown when focusing input (Shopify feel)
searchInput.addEventListener("focus", () => {
  if (resultsBox.innerHTML.trim() !== "") {
    resultsBox.style.display = "block";
  }
});
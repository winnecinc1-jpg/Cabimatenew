class SharedNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="site-nav">

        <a href="/" class="nav-logo">
          <img src="/cabimate.webp" alt="CABIMATE Logo" class="logo-img">
        </a>

<ul class="nav-links">
  <li><a href="/collection">Collection</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Visit Our Showroom</a></li>
</ul>

<div class="search-wrapper">
  <div class="search-box-minimal">
    <!-- Input Field -->
    <input 
      type="text" 
      id="searchInput" 
      placeholder="What are you looking for?" 
      oninput="searchProducts()" 
      autocomplete="off"
    >
    
    <!-- Action Icons Container -->
    <div class="search-icons">
      <!-- Target / Focus Icon -->
      <button class="icon-btn" aria-label="Target" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
      
      <!-- Magnifying Glass Icon -->
      <button class="icon-btn" aria-label="Search" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  </div>

  <!-- Results Dropdown -->
  <div id="searchResults" class="results-dropdown"></div>
</div>


<a href="/contact" class="nav-cta">
  Shop with Trade Price
</a>

        <button class="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>
    `;

    const hamburger = this.querySelector(".hamburger");
    const navLinks = this.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }
}

customElements.define("shared-navbar", SharedNavbar);
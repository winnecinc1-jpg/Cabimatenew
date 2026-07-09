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
  <li><a href="/contact">Contact</a></li>
</ul>



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
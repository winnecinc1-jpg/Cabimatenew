class SharedFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-top">

<!-- Brand -->
<div>
  <img src="/cabimate.webp" alt="CABIMATE Logo" class="footer-logo">

  <p class="footer-tagline">
    Charm your cabinet. Define your space. Canadian cabinet hardware, crafted for distinction.
  </p>

  <span class="footer-badge">cabimatehardware.com</span>
</div>

          <!-- Company -->
          <div>
            <div class="footer-col-title">Company</div>
            <ul class="footer-links">
              <li><a href="/about.html">About Cabimate</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/contact.html">Trade Program</a></li>
              <li><a href="/collection.html">Collections</a></li>
            </ul>
          </div>

<div>
  <div class="footer-col-title">Contact Us</div>

  <div class="footer-newsletter-heading">
    Email Us For<br>
    Business Inquiries
  </div>

  <p class="footer-newsletter-text">
    Crafted for modern homes that value character, 
    Cabimate Hardware brings a curated blend of vintage warmth and effortless contemporary style to your space. 
    From sleek kitchen cabinet pulls to statement cabinet knobs and architectural handles, our hardware delivers a design-forward edge to custom cabinetry, kitchens, and bath remodels.


  </p>

  <a href="mailto:marketing@winnecinc.com" class="footer-contact-btn">
    Contact Our Team
  </a>
</div>
</div>

        </div>

        <div class="footer-bottom">
          <span>© 2026 Cabimate Hardware. All rights reserved.</span>
          <span class="footer-country">CANADIAN CABINET HARDWARE</span>
        </div>
      </footer>
    `;
  }
}

customElements.define("shared-footer", SharedFooter);
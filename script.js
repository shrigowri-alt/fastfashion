// FASTFASHION shared interactions and demonstration analytics.
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace this in all four HTML files too.

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Product/collection clicks. GA4 select_item is used for item selection interactions.
  document.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.dataset.product;
      if (typeof gtag === "function") {
        gtag("event", "select_item", {
          item_list_name: "FASTFASHION collection",
          items: [{ item_id: itemName.toLowerCase().replaceAll(" ", "_"), item_name: itemName }]
        });
      }
      // The catalogue is a front-end demonstration; no checkout is configured.
      alert(`${itemName} selected! This is a website demonstration — checkout is not enabled.`);
    });
  });

  // Demonstration enquiry form: validate locally, but do not claim a real lead was delivered.
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.querySelector("#contact-status");
      if (!contactForm.reportValidity()) return;
      if (typeof gtag === "function") {
        gtag("event", "demo_form_submit", { form_name: "contact_enquiry_demo" });
      }
      status.textContent = "Thanks! Your demo form passed validation. No message was sent or stored.";
      contactForm.reset();
    });
  }

  // Demonstration newsletter: no mailing list/backend is connected.
  const newsletterForm = document.querySelector("#newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.querySelector("#newsletter-status");
      if (!newsletterForm.reportValidity()) return;
      if (typeof gtag === "function") {
        gtag("event", "demo_form_submit", { form_name: "newsletter_signup_demo" });
      }
      status.textContent = "Thanks for trying the demo! You have not been added to a mailing list.";
      newsletterForm.reset();
    });
  }

  // Simple category filters on the products page.
  const filterButtons = document.querySelectorAll("[data-filter]");
  const productCards = document.querySelectorAll("[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.filter;
      productCards.forEach((card) => {
        card.hidden = category !== "all" && card.dataset.category !== category;
      });
    });
  });
});

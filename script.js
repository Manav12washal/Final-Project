// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Hero Button Click
    const heroBtn = document.getElementById("hero-btn");
    if (heroBtn) {
      heroBtn.addEventListener("click", () => {
        alert("Hero button clicked!");
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "hero_button_click"
        });
      });
    }
  
    // Download Brochure Link
    const downloadLink = document.getElementById("download-link");
    if (downloadLink) {
      downloadLink.addEventListener("click", () => {
        dataLayer.push({
          event: "brochure_download"
        });
      });
    }
  
    // Chat Toggle
    const chatBtn = document.getElementById("chat-open");
    const chatBox = document.getElementById("chat-box");
    if (chatBtn && chatBox) {
      chatBtn.addEventListener("click", () => {
        chatBox.classList.toggle("visible");
        dataLayer.push({
          event: "chat_box_toggle",
          status: chatBox.classList.contains("visible") ? "opened" : "closed"
        });
      });
    }
  
    // Add to Cart Buttons
    document.querySelectorAll(".add-cart-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.parentElement.querySelector("h3").innerText;
        dataLayer.push({
          event: "add_to_cart",
          product_name: name
        });
        alert(`${name} added to cart!`);
      });
    });
  
    // Newsletter Subscribe
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = document.getElementById("newsletter-email").value;
        dataLayer.push({
          event: "newsletter_subscribe",
          email: email
        });
        alert("Thank you for subscribing!");
        newsletterForm.reset();
      });
    }
  });
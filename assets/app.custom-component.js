customElements.get("custom-component") || customElements.define("custom-component", class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const e = () => {
      document.querySelectorAll(".wishlist").forEach(e => {
        e.addEventListener("click", e => {
          e.preventDefault(), window.location.href = "/";
        });
      });
    };
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e, {
      once: !0
    }) : e();
  }
});
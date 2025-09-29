export default (() => {
  if (!customElements.get('custom-component')) {
    customElements.define(
      'custom-component',
      class CustomComponent extends HTMLElement {
        /**
         * Creates an instance of the custom component.
         * Calls the parent class constructor.
         *
         * @constructor
         * @extends HTMLElement
         */
        constructor() {
          super();
        }

        /**
         * Called when the custom element is appended to the document.
         * Logs a message to the console indicating that the custom component has been initialized.
         */
        connectedCallback() {
          const init = () => {
            const wishlistElements = document.querySelectorAll('.wishlist'); 
            wishlistElements.forEach((el) => {
              el.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the default action (if applicable)
                window.location.href = '/'; // Redirect to the homepage
              });
              
            });
          };
        
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init, { once: true });
          } else {
            // still might be too early for AJAXed content, delegation is safer
            init();
          }
        }
      },
    );
  }
})();
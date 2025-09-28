# To-Do List

## 1. Data Setup (Products & Metafields)
- Create test products in Shopify Admin with images from `/assets` (e.g., blazer, trousers, multiple colors). X
- Add variants: X
  - Sizes: 34, 36, 38, 40, 42, 44. X
- Add metafields: X
  - Badge (e.g., "Best seller"). X

---

## 2. Component Section Setup
- Create a new section: `sections/product-slider.liquid`. X
- Add schema for: X
  - **Title**: Text field.  X 
  - **CTA**: Rich text or text + link. X
  - **Products**: Pull in products using `collection.products` or a product list block. X
  - Add translation support for title and CTA. X
- setup product card snippet pass - img, title, price, badge, wishlist, variants. X
    - needs: img, badge, title, price, variant list, +6 colors on required prodtcs Z
    - Set up onHover for badge wishlist and variant list X
    - set up on click underline for selected variant X



---

## 3. Desktop Layout (Static Grid)
- Build a 4-column layout using Tailwind grid. X
- Style product cards: X
  - Image. X
  - Title. X
  - Price. X
- Style product badge / wishlist:  X
- Implement hover states: X
  - Show badge. X
  - Show wishlist icon. X
  - Show “+6 colors”. X
  - Show size selector (variant list). X
- Style wishlist icon and badge 

---


## 4. Mobile Layout (Slider)
- Convert the product grid into a horizontal scroll/slider for the mobile breakpoint.
  - Example: Tap to reveal wishlist/variants.

---

## 5. Sticky Title & CTA
- Implement sticky alignment per Figma:
  - **Desktop**: Title and CTA aligned above the grid.
  - **Mobile**: Title and CTA “stuck” to the bottom of the viewport when scrolling.

---

## 6. Polish & QA
- Swing back to variant colours.
- Verify spacing matches Figma design.
- Check responsive breakpoints.
- Test hover vs. touch behavior:
  - Use `supports-hover:` directive for tablets.
- Run Lighthouse/PageSpeed tests for:
  - Performance.
  - Accessibility.
- Confirm the use of `rem` units instead of `px`.
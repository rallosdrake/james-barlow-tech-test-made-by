document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  if (cards.length === 0) return;

  const touchOnly = window.matchMedia('(hover: none)');
  if (!touchOnly.matches) return;

  function deactivateAll(except) {
    cards.forEach(c => { if (c !== except) c.classList.remove('is-active'); });
  }

  cards.forEach(card => {
    const link = card.querySelector('a');
    link.addEventListener('click', (e) => {
      if (!card.classList.contains('is-active')) {
        e.preventDefault();
        deactivateAll(card);
        card.classList.add('is-active');
      }
    });

    document.addEventListener('click', (evt) => {
      if (!card.contains(evt.target)) card.classList.remove('is-active');
    });

    card.querySelectorAll('.variant-item, button, [data-prevent-nav]')
      .forEach(el => el.addEventListener('click', ev => ev.stopPropagation()));
  });
});
// Mielle — shared snippets injected on every page
(function(){
  const PHONE = '5511999999999'; // placeholder
  const MSG = 'Olá Mielle! Vi o site e gostaria de fazer um pedido.';
  const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`;

  // WhatsApp FAB + tip
  const fab = document.createElement('a');
  fab.className = 'wa-fab';
  fab.href = WA_URL;
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.setAttribute('aria-label', 'Falar no WhatsApp');
  fab.innerHTML = `
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7.1-2.3c1.9 1 4 1.6 6 1.6h.05c7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.6c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-4.2 1.4 1.4-4.1-.3-.4c-1-1.6-1.6-3.4-1.6-5.4C6 9.6 10.6 5 16 5s10 4.6 10 10.5-4.6 10.1-10 10.1zm5.4-7.5c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4z"/>
    </svg>
  `;
  document.body.appendChild(fab);

  const tip = document.createElement('div');
  tip.className = 'wa-tip';
  tip.textContent = 'Faça seu pedido aqui!';
  document.body.appendChild(tip);

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.site-nav .nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path) a.classList.add('active');
  });
})();

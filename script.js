document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((open) => open.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

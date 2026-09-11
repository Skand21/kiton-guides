const enhanceKitonImages = () => {
  document.querySelectorAll('.md-typeset img').forEach((image) => {
    if (image.closest('a')) return;

    const link = document.createElement('a');
    link.href = image.currentSrc || image.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'kiton-image-link';
    link.setAttribute('aria-label', 'Открыть скриншот крупно');

    image.parentNode?.insertBefore(link, image);
    link.appendChild(image);
  });
};

if (window.document$?.subscribe) {
  window.document$.subscribe(enhanceKitonImages);
} else {
  document.addEventListener('DOMContentLoaded', enhanceKitonImages);
}

/*const lazyLoadImg = new IntersectionObserver(
  function (entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;
      if (entry.isIntersecting && target.hasAttribute('data-lazy-load')) {
        if (target.nodeName === 'IMG') {
          target.setAttribute('src', target.getAttribute('data-lazy-load'));
        } else if (target.nodeName === 'SOURCE') {
          target.setAttribute('srcset', target.getAttribute('data-lazy-load'));
        } else {
          target.style.backgroundImage = 'url(' + target.getAttribute('data-lazy-load') + ')';
        }
        target.removeAttribute('data-lazy-load')
        lazyLoadImg.unobserve(target);
        target.style.opacity = 1;
      }
    }
  },
  {
    root: null,
    rootMargin: ( window.innerHeight / 2 ) + 'px ' + ( window.innerWidth / 2 ) + 'px',
    threshold: [0],
  }
);
// Start observing an element
const lazyLoadImgElems = document.querySelectorAll('[ data-lazy-load ]');
for (let i = 0; i < lazyLoadImgElems.length; i++) {
  lazyLoadImg.observe(lazyLoadImgElems[i]);
  lazyLoadImgElems[i].style.opacity = 0;
  lazyLoadImgElems[i].style.transition = '1s';
}*/
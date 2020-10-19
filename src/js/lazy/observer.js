const options = {
  root: document.querySelector('.scroll-area'),
  rootMargin: '0px',
  threshold: 1.0,
  trackVisibility: true,
  delay: 100
};

const logObserver = () => {
  console.log('scroll area observed')
};

export const observer = new IntersectionObserver(logObserver, options);


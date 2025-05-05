
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const update = () => {
      const current = +counter.innerText;
      const increment = target / 200;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 40);
      } else {
        counter.innerText = target;
      }
    };
    update();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        observer.unobserve(counter); // hanya animasi sekali
      }
    });
  }, {
    threshold: 0.6 // mulai animasi saat 60% elemen terlihat
  });

  counters.forEach(counter => observer.observe(counter));


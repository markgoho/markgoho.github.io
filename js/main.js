const contactForm = document.querySelector('.contactForm');

const submitForm = function (e) {
  e.preventDefault();
  this.reset();
};

contactForm.addEventListener('submit', submitForm);


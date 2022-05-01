// Typed words
const typed = new Typed('.professions', {
  strings: [
    'Full Stack JavaScript Developer.',
    'Ing. en Informática.',
    'Scrum Master.',
    'Scrum Product Owner.',
    'Scrum Developer.',
    'Admin. de Sistemas.',
    'Tec. en telecomunicaciones.'
  ],
  typeSpeed: 90,
  backSpeed: 15,
  loop: true
});

// Scroll-Top
window.addEventListener('scroll', () => {
  const scroll = document.querySelector('.scrollUp');
  scroll.classList.toggle('active', window.scrollY > 100);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Tooltips
const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltips.forEach((t) => new bootstrap.Tooltip(t));

// Google Recaptcha v3 (Form contact)
function onSubmit(token) {
  Swal.fire({
    position: 'center',
    icon: 'warning',
    text: 'Temporalmente este formulario esta fuera de servicio, por favor intentalo mas tarde.',
    showConfirmButton: true,
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#3085d6',
    timer: 4000,
    showClass: { popup: 'animate__animated animate__fadeInDown' },
    hideClass: { popup: 'animate__animated animate__fadeOutUp' }
  });
  // document.getElementById('formulario').submit();
}

// Animated RRSS icons
const icons = document.querySelectorAll('.rrss-animated');
icons.forEach(i => {
  i.addEventListener('mouseover', ({ target }) => target.classList.add('animate__animated', 'animate__heartBeat'));
  i.addEventListener('mouseout', ({ target }) => target.classList.remove('animate__animated', 'animate__heartBeat'));
});

// Navbar Collapse
const navbar = document.querySelector('.navbar-collapse');
const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
const navbarCollapse = () => bsCollapse.hide();


  document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los links del menú que tienen href con "#"
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href'); // Ej: #inicio
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Oculta todas las secciones
          sections.forEach(sec => sec.classList.add('d-none'));

          // Muestra solo la sección seleccionada
          targetSection.classList.remove('d-none');

          // Opcional: vuelve arriba
          window.scrollTo(0, 0);

          // Cierra el navbar en móvil si está abierto
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
          }
        }
      });
    });
  });


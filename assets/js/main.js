// KOR Generadores - Folletos Digitales
// Funcionalidad básica para navegación y efectos

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de entrada para las páginas
    const pages = document.querySelectorAll('.page');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    pages.forEach(page => observer.observe(page));

    // Función para imprimir el folleto
    window.printBrochure = function() {
        window.print();
    };

    console.log('KOR Generadores - Folleto Digital cargado correctamente');
});

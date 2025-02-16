document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".resume-section");

    function fadeInSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Configuración inicial: ocultar las secciones
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Ejecutar al hacer scroll
    window.addEventListener("scroll", fadeInSections);

    // Ejecutar al cargar la página (en caso de que alguna sección ya esté en vista)
    fadeInSections();
});

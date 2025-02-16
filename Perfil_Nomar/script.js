document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todas las secciones
    const sections = document.querySelectorAll(".resume-section");

    // Función para mostrar las secciones con efecto
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    // Aplicar el observer a cada sección
    sections.forEach(section => {
        section.classList.add("hidden"); // Añadir clase inicial para ocultarlas
        observer.observe(section);
    });
});

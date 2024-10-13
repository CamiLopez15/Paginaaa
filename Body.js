// ANIMACION DESVANECIDO 
document.addEventListener("DOMContentLoaded", function () {
    // Añadir la clase fade-in al cargar la página
    document.body.classList.add('fade-in');

    // Seleccionar todos los enlaces <a> para aplicar la animación de salida
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace

            const targetUrl = this.href; // Obtener el destino del enlace

            document.body.classList.add('fade-out'); // Añadir la clase fade-out para la animación de salida

            setTimeout(() => {
                window.location.href = targetUrl; // Redirigir después de la animación
            }, 500); // Duración de la animación (0.5 segundos)
        });
    });
});

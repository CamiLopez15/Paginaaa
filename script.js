// Obtener el elemento del video y el contenedor del contenido principal
const video = document.getElementById('intro-video');
const videoContainer = document.getElementById('intro-video-container');
const mainContent = document.getElementById('main-content');

// Cuando el video termina, ocultar el video y redirigir a index.html
video.onended = function() {
    // Ocultar el contenedor del video
    videoContainer.style.display = 'none';
    
    // Redirigir a la página index.html
    window.location.href = "index.html";
};

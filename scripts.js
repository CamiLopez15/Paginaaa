let currentSlide = 0;
const images = document.querySelectorAll('.carousel img');
const audios = [
    'Audios/HS1_mezclaIntento1.wav',  // Audio para la imagen 1
    'Audios/HS2_mezclaIntento.wav',              // Audio para la imagen 2
    'Audios/audio3.wav',              // Audio para la imagen 3
    'Audios/audio4.wav'               // Audio para la imagen 4
];

// Títulos para cada imagen
const titles = [
    'Casa de Lorenzo',  // Título para la imagen 1
    'Tienda',  // Título para la imagen 2
    'Casa de Juvenal',  // Título para la imagen 3
    'Barco'   // Título para la imagen 4
];

// Obtener los elementos del DOM
const audioPlayer = document.getElementById('audioPlayer');  // El reproductor de audio
const audioSource = document.getElementById('audioSource');  // Fuente de audio
const carouselTitle = document.getElementById('carouselTitle');  // El título que muestra el texto

// Función para cambiar de imagen, actualizar el audio y el título
function changeSlide(direction) {
    // Pausa el audio actual si está reproduciéndose
    audioPlayer.pause();
    audioPlayer.currentTime = 0;  // Reinicia el audio para la nueva imagen

    // Oculta la imagen actual
    images[currentSlide].classList.remove('active');

    // Cambia el índice de la imagen actual
    currentSlide = (currentSlide + direction + images.length) % images.length;

    // Muestra la nueva imagen
    images[currentSlide].classList.add('active');

    // Cambia el audio correspondiente, pero no lo reproduce automáticamente
    audioSource.src = audios[currentSlide];
    audioPlayer.load();  // Recarga el nuevo audio, pero no lo reproduce automáticamente

    // Cambia el título correspondiente a la imagen actual
    carouselTitle.textContent = titles[currentSlide];  // Actualiza el título
}

// Al cargar la página, sincroniza el audio y el título con la primera imagen
window.onload = function() {
    audioSource.src = audios[currentSlide];  // Sincroniza el primer audio
    audioPlayer.load();  // Asegura que el reproductor cargue el audio
    carouselTitle.textContent = titles[currentSlide];  // Sincroniza el primer título
};

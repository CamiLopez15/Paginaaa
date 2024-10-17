// Seleccionar todos los elementos de audio
const audios = document.querySelectorAll('.audio-control');

// Función para pausar y reiniciar otros audios cuando uno se reproduce
audios.forEach(audio => {
    audio.addEventListener('play', () => {
        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();     // Pausar cualquier otro audio
                otherAudio.currentTime = 0; // Reiniciar el audio al inicio
            }
        });
    });
});

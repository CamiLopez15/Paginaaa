// Seleccionar todos los elementos de audio
const audios = document.querySelectorAll('.audio-control');

// Función para pausar otros audios cuando uno se reproduce
audios.forEach(audio => {
    audio.addEventListener('play', () => {
        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();  // Pausar cualquier otro audio
            }
        });
    });
});

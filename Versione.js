// Seleccionar todos los elementos de audio
const audios = document.querySelectorAll('.audio-control');

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Función para cerrar un modal específico y pausar el audio
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // Pausar el audio cuando se cierra el modal
    const modalAudios = document.querySelectorAll(`#${modalId} .audio-control`);
    modalAudios.forEach(audio => {
        audio.pause();       // Pausar el audio
        audio.currentTime = 0; // Reiniciar al inicio
    });
}

// Cerrar el modal si se hace clic fuera de él y detener audio
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            // Pausar todos los audios dentro del modal cerrado
            const modalAudios = modals[i].querySelectorAll('.audio-control');
            modalAudios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        }
    }
}

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

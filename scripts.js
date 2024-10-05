let currentPage = 1;
const totalPages = 3; // Cambia esto según la cantidad de páginas

function nextPage() {
    if (currentPage < totalPages) {
        const page = document.getElementById(`page${currentPage}`);
        page.classList.add('flipped');
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const page = document.getElementById(`page${currentPage}`);
        page.classList.remove('flipped');
    }
}

$(document).ready(function () {
    // Asegura que solo un audio se reproduzca a la vez
    $(".audio-player").on("play", function() {
        $(".audio-player").not(this).each(function(index, audio) {
            audio.pause();
            audio.currentTime = 0; // Opcional, para reiniciar el audio pausado
        });
    });
});

function stopAllAudio() {
    $(".audio-player").each(function(index, audio) {
        audio.pause();
        audio.currentTime = 0; // Reinicia los audios
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        stopAllAudio(); // Pausar y reiniciar audios
        const page = document.getElementById(`page${currentPage}`);
        page.classList.add('flipped');
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        stopAllAudio(); // Pausar y reiniciar audios
        currentPage--;
        const page = document.getElementById(`page${currentPage}`);
        page.classList.remove('flipped');
    }
}
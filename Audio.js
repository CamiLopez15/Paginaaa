window.addEventListener('DOMContentLoaded', function() {
    // Crear el elemento de audio ambiente
    var audioAmbiente = document.createElement('audio');
    audioAmbiente.src = 'Audios escenarios/Audio ambiente.wav';  // Asegúrate de que la ruta es correcta
    audioAmbiente.autoplay = true;  // Reproduce automáticamente cuando la página se carga
    audioAmbiente.loop = true;      // Repite el audio en bucle
    audioAmbiente.muted = true;     // Empieza silenciado para evitar problemas con autoplay

    // Hacer el audio ambiente invisible y fijo en la pantalla
    audioAmbiente.style.position = 'fixed';  
    audioAmbiente.style.bottom = '0';         
    audioAmbiente.style.left = '0';           
    audioAmbiente.style.width = '100%';       // Abarca todo el ancho de la página
    audioAmbiente.style.opacity = '0';        // Hacer que el audio sea invisible (sin interferir con el diseño)
    document.body.appendChild(audioAmbiente);  // Agregar el audio al cuerpo de la página

    // Cuando el audio se ha cargado completamente, lo desmutamos y ajustamos el volumen
    audioAmbiente.addEventListener('canplaythrough', function() {
        audioAmbiente.muted = false;  // Desmutea el audio
        audioAmbiente.volume = 0.3;   // Ajusta el volumen
    });

    // Agregar evento de error por si el archivo no carga
    audioAmbiente.addEventListener('error', function() {
        console.error("Error al cargar el archivo de audio ambiente");
    });

    // Obtener todos los audios dentro de la clase '.audio-player' (puede incluir .audio-control u otros)
    var audioPlayers = document.querySelectorAll('.audio-player .audio-control');
    
    // Controlar cada uno de esos audios
    audioPlayers.forEach(function(player) {
        // Cuando un audio con la clase 'audio-control' empieza a reproducirse
        player.addEventListener('play', function() {
            // Pausar el audio ambiente
            audioAmbiente.pause();
        });

        // Cuando un audio con la clase 'audio-control' se pausa
        player.addEventListener('pause', function() {
            // Reanudar el audio ambiente
            audioAmbiente.play();
        });

        // Si el audio con la clase 'audio-control' termina (evento 'ended')
        player.addEventListener('ended', function() {
            // Reanudar el audio ambiente
            audioAmbiente.play();
        });
    });
});

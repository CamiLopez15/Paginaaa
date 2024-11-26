window.addEventListener('DOMContentLoaded', function() {
    var audio = document.createElement('audio');  // Crear el elemento <audio>

    // Ruta al archivo de audio
    audio.src = 'Audios escenarios/Audio ambiente.wav';  // Asegúrate de que la ruta es correcta

    // Configurar reproducción automática y ciclo infinito
    audio.autoplay = true;  // Reproduce automáticamente cuando la página se carga
    audio.loop = true;      // Repite el audio en bucle
    audio.muted = true;     // Empieza silenciado para evitar problemas con autoplay

    // Hacer el audio invisible y fijo en la pantalla
    audio.style.position = 'fixed';  
    audio.style.bottom = '0';         
    audio.style.left = '0';           
    audio.style.width = '100%';       // Abarca todo el ancho de la página
    audio.style.opacity = '0';        // Hacer que el audio sea invisible (sin interferir con el diseño)

    document.body.appendChild(audio);  // Agregar el audio al cuerpo de la página

    // Cuando el audio se ha cargado completamente, lo desmutamos y ajustamos el volumen
    audio.addEventListener('canplaythrough', function() {
        audio.muted = false;  // Desmutea el audio
        audio.volume = 0.3;   // Ajusta el volumen (puedes cambiar entre 0 y 1)
    });

    // Agregar evento de error por si el archivo no carga
    audio.addEventListener('error', function() {
        console.error("Error al cargar el archivo de audio");
    });
});

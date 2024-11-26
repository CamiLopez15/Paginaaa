window.addEventListener('DOMContentLoaded', function() {
    var audio = document.createElement('audio');  // Crear el elemento <audio>
    
    // Ruta al archivo de audio (asegúrate de que la ruta sea correcta)
    audio.src = 'Audios escenarios/Audio ambiente.wav';  // Cambia esta ruta si es necesario
    
    audio.autoplay = true;   // Reproduce automáticamente cuando la página carga
    audio.loop = true;       // Repite el audio en bucle
    audio.style.position = 'fixed';  // Fija el audio en la ventana
    audio.style.bottom = '0';  // Lo coloca en la parte inferior
    audio.style.left = '0';  // Alineado a la izquierda
    audio.style.width = '100%';  // Abarca todo el ancho de la página
    audio.style.opacity = '0';  // Hacer que el audio sea invisible

    // Establecer el volumen a un valor más bajo (si lo deseas)
    audio.volume = 0.5;  // Volumen a la mitad (puedes ajustar este valor entre 0 y 1)

    document.body.appendChild(audio);  // Agregar el audio al cuerpo de la página
});

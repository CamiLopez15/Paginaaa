 // Función para abrir un modal específico
 function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Función para cerrar un modal específico
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
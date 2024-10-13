let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Mueve entre los slides
    const rotationDegree = currentSlide * -120; // Cada slide gira 120 grados
    document.querySelector('.carousel').style.transform = `rotateY(${rotationDegree}deg)`; // Aplica la rotación
}

function downloadImage(imgPath, fileName) {
    var a = document.createElement('a');
    a.href = imgPath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function shareOnWhatsApp(imgPath) {
    var fullURL = "https://camilopez15.github.io/Paginaaa/" + imgPath;
    var message = "Mira esta carta, te lo manda alguien especial <3: " + fullURL;
    var whatsappWebURL = "https://web.whatsapp.com/send?text=" + encodeURIComponent(message);
    window.open(whatsappWebURL, '_blank');
}
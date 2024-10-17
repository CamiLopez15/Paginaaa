let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // Pausar todos los audios cuando se cambia de slide
        pauseAllAudios();


        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    function pauseAllAudios() {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;  // Reiniciar el audio al inicio
        });
    }
    
    
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
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
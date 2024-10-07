let currentPage = 1;
const totalPages = 5; // Cambia esto según la cantidad de páginas en tu libro
class FlipBook{
    constructor(bookElem){
        this.elems={
            book:bookElem, leaves:bookElem.querySelectorAll(".leaf"),buttons:{
                next:document.getElementById("nextPage"),
                prev:document.getElementById("prevPage")
            }
        };
        this.setupEvents();
        this.currentPagePosition = 0;
        this.turnPage(0);
    }
    setPagePosition(page,position,index){
        var transform = "";
        transform = "translate3d(0,0,"+((position<0?1:-1)*Math.abs(index))+"px)"

        if(position<0){
            transform+="rotate3d(0,1,0,-180deg)";

            page.classList.add("turned")
        }else{
            page.classList.remove("turned")
        }
        if(page.style.transform != transform){
            page.style.transform= transform;
        }
    }
    turnPage(delta){
        this.currentPagePosition+=delta;
        if(this.currentPagePosition < 0){
            this.currentPagePosition = 0;
            return;
        }
        if(this.currentPagePosition > this.elems.leaves.length){
            this.currentPagePosition = this.elems.leaves.length;
            return;
        }
        this.elems.leaves.forEach((page,index)=>{
            var pageNumber = index;
            this.setPagePosition(page,pageNumber-this.currentPagePosition,index)
        });

        if(this.currentPagePosition == 0){
            this.elems.buttons.prev.setAttribute("disabled","disabled");
        }else
            if(this.currentPagePosition == this.elems.leaves.length){
                 this.elems.buttons.next.setAttribute("disabled","disabled");
            } else{
                 this.elems.buttons.next.removeAttribute("disabled");
                     this.elems.buttons.prev.removeAttribute("disabled");
            }
        }

        setupEvents(){
            document.getElementById("nextPage").addEventListener("click",()=>{
                this.turnPage(1);
            });
              document.getElementById("prevPage").addEventListener("click",()=>{
                this.turnPage(-1);
        });
    }
    

}
var flipBook = new FlipBook(document.getElementById("flipbook"));


function stopAllAudio() {
    $(".audio-player").each(function() {
        this.pause();
        this.currentTime = 0; // Reinicia el audio
    });
}

$(document).ready(function() {
    console.log("jQuery está funcionando correctamente");
});

$(document).ready(function () {
    // Reproducción de audio
    $(".audio-player").on("play", function() {
        console.log("Reproduciendo audio", $(this).attr("src"));
        stopAllAudio();  // Detiene otros audios
        $(this)[0].play();  // Reproduce el audio actual
    });

    // Detiene todos los audios cuando cambias de página
    $("#nextPage, #prevPage").on("click", function() {
        console.log("Página cambiada, deteniendo audios");
        stopAllAudio();
    });
});

// Función para detener todos los audios
function stopAllAudio() {
    $(".audio-player").each(function() {
        this.pause();
        this.currentTime = 0; // Reinicia el audio
    });
}

function setDisplay(e, state){
    e.style.display = state;
}

// Adapta o canvas para o tamanho da tela
function adjustScreen(){
    if(screen.width < 330 || x < 330){
        $("#cvs").attr("width", 280);
        $("#cvs").attr("height", 400);
    }
    else if(screen.width < 362 || x < 362){
        $("#cvs").attr("width", 336);
        $("#cvs").attr("height", 426);
    }
    else if(screen.width < 482 || x < 482){
        $("#cvs").attr("width", 440);
        $("#cvs").attr("height", 220);
    }
    else if(screen.width < 642 || x < 642){
        $("#cvs").attr("width", 500);
        $("#cvs").attr("height", 250);
    }
    else if(screen.width < 990 || x < 990){
        $("#cvs").attr("width", 720);
        $("#cvs").attr("height", 320);
    }
    else {
        $("#cvs").attr("width", 800);
        $("#cvs").attr("height", 400);
    }
}
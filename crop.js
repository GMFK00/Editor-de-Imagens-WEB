var cropBtn = document.getElementById("crop");
var croping = false;

cropBtn.addEventListener('click', () => {
    if(croping == false){
        croping = true;

    }else{
        croping = false;
    }
});
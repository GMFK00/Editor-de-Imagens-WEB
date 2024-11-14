window.addEventListener('load', () => {
    document.querySelector("#filters").style.display = "none";
    document.querySelector("#effects").style.display = "none";

});

function setDisplay(e, state){
    e.style.display = state;
}
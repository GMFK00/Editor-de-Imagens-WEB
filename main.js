const canvas = document.getElementById("canvasArea");
const ctx = canvas.getContext("2d", {antialias: false});
//const overlaycanvas = document.getElementById("overlay-canvas");
//const ctx2 = overlaycanvas.getContext("2d", {antialias: false});
var imgOriginal = document.getElementById("imgOriginal");
var fileInput = document.getElementById("fileUp");
const dpr = window.devicePixelRatio;
var croping = false;
var ratio;
var historico = [];
var rect;

document.getElementById("btnOpenFile").addEventListener('click', () => {
    fileInput.click();
});

canvas.addEventListener('mouseover', () => {
  if(croping == true){
    canvas.style.cursor = 'crosshair';
  }
  else{
    canvas.style.cursor = 'default';
  }
});

const enableElement = (value, index, array) => {
  array[index].classList.remove("disabled");
}

window.addEventListener('load', () => {
  rect = canvas.getBoundingClientRect();
});
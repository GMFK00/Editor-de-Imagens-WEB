const canvas = document.getElementById("canvasArea");
var imgOriginal = document.getElementById("imgOriginal");
var fileInput = document.getElementById("fileUp");
const dpr = window.devicePixelRatio;
const ctx = canvas.getContext("2d", {antialias: false});
var croping = false;
var ratio;

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
var canvas = document.getElementById("canvasArea");
var imgOriginal = document.getElementById("imgOriginal");
var fileInput = document.getElementById("fileUp");
const dpr = window.devicePixelRatio;

document.getElementById("btnOpenFile").addEventListener('click', () => {
    fileInput.click();
});

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            imgOriginal.src = e.target.result;
            draw();
        };       
        file.readAsDataURL(this.files[0]);
    }
}

async function draw() {
  // Wait for all images to be loaded:
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );
  const rect = canvas.getBoundingClientRect();
  canvas.width = imgOriginal.width;
  canvas.height = imgOriginal.height;
  let ratio = Math.min(rect.width/imgOriginal.width, rect.height/imgOriginal.height);
  canvas.style.width = `${imgOriginal.width * ratio}px`;
  canvas.style.height = `${imgOriginal.height * ratio}px`;
  const ctx = canvas.getContext("2d", {antialias: false});
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(imgOriginal, 0, 0, imgOriginal.width * dpr, imgOriginal.height * dpr, 0, 0, imgOriginal.width * dpr, imgOriginal.height * dpr);
  Array.from(document.getElementsByClassName("top-bar-icon")).forEach(enableElement);
  Array.from(document.getElementsByClassName("left-bar-icon")).forEach(enableElement);
  //adjustScreen();
}

document.getElementById("fileUp").addEventListener("change", readImage, false);

window.addEventListener('load', () => {
  document.querySelector("#filters").style.display = "none";
});

canvas.addEventListener('mouseover', () => {
  if(croping == true){
    canvas.style.cursor = 'crosshair';
  }
  else{
    canvas.style.cursor = 'default';
  }
});

function enableElement(value, index, array){
  array[index].classList.remove("disabled")
}
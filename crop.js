let cropping = false;
let cropRect = null;
let startPoint = null;
var areaCorte = null;
var debug = document.getElementById("debug");
var uppercanvas = null;
var reloadbtn = document.getElementById('reload');

// Calcula a razão de escala da imagem
function calcularRatio() {
  var rect = canvasFabric.upperCanvasEl.getBoundingClientRect();
  var imgWidth = imgInstance.width;
  var imgHeight = imgInstance.height;
  var canvasWidth = rect.width;
  var canvasHeight = rect.height;
  
  ratio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
}

// Funções para handle eventos
function handleMouseDown(event) {
  if (cropping) {
    calcularRatio();
    var x = event.offsetX/ratio;
    var y = event.offsetY/ratio;
    console.log("ratio: " + ratio + "\n");
    console.log("x: " + x + " y: " + y + "\n");
    console.log(imgInstance.left + " " + imgInstance.top + "\n");
    
    cropRect.set({
      left: x,
      top: y,
      width: 0,
      height: 0,
    });
    startPoint = {
      x: x,
      y: y
    };
  }
}

function handleMouseMove(event) {
  if (cropping && startPoint) {
    calcularRatio();
    var x = event.offsetX/ratio;
    var y = event.offsetY/ratio;
    
    cropRect.set({
      width: x - cropRect.left,
      height: y - cropRect.top,
    });
    canvasFabric.renderAll();
  }
}

function handleMouseUp(event) {
  if (cropping) {
    console.log("width: " + cropRect.width + " height: " + cropRect.height + "\n");
    startPoint = null;
  }
}

// Função para criar o retângulo de seleção
function criarRetanguloDeSelecao() {
  cropRect = new fabric.Rect({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    fill: 'rgba(0, 0, 0, 0)',
    stroke: 'red',
    strokeWidth: 2,
  });
  canvasFabric.add(cropRect);
}

// Função para remover o retângulo de seleção
function removerRetanguloDeSelecao() {
  canvasFabric.remove(cropRect);
  cropRect = null;
}

// Adiciona evento de clique ao botão de crop
document.getElementById('cropbtn').addEventListener('click', function() {
  setDisplay(reloadbtn, "block");
  uppercanvas = document.getElementsByClassName("upper-canvas")[0];
    rundebug();
    calcularRatio();
    console.log(imgInstance.width*ratio + " " + imgInstance.height*ratio);
  if (!cropping) {
    cropping = true;
    criarRetanguloDeSelecao();
    document.getElementById('acceptbtn').style.display = 'flex';
    
    document.querySelector('.upper-canvas').addEventListener('mousedown', handleMouseDown);
    document.querySelector('.upper-canvas').addEventListener('mousemove', handleMouseMove);
    document.querySelector('.upper-canvas').addEventListener('mouseup', handleMouseUp);
  } else {
    cropping = false;
    document.getElementById('acceptbtn').style.display = 'none';
    removerRetanguloDeSelecao();
    
    document.querySelector('.upper-canvas').removeEventListener('mousedown', handleMouseDown);
    document.querySelector('.upper-canvas').removeEventListener('mousemove', handleMouseMove);
    document.querySelector('.upper-canvas').removeEventListener('mouseup', handleMouseUp);
  }
});

// Adiciona evento de clique ao botão de accept
document.getElementById('acceptbtn').addEventListener('click', function() {
  console.log("crop.left: " + cropRect.left + "\n crop.top: " + cropRect.top + "\n crop.width: " + cropRect.width + "\n crop.height: " + cropRect.height + "\n");
  if (cropping) {
    var left = cropRect.left;
    var top = cropRect.top;
    var width = cropRect.width;
    var height = cropRect.height;

    console.log(imgInstance.width*ratio + " " + imgInstance.height*ratio + "\n");

    console.log("left: " + left + " top: " + top + " width: " + width + " height: " + height + "\n");
    // Recorte a imagem
    var croppedImg = new fabric.Image(imgInstance._element, {
      left: 0,
      top: 0,
      clipPath: new fabric.Rect({
        left: (0-(imgInstance.width/2)) + left,
        top: (0-(imgInstance.height/2)) + top,
        width: width,
        height: height,
      }),
    });
    canvasFabric.clear();
    canvasFabric.add(croppedImg);
    canvasFabric.remove(imgInstance);
    
    imgInstance = croppedImg;

    actualImage.src = canvasFabric.toDataURL();

    canvasFabric.renderAll();
    
    cropping = false;
    document.getElementById('acceptbtn').style.display = 'none';
    //removerRetanguloDeSelecao();
    
    document.querySelector('.upper-canvas').removeEventListener('mousedown', handleMouseDown);
    document.querySelector('.upper-canvas').removeEventListener('mousemove', handleMouseMove);
    document.querySelector('.upper-canvas').removeEventListener('mouseup', handleMouseUp);
  }
});

function rundebug(){
    uppercanvas.addEventListener('mousemove', (e) => {

        let rect = uppercanvas.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        debug.innerHTML = "x: " + x + " y: " + y;
        
      if(cropping == true){
        document.getElementsByClassName("upper-canvas")[0].style.cursor = 'crosshair';
      }
      else{
        document.getElementsByClassName("upper-canvas")[0].style.cursor = 'default';
      }
    });
}

reloadbtn.addEventListener('click', (e) => {
  var newImg = new fabric.Image(imgOriginal, {
    left: cropRect.left,
    top: cropRect.top,
    opacity: 1,
    originX: "left",
    originY: "top",
    width: cropRect.width,
    height: cropRect.height,
    lockMovementX: false,
    lockMovementY: false,
    selectable: true
  });

  canvasFabric.isDragging = false;
  removerRetanguloDeSelecao();
  
  // Adicionar o novo objeto ao canvas
  canvasFabric.clear();
  canvasFabric.add(newImg);
  canvasFabric.renderAll();
});
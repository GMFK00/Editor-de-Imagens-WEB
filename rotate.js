var angle = 0;

document.getElementById("rotateR").addEventListener("click", function() {
    angle += 90;
    imgInstance.rotate(angle);
    canvasFabric.renderAll();
});

document.getElementById("rotateL").addEventListener("click", function() {
    angle -= 90;
    imgInstance.rotate(angle);
    canvasFabric.renderAll();
});


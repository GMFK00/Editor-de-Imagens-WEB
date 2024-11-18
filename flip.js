document.getElementById("flipv").addEventListener("click", function() {
    imgInstance.toggle('flipY');
    canvasFabric.renderAll();
});
 
document.getElementById("fliph").addEventListener("click", function() {
    imgInstance.toggle('flipX');
    canvasFabric.renderAll();
});
var move = false;

document.getElementById("togglemove").addEventListener("click", function() {
    if(move == false){
        move = true;
        imgInstance.toggle('lockMovementX', false);
        imgInstance.toggle('lockMovementY', false);
        imgInstance.toggle('selectable', true);
        canvasFabric.isDragging = true;
        canvasFabric.renderAll();
    }    
    else{
        move = false;
        imgInstance.toggle('lockMovementX', true);
        imgInstance.toggle('lockMovementY', true);
        imgInstance.toggle('selectable', false);
        canvasFabric.isDragging = false;
        canvasFabric.renderAll();
    }
    
});

/*var cropBtn = document.getElementById("crop");
var selectOrigin = null;
var cropOrign;

cropBtn.addEventListener('click', () => {
    if(croping == false){
        croping = true;
        setDisplay(overlaycanvas, "flex");
        overlaycanvas.style.opacity = 0.5;
    }else{
        croping = false;
        overlaycanvas.style.opacity = 0;
        setDisplay(overlaycanvas, "none");
    }
});

const drawImage = () => {
	//ctx2.drawImage(imgOriginal, 0, 0);
    ctx2.drawImage(historico[-1].src, selectOrigin.x/ratio, selectOrigin.y/ratio, (e.offsetX - selectOrigin.x) / ratio, (e.offsetY - selectOrigin.y) / ratio, 0, 0, imgOriginal.width * dpr, imgOriginal.height * dpr);
};

const drawSelection = (e) => {
    var rect = e.currentTarget.getBoundingClientRect();
    ctx2.strokeStyle = "#000";
    ctx2.beginPath();
    ctx2.rect(selectOrigin.x/ratio, selectOrigin.y/ratio, (e.offsetX - selectOrigin.x) / ratio, (e.offsetY - selectOrigin.y) / ratio);
    ctx2.stroke();
};

const clear = () => {
    ctx2.strokeStyle = "#000";
    ctx2.clearRect(0, 0, overlaycanvas.width, overlaycanvas.height);
};

const render = (e) => {
	clear();
    //drawImage();
    if (selectOrigin) drawSelection(e);
};

overlaycanvas.addEventListener("mousedown", (e) => {
    if(croping == true){
        selectOrigin = {x: e.offsetX, y: e.offsetY};
    }
});

overlaycanvas.addEventListener("mouseup", (e) => {
    if(croping == true){
        var imageObj = new Image();
        imageObj.src = canvas.toDataURL();
        
        ctx2.closePath();
        ctx2.lineWidth = "2";
        ctx2.setLineDash([5, 15]);
        ctx2.strokeStyle = "rgba(0, 0, 0, 1)";
        ctx2.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx2.fillRect(0, 0, canvas.width, canvas.height);
  
        cropOrign = {x: selectOrigin.x, y: selectOrigin.x};
        selectOrigin = null;
        ctx.drawImage(imageObj, cropOrign.x/ratio, cropOrign.y/ratio, (e.offsetX - cropOrign.x) / ratio, (e.offsetY - cropOrign.y) / ratio, 0, 0, imgOriginal.width * dpr, imgOriginal.height * dpr);
        
        ctx2.globalCompositeOperation = "destination-out";
        ctx2.fill();
        croping = false;
        render(e);
    }
});

overlaycanvas.addEventListener("mousemove", render);*/
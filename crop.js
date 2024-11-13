var cropBtn = document.getElementById("crop");
//const canvas = document.getElementById("crop-overlay");
//var ctx2 = canvas.getContext("2d");;
var cropOrigin = null;

cropBtn.addEventListener('click', () => {
    if(croping == false){
        
        croping = true;
        //canvas.style.display = "block";
    }else{
        croping = false;
        //canvas.style.display = "none";
    }
});

const drawImage = () => {
	ctx.drawImage(imgOriginal, 0, 0);
};

const drawSelection = (e) => {
    var rect = e.currentTarget.getBoundingClientRect()
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.rect(cropOrigin.x/ratio, cropOrigin.y/ratio, (e.offsetX - cropOrigin.x) / ratio, (e.offsetY - cropOrigin.y) / ratio);
    ctx.stroke();
};

const clear = () => {
    ctx.strokeStyle = "#fff";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const render = (e) => {
	clear();
    drawImage();
    if (cropOrigin) drawSelection(e);
};

canvas.addEventListener("mousedown", (e) => {
    if(croping == true){
        cropOrigin = {x: e.offsetX, y: e.offsetY}
    }
});

canvas.addEventListener("mouseup", (e) => {
    if(croping == true){
        cropOrigin = null;
        render(e);
    }
});

canvas.addEventListener("mousemove", render);
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
  canvasFabric = new fabric.Canvas('canvasArea');
  var imgInstance = new fabric.Image(imgOriginal, {
  left: 0,
  top: 0,
  opacity: 1,
  innerWidth: imgOriginal.width,
  innerHeight: imgOriginal.height
});
  canvasFabric.add(imgInstance);
  canvasFabric.setWidth(imgOriginal.width);
  canvasFabric.setHeight(imgOriginal.height);
  Array.from(document.getElementsByClassName("top-bar-icon")).forEach(enableElement);
  Array.from(document.getElementsByClassName("left-bar-icon")).forEach(enableElement);
}

document.getElementById("fileUp").addEventListener("change", readImage, false);

import {Application, Assets, Container, Sprite } from 'pixi.js';

(async () =>
    {const app = new PIXI.Application({
    view: document.getElementById("canvasArea"),
    width: 800,
    height: 600
});

let currentImage = new PIXI.Sprite.from(imgOriginal.src);
currentImage.x = 150;
currentImage.y = 50;
app.stage.addChild(currentImage);
})();

const effectsBtn = document.getElementById("effectsbtn");
const effectsBox = document.querySelector("#effects");
const effectElements = Array.from(document.getElementsByClassName("effectElement"));

effectsBtn.addEventListener('click', () => {
    if(effectsBox.style.display == "none"){
        setDisplay(effectsBox, "flex");
    } else {
        setDisplay(effectsBox, "none");
    }
});

effectElements.forEach((element, index) => {
    element.addEventListener("click", () => {
        applyEffect(index);
    });
});

function applyEffect(index) {
    // Resetando a imagem
    currentImage.filters = [];

    switch(index) {
        case 0: applyVintage(); break;
        case 1: applyLomo(); break;
        case 2: applyClarity(); break;
        case 3: applySinCity(); break;
        case 4: applyCrossProcess(); break;
        case 5: applyOrangePeel(); break;
        case 6: applyLove(); break;
        case 7: applyGrungy(); break;
        case 8: applyJarques(); break;
        case 9: applyPinhole(); break;
        case 10: applyOldBoot(); break;
        case 11: applyGlowingSun(); break;
        case 12: applySunrise(); break;
        case 13: applyGrayscale(); break;
        case 14: applyMagesty(); break;
        case 15: applyNostalgia(); break;
        case 16: applyOilPainting(); break;
        case 17: applyVignette(); break;
        case 18: applyPencilDrawing(); break;
        case 19: applyPixelate(); break;
        case 20: applyEngraving(); break;
        case 21: applyGranulado(); break;
    }
}

function applyVintage() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(0.2).contrast(1.2).hue(45);
    currentImage.filters = [colorMatrix];
}

function applyLomo() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(1.5).brightness(0.1).contrast(1.5);
    currentImage.filters = [colorMatrix];
}

function applyClarity() {
    const sharpness = new PIXI.filters.BlurFilter();
    sharpness.blur = 0;
    currentImage.filters = [sharpness];
}

function applySinCity() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.desaturate().invert();
    currentImage.filters = [colorMatrix];
}

function applyCrossProcess() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(1.5).contrast(0.7);
    currentImage.filters = [colorMatrix];
}

function applyOrangePeel() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.hue(100).saturate(1.5);
    currentImage.filters = [colorMatrix];
}

function applyLove() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(1.2).contrast(1.2).hue(45);
    currentImage.filters = [colorMatrix];
}

function applyGrungy() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(0.5).contrast(1.3);
    currentImage.filters = [colorMatrix];
}

function applyJarques() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(0.5).brightness(1.3);
    currentImage.filters = [colorMatrix];
}

function applyPinhole() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.invert();
    currentImage.filters = [colorMatrix];
}

function applyOldBoot() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(0.3).contrast(0.8);
    currentImage.filters = [colorMatrix];
}

function applyGlowingSun() {
    const glowFilter = new PIXI.filters.GlowFilter(15, 2, 1, 0xFFFF00);
    currentImage.filters = [glowFilter];
}

function applySunrise() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.hue(45);
    currentImage.filters = [colorMatrix];
}

function applyGrayscale() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.desaturate();
    currentImage.filters = [colorMatrix];
}

function applyMagesty() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(1.5).contrast(1.5).brightness(1.5);
    currentImage.filters = [colorMatrix];
}

function applyNostalgia() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.saturate(0.5).hue(-45);
    currentImage.filters = [colorMatrix];
}

function applyOilPainting() {
    const blurFilter = new PIXI.filters.BlurFilter();
    blurFilter.blur = 5;
    currentImage.filters = [blurFilter];
}

function applyVignette() {
    const vignette = new PIXI.Graphics();
    vignette.beginFill(0x000000, 0.5); // Cor preta com 50% de opacidade
    vignette.drawCircle(currentImage.width / 2, currentImage.height / 2, currentImage.width / 2);
    vignette.endFill();
    currentImage.mask = vignette;
    app.stage.addChild(vignette);
}

function applyPencilDrawing() {
    const embossFilter = new PIXI.filters.EmbossFilter();
    embossFilter.strength = 5;
    currentImage.filters = [embossFilter];
}

function applyPixelate() {
    const pixelateFilter = new PIXI.filters.PixelateFilter();
    pixelateFilter.size = 10;
    currentImage.filters = [pixelateFilter];
}

function applyEngraving() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.invert();
    colorMatrix.contrast(2);
    currentImage.filters = [colorMatrix];
}

function applyGranulado() {
    const noiseFilter = new PIXI.filters.NoiseFilter();
    currentImage.filters = [noiseFilter];
}

function setDisplay(element, value) {
    element.style.display = value;
}
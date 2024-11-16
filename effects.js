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

// Inicializa o canvas WebGL do glfx.js
let glfxCanvas;
let originalTexture; // Para armazenar a textura original

try {
    glfxCanvas = fx.canvas();
} catch (e) {
    alert("Seu navegador não suporta WebGL.");
    throw e;
}

// Função para carregar a textura original
function loadOriginalTexture() {
    const image = document.getElementById("canvasArea");
    originalTexture = glfxCanvas.texture(image); // Carrega a imagem inicial como textura
}

// Função principal para aplicar efeitos
function applyEffect(index) {
    if (!originalTexture) {
        loadOriginalTexture(); // Garante que a textura original foi carregada
    }
    
    // Remove o efeito escolhido usando o Caman.js
    Caman(canvas, function() {
        this.reset();
    });

    switch(index) {
        case 0: applyVintage(); break; // Vintage
        case 1: applyLomo(); break; // Lomo
        case 2: applyClarity(); break; // Clarity
        case 3: applySinCity(); break; // Sin City
        case 4: applyCrossProcess(); break; // Cross Process
        case 5: applyOrangePeel(); break; // Orange Peel
        case 6: applyLove(); break; // Love
        case 7: applyGrungy(); break; // Grungy
        case 8: applyJarques(); break; // Jarques
        case 9: applyPinhole(); break; // Pinhole
        case 10: applyOldBoot(); break; // Old Boot
        case 11: applyGlowingSun(); break; // Glowing Sun
        case 12: applySunrise(); break; // Sunrise
        case 13: applyGrayscale(); break; // Grayscale
        case 14: applyMagesty(); break; // Magesty
        case 15: applyNostalgia(); break; // Nostalgia
        case 16: applyOilPainting(); break; // Oil Painting
        case 17: applyVignette(); break; // Vignette
        case 18: applyPencilDrawing(); break; // Pencil Drawing
        case 19: applyPixelate(); break; // Pixelate
        case 20: applyEngraving(); break; // Engraving
        case 21: applyGranulado(); break; // Granulado
    }
}

// Efeitos da Caman.js
function applyVintage() {
    Caman(canvas, function () {
        this.vintage().render();
    });
}

function applyLomo() {
    Caman(canvas, function () {
        this.lomo().render();
    });
}

function applyClarity() {
    Caman(canvas, function () {
        this.clarity().render();
    });
}

function applySinCity() {
    Caman(canvas, function () {
        this.sinCity().render();
    });
}

function applyCrossProcess() {
    Caman(canvas, function () {
        this.crossProcess().render();
    });
}

function applyOrangePeel() {
    Caman(canvas, function () {
        this.orangePeel().render();
    });
}

function applyLove() {
    Caman(canvas, function () {
        this.love().render();
    });
}

function applyGrungy() {
    Caman(canvas, function () {
        this.grungy().render();
    });
}

function applyJarques() {
    Caman(canvas, function () {
        this.jarques().render();
    });
}

function applyPinhole() {
    Caman(canvas, function () {
        this.pinhole().render();
    });
}

function applyOldBoot() {
    Caman(canvas, function () {
        this.oldBoot().render();
    });
}

function applyGlowingSun() {
    Caman(canvas, function () {
        this.glowingSun().render();
    });
}

function applySunrise() {
    Caman(canvas, function () {
        this.sunrise().render();
    });
}

function applyGrayscale() {
    Caman(canvas, function () {
        this.greyscale().render();
    });
}

function applyMagesty() {
    Caman(canvas, function () {
        this.saturation(25)
            .contrast(30)
            .brightness(15)
            .render();
    });
}

function applyNostalgia() {
    Caman(canvas, function () {
        this.nostalgia().render();
    });
}

// Efeitos do glfx.js
function applyOilPainting() {
    glfxCanvas.draw(originalTexture).ink(0.25).update();
    replaceCanvasWithGLFX();
}

function applyVignette() {
    glfxCanvas.draw(originalTexture).vignette(0.5, 0.8).update();
    replaceCanvasWithGLFX();
}

function applyPencilDrawing() {
    glfxCanvas.draw(originalTexture).edgeWork(3).update();
    replaceCanvasWithGLFX();
}

function applyPixelate() {
    glfxCanvas.draw(originalTexture).hexagonalPixelate(320, 239.5, 10).update();
    replaceCanvasWithGLFX();
}

function applyEngraving() {
    glfxCanvas.draw(originalTexture).dotScreen(320, 239.5, 1.1, 3).update();
    replaceCanvasWithGLFX();
}

// Substitui a imagem/canvas original pelo canvas do glfx.js
function replaceCanvasWithGLFX() {
    const image = document.getElementById("canvasArea");
    image.parentNode.insertBefore(glfxCanvas, image);
    image.parentNode.removeChild(image);
}

// Efeito da Caman.js
function applyGranulado() {
    Caman(canvas, function () {
        this.noise(30).render();
    });
}

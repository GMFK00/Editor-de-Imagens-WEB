const effectsBtn = document.getElementById("effectsbtn");
const effectsBox = document.querySelector("#effects");
const effectElements = Array.from(document.getElementsByClassName("effectElement"));

effectsBtn.addEventListener('click', () => {
    effectsBox.style.display = effectsBox.style.display === "none" ? "flex" : "none";
});

effectElements.forEach((element, index) => {
    element.addEventListener("click", () => {
        applyEffect(index);
    });
});

// Inicializa o canvas WebGL do glfx.js
let glfxCanvas;
let originalTexture;

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

    if (index <= 15) {
        // Efeitos da Caman.js
        Caman("#canvasArea", function () {
            this.reset();
            switch (index) {
                case 0: this.vintage().render(); break;
                case 1: this.lomo().render(); break;
                case 2: this.clarity().render(); break;
                case 3: this.sinCity().render(); break;
                case 4: this.crossProcess().render(); break;
                case 5: this.orangePeel().render(); break;
                case 6: this.love().render(); break;
                case 7: this.grungy().render(); break;
                case 8: this.jarques().render(); break;
                case 9: this.pinhole().render(); break;
                case 10: this.oldBoot().render(); break;
                case 11: this.glowingSun().render(); break;
                case 12: this.sunrise().render(); break;
                case 13: this.greyscale().render(); break;
                case 14: this.saturation(25).contrast(30).brightness(15).render(); break;
                case 15: this.nostalgia().render(); break;
            }
        });
    } else {
        // Efeitos do glfx.js
        applyGLFXEffect(index);
    }
}

// Aplica efeitos do glfx.js
function applyGLFXEffect(index) {
    const canvasArea = document.getElementById("canvasArea");
    const context = canvasArea.getContext("2d");

    // Aplica o efeito no canvas WebGL
    switch (index) {
        case 16: glfxCanvas.draw(originalTexture).ink(0.25).update(); break;
        case 17: glfxCanvas.draw(originalTexture).vignette(0.5, 0.6).update(); break;
        case 18: glfxCanvas.draw(originalTexture).edgeWork(3).update(); break;
        case 19: glfxCanvas.draw(originalTexture).hexagonalPixelate(320, 239.5, 10).update(); break;
        case 20: glfxCanvas.draw(originalTexture).dotScreen(320, 239.5, 1.1, 3).update(); break;
        case 21: glfxCanvas.draw(originalTexture).noise(0.5).update(); break;
        case 22: glfxCanvas.draw(originalTexture).zoomBlur(500, 240, 0.3).update(); break;
        case 23: glfxCanvas.draw(originalTexture).swirl(500, 240, 244, 4.2).update(); break;
    }

    // Copia o resultado do canvas WebGL de volta para o canvas original
    context.clearRect(0, 0, canvasArea.width, canvasArea.height);
    context.drawImage(glfxCanvas, 0, 0);
}

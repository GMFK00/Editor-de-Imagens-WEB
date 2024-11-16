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

function applyOilPainting() {
    Caman(canvas, function () {
        this.blur(5).render();
    });
}

function applyVignette() {
    Caman(canvas, function () {
        this.vignette({
            x: 0.5,
            y: 0.5,
            radius: 0.5,
            strength: 0.5
        }).render();
    });
}


function applyPencilDrawing() {
    Caman(canvas, function () {
        this.sketch(10).render();
    });
}

function applyPixelate() {
    Caman(canvas, function () {
        this.pixelate(10).render();
    });
}

function applyEngraving() {
    Caman('#imageElement', function () {
        this.contrast(100)
            .invert()
            .render();
    });
}

function applyGranulado() {
    Caman(canvas, function () {
        this.noise(10).render();
    });
}

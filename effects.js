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
    canvas.style.filter = "none";

    switch(index) {
        case 0: canvas.style.filter = "sepia(0.4) contrast(1.2)"; break; // Vintage
        case 1: canvas.style.filter = "brightness(1.1) saturate(1.5)"; break; // Lomo
        case 2: canvas.style.filter = "contrast(1.25) brightness(1.1)"; break; // Clarity
        case 3: canvas.style.filter = "grayscale(1) contrast(1.4) brightness(0.9)"; break; // Sin City
        case 4: canvas.style.filter = "contrast(1.5) saturate(1.3)"; break; // Cross Process
        case 5: canvas.style.filter = "sepia(0.3) hue-rotate(-15deg) saturate(1.2)"; break; // Orange Peel
        case 6: canvas.style.filter = "sepia(0.2) saturate(1.5)"; break; // Love
        case 7: canvas.style.filter = "contrast(1.3) brightness(0.8)"; break; // Grungy
        case 8: canvas.style.filter = "saturate(1.5) contrast(0.8)"; break; // Jarques
        case 9: canvas.style.filter = "grayscale(1) brightness(0.9)"; break; // Pinhole
        case 10: canvas.style.filter = "sepia(0.7) contrast(1.2)"; break; // Old Boot
        case 11: canvas.style.filter = "brightness(1.3) sepia(0.2)"; break; // Glowing Sun
        case 12: canvas.style.filter = "brightness(1.2) contrast(1.2) sepia(0.1)"; break; // Sunrise
        case 13: canvas.style.filter = "grayscale(1)"; break; // Grayscale
        case 14: canvas.style.filter = "saturate(1.8) contrast(1.1)"; break; // Magesty
        case 15: canvas.style.filter = "sepia(0.5) brightness(1.1)"; break; // Nostalgia
        case 16: canvas.style.filter = "sepia(0.4) contrast(1.3)"; break; // OldBoot
    }
}

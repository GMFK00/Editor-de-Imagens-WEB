const sliders = Array.from(document.getElementsByClassName("fxslidebar"));
const inputs = Array.from(document.getElementsByClassName("fxinput"));
const fxResetBtns = Array.from(document.getElementsByClassName("rstfilter"))
const defaultFilters = [0, 100, 100, 0, 0, 0, 100, 100, 0];
const fxBtn = document.getElementById("fxbtn");
const fxBox = document.querySelector("#filters");

sliders.forEach(setFxEvent); // Set events for sliders inputs value changes
inputs.forEach(setFxEvent); // Set events for fx inputs value changes
fxResetBtns.forEach(setResetFxEvent); // Set effect reset buttons events

function setFxEvent(value, index, array){
    resetAllFilters();
    let percent = (array[index].value / array[index].max) * 100;
    sliders[index].style.background = `linear-gradient(to right, #3264fe ${percent}%, #d5d5d5 ${percent}%)`;
    array[index].addEventListener("change", () => {
        inputs[index].value = value.value;
        percent = (array[index].value / array[index].max) * 100;
        sliders[index].value = value.value;
        sliders[index].style.background = `linear-gradient(to right, #3264fe ${percent}%, #d5d5d5 ${percent}%)`;
        setFilters();
    });
}

function setResetFxEvent(value, index, array){
    array[index].addEventListener("click", () => {
        resetFilter(index);
    });
}

fxBtn.addEventListener('click', () => {
    if(fxBox.style.display == "none"){
        setDisplay(fxBox, "flex");
    }else{
        setDisplay(fxBox, "none");
    }
});

function resetAllFilters(){
    canvas.style.filter = "none";
    for(let i = 0; i < 9; i++){
        resetFilter(i);
    }
}

function resetFilter(i){
    inputs[i].value = defaultFilters[i];
    sliders[i].value = defaultFilters[i];
    let percent = (defaultFilters[i] / inputs[i].max) * 100;
    sliders[i].style.background = `linear-gradient(to right, #3264fe ${percent}%, #d5d5d5 ${percent}%)`;
    setFilters();
}

function setFilters(){
    canvas.style.filter = "blur(" + sliders[0].value + "px) brightness(" + sliders[1].value + "%) contrast(" + sliders[2].value + "%) grayscale(" + sliders[3].value + "%) hue-rotate(" + sliders[4].value + "deg) invert(" + sliders[5].value + "%) opacity(" + sliders[6].value + "%) saturate(" + sliders[7].value + "%) sepia(" + sliders[8].value + "%)";
}

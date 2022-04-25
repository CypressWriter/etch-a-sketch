let length = 16;
let canvasSize = 1000;

let state = "black";

container = document.querySelector("div");

for (let i = 0; i < length; i++) {
    let square;
    for (let j = 0; j < length; j++) {
        square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

function blackColor(e) {
    e.currentTarget.classList.remove("rainbow");
    e.currentTarget.classList.add("black");
}
function rainbowColor(e) {
    e.currentTarget.classList.remove("black");
    e.currentTarget.classList.add("rainbow");
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", blackColor));

function black() {
    state = "black";
    squares.forEach(square => square.removeEventListener("mouseover", rainbowColor));
    squares.forEach(square => square.addEventListener("mouseover", blackColor));
}
function rainbow() {
    state = "rainbow";
    squares.forEach(square => square.removeEventListener("mouseover", blackColor));
    squares.forEach(square => square.addEventListener("mouseover", rainbowColor));
}
function gradient() {
    state = "gradient";
}



function reset() {
    do {
        length = prompt("Please enter the size of grid (between 1 and 100)");
    } while (length <= 0 || length > 100);

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());


    square = document.createElement("div");


    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
                square = document.createElement("div");
                square.style.width = (canvasSize / length) + "px";
                square.style.height = (canvasSize / length) + "px";

                container.style.gridTemplateColumns = "repeat(" + length + ", 1fr)";
                container.style.gridTemplateRows = "repeat(" + length + ", 1fr)";

                square.classList.add("square");
                container.appendChild(square);
        }
    }

    squares = document.querySelectorAll(".square");
    if (state === "black") {
        squares.forEach(square => square.addEventListener("mouseover", blackColor));
    }
    else if (state === "rainbow") {
        squares.forEach(square => square.addEventListener("mouseover", rainbowColor));
    }

    
    console.log(length);
}
let length = 16;

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
    e.currentTarget.classList.add("black");
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", blackColor));
let length = 3;

container = document.querySelector("div");

for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}
// to erase the board and remember last user density choice
let lastDensity = "large-density"

// remember when mouse is up/down
let mouseDown = false

buildGridByDensity(lastDensity)

const gridElement = document.querySelector(".grid")

gridElement.addEventListener("mousedown", () => {
    mouseDown = true
})

gridElement.addEventListener("mouseup", () => {
    mouseDown = false
})

gridElement.addEventListener("mouseover", (event) => {
    if (mouseDown) { // draw only when mouse is down
        event.target.style.backgroundColor = "#707070";
    }
})

// event delegation from buttons to board-buttons and decide what was the button from its innerText
const densityElement = document.querySelector(".board-buttons")
densityElement.addEventListener("click", (event) => {
    buildGridByDensity(event.target.id)
});

function buildGridByDensity(density) {
    switch (density) {
        case "small-density":
            buildGrid(16, 22)
            lastDensity = density
            break
        case "medium-density":
            buildGrid(32, 44)
            lastDensity = density
            break
        case "large-density":
            buildGrid(64, 88)
            lastDensity = density
            break
        case "erase-density":
            erase()
            break
        default:
        // do nothing
    }
}

function buildGrid(rows, columns) {
    removeAll()
    const grid = document.querySelector(".grid")

    for (let i = 0; i < rows; i++) {
        appendRow(grid, columns)
    }
}

function appendRow(grid, columns) {
    const row = document.createElement("div")
    row.classList.add("row")

    for (let i = 0; i < columns; i++) {
        appendSquare(row)
    }

    grid.appendChild(row)
}

function appendSquare(row) {
    const square = document.createElement("div")
    square.classList.add("square")

    row.appendChild(square)
}

function erase() {
    removeAll()
    buildGridByDensity(lastDensity)
}

function removeAll() {
    document
        .querySelectorAll('.row')
        .forEach(row => { row.remove() })
}

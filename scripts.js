const container = document.querySelector(".container");
const newGridButton = document.querySelector('#newGrid');
const randomRGBButton = document.querySelector("#randomRGB");
const sketchModeButton = document.querySelector("#sketchMode");


let gridSize;

randomRGBButton.addEventListener('click', e => {
    clearElement(container);
    createGrid(gridSize, randomMode);
})


sketchModeButton.addEventListener('click', e => {
    clearElement(container);
    createGrid(gridSize, sketchMode);
})

newGridButton.addEventListener('click', e => {
    do {
        gridSize = parseInt(prompt("Enter the size of the square: ", "range from 16 to 100"));
    } while (gridSize > 100 || gridSize < 16);
    clearElement(container);
    createGrid(gridSize, blackMode);
})


function createGrid(gridSize, callback) {
    for (let row = 0; row < gridSize; row++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let col = 0; col < gridSize; col++) {
            const divElement = document.createElement('div');
            divElement.classList.add('pixel');
            callback(divElement);
            rowElement.appendChild(divElement);
        }
    container.appendChild(rowElement);    
    }
}


function blackMode(e) {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'black';
    });
}

function sketchMode(e) {
    let blackShade = 0.1;
    e.addEventListener('mouseover' , () => {
            e.style.backgroundColor = `rgba(0,0,0, ${blackShade})`;
            blackShade += 0.1;
        })
}

function randomMode(e) {
    e.addEventListener('mouseover', () => {
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            e.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue})`;
        });
}

function clearElement(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
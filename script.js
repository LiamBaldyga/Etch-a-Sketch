//Initialize Grid on load
window.onload = createGrid();
window.onload = drawGrid;

//Create Grid
function createGrid(gridSize = 16) {
    let toAdd = document.createDocumentFragment();
    for (let i = 0; i <= gridSize; i++) {
        let newRow = document.createElement('div');
        newRow.id = 'r' + i;
        newRow.className = 'grid-row';
        toAdd.appendChild(newRow);
        for (let j = 0; j <= gridSize; j++) {
            let newBox = document.createElement('div');
            newBox.id = 'b' + j;
            newBox.className = 'grid-box';
            newRow.appendChild(newBox);
        }
    }
    document.getElementById('grid').appendChild(toAdd);
}

// Clear Grid
function clearGrid() {
    const parent = document.getElementById('grid');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Change grid color to black on hover
function drawGrid() {
    document.querySelectorAll('.grid-box').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'black';
        })
    })
}
//Prompt for grid size
function sizePrompt() {
    let size = window.prompt('Enter grid size less than 100 or less:', 16); 
    while (size > 100) size = window.prompt('Enter grid size less than 100 or less:', 16);
    if (!size) size = 16;
    return size;
}
//Reset Grid
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    clearGrid();
    size = sizePrompt();
    createGrid(size);
    drawGrid();
});

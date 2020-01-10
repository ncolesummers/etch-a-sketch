const container = document.querySelector('.grid-container');
const button = document.querySelector('#new-grid-button');



function addDivToInitialGrid() {
  const div = document.createElement('div');
  div.classList.add('initial-grid-boxes');
  div.classList.add('grid-box');
  container.appendChild(div);
}

/* function addDivtoGrid() {
  const div = document.createElement('div');
  div.classList.add('grid-box');
  div.setAttribute('style', `width: ${640 -gridSize}; height: ${640 -gridSize};`)
} */

function newGrid() {
  gridSize = prompt('Choose a grid size.')
  container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, ${Math.round(640 / gridSize)}px);`);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < gridSize**2; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-box');
    div.setAttribute('style', `width: ${Math.round(640 / gridSize)}px; height: ${Math.round(640 / gridSize)}px;`);
    div.addEventListener('mouseover', (e) => {
      // console.log(e);
      div.classList.add('box-hover');
    })
    container.appendChild(div);
  }
}


function initialGrid() {
  for (let i = 0; i < 256; i++) {
    addDivToInitialGrid();
  }
}

initialGrid();

button.addEventListener('click', (e) => {
  // console.log(e);
  newGrid();
})
const boxes = document.querySelectorAll('.grid-box');
boxes.forEach((box) => {
  box.addEventListener('mouseover', (e) => {
    // console.log(e);
    box.classList.add('box-hover');
  });
});

// const newBoxes = document.querySelectorAll('.new-grid-boxes');
// newBoxes.forEach((newBox) => {
//   newBox.addEventListener('mouseover', (e) => {
//     console.log(e);
//     newBox.classList.add('box-hover');
//   });
// });

//The container div in which 16x16grid will be in
let grid = document.querySelector("#grid");

for(let i=0;i<16;i++){

    let gridRow = document.createElement("div");
    gridRow.className="grid-row";

    for(let j=0;j<16;j++){

        let gridSquare = document.createElement("div");
        gridSquare.className="grid-box";
        gridSquare.textContent=1;

        gridRow.appendChild(gridSquare);

    }

    grid.appendChild(gridRow);

}




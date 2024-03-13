//The container div in which 16x16grid will be in

let grid = document.querySelector("#grid");

const arrayDivs = new Array(16);

for(let i=0;i<16;i++){

    let gridRow = document.createElement("div");
    gridRow.className="grid-row";

    const ArrayRows = new Array(16);

    for(let j=0;j<16;j++){

        let gridSquare = document.createElement("div");
        gridSquare.className="grid-box";

        gridRow.appendChild(gridSquare);

        ArrayRows[j]= gridSquare;

    }

    arrayDivs[i]= ArrayRows;

    grid.appendChild(gridRow);

}


for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        arrayDivs[i][j].addEventListener("mouseover", function(e){
            arrayDivs[i][j].style.backgroundColor="red";
        })
        arrayDivs[i][j].addEventListener("mouseout", function(e){
            arrayDivs[i][j].style.backgroundColor="white";
        })
    }   
}



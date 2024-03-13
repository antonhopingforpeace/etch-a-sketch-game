//CLick the button to get a prompt
let grid;

let button= document.querySelector(".grid-button");

let body = document.querySelector("body");

let squaresAmount = 16;

button.addEventListener("click",function(){
    body.removeChild(grid);
});


button.addEventListener("click",function(){

    let amount = prompt("Please enter the new size of the grid that you want:");
    while(amount>64){
        amount = prompt("The maximum size of the grid is 100x100,enter a new value");
    }


    squaresAmount = amount;

    grid = document.createElement("div");
    grid.id="grid";
    grid.className="container";
    button.after(grid);

    const arrayDivs = new Array(squaresAmount);
    
    for(let i=0;i<squaresAmount;i++){
    
        let gridRow = document.createElement("div");
        gridRow.className="grid-row";
    
        const ArrayRows = new Array(squaresAmount);
    
        for(let j=0;j<squaresAmount;j++){
    
            let gridSquare = document.createElement("div");
            gridSquare.className="grid-box";
    
            gridRow.appendChild(gridSquare);
    
            ArrayRows[j]= gridSquare;
    
        }
    
        arrayDivs[i]= ArrayRows;
    
        grid.appendChild(gridRow);
    
    }
    
    
    for(let i=0;i<squaresAmount;i++){
        for(let j=0;j<squaresAmount;j++){
            arrayDivs[i][j].addEventListener('contextmenu', (e) => {
                e.preventDefault();
            });
            arrayDivs[i][j].addEventListener("mouseover", function(e){
                arrayDivs[i][j].classList.add("addMaroon");
            });
            arrayDivs[i][j].addEventListener("mouseup", function(e){
                if(e.button===2)
                    arrayDivs[i][j].classList.remove("addMaroon");
            });
            arrayDivs[i][j].addEventListener("click", function(e){
                arrayDivs[i][j].classList.add("addBlack");
            });
        }   
    }


});



//The container div in which 16x16grid will be in

grid = document.querySelector("#grid");

const arrayDivs = new Array(squaresAmount);

for(let i=0;i<squaresAmount;i++){

    let gridRow = document.createElement("div");
    gridRow.className="grid-row";

    const ArrayRows = new Array(squaresAmount);

    for(let j=0;j<squaresAmount;j++){

        let gridSquare = document.createElement("div");
        gridSquare.className="grid-box";

        gridRow.appendChild(gridSquare);

        ArrayRows[j]= gridSquare;

    }

    arrayDivs[i]= ArrayRows;

    grid.appendChild(gridRow);

}


for(let i=0;i<squaresAmount;i++){
    for(let j=0;j<squaresAmount;j++){
        arrayDivs[i][j].addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        arrayDivs[i][j].addEventListener("mouseover", function(e){
            arrayDivs[i][j].classList.add("addMaroon");
        });
        arrayDivs[i][j].addEventListener("mouseup", function(e){
            if(e.button===2)
                arrayDivs[i][j].classList.remove("addMaroon");
        });
        arrayDivs[i][j].addEventListener("click", function(e){
            arrayDivs[i][j].classList.add("addBlack");
        });
    }   
}



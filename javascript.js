let grid;

let squaresAmount = 16;

//Create a new array that will contain the color of each box
let colorArray = new Array(squaresAmount);

for(let i=0;i<squaresAmount;i++){

    const colorArrayRows = new Array(squaresAmount);

    for(let j=0;j<squaresAmount;j++){

        const colorArrayRowsrgb = new Array(6);

        for (let w=0;w<3;w++){
            
            colorArrayRowsrgb[w]=Math.floor(Math.random() *257);

        }
        for (let w=3;w<6;w++){
            
            colorArrayRowsrgb[w]=colorArrayRowsrgb[w-3]/10;

        }

        colorArrayRows[j]= colorArrayRowsrgb;

    }
    colorArray[i]=colorArrayRows;

}

console.log(colorArray);



let button= document.querySelector(".grid-button");

let body = document.querySelector("body");



button.addEventListener("click",function(){
    body.removeChild(grid);
});


button.addEventListener("click",function(){

    let amount = prompt("Please enter the new size of the grid that you want:");
    while(amount>100){
        amount = prompt("The maximum size of the grid is 100x100,enter a new value");
    }


    squaresAmount = amount;

    colorArray = new Array(squaresAmount);

    for(let i=0;i<squaresAmount;i++){
    
        const colorArrayRows = new Array(squaresAmount);
    
        for(let j=0;j<squaresAmount;j++){
    
            const colorArrayRowsrgb = new Array(3);
    
            for (let w=0;w<3;w++){
                
                colorArrayRowsrgb[w]=Math.floor(Math.random() *257);
    
            }
            for (let w=3;w<6;w++){
            
                colorArrayRowsrgb[w]=colorArrayRowsrgb[w-3]/10;
    
            }
    
            colorArrayRows[j]= colorArrayRowsrgb;
    
        }
        colorArray[i]=colorArrayRows;
    
    }

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

            arrayDivs[i][j].addEventListener("mouseover",function(){
                let x=colorArray[i][j][0];
                let y=colorArray[i][j][1];
                let z=colorArray[i][j][2];
                colorArray[i][j][0]-=colorArray[i][j][3];
                colorArray[i][j][1]-=colorArray[i][j][4];
                colorArray[i][j][2]-=colorArray[i][j][5];
                arrayDivs[i][j].style.backgroundColor = "rgb("+x+","+y+","+z+")";
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

        arrayDivs[i][j].addEventListener("mouseover",function(){
            let x=colorArray[i][j][0];
            let y=colorArray[i][j][1];
            let z=colorArray[i][j][2];
            colorArray[i][j][0]-=colorArray[i][j][3];
            colorArray[i][j][1]-=colorArray[i][j][4];
            colorArray[i][j][2]-=colorArray[i][j][5];
            arrayDivs[i][j].style.backgroundColor = "rgb("+x+","+y+","+z+")";
            });
        
    }   
}


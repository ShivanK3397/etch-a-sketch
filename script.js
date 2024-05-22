const container = document.querySelector(".grid-container");
let numOfGrids = 0;
function createGrid(sketchPad,numOfSquares=16){
    for (let i =0;i<numOfSquares;i++){
        const lineOfGrids = document.createElement("div");
        lineOfGrids.setAttribute("class","line-of-grids")
        for (let j=0;j<numOfSquares;j++){
            const grid = document.createElement("div");
            grid.setAttribute("class","grid")
            lineOfGrids.appendChild(grid);
            grid.addEventListener("mouseenter",function(){
                grid.style.backgroundColor="blue";
            })

        }
        sketchPad.appendChild(lineOfGrids);


    }
    numOfGrids=numOfSquares;

}

function deleteGrid(num){
    for (i = 0;i<num;i++){
        container.removeChild(document.querySelector(".line-of-grids"));
    }
}

createGrid(container);

const btn = document.querySelector(".input-button");
const input = document.querySelector("input");
const body = document.querySelector("body");
const div = document.querySelector(".input");


btn.addEventListener("click",function(){
    const inputValue=+input.value;
    input.value="";
    if (inputValue>100||inputValue===0){

    }
    else{
        deleteGrid(numOfGrids);
        createGrid(container,inputValue);
        

    }
}); 
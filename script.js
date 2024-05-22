const container = document.querySelector(".grid-container");
let numOfGrids = 0;
let color = "blue"
function createGrid(sketchPad,numOfSquares=16){
    for (let i =0;i<numOfSquares;i++){
        const lineOfGrids = document.createElement("div");
        lineOfGrids.setAttribute("class","line-of-grids")
        for (let j=0;j<numOfSquares;j++){
            const grid = document.createElement("div");
            grid.setAttribute("class","grid")
            lineOfGrids.appendChild(grid);
            grid.addEventListener("mouseenter",function(){
                grid.style.backgroundColor=color;
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

const buttons = document.querySelector(".buttons")
buttons.addEventListener("click",function(event){
    const input = event.target.id;
    console.log(input);
    if(input==="reset"){
        deleteGrid(numOfGrids);
        createGrid(container,numOfGrids);
    }
    else if(input==="random"){
        color=`rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`;
    }
    else{
        color=input;

    }
})

function randomRGBValue(){
    return Math.floor(Math.random()*254)+1
}
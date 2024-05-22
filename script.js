function createGrid(){
    const container = document.querySelector(".grid-container");
    for (let i =0;i<16;i++){
        const lineOfGrids = document.createElement("div");
        lineOfGrids.setAttribute("class","line-of-grids")
        for (let j=0;j<16;j++){
            const grid = document.createElement("div");
            grid.setAttribute("class","grid")
            lineOfGrids.appendChild(grid);

        }
        container.appendChild(lineOfGrids);

    }
}

createGrid();
//Canvas vars
let width= 1200;
let height= 600;
let backgroundColor= '#000'; //black

//Chocolate vars
let chocLength= 80;

//Board vars
let numRows= 4;
let numColumns= 5;
let board= [5,5,5,5];
let grid= [];

function setup() {
    createCanvas(width, height);
    choc= new Chocolate(0,0,chocLength);

    for(let i=0; i<board.length; i++) {
        let row= [];
        for(let j=0; j<board[i]; j++) {
            let choc= new Chocolate(j*chocLength,i*chocLength,chocLength);
            row.push(choc);
        }
        grid.push(row);
    }
}
  
function draw() {
    background(backgroundColor);

    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i]; j++) {
            grid[i][j].show();
        }
    }
}

function mouseClicked() {
   x= floor(mouseX/chocLength)
   y= floor(mouseY/chocLength)
   console.log("Hi",x,y);
   chomp(x,y);
}

function chomp(x,y) {
    for(let row=y; row<numRows; row++) {
        if(grid[row] == 0) {
            continue;
        }
        for(let column=x; column<numColumns; column++) {
            grid[row][column].hide();
        }
    }
}

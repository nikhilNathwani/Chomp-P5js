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
    //Draw canvas and remaining chocolates
    background(backgroundColor);
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i]; j++) {
            grid[i][j].show();
        }
    }

    //Get cursor position to trigger hover UI
    x= floor(mouseX/chocLength);
    y= floor(mouseY/chocLength);
    if(x>=0 && x<numColumns && y>=0 && y<numRows ) {
        console.log("Hovered",x,y);
        chompPreview(x,y);
    }
    else {
        console.log("Unhovered");
        resetChocolates();
    }
}

function mouseClicked() {
    x= floor(mouseX/chocLength)
    y= floor(mouseY/chocLength)
    console.log("Clicked",x,y);
    if(x<numColumns & y<numRows) {
        chomp(x,y);  
    }
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

function chompPreview(x,y) {
    resetChocolates();
    for(let row=y; row<board.length; row++) {
        if(board[row] == 0) {
            continue;
        }
        for(let column=x; column<board[y]; column++) {
            if(row==y && column==x) {
                console.log("WH", row,column)
                grid[row][column].warningHeavy()
            }
            else {
                grid[row][column].warningLight();
            }
        }
    }
}

function resetChocolates() {
    for(let row=0; row<board.length; row++) {
        for(let column=0; column<board[row]; column++) {
            grid[row][column].resetColor();
        }
    }
}

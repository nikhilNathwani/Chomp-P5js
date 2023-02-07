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
    if(mouseInChompGrid(x,y)) {
        // console.log("hovered");
        chompHoverPreview(x,y);
    }
    else {
        // console.log("unhovered");
        resetChocolates();
    }
}

// If mouse-click happens on top of a chocolate, perform the chomp() action
function mouseClicked() {
    x= floor(mouseX/chocLength)
    y= floor(mouseY/chocLength)
    if(x<numColumns & y<numRows) {
        chomp(x,y);  
    }
}

// Hides the chocolate at position (x,y) i.e. row y & column x
// And hides all chocolates beneath (x,y) and to the right.
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

// Hover UI: highlights hovered cell in warningColorHeavy, and all
// cells beneath/to-the-right in warningColorLight, so that you can 
// see which cells you'd chomp if you clicked your mouse.
function chompHoverPreview(x,y) {
    for(let row=0; row<board.length; row++) {
        if(board[row] == 0) {
            continue;
        }
        for(let column=0; column<board[y]; column++) {
            if(row==y && column==x) {
                grid[row][column].warningHeavy()
            }
            else if (row>=y && column>=x) {
                grid[row][column].warningLight();
            }
            else {
                grid[row][column].resetColor();
            }
        }
    }
}

// Reset chocolates to default state. E.g. used after a cell was 
// hovered (so it adopted hover style) but is no longer hovered.
function resetChocolates() {
    for(let row=0; row<board.length; row++) {
        for(let column=0; column<board[row]; column++) {
            grid[row][column].resetColor();
        }
    }
}

function mouseInChompGrid(x,y) {
    return x<numColumns && y<numRows && x>=0 && y>=0;
}
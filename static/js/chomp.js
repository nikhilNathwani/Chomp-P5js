let width= 1200;
let height= 600;
let chocLength= 80;
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
    background(0,0,0);
    stroke(0,255,0);
 
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i]; j++) {
            grid[i][j].show();
        }
    }
}

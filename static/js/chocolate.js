let defaultFillColor= '#0000FF';
let defaultBorderColor= '#00FF00';

function Chocolate(x, y, length) {
    //Location & sizing
    this.x = x;
    this.y = y;
    this.length= length; 

    //Coloring
    this.fillColor= defaultFillColor;
    this.borderColor= defaultBorderColor

    this.show= function() {
        fill(this.fillColor);
        stroke(this.borderColor); 
        rect(this.x,this.y,this.length,this.length);
    }

    this.hide= function() {
        this.length= 0;
        this.fillColor= backgroundColor;
        this.borderColor= backgroundColor;
    }
}
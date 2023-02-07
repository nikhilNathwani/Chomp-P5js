let defaultFillColor= '#0000FF';
let defaultBorderColor= '#00FF00';
let warningHeavyColor= '#FF0000';
let warningLightColor= '#770000';


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

    //Called when chocolate is hovered on
    //Changes color to 'warningHeavy'
    this.warningHeavy= function() {
        this.fillColor= warningHeavyColor;
    }

    //Called when different chocolate is hovered on,
    //but it would result in this chocolate getting chomped.
    //Changes color to 'warningLight'
    this.warningLight= function() {
        this.fillColor= warningLightColor;
    }

    //Called when cells are unhovered, to undo the hover UI
    this.resetColor= function() {
        this.fillColor= defaultFillColor;
    }
}

function Chocolate(x, y, length) {
    this.x = x;
    this.y = y;
    this.length= length; 

    this.show= function() {
        fill(0,0,255);
        rect(this.x,this.y,this.length,this.length);
    }

    this.hide= function() {
        this.length= 0;
    }
}
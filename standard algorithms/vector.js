function Vector(x,y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vector2){
    x2 = this.x + vector2.x;
    y2 = this.y + vector2.y;
    return new Vector(x2, y2);
}

Vector.prototype.minus = function(vector2){
    x2 = this.x - vector2.x;
    y2 = this.y - vector2.y;
    return new Vector(x2, y2);
}


let vector1 = new Vector(1,1);
let vector2 = new Vector(2,2);
let vector3 = vector1.plus(vector2);
console.log(vector3.x + " " + vector3.y);
vector3 = vector1.minus(vector2);
console.log(vector3.x + " " + vector3.y);
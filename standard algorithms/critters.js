function Vector(x, y){
    this.x = x; 
    this.y = y;
}

Vector.prototype.plus = function(other){
    return new Vetor (this.x + other.x, this.y+ other.y);
};
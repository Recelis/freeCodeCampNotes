// // prototypes to create objects
// var protoRabbit = {
//     speak:function(line){
//         console.log("The " +this.type + " rabbit says '" + line + "'");
//     }
// };

// var killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";

// killerRabbit.speak("SKREEEEEEEEE!!!!");

// constructor to create objects
function Rabbit(type){
    this.type = type;
    this.teeth = "small";
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

// this is the way to add a new method to an object after you've created it in a constructor. 
Rabbit.prototype.speak = function(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
};

blackRabbit.speak("Doom...");

console.log(killerRabbit.teeth);

// so a more useful constructor would contain multiple objects?



// Rabbit.prototype.dance = function(){
//     console.log("The " + this.type + " rabbit dances a jig");
// };

// killerRabbit.dance();
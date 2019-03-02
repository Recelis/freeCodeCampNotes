// prototypes to create objects
{
    let protoRabbit = {
        speak: function (line) {
            console.log("The " + this.type + " rabbit says '" + line + "'");
        },
        wave: function () {
            console.log("wave!");
        }
    };

    let killerRabbit = Object.create(protoRabbit);
    killerRabbit.type = "killer";

    killerRabbit.speak("SKREEEEEEEEE!!!!");
}

{
    // constructor to create objects
    function Rabbit(type) {
        this.type = type;
        this.teeth = "small";
    }
    let killerRabbit = new Rabbit("killer");
    let blackRabbit = new Rabbit("black");

    // this is the way to add a new method to an object after you've created it in a constructor. 
    Rabbit.prototype.speak = function (line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    };

    blackRabbit.speak("Doom...");

    console.log(killerRabbit.teeth);

    // so a more useful constructor would contain multiple objects?

    // can be used to add new properties to methods to all methods
    Rabbit.prototype.dance = function () {
        console.log("The " + this.type + " rabbit dances a jig");
    };

    // Problems with adding prototypes
    // enumerable vs nonenumerable properties
    // many pre-built prperties are built-in. 
    // hasOwnProperty tells us whether object has property, not prototypes.
    // you can easily overwrite pre-built methods or values when you use prototypes.

    killerRabbit.dance();
}

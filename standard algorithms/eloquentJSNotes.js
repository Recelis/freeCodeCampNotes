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

// getters and setters
// allows you to specify properties from outside the object
{
    let pile = {
        elements: ["eggsshell", "orange peel", "worm"],
        get height() {
            return this.elements.length;
        },
        set height(value) {
            console.log("Ignoring attempt to set height to", value);
        }
    };
    function TextCell(text){
        this.text = text;
    }
    let cell = new TextCell("fingers");
    Object.defineProperty(TextCell.prototype, "heightProp", { // adding to existing object
        get: function() {
            return this.text.length;
        }
    });
    console.log(pile.height); // looks like a property but actually is a method
    console.log(cell.heightProp);
}

// inheritance
{
    function Parent(name){
        this.name = name;
    }

    Parent.prototype.birth = function(){
        console.log("birthing " + this.name);
    }
    Parent.prototype.end = function(){
        console.log("ending " + this.name);
    }

    Parent.prototype.replace = function(){
        console.log("replacement " + this.name);
    }

    function Child(name){ 
        Parent.call(this, name); // can call Parent Object directly inside Child constructor
    }
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.replace = function(){
        console.log("I am the replacement");
    }

    let Tracey = new Parent("Tracey");
    Tracey.birth();
    Tracey.replace();

    let HomieKid = new Child("HomieKid");
    HomieKid.birth();
    HomieKid.replace();

    console.log(HomieKid instanceof Parent);
}

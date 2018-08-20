// practising object oriented data structure code

function Exercise(){}; // constructor
let currentDate = new Date();
let dateString = currentDate.toLocaleDateString();
Exercise.prototype = { // prototype object
    constructor:Exercise,
    date:dateString,
    type:"Endurance", // Strength, Explosion
}

// Run Objects for storage
function Run(goalTime){
    let time = goalTime; 
    this.getTime = function(){
        return time;
    }
};

Run.prototype = Object.create(Exercise.prototype);

Run.prototype.constructor = Run;

let running = new Run(15);


console.log("running time for " + running.date + " is:" + running.getTime());


function ArmShoulderExercise(){};

ArmShoulderExercise.prototype = Object.create(Exercise.prototype);

ArmShoulderExercise.prototype = {
    constructor:ArmShoulderExercise,
}

ArmShoulderExercise.prototype.constructor = ArmShoulderExercise;

function LegExercise(){};

LegExercise.prototype = Object.create(Exercise.prototype);

LegExercise.prototype.constructor = LegExercise;

let exercise = new LegExercise();
console.log(exercise.date);





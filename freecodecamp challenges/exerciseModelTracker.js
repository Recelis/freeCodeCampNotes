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
function Run(goal, result){
    let goalTime = goal;
    let resultTime = result;
    this.getGoalTime = function(){
        return goalTime;
    }
    this.getResultTime = function(){
        return resultTime;
    }
};

Run.prototype = Object.create(Exercise.prototype);

Run.prototype.constructor = Run;

let running = new Run(15, 22);

console.log("Difference between expected and actual running time is " + (running.getResultTime() - running.getGoalTime())  + " minutes");

function ArmShoulderExercise(){};

ArmShoulderExercise.prototype = Object.create(Exercise.prototype);

ArmShoulderExercise.prototype.constructor = ArmShoulderExercise;

ArmShoulderExercise.prototype.reps = "none";
ArmShoulderExercise.prototype.weight = 0;

let bicepCurls = new ArmShoulderExercise();
let armRaises = new ArmShoulderExercise();
let lawnmowerPulls = new ArmShoulderExercise();
let reverseBicepCurl = new ArmShoulderExercise();
let rows = new ArmShoulderExercise();
let forearmsInner = new ArmShoulderExercise();
let forearmsOuter = new ArmShoulderExercise();

bicepCurls.reps = 30;
armRaises.reps = 30;

bicepCurls.type = "Strength";
armRaises.type = "Endurance";
lawnmowerPulls.type = "Strength";
reverseBicepCurl.type = "Endurance";
rows.type = "Endurance";
forearmsInner.type = "Endurance";
forearmsOuter.type = "Endurance";

console.log(bicepCurls.type);
console.log(armRaises.reps);

function LegExercise(){};

LegExercise.prototype = Object.create(Exercise.prototype);

LegExercise.prototype.constructor = LegExercise;



let exercise = new LegExercise();
console.log(exercise.date);





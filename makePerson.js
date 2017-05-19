/*
makePerson.js
Jacky Lui

input: first and last name in one string
do: write up a object
output: use methods in object to return information

do:
this uses an object constructor which follows format shown in http://www.javascriptkit.com/javatutors/oopjs2.shtml

*/
var Person = function(firstAndLast) {
    var name = "";
    var update = function(){
         name = firstAndLast.split(' ');
    };
    this.getFirstName =  function(){
        update();
        console.log(name[0]);
        return name[0];
    };
    this.getLastName = function(){
        update();
        console.log(name[1]);
        return name[1];
    }; 
    this.getFullName = function(){
        console.log(firstAndLast);
        return firstAndLast;
    };
    this.setFirstName = function(first){
        update();
        name[0] = first;
        firstAndLast = name[0] + " " + name[1];
        console.log(name[0]);
//         return name[0];
    };
    this.setLastName = function(last){
        update();
        name[1] = last;
        firstAndLast = name[0] + " " + name[1];
        console.log(name[1]);
        return name[1];
    };
    this.setFullName = function(full){
        firstAndLast = full;
        console.log(firstAndLast);
//         return firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.setLastName('Curry');
bob.getFullName();


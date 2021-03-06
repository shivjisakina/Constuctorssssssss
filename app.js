// Basic Constructor function
var Person = function (first, last, age, eye) {

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

};

// Creating new objects using the function
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// You can also add a new item to your object
myFather.nationality = "American";

// Console logging to see if I get the objects
console.log(myFather);
console.log(myMother);

// Parsing through constructor function to get firstname
console.log(myFather.firstName);

//========================================================

// METHODSSSSS

var PersonMethod = function (first, last, age, eye) {

    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eye = eye;

    this.fullName = function () {
        return this.firstname + " " + this.lastname;
    };

    // Parameter is what you'll change
    this.changeEyeColor = function (color) {

        // Setting color parameter = to eye parameter
        this.eye = color

    }

};

var myFatherMethod = new PersonMethod("John2", "Doe2", 50, "blue2");

// Changing his eyecolor
myFatherMethod.changeEyeColor("notBlue");

// Calling eye out to see if it updated
console.log(myFatherMethod.eye);

// Console logging the full name
console.log(myFatherMethod.fullName());

// Console logging the whole object
console.log(myFatherMethod);

//========================================================

// Prototypesssss

// Constructor
var Box = function (color) {
    this.color = color;
};

Box.prototype.getColor = function () {
    return this.color;
};

var blueBox = new Box("blue");
console.log(blueBox.getColor());

var greenBox = new Box("green");
console.log(greenBox.getColor());

//========================================================

// How could I use these in a more advanced way?

    // Pushing data through the constructor
    // Creating an API
    // Present a lot of similar data

//========================================================











// Access Functions
document.write("<br>------------------------------------------- Access Functions -------------------------------------------   <br><br>")
var customer = {
  name: "Loi Tran",
  speak: function () {
    return "My name is " + this.name;
  },

  address: {
    street: '2405 Nugget Lane',
    city: "Tallahassee",
    state: "Florida"
  }
}

document.write(customer.speak() + "<br />");
document.write(customer.name + " lives at " + customer.address.street + "<br />");
customer.address.country = "U.S.A.";
document.write(customer.name + " lives in the " + customer.address.country + "<br />");

function Person(name, street) {
  this.name = name;
  this.street = street;

  this.info = function() {
    return "My name is " + this.name + " and I live at " + this.street + "<br />";
  }
}

var Loi = new Person("Loi Tran", "2405 Nugget Lane");

document.write(Loi.info());

document.write("Is the object 'Loi' a Person? " + (Loi instanceof Person) + "<br />");

function changeName(person) {
  person.name = "\"A New Name\"";
}

changeName(Loi);
document.write("Loi Person's name has been changed to " + Loi.name + "<br />")

var person1 = new Person("Thao", "2405 Nugget Lane")
var person2 = new Person("Hieu", "237 Helen Avenue")

document.write("Are person1 and person 2 equal? " + (person1 === person2) + "<br />")

// Create new Objects
document.write("<br>------------------------------------------- Create new Objects -------------------------------------------   <br><br>")

function Mammal(name) {
  this.name = name;
  this.getInfo = function() {
    return "The mammals name is " + this.name;
  }
}

Mammal.prototype.sound = "roars";

Mammal.prototype.makeSound = function () {
  return this.name + " says " + this.sound;
}

var simba = new Mammal("Simba")
document.write(simba.makeSound() + "<br />")

for(var prop in simba)  {
  document.write(prop + ": " + simba[prop] + "<br />")
}

document.write("name Property of Simba? " + simba.hasOwnProperty("name") + "<br />")
document.write("sound Property of Simba? " + simba.hasOwnProperty("sound") + "<br />")

Array.prototype.inArray = function inArray(value) {
  for(i = 0; i < this.length; i++) {
    if(this[i] == value) {
      return true;
    }
  }
  return false;
}

var sampleArray = [1, 2, 3, 4, 5];

document.write("3 in array " + sampleArray.inArray(6) + " <br />");

function SecretCode() {
  var secretNum = 87;

  this.guessNum = function (num) {
    if(num > secretNum){
      return "Guess Lower";
    } else if (num < secretNum) {
      return "Guess Higher";
    } else {
      return "You guessed the correct number! " + num + "<br />" ;
    }
  }
}
var guess = new SecretCode;

document.write(guess.guessNum(87));

SecretCode.prototype.getSecret = function () {
  return this.secretNum;
}

document.write("The secret number is " + guess.getSecret() + "<br />");

// Getters & Setters I
document.write("<br>------------------------------------------- Getters & Setters I -------------------------------------------  <br><br>")

var address = {
  street: "No Street",
  city: "No City",
  state: "No State",
  zipCode: "No Zipcode",

  get getAddress() {
    return this.street + " " + this.city + ", " + this.state + ", " + this.zipCode;
  },

  set setAddress(theAddress) {
    var parts = theAddress.toString().split(", ")
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.state = parts[2] || "";
    this.zipCode = parts[3] || "";
  }
}

address.setAddress = "2405 Nugget Lane, Tallahassee, Florida, 32303";

document.write("Address: " + address.getAddress + "<br />" )
document.write("City: " + address.city + "<br />" )

// Getters & Setters II
document.write("<br>------------------------------------------- Getters & Setters II -------------------------------------------  <br><br>")

function Coordinates() {
  this.latitude = 0;
  this.longitude = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function() {
  return "Latitude: " + this.latitude + ", Longitude: " + this.longitude;
});

Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(coords) {
  var parts = coords.toString().split(", ");
  this.latitude = parts[0] || "";
  this.longitude = parts[1] || "";
});

var testCoords = new Coordinates();

testCoords.setCoords = "30.4383° N, 84.2807° W";

document.write("Coordinates: " + testCoords.getCoords + "<br />" );

// Define Property Getters & Setters
document.write("<br>------------------------------------------- Define Property Getters & Setters -------------------------------------------  <br><br>")

function Point() {
  this.xPos = 0;
  this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPos", {
  get: function () {
    return "X: " + this.xPos + ", Y: " + this.yPos;
  },
  set: function(thePoint) {
    var parts = thePoint.toString().split(", ");
    this.xPos = parts[0] || "";
    this.yPos = parts[1] || "";
  }
})

var aPoint = new Point();

aPoint.pointPos = "100, 200";
console.log(aPoint);
document.write("Point position: " + aPoint.pointPos + "<br />")


// Latest Getter & Setter || EcmaScript 5.1
document.write("<br>------------------------------------------- Latest Getter & Setter || EcmaScript 5.1 -------------------------------------------  <br><br>")

var Circle = function(radius) {
  this._radius = radius;
}

Circle.prototype = {
  set radius(radius) { this._radius = radius; },
  get radius() { return this._radius; },
  get area() { return Math.PI * (this._radius * this._radius);}
};

var circ = new Circle(10);

circ.radius = 20;

document.write("A circle with radius: " + circ.radius + " has an area of " + circ.area.toFixed(2) + "<br />");

// Inheritance
document.write("<br>------------------------------------------- Inheritance -------------------------------------------  <br><br>")


// Last left off
function Animal() {
  this.name = "Animal";

  this.toString = function() {
    return "My name is " + this.name;
  };
}


function Canine() {
  this.name = "Canine";
}


function Wolf() {
  this.name = "Wolf";
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var articWolf = new Wolf();

document.write(articWolf.toString() + "<br />");
document.write("Wolf instance of Animal? " + (articWolf instanceof Animal) + "<br />");

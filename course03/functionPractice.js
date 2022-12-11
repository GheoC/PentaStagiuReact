function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    //BAD PRACTICE: for every user there is a new greet function created!
    this.greet = function () {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

const user1 = new User('Georgel', 'Popescu');
user1.greet();
const user2 = new User('Gabriel', 'Ionescu');

//overriding method greet for user2
user2.greet = function (){
    console.log('other user');
}
user2.greet();

const user3 = new User('Anton', 'Pan');
user3.greet();

//GOOD PRACTICE
User.prototype.greet2 = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}
console.log("\nCALLING the prototype function:")
user2.greet2();

// not working with anonymous functions; this is undefined
User.prototype.greet3 = () => {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}
user2.greet3();

// Using prototype functions for object User for other objects containing properties referenced in function
// (firstName, lastName)
const car = { firstName:'Dacia', lastName:'Sandero'};
User.prototype.greet2.call(car);
User.prototype.greet2.call({firstName:'Audi', lastName:'A5'});


//function with parameters
User.prototype.study = function (subject1, subject2) {
    console.log(`Student ${this.firstName} ${this.lastName} studies ${subject1} and ${subject2}`);
}

//function call is called by chaining arguments with ,
User.prototype.study.call({firstName:'Paul', lastName:'Albulescu'}, 'Javascript', 'C++');

//function apply is called by putting arguments into an array
User.prototype.study.apply({firstName:'Raul', lastName:'Negrescu'}, ['Java', 'C#']);
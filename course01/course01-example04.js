// Example of using 'const' and object manipulation

const user = {name: 'Gigi'};

function print() {
    console.log(user);
}

// adding a new property (lastName) and modifying a property (name)
user.name = 'Ionel';
user.lastName = 'Ionescu'
print();

// 'Object.seal' blocks the object for adding/removing properties =>
// 'name' can be changed, but 'age' cannot be added!
Object.seal(user)
user.name = 'Viorel';
user.age = 25;
print();

// 'Object.freeze' blocks the object (no modification or adding/removing new properties) =>
// 'name' cannot be changed, 'age' cannot be added!
Object.freeze(user);
user.name = 'Gabriel';
user.age = 25;
print();

const car = {name: 'Mercedes', owner: user};

// Object.defineProperty defines a property
Object.defineProperty(car, 'name', {writable: false});
car.name = 'audi';
console.log(car);

// writable - permits or not a property to be changed;
// configurable - permits or not a property to be deleted;
Object.defineProperty(car, 'name', {writable: true, configurable: false});
car.name = 'audi'; // writable true               =>  property 'name' -> 'audi'
delete car.name; //  configurable false           =>  property 'name' will NOT be deleted
delete car.owner; // configurable true by default =>  property 'owner' will be deleted;
console.log(car);


console.log('Adding new property to car')
Object.defineProperty(car, 'horsePower', {value: 190, configurable: true, enumerable: true, writable: true})
console.log(car)
car.horsePower = 175;
console.log(car)

Object.keys(car).forEach(k => console.log(k))

console.log(`\nkeys for user ${user.name + ' ' + user.lastName}:`)
Object.keys(user).forEach((key) => console.log(key));


console.log('\nProperty creation example:')
const student = {name: 'Mihaela'};
console.log(student);

// default settings for creating property: enumerable: true; writable: true; configurable: true;
student.lastName = 'Albulescu';
console.log(student);
student.lastName = 'Popescu';
console.log(student);

student.id = 1;
console.log(student);
delete student.id;
console.log(student);

// default settings for Object.defineProperty: enumerable: false; writable: false; configurable: false;
Object.defineProperty(student, 'age', {value: 25, enumerable: true, writable: true, configurable: true});
student.age = 20;
console.log(student);

console.log('delete age and last name')
delete student.age;
delete student.lastName
console.log(student)

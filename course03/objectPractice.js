const users = [
    {firstName: "George", lastName: "Smith", age: 30},
    {firstName: "Alin", lastName: "Popescu", age: 25},
    {firstName: "Michael", lastName: "Doe", age: 32},
    {firstName: "John", lastName: "Smith", age: 45},
    {firstName: "Andrei", lastName: "Ionescu", age: 50}
];

const user = {firstName: 'Georgel', lastName: 'Ionescu', age: 35};

// destructuring an object
var {firstName, lastName, age} = user;

console.log(firstName, lastName);

// instead of using the whole user object, we use destructuring to get only the property used in condition ('age')
console.log(users.filter(({age}) => age < 40 && age > 30));

// another destructuring example
var {firstName, ...rest} = users[2];
console.log(firstName, rest);

//using spread operator on object => it creates another object that contains all the properties on user
console.log({...user});

//using spread operator on array
console.log(...users);
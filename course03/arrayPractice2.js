const users = [
    {firstName: "George", lastName: "Smith", age: 30, active: true},
    {firstName: "Alin", lastName: "Popescu", age: 25, active: true},
    {firstName: "Michael", lastName: "Doe", age: 32, active: true},
    {firstName: "John", lastName: "Smith", age: 45, active: true},
    {firstName: "Andrei", lastName: "Ionescu", age: 50, active: true}
];

const newUsers = users.map((user) => {
    const {age} = user;
    if (age > 35) {
        return {...user, active: false};
    }
    return {...user}
});

console.log(newUsers);

// slice = creating a copy from index start to index end
const slicedUsers = newUsers.slice(2, 5);
console.log(slicedUsers);

// findIndex = finds the first index where condition is true
const activeSlicedUsersIndex = slicedUsers.findIndex(({active}) => active);
console.log(activeSlicedUsersIndex);

//splice = removes n elements from index and replaced by other element/elements
// splice only deleting 1 element from index

if (activeSlicedUsersIndex > -1) {
    slicedUsers.splice(activeSlicedUsersIndex, 1)
    console.log(slicedUsers);
}

// splice deleting 2 elements from index 0 and replacing with 3 new elements
slicedUsers.splice(0, 2,
    {name: 'Raul Raulescu', school: 25}, {
        name: 'Paul Paulescu',
        school: 15
    }, {name: 'Rares Taulescu', school: 5});
console.log(slicedUsers);

const userStringNames = users.map(({firstName}) => firstName).join(', ');
console.log(userStringNames);

// reduce
const userStringNames2 = users.reduce((acc, user) => {
    return `${acc} ${user.firstName},`;
}, '');

console.log(userStringNames2);

const numbers = users.map(({age}) => age);
console.log(numbers);

const sumOfNumbers = numbers.reduce((acc, number) => {
    return acc + number;
}, 0);

console.log(sumOfNumbers);


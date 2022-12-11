const users = [
    {firstName: "George", lastName: "Smith", age: 30},
    {firstName: "Alin", lastName: "Popescu", age: 25},
    {firstName: "Michael", lastName: "Doe", age: 32},
    {firstName: "John", lastName: "Smith", age: 45},
    {firstName: "Andrei", lastName: "Ionescu", age: 50}
];

console.log('\nUnsorted users:\n', users);
users.sort((user1, user2) => {
    if (user1.firstName?.toUpperCase() < user2.firstName?.toUpperCase()) {
        return -1
    }
    if (user1.firstName > user2.firstName) {
        return 1
    }
    return 0;
});
console.log('\nSorted users:\n', users);

console.log('\nfirst user found with last name Smith: ', users.find(user => user.lastName === 'Smith'));

console.log('\nall users with last name Smith: ', users.filter(u => u.lastName === 'Smith'));
console.log('\nall users with last name Smith and age above 40: ', users.filter(u => u.lastName === 'Smith' && u.age > 40));

// optional chaining
users[3].address?.toUpperCase?.();


const ageArray = users.map(({age}) => {
    return age
});
console.log(ageArray);

ageArray.sort((n1, n2) => {
    if (n1 > n2) {
        return 1;
    }
    if (n1 < n2) {
        return -1;
    }
    return 0;
})
console.log(ageArray);

const concatUsers = users.map(({firstName, lastName}) => {
    return {fullName: `${firstName} ${lastName}`};
});

console.log(concatUsers);
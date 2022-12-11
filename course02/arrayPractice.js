const arr1 = [];
arr1[0] = 4;
arr1[1] = 2;
arr1[10] = 3; // from arr1[2] to arr1[9] UNDEFINED!!!
console.log(arr1);
console.log(arr1[5]); // UNDEFINED

arr1.push(1); //add element 1 to the end of the array
console.log(arr1);

arr1.unshift(1); //add element 1 at the beginning of the array
console.log(arr1);

const arr2 = [1, 4, 3, 8, 5];
// find the first element that respects the condition!
console.log(`first element div by 2 is: ${arr2.find((element) => element % 2 === 0)}`);

// find all elements that respect the condition!
console.log(`all elements div by 2 are: ${arr2.filter(e => e % 2 === 0)}`);

// map
console.log(`elements multiplied by 3: ${arr2.map(element => element * 3)}`);
// arr2.map(e => <div>{e}</div>); for REACT map to tags

const arr3 = new Array(3).fill(5); // creates an array with 3 elements; all elements are 5
console.log(arr3);

const arr4 = Array();
arr4.push(7);
arr4.push(13);

const arr5 = [1, 2, [3, 4, 5], [6, 7, [8, 9]]];
console.log(`flat ${arr5.flat()}`);
console.log(arr5);

//decomposing 3 arrays (... is spread operator) into new array; equivalent for join
const arr6 = [...arr2, ...arr4, ...arr5];
console.log(`new array: ${arr6}`);


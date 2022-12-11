function getFibonacciNumberByIndex(index, map = {}) {
    if (index <= 2) {
        return 1;
    }
    // const truthy = 1 || 'a' || [] || {} || () => {} || true;
    // const falsy = 0 || '' || undefined || null || NaN || false;

    // ! Important!:  map[index] equivalent (map[index] !== undefined || map[index] !== null)
    // ex: map[index] = 0  is FALSY!
    if (map[index]) {
        return map[index];
    }
    map[index] = getFibonacciNumberByIndex(index - 2, map) + getFibonacciNumberByIndex(index - 1, map);

    return map[index];
}

console.log(getFibonacciNumberByIndex(1));
console.log(getFibonacciNumberByIndex(3));
console.log(getFibonacciNumberByIndex(6));

const start = new Date().getTime();

console.log(`number 89 of Fibonacci Series is: ${getFibonacciNumberByIndex(89)}`);

const end = new Date().getTime();

const elapsed = parseFloat((end - start) / 1000).toFixed(3);
console.log(`Fibonacci 89 found in ${elapsed} seconds`);
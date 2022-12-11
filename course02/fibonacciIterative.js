function getFibonacciNumberByIndex(index) {
    if (index <= 2) {
        return 1;
    }
    const arr = new Array(index + 1).fill(1);
    for (let i = 3; i <= index; i += 1) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[index];
}

console.log(`number 89 of Fibonacci Series is: ${getFibonacciNumberByIndex(89)}`);
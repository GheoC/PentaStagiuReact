//demonstration of how Stack, EventLoop and Callback Queue works
// !-IMPORTANT-! CallBack Queue will only fill the Stack only if Stack is EMPTY.
// so instructions that are run with a setTimeout will fill the queue via Webapis; they will be pushed to the stack only
// if the Stack is empty no matter the timeout

const start = new Date().toLocaleTimeString();

setTimeout(function () {
    console.log(`After 1 sec ${new Date().toLocaleTimeString()}`);
}, 1000);

for (var i = 0; i < 10000; i++) {
    console.log(`for ${i}`);
}

console.log(`Start ${start}`);
console.log(`End ${new Date().toLocaleTimeString()}`);
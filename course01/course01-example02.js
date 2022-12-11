// Example of "Maximum call stack size exceeded" aka Stackoverflow

function loop() {
    loop();
}

loop();
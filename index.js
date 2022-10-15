function receivesAFunction(callback) {
    callback();
    return callback;
}

function returnsANamedFunction() {
    const dugFunc = function () {
        console.log("I love puppy dugs!");
    }
    return dugFunc;
}

function returnsAnAnonymousFunction() {
    return (() => {
        console.log("I'm anonymous!");
    })
}
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size.toUpperCase(), " and the message printed on it is: \"").concat(message, "\""));
}
// Creating a large shirt with default message
make_shirt();
// Creating a medium shirt with default message
make_shirt("medium");
// Creating a shirt of any size with a different message
make_shirt("small", "JavaScript is awesome!");

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size.toUpperCase()} and the message printed on it is: "${message}"`);
}

// Creating a large shirt with default message
make_shirt();

// Creating a medium shirt with default message
make_shirt("medium");

// Creating a shirt of any size with a different message
make_shirt("small", "JavaScript is awesome!");

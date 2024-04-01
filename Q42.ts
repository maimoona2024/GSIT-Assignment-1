function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}

// Array of magician's names
let magicians: string[] = ["Kiran", "Fara", "Sony", "Neha"];

// Calling the make_great() function to modify the magician names
magicians = make_great(magicians);

// Calling the show_magicians() function to see the modified list
show_magicians(magicians);

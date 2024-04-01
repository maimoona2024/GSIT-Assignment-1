function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

// Array of magician's names
let originalMagicians: string[] = ["Kiran", "Maha", "Sony", "Neha"];

// Call make_great() with a copy of the original array
let greatMagicians: string[] = make_great(originalMagicians.slice());

// Show the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Show the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

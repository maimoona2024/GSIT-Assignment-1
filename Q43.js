function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
// Array of magician's names
var originalMagicians = ["Kiran", "Maha", "Sony", "Neha"];
// Call make_great() with a copy of the original array
var greatMagicians = make_great(originalMagicians.slice());
// Show the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Show the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

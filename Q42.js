function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
// Array of magician's names
var magicians = ["Kiran", "Fara", "Sony", "Neha"];
// Calling the make_great() function to modify the magician names
magicians = make_great(magicians);
// Calling the show_magicians() function to see the modified list
show_magicians(magicians);

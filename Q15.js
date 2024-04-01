var guests = ["Hania", "Maryam", "Fiza", "Rania", "Asma"];
console.log(guests[1] + " can't make it to the dinner.");
guests[1] = "Wania";
// Print second set of invitation messages
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear " + guest + ",\nYou are invited to dinner with me. It would be an honor to have your presence.\nSincerely, Maimoona");
}

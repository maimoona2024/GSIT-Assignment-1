// Original list of guests
var guests = ["Hania", "Maryam", "Fiza", "Rania", "Asma"];
// Print the number of people being invited to dinner
console.log("Inviting ".concat(guests.length, " people to dinner."));
// Print invitation messages to the guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're invited to dinner."));
});

// Original list of guests
var guests = ["Hania", "Maryam", "Fiza", "Rania"];
console.log("Unfortunately, I can only invite two people for the dinner party.");
// Remove guests from the list until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you."));
}
// Print invitation messages to the remaining guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited."));
});
// Remove all elements from the array
guests.splice(0, guests.length);
console.log("Final guest list:", guests);

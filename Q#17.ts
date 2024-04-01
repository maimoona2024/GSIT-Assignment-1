// Original list of guests
let guests: string[] = ["Hania", "Maryam", "Fiza", "Rania"];

console.log("Unfortunately, I can only invite two people for the dinner party.");

// Remove guests from the list until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you.`);
}

// Print invitation messages to the remaining guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited.`);
});

// Remove all elements from the array
guests.splice(0, guests.length);

console.log("Final guest list:", guests);

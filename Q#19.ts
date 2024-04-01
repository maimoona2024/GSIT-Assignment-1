// Original list of guests
let guests: string[] = ["Hania", "Maryam", "Fiza", "Rania", "Asma"];

// Print the number of people being invited to dinner
console.log(`Inviting ${guests.length} people to dinner.`);

// Print invitation messages to the guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to dinner.`);
});

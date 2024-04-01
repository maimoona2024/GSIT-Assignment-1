let guests: string[] = ["Hania", "Maryam", "Fiza", "Rania", "Asma"];
console.log(guests[1] + " can't make it to the dinner.");
guests[1] = "Wania";

// Print second set of invitation messages
for (const guest of guests) {
    console.log("Dear " + guest + ",\nYou are invited to dinner with me. It would be an honor to have your presence.\nSincerely, Maimoona");
}

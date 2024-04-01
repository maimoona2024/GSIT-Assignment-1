let current_users: string[] = ["kainat", "maha", "laila", "urooj", "umm e ayesha"];
let new_users: string[] = ["Noman", "Farhan", "Farah", "imran", "kamal"];

for (let new_user of new_users) {
    let is_existing = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (is_existing) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${new_user} is available!`);
    }
}

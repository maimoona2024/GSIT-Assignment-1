let guests : string[] = ["Hania", "Maryam", "Fiza", "Rania"];
console.log("I have found a bigger table")

guests.unshift("Maha")    //add from top

guests.splice(guests.length / 2, 0, "Sauleha")    //add in the middle total/2
//            total element / 2 ,0 element is removed,
//             4/2 = 2, on index 2 "Sauleha" will be add

guests.splice(guests.length / 4, 0, "Siddiqa")
//             6/4 = 1.5 = 1, on index 1 "Siddiqa" will be add

guests.push("Fozia")          //add from bottom

guests.forEach(guests => {
    console.log(`Dear ${guests}, would like to invite you in my Dinner Party`)
})
// Store the locations in an array in original order
let locations: string[] = ["Islamabad", "Murree", "Lahore", "Bahria Town", "Commander city"];

// Print the array in its original order
console.log("Original order:", locations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...locations].sort());

// Show that the array is still in its original order
console.log("Original order after sorting:", locations);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...locations].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse sorting:", locations);

// Reverse the order of the list
locations.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", locations);

// Reverse the order of the list again
locations.reverse();

// Print the list to show it’s back to its original order
console.log("Original order after double reverse:", locations);

// Sort the array so it’s stored in alphabetical order
locations.sort();

// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", locations);

// Sort to change the array so it’s stored in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", locations);

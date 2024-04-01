var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array in original order
var locations = ["Islamabad", "Murree", "Lahore", "Bahria Town", "Commander city"];
// Print the array in its original order
console.log("Original order:", locations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], locations, true).sort());
// Show that the array is still in its original order
console.log("Original order after sorting:", locations);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse());
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
locations.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", locations);

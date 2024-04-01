var personName = "Maimoona";
// Convert to lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Convert to uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Convert to titlecase
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase:", titlecaseName);

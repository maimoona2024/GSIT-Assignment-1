function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
let result1: string = city_country("Lahore", "Pakistan");
let result2: string = city_country("Tokyo", "Japan");
let result3: string = city_country("Paris", "France");

console.log(result1);
console.log(result2);
console.log(result3);

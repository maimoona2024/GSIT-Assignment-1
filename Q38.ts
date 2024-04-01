function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Noida", "India");
describe_city("Landhi"); // Without specifying the country (uses default)

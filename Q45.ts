function store_car(manufacturer: string, model: string, ...additionalInfo: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let info of additionalInfo) {
        for (let key in info) {
            if (info.hasOwnProperty(key)) {
                carInfo[key] = info[key];
            }
        }
    }

    return carInfo;
}

// Call the function with required information and additional name-value pairs
let car = store_car("Toyota", "Camry", {color: "blue"}, {price: 25000});

// Print the object returned to ensure all the information was stored correctly
console.log(car);

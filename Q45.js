function store_car(manufacturer, model) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, additionalInfo_1 = additionalInfo; _a < additionalInfo_1.length; _a++) {
        var info = additionalInfo_1[_a];
        for (var key in info) {
            if (info.hasOwnProperty(key)) {
                carInfo[key] = info[key];
            }
        }
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var car = store_car("Toyota", "Camry", { color: "blue" }, { price: 25000 });
// Print the object returned to ensure all the information was stored correctly
console.log(car);

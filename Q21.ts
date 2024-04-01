// Define interfaces for different types of items
interface Book {
    title: string;
    author: string;
    pages: number;
  }
  
  interface Car {
    make: string;
    model: string;
    year: number;
  }
  
  interface Fruit {
    name: string;
    color: string;
    quantity: number;
  }
  
  // Create objects containing different items
  const myBook: Book = {
    title: "Mathematics",
    author: "Miss Emaan Fatima",
    pages: 200
  };
  
  const myCar: Car = {
    make: "Suzuki",
    model: "Mehran",
    year: 2022
  };
  
  const myFruit: Fruit = {
    name: "Mango",
    color: "Yellow",
    quantity: 10
  };
  console.log("My Book:", myBook);
  console.log("My Car:", myCar);
  console.log("My Fruit:", myFruit);
  
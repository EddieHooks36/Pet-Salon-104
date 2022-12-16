//oject literal
let customer = {
    //attributes or properties
    name:"Eddie",                 //Describes attributes
    age:33,                       //Describes attributes          
    isActive: true,               //Describes attributes
    isActive: true,               //Describes attributes
    nationality: "American",      //Describes attributes
    
    //methods
    sayHi: function(){            //Describes the mehod
        return "Hello";           //Describes the mehod
    },
    hobbies:["football", "music", "game"],
    address:{
        street: "mountain",
        zip:"12345",
        city:"San Diego"
    }
} 
console.log (customer.address.city);    //Displays on the console

let products = [];
let product1 = {
    name:"Laptop",
    description:"HP i7 core",
    price:200
}
let product2 = {
    name:"PC",
    description:"Dell Latitude",
    new: true,
    price: 250
}
let product3 = {
    name: "PC",
    description: "Lenovo",
    color: "gray",
    price: 350
}
products = [product1,product2,product3];
products.push(product1,product2,product3);
console.log(products[2].color);
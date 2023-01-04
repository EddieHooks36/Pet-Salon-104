// //oject literal
// let customer = {
//     //attributes or properties
//     name:"Eddie",                 //Describes attributes
//     age:33,                       //Describes attributes          
//     isActive: true,               //Describes attributes
//     isActive: true,               //Describes attributes
//     nationality: "American",      //Describes attributes
    
//     //methods
//     sayHi: function(){            //Describes the mehod
//         return "Hello";           //Describes the mehod
//     },
//     hobbies:["football", "music", "game"],
//     address:{
//         street: "mountain",
//         zip:"12345",
//         city:"San Diego"
//     }
// } 
// console.log (customer.address.city);    //Displays on the console

// let products = [];
// let product1 = {
//     name:"Laptop",
//     description:"HP i7 core",
//     price:200
// }
// let product2 = {
//     name:"PC",
//     description:"Dell Latitude",
//     new: true,
//     price: 250
// }
// let product3 = {
//     name: "PC",
//     description: "Lenovo",
//     color: "gray",
//     price: 350
// }
// products = [product1,product2,product3];
// products.push(product1,product2,product3);
// console.log(products[2].color);


                   //JS Selectors id, class, tag, query
// let element = document.getElementById("txtName"); //Returning a single element

// let elements = document.getElementsByClassName("mb-3");

// for(let i=0;i<elements.length;i++){
//     elements[i].style.display ="none";
// }
// let li = document.getElementsByTagName("li"); //Returning a collection of elements
// for(let i=0;i<li.length;i++){
//     li[i].style.display ="none";
// }
// let button = document.querySelector("button");
// let p = document.querySelectorAll(".container"); //Returning collection of elements
// console.log(p);


// function hide(){
//     document.querySelector("body").style.display="none";
// }
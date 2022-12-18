//object literal
//name, age, gender, breed , service, owners, phone
let petSalon = {
    name:"The Fashion Pet",
    phone: "111-111-1111",
    address: {
        street: "Fake Street",
        zip: 12345,
        number: 123
    },
    hours:{
        open: "9:00am",
        close: "5:00pm"
    },
    pets:[]
    
}
//constructor
function Pet (name, age, gender, breed, service, owners, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownername = owners;
        this.contactPhone = phone;
}


let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    //get values from the html
    console.log(inputName.value, inputAge.value);
    //create new objects
    let newPet = new Pet (inputName.value, inputAge.value, inputGender.value, inputBreed.value,inputService.value);
    
    //display object on the console
    console.log(newPet);
    console.log(petSalon.pets)
}
function displayifo(){

}
function clearForm(){
    inputName.value = "";
    inputAge.value = 0;
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
}

function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","111-111-1111"); //creating the object
    let gigi = new Pet("Gigi",12,"Female","Grooming","Eddie","111-111-1111");
    let scrappy = new Pet("Scrappy", 3 , "male", "Dane", "bathe","shaggy","111-111-1111");

    petSalon.pets.push(scooby, gigi, scrappy); //adding the pet to the array
}


window.onload = init;
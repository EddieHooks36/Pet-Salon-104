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
let c = 0;
//constructor
function Pet (name, age, gender, breed, service, owner, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownername = owner;
        this.contactPhone = phone;
        this.id=c++;
}

function validatePet(thePet){
    let validation=true;
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");

    if(thePet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
    }
    if(thePet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }
    if(thePet.breed==""){
        validation=false;
        inputBreed.classList.add("alert-error");
    }

    return validation;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");




function register(){
    //get values from the html
    // console.log(inputName.value, inputAge.value);
    //create new objects

    let newPet = new Pet (inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value);
    
    if(validatePet(newPet)==true){
    //the pet was valid
    //push it to the array

    petSalon.pets.push(newPet);
    //display the object on the console

    alert("You have" + petSalon.pets.length + "pets in the salon");
    displayInfo();
    displayPetCards();
    clearForm();
   }

}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value="";
    inputPhone.value="";
}
function deletePet(id){
    console.log("deleting pet" + id);
    //travel the array-Loop lets you travel array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(id==pet.id){//find the pet
            deleteIndex=i;
        }
    }
      document.getElementById(id).remove();
      //delete the pet from the html
      petSalon.pets.splice(deleteIndex,1);
      //delete the pet from the array
      //update info
      displayInfo();
}

function displayInfo(){
    document.getElementById("txtAmount").innerHTML="You have" + petSalon.pets.length + "pets in the salon"

}
function init(){
    // let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","111-111-1111"); //creating the object
    // let gigi = new Pet("Gigi",12,"Female","Rotweiler","Grooming","Eddie","111-111-1111");
    // let scrappy = new Pet("Scrappy", 3 , "male", "Dane", "Bathe","shaggy","111-111-1111");

    petSalon.pets.push(); //adding the pet to the array //scooby, gigi, scrappy
    displayInfo();
    displayPetCards();
}


window.onload = init;
//object literal
//name, age, gender, breed , service, owners, phone
let salon = {
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
    pets:[
        {   //anonymous object
            name:"Scooby",
            age:50,
            gender:"male",
            breed: "Dane",
            service:"Grooming",
            contactphone:"111-111-1111"
        },
        {
            name:"Gigi",
            age:12,
            gender: "Female",
            breed: "Rotwhieler",
            service: "Grooming",
            contactphone:"111-111-1111"
        },
    ]
    
}

function displayifo(){

}

function init(){
    console.log(Salon,pets[0].name)
}

window.onload = init;
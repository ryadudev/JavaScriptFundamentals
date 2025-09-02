//Objects and Arrays


/*
Objects: defined as key-value pair inside {}.
*/
var customer = {
    firstName : "John",
    lastName  : "Smith",
    //Objects can have Arrays
    car : ["BMW", "AUDI", "VOLVO"]
}
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
//First car of John Smith
console.log(`${"Fist Car Of John Smith is"} ${customer.car[0]}`)

//Chnaging the values

//Dot notation
customer.firstName = "Mike"

//Bracket notation
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName} ${" : Printed using Interpolation"}`)

//Arrays...

var cars = ["BMW", "AUDI", "VOLVO"]
console.log(cars)
//repalce BMW with TESLA
cars[0] = "TESLA"
console.log(cars[0])
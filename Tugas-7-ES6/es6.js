// Jawaban Soal Nomor 1

console.log("==========Nomor 1==========")
const golden = function goldenFunction(){
    console.log("this is golden!!")
  }
   
golden()

console.log("===========Bentuk ES6===========")

var golden = () => {
    return "This is golden!!"
}

golden()
console.log("\n\n")

// Jawaban Soal Nomor 2

console.log("==========Nomor 2==========")
var newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(firstName + " " + lastName)
        }
    }
}

newFunction("William", "Imoh").fullName() 
console.log("\n\n")

// Jawaban Soal Nomor 3

console.log("==========Nomor 3==========")
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject

console.log(firstName, lastName, destination, occupation, spell)
console.log()
console.log("\n\n")

// Jawaban Soal Nomor 4

console.log("==========Nomor 4==========")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]

console.log(combined)
console.log("\n\n")

// Jawaban Soal Nomor 5

console.log("==========Nomor 5==========")
const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' +       'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +     'incididunt ut labore et dolore magna aliqua. Ut enim' +     ' ad minim veniam'

const after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

console.log(after)
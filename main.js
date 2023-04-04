// let myName

// function setName(newName){
//     myNam = newName;
// }

// setName("Daniele") // errore
// console.log(myName)

// Usare la funzione "use strict" (strict mode) per rendere js più "severo"/stringente su certe azione che normalmente ti permette di fare

// let i = 9

// if(true){
//     let i = 5
//     console.log("Inner I: "+  i)
// }



// Types
// tipo di dato = stringa-numero-Booleano 
// Tipi dinamici =


function dynamicTypes() {
    "use strict"

    let myVar = true
    console.log(myVar)

    myVar = 14
    console.log(myVar)

    console.log("1" + 3)
}

dynamicTypes()

//annotazioni di tipo

// val: bool o  bool-> bool
function invert(val) {
    return !val
}

console.log("invert(true): " + invert(true))
console.log("invert(5): " + invert(5))


// {firstName: String, lastName: String, getAge: () > int} => () o per essere più precisi
// class Person{
//     constructor()

//     /*...*
// }
// Person -> ()
// function printPersonData(person){
//     // ...
//     console.log(p.firstName + " " + p.lastName + ", età: " + p.getAge())
//     // ...
// }


// let pers = {
//     firstName: "Daniele",
//     lastName: "Puggioni"
// }

// console.log(printPersonData(pers))


//(int,int) => int                  // prende due integer e l'output è a sua volta un integer
function multiply(n1, n2) {
    return n1 * n2;
}



// Tipi generici

function pickFirstElement(array) {
    return array[0];
}

console.log(pickFirstElement(["ciao", "mondo"])) // -> "ciao"
console.log(pickFirstElement([1, 2, 3]))  // -> 1


// TESTING : programma che testa e controlla un altro programma.

function test(testDescription, body) {                              // si aspetta di ricevere un ingresso un parametro(body), prova a chiamarla come una funzione 
    if (body()) {                                                  // e si aspetta che esca il boolean "true", quindi test succeeded, se il test fallisce esce false.
        console.log(`TEST SUCCEEDED: ${testDescription}`)
    } else {
        console.log(`TEST FAILED: ${testDescription}`)
    }
}

test("Picking first element of array of strings", function () {
    return pickFirstElement(["ciao", "mondo"]) === "ciao"
})

test("Picking first element of array of integers", function () {
    return pickFirstElement([1, 2, 3]) === 1
})


test("Picking first element of empty array", function () {
    return pickFirstElement([]) === undefined
})


function removeExclamationMarks(s) {
    let newArray = ''
    for (let i = 0; i < s.length; i++) {
        
        const element = s[i];
        if (element !== '!') {
            newArray += element;
        }
    }
    return newArray
}

console.log(removeExclamationMarks("Hello!!"))
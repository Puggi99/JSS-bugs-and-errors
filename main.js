let myName;

// function setName(newName){
//     "use strict"; //senza questo, myNam (un typo) mi diventa automaticamente undefined
//     myNam = newName;
// }

// setName("Chiara"); //senza questo, myNam (un typo) mi diventa automaticamente undefined passata come nuova variabile globale, siccome non trova myName
// console.log("myName: "+ myName);
// console.log("myNam: "+ myNam);


// annotazioni di tipo


// sarebbe meglio scrivere che val: bool per non causare casini nel codice
// bool -> bool (entra tipo -> esce tipo)

// function invert(val){
//     return !val
// }
// console.log("Invert(true): " + invert(true));
// console.log("Invert (5): "+ invert(5)); 



// testing

// class ArgumentIsNotArrayError extends Error{
//     constructor(msg){
//         super();
//         this.msg = msg;
//     }
// }

// class ArrayIsEmpty extends Error{
//     constructor(msg){
//         super();
//         this.msg = msg;
//     }
// }

// // Array[T] -> T
// function pickFirstElementOfArray(array){
//     if (!Array.isArray(array)) {
//         throw new ArgumentIsNotArrayError("Non è un array");
//     }
//     if (array.length === 0) {
//         throw new ArrayIsEmpty("L'array è vuoto!");
//     }
//     return array[0];
// }

// pickFirstElementOfArray(["ciao", "mondo"]);
// // -> "ciao"
// pickFirstElementOfArray([1,2,3]);
// // -> 1
// function test(testDescription, body){
//     if (body()) {
//         console.log(`TEST SUCCEEDED: ${testDescription}`);
//     } else{
//         console.log(`TEST FAILED: ${testDescription}`);
//     }
// }

// test("picking first element of array of strings", function() {
//     return pickFirstElementOfArray(["ciao", "mondo"]) === "ciao";
// })
// test("picking first element of array of integers", function() {
//     return pickFirstElementOfArray([1,2,3]) === "1";
// })
// test("picking first element of array of integers", function() {
//     return pickFirstElementOfArray([7,7,7]) === 7;
// })
// test("picking first element of array of empty array", function() {
//     return pickFirstElementOfArray([]) === null;
// })

// console.log("TRYING TO CALL pickFirst ON true");
// try {
//     let val = pickFirstElementOfArray(true);
//     console.log("first element of array is " + val)
// } catch (error){
//     if (error instanceof ArrayIsEmpty) {
//         console.log("Attenzione, passare un array non vuoto");
//         //return 0;
//     }
//     throw error;
// } finally {

// }



// BUGS AND ERRORS

// function parseInWithError(selectedString){
//     const result = parseInt(selectedString);
//     if(isNaN(result)){
//         throw new Error('Sei un babbiddiu, non hai messo un numero')
//     }else{
//         return result;
//     }
// }



// TRY and CATCH  "Se c'è un'eccezione e afferrala"
// try{
//     const numero = parseInWithError('dd')
//     console.log(numero);
// }catch(error){
//     console.log('Sei proprio un babbiddiu daje roma daje tortellini alla paolo dybala')
// }


// funzione con due errori diversi

// function indexOfWithError(array, element) {
//     if (array.length === 0) {
//         throw new EmptyArrayError('che cazzo combini? mi hai passato un array vuoto')
//     } else {
//         const index = array.indexOf(element);
//         if (index === -1) {
//             throw new ElementNotFoundError('non ho trovato un belin di niente')
//         } else {
//             return index
//         }
//     }
// }

// console.log(indexOfWithError(['Simone', 'Jing'], 'Jing'))


// try {
//     const index = indexOfWithError(['pippo', 'pluto', 'paperino'], 'i')
//     console.log(index)
// } catch (error) {
//     // console.log(error.message)
//     if(error instanceof EmptyArrayError){
//         console.log('caro utente per qualche strano errore si è arrivato un array vuoto')
//     }else if(error instanceof ElementNotFoundError){
//         console.log('ho cercato in lungo e in largo ma purtroppo non ho trovato niente')
//     }else{
//         console.log('qualcosa si è rotto ma non so cosa')
//     }
// }


// function isMyElementInArray(array, element) {
//     try {
//         indexOfWithError(array, element);
//         return true
//     } catch (error) {
//         if (error instanceof ElementNotFoundError) {
//             return false
//         } else {
//             throw error
//         }
//     }
//     finally {
//         console.log('qualcosa si è rotto')
//     }
// }

// try {
//     const isInside = isMyElementInArray(['qui', 'quo', 'qua'], 'qui')
//     console.log(isInside)
// } catch (error) {
//     console.log(error.message)
// }


// FINALLY pezzo di codice che, qualsiasi cosa faccia catch, viene eseguito comunque
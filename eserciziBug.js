/// esercizio 1

function primitiveMultiply(number) {
    const selectedNumber = Math.random()
    if (selectedNumber <= 0.2) {
        return selectedNumber * 2;
    } else {
        throw new multiplicatorUnitFailure();
    }
}


// try {
//     const result = primitiveMultiply(5);
//     console.log(result)
// } catch (error) {
//     console.log(error.message)
// }

// function reliableMultiplyByTwo(selectedNumber){
//     try {
//         const result = primitiveMultiply(selectedNumber);
//         return result
//     } catch (error) {
//         if(error instanceof multiplicatorUnitFailure){
//         console.log(error.message)
//        return reliableMultiplyByTwo(selectedNumber)
//         }else{
//             console.log(error.message)
//         }
// }
// }

// console.log(reliableMultiplyByTwo(5))


function reliableMultiplyByTwoWhile(selectedNumber) {
    while (true) {
        try {
            const res2 = primitiveMultiply(selectedNumber)
            return res2
        } catch (error) {
            if (error instanceof multiplicatorUnitFailure) {
                console.log(error.message)
                continue
            } else {
                break
            }
        }
    }
}

console.log(reliableMultiplyByTwoWhile(10))


// esercizio 2

const box1 = new Box()

function withBoxUnlocked(box, func) {
    box.unlock()
    try {
        func(box)
    } catch (error) {
        throw error
    }finally{
    box.lock()
}
}

withBoxUnlocked(box1, (box) => {
    box.content.push("gold piece");
});

console.log(box1)

try {
    withBoxUnlocked(box1, (box) => {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box1)
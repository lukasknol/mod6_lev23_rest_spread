// 1
const addingUp = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item;
    })
}

console.log(addingUp(1, 2, 3, 4, 5, 6)); // 21


// 2
const addingUp2 = function (num1, num2, num3) {
    return num1 + num2 + num3;
}

const numbers = [1, 2, 3];

console.log(addingUp2(...numbers));  // 6
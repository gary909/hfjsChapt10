var numbersArray = [60, 50, 62, 58, 54, 54];

//Descending order 
function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

//Ascending Order
// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         return 1;
//     } else if (num1 === num2) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

numbersArray.sort(compareNumbers);

console.log(numbersArray);
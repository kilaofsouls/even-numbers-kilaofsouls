
const { uuid } = require('uuid');

function generateEvenNumbersList(length) {
    let evenNumbersList = [];
    for (let i = 2; i <= length * 2; i += 2) {
        evenNumbersList.push(i);
    }
    return evenNumbersList;
}

// Usage
const evenNumbersList = generateEvenNumbersList(10);
console.log(evenNumbersList);


module.exports = { generateEvenNumbersList };

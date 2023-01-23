// Write function that converts weights to grams.  The function should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".  Based on the second argument, convert the number to grams and return it.

function convertToGrams (number, unit) {
    if(isNaN(number)){
        return 'no number value'
    }
    let grams = 'invalid units'
    if (unit === 'lbs') {
        grams = number * 453.592
    }else if (unit === 'oz') {
        grams = number * 28.3495
    }else if (unit === 'kg') {
        grams = number * 1000
    }else if (unit === 'g') {
        grams = number
    }else if (unit === 'mg') {
        grams = number / 1000
    }
    return grams
}

console.log(convertToGrams('sdfg', 'lbs'))
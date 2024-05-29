// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen  = function(valueInDollar) {
    let valueInYen = valueInDollar * 1.07 * 156.5;
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 1.07 * 156.5 * 0.87;
    return valueInPound;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
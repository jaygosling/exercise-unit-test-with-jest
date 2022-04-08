const sum = (a,b) => {
    return a + b;
}
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (dollars) => {
    return parseFloat(((dollars / oneEuroIs.USD)*oneEuroIs.JPY).toFixed(2))
}
const fromEuroToDollar = (euros) => {
    return parseFloat((euros*oneEuroIs.USD).toFixed(2))
}
const fromYenToPound = (yen) => {
    return parseFloat(((yen / oneEuroIs.JPY)*oneEuroIs.GBP).toFixed(2))
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
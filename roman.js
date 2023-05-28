const compose = (f, g) => x => f(g(x))

const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const inputToArray = input => {
    const array = input.split("")
    return array
}

const arrayToNumber = array => {
    const numericArray = array.map( element => dictionary[element.toUpperCase()])
    return numericArray
}

const calc = array => {

    let mutableArray = [...array]
    let result = 0

    mutableArray.forEach( (element, index) => {

        const nextElement = mutableArray[index + 1]

        if (nextElement > element){
            result = result + sub(nextElement, element)
            mutableArray.splice(index + 1, 1)
        }
        else {
            result = result + element
        } 
    })
    return result
}

const sub = (num1, num2) => num1 - num2
const sum = (num1, num2) => num1 + num2

const inputToNumber = compose(arrayToNumber, inputToArray)
const divide = compose(calc, inputToNumber)

console.log(divide("MMXXIII"))

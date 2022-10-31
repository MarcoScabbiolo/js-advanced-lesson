import '../shared/identity-monad'

type UnaryNumericOperation = (x: number) => number








const sumn = (a: number, b: number) => a + b
const multiply = (a: number, b: number) => a * b
const substract = (a: number, b: number) => a - b
const divide = (a: number, b: number) => a / b

const myNumber = 10













// Standard function composition
console.log('Result ugly: ' + 
  divide(substract(multiply(sumn(myNumber, 4), 2), 5), 3).toFixed(2)
)

















// "Monadic" or "Chained" function composition
console.log('Result pretty: ' + 
  myNumber
    .let(x => sumn(x, 4))
    .let(x => multiply(x, 2))
    .let(x => substract(x, 5))
    .let(x => divide(x, 3))
    .toFixed(2)
)












const sum4: UnaryNumericOperation = sumn.bind(null, 4)
const multiply2: UnaryNumericOperation = multiply.bind(null, 2)
const substract5: UnaryNumericOperation = sumn.bind(null, -5)
const divideBy3: UnaryNumericOperation = multiply.bind(null, 1/3)

// Composition of partialy applied functions
console.log('Result partially applied: ' +
  myNumber
    .let(sum4)
    .let(multiply2)
    .let(substract5)
    .let(divideBy3)
    .toFixed(2)
)











// Previous functions curried
const curriedSum = (a: number) => (b: number) => a + b
const curriedMultiply = (a: number) => (b: number) => a * b
const curriedSubstract = (a: number) => (b: number) => b - a
const curriedDivide = (a: number) => (b: number) => b / a

// Curried function composition
console.log('Result curried: ' +
  myNumber
    .let(curriedSum(4))
    .let(curriedMultiply(2))
    .let(curriedSubstract(5))
    .let(curriedDivide(3))
    .toFixed(2)
)














const curriendSum4 = curriedSum(4)
const curriedMultiply2 = curriedMultiply(2)
const curriedSubstract5 = curriedSubstract(5)
const curriedDivide3 = curriedDivide(3)

// Function composition of partially applied curried functions
console.log('Result curried partially applied: ' + 
  myNumber
    .let(curriendSum4)
    .let(curriedMultiply2)
    .let(curriedSubstract5)
    .let(curriedDivide3)
    .toFixed(2)
)
Object.defineProperty(Object.prototype, 'apply', {
  value: function (f) { return f(this) },
  enumerable: false,
  writable: false
})

interface Object {
  apply<T, U>(this: T, func: (obj: T) => U): U
}

interface Number extends Object {}

type BinaryNumericOperation = (x: number, y: number) => number
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
    .apply(x => sumn(x, 4))
    .apply(x => multiply(x, 2))
    .apply(x => substract(x, 5))
    .apply(x => divide(x, 3))
    .toFixed(2)
)












const sum4: UnaryNumericOperation = sumn.bind(null, 4)
const multiply2: UnaryNumericOperation = multiply.bind(null, 2)
const substract5: UnaryNumericOperation = sumn.bind(null, -5)
const divideBy3: UnaryNumericOperation = multiply.bind(null, 1/3)

// Composition of partialy applied functions
console.log('Result partially applied: ' +
  myNumber
    .apply(sum4)
    .apply(multiply2)
    .apply(substract5)
    .apply(divideBy3)
    .toFixed(2)
)











// Previous functions expressed with arity 1
const curriedSum = (a: number) => (b: number) => a + b
const curriedMultiply = (a: number) => (b: number) => a * b
const curriedSubstract = (a: number) => (b: number) => b - a
const curriedDivide = (a: number) => (b: number) => b / a

// Curried function composition
console.log('Result curried: ' +
  myNumber
    .apply(curriedSum(4))
    .apply(curriedMultiply(2))
    .apply(curriedSubstract(5))
    .apply(curriedDivide(3))
    .toFixed(2)
)














const curriendSum4 = curriedSum(4)
const curriedMultiply2 = curriedMultiply(2)
const curriedSubstract5 = curriedSubstract(5)
const curriedDivide3 = curriedDivide(3)

// Function composition of partially applied curried functions
console.log('Result curried partially applied: ' + 
  myNumber
    .apply(curriendSum4)
    .apply(curriedMultiply2)
    .apply(curriedSubstract5)
    .apply(curriedDivide3)
    .toFixed(2)
)
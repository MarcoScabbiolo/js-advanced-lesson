Object.defineProperty(Object.prototype, 'let', {
  value: function (f) { return f(this) },
  enumerable: false,
  writable: false
})

Object.defineProperty(Object.prototype, 'also', {
  value: function (f) { f(this); return this; },
  enumerable: false,
  writable: false
})

interface Object {
  let<T, U>(this: T, func: (obj: T) => U): U
  also<T>(this: T, func: (obj: T) => void): T
}

interface Number extends Object {}
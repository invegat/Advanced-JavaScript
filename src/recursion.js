// Complete the following functions.
const uuidv1 = require('uuid/v1');

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2)
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) {
    return 1
  }
  return n * nFactorial(n - 1)
};
const testUuid = uuidv1();
let firstNonObjectValue
let returningFalse

/* Extra Credit */
const checkMatchingLeavesX = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  Object.keys(obj).forEach((key) => {
    const o = obj[key]
    if (typeof o === 'object' && o != null) {
      if (!checkMatchingLeavesX(o)) {
        returningFalse = true
        return false
      }
    } else {
      if (firstNonObjectValue === testUuid) {
        firstNonObjectValue = o
      }
      if (o !== firstNonObjectValue) {
        returningFalse = true
        return false
      }
    }
  })
  return !returningFalse
}
const checkMatchingLeaves = (obj) => {
  firstNonObjectValue = testUuid
  returningFalse = false
  const r = checkMatchingLeavesX(obj)
  return r
}
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
}

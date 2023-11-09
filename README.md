# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @leandro316/lotide`

**Require it:**

`const _ = require('@leandro316/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

### The following functions are currently implemented:

<span style="color: orange;">**assertArraysEqual**</span> Check if two arrays have the same element. It prints if both of them are equal or not

#### Arguments - Two array

#### Example

```javascript
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // Assertion Failed: array1 === array2
```

---

<span style="color: orange;">**assertEqual**</span> - Check if two elements are the same, the actual and expected. It prints if both of them are equal or not

#### Arguments - two values

#### Example

```javascript
assertArraysEqual("same", "same"); // Assertion passed: actual === expected
```

<span style="color: orange;">**assertObjectsEqual**</span> - Check if two objects has the same properties and value, the actual and expected. It prints if both of them are equal or not

#### Arguments - two objects

#### Example

```javascript
assertObjectsEqual(
  { colors: ["red", "blue"], size: "medium" },
  {
    size: "medium",
    colors: ["red", "blue"],
  }
); // Assertion passed: actual === expected
```

<span style="color: orange;">**countLetters**</span> - count the number of letters and return an object

#### Arguments - string

#### return - object

#### Example

```javascript
countLetters("lighthouse in the house") , // {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  } //
```

<span style="color: orange;">**countOnly**</span> - count the number of Words in array base on the given value in the second arugument of a function.

#### Arguments - (array, value)

#### return - object

#### Example

```javascript
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
}) , // {Jason: 1, karima: undefined, Fang: 2, Agouhanna: undefined}
```

<span style="color: orange;">**eqArrays**</span> - check if two arrays has equal values inside

#### Arguments - (array1, array2)

#### return - Boolean

#### Example

```javascript
eqArrays([1, 2, 3], [1, 2, 3]), //true
```

<span style="color: orange;">**eqObjects**</span> - check if two objects has equal key/properties values

#### Arguments - (object1, object2)

#### return - Boolean

#### Example

```javascript
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), //true


const eqObjects - `function(obj1, obj2)`: Check if two object equal
const findKey - `function(obj, callBackFn)`: return the key/value properties that meet the requirements in the callback functions
const findKeyByValue - `function(obj, strToGetTheValue)`: return the key property in object that meet the requirements
const flatten - `function(arr)`: flatten an array no matter how many levels of array inside the array
const head - `function(arr)`: get the first element of an array or string
const letterPositions - `function(word)`: get the index of a given letter/s
const middle - `function(word)`: get the middle letter/s
const tail - `function(arr)`: get the last element of an array
const takeUntil - `function(arr, callbackFn)`: return an array that meet the requirements in the call back functions
const without - `function(arr1, arr2)`: return an array, removing the element in array one that array two have
```

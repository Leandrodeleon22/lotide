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

#### Arguments - Two array (array1, array2)

#### Example

```javascript
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // print Assertion Failed: array1 === array2
```

---

<span style="color: orange;">**assertEqual**</span> - Check if two elements are the same, the actual and expected. It prints if both of them are equal or not

#### Arguments - two values (value, value)

#### Example

```javascript
assertArraysEqual("same", "same"); // print Assertion passed: actual === expected
```

---

<span style="color: orange;">**assertObjectsEqual**</span> - Check if two objects has the same properties and value, the actual and expected. It prints if both of them are equal or not

#### Arguments - two objects (object1, object2)

#### Example

```javascript
assertObjectsEqual(
  { colors: ["red", "blue"], size: "medium" },
  {
    size: "medium",
    colors: ["red", "blue"],
  }
); // print Assertion passed: actual === expected
```

---

<span style="color: orange;">**countLetters**</span> - count the number of letters and return an object

#### Arguments - string

#### return - object

#### Example

```javascript
countLetters("lighthouse in the house") , // return {
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

---

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
}) , // return {Jason: 1, karima: undefined, Fang: 2, Agouhanna: undefined}
```

---

<span style="color: orange;">**eqArrays**</span> - check if two arrays has equal values inside

#### Arguments - (array1, array2)

#### return - Boolean

#### Example

```javascript
eqArrays([1, 2, 3], [1, 2, 3]), // return true
```

---

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
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), // return true

```

---

<span style="color: orange;">**findKey**</span> - return the key of an object that meet the requirements in the callback functions

#### Arguments - (object1, callBackFunction)

#### return - object key/s

#### Example

```javascript
findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // return "noma"
```

---

<span style="color: orange;">**findKeyByValue**</span> - return the key of an object base on the given value

#### Arguments - (object1, value)

#### return - object key/s

#### Example

```javascript
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

findKeyByValue(bestTVShowsByGenre, "The Wire"),// return "drama";
```

---

<span style="color: orange;">**flatten**</span> - flatten an array with an array inside

#### Arguments - (array)

#### return - array

#### Example

```javascript
flatten([1, 2, [3, 4], 5, [6]]); // return [1, 2, 3, 4, 5, 6]
```

---

<span style="color: orange;">**head**</span> - get the first element of an array or string

#### Arguments - (array), (string)

#### return - value

#### Example

```javascript
head([1, 2, 3]); // return 1
```

---

<span style="color: orange;">**letterPositions**</span> - get the index of a given letter/s

#### Arguments - (string)

#### return - object

#### Example

```javascript
letterPositions("hello").l,// return [2, 3]
```

---

<span style="color: orange;">**middle**</span> - get the middle value/s of an array

#### Arguments - (array)

#### return - array

#### Example

```javascript
middle([1, 2, 3]), // return [2]
middle([1, 2, 3, 4, 5, 6]), // return [3,4]

```

---

<span style="color: orange;">**tail**</span> - get all the elements of an array except the first element

#### Arguments - (array)

#### return - array

#### Example

```javascript
tail(["Hello", "Lighthouse", "Labs"]), // return ["Lighthouse", "Labs"]
tail([1, 2, 3]), // return [2,3]

```

---

const tail - `function(arr)`: get the last element of an array
const takeUntil - `function(arr, callbackFn)`: return an array that meet the requirements in the call back functions
const without - `function(arr1, arr2)`: return an array, removing the element in array one that array two have

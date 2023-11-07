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

`const results = tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

const assertArraysEqual - `function(arr1, arr2)`: Check if two arrays have the same element
const assertEqual- `function(actual, expected)`: Check if actual and expected are equal
const assertObjectsEqual - `function(obj1,obj2)`: Check if two objects has the same properties
const countLetters - `function(sentence)`: count the number of letters in each sentence
const countOnly - `function(arrOfWords)`: count the number of Words in array
const eqArrays - `function(arr1, arr2)`: Check if two arrays are equal
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

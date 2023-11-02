const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert
/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, words.length - 1);

const oneElement = [2];

console.log(tail(oneElement));
assertEqual(oneElement.length, 1);

assertEqual(tail(oneElement).length, oneElement.length - 1);
*/
const oneElement = [2];
const words = ["Yo Yo", "Lighthouse", "Labs"];



describe('#tail', ()=> {

    it("return 1 for [2]", () => {
        assert.strictEqual(tail(oneElement).length, oneElement.length - 1)
    }),
    it('returns "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"] ', ()=>{
        assert.strictEqual(tail(words)[0], 'Lighthouse')
    }),
    it('returns "words.length - 1" for words.length - 1 ', ()=>{
        assert.strictEqual(tail(words).length, words.length - 1)
    })


}

)
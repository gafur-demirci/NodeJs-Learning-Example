import assert from "assert";



/* indexPower
function indexPower(ar: number[], n: number): number {
    let indexed = ar[n]
    if(n >= ar.length) return -1;
    return Math.pow(ar[n],n)
}

console.log("Example:");
console.log(indexPower([1, 2, 3], 2));

// These "asserts" are used for self-checking
assert.strictEqual(indexPower([1, 2, 3, 4], 2), 9);
assert.strictEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assert.strictEqual(indexPower([0, 1], 0), 1);
assert.strictEqual(indexPower([1, 2], 3), -1);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
 */
/* maxDigit
function maxDigit(value: number): number {
    let first = value.toString().split('')[0]
    if(value.toString().length === 1) return Number(first);
    let max;
    value.toString().split('').forEach(num => { num > first ? max = num : max = first})
    return Number(max);
}

console.log("Example:");
console.log(maxDigit(10));

// These "asserts" are used for self-checking
assert.strictEqual(maxDigit(0), 0);
assert.strictEqual(maxDigit(52), 5);
assert.strictEqual(maxDigit(634), 6);
assert.strictEqual(maxDigit(1), 1);
assert.strictEqual(maxDigit(10000), 1);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
 */
/* correctSentence
function correctSentence(text: string): string {
    return text[0].toUpperCase() + ((text[text.length - 1] !== ".") ? text.slice(1, text.length) + "." : text.slice(1, text.length));
    //let start = text[0].toUpperCase()
    //let end = text[text.length - 1]
    //let miniText = text.slice(1, text.length)
    //if(text[text.length-1] !== ".") text.slice(1,text.length) + "."
    //let solve = text[0].toUpperCase() + ((text[text.length - 1] !== ".") ? text.slice(1, text.length) + "." : text.slice(1, text.length))
}

console.log("Example:");
console.log(correctSentence("greetings, friends"));

// These "asserts" are used for self-checking
assert.strictEqual(
    correctSentence("greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends."),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("greetings, friends."),
    "Greetings, friends."
);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
 */
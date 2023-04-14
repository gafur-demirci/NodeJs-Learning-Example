import assert from "assert";



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
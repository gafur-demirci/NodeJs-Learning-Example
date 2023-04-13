import assert from "assert";



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
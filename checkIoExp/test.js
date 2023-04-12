const assert = require("assert");



/* All Upper I
function isAllUpper(text) {
    let numCount = 0
    let letCount = 0
    let numarr = []
    let letarr = []
    let upper = []
    let lower = []
    let s = false;
    text = text.replace(" ", "")
    let textL = text.length;
    text.split("").forEach((item) => {
        s = !isNaN(Number(item));
        if (s) {
            numarr.push(item)
            numCount++;
        }
        else {
            if (item === item.toUpperCase()) upper.push(item)
            else lower.push(item)
            letarr.push(item)
            letCount++;
        }

    });
    if (text === "") s = true;
    if (textL === numCount) s = true;
    if (textL === upper.length) s = true;
    return s;
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

// These "asserts" are used for self-checking
assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), true);
assert.strictEqual(isAllUpper("444"), true);
assert.strictEqual(isAllUpper("55 55 5 "), true);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
 */
/* zero index sort
let numArr = [5,6,0,7,10]
let zeroIndex = []

numArr.forEach((item, index) => {
    if (item === 0) { zeroIndex.push(index) }
})
if (zeroIndex.length !== 0) {

    numArr = numArr.filter(item => item != 0)
    numArr = numArr.sort((a,b) => a-b)
    zeroIndex.forEach(item => {
        numArr.splice(item, 0, 0)
    })
}else{
    numArr = numArr.sort()
}
return numArr;
//console.log(numArr);
 */
/* acceptablePassword
function isAcceptablePassword(password) {
    let s = false;
    if (password.length > 6) {
        let numCount= 0
        let letCount= 0
        let numarr = []
        let letarr = []
        password.split("").forEach((item,index,arr) => {
            s = !isNaN(Number(item));
            if(s) {
                numarr.push(item)
                numCount++;
            }
            else {
                letarr.push(item)
                letCount++;
            }
            
        });
        let uniqueLet = [...new Set(letarr)]
        let uniqueNum = [...new Set(numarr)]
        console.log(uniqueLet);
        console.log(uniqueNum);
        if(numCount == password.length) s = false;
        
        if(password.length > 9) s = true;
        if((!(numCount == password.length) && (!password.includes('password') || !password.includes('PASSWORD')))){
            if(uniqueLet.length + uniqueNum.length < 3) s = false;
            else s = true;
        }
        if(password.includes('password') || password.includes('PASSWORD')) s = false;
        return s;
    } else {
        return s;
    }
}


console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);
assert.strictEqual(isAcceptablePassword("12345678910"), true);
assert.strictEqual(isAcceptablePassword("password12345"), false);
assert.strictEqual(isAcceptablePassword("PASSWORD12345"), false);
assert.strictEqual(isAcceptablePassword("pass1234word"), true);
assert.strictEqual(isAcceptablePassword("aaaaaa1"), false);
assert.strictEqual(isAcceptablePassword("aaaaaabbbbb"), false);
assert.strictEqual(isAcceptablePassword("aaaaaabb1"), true);
assert.strictEqual(isAcceptablePassword("abc1"), false);
assert.strictEqual(isAcceptablePassword("abbcc12"), true);
assert.strictEqual(isAcceptablePassword("aaaaaaabbaaaaaaaab"), false);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
*/
/* isAcceptablePass
function isAcceptablePassword(password) {
    if (password.length > 6) {
        let s = false;
        password.split("").forEach((item) => {
            console.log(item);
            console.log(typeof (item));
            s = !isNaN(Number(item));
        });
        return s;
    } else {
        return false;
    }
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
 */
/* filter
let arr1 = [
    {
        "Value": 10,
        "Size": "L",
        "Type": 1
    },
    {
        "Value": 5,
        "Size": "M",
        "Type": 2
    },
    {
        "Value": 5,
        "Size": "XL",
        "Type": 2
    }
]
let arr2 = [
    {
        "Value": 7,
        "Size": "L",
        "Type": 1
    },
    {
        "Value": 5,
        "Size": "M",
        "Type": 2
    }
]

let result = arr1.filter(({ Size: id1, Value: val1, Type: type1 }) => {
    let valResult;
    let res;
    !arr2.some(({ Size: id2, Value: val2 }) => {

        if (id2 === id1) {
            valResult = val1 - val2
            if (valResult > 0) {
                res = `[{"Value": ${valResult},"Size": ${id1},"Type": ${type1}]`;
            }
        }
    });
    return res;
});
console.log("result : " + Object.keys(result[0]));
 */
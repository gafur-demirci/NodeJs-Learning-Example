let nums = [2,5,8,11,15,17]
let lastNums = nums.filter((num) => num > 10).map((num) => num*6)
console.log(lastNums);
let dummyData = [
    {type: "a", data: "123", funcType: 1},
    {type: "b", data: "321", funcType: 2},
    {type: "a", data: "234", funcType: 3},
    {type: "c", data: "432", funcType: 2},
    {type: "b", data: "345", funcType: 3},
    {type: "a", data: "543", funcType: 1},
];

let contentMap = {
    type:String,
    index: Number
}

let contentStack = []
// let mapItem = {};
dummyData.forEach((data,i) => {
    let mapItem = {};
    mapItem.type = data.type;
    mapItem.index = i;
    contentStack.push(mapItem)
})

console.log(contentStack);

let func1 = (item) => {
    console.log("func1");
    console.log(item.funcType);
};
let func2 = (item) => {
    console.log("func2");
    console.log(item.funcType);
};
let func3 = (item) => {
    console.log("func3");
    console.log(item.funcType);
};
let indexedCreator = (data,stack) => {
    stack.forEach((item,i) => {
        switch (item.type) {
            case "a":
                func1(data[i]);
                break;
            case "b":
                func2(data[i]);
                break;
            case "c":
                func3(data[i]);
                break;
        }
    })
};

indexedCreator(dummyData,contentStack);
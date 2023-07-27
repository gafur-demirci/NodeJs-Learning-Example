var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var items = [
    {
        name: "A",
        value: 2
    },
    {
        name: "B",
        value: 22
    },
    {
        name: "aB",
        value: 23
    },
    {
        name: "Ac",
        value: 21
    },
    {
        name: "a",
        value: 27
    },
];
var searchKey = 'A';
var searchArr = [];
items.forEach(function (item) {
    var seachValue = item.name;
    //console.log(seachValue);
    var val = seachValue.toLowerCase();
    searchArr.push({ value: val, id: item.value });
});
console.log('sonuc arr');
console.log(searchArr);
var filterArr = [];
items.forEach(function (element) {
    //console.log(typeof(element['value']));
    var val = element["name"];
    var valArr = val.split('');
    console.log(typeof (valArr));
    if (valArr.indexOf(searchKey.toLowerCase())) {
        filterArr.push(valArr);
    }
});
console.log('filterArr');
console.log(filterArr);
/*
// let result = items.filter((value) => {
//     //console.log(value);
//     let val = [value.name.toLowerCase()]
//     //console.log(val);
//     val.forEach(valIn => {
//         console.log('valIn');
//         console.log(valIn);

//         if (valIn.includes(searchKey.toLowerCase())) {
//             console.log('burada');

//             result.push(value)
//         }

//     })
//     //if(val.includes(searchKey.toLowerCase())) return value

//     // if(value.name.toLowerCase() === searchKey.toLowerCase()){
//     //     return value
//     // }


// })

// if(result.length === 0) console.log('sonuç yok');
// else if(searchKey === '') console.log('tümünü göster not found not visible');
// else console.log('tümünü göster not found not visible');
*/
/*
// Let's create some buffers with some data

// const bufferFromString = Buffer.from('Ciao human')
// const bufferFromByteArray = Buffer.from([67, 105, 97, 111, 32, 104, 117, 109, 97, 110])
// const bufferFromHex = Buffer.from('4369616f2068756d616e', 'hex')
// const bufferFromBase64 = Buffer.from('Q2lhbyBodW1hbg==', 'base64')

// data is stored in binary format
// console.log(bufferFromString) // <Buffer 43 69 61 6f 20 68 75 6d 61 6e>
// console.log(bufferFromByteArray) // <Buffer 43 69 61 6f 20 68 75 6d 61 6e>
// console.log(bufferFromHex) // <Buffer 43 69 61 6f 20 68 75 6d 61 6e>
// console.log(bufferFromBase64) // <Buffer 43 69 61 6f 20 68 75 6d 61 6e>

// Raw buffer data can be "visualized" as a string, as hex or base64
// console.log(bufferFromString.toString('utf-8')) // Ciao human ('utf-8' is the default)
// console.log(bufferFromString.toString('hex')) // 4369616f2068756d616e
// console.log(bufferFromString.toString('base64')) // Q2lhbyBodW1hbg==

// You can get the size of a buffer (in bytes) by using `length`
// console.log(bufferFromString.length)
*/
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = '';
        this.name = name;
    }
    return Student;
}());
var st1 = new Student('Ali');
console.log(st1);
console.log(st1.name);
var products = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];
function groupBy(arr, by) {
    return arr.reduce(function (acc, cur) {
        acc[cur[by]] = acc[cur[by]] || [];
        acc[cur[by]].push(cur);
        return acc;
    }, []);
}
var prodObj = groupBy(products, "type");
console.log(prodObj);
console.log(prodObj.meat[0].quantity);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("The animal ".concat(this.name, " is making sound."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("The dog ".concat(this.name, " is barking."));
    };
    return Dog;
}(Animal));
var dog = new Dog('Buddy');
dog.makeSound();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.draw = function () {
        console.log("Drawing a circle.");
    };
    return Circle;
}());
var circle = new Circle(5);
console.log(circle.area());
circle.draw();
var Documents = /** @class */ (function () {
    function Documents() {
    }
    Documents.prototype.print = function () {
        console.log("Printing document...");
    };
    return Documents;
}());
var documents = new Documents();
documents.print();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.introduce = function () {
        console.log("Hi, my name is ".concat(this.name));
    };
    return Person;
}());
var person = new Person("John", 25, "123 Main St");
person.introduce();
console.log(person.name);
// console.log(person.age);
// console.log(person.address);
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () { return this.value; };
    return Box;
}());
var numberBox = new Box(42);
console.log(numberBox.getValue());
var stringBox = new Box("Hello");
console.log(stringBox.getValue());

let items: any[] = [
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
]

let searchKey: string = 'A';

let searchArr: Object[] = []

items.forEach(item => {
    let seachValue: string = item.name

    //console.log(seachValue);
    let val = seachValue.toLowerCase()
    searchArr.push({ value: val, id: item.value })

})

console.log('sonuc arr');
console.log(searchArr);

let filterArr: Object[] = []

items.forEach(element => {
    //console.log(typeof(element['value']));
    let val: string = element["name"]
    let valArr = val.split('')
    console.log(typeof (valArr));

    if (valArr.indexOf(searchKey.toLowerCase())) {
        filterArr.push(valArr)
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

class Student {
    name: String = ''
    constructor(name: String) {
        this.name = name
    }
}

let st1 = new Student('Ali')

console.log(st1);
console.log(st1.name);

let products = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
]

function groupBy(arr: any, by: any) {
    return arr.reduce((acc: any, cur: any) => {
        acc[cur[by]] = acc[cur[by]] || [];
        acc[cur[by]].push(cur);
        return acc;
    }, [])
}

let prodObj = groupBy(products, "type")
console.log(prodObj);
console.log(prodObj.meat[0].quantity);

class Animal {
    name: String;
    constructor(name: String) {
        this.name = name;
    }

    makeSound(): void {

        console.log(`The animal ${this.name} is making sound.`);

    }
}

class Dog extends Animal {

    makeSound(): void {
        console.log(`The dog ${this.name} is barking.`);

    }
}

const dog = new Dog('Buddy');
dog.makeSound();

interface Shape {
    area(): number;
    draw(): void;
}

class Circle implements Shape {

    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    draw(): void {
        console.log("Drawing a circle.");
    }
}

const circle = new Circle(5);
console.log(circle.area());
circle.draw();

interface Printable {
    print(): void;
}

class Documents implements Printable {

    print(): void {
        console.log("Printing document...");
    }

}

const documents = new Documents();
documents.print();

class Person {
    public name: string;
    private age: number;
    protected address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;

    }

    introduce(): void {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const person = new Person("John", 25, "123 Main St");
person.introduce();
console.log(person.name);
// console.log(person.age);
// console.log(person.address);

class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }

    getValue(): T { return this.value; }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue());
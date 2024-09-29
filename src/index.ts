let id: number = 5;
let company: string = 'comp';
let isPublished: boolean = true;
let x: any = 'Hello';
x = 12;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

let person: [number, string, boolean] = [1, 'bard', true];

let employee: [number, string][];

employee = [
    [1, "brad"],
    [1, 'john']
];

let pid: string | number;

pid = 22;

enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up);

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user: UserInterface = {
    id: 1,
    name: 'john',
}

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message)
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
    readonly id: number,
    name: string,

    register(): string
}

class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const brad = new Person(1, "brad");
const brad1 = new Person(2, "brad2");

console.log(brad, brad1);
console.log(brad.register());

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', 'Developer');

console.log(emp.register());

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad', 'John', 'Jill']);

numArray.push(1);

console.log(strArray);
console.log(numArray);
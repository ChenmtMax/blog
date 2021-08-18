var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let say = "hello";
console.log(say);
function add(a, b) {
    return a + b;
}
let num = add(3, 4);
let name = "kevin";
let phone = "13344445555";
function isOdd(n) {
    return n % 2 === 0;
}
let nums = [2, 3, 4, 5, 6];
let nums1 = [1, 2, 3, 4];
let u;
u = {
    name: "asd",
    age: 324
};
function printValues(obj) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}
printValues({
    name: 'dasd',
    age: 32
});
let name1;
if (typeof name1 === "string") {
    name1 = name1[0].toUpperCase() + name1.substr(1);
}
function printMenu() {
    console.log('1. 登录');
    console.log('2. 注册');
}
function throwError(msg) {
    throw new Error(msg);
    console.log("adadsda");
}
function alwaysDoSomething() {
    while (true) {
    }
}
let a1;
a1 = "A";
let gender;
gender = "女";
let arr;
let user;
user = {
    age: 1,
    name: "a"
};
let tu;
tu = ["3", 4];
let data = "aaaa";
let numb = data;
let u1;
u1 = {
    name: "ssss",
    gender: "女",
    age: 18
};
function getUsers(g) {
    return [];
}
getUsers("女");
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("a 和 b 必须是相同的错误");
}
const result = combine(3, 3);
function sum(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
sum(3, 4);
sum(3, 4, 5);
function sum1(a, b, c = 0) {
    return a + b + c;
}
sum1(1, 2);
sum1(1, 2, 3);
let gender1;
gender1 = "女";
gender1 = "男";
function searchUsers(g) {
}
var Gender2;
(function (Gender2) {
    Gender2["Male"] = "\u7537";
    Gender2["Female"] = "\u5973";
})(Gender2 || (Gender2 = {}));
let gender2;
gender2 = Gender2.Male;
gender2 = Gender2.Female;
function printGenders() {
    const vals = Object.values(Gender2);
    vals.forEach(v => console.log(v));
}
printGenders();
var Level;
(function (Level) {
    Level[Level["level1"] = 1] = "level1";
    Level[Level["level2"] = 2] = "level2";
    Level[Level["level3"] = 3] = "level3";
})(Level || (Level = {}));
let l = Level.level1;
l = Level.level2;
console.log(l);
function getUsers1(lev) {
}
getUsers1(Level.level1);
var Permission;
(function (Permission) {
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["Create"] = 4] = "Create";
    Permission[Permission["Delete"] = 8] = "Delete";
})(Permission || (Permission = {}));
let p = Permission.Read | Permission.Write;
function hasPermission(target, per) {
    return (target & per) === per;
}
const isHas = hasPermission(p, Permission.Read);
console.log(isHas);
p = p ^ Permission.Write;
const myModule_1 = __importStar(require("./myModule"));
console.log(myModule_1.nameM);
console.log(myModule_1.sumM(3, 4));
myModule_1.default();
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFileSync("./");
let u2 = {
    name: "dasd",
    age: 33,
    sayHello() {
        console.log("interface ---");
    }
};
function sum2(numbers, callBack) {
    let s = 0;
    numbers.forEach(n => {
        if (callBack(n)) {
            s += n;
        }
    });
    return s;
}
const result2 = sum2([3, 4, 5, 6, 7, 11], n => n % 2 !== 0);
console.log(result2);
let u3 = {
    T2: 33,
    T1: "dadasdsa",
    T3: true
};
let u4 = {
    id: '123',
    name: 'wqe',
    age: 33,
    arr: ['adadass', 'adsdadsa']
};
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎",
    swim() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
};
let duck = person;
let duck1 = {
    sound: "嘎嘎嘎",
    swim() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
};
function sum3(numbers, callBack) {
    let s = 0;
    numbers.forEach((n, i) => {
        if (callBack(n, i)) {
            s += n;
        }
    });
    return s;
}
const result3 = sum3([3, 4, 5, 6, 7, 11], (n, i) => i % 2 !== 0);
console.log(result3);
class UserC {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.gender = "女";
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
    }
    publish(title) {
        if (this.curNumber < this.publishNumber) {
            console.log("发布一篇文章：" + title);
            this.curNumber++;
        }
        else {
            console.log("你今日发布的文章数量已达到上限！");
        }
    }
}
const uc = new UserC("aa", 2);
uc.gender = "男";
uc.publish("文章1");
uc.publish("文章2");
uc.publish("文章3");
uc.publish("文章4");
class UserC1 {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this._publishNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        }
        else if (value >= 200) {
            this._age = 200;
        }
        else {
            this._age = value;
        }
    }
    get age() {
        return Math.floor(this._age);
    }
    publish(title) {
        if (this._curNumber < this._publishNumber) {
            console.log("发布一篇文章：" + title);
            this._curNumber++;
        }
        else {
            console.log("你今日发布的文章数量已达到上限！");
        }
    }
}
const uc1 = new UserC1("aa", 2);
uc1.age = 2.5;
console.log(uc1.age);

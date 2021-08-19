let say: string = "hello"; // 表示变量是字符串类型

console.log(say)

function add(a: number, b: number): number {
    return a + b;
}

let num = add(3, 4)
let name = "kevin";
let phone = "13344445555";

// 基本类型
// 实例：判断是不是奇数
function isOdd(n: number): boolean {
    return n % 2 === 0;
}

// 约束为 一个数字数组类型（每一项都是数字）
let nums: number[] = [2, 3, 4, 5, 6];
// : number[] 实际上是一个语法糖，真实完整写法是 :Array<number>
// 建议使用 :number[] 写法，因为另一种写法可能会跟 react 中的<...>组件写法造成冲突。
let nums1: Array<number> = [1, 2, 3, 4];

// 约束为一个对象，不是很常见，但是有时候会用到。
let u: object;
u = {
    name: "asd",
    age: 324
}

function printValues(obj: object) {
    const vals = Object.values(obj)
    vals.forEach(v => console.log(v))
}
printValues({
    name: 'dasd',
    age: 32
})

// null 和 undefined
// 比如 将 null 和 undefined 赋值为其他类型，都是可以的，不会报错。
// 但是加了配置之后，它们就只能赋值给自身，赋值给其他就会报错。
// let n: string = null || undefined
// let n1: number = null || undefined

// 其他类型
// 联合类型
let name1: string | undefined;
if (typeof name1 === "string") {
    // 类型保护，此时会智能识别 name1 就是个字符串类型，此时操作 name1 会智能提供对应字符串操作方法等。
    name1 = name1[0].toUpperCase() + name1.substr(1)
}

// void类型
function printMenu() {
    console.log('1. 登录');
    console.log('2. 注册');
}

// never类型
// 调用这个函数，肯定结束不了，它要抛出错误的。
function throwError(msg: string): never {
    throw new Error(msg);
    console.log("adadsda"); // 因为这个函数永远不会结束，所以这个语句一直不会被打印。
}

function alwaysDoSomething(): never {
    while (true) {
        // ... 这个循环永远不会结束
    }
}

// 字面量约束
let a1: "A"; // 表示这个变量从此以后只能有一种取值，就是字符串A。
a1 = "A";

let gender: "男" | "女";
gender = "女";

let arr: []; // arr 永远只能取值为一个空数组。
// 对象属性类型约束中，属性间不用使用“,”符号隔开。
let user: { // 表示该对象里必须要有个 字符串类型的name属性，和 数字类型的age属性。
    name: string
    age: number
}
user = {
    age: 1,
    name: "a"
}

// 元祖类型
let tu: [string, number];
tu = ["3", 4]; // 数组必须是两项，第一项必须是字符串，第二项必须是数字。

// any 类型
let data: any = "aaaa";
let numb: number = data; // any类型可以赋值给任意类型。


// 类型别名
// 对已知的一些类型定义名称。（防止重复书写一些类型代码）
// 语法：type 类型别名 = 约束
type Gender = "男" | "女";
type User = {
    name: string
    age: number
    gender: Gender
}

let u1: User; // u1 必须是一个 User约束的类型对象
u1 = {
    name: "ssss",
    gender: "女",
    age: 18
}
function getUsers(g: Gender): User[] {
    return [];
}
getUsers("女");


// 函数的相关约束
// 单独的只写函数声明，不写函数体。
// 明确的告诉ts，combine 函数只有这两个约束情况。
// 使用同一个名称，来约束函数调用的几种情况，就是函数重载。
/**
 * 得到 a* b的结果
 * @param a 
 * @param b 
 */
function combine(a: number, b: number): number; // 两个数字返回数字
/**
 * 得到 a 和 b拼接的结果
 * @param a 
 * @param b 
 */
function combine(a: string, b: string): string; // 两个字符串返回字符串
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a * b
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("a 和 b 必须是相同的错误");
}
const result = combine(3, 3);

// 可选参数（ts 是很严格的，当你没约定是可选参数时，声明了多少参数就必须传多少个）
function sum(a: number, b: number, c?: number) { // 表示 参数c 是可选可不选的
    if (c) {
        return a + b + c;
    } else {
        return a + b;
    }
}
sum(3, 4);
sum(3, 4, 5);
// 默认参数一定是可选参数。
function sum1(a: number, b: number, c: number = 0) {
    return a + b + c;
}
sum1(1, 2);
sum1(1, 2, 3);


// 扩展类型-枚举
// 1、字面量的问题
// 问题一：类型约束位置会产生重复代码，使用类型别名可解决。
type Gender1 = "男" | "女";
// 问题二：
// 当Gender1 类型别名（逻辑含义）需要被修改为 male female 等，
// 与真实的值（还是男 和 女）产生了混淆时，会导致修改真实的值（gender1的赋值）时需要做大量修改。
let gender1: Gender1;

gender1 = "女"
gender1 = "男"
function searchUsers(g: Gender1) {
}
// 问题三：如果需要动态读取性别有哪些取值，再把它显示到页面上，这个时候办不到。
// 因为在编译结果里面在运行的过程中已经丢失了这些信息，运行时运行的是 js，而不是 ts，ts 只参与编译过程。
// 注：编译过后只存在 js代码。

// 枚举
// 如果往后需要修改 真实的值（男，女为帅哥，美女）时，只需在 枚举中修改一处即可。
// 如果需要改逻辑名称，则选中如male右键选择“重命名符号”修改（或F2），即可将全部引用的地方都一次性修改。
enum Gender2 {
    Male = "男",
    Female = "女"
}
/** Gender2枚举被编译为： 
 * var Gender2;
 * (function (Gender2) {
 *      Gender2["Male"] = "\u7537";
 *      Gender2["Female"] = "\u5973";
 * })(Gender2 || (Gender2 = {}));
 */
let gender2: Gender2;
gender2 = Gender2.Male;
gender2 = Gender2.Female;

// console.log(gender2); // 女

function printGenders() {
    const vals = Object.values(Gender2);
    vals.forEach(v => console.log(v));
}

printGenders(); // 男 女

// 枚举的规则
// 枚举的字段值只能是字符串或数字。
// 数字枚举的值会自增。（如果第一个值未赋值，那么默认第一个为 0，后面第二个值自增为 1，以此类推）
enum Level {
    level1 = 1, // 如此处为赋值，将默认为 0，后续再属性值自增。
    level2, // 此处会自增为 2
    level3  // 此处会自增为 3
}
/** Level枚举被编译为： 
 * var Level;
 * (function (Level) {
 *      Level[Level["Level1"] = 0] = "level1";
 *      Level[Level["Level2"] = 1] = "level2";
 *      Level[Level["Level3"] = 2] = "level3";
 * })(Level || (Level = {}));
 * 相当于
 * {
 *      level1: 0,
 *      level2: 1,
 *      level3: 2,
 *      0: "level1",
 *      1: "level2",
 *      2: "level3",
 * }
 */
let l: Level = Level.level1;
l = Level.level2;
console.log(l); // 打印出了自增的 2

// 最佳实践
function getUsers1(lev: Level) {
}
getUsers1(Level.level1); // 根据逻辑名称传值


// 扩展知识：位枚举（枚举的位运算）
// 针对的数字枚举。
enum Permission { // 权限
    Read = 1, // 2^0  二进制（由0和1组成） 0001
    Write = 2, // 2^1                    0010
    Create = 4, // 2^2                   0100
    Delete = 8 // 2^3                    1000
}

// 3 的二进制是 0011 相当于 Read 和 Write 权限（1+2）

// 1、如何组合全选
// 使用或运算：把两个数字的二进制来进行比较（运算规则：有一位是 1 结果就是 1）
// 0001 或 0010 = 0011（相当于这个变量 p拥有了 Read和 Write权限）
let p: Permission = Permission.Read | Permission.Write;

// 2、如何判断是否拥有某个全选
// 0011 且 0001，一位一位进行运算，只要两个都为1时结果才为1，其他是0。
// 比如判断 p是否有可读权限 0001，判断末位和p的末位是否一样是1
function hasPermission(target: Permission, per: Permission) {
    // 0011 且 0010 = 0010，说明第三个位置上一定是1，即拥有 per 权限
    return (target & per) === per;
}
// 判断变量p 是否拥有可读权限
const isHas = hasPermission(p, Permission.Read)
console.log(isHas); // true

// 3、如何删除某个权限
// 0011 异或 0010 = 0001，两个位置相同取 0，不同取 1。
p = p ^ Permission.Write; // 删除可写权限（p只剩可读权限）。


// 模块化
// 在 TS 中使用模块化，导入时不要添加后缀名。
import sayHello, { sumM, nameM } from "./myModule";

console.log(nameM); // kevin
console.log(sumM(3, 4)); // 7

sayHello(); // 执行默认导入的函数。

// 当使用 nodejs 里的东西：
// import fs from "fs";
// fs.readFileSync("./");
// 解决方法：
// import { readFileSync } from "fs";
// 想一次性导入 fs 模块中的所有。
// import * as fs from "fs";
// fs.readFileSync("./");
// 当我还是想使用 import fs from "fs" es6方式导入呢？
// 可以使用配置解决。
import fs from "fs";
// fs.readFileSync("./");

// 配置 报错时不生成编译结果。 
// let a: string = 321

// 4、如何在TS中书写commonjs模块化代码
// const myModule4 = require("./myModule")
// 使用 exports = {} 方式的导出时，需使用以下方式导入：
// import myModule4 from "./myModule"
// 但还想获得类型检查推导，即：
import myModule4 = require("./myModule")
import { ArrayHelper } from "./ArrayHelper";
import { Dictionary } from "./dictionary";


// 扩展类型 - 接口
interface User2 {
    name: string
    age: number
    // 对函数的约束，书写方式一
    // sayHello: () => void // 表示它是一个函数，函数没有参数，函数返回类型是 void。
    // 书写方式二
    sayHello(): void
}
/*
类型别名中的使用：（在该相同场景中的使用时无差别的）
type User = {
    name: string
    age: number
    sayHello: () => void
}
*/
let u2: User2 = {
    name: "dasd",
    age: 33,
    sayHello() {
        console.log("interface ---")
    }
}

// 以后遇到这样的可以使用类型别名或者接口进行约束。
// function sum2(numbers: number[], callBack: (n: number) => boolean) {
//     ...
// }
// 方法一：使用类型别名约束
type Condition1 = (n: number) => boolean
// 也等于
// type Condition2 = { // 此时{}是定界符，表示里面是一个具体的约束内容，不表示一个对象。
//     (n: number): boolean
// }
// 方法二：使用接口约束
// 表示这个接口约束的就是一个函数，函数有一个参数 n，返回值为 boolean类型。
interface Condition {
    (n: number): boolean
}
function sum2(numbers: number[], callBack: Condition) {
    let s = 0;
    numbers.forEach(n => {
        // callBack 已经被约束了，所以一定是一个函数。
        if (callBack(n)) {
            s += n;
        }
    })
    return s;
}
const result2 = sum2([3, 4, 5, 6, 7, 11], n => n % 2 !== 0)
console.log(result2); // 26

// 接口可以继承
interface A {
    T1: string
}
interface B extends A {
    T2: number
}
interface C extends A, B { // 一个接口可以继承多个（可以有多继承）。
    // T1: number // 接口中不允许子接口重新去覆盖父接口中的成员。
    T3: boolean
}
/* 使用type 类型别名实现组合约束：
type A = {
    T1: string
}
type B = {
    T2: number
}
type C = {
    T1: number // 此处定义了 A 中T1的约束，会变成将T1约束为 number和 string合并的双类型。
    T3: boolean
} & A & B // 使用 & 交叉类型实现组合效果
 */
// 接口C里面要有接口A，B里的所有成员，所以当约束对象u3时，u3必须有3个必须成员。
let u3: C = {
    T2: 33,
    T1: "dadasdsa",
    T3: true
}


// readyonly
// interface User3 {
//     readonly id: string // 添加 readonly 修饰符，受约束的对象初始赋值后将无法对该属性进行修改。
//     name: string
//     age: number
// }
// 也可以使用类型别名约束
type User3 = {
    readonly id: string
    name: string
    age: number
    // readonly 修饰成员的时候，因为成员没有办法使用 const，所以如果不该成员可以被修改，可如下写法限制：
    readonly arr: readonly string[]
}
let u4: User3 = {
    id: '123',
    name: 'wqe',
    age: 33,
    arr: ['adadass', 'adsdadsa']
}
// u4.arr = ['dasdsa', 'dasdas']; // 不能重新赋值
// u4.arr.push('dadsad'); // 如果只进行了成员首部的readonly限制，不能重新赋值但可这么修改。

// readonly可以修饰数组类型，限制数组是只读数组。
const arr1: readonly number[] = [1, 2, 3, 4]; // 表示该数组是个只读的数组。
// arr1 = [4, 5, 6, 7]; // 无法对数组进行修改。
// arr1[0] = 3; // 连数组的成员都改变不了。
const arr2: ReadonlyArray<number> = [3, 4, 5, 6];


// 类型兼容性
interface Duck {
    sound: '嘎嘎嘎'
    swim(): void
}
// 只需要判断该对象的结构满足要求就行，不需要严格的判定对象(需具备所有必须的成员对象)。
let person = {
    name: "伪装成鸭子的人",
    age: 11,
    // 使用类型断言，关键字为 as。
    sound: "嘎嘎嘎" as "嘎嘎嘎", // 此处的赋值结果变成 string，但原本应该为是个字面量类型的约束。
    swim() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
}

// 类型兼容的好处：当用于更严格的类型检查时（需要更多的成员约束），就会出现问题了。
// 假设有个函数，用于得到服务器的某个接口的返回结果，是一个用户对象。
// let u5 = ''
// interface ResponseUser { // 此处我只想约束这么多成员类型，其他从别处获取。
//     loginId: string
//     nickName: string
//     gender: "男" | "女"
// }

// let user: ResponseUser = u

let duck: Duck = person; // person 满足 duck 的特征，可以完成赋值。person是从其他地方来的只要有满足条件的即可。
// 使用时只用使用 Duck 所约束的成员。

// 使用对象字面量的时候，会进行更严格的判断。
// 由于此处限制了只能是Duck，所以字面量方式当然要完全符合。
let duck1: Duck = {
    sound: "嘎嘎嘎" as "嘎嘎嘎", // 此处的赋值结果变成 string，但原本应该为是个字面量类型的约束。
    swim() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
}

// interface User4 {
//     name?: string
//     age: number
// }
// let obj = {
//     name: "sdaa",
//     age: 33
// }
// let u5: User4 = obj

// 函数类型中的类型断言（通常出现在回调中）
// 表示这个接口约束的就是一个函数，函数有一个参数 n，返回值为 boolean类型。
interface Condition2 {
    (n: number, i: number): boolean
}
function sum3(numbers: number[], callBack: Condition2) {
    let s = 0;
    numbers.forEach((n, i) => {
        // callBack 已经被约束了，所以一定是一个函数。
        if (callBack(n, i)) {
            s += n;
        }
    })
    return s;
}
// 当我不需要第二个参数的时候，我可以不用传。
// const result3 = sum3([3, 4, 5, 6, 7, 11], n => n % 2 !== 0)
// 当我需要第二个参数限制的时候，我就传。
// 参数：传递给目标函数的参数可以少，但不可以多。
// 返回值：要求返回必须返回。
const result3 = sum3([3, 4, 5, 6, 7, 11], (n, i) => i % 2 !== 0)
console.log(result3); // 26


// 七、TS中的类
class UserC {
    // 编译结果中并不存在。
    // 在后续使用该类中只能使用此两个属性。
    readonly id: number // 必选参数，只读不能重新改变。
    // name: string
    // age: number
    gender: "男" | "女" = "女" // 默认值
    pid?: string // 可选参数

    private publishNumber: number = 3; // 每天一共发布多少篇文章。
    private curNumber: number = 0; // 当前可发布的文章数。

    /** ts 中动态创建属性不能再在 constructor中写了，需要先在它之上约束。 */
    /** 初始化属性简写：
     * 此处的参数 public name: string 是个语法糖，相当于：
     * 在上面中声明一个 name: string 约束，同时在传参时 name:string 约束，再在构造函数中赋值 this.name = name。
     * public 也可为其他修饰符，相当于在上面声明属性约束时属性前所加的修饰符。
     * 此语法糖中，访问修饰符是必须的，不加的话它不清楚这里是属性还是普通参数。
    */
    constructor(public name: string, public age: number) {
        this.id = Math.random();
        // this.name = name;
        // this.age = age;
    }

    publish(title: string) {
        if (this.curNumber < this.publishNumber) {
            console.log("发布一篇文章：" + title);
            this.curNumber++;
        } else {
            console.log("你今日发布的文章数量已达到上限！");
        }
    }
}
const uc = new UserC("aa", 2);
uc.gender = "男"; // 通过属性获取，改变gender属性的默认值。
// uc.pid = "41341341413434";
// u.pid = "222222"; // 不能添加额外属性，且只能使用自身的属性。
// 该curNumber私有变量应用场景：如该变量不能外部随意更改，限制普通用户可以发布3篇，而会员可以发布多篇。
uc.publish("文章1");
uc.publish("文章2");
uc.publish("文章3");
uc.publish("文章4");

// 访问器（跟c#中一样的方法）
// 年龄的取值约束为 number，如何防止取值为正整数？
class UserC1 {
    // 编译结果中并不存在。
    readonly id: number // 必选参数，只读不能重新改变。

    private _publishNumber: number = 3; // 每天一共发布多少篇文章。
    private _curNumber: number = 0; // 当前可发布的文章数。

    // 先把 _age 设置为私有属性
    constructor(public name: string, private _age: number) {
        this.id = Math.random();
    }

    // java中
    // setAge(value: number) {
    //     if (value < 0) {
    //         this._age = 0;
    //     } else if (value >= 200) {
    //         this._age = 200;
    //     } else {
    //         this._age = value;
    //     }
    // }
    // getAge() {
    //     return Math.floor(this._age); // 向下取整
    // }
    // c#中
    set age(value: number) {
        if (value < 0) {
            this._age = 0;
        } else if (value >= 200) {
            this._age = 200;
        } else {
            this._age = value;
        }
    }
    get age() {
        return Math.floor(this._age); // 向下取整
    }

    publish(title: string) {
        if (this._curNumber < this._publishNumber) {
            console.log("发布一篇文章：" + title);
            this._curNumber++;
        } else {
            console.log("你今日发布的文章数量已达到上限！");
        }
    }
}
const uc1 = new UserC1("aa", 2);
// java
// uc1.setAge(1.5);
// console.log(uc1.getAge()); // 1
// c#
uc1.age = 2.5;
console.log(uc1.age); // 2


// 八、泛型
// 8-1、在函数中使用泛型。
// 实现：从数组中取出前 n 项。
// 此时不知道该 arr属于哪种数组类型，可能是字符串数组也可能是数字数组，它会直接决定返回值类型。
// 当后期操作newArr 数组的时候，发现类型还是 any[]，它并不知道是什么类型的数组。
function take(arr: any[], n: number): any[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: any[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
const newArr = take([3, 4, 5, 6, 7, 8], 2);
console.log(newArr); // 返回的一样是 any[]。

// T相当于是个类型的变量。所以在写函数的时候不知道什么类型随便用一个东西来代替。
// 表示函数肯定有一个依附，依附于一个类型，这个类型依附于这个函数，而这个类型只有在调用函数时才确定，定义时不清楚。
function takeT<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// 调用函数，并告诉函数操作的类型是一个字符串类型。
// 相当于把字符串传给了T。
// const resultT = takeT([3, 4, 5, 6, 7, 8], 2); // 此时会根据传递参数的类型推导结果为 number[]。
const resultT = takeT<number>([3, 4, 5, 6, 7, 8], 2);
console.log(resultT); // 返回的是一个 number[]。

// 8-2、接口，类，类型别名中使用泛型。
// 回调函数：判断数组中的某一项是否满足条件。
// 类型别名
type callbackT<T> = (n: T, i: number) => boolean;
// 接口
interface callbackTI<T> {
    (n: T, i: number): boolean;
}
// 不知道参数是什么类型并且它决定返回值的类型的时候，可以写泛型。
function filterT<T>(arr: T[], callback: callbackT<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        // n 为数组的每一项
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr;
}
const arrT = [1, 2, 3, 4, 5, 6];
console.log(filterT(arrT, n => n % 2 !== 0));
// 在类中使用泛型，看ArrayHelper.ts。
// const helper = new ArrayHelper<number>([2, 3, 4, 5, 51, 33, 2, 42]);

// 8-3、泛型约束
/**
 * 将某个对象（可以有多个其他属性）的 name 属性的每个单词的首字母大写，然后将该对象返回。
 * 一开始的T，存在多种可能性，未限制之前可能是字符串等，那么 obj.name是获取不到的。
 */
// 约束T至少得是这种拥有 name属性 的接口类型。
interface hasNameProperty {
    name: string
}
// 使用 extends 限定 T类型应该继承于hasNameProperty接口类型。
// 约束 T 到时候传的类型只能满足于 hasNameProperty这个接口的类型。
// T extends B，表示该T类型至少得拥有B类型里的成员。
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    // obj.name // 未约束T时，报错提示获取不到。
    obj.name = obj.name
        .split(" ")
        .map(s => s[0].toUpperCase() + s.substr(1))
        .join(" "); // 最后再用 .join() 将字符串用空格连接起来。
    return obj;
}
const o = {
    name: "kevin yuan",
    age: 22,
    gender: "男"
}
const newO = nameToUpperCase(o);
console.log(newO.name); // Kevin Yuan

// 8-4、多泛型
// 将两个数组进行混合，[1, 2, 3] 和 ["a", "b", "c"] 混合为 [1, "a", 2, "b", 3, "c"]。
// 该函数并不要求两个数组的类型是一致的，而泛型中也是可以使用多个泛型的。
// 返回结果又需要包含 两个数组的类型。
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    if (arr1.length !== arr2.length) {
        throw new Error("两个数组长度不等");
    }
    let result: (T | K)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }

    return result;
}
const resultTM = mixinArray([1, 2, 3], ["a", "b", "c"]);
// resultTM.forEach(r => console.log(r));

// blog 当前所处分支为 dictionary，记得提交
// 8-5、练习：自定义字典类
const dic = new Dictionary<string, number>();
dic.set("a", 1);
dic.set("b", 2);
dic.set("a", 11);
dic.set("c", 33);
// console.log(dic.has("c"));
dic.forEach((k, v) => {
    console.log(`${k}:${v}`);
})
console.log("当前键值对数量：" + dic.size);
console.log("删除键 b");
dic.delete("b");
dic.forEach((k, v) => {
    console.log(`${k}:${v}`);
})
console.log("当前键值对数量：" + dic.size);
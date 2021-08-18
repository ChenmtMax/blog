/**
 * 模块化
 */
// es6的方式
// 提倡这种方式，可以享受智能提示。
export const nameM = "kevin";

export function sumM(a: number, b: number) {
    return a + b;
}

export default function () {
    console.log("hello my module!");
}

// 如果使用默认导出，它是没有办法帮你推导出来的，就没有智能提示
// 因为导入时可以重新命名，它也不知道你要干什么。
// import myModule from './myModule'
// console.log(myModule.sum(3, 4));
// console.log(myModule.name);
// 默认导出
// export default {
//     name: "kevin",
//     sum(a: number, b: number) {
//         return a + b
//     }
// }

// 如何在TS中书写commonjs模块化代码
// module.exports = {
// 想获得类型检查，此处必须这么书写commonjs的导出。
exports = {
    name: "kevin",
    sum(a: number, b: number) {
        return a + b
    }
}
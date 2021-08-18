/* 
会先有一个流程检测环境的顺序就是： Promise的then -> MutationObserver的回调函数 -> setImmediate -> setTimeout 是否存在，找到存在的就使用它，以此来确定回调函数队列是以哪个 api 来异步执行。
在 nextTick 函数接受到一个 callback 函数的时候，先不去调用它，而是把它 push 到一个全局的 queue 队列中，等待下一个任务队列的时候再一次性的把这个 queue 里的函数以此执行。
这个队列可能是 microTask 队列，也可能是 macroTask 队列，前两个 api 属于微任务队列，后两个 api属于宏任务队列。
*/
// 简化实现一个异步合并任务队列：

let pedding = false // 初始化状态
// 存放回调任务数组
let callbacks = []
function nextTickTest(cb) {
    callbacks.push(cb)
    if (!pendding) {
        pedding = true
        // 利用 Promise 的 then 方法，在下一个微任务中把函数全部执行。
        // 在微任务开始之前，依然可以往 callbacks 里放入新的回调函数。
        Promise.resolve().then(flushCallbacks)
    }
}
function flushCallbacks() {
    pedding = false // 重置任务状态
    // 循环执行队列
    for (let i = 0; i < callbacks.length; i++) {
        callbacks[i]()
    }
    // 清空队列
    callbacks.length = 0
}
// 第一次调用 then 方法已经被调用了 但是 flushCallbacks 还没执行。
nextTickTest(() => console.log(1))
// callbacks 里push这个函数。
nextTickTest(() => console.log(2))
// callbacks 里push这个函数。
nextTickTest(() => console.log(3))

// 同步函数优先执行
console.log(4)

// 此时调用栈清空了，浏览器开始检查微任务队列，发现了 flushCallbacks 方法，执行。
// 此时 callbacks 里的 3 个函数被依次执行。
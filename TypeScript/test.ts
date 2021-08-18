// 表示标注一下这个函数的返回值要么是个字符串要么是个 number类型
function getUserName(): string | number {
    if (Math.random() < 0.5) {
        return "yuan jin"
    }
    return 404
}

let myName = getUserName()
if (typeof myName === 'string') {
    myName = myName.split(" ")
        .filter(it => it) // 防止还有其他的空格
        .map(it => it[0].toUpperCase() + it.substr(1))
        .join(" ")
    console.log(myName)
}
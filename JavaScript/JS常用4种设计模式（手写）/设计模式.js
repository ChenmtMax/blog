/**
 * 单例模式：懒汉式和饿汉式
 * 懒汉式：类加载比较快，但获取对象慢。
 * 饿汉式：类加载时就完成了初始化，所以类加载比较慢，但获取对象比较快。
 */
var single = (function () {
    let instance = null

    function init() {
        return {
            publicMethod: function () {
                console.log('public')
            },
            publicProperty: 'test'
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init() // 不存在就赋值再 return
            }
            return instance // 存在就直接 return
        }
    }
})()

// 实现一个私有变量只能有公有函数修改的函数：
let privateSingle = function () {
    let privateName = "xiaoxiao"
    function setName(name) {
        privateName = name
    }
    function getName() {
        return privateName
    }

    return {
        publicMethod: function () {

        }
    }
}
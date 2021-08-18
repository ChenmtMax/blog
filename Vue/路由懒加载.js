/**
 * 路由懒加载的含义：
 *      把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件。
 */
// 实现： 结合 Vue 的异步组件和 Webpack 的代码分割功能。
// 可以将异步组件定义为返回一个 Promise 的工厂函数 \ （该函数返回的 Promise 应该 resolve）
const Foo = () => Promise.resolve({ /* 组件定义对象 */ })

// 2、 在 webpack 2 中，我们可以使用动态 import 语法来定义 代码分块点\(split point\)
import('./data.js') // 返回 Promise

// 结合这两者，就是 如何定义一个能够被 webpack 自动代码分割的异步组件了
const Foo = () => import('./data.js')
const router = new VueRouter({
    routes: [{
        path: '/data',
        component: Foo
    }]
})

// 使用命名 chunk，和 webpack 中的魔法注释就可以把某个路由下的所有组件都打包在同个异步块（chunk）中。
chunkconst Foo = () => import(/* webpackChunkName: 'group-foo */ './data.js')
# 前端知识体系大纲

## JavaScript 专题

* JS 的数据类型

* 执行上下文/作用域/作用域链/原型链

* 闭包

* JS 的回收机制

* 事件流/事件委托/事件冒泡
https://zhuanlan.zhihu.com/p/53592256 事件流

* this 指向（40道面试专题）
https://juejin.cn/post/6844904083707396109#heading-51

    * 总结（有道链接）

* 前端缓存
https://mp.weixin.qq.com/s/5EXT03KeOBtlZtKhlV7pjg

* setTimeout / setInterval / requestAnimationFrame


* 柯理化及应用详解
https://www.jianshu.com/p/2975c25e4d71

* JS 继承（48道题彻底弄懂JS继承）含 ES6 class 继承解析
https://juejin.cn/post/6844904098941108232

* JS 的设计模式（书）- 常用 4 种必知
    * 单例模式
    * 发布订阅模式
    * 观察者模式
    * 策略模式 （项目中的表单验证，该模式结合柯理化使用过）

### JS手写实现系列
* 手写Promise + Generator + async/wait
https://mp.weixin.qq.com/s/wBnev5LhSL7qIGFjg8ZvrQ

* new/bind/call/apply/深浅拷贝/节流防抖/node的eventEmitter事件管理机制

* 22 道高频手写面试题 及 答案
https://juejin.cn/post/6844903911686406158

* 面试会遇到的手写 Polyfill 都在这里了
https://mp.weixin.qq.com/s/xxsJ3xduNscWSvMkZIi-iw


### ES6 相关面试题
* Promise
    * 45 道 Promise 面试专题
    https://juejin.cn/post/6844904077537574919#heading-51

    * 15道ES6 Promise实战练习题，助你快速理解Promise
    https://mp.weixin.qq.com/s/sjSBHTxJFxKApFXfa5Xmqg

* 基础运用/操作符（let、const、var的区别）

* proxy/reflex

## 延伸面试题
* ES Module 和 CommonJS 的区别
https://mp.weixin.qq.com/s/RdqPP8ZFNGCX9CqxGksAsA

* Event Loop 相关问题
     * 彻底吃透 JavaScript 执行机制
    https://juejin.cn/post/6844903955286196237

    * 浏览器 和Node 事件循环的区别
    https://juejin.cn/post/6844903761949753352 （最完整清楚）
    
    * 宏任务、微任务和 DOM 渲染之间的关系
        微任务在DOM渲染之前，宏任务在DOM渲染之后。

* ES5/ES6 的继承除了写法以外还有什么区别？
    - ES5和 ES6 子类 this 生成顺序不同，ES5 的继承先生成子类实例，再调用父类的构造函数修饰子类实例，ES6的继承先生成父类实例，再调用子类的构造函数修饰父类实例。
    - class 声明会提升，但不会初始化赋值，Foo 进入暂时性死区，类似于 let、const 声明变量。
    - class 声明内部会启用严格模式。
    - class 的所有方法都没有 原型对象 prototype，所以也没有 constructor，不能使用 new 来调用。
    - 必须使用 new 调用 class
    - class 内部无法重写类名。
    - 关于 类 ：Class 的 所有方法（包括静态方法和实例方法）都是不可枚举的，但 ES5的类可以。（const fooKeys = Object.keys(Foo) // []）

* 高性能 JavaScript 引擎 V8 - 垃圾回收
https://mp.weixin.qq.com/s/ugtOQKyOXvsPlIIqvJENuA

* requestAnimationFrame 深入了解

* 浏览器渲染原理（HTML - CSS - render - 计算布局 - 渲染）

* TCP、HTTP、Socket连接池
https://mp.weixin.qq.com/s/-vRhX03y5cttVZ099prwqw

* 深入浅出本地缓存（Cookie、sessionStorage、localStorage）
https://mp.weixin.qq.com/s/UU_LfPMexCsZP-YrPoEyBw

* Babel / AST

* axios 为什么能防御CSRF（跨站请求伪造）
> 原理：设置 csrfCookieName: 'CSRF-TOKEN'，用作csrf token的值的cookie名称。
> 会让你的每一个请求都带一个从 cookie 中拿到的 key，根据浏览器的同源策略，假冒的网站是拿不到 cookie中的 key的，后台可以因此辨别这个请求是否在用户假冒网站上的误导输入，从而采取正确的策略。


* memory cache 和 disk cache 分别是指什么缓存？为什么有的是前者有的是后者，怎么产生的？
https://juejin.cn/post/6844904053223358471#heading-12

* V8 中的回收机制
https://mp.weixin.qq.com/s/EGLnMO0b2-UiZ3K7qa8XRw

新生代和老生代
新生代使用 Scavenge 进行管理，主要实现是使用 Cheney 算法，将内存平分为两块，使用空间叫 From，空闲空间叫 To。
新对象都先分配到 From空间中，在空间快要占满时将存活对象复制到 To空间中，然后清空 From空间，再调换From和To空间，继续进行内存分配。
当满足二次存活这个条件时，对象会从新生代晋升到老生代中。

老生代主要采用 Mark-Sweep 和 Mark-Compact 算法，一个是标记清除，一个是标记整理。
两者不同的地方是：Mark-Sweep在垃圾回收后会产生碎片内存，而 Mark-Compact在清除前会进行移步整理，将存活对象向一侧移动，随后清空边界的另一侧内存，这样空间的内存就是连续的了。
在 V8 中，老生代是 Mark-Sweep 和 Mark-Compact两者共同进行管理。

* 前端鉴权（cookie，session，token）
https://mp.weixin.qq.com/s/ZIbzzTkV-pYVfNnWRwzBFQ（前端应该学习的 Token 登录认证知识）


## NodeJS
* NodeJS 常见面试题
https://mp.weixin.qq.com/s/S7D00JrsAr0zqFef7-vRvw

* Express/koa

* 原理

* 简易服务器

* Linux 简单命令

* mysql/MongoDB/Redis

## 数据结构与算法
### 排序
* 排序的种类及实现

### 其他
* 队列和栈

* 二分查询法/二叉树

* topK算法



## 网络与安全

### HTTP
* HTTP1/2/3


* http 缓存策略

* HTTPS 握手/SSL/TLS加密

* TCP/UDP区别
    * TCP优缺点
    * TCP握手/挥手

* 流量控制

* 拥塞机制

* DNS 为什么使用 UDP 协议？ 为什么 DNS 不止会使用 UDP 传输数据？
> 由于查询返回的响应比较大，所以会使用 TCP 协议来传输数据包。

* HTTP 之 cookie
https://juejin.cn/post/6861605642256252936

### 安全
https://mp.weixin.qq.com/s/rU32rVM6Q-ele01ZB3RFzg
* CSRF跨站请求伪造攻击

* XSS跨站请求伪造攻击

* CSP 攻击

## 浏览器
* 浏览器输入 URL 到渲染的整个过程
* 首屏时间计算
* 白屏问题分析
* Performance 面板

### 跨域问题
https://mp.weixin.qq.com/s/Nk8YPYQDUJOKgQ9Qa7byag
* CORS网站跨域资源共享/nodejs 中间件

* 同源策略

* Cookie/SessionStorage/LocalStorage

* Nginx/正向代理

* PostMessage
* WebSocket 协议跨域
* Vue 框架中 Webpack.proxy 跨域

## Vue
### Vue2.x
* 响应式原理
> 当创建 vue 实例时，vue 会遍历 data 选项的属性，利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集，setter 用来派发更新），并且在内部追踪依赖，在属性被访问和修改时通知变化。每一个组件都会有相应的 watcher实例，会在组件渲染的过程中记录依赖的所有数据属性。依赖被改动时，setter方法会通知依赖和这个 data 的 watcher 实例重新计算（派发更新），从而使它关联的组件重新渲染。

> watcher 实例： watcher 在执行前会先将自身赋值给 全局变量Dep.target，等待响应属性去收集它。等组件执行render 函数时访问了响应式属性，响应式属性就会精确的收集到当前全局存在的 Dep
.target 作为自身依赖。  在响应式属性发生更新时通知 watcher 去重新调用 vm._update(vm._render()) 进行组件的视图更新。

* watch/computed 原理及该阶段怎么收集依赖的？
<a href="./Vue/computed.js" target="_blank"></a>
<a href="./Vue/watch.js" target="_blank"></a>

* router
> hash 和 history 模式
<a href="./Vue/路由-hash和history.js" target="_blank"></a>

* nextTick
<a href="./Vue/nextTick.js" target="_blank"></a>

* 作用域插槽？ 插槽的原理？
<a href="./Vue/slot.js" target="_blank"></a>

* keep-alive 基于LRU（最近最少使用缓存淘汰策略）算法
https://mp.weixin.qq.com/s/mEoP1Ukkvo4MhqrRNJ_Abw

* filter

* Mixin

* Vuex

* 虚拟dom

* diff 算法

* 组件间的通信

* 生命周期

* data 为什么是一个函数？
<a href="./Vue/data.js" target="_blank"></a>

### Vue3
* composition

* 生命周期

### vite
* 原理
* 与 Webpack 相比，优势？如何看待 Vite 的出现？

### 性能优化
* ssr 服务端渲染

* cache 函数，利用闭包缓存：extend函数，编译阶段（webpack）

* kepp-alive 组件利用 LRU缓存淘汰

* 异步组件，分两次渲染

### 总结 Vue2.x 和 Vue3.0
* Vue3.0 做了哪些调整，优化了什么？

* Vue3 的效率提升主要表现在哪些方面？
> 静态提升
>
> 与字符串化
>
> 缓存事件处理函数
>
> Block Tree
>
> PatchFlag

* Vue3.0 的 diff 算法有什么不同吗？

* Composition API 与 React Hook的区别？（虽然比它好，但也是借鉴了它的思想）
> 声明在 setup 函数内，一次组件实例化只调用一个setup，react hook每次重渲染都需要调用Hook，性能上相对于 Vue来说也比较慢。
>
> Composition API 的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用。
>
> 响应式系统自动实现了依赖收集，进而组件的部分的性能优化由 Vue内部自己完成。而 React Hook 需要手动传入依赖，而且必须保证依赖的顺序，让useEffect、useMemo等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降。

### 框架间的对比
* Vue 和 React 的对比，优缺点？
* 它们之间的 diff 算法？虚拟 dom？

## 小程序
### 原生小程序

### wepy 与 原生的差异
* 优点
* 优化
* 原理

### uni-app
* 原理
* 优化
> 分包优化：
    图片分包/组件分包 （结合项目）
    分包优化原理
* 优点
* 独立打包一键换主题色方案
> 导航栏无法做到调用一次api当即切换主题色，所以这个成为了待解决的核心问题。
> 借用一个 uni-pages-hot-modules 包，它是用来解决page.json的模块化及模块热重载和缓存问题的插件。
> uni-app 自带一个 webpack loader 钩子文件pages.js，在项目 src 目录下建立 pages.js即可生效。
> 利用自定义命令，声明自定义参数，通过const GETVALUE = process.UNI_SCRIPT_DEFINE;const ISTEMP = GETVALUE && GETVALUE.TEMPLATE;

### 总结
* 三者之间的对比

## Webpack
* 原理 启动和构建流程（简洁：4个步骤）

### 原理系列
* HMR原理
> 当你代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模板，这样在不刷新浏览器的前提下就能够对应进行更新。
>
> 基本实现原理大致是这样的：构建 bundle 的时候，加入一段 HMR runtime 的 js 和一段和服务沟通的 js。文件修改会触发 webpack 重新构建，服务器通过向浏览器发送更新消息，浏览器通过 jsonp 拉取更新的模块文件，jsonp 回调触发模块热替换逻辑。
>
> 实现过程：1、watch 编译过程devServer 推送更新消息到浏览器。 2、浏览器接收到服务端消息做出响应。 3、对模块进行热更新或刷新页面。


* babel 原理、AST
    * babel原理大概分为三大部分：
        * 解析：将代码转换为 AST
            * 词法分析：将代码（字符串）分隔为 token 流，即语法单元组成的数组。
            * 语法分析：分析 token流（上面生成的数组）并生成 AST。
        * 转换：访问 AST 的节点进行变换操作生产新的 AST。
            * Taro 就是利用 babel 完成的小程序语法转换。
        * 生成：以新的 AST 为基础生成代码。
    * AST：
        * 是源代码的抽象语法结构的树状表现形式。
* babel-plugin-import（按需引入的实现）：
    * 收集依赖，找到 importDeclaration，分析包和依赖，一致就收集起来。
    * 判断是否使用，判断收集到的，有使用的就调用 importMethod 生成新的 import 语句。
    * 生成引入代码：根据配置项生成代码和样式的 import 语句。
* source-map 原理

    * sourceMap 介绍与实践
https://mp.weixin.qq.com/s/87VqGBaT9aF1B1Tokr4CKQ

* webpack-dev-server 原理

* Loader 原理

* Plugin 原理

* tree-shaking （为什么有 ES Modules）
    * 通过清除多余代码的方式来优化项目打包体积的技术。
    * tree-shaking 只能在静态 modules 下工作，而 ES Modules 模块加载是静态的，也就意味着整个依赖树可以被静态的推导出解析语法树。

* import moduleName from 'xxModule' 和 import('xxModule') 经过 webpack 编译打包最终变成什么？在浏览器中是怎样运行的？
> import 经过 webpack 打包以后变成一些 Map对象，key 为模块路径，value 为模块的可执行函数。
>
> 代码加载到浏览器以后从入口模块开始执行，其中执行的过程中，最重要的就是 webpack 定义的__webpack_require__ 函数，负责实际的模块加载并执行这些模块内容，返回执行结果，其实就是读取 Map 对象，然后执行相应的函数。
>
> 当然其中的异步方法（import('xxModule')）比较特殊一些，它会单独打成一个包，采用动态加载的方式，具体过程：当用户触发其加载的动作时，会动态的在 head 标签中创建一个script标签，然后发送一个 http 请求，加载模块，模块加载完成以后自动执行其中的代码，主要的工作有两个：更改缓存中模块的状态，另一个就是执行模块代码。

### 手写系列
* Loader 手写实现一个工具（可结合项目）

* Plugin 手写实现一个工具（可结合项目）

### 性能优化
#### 打包时间

#### 打包体积


## 工具
* npm （vue有道云）
    * 上传/下载
    * 原理
* git 时光机 reflog/cherry-pick
* SVN（可先保留）

## 业务相关总结
### 项目本身
* 二维码扫码流程

* 一键部署项目
https://mp.weixin.qq.com/s/Gpof3yKCZ2YxaL0oYH-Ziw


## 面经
### css 的高频考题
* BFC - 场景应用：解决容器坍塌问题，容器之间的margin作用。清除浮动。
* 布局 垂直左右居中
* flex
> flex: 1表示什么？
> flex-grow: 1, flex-shrink: 1, flex-basis: auto 多余空间的等额分配，缩小（空间不足时等比缩小），分配前项目占据的空间大小。
* 盒模型
* position
* 选择器优先级
* 文字溢出
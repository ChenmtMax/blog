/**
 * Vue 初次运行时会对 computed 属性做一些初始化处理。（watcher的概念在 响应式原理中）
 * Vue 会对 options 中的每个 computed 属性也用 watcher 去包装起来，它的 get 函数显然就是要执行用户定义的求值函数，而 update 则是一个比较复杂的流程。
 */
// 1、首先在组件初始化的时候，会进入到初始化 computed 的函数。
if (opts.computed) {
    initComputed(vm, opts.computed);
}

// 2、首先定义了一个空的对象，用来存放所有计算属性相关的 watcher。（后面我们叫 计算watcher）
// 然后依次循环每个 computed 属性生成了一个 计算 watcher。
// 它的形态保留关键属性简化后是这样的：
let watcher = [{
    deps: [],
    dirty: true,
    getter: sum(),
    lazy: true,
    value: undefined
}, {}]

/** 缓存生效的情况：
 * 只有计算属性依赖的响应式值发生更新的时候，才会把 dirty 重置为 true。
 * 这样下次读取的时候才会发生真正的计算。
 */

// 如果计算不做缓存的话，每次都要发生一次更新很耗费性能的没有必要的计算。
// 注：所以，只有在 count 发生变化的时候，sum 才会重新计算，这是一个巧妙的计算。 
// 2.6版本计算属性更新的路径是这样的：
/**
 * 1、响应式的值 count 更新。
 * 2、同时通知 computed watcher 和 渲染 watcher 更新。
 * 3、computed watcher 把 dirty 设置为 true。
 * 4、视图渲染读取到 computed 的值，由于 dirty 所以 computed watcher 重新求值。
 */

// 举例说明：
var test = {
    computed: {
        sum() {
            return this.count++
        }
    }
}
/**
 * 首先明确两个关键字：
 * dirty： 从字面意义来讲就是 脏 的意思。
 *         这个开关开启了，就意味着这个数据是脏数据，需要重新求值拿到最新值。
 * 求值：就是对用户传入的函数进行执行，也就是执行 sum 这个函数。
 *
 * 1、在 sum 第一次进行求值的时候会读取响应式属性 count，收集到这个响应式数据作为依赖。
 *    并且计算出一个值来保存在自身的 value 上，把 dirty 设为 false，
 *    接下来在模板里再访问 sum 就直接返回这个求好的值 value，并不进行重新的求值。
 * 2、而 count 发生变化了以后会通知 sum 所对应的 watcher 把自身的 dirty 属性设置成 true，
 *    这也就相当于把重新求值的开关打开来了。这个很好理解，只有 count 变化了，
 *    sum 就直接返回这个求好的值 value，并不进行重新的求值。
 * 3、那么下次模板中再访问到 this.sum 的时候，才会真正的去重新调用 sum 函数求值，
 *    并且再次把 dirty 设置 false，等待下次的开启。
 *
 *
 * 缓存的过程？什么情况下会进行缓存？
 * 只要依赖的属性没有发生变化，返回的是之前缓存的计算结果。
 *
 * watch 是侦听一个特定的值，当该值变化时执行特定的函数。
 */
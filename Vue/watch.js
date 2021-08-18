/**
 * 监听数据改变，watch 如何工作？原理？
 * watch 在一开始初始化时，会读取一遍监听的数据的值，将这个值收集到 watch 的 watcher 中。
 * 你设置了 handle 的话，watch 会放入 watcher 的更新函数中，
 * 数据改变，通知 watch的 watcher 更新，handle 被调用。
 */

/**
 * 设置 Immediate时，watch 如何工作？（立即调用一遍你设置的监听回调，传入刚读的值）
 * 无需要数据改变才触发，而是在 初始化 watch 时，在读取了监听的数据的值之后，就立即执行。
 */

/**
 * watch 中的 deep 为 true 是如何实现的？
 * 当 deep 被设置为 true 的时候，如果当前监控的值是 引用类型，就会对对象中的每一项进行求值。
 * 此时会将当前 watcher 存入到对应属性的依赖中，这样引用类型数据的对象发生变化也会通知数据更新。
 * 注意，对象类型也会对深层属性进行依赖收集，是个递归的访问，这个过程会不断发生依赖收集。
 */

get() {
    pushTarget(this) // 先将当前依赖放到 Dep.target上
    let value
    const vm = this.vm
    try {
        value = this.getter.call(vm, vm)
    } catch (e) {
        if (this.user) {
            handleError(e, vm, `getter for watcher "${this.expression}"`)
        } else {
            throw e
        }
    } finally {
        if (this.deep) { // 如果需要深度监控
            traverse(value) // 会对对象中的每一项取值,取值时会执行对应的get方法
        }
        popTarget()
    }
    return value
}
function _traverse(val: any, seen: SimpleSet) {
    let i, keys
    const isA = Array.isArray(val)
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
        return
    }
    if (val.__ob__) {
        const depId = val.__ob__.dep.id
        if (seen.has(depId)) {
            return
        }
        seen.add(depId)
    }
    if (isA) {
        i = val.length
        while (i--) _traverse(val[i], seen)
    } else {
        keys = Object.keys(val)
        i = keys.length
        while (i--) _traverse(val[keys[i]], seen)
    }
}
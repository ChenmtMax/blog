/**
 * 八、泛型
 * 8-5、练习：自定义字典类
 */
// 类型别名约束callback函数及参数类型。
export type Callback<T, U> = (key: T, val: U) => void; // 没有返回。

export class Dictionary<K, V> {
    private keys: K[] = []; // 用 K 来约定键的数组类型。
    private vals: V[] = [];

    // 获取键值对数量，外部通过函数获取
    get size() {
        return this.keys.length;
    }

    // 重新设置某个键对应的值，如果不存在，则添加。
    set(key: K, val: V) {
        const i = this.keys.indexOf(key); // 获取索引。
        if (i < 0) {
            this.keys.push(key);
            this.vals.push(val);
        } else {
            this.vals[i] = val;
        }

        // console.log(this.keys);
        // console.log(this.vals);
    }

    // 遍历每个键值对。
    // 回调函数参数类型分别为 K, V。
    forEach(callback: Callback<K, V>) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v); // 针对键值对的具体处理由callback函数自身决定。
        })
    }

    // 判断某个键是否存在。
    has(key: K) {
        return this.keys.includes(key);
    }

    // 按照键，删除对应的键值对。(对应键的删除值也要删)
    delete(key: K) {
        const i = this.keys.indexOf(key);
        if (i === -1) {
            return;
        }
        this.keys.splice(i, 1);
        this.vals.splice(i, 1);
    }
}
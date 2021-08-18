export class ArrayHelper<T> {
    // 当一个类中有共同的需要设置数组参数为 T[] 的时候，尽管各方法间使用的 T[] 不相同。
    // 但可以统一提升到整个类层面，让调用时各自设置。
    constructor(private arr: T[]) { }

    // 取出前几项得到一个数组。
    // take<T>(arr: T[], n: number): T[] {
    // 此时的 T 来自于整个类。（将函数中的参数 arr去掉，其中的 arr，全用 this.arr 代替）
    take(n: number): T[] {
        if (n >= this.arr.length) {
            return this.arr;
        }
        const newArr: T[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            newArr.push(this.arr[i]);

        }
        return newArr;
    }

    // shuffle<T>(arr: T[]) {
    // 此时的 T 来自于整个类。（将函数中的参数 arr去掉，其中的 arr，全用 this.arr 代替）
    shuffle() {
        for (let i = 0; i < this.arr.length; i++) {
            const targetIndex = this.getRandom(0, this.arr.length);
            const temp = this.arr[i];
            this.arr[i] = this.arr[targetIndex];
            this.arr[targetIndex] = temp;
        }
    }
    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}
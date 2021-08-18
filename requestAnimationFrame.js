/**
 * requestAnimationFrame H5新增的定时器
 * 告诉浏览器希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
 * 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
 * 参数：
 *      callback：下一次重绘之前更新动画帧所调用的函数，即上面所说的回调函数。
 *      回调函数中传入的参数：DOMHighResTimeAStamp，该参数与performance.now() 的返回值相同，表示 requestAnimationFrame() 开始去执行回调函数的时刻。
 * 返回值：
 *      一个 long 整数，请求ID，是回调列表中唯一的标识。是个非零值。
 *      取消回调函数使用：cancelAnimationFrame(id)。
 * 它是跟着浏览器的绘制走的，如果浏览器绘制间隔是16.7ms，它就会按这个时间间隔动画绘制，动画也不会丢帧。
 * 采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制增加开销；也不会因为时间间隔太长，使动画卡顿不流畅，
 * 特点：会把每一帧中的所有dom操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率。
 *       在隐藏或不可见的元素中，将不会进行重绘或回流，这意味着更少的 CPU、GPU和内存 的使用量。
 *       是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了 CPU 开销。
 * 注意：若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 window.requestAnimationFrame()。
 * */

var deleteDuplicates = function (head) {
    let temp = head
    // let obj = {}



    while (true) {
        if (head != null) {
            if (head.val === head.next.val) {
                head.next = head.next.next
            }
        } else {
            break
        }
        head = head.next
    }
    console.log(head)
    return temp
};

//  实例一：
let divDom = document.createElement('div');
divDom.setAttribute('id', 'some-element-you-want-to-animate');
divDom.style.width = '100px';
divDom.style.height = '100px';
divDom.style.backgroundColor = '#e96900';
document.body.appendChild(divDom);
const element = document.getElementById('some-element-you-want-to-animate');
let start;

function step(timestamp) {
    if (!start) start = timestamp;

    const elapsed = timestamp - start;

    // 这里使用 Math.min() 确保元素刚好停在 200px 的位置
    element.style.transform = `translateX(${Math.min(0.1 * elapsed, 200)}px)`;

    if (elapsed < 2000) {
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);

// 实例二：使用 立即执行函数，在内部形成闭包，实现自我循环调用执行。
const e = document.getElementById('e');
let flag = true;
let left = 0;
let rafId = null;

function render() {
    if (flag === true) {
        // if (left >= 100) {
        //     flag = false;
        // }
        e.style.left = `${left++}px`;
    } else {
        if (left <= 0) {
            flag = true
        }
        e.style.left = `${left--}px`;
    }
}

(function animateLoop(time) {
    console.log(time, Date.now());

    render()
    rafId = requestAnimationFrame(animateLoop)

    // 如果 left等于 50 就停止动画。
    if (left === 50) {
        cancelAnimationFrame(rafId)
    }
})()
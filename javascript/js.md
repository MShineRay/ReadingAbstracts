# js
- [深入理解 JavaScript 事件循环（一）— event loop]( https://mp.weixin.qq.com/s/TGRvUK1LZJozleXXl_CCdA )
    ~~~html
    事件循环的运行机制大致分为以下步骤：
    1.检查事件队列是否为空，如果为空，则继续检查；如不为空，则执行 2；
    2.取出事件队列的首部，压入执行栈；
    3.执行任务；
    4.检查执行栈，如果执行栈为空，则跳回第 1 步；如不为空，则继续检查；
    ~~~
    ~~~js
    var arr = new Array(999);
    arr.fill(1);
    function asyncForEach(array, handler){
        var t = setInterval(function () {
            if(array.length === 0){
                clearInterval(t);
            }else {
                handler(arr.shift());
            }
        }, 0);
    }
    
    //异步遍历
    asyncForEach(arr, function (value) {
        console.log(value);
    })；
    
    //同步遍历
    arr.forEach(function (value, index, arr) {
        console.log(value);
    });
    ~~~
- [[译] 深入理解 JS 事件循环（二）- task and microtask]( https://mp.weixin.qq.com/s/mCm_wHwqziDhD6Ji7fJXOQ )
    ~~~html
    setTimeout 的工作原理，其中的延迟并不是完全精确的，这是因为 setTimeout 它会在延迟时间结束后分配一个新的 task 至 event loop 中，而不是立即执行，所以 setTimeout 的回调函数会等待前面的 task 都执行结束后再运行。
    ~~~
- [为什么要用 setTimeout 模拟 setInterval ？]( https://mp.weixin.qq.com/s/l9tyHzQ0O68m1rzwWCJmMw )
    ~~~
    setInterval 是一个宏任务。
    
    推入任务队列后的时间不准确
        在 setInterval 被推入任务队列时，如果在它前面有很多任务或者某个任务等待时间较长比如网络请求等，那么这个定时器的执行时间和我们预定它执行的时间可能并不一致。
    
    函数操作耗时过长导致的不准确
        当我们需要使用 ajax 轮询服务器是否有新数据时，必定会有一些人会使用 setInterval ，然而无论网络状况如何，它都会去一遍又一遍的发送请求，最后的间隔时间可能和原定的时间有很大的出入。
        
    setInterval 有两个缺点：
        1、使用 setInterval 时，某些间隔会被跳过；
        2、可能多个定时器会连续执行；
        
    setTimeout 模拟 setInterval
        let timer = null
        interval(func, wait){
            let interv = function(){
                func.call(null);
                timer=setTimeout(interv, wait);
            };
            timer= setTimeout(interv, wait);
         },
         
         interval(function() {}, 20);
         
         
         if (timer) {
           window.clearSetTimeout(timer);
           timer = null;
         }
    ~~~
- [10个JavaScript 优化小技巧]( https://mp.weixin.qq.com/s/MtP1FeXLgR9oMEQlUe8WZg )
    ~~~
    宏任务:常见的定时器,用户交互事件等等.（宏任务就是特定的这些个任务,没什么特殊含义）
    微任务:Promise相关任务,MutationObserver等
        - [mutationobserver] ( https://developer.mozilla.org/zh-cn/docs/web/api/mutationobserver )
        - https://www.cnblogs.com/fangdongdemao/p/10262209.html
    
    ~~~
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
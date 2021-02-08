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
- [20个常用的JavaScript简写技巧]( https://mp.weixin.qq.com/s/oqzHCj5JUktc0Q_Mpr7JHw )
- [13个JavaScript单行代码，让你看起来更专业]( https://mp.weixin.qq.com/s/ObCUGgDi5lErEmz68gxp3w )
    ~~~
    document.hidden属性检查当前标签页是否在视图/焦点中。
    
    const isBrowserTabInView = () => document.hidden;
    isBrowserTabInView();
    // Result: returns true or false depending on if tab is in view / focus
    
    ----
    我们可以使用document.activeElement属性检查元素当前是否处于焦点。
    
    const elementIsInFocus = (el) => (el === document.activeElement);
    elementIsInFocus(anyElement)
    // Result: will return true if in focus, false if not in focus
    
    -----
    检查当前用户是否支持触摸事件
    const touchSupported = () => {
      ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
    }
    console.log(touchSupported());
    // Result: will return true if touch events are supported, false if not
    
    -----
    navigator.platform用来检查当前用户是否在Apple设备上。
    
    const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    console.log(isAppleDevice);
    // Result: will return true if user is on an Apple device
    ~~~
- [JS模拟实现数组的map方法]( https://www.cnblogs.com/suihang/p/10535002.html )
    ~~~
    var arr = ["a","b","c","d","e"];
    arr.map(function(currentValue,index,arr){
        console.log("当前元素"+currentValue)　　　　　　　console.log("当前索引"+index)
        console.log("数组对象"+arr)
    })
    map的参数:
        currentValue  必须。当前元素的值
        index  可选。当期元素的索引值
        arr  可选。当期元素属于的数组对象
    
    
    Array.prototype.newMap = function(fn) {
　　　var newArr = [];
　　　for(var i = 0; i<this.length; i++){
　　　     newArr.push(fn(this[i],i,this))
　　　}
　　　return newArr;
　  }
    ~~~
- [GET 和 POST请求的本质区别是什么？原来我一直理解错了]( https://mp.weixin.qq.com/s/JBcnEBSX1RqMnF7DUkU5VA )
    ~~~
    GET在浏览器回退时是无害的，而POST会再次提交请求。
    GET产生的URL地址可以被Bookmark，而POST不可以。
    GET请求会被浏览器主动cache，而POST不会，除非手动设置。
    GET请求只能进行url编码，而POST支持多种编码方式。
    GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
    GET请求在URL中传送的参数是有长度限制的，而POST么有。
    对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
    GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
    GET参数通过URL传递，POST放在Request body中。
    GET和POST本质上就是TCP链接
        GET产生一个TCP数据包；POST产生两个TCP数据包。
        对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
        而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。
        并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。
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
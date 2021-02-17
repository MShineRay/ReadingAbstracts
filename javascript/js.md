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
- [前端开发者必会的技能，你都get了吗？]( https://mp.weixin.qq.com/s/YZ1P8rHv2qhrEp6xln6vxw )
- [2019 前端面试题汇总（主要为 Vue）]( https://mp.weixin.qq.com/s/wzA-pk4Q0RLHFJCxG48PSg )
~~~
1. 谈谈你对MVVM开发模式的理解
    MVVM分为Model、View、ViewModel三者。
    Model：代表数据模型，数据和业务逻辑都在Model层中定义；
    View：代表UI视图，负责数据的展示；
    ViewModel：负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；
    Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。
    因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
    这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。

2. v-if 和 v-show 有什么区别？
    v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；
    而v-if会控制这个 DOM 节点的存在与否。
    当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；
    当只需要一次显示或隐藏时，使用v-if更加合理。

3. delete和Vue.delete删除数组的区别
    delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
    Vue.delete 直接删除了数组 改变了数组的键值。

4.如何优化SPA应用的首屏加载速度慢的问题？
    将公用的JS库通过script标签外部引入，减小 app.bundel 的大小，让浏览器并行下载资源文件，提高下载速度；
    在配置 路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件；
    加一个首屏loading图，提升用户体验；

10. 前端如何优化网站性能？
    1、减少 HTTP 请求数量
        CSS Sprites
        合并 CSS 和 JS 文件
        采用 lazyLoad
    2、控制资源文件加载优先级
~~~
- [为什么越来越少的人用 jQuery？]( https://mp.weixin.qq.com/s/tXyiSSAfS0_M0NU_B7fcjg )
    Animate.css
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
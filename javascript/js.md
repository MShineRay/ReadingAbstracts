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
    ~~~
    this
    原型、原型链
    继承
    箭头函数
    ~~~
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
- [图解浏览器的工作原理]( https://mp.weixin.qq.com/s/YJficujNG3kX45ZwfFQoqA )
- [JavaScript将HTML页面生成PDF并下载]( https://mp.weixin.qq.com/s/mzo1kVdL6-gbASbL5nJd5A )
    html2canvas
    jsPDF
- [写好 JS 条件语句的 5 条守则]( https://mp.weixin.qq.com/s/hqiqcrZSIpLUxguUaGHNHg )
~~~
1.多重判断时使用 Array.includes
2.更少的嵌套，尽早 return
3.使用默认参数和解构
4.倾向于遍历对象而不是 Switch 语句
5.对 所有/部分 判断使用 Array.every & Array.some
~~~
- [20行实现一个Promise]( https://mp.weixin.qq.com/s/oHBv7r6x7tVOwm-LsnIbgA )
- [一文带你彻底搞懂跨域那些事]( https://mp.weixin.qq.com/s/5PAirlPygGILopm5Br7w9Q )
    ~~~
    同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
    一是针对接口的请求
    
    二是针对Dom的查询
    
    JSONP
        JSONP只能发GET请求，因为本质上script加载资源就是GET
        
        空iframe加form 支持POST请求
    
    CORS
        
    ~~~
- [用9种办法解决 JS 闭包经典面试题之 for 循环取 i]( https://mp.weixin.qq.com/s/b3OnarT84HUSQTWKciQp2w )

- [网页大量图片同时加载卡顿问题的优化之旅]( https://mp.weixin.qq.com/s/hvdxP1VvY_IVFha75bE2iA )
    ~~~
    懒加载、预加载
    ~~~
- (已整理)[总结异步编程的六种方式]( https://mp.weixin.qq.com/s/L2lUCssKkrOwHzZGiLUbCg )
- (已整理)[js求数组最大值方法]( https://blog.csdn.net/juceli/article/details/90768744 )
    ~~~
    定义一个数组
    
    var arr = [-1, 1, 101, -52, 10, 1001, 1001]
    1.es6拓展运算符...
        Math.max(...arr)
    2.es5 apply(与方法1原理相同)
        Math.max.apply(null,arr)
    3.for循环
        let max = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            max = max < arr[i+1] ? arr[i+1] : max
        }
    4.数组sort()
        arr.sort((num1, num2) => {
            return num1 - num2 < 0
        })
        arr[0]
    5.数组reduce
        arr.reduce((num1, num2) => {
            return num1 > num2 ? num1 : num2}
        )
    ~~~
- (已整理)[怎么理解js中是原型链? 如何实现继承?]( https://mp.weixin.qq.com/s/GCVuRfOhh2OlSXutEddVsw )
~~~
参考回答:

每个构造函数都有一个原型对象
每个原型对象都包含一个指向构造函数的指针
每个实例都包含一个指向原型对象的指针
查找方式是一层层向上查找直至顶层Object.prototype

实现继承的方式常用的有:
原型链继承
    借用构造函数(call,apply)
    组合继承(原型链＋构造函数)
    原型式继承
    寄生式组合式继承

优缺点?
    每一种继承的方式都有自己的优缺点 
    组合继承的特点是会调用构造函数两次, 
    都是将多种继承方式组合到一起相辅相成.

new 运算符具体干了什么?
    创建一个空的对象
    将空的对象的proto成员指向构造函数的prototype成员对象
    调用构造函数将this指向前面创建的对象
~~~
- (已整理)[怎么理解js中的内存泄漏?](https://mp.weixin.qq.com/s/EvsKEUJl9a-qvAU6tp24ew  )
~~~
内存泄漏的定义为当程序不再需要的内存，由于某种原因其不会返回到操作系统或可用内存池，内存泄漏会导致一系列问题，
比如: 运行缓阳，崩溃，高延迟等

js中常见的内存泄露:
    意外的全局变量
    遗忘的计时器或回调函数
    脱离文档的DOM引用
    闭包
~~~
- (已整理)[如何理解浏览器的跨域问题？常用的解决方式有哪些？]( https://mp.weixin.qq.com/s/sNbXegPIDKYuu3lyAd-47A )
~~~

浏览器的同源策略会导致跨域，这里同源策略又分为以下两种 ：
DOM同源策略：禁止对不同源页面DOM进行操作。这里主要场景是iframe跨域的情况，不同域名的iframe是限制互相访问的。

XmlHttpRequest同源策略：禁止使用XHR对象向不同源的服务器地址发起HTTP请求。
只要协议、域名、端口有任何一个不同，都被当作是不同的域，之间的请求就是跨域操作

常用的解决方式:
1.CORS(Cross-origin resource sharing) 跨域资源共享
    注: 这种方式如果想要携带cookie需要xhr设置withCredentials为true, 服务端 Access-Control-Allow-Credentials:true
2.jsonp实现跨域(动态创建script,利用src属性进行跨域)
3.服务器代理(浏览器有跨域限制，服务端没有)
4.document.domain
5.window.name
6.hash传值
7.possMessage

~~~
- (已整理)[函数防抖，函数节流的基本概念以及工作中实际使用到的场景？实现的思路是？]( https://mp.weixin.qq.com/s/BR-2Y5qDbBHxMBfjopQItA )
~~~
函数防抖(debounce)

基本概念: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
举例理解: 我们用手指一直按住一个弹簧，它将不会马上弹起直到你松手为止
使用场景:
    按钮重复点击
    输入框连续输入
    判断scroll是否滑到底部
简单实现:

const debounce = (fn,delay) => {
    let timer = null
    return () => {
        let ctx = this, args = arguments
        clearTimeout(timer)
        timer = setTimeout( ()=> {
            fn.apply(ctx,args)
        }, delay)
    }
}

函数节流(throttle)
基本概念: 在规定的时间范围内相同的操作触发多次只执行一次
使用场景:
    DOM拖拽
    Canvas画笔
    窗口resize
简单实现:

const throttle = (fn,gapTime = 100) => {
    let timer = null
    let start_time = new Date().getTime()
    return () => {
        let ctx = this, args = arguments,
        current_time = new Date().getTime()
        clearTimeout(timer)
        if(curr_time - start_time >= gapTime()){
            fn.apply(ctx,args)
            start_time = current_time
        }else{
            timer = setTimeout( ()=> {
                fn.apply(ctx,args)
            }, gapTime)
        }
    }
}
~~~
- [说说js中的eventloop机制？]( https://mp.weixin.qq.com/s/dIQO9yn7pgveEkcVGUf0hw )
~~~
首先javascript是单线程机制，就是指当我们在执行一个任务的时候，其它的事情都得等待他执行完毕

在js中所有任务分为两种, 同步任务及异步任务

执行栈执行主线程任务，当有操作dom，ajax交互，使用定时器异步操作的时候，这些任务会被移入到 callback queue 任务队列中
当主线程任务执行完毕为空时，会读取callback queue队列中的函数，进入主线程执行
上述过程会不断重复，也就是常说的Event Loop(事件循环)

在一个事件循环中,异步任务返回结果后会被扔进一个任务列队中，根据异步事件上的类型，
这个事件会被放到对应的宏任务或者微任务列队中去，当执行栈为空的时候，主线程会先查看微任务中的事件列队，
如果微任务不是空先依次执行微任务，如果是空的再去宏任务列队中取出一个事件并把对应的回调加入到当前执行栈，如此反复，进入循环

下面用一道题来加深印象

setTimeout(function () {
    console.log(1);
});

new Promise( (resolve,reject) => {
    console.log(2)
}).then( (val) => {
    console.log(val);
})

输出的结果是2,1
~~~
- [web安全攻击手段有哪些？以及如何防范]( https://mp.weixin.qq.com/s/TxRReeS8g2qPktoon7ysNA )
~~~
常见的有xss, csrf, sql注入

xss(cross site scripting) 跨站脚本攻击
定义: 指攻击者在网页嵌入脚本，用户浏览网页触发恶意脚本执行
XSS攻击分为3类：存储型（持久型）、反射型（非持久型）、基于DOM
如何防范:
    设置HttpOnly以避免cookie劫持的危险 
    过滤，对诸如<script>、<img>、<a>等标签进行过滤 
    编码，像一些常见的符号，如<>在输入的时候要对其进行转换编码 
    限制，对于一些可以预期的输入可以通过限制长度强制截断来进行防御

csrf(cross site request forgery) 跨站请求伪造
定义: 是一种劫持受信任用户向服务器发送非预期请求的攻击方式
如何防范:
    验证 HTTP Referer 字段
    请求地址中添加 token 并验证
    HTTP 头中自定义属性并验证
    
sql注入(SQL injection)
定义: 在未授权情况下，非法访问数据库信息
如何防范:
    杜绝用户提交的参数入库并且执行 
    在代码层，不准出现sql语句 
    在web输入参数处，对所有的参数做sql转义 
    上线测试，需要使用sql自动注入工具进行所有的页面sql注入测试
~~~
- [说说你对前端模块化的理解]( https://mp.weixin.qq.com/s/wtJA4uJoqHEiLL9PJSZQ-g )
~~~
可以理解成实现特定功能的相互独立的一组方法

为什么要使用模块化:
    可维护性
    命名空间
    可复用性

模块化规范
    CommonJS
    AMD
    UMD
    CMD
    Module(es6)

CommonJS
    CommonJS 扩展了JavaScript声明模块的API,
    通过CommonJS，每个JS文件独立地存储它模块的内容（就像一个被括起来的闭包一样）。
    在这种作用域中，我们通过 module.exports 语句来导出对象为模块，再通过 require 语句来引入
    
    如：
    
    function myModule() {
      this.hello = function() {
        return 'hello!';
      }
    }
    module.exports = myModule;

AMD （Asynchronous Module Definition）
    特点: 
        提倡依赖前置，在定义模块的时候就要声明其依赖的模块
    如：
    require([module], callback);


CMD (Common Module Definition)
    CMD规范是国内SeaJS的推广过程中产生的 
    提倡就近依赖（按需加载），在用到某个模块的时候再去require
    
    define(function (require, exports, module) {
      var one = require('./one')
      one.do()
    // 就近依赖，按需加载
      var  two = require('./two')
      two.do() 
    })


UMD (Universal Module Definition)
    AMD和CommonJS的结合,跨平台的解决方案,UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。
    在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块
    如：
    
    (function (window, factory) {
        if (typeof exports === 'object') {
            module.exports = factory();
        } else if (typeof define === 'function' && define.amd) {
            define(factory);
        } else {
            window.eventUtil = factory();
        }
    })(this, function () {
        //module ...
    });
Module
    原生ＪＳ(es6)解决方案
    
    如:
     export default myModule
     import myModule from './myModule'
~~~
- [Call，Apply，Bind的使用与区别，如何实现一个bind]( https://mp.weixin.qq.com/s/gC6OZhNHOGr48gseloT1hQ )
~~~
相同点:
    都是使用于方法借用及明确this指向场景
    第一个参数都是this要指向的对象
    都可以利用后续参数传参


    参数传递方式不同
    call,apply是立即调用,bind是动态调用
基本使用:
    Array.prototype.slice.call(obj,0,1,2)
    Array.prototype.slice.apply(obj,[0,1,2])
    Array.prototype.slice.bind(obj)(0,1,2)

从上面的例子可以看出来call,apply 使用上几乎保持一致，而bind实际上是返回了一个函数

简易bind实现
    Function.prototype.bind = function(context){
        const _this = this
        return function() {
            _this.apply(context, Array.prototype.slice.call(arguments))
        }
    }
上面的bind只实现了方法的作用域绑定，参数已经固定，如果想要动态的参数我们得改写一下
    Function.prototype.bind = function(context){
        const _this = this
        const argus = Array.prototype.slice.apply(arguments,[1])
        return function() {
            _this.apply(context, argus.concat(Array.prototype.slice.call(arguments)))
        }
    }
~~~
- [说说你对闭包的理解？闭包使用场景?]( https://mp.weixin.qq.com/s/QqnRoFqlWTrA_4PZPvsJEw )
- [类数组对象转换为数组的六种方法]( https://www.cnblogs.com/yangai/p/11158693.html )
- [JS 函数的 6 个基本术语]( https://mp.weixin.qq.com/s/LR38S8KGd7w7lPS8VOkBuA )
- (已整理)[前端的缓存有哪些？都适用什么场景？区别是什么？]( https://mp.weixin.qq.com/s/s_9CyjZoeTnWI-HXHxK_Sg )
  ~~~
    前端缓存分为两部分: 
        http 缓存
        浏览器缓存
    http 缓存
        强缓存
            强缓存主要是采用响应头中的Cache-Control和Expires两个字段进行控制的
            Cache-Control 值理解:
                max-age 指定设置缓存最大的有效时间(单位为s)
                public 指定响应会被缓存，并且在多用户间共享
                private 响应只作为私有的缓存，不能在用户间共享
                no-cache 指定不缓存响应，表明资源不进行缓存
                no-store 绝对禁止缓存
            Expires 理解:
                缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点, 需要和Last-modified结合使用
            Last-modified 理解
                服务器端文件的最后修改时间，需要和cache-control共同使用，是检查服务器端资源是否更新的一种方式
            ETag 理解
                根据实体内容生成一段hash字符串，标识资源的状态，由服务端产生。浏览器会将这串字符串传回服务器，
                验证资源是否已经修改

        协商缓存(304)
            协商缓存是指当强缓存机制如果检测到缓存失效，就需要进行服务器再验证

    浏览器缓存 
        Cookie
        LocalStorage
        SessionStorage
        Service Worker
        Cookie

        Cookie主要用于用户信息的存储, 容量为4KB
        LocalStorage的数据将一直保存在浏览器内，直到用户清除浏览器缓存数据为止, 容量为5MB
        SessionStorage的其他属性同LocalStorage, 不同是的当页面关闭时会随之清除
        Service Worker 主要是为了提高web app的用户体验，可以实现离线应用消息推送等等一系列的功能, 
            可以看做是一个独立于浏览器的Javascript代理脚本, 在离线状态下也能提供基本的功能。 
            出于安全性的考虑，Service Worker 只能在https协议下使用
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
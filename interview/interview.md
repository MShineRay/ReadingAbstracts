# interview
- 面向对象理解
- 函数式编程理解
  - [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
  - [函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
  
- [斐波那契数列](https://www.zhihu.com/question/28062458)
~~~
1、递归 也是效率最低的解法，原因是会出现大量的重复计算
2、递推
3、矩阵递推关系

~~~
- [面试的 10 大潜规则，你中招了吗！]( https://mp.weixin.qq.com/s/5Zxp8LBv7SDz9CAtzRWR8A )
- [2021 年互联网大厂职级对应薪资一览表]( https://mp.weixin.qq.com/s/A2GgBHJNuqn5nyimSOBB0g )
- [【吐血整理】前端JavaScript高频手写面试大全，助你查漏补缺]( https://mp.weixin.qq.com/s/rvcuCxJj1p0Q0SUEx8WWDg )
- (已整理)[面试鹅厂前端全过程分享]( https://mp.weixin.qq.com/s/M50YIH69cDldrcsF7mKRhQ )
    
~~~


实现一个css框架你有什么思路吗
二分查找的时间复杂度怎么求？
看过算法导论吗
对图有了解吗
对未来的规划
以后对全栈有兴趣吗
前端未来规划？
3年之后的规划？
有明确的想从事的路线吗？to B？to C？全栈？
介绍部门团队的情况

问面试官的问题：
现在部门采取的前后端技术栈是什么？当时项目为什么需要重构呢？是原来的架构遇到了什么问题吗？
如果有幸加入贵公司，我会负责什么内容？您对我的期望是什么？

5g时代的来临对前端有什么机遇与挑战？
Html4，html5是建立在http上的，http的下一代要解决什么问题？
对现在主流前端框架的看法？
看你有github，你一般在github上做什么呢？
github看过什么关于前端项目的源码？
向什么源码提过pr？
restful接口架构的优缺点？
restful接口架构会导致什么安全问题，具体怎么解决？
团队合作有遇到过分歧吗？最后是怎么解决的？有什么事例最后是采取你建议的解决方案？
~~~
- (已整理)[这些你都会了吗？]( https://mp.weixin.qq.com/s/G9f6_7r62TE-a-vtxApS5w )
~~~
1.浏览器工作原理
  浏览器的主要组件包括：
  用户界面－ 包括地址栏、后退/前进按钮、书签目录
  浏览器引擎－ 用来查询及操作渲染引擎的接口
  渲染引擎－ 渲染界面:Firefox、Chrome和Safari是基于两种渲染引擎构建的，Firefox使用Geoko——Mozilla自主研发的渲染引擎，Safari和Chrome都使用webkit.
  网络－ 用来完成网络调用，例如http请求
  UI 后端－ 用来绘制类似组合选择框及对话框等基本组件，具有不特定于某个平台的通用接口，底层使用操作系统的用户接口
  JS解释器－ 解释执行JS代码
  数据存储－ 属于持久层，浏览器需要在硬盘中保存类似cookie的各种数据

2.Web安全,举例说明
3.状态码
4.同源:同端口,同域名,同协议
5.对象继承
6.ES6历史以及新特性有哪些?
7.promise原理
8.事件模型
9.常见兼容性问题,列举(移动端/PC端)
10.性能优化　　　
类似百度搜索的提示框，兼容各大浏览器，可用键盘控制.


1.Ajax原理
2.浏览器解析过程
流程： 解析html以构建dom树->构建render树->布局render树->绘制render树
3.垂直居中
4.数据类型判断
5.路由实现
6.数据本地存储
7.跨域 
8.数据双向绑定单向绑定优缺点
1.无线性能优化
2.Tap事件,Touch
3.数据存储
1.Dom操作
2.移动布局方案
3.前后端协作
4.原生Ajax实现过程
1.单链表反转
2.快排
3.即时通信(除了Ajax和websocket)
1.Comet技术：基于HTTP长连接的Web端实时通信技术
2.SSE：服务器发送事件,使用长链接进行通讯

4.服务器代理转发如何处理cookie(nginx)
proxy_cookie_domain localhost example.org;proxy_cookie_domain ~\.([a-z]+\.[a-z]+)$ $1;proxy_cookie_path /one/ /;proxy_cookie_path / /two/;
5.对象继承
6.this
7.rem布局的优缺点
实现动画有哪些途径
CSS3
JS帧动画,定时器,requestAnimateFrame
Canvas动画
SVG
图片
对象继承的实现
web安全
https加密过程,证书用途
xss几种形式,防范手段,过滤哪些字符?
xsrf原理,实例,防范手段(Laravel的token)
Sql注入
性能优化
代码优化(html,css,js)
网络性能优化:
Cache缓存之强制缓存和协商缓存
CDN原理及应用
HTTP压缩之gzip
上下文环境对象
设计模式(要求说出如何实现,应用,优缺点):
单例模式
工厂模式
发布订阅模式
跨域(产生原因)
JSONP原理
CORS如何设置
Nginx代理
读过哪些框架源码?
如何写一个CSS库,要注意哪些东西?
JS面向对象之封装,继承,多态的体现和应用?
BST
promiseAll如何实现,以及如何实现多层异步回调?
加油站问题(贪心算法)
XHR具体底层原理和API
单例模式实现/设计模式
JSONP原理,回调过程
Latex怎么解析
hash算法实现,如何避免冲突,如何在冲突里检测
Generater
ES6怎么编译成ES5,css-loader原理,过程
ES6转成ES5的常见例子
常见数据结构,常见算法
node多线程实现
进程和线程
对前端的理解
说说rn,weex原理
说说XHR
Jq的选择器引擎,$('.a .b')以及$('.a').find('.b')
MD5摘要算法其他用途
前端架构的理解
前端框架的看法
如何做前后端分离
在不使用后端模板渲染的情况下,如何做前端数据直出(不使用异步请求数据)?
SSR适用什么场景?SPA首屏空白原因?
前端构建过程原理,具体流程
vue2新增内容?独立构建（standalone）和运行时构建（runtime-only）的差别和应用?
爬虫的实现原理?如何实现一个爬虫,如何解析文件?
如何解决爬虫慢的问题?
多线程如何保障各个线程的安全?
webpack工具和node了解哪些?node各个模块的底层原理?
CSS3实现卡片翻转?
说说职业规划?
说说HTML难点,语义化的体现?
说说CSS重要难点?如何实现垂直水平居中?
JS中this是什么?如何改变this?
讲讲时间复杂度计算?
算法题:假定26个字母对应1-26,将一串数字转成字母有多少种可能?
暴力解法复杂度是多少?
(百度外卖业务:包含移动客户端(RN,hybrid),PC web端,H5,后台界面vue,桌面应用包含编辑器插件,前端构建工具,node中间层)

饿了么
盒模型之box-sizing
XHR原理及API
session和sessionStorage
map forEach(数组各个API细节)
dom事件代理,有什么优点?
三种隐藏方式差别:visibility:hidden,display:none,opacity:0
渲染上的差异:
1.将元素设置为display:none后，元素在页面上将彻底消失，元素本来占有的空间就会被其他元素占有，也就是说它会导致浏览器的回流和重绘。
2.设置元素的visibility为hidden，和display:none的区别在于，元素在页面消失后，其占据的空间依旧会保留着，所以它只会导致浏览器重绘而不会回流。 
3.opacity:0,只是看不到元素,元素依然存在并且占有原有位置.
注:
事件绑定的差异:
1、display:none：元素彻底消失，不会触发绑定的事件.
2、visibility:hidden：无法触发其点击事件，有一种说法是display:none是元素看不见摸不着，而visibility:hidden是看不见摸得着，这种说法是不准确的，设置元素的visibility后无法触发点击事件，说明这种方法元素也是消失了，只是依然占据着页面空间。
3、opacity:0：可以触发点击事件，设置元素透明度为0后，元素只是相对于人眼不存在而已，对浏览器来说，它还是存在的，所以可以触发绑定事件
动画属性的差异:
1、display:none：完全不受transition属性的影响，元素立即消失
2、visibility：hidden：元素消失的时间跟transition属性设置的时间一样，但是没有动画效果.
3、opacity:0,动画属性生效,能够进行正常的动画效果.
inline和block元素列举,block和inline-block区别?
span包含12px大小英文'abc',问span高度?baseline怎么理解?
css实现自适应正方形?
string查找第一个不重复字符.如果换成字符串呢?
Angular数据绑定机制?
重绘和回流的理解
querySelectAll和ByClassName所获取元素的区别?如何绑定事件?
getComputedStyle用法?
addEventListener绑定事件?参数不同的执行顺序.
正则匹配电话号码.exec,match,search用法?推荐一篇高质量正则文章
数据类型判断的方法,toString判断的来源?
ES6 class原理?
function rest参数长度?function.length如何判断与arguments对象长度区别?
var a;typeof a;let a;
mvp,mvc,mvvm
vuex原理,watch对象
js defer async顺序,模块依赖(AMD,CMD差别)
设计模式和应用
session和cookie
清浮动,BFC
cookie存储在哪里?(memory)
BFC
Flexbox用法
排序,找出最大三个数
快排原理,复杂度计算
继承的实现方式
vdom原理,实现
webpack打包是如何处理css图片的
模块
CVTE面试
四栏布局
数组,数组对象去重
数组查某个字符出现次数
选择器权值
右键菜单定制
Ruff
函数不定参
定时器原理
url=>渲染:script阻塞
数据结构应用
数据双向绑定(vue,ng原理)
面向对象三要素
闭包
三栏布局
内联元素包含块元素的表现
三种隐藏方式的区别
求最大子数组和.
块元素和内联元素渲染区别?
ul li实现计数.
flex-box用法
svg与canvas
JPG,png图片特点,场景
CSS写轮播
拖拽组建
PV统计
URL监听变化
1.数组操作
2.排序算法
3.动态规划(书包问题)
4.编程题(正则)
CVTE
线程
各类通信协议
二叉树
算法复杂度
栈封装,利用栈对数组reverse(编程)
美团
各类排序算法以及复杂度计算
Node的一些用法
二叉树遍历
JS内部属性
页面之间传参
程序题:数组找公共元素
出入栈可能性计算
数组去重


~~~
- (已整理)[作为前端，你真的会用 webpack 么？](https://mp.weixin.qq.com/s/cCnZ2BBQx-7SmlPJUQgu8g )
~~~
有哪些常见的 loader？他们能解决什么问题？

webpack 的构建流程是什么?从读取配置到输出文件的整个过程

是否写过 loader 和 Plugin ？描述一下编写 loader 或 Plugin 的思路？

webpack 的热更新是如何做到的？说明其原理？

如何利用 webpack 来优化前端性能？（提高性能和体验）
~~~
- (已整理)[]( https://mp.weixin.qq.com/s/gqbm-yacuF4YG2UzorVy_Q )
~~~
三次握手和四次挥手详细介绍

TCP 有哪些手段保证可靠交付

URL 从输入到页面渲染全流程

如何预防中间人攻击

DNS 解析会出错吗，为什么

ES6 的 Set 内部实现

如何应对流量劫持

算法：top-K 问题，分成 top-1,top-2,top-K 三小问

跨域

webpack 的 plugins 和 loaders 的实现原理

vue 和 react 谈谈区别和选型考虑

webpack 如何优化编译速度

事件循环机制，node 和浏览器的事件循环机制区别

单元测试编写有哪些原则

一个大型项目如何分配前端开发的工作


柯里化通用实现和 two-sum 问题。


typescript 有什么好处

vue 项目中如何约束 rxjs 数据的类型

rxjs 高阶数据流定义，常用高阶数据流操作符



JWT 优缺点

选择器优先级

基本数据类型

RxJS 冷热流区别

RxJS 调试方法

nginx 负载均衡配置

前端性能优化手段

针对 React 的性能优化手段

301 302 307 308 401 403

vue 的 nextTick 实现原理以及应用场景

vue 组件间通信

谈谈 XSS 防御，以及 Content-Security-Policy 细节

场景题：一个气球从右上角移动到中间，然后抖动，如何实现

场景题：一个关于外边距合并的高度计算

mobx-react 如何驱动 react 组件重渲染

forceUpdate 经历了哪些生命周期，子组件呢?

React key 场景题：列表使用 index 做 key，删除其中一个后，如何表现？

算法：实现 setter(obj, 'a.b.c' ,val)

RxJS 相对于其他状态管理方案的优势？


手写冒泡排序

JWT 细节，适用场景

方案题：不同前端技术栈的项目，如何实现一套通用组件方案？


ES6 特性

闭包和 this 一起谈谈

postcss 配置

Promise 内部实现原理

vuex, mobx, redux 各自的特点和区别

react 生命周期

各方面谈谈性能优化

serviceworker 如何保证离线缓存资源更新

virtual dom 有哪些好处

Vue3 proxy 解决了哪些问题？

Vue 响应式原理

发布订阅模式和观察者模式的异同

图片懒加载实现

css 垂直居中

CI/CD 流程

谈谈性能优化


react 生命周期

key 的作用

hooks

vue 和 react 区别，选型考虑

canvas 优化绘制性能

webpack 性能优化手段

事件循环

如何解决同步调用代码耗时太高的问题

手写 Promise 实现


场景题：如何实现登录功能


Promise 实现原理

vue 组件间通信

性能优化

vuex 数据流动过程

谈谈 css 预处理器机制

算法：Promise 串行


CI/CD 整体流程

性能优化

SSR 对性能优化的提升在哪里


vue 组件间通信

react 和 vue 更新机制的区别

Vue3 proxy 的优劣

性能优化

symbol 应用

深拷贝


dns 解析流程

vue 和 react 选型和比较

ssr 优缺点

贝塞尔曲线


Vue3 proxy 优缺点

ES6 特性

Vue 组件间通信

性能优化

ssr 性能优化，node 中间层细节处理

如何编写 loaders 和 plugins

性能优化

webpack 热更新原理

vue 和 react 组件通信

谈谈 eleme 框架源码
~~~
- [](  )
  ~~~
  css实现图片自适应宽高

  讲flex，手写出flex常用的属性，并且讲出作用
  
  BFC是什么
  
  项目里面的前端鉴权是怎么实现的？
  
  vue里面的虚拟dom是怎么回事？
  
  vue双向绑定讲一讲
  
  手写函数防抖和函数节流
  
  讲讲常用的es6语法，比如let、promise、class等等
  
  浏览器渲染过程，回流重绘等等，load、DOMContentLoaded等等事件的触发顺序
  
  讲项目里面的鉴权和图片懒加载怎么实现的

  讲vue-lazyloader的原理，手写伪代码
  
  讲express框架的设计思想
  
  线上日志是如何处理的
  
  讲事件循环
  
  讲nodejs的eventEmitter的实现
  讲vue的响应式原理、依赖收集、监听数组、虚拟dom等等

  讲express的中间件系统是如何设计的
  
  讲vue-lazyloader源码以及设计

  使用es5实现es6的class
  
  websocket握手过程
  
  浏览器的事件循环和nodejs事件循环的区别
  
  跨域以及解决办法

  JavaScript的sort方法内部使用的什么排序？
  
  vue原理，和react的区别（其实我没怎么用过react）

  JavaScript异步的处理方式，现场出了一个问题，使用promise实现
  
  HTML5新增了哪些内容或API，使用过哪些
  
  
  前端持久化的方式、区别

  vue-lazyloader的原理
  
  怎么配webpack
  
  手写vue双向绑定
  
  讲es6的一些特性，并且现场出了几个代码片段，说结果
  
  手写一道算法题
  
  http状态码
  
  
  vue-router的原理

  项目中怎么用的webpack，怎么优化
  
  讲express的设计原理
  
  手动实现parseInt
  
  讲tcp/ip网络层、三次握手，为什么不能两次握手

  讲vue原理
  
  手写vue的mixin方法

  手写promise的all方法
  
  怎么判断一个点是否在圆形内、正方形内
  
  
  
  vue响应式原理，什么是mvvm

  es6使用过的特性
  
  flex常见的属性
  
  css选择器的优先级
  
  抽取过哪些vue组件
  
  实现一个事件发布订阅类，其实就是eventEmitter
  
  事件循环
  
  回调函数的坏处
  
  vue里面哪儿不会用到双向绑定
  
  
  如何抽取公共组件的
  
  讲lazyloader实现

  用docker做了什么
  
  用webpack做了什么
  
  用JavaScript的异步实现sleep函数
  
  手写快排，时间复杂度，优化

  手写实现jsonp
  
  项目部署，线上问题等等
  
  websocket握手过程
  
  
  
  websocket握手过程

  tcp/ip网络层，http的特点
  
  http强行使用udp能实现吗？
  
  vue原理
  
  webpack热更新原理，使用过的插件
  
  原型、闭包、跨域
  如何实现一个可设置过期时间的localStorage
  
  实现一个发布订阅系统，包括on、emit、off等等
  
  input和textarea的区别
  
  用一个div模拟textarea的实现
  
  左右布局：左边定宽、右边自适应，不少于3种方法
  
  CSS3用过哪些新特性
  
  BFC、IFC
  
  对栅格的理解
  
  （水平）居中有哪些实现方式
  
  1像素边框问题
  
  图片懒加载
  
  实现页面加载进度条
  事件委托

  实现extend函数
  
  为什么会有跨域的问题以及解决方式
  
  jsonp原理、postMessage原理
  
  实现拖拽功能，比如把5个兄弟节点中的最后一个节点拖拽到节点1和节点2之间
  
  动画：setTimeout何时执行，requestAnimationFrame的优点
  
  手写parseInt的实现：要求简单一些，把字符串型的数字转化为真正的数字即可，但不能使用JS原生的字符串转数字的API，比如Number()
  
  编写分页器组件的时候，为了减少服务端查询次数，点击“下一页”怎样能确保还有数据可以加载（请求数据不会为空）？
  
  ES6新增了哪些特性，使用过哪些，也有当场看代码说输出结果的
  
  JS模块化的实践
  
  require.js的实现原理（如果使用过webpack，进一步会问，两者打包的异同及优缺点）
  
  promise的实现原理，进一步会问async、await是否使用过
  
  实现gulp的功能
  
  使用前端框架（angular/vue/react）带来哪些好处，相对于使用jQuery
  
  vue双向数据绑定的实现
  
  单页应用，如何实现其路由功能
  
  项目中使用过哪些优化方法

  输入一个URL，Enter之后发生了什么
  
  页面的渲染过程
  
  优化中会提到缓存的问题，问：静态资源或者接口等如何做缓存优化
  
  页面DOM节点太多，会出现什么问题？如何优化？
  
  
  介绍一下你做的这个项目，进一步细问：整个项目有哪些模块，你主要负责哪些

  你在项目中的角色
  
  你在项目中做的最出彩的一个地方
  
  碰到过什么样的困难，怎么解决的
  
  （如果你是这个项目的负责人），任务怎么分配的，有没有关注过团队成员的成长问题
  
  前端安全问题：CSRF和XSS
  
  
  1.关于Html
    1、html语义化标签的理解、结构化的理解；能否写出简洁的html结构；SEO优化。
    2、h5中新增的属性，如自定义属性data、类名className等；新增表单元素；拖拽Drag。
    3、h5中新增的API、修改的API、废弃的API稍作了解（离线存储、audio、video）。
  
  2.关于CSS
    1、CSS选择器（三大特性）。
    2、BFC机制。
    3、盒模型。
    4、CSS模块化开发（封装）；SCSS和LESS的使用。
    5、屏幕适配以及页面自适应。
    6、CSS3中新增的选择器。
    7、CSS3中新增的属性，transform、trasition、animation等。
  
  3.关于布局
    1、标准文档流（padding + margin + 负margin）+ 浮动float + 定位 left + right + top + bottom。
    2、百分比布局：px单位用%num代替，占父级元素的百分比。
    3、flex弹性布局：主轴、辅助轴的几个属性。
    4、grid栅格布局：使用框架中的类名来替代，本质上还是百分比布局。
  
  4.关于JS基础
    1、变量数据类型及检测：基本 + 引用。
    2、运算符：算术 + 条件 + 逻辑 + 位 + 短路、隐式转换等。
    3、条件、循环、异常处理if、switch(){case xxx:}、try、catch、finally、throw。
    4、函数定义、调用方式（apply、call、直接调用）；传参：实参给形参赋值。
    5、字符串、数组、对象常用API。
    6、正则表达式。
  
  5.关于JS高级
    1、作用域、作用域链、闭包。
    2、原型、原型链、继承。
    3、函数上下文、this指向。
    4、js的运行机制、事件队列和循环。
    5、Ajax原理、axios库。
    6、同步、异步编程。
    7、jQuery源码学习。
  
  6.关于浏览器
    1、浏览器的构成和运行机制。
    2、浏览器内核。
    3、浏览器交互：BOM和DOM相关webApi、监听事件。
    4、浏览器缓存机制。
    5、浏览器的渲染原理。
    6、浏览器的安全性：跨域和攻击。
  
  7.关于网络协议
    1、HTTP协议。
    2、cookie、session、token。
  
  8.关于ES6语法
    1、字符串、数组、对象扩展的api。
    2、变量扩展：let、const解构赋值，块级作用域。
    3、函数扩展：箭头函数默认参数、rest参数。
    4、展开运算符、模板字符串。
    5、set和map数据结构。
    6、迭代器和生成器函数next和yield的理解。
    7、proxy对象属性代理器：属性的读取（get）和设置（set）相关操作。
    8、promise对象、异步编程的解决方案。
    9、async + await：异步编程的终极方案promise + generator的语法糖。
    10、class语法、构造函数的语法糖。
    11、模块化编程export + import的导出和导入。
  
  9.VUE基础
    1、基本指令。
    2、实例的属性和方法。
    3、实例的生命周期。
    4、组件基础：创建、注册、添加属性方法、套用等。
    5、组件通信传值，父子、兄弟、跨级。
    6、插槽slot等。
  
  10.VUE高级
    1、vue-router：搭建SPA
      路由、组件的配置。
      路由间的传值。
      路由跳转。
      路由的导航守卫。
      记住在router.js和组件页面中的使用方式。
    
    2、vuex：状态管理、数据仓库store
      实例化仓库的5大属性的使用。
      state、getters、mutations、actions、modules。
      辅助函数mapState等，仓库中计算属性的映射、方便操作。
      记住在store.js和组件中使用方式。
  
  11.VUE深入、源码阅读
    1、数据响应式原理。
    2、virtual dom。
    3、diff 算法。
    4、nextTick等等。
  
  工程能力考察
  1.项目能力
    1、vue-cli脚手架搭建和功能配置vue.config.js。
    2、webpack的常用配置。
    3、项目构建打包。
    4、熟悉各类框架的文档。
    5、UI框架：Bootstrap、MUI、Element-ui等。
    6、常用的插件整理；整理一个自己插件库，封装自己的方法库、组件库。
    7、常用的工具熟练度。
    8、PC端和移动端开发注意事项。
    9、经验总结：快速确定项目的技术选型。
    10、坑点总结：项目遇到坑坑坑！
    11、项目中的性能优化记录（都是细节点，多记录）。
    12、需求文档的理解，可以结合项目流程图、UML图。
    13、问题解决能力：bug定位调试、查找文档、寻求他人。
    14、记录习惯养成。
  
  2.模块化、组件化开发能力
    1、项目分类；各类文件整理、分类。
    2、各类功能封装。
    3、组件和功能模块的抽离、解耦、复用。
  
  1.面向对象的编程思想
    1、类的抽象。
    2、对象的封装、继承。
    3、为了更好的去管理数据、分类数据，实现高内聚、低耦合。
  
  2.设计模式
    设计模式感觉也是将面向对象思想再度抽象成现实中某些特定模式。
  
  3.数据结构和算法
    1、学习常用的排序搜索算法、顺序表、链表、栈、队列、树、堆等。
    2、考验你的抽象思维和数学功底。
    3、将现实需求抽象成计算机代码的思维能力。
  
  1.学习能力
    1、持续学习的态度——博客、笔记记录。
    2、技术论坛活跃度高、问答多。
    3、GitHub开源项目参与。
  
  2.了解一门后端语言
    1、python、node.js、php等。
    2、数据库mysql、redis、mongodb；sql的操作语句、mongodb的操作语句、redis的操作语句。
    3、node + express搭建本地服务等。
    4、python + django + request + scrapy。
    
  3.系统编程
    1、Linux命令行操作、系统文件管理。
    2、多任务、多线程、多进程、协程、并发、并行、串行、同步、异步等概念的理解。
    
    注：以上哪些知识点你觉得难？又有哪些知识点你有补充的，欢迎下方留言讨论。


  ~~~
- []( https://mp.weixin.qq.com/s/T-LKIPtGDJ4s5rLjwlN1mg)
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](https://mp.weixin.qq.com/s/uYyaTaB0WyuPuB61pWbuTA  )
  ~~~
	1、实现一个函数，判断输入是不是回文字符串。
		function run(input) {
			if(typeof input !== 'string') return false;
			return input.split('').reverse().join('') === input;
		}
    
  2、两种以上方式实现已知或者未知宽度的垂直水平居中。
    // 1
    .wraper {
      position: relative;
      .box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px ;
        margin: - 50px 0 0 -50px;
      }
    }
    
    // 2
    .wraper {
      position: relative;
      .box {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
      }
    }
    
    
    // 3
    .wraper {
      .box {
        display: flex;
        justify-content:center;
        align-items: center;
        height: 100px;
      }
    }
    
    
    // 4
    .wraper {
      display: table;
      .box {
        display: table-cell;
        vertical-align: middle;
      }
    }
    
    3、实现效果，点击容器内的图标，图标边框变成border 1px solid red，点击空白处重置。
    
      const box = document.getElementById('box');
      
      function isIcon(target) {
        return target.className.includes('icon');
      }
    
    
      box.onClick = function(e) {
        e.stopPropagation();
        const target = e.target;
        if (isIcon(target)) {
          target.style.border = '1px solid red';
        }
      }
    
      const doc = document;
    
      doc.onclick = function(e) {
        const children = box.children;
        for (let i; i < children.length; i++) {
          if(isIcon(children[i])) {
            children[i].style.border = 'none';
          }
        }
      }
    
    4、请简单实现双向数据绑定mvvm。
    
      <input id="input"/>
      const data = {};
      
      const input = document.getElementById('input');
      Object.defineProperty(data, 'text', {
        set(value) {
          input.value = value;
          this.value = value;
        }
      });
      input.onChange = function(e) {
        data.text = e.target.value;
      }
      
    
    5、实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)
      var instance = null;
      class Storage {
        static getInstance() {
          if (!instance) {
            instance = new Storage();
          }
          return instance;
        }
      
        setItem = (key, value) => localStorage.setItem(key, value),
        getItem = key => localStorage.getItem(key)
      }
      
    
    Q1 你的技术栈主要是react，那你说说你用react有什么坑点？
      1、JSX做表达式判断时候，需要强转为boolean类型，如：
        render() {
          const b = 0;
          return <div>{
              !!b && <div>这是一段文本</div>
            }
          </div>
        }
        如果不使用 !!b 进行强转数据类型，会在页面里面输出 0。
      2、尽量不要在 componentWillReviceProps 里使用 setState，如果一定要使用，那么需要判断结束条件，不然会出现无限重渲染，导致页面崩溃。
      3、给组件添加ref时候，尽量不要使用匿名函数，因为当组件更新的时候，匿名函数会被当做新的prop处理，让ref属性接受到新函数的时候，react内部会先清空ref，也就是会以null为回调参数先执行一次ref这个props，然后在以该组件的实例执行一次ref，所以用匿名函数做ref的时候，有的时候去ref赋值后的属性会取到null。详情见
      4、遍历子节点的时候，不要用 index 作为组件的 key 进行传入。
    
    Q2 我现在有一个button，要用react在上面绑定点击事件，要怎么做？
      class Demo{
        render() {
          return <button onClick={(e) => {alert('我点击了按钮')}}>
            按钮
          </button>
        }
      }
    
    Q3 接上一个问题，你觉得你这样设置点击事件会有什么问题吗？
      由于onClick使用的是匿名函数，所有每次重渲染的时候，会把该onClick当做一个新的prop来处理，会将内部缓存的onClick事件进行重新赋值，所以相对直接使用函数来说，可能有一点的性能下降（个人认为）。
      
      修改：
      class Demo {
        onClick = (e) => {alert('我点击了按钮')}
        render() {
          return <button onClick={this.onClick}>
            按钮
          </button>
        }
      }
      
      当然你在内部声明的不是箭头函数，然后你可能需要在设置onClick的时候使用bind绑定上下文，
      这样的效果和先前的使用匿名函数差不多，因为bind会返回新的函数，也会被react认为是一个新的prop。
    
    Q4 你说说event loop吧
      首先，js是单线程的，主要的任务是处理用户的交互，而用户的交互无非就是响应DOM的增删改，使用事件队列的形式，
      一次事件循环只处理一个事件响应，使得脚本执行相对连续，所以有了事件队列，用来储存待执行的事件，
      那么事件队列的事件从哪里被push进来的呢。
      那就是另外一个线程叫事件触发线程做的事情了，他的作用主要是在定时触发器线程、异步HTTP请求线程满足特定条件下的回调函数push到事件队列中，
      等待js引擎空闲的时候去执行，
      当然js引擎执行过程中有优先级之分，首先js引擎在一次事件循环中，会先执行js线程的主任务，
      然后会去查找是否有微任务microtask（promise），如果有那就优先执行微任务，
      如果没有，在去查找宏任务macrotask（setTimeout、setInterval）进行执行。
    
    Q5 说说事件流吧
    
      事件流分为两种，捕获事件流和冒泡事件流。
      
      捕获事件流从根节点开始执行，一直往子节点查找执行，直到查找执行到目标节点。
      
      冒泡事件流从目标节点开始执行，一直往父节点冒泡查找执行，直到查到到根节点。
      
      事件流分为三个阶段，一个是捕获节点，一个是处于目标节点阶段，一个是冒泡阶段。
    
    Q6 我现在有一个进度条，进度条中间有一串文字，当我的进度条覆盖了文字之后，文字要与进度条反色，怎么实现？
    
    。。。当时我给的是js的方案，在进度条宽度变化的时候，计算盖过每一个文字的50%，如果超过，设置文字相反颜色。
    
    当然css也有对应的方案，也就是 mix-blend-mode。
    
    对应html也有对应方案，也就设置两个相同位置但是颜色相反的dom结构在重叠在一起，顶层覆盖底层，最顶层的进度条取overflow为hidden，其宽度就为进度。
    
    
    Q2 react 的虚拟dom是怎么实现的
      首先说说为什么要使用Virturl DOM，因为操作真实DOM的耗费的性能代价太高，所以react内部使用js实现了一套dom结构，在每次操作在和真实dom之前，使用实现好的diff算法，对虚拟dom进行比较，递归找出有变化的dom节点，然后对其进行更新操作。为了实现虚拟DOM，我们需要把每一种节点类型抽象成对象，每一种节点类型有自己的属性，也就是prop，每次进行diff的时候，react会先比较该节点类型，假如节点类型不一样，那么react会直接删除该节点，然后直接创建新的节点插入到其中，假如节点类型一样，那么会比较prop是否有更新，假如有prop不一样，那么react会判定该节点有更新，那么重渲染该节点，然后在对其子节点进行比较，一层一层往下，直到没有子节点。
    
    Q3 react 的渲染过程中，兄弟节点之间是怎么处理的？也就是key值不一样的时候。
    
      通常我们输出节点的时候都是map一个数组然后返回一个ReactNode，为了方便react内部进行优化，我们必须给每一个reactNode添加key，这个key prop在设计值处不是给开发者用的，而是给react用的，大概的作用就是给每一个reactNode添加一个身份标识，方便react进行识别，在重渲染过程中，如果key一样，若组件属性有所变化，则react只更新组件对应的属性；没有变化则不更新，如果key不一样，则react先销毁该组件，然后重新创建该组件。
    
    Q2 你说一下webpack的一些plugin，怎么使用webpack对项目进行优化。
      构建优化：
        减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime
        并行编译 happypack、thread-loader、uglifyjsWebpackPlugin开启并行
        缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin开启缓存、babel-loader开启缓存
        预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin
      
      性能优化：
        减少编译体积 Tree-shaking、Scope Hositing
        hash缓存 webpack-md5-plugin
        拆包 splitChunksPlugin、import()、require.ensure
      
    
    Q4 看你简历上写了canvas，你说一下为什么canvas的图片为什么过有跨域问题
    
    
    Q5 我现在有一个canvas，上面随机布着一些黑块，请实现方法，计算canvas上有多少个黑块
    
      使用getImageData获取像素数组，然后遍历数组，把在遍历节点的过程中，查看节点上下左右的像素颜色是否相同，如果相同，然后设置标识，最后groupBy一下所有像素。（这是我当时的方案）
    
    Q3 现在有那么一个团队，假如让你来做技术架构，你会怎么做？
    
      考虑到团队每一个前端的技术栈可能不一致，这个时候我可能选择微前端架构，让每个人负责的模块可以单独开发，单独部署，单独回滚，不依赖于其他项目模块，在尽可能的情况下节约团队成员之间的学习成本，当然这肯定也有缺点，那就是每个模块都需要一个前端项目，单独部署，单独回滚无疑也加大了运维成本。
    
    
    Q2 说说从输入URL到看到页面发生的全过程，越详细越好
    
      首先浏览器主进程接管，开了一个下载线程。
      然后进行HTTP请求（DNS查询、IP寻址等等），中间会有三次捂手，等待响应，开始下载响应报文。
      将下载完的内容转交给Renderer进程管理。
      Renderer进程开始解析css rule tree和dom tree，这两个过程是并行的，所以一般我会把link标签放在页面顶部。
      解析绘制过程中，当浏览器遇到link标签或者script、img等标签，浏览器会去下载这些内容，遇到时候缓存的使用缓存，不适用缓存的重新下载资源。
      css rule tree和dom tree生成完了之后，开始合成render tree，这个时候浏览器会进行layout，开始计算每一个节点的位置，然后进行绘制。
      绘制结束后，关闭TCP连接，过程有四次挥手。
    
    
    Q4 刚刚Q2中说的CSS和JS的位置会影响页面效率，为什么？
    
      css在加载过程中不会影响到DOM树的生成，但是会影响到Render树的生成，进而影响到layout，所以一般来说，style的link标签需要尽量放在head里面，因为在解析DOM树的时候是自上而下的，而css样式又是通过异步加载的，这样的话，解析DOM树下的body节点和加载css样式能尽可能的并行，加快Render树的生成的速度。
      js脚本应该放在底部，原因在于js线程与GUI渲染线程是互斥的关系，如果js放在首部，当下载执行js的时候，会影响渲染行程绘制页面，js的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。
    
    Q5 现在有一个函数A和函数B，请你实现B继承A
      // 方式1
      function B(){}
      function A(){}
      B.prototype = new A();
    
      // 方式2
      function A(){}
      function B(){
        A.call(this);
      }
    
      // 方式3
      function B(){}
      function A(){}
      B.prototype =  new A();
      
      function B(){
        A.call( this);
      }
    
    Q6 刚刚你在Q5中说的几种继承的方式，分别说说他们的优缺点
      方式1：简单易懂，但是无法实现多继承，父类新增原型方法/原型属性，子类都能访问到
      方式2：可以实现多继承，但是只能继承父类的实例属性和方法，不能继承原型属性/方法
      方式3：可以继承实例属性/方法，也可以继承原型属性/方法，但是示例了两个A的构造函数
    
    Q9 描述一下this
      this，函数执行的上下文，可以通过apply，call，bind改变this的指向。对于匿名函数或者直接调用的函数来说，this指向全局上下文（浏览器为window，nodejs为global），剩下的函数调用，那就是谁调用它，this就指向谁。当然还有es6的箭头函数，箭头函数的指向取决于该箭头函数声明的位置，在哪里声明，this就指向哪里。
    
    Q10 说一下浏览器的缓存机制
      浏览器缓存机制有两种，一种为强缓存，一种为协商缓存。
      对于强缓存，浏览器在第一次请求的时候，会直接下载资源，然后缓存在本地，第二次请求的时候，直接使用缓存。
      对于协商缓存，第一次请求缓存且保存缓存标识与时间，重复请求向服务器发送缓存标识和最后缓存时间，服务端进行校验，如果失效则使用缓存。
      协商缓存方案：
      Exprires：服务端的响应头，第一次请求的时候，告诉客户端，该资源什么时候会过期。Exprires的缺陷是必须保证服务端时间和客户端时间严格同步。
      Cache-control：max-age，表示该资源多少时间后过期，解决了客户端和服务端时间必须同步的问题，
      If-None-Match/ETag：缓存标识，对比缓存时使用它来标识一个缓存，第一次请求的时候，服务端会返回该标识给客户端，客户端在第二次请求的时候会带上该标识与服务端进行对比并返回If-None-Match标识是否表示匹配。
      Last-modified/If-Modified-Since：第一次请求的时候服务端返回Last-modified表明请求的资源上次的修改时间，第二次请求的时候客户端带上请求头If-Modified-Since，表示资源上次的修改时间，服务端拿到这两个字段进行对比。
    
    Q11 ETag是这个字符串是怎么生成的？
     通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。
    
    Q12 现在要你完成一个Dialog组件，说说你设计的思路？它应该有什么功能？
    
      该组件需要提供hook指定渲染位置，默认渲染在body下面。
      
      然后改组件可以指定外层样式，如宽度等
      
      组件外层还需要一层mask来遮住底层内容，点击mask可以执行传进来的onCancel函数关闭Dialog。
      
      另外组件是可控的，需要外层传入visible表示是否可见。
      
      然后Dialog可能需要自定义头head和底部footer，默认有头部和底部，底部有一个确认按钮和取消按钮，确认按钮会执行外部传进来的onOk事件，然后取消按钮会执行外部传进来的onCancel事件。
      
      当组件的visible为true时候，设置body的overflow为hidden，隐藏body的滚动条，反之显示滚动条。
      
      组件高度可能大于页面高度，组件内部需要滚动条。
      
      只有组件的visible有变化且为ture时候，才重渲染组件内的所有内容。
    
    
    Q2 刚刚说的java调用js离线生成数据报告？java调用js的promise异步返回结果怎么实现的？
    
    使用java的js引擎Nashorn，Nashorn不支持事件队列，是要引进polyfill，然后java调用js方法获得java的promise对象，然后在调用该对象的then方法，回调函数为java中的某各类的某个方法，然后while一个表示是否已执行回调的变量，如果未执行，则让java主线程sleep，如果已经执行，则跳出循环，表示是否已执行回调的变量在传入promise的回调函数中设置更改。详情代码见地址
    
    Q3 说说svg和canvas各自的优缺点？
      共同点：都是有效的图形工具，对于数据较小的情况下，都很又高的性能，它们都使用 JavaScript 和 HTML；它们都遵守万维网联合会 (W3C) 标准。
      svg优点：
        矢量图，不依赖于像素，无限放大后不会失真。
        以dom的形式表示，事件绑定由浏览器直接分发到节点上。
      
      svg缺点：
        dom形式，涉及到动画时候需要更新dom，性能较低。
      
      canvas优点：
        定制型更强，可以绘制绘制自己想要的东西。
        非dom结构形式，用JavaScript进行绘制，涉及到动画性能较高。
      
      canvas缺点：
        事件分发由canvas处理，绘制的内容的事件需要自己做处理。
        依赖于像素，无法高效保真，画布较大时候性能较低。
    
    Q4 你刚刚说的canvas渲染较大画布的时候性能会较低？为什么？
      因为canvas依赖于像素，在绘制过程中是一个一个像素去绘制的，当画布足够大，像素点也就会足够多，那么性能就会足够低。
    
    Q6 假设我现在有5000个圆，完全绘制出来，点击某一个圆，该圆高亮，另外4999个圆设为半透明，分别说说用svg和canvas怎么实现？
      首先，从数据出发，我们的每个圆是一个数据，这个数据有圆的x、y、radius、isHighlight如果是svg，直接渲染节点即可，然后往节点上边绑定点击事件，点击改变所有数据的高亮属性（必须同步执行完成），然后让浏览器进行绘制。如果是canvas，我们需要自己绑定事件到canvans标签上，然后点击的时候判断点击的位置是否在圆内，如果在某个圆内，则更新所有数据的高亮属性，之后在进行一次性绘制。
    
    Q7 刚刚说的canvas的点击事件，怎么样实现？假如不是圆，这些图形是正方形、长方形、规则图形、不规则图形呢
      针对于每一个形状，将其抽象成shape类，每一个类有自己的方法isPointInSide来判断节点是否在图形内，对于不规则图形，当做矩形处理，点击的时候执行该方法判断点击位置是否在图形内。
    
    Q8 那假如我的图形可能有变形、放大、偏移、旋转的需求呢？你的这个isPointInSide怎么处理？
    
      好像有相应的API处理变形、旋转、放大等等之后的位置映射关系。
    
    Q9 那个这个canvas的点击事件，点击的时候怎么样快速的从这5000个圆中找到你点击的那个圆（不完全遍历5000个节点）？
    
    可以通过预查找的形式，当鼠标划过的时候预先查找到鼠标附近的一些节点，当点击的时候在从这些预先筛选好的节点里查找点击下来的节点，当然这个方法的前提是不能影响js主线程的执行，必须是异步的形式。
    
    
    Q11 描述二叉树的几种遍历方式？
      先序遍历：若二叉树非空，访问根结点，遍历左子树，遍历右子树。
      中序遍历：若二叉树非空，遍历左子树；访问根结点；遍历右子树。
      后序遍历：若二叉树非空，遍历左子树；遍历右子树；访问根结点。
      所有遍历是以递归的形似，直到没有子节点。
    
    Q12 说说你记得的所有的排序，他们的原理是什么？
      冒泡排序：双层遍历，对比前后两个节点，如果满足条件，位置互换，直到遍历结束。
      快速排序：去数组中间的那一个数，然后遍历所有数，小于该数的push到一个数组，大于该数的push到另外一个数组，然后递归去排序这两个数组，最后将所有结果连接起来。
      选择排序：声明一个数组，每次去输入数组里面找数组中的最大值或者最小值，取出来后push到声明的数组中，直到输入数组为空。
    
    Q14 介绍一下react
      以前我们没有jquery的时候，我们大概的流程是从后端通过ajax获取到数据然后使用jquery生成dom结果然后更新到页面当中，但是随着业务发展，我们的项目可能会越来越复杂，我们每次请求到数据，或则数据有更改的时候，我们又需要重新组装一次dom结构，然后更新页面，这样我们手动同步dom和数据的成本就越来越高，而且频繁的操作dom，也使我我们页面的性能慢慢的降低。
      
      这个时候mvvm出现了，mvvm的双向数据绑定可以让我们在数据修改的同时同步dom的更新，dom的更新也可以直接同步我们数据的更改，这个特定可以大大降低我们手动去维护dom更新的成本，mvvm为react的特性之一，虽然react属于单项数据流，需要我们手动实现双向数据绑定。
      
      有了mvvm还不够，因为如果每次有数据做了更改，然后我们都全量更新dom结构的话，也没办法解决我们频繁操作dom结构(降低了页面性能)的问题，为了解决这个问题，react内部实现了一套虚拟dom结构，也就是用js实现的一套dom结构，他的作用是讲真实dom在js中做一套缓存，每次有数据更改的时候，react内部先使用算法，也就是鼎鼎有名的diff算法对dom结构进行对比，找到那些我们需要新增、更新、删除的dom节点，然后一次性对真实DOM进行更新，这样就大大降低了操作dom的次数。
      
      那么diff算法是怎么运作的呢，首先，diff针对类型不同的节点，会直接判定原来节点需要卸载并且用新的节点来装载卸载的节点的位置；针对于节点类型相同的节点，会对比这个节点的所有属性，如果节点的所有属性相同，那么判定这个节点不需要更新，如果节点属性不相同，那么会判定这个节点需要更新，react会更新并重渲染这个节点。
      
      react设计之初是主要负责UI层的渲染，虽然每个组件有自己的state，state表示组件的状态，当状态需要变化的时候，需要使用setState更新我们的组件，但是，我们想通过一个组件重渲染它的兄弟组件，我们就需要将组件的状态提升到父组件当中，让父组件的状态来控制这两个组件的重渲染，当我们组件的层次越来越深的时候，状态需要一直往下传，无疑加大了我们代码的复杂度，我们需要一个状态管理中心，来帮我们管理我们状态state。
      
      这个时候，redux出现了，我们可以将所有的state交给redux去管理，当我们的某一个state有变化的时候，依赖到这个state的组件就会进行一次重渲染，这样就解决了我们的我们需要一直把state往下传的问题。redux有action、reducer的概念，action为唯一修改state的来源，reducer为唯一确定state如何变化的入口，这使得redux的数据流非常规范，同时也暴露出了redux代码的复杂，本来那么简单的功能，却需要完成那么多的代码。
      
      后来，社区就出现了另外一套解决方案，也就是mobx，它推崇代码简约易懂，只需要定义一个可观测的对象，然后哪个组价使用到这个可观测的对象，并且这个对象的数据有更改，那么这个组件就会重渲染，而且mobx内部也做好了是否重渲染组件的生命周期shouldUpdateComponent，不建议开发者进行更改，这使得我们使用mobx开发项目的时候可以简单快速的完成很多功能，连redux的作者也推荐使用mobx进行项目开发。但是，随着项目的不断变大，mobx也不断暴露出了它的缺点，就是数据流太随意，出了bug之后不好追溯数据的流向，这个缺点正好体现出了redux的优点所在，所以针对于小项目来说，社区推荐使用mobx，对大项目推荐使用redux。
    
    Q15 假如我一个组件有一个状态count为1，然后我在componentDidMount()里面执行执行了两次this.setState({count: this.state.count++})，然后又执行了两次setTimeout(() => { this.setState({count: this.state.count++}) }, 0)，最后count为多少？为什么？
      count为4，因为第二次执行setState的时候，取不到第一次this.state.count++的结果，react在一轮生命周期结束后才会更新内部的state，如果在一轮生命周期内多次使用了setState，react内部会有一个字段isBatchUpdate标识本次更新为批量更新，然后在最后render的时候将所有setState的结果提交到state中，一次性进行更新，并且把isBatchUpdate这个字段设置为false。
      针对于两次setTimeout，js引擎会把这两个setState丢到事件队列中，等待js空闲了去执行，而我们的渲染函数render是同步执行的（react16版本默认没有开启异步渲染），所以等我们render执行完全，也就是我们的state被同步完后，在取事件队列里面的setState进行执行，setTimeout的第二个setState也是一样的，所以最后结果是4。
    

	~~~
- [](https://mp.weixin.qq.com/s/TWsmUaiQ1KI1B_-ofgWqFw)
  ~~~
  0.谈谈对前端安全的理解，有什么，怎么防范

  前端安全问题主要有XSS、CSRF攻击
  XSS：跨站脚本攻击
  它允许用户将恶意代码植入到提供给其他用户使用的页面中，一种javascript代码注入。
  XSS的防御措施：
  
      过滤转义输入输出
  
      避免使用eval、new Function等执行字符串的方法，除非确定字符串和用户输入无关
  
      使用cookie的httpOnly属性，加上了这个属性的cookie字段，js是无法进行读写的
  
      使用innerHTML、document.write的时候，如果数据是用户输入的，需要对象关键字符进行过滤与转义
  
  CSRF：跨站请求伪造
  其实就是网站中的一些提交行为，被黑客利用，在你访问黑客的网站的时候进行操作，会被操作到其他网站上
  CSRF防御措施：
  
      检测http referer是否是同域名
  
      避免登录的session长时间存储在客户端中
  
      关键请求使用验证码或者token机制
  
  其他攻击方法还有HTTP劫持、界面操作劫持
  
  1.使用箭头函数需要注意的地方
	当要求动态上下文的时候，你就不能使用箭头函数，比如：定义方法，用构造器创建对象，处理时间时用 this 获取目标。
 
  2.webpack.load的原理
	loaders是你用在app源码上的转换元件。他们是用node.js运行的，把源文件作为参数，返回新的资源的函数。
	
  3.ES6 let、const
	let
	  let是更完美的var
	  
		  let声明的变量拥有块级作用域,let声明仍然保留了提升的特性，但不会盲目提升。
	  
		  let声明的全局变量不是全局对象的属性。不可以通过window.变量名的方式访问
	  
		  形如for (let x…)的循环在每次迭代时都为x创建新的绑定
	  
		  let声明的变量直到控制流到达该变量被定义的代码行时才会被装载，所以在到达之前使用该变量会触发错误。
	  
	const
	  定义常量值，不可以重新赋值，但是如果值是一个对象，可以改变对象里的属性值
	  
		  const OBJ = {"a":1, "b":2};
		  
		  OBJ.a = 3;
		  
		  OBJ = {};// 重新赋值，报错！
		  
		  console.log(OBJ.a); // 3
		  
		  
     4.CSS3 box-sizing的作用
     
		 设置CSS盒模型为标准模型或IE模型。标准模型的宽度只包括content，二IE模型包括border和padding
		 
		 box-sizing属性可以为三个值之一：
		 
			 content-box，默认值，border和padding不计算入width之内
		 
			 padding-box，padding计算入width内
		 
			 border-box，border和padding计算入width之内
     
     5.说说HTML5中有趣的标签（新标签及语义化）
		如果代码写的语义化，有利于SEO。搜索引擎就会很容易的读懂该网页要表达的意思。例如文本模块要有大标题，合理利用h1-h6，列表形式的代码使用ul或ol，重要的文字使用strong等等。
		总之就是要充分利用各种HTML标签完成他们本职的工作
		
     6.git命令，如何批量删除分支
		git branch | grep 'branchName' | xargs git branch -D,从分支列表中匹配到指定分支，然后一个一个(分成小块)传递给删除分支的命令，最后进行删除。(参考这里)
     7.创建对象的三种方法
		 第一种方式，字面量
			 var o1 = {name: "o1"}
			 var o2 = new Object({name: "o2"})
		 第二种方式，通过构造函数
			 var M = function(name){ this.name = name }
			 var o3 = new M("o3")
		 第三种方式，Object.create
			 var  p = {name: "p"}
			 var o4 = Object.create(p)
			新创建的对o4的原型就是p，同时o4也拥有了属性name
     8.JS实现继承的几种方式
		借用构造函数实现继承
		 function Parent1(){
			this.name = "parent1"
		 }
		 function Child1(){
			 Parent1.call(this);
			 this.type = "child1";
		 }
		缺点：Child1无法继承Parent1的原型对象，并没有真正的实现继承（部分继承）
     
		借用原型链实现继承
		 function Parent2(){
			this.name = "parent2";
			this.play = [1,2,3];
		 }
		 function Child2(){
			this.type = "child2";
		 }
		 Child2.prototype = new Parent2();
		缺点：原型对象的属性是共享的
     
     组合式继承
		function Parent3(){
			this.name = "parent3";
			this.play = [1,2,3];
		 }
		 function Child3(){
			 Parent3.call(this);
			 this.type = "child3";
		 }
		 Child3.prototype = Object.create(Parent3.prototype);
		 Child3.prototype.constructor = Child3;
     
     9.当new Foo()时发生了什么
		 1.创建了一个新对象
		 2.将this指向这个新对象
		 3.执行构造函数里面的代码
		 4.返回新对象（this）
		参考《JS高程》6.6.2
     10.你做过哪些性能优化
		雪碧图，移动端响应式图片，静态资源CDN，减少Dom操作（事件代理、fragment），压缩JS和CSS、HTML等，DNS预解析
     11.浏览器渲染原理
         HTML被解析成DOM Tree，CSS被解析成CSS Rule Tree
         把DOM Tree和CSS Rule Tree经过整合生成Render Tree（布局阶段）
         元素按照算出来的规则，把元素放到它该出现的位置，通过显卡画到屏幕上
     
     12.前端路由的原理
		 什么是路由？路由是根据不同的 url 地址展示不同的内容或页面
		 使用场景？前端路由更多用在单页应用上, 也就是SPA, 因为单页应用, 基本上都是前后端分离的, 后端自然也就不会给前端提供路由。
		 
		 前端的路由和后端的路由在实现技术上不一样，但是原理都是一样的。在 HTML5 的 history API 出现之前，前端的路由都是通过 hash 来实现的，hash 能兼容低版本的浏览器。
		 
		 两种实现前端路由的方式
		 HTML5 History两个新增的API：history.pushState 和 history.replaceState，两个 API 都会操作浏览器的历史记录，而不会引起页面的刷新。
		 
		 Hash就是url 中看到 # ,需要一个根据监听哈希变化触发的事件( hashchange) 事件。用 window.location 处理哈希的改变时不会重新渲染页面，而是当作新页面加到历史记录中，这样跳转页面就可以在 hashchange 事件中注册 ajax 从而改变页面内容。
		 
		 优点
		 从性能和用户体验的层面来比较的话，后端路由每次访问一个新页面的时候都要向服务器发送请求，然后服务器再响应请求，这个过程肯定会有延迟。而前端路由在访问一个新页面的时候仅仅是变换了一下路径而已，没有了网络延迟，对于用户体验来说会有相当大的提升。
		 
		 缺点
		 使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存。
     13.Restful API是什么
     
         Restful的意思就是表现层状态转化。
     
         “表现层”其实指的是”资源”（Resources）的”表现层”，把”资源”具体呈现出来的形式，叫做它的”表现层”（Representation）。
     
         ”资源”，就是网络上的一个实体，是网络上的一个具体信息。它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在，每一个URI代表一种资源。
     
         如果客户端想要操作服务器，必须通过某种手段，让服务器端发生”状态转化”（State Transfer）。而这种转化是建立在表现层之上的，所以就是”表现层状态转化”。
     
         Restful就是客户端和服务器之间，传递这种资源的某种表现层
     
         客户端通过四个HTTP动词，对服务器端资源进行操作，实现”表现层状态转化”
     
		Restful API就是符合Restful架构的API设计。
     
		Restful API一些具体实践：
         应该尽量将API部署在专用域名之下。如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。
         应该将API的版本号放入URL。
         对于资源的具体操作类型，由HTTP动词表示
         如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果
         如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名
     
     14.script标签的defer、async的区别
		defer是在HTML解析完之后才会执行，如果是多个，按照加载的顺序依次执行
		async是在加载完成后立即执行，如果是多个，执行顺序和加载顺序无关
     15.同源与跨域
     
		什么是同源策略？
		 限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。
		 一个源指的是主机名、协议和端口号的组合，必须相同
     
		 跨域通信的几种方式
			 JSONP
			 Hash
			 postMessage
			 WebSocket
			 CORS
		 
		 JSONP原理
		 基本原理：利用script标签的异步加载特性实现
		 给服务端传一个回调函数，服务器返回一个传递过去的回调函数名称的JS代码
			 更多请查看：《前后端通信类知识》
     
     16.原型与闭包相关问题
		 原型是什么
		 原型就是一个普通的对象，每个对象都有一个原型（Object除外），原型能存储我们的方法，构造函数创建出来的实例对象能够引用原型中的方法。
		 查看原型
		 以前一般使用对象的__proto__属性，ES6推出后，推荐用Object.getPrototypeOf()方法来获取对象的原型
		 
		 闭包是什么？
		 专业说法：当一个内部函数被其外部函数之外的变量引用时，就形成了一个闭包。
		 
		 还可以这么理解：
		 闭包就是一个具有封闭功能与包裹功能的结构，是为了实现具有私有访问空间的函数的，函数可以构成闭包，因为函数内部定义的数据函数外部无法访问，即函数具有封闭性；函数可以封装代码即具有包裹性，所以函数可以构成闭包。
		 创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量
		 闭包的特性
		 闭包有三个特性：
			 函数嵌套函数
			 函数内部可以引用外部的参数和变量
			 参数和变量不会被垃圾回收机制回收
		 
		 闭包有什么用，使用场景
		 当我们需要在模块中定义一些变量，并希望这些变量一直保存在内存中但又不会“污染”全局的变量时，就可以用闭包来定义这个模块。
		 
		 闭包的缺点
		 闭包的缺点就是常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。
		 
		 函数套函数就是闭包吗？不是！，当一个内部函数被其外部函数之外的变量引用时，才会形成了一个闭包。
     
     
     17.如何进行错误监控
		 前端错误的分类
			 即时运行错误（代码错误）
			 资源加载错误
		 
		 错误的捕获方式
			 即时运行错误的捕获方式：
			 
				 try…catch
			 
				 window.onerror
			 
			 资源加载错误：
			 
				 object.onerror（如img,script）
			 
				 performance.getEntries()
			 
				 Error事件捕获
			 
				 延伸：跨域的js运行错误可以捕获吗，错误提示什么，应该怎么处理？
				 可以。
				 Script error
				 1.在script标签增加crossorigin属性
				 2.设置js资源响应头Access-Control-Allow-Orgin:*
		 
		 上报错误的基本原理
			 采用Ajax通信方式上报
			 利用Image对象上报
     18.DOM事件类
		 DOM事件的级别
			 DOM0，element.onclick = function(){}
			 DOM2，element.addEventListener(‘click’, function(){}, false);
		 
		 DOM事件模型是什么：指的是冒泡和捕获
		 DOM事件流是什么：捕获阶段 -> 目标阶段 -> 冒泡阶段
		 描述DOM事件捕获的具体流程
		 window –> document –> documentElement(html标签) –> body –> …. –> 目标对象
		 Event对象常见应用
			 event.preventDefault()，阻止默认行为
			 event.stopPropagation()，阻止事件冒泡
			 event.stopImmediatePropagation()，阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上，这个方法不接受任何参数。
			 event.currentTarget，返回绑定事件的元素
			 event.target，返回触发事件的元素
     
		 如何自定义事件
			 Event，不能传递参数
			 var eve = new Event('自定义事件名');
			 ev.addEventListener('自定义事件名', function(){
				console.log('自定义事件')
			 });
			 ev.dispatchEvent(eve);
		 
			CustomEvent，还可以指定参数
     19.本地起了一个http server，为什么只能在同一个WIFI(局域网)上访问？
		你没有公网IP当然就不能被外网访问了。常见的WIFI情况下，一般的ip会是~192.168.0.x·这样的，只是对局域网(同WIFI下)可见，但是外网是访问不了的。
     20.回流和重绘
		参考《如何写出高性能DOM？》
     21.数组去重的方法
		参考：《JavaScript数组去重》
     22.深拷贝与浅拷贝
		浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。
		实现浅拷贝
			 var obj1 = { a: 10, b: 20, c: 30 };
			 var obj2 = obj1;
			 obj2.b = 100;
			 console.log(obj1);
			 // { a: 10, b: 100, c: 30 } <-- b 被改到了
			 console.log(obj2);
			 // { a: 10, b: 100, c: 30 }
     
		实现深拷贝
			 var obj1 = { a: 10, b: 20, c: 30 };
			 var obj2 = { a: obj1.a, b: obj1.b, c: obj1.c };
			 obj2.b = 100;
			 console.log(obj1);
			 // { a: 10, b: 20, c: 30 } <-- b 沒被改到
			 console.log(obj2);
			 // { a: 10, b: 100, c: 30 }
     
		 深拷贝实现方式
			 手动复制方式，如上面的代码，缺点就是
			 Object.assign，ES6 的新函数，可以帮助我们达成跟上面一样的功能。
			 var obj1 = { a: 10, b: 20, c: 30 };
			 var obj2 = Object.assign({}, obj1);
			 obj2.b = 100;
			 console.log(obj1);
			 // { a: 10, b: 20, c: 30 } <-- 沒被改到
			 console.log(obj2);
			 // { a: 10, b: 100, c: 30 }
     
         转成 JSON 再转回来
			用JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象。
			缺点：只有可以转成JSON格式的对象才可以这样用，像function没办法转成JSON。
     
         jquery，有提供一个$.extend可以用来做 Deep Copy。
     
         lodash，也有提供_.cloneDeep用来做 Deep Copy。
     
         递归实现深拷贝
			 function clone( o ) {
				 var temp = {};
				 for( var k in o ) {
					 if( typeof o[ k ] == 'object' ){
						temp[ k ] = clone( o[ k ] );
					 } else {
						temp[ k ] = o[ k ];
					 }
				 }
				return temp;
			 }
     
     23.如何快速合并雪碧图
		Gulp：gulp-css-spriter
		webpack：optimize-css-assets-webpack-plugin
		 Go！Png
		 在线工具
     24.代码优化基本方法
		 减少HTTP请求
			 HTML优化：
				 使用语义化标签
				 减少iframe：iframe是SEO的大忌，iframe有好处也有弊端
				 避免重定向
			 
			 CSS优化：
				 布局代码写前面
				 删除空样式
				 不滥用浮动，字体，需要加载的网络字体根据网站需求再添加
				 选择器性能优化
				 避免使用表达式，避免用id写样式
			 
			 js优化：
				 压缩
				 减少重复代码
			 
			 图片优化：
				 使用WebP
				 图片合并，CSS sprite技术
		 
		 减少DOM操作
			 缓存已经访问过的元素
			 “离线”更新节点, 再将它们添加到树中
			 避免使用 JavaScript 输出页面布局–应该是 CSS 的事儿
		 
		 使用JSON格式来进行数据交换
		 使用CDN加速
		 使用HTTP缓存：添加 Expires 或 Cache-Control 信息头
		 使用DNS预解析
			 Chrome内置了DNS Prefetching技术, Firefox 3.5 也引入了这一特性，由于Chrome和Firefox 3.5本身对DNS预解析做了相应优化设置，所以设置DNS预解析的不良影响之一就是可能会降低Google Chrome浏览器及火狐Firefox 3.5浏览器的用户体验。
			 预解析的实现：
				 用meta信息来告知浏览器, 当前页面要做DNS预解析:<meta http-equiv="x-dns-prefetch-control" content="on" />
				 在页面header中使用link标签来强制对DNS预解析: <link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
     
     25.HTTPS的握手过程
         浏览器将自己支持的一套加密规则发送给服务器。
         服务器从中选出一组加密算法与HASH算法，并将自己的身份信息以证书的形式发回给浏览器。证书里面包含了网站地址，加密公钥，以及证书的颁发机构等信息。
         浏览器获得网站证书之后浏览器要做以下工作：
             验证证书的合法
             如果证书受信任，或者是用户接受了不受信的证书，浏览器会生成一串随机数的密码，并用证书中提供的公钥加密。
             使用约定好的HASH算法计算握手消息，并使用生成的随机数对消息进行加密，最后将之前生成的所有信息发送给服务器
     
         网站接收浏览器发来的数据之后要做以下的操作：
             使用自己的私钥将信息解密取出密码，使用密码解密浏览器发来的握手消息，并验证HASH是否与浏览器发来的一致。
             使用密码加密一段握手消息，发送给浏览器。
     
         浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，此时握手过程结束，之后所有的通信数据将由之前浏览器生成的随机密码并利用对称加密算法进行加密。
     
     26.BFC相关问题
		BFC(Block formatting context)直译为”块级格式化上下文”。它是一个独立的渲染区域，只有 Block-level box 参 与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。
		 BFC的渲染规则
			 BFC这个元素的垂直方向的边距会发生重叠
			 BFC的区域不会与浮动元素的box重叠（清除浮动原理）
			 BFC在页面上是一个独立的容器，外面的元素不会影响它里面的元素，反过来它里面的元素也不会影响外面的元素
			 计算BFC的高度的时候，浮动元素也会参与计算
		 
		 如何创建BFC？
			 overflow属性不为visible
			 float属性不为none
			 position属性为absolute或fixed
			 display属性为inline-block、table-cell、table-caption、flex、inline-flex
		 
		 BFC的使用场景
			解决边距重叠的问题
     27.响应式图片
		 1.JS或者服务端硬编码，resize事件，判断屏幕大小加载不同的图片
		 2.img srcset 方法
		 3.picture标签 -> source
		 4.svg
		 5.第三方库polyfill
     28.判断一个变量是否是数组
		var a = [];
     
		// 1.基于instanceof 
		a instanceof Array;
     
		// 2.基于constructor 
		a.constructor === Array;
		 
		 // 3.基于Object.prototype.isPrototypeOf 
		 Array.prototype.isPrototypeOf(a);
		 
		 // 4.基于getPrototypeOf 
		 Object.getPrototypeOf(a) === Array.prototype;
		 
		 // 5.基于Object.prototype.toString 
		 Object.prototype.toString.apply(a) === '[object Array]';//优先使用这个
		 
		 // 6.Array.isArray
		 Array.isArray([]); // true
		 
		 
		 以上，除了Object.prototype.toString外，其它方法都不能正确判断变量的类型。
     29.UTF-8和Unicode的区别
		 UTF-8就是在互联网上使用最广的一种unicode的实现方式。
		 Unicode的出现是为了统一地区性文字编码方案，为解决unicode如何在网络上传输的问题，于是面向传输的众多 UTF（UCS Transfer Format）标准出现了，UTF-8就是每次8个位传输数据，而UTF-16就是每次16个位。
		 ASCII –> 地区性编码（GBK） –> Unicode –> UTF-8
  ~~~
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





对微服务有什么了解？
从数组中找出三数之和为n
对设计有研究吗
红色适合搭配什么颜色，忌讳搭配什么颜色
vue和react的区别
react fiber架构的理解
实现一个css框架你有什么思路吗
二分查找的时间复杂度怎么求？
看过算法导论吗
对图有了解吗
http建立连接过程，为什么不是四次或两次握手
对未来的规划
以后对全栈有兴趣吗
前端未来规划？
3年之后的规划？
有明确的想从事的路线吗？to B？to C？全栈？
node主要用来解决什么问题？
node做BFF的优点是什么？
对项目监控这块有什么了解吗？
聊一聊docker？
当时什么从事前端？
整个学习历程是什么？
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
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
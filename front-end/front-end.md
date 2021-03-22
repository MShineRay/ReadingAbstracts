# front-end
- [大公司里怎样开发和部署前端代码？]( https://www.zhihu.com/question/20790576 )
- Vue与React的区别
  - [Vue与React的区别](https://segmentfault.com/a/1190000018742160)
  - [vue框架和react框架的区别是什么](https://m.php.cn/article/464234.html)
    ~~~
    模板和jsx、状态管理、组件嵌套条件渲染、列表渲染、组件间的通信传值、路由管理
    1、vue中的数据由data属性在Vue对象中进行管理，react中的数据由state属性管理；
    2、vue通过slot插槽进行嵌套传递，react通过“props.children”的方式将标签内的部分传递给子组件。
    ~~~
- 
~~~
1.PC、H5、Nodejs、小程序、移动端，掌握大前端所有技术栈
2.能够实现类Element-ui组件库，设计Vue组件
3.掌握Vue/React源码，MVVM库原理
4.了解Koa2源码，定制MVC开发框架
5.前端监控、性能优化、安全
6.自动化测试、发布、运维
~~~
- [2019前端工程师自检清单与思考]( https://mp.weixin.qq.com/s/qJzuIjDnsSKbTDwXkRqNZg )
- [淘宝首页兜底容灾方案]( https://mp.weixin.qq.com/s/mRsg3LlK5Dfja4qmnwUPZQ )
- [从软件工程角度看大前端技术栈]( https://mp.weixin.qq.com/s/gAYXADZAE6ciMM7ioM3U4A )
- [H5 与 Native 交互之 JSBridge 技术]( https://mp.weixin.qq.com/s/kYQXy1EFa4TdnIxGVE9SLQ )
- [腾讯祭出大招VasSonic，让你的H5页面首屏秒开！]( https://mp.weixin.qq.com/s?__biz=MTEwNTM0ODI0MQ==&mid=2653434532&idx=1&sn=ff3bfd9f72407188f45a6cffa818b4fc&chksm=7201235a4576aa4ce904038c219740a3fc386dac6fd5faf134a772d238b69a9a0989a6fb103b&mpshare=1&srcid=0819P9FGjlysIWatHJC3ghSN&scene=21#wechat_redirect )
- [前端小团队如何培养技术积累？]( https://mp.weixin.qq.com/s?__biz=MzIyMjYyMzg3MA==&mid=2247484373&idx=1&sn=3f651b4555db708afc317aed70ff6da7&chksm=e82be2c4df5c6bd258b40a2d52b4ea264375db72063bd9ed4354fbd0512150a697a4d9a78c7b&mpshare=1&scene=21&srcid=0827jbaC0Dlb1B1zqk3IQiDu#wechat_redirect )
  ~~~
  全栈（Full Stack）
    在很多需要快速迭代实现原型的场合，这样的能力模型是很合适的。问题在于在一个系统的开发中，多数情况下团队成员负责开发的是独立的模块。
    而按照信息隐藏的理念，而只有在代码模块采用定义良好的接口来封装，模块的内部结构对外部不可见，复杂度被屏蔽而非暴露在他人模块内部结构前的时候，
    开发的效率才是最高的，也并不是团队中所有成员都需要了解系统整体的技术细节。并且，前端本身也是对开发职能分工的细化，在后端有成熟稳定团队的前提下，
    前端在团队层面按照 Full Stack 的方向积累技术，在投入和产出上未必是最优的。当然，这和许多大厂「只招全栈」的理念并不矛盾，
    毕竟在个人开发者层面的全栈所真正要求的并不是杂而全，而是高效地解决各类问题的学习能力，以及对技术更加全面的深入。

  全生命周期（Full Life Cycle Engineer）
    这个理念实际上鼓励的是让前端同学去更全面地参与产品的生命周期，并在生命周期的各个阶段去更好地支持业务。这个情景下从项目的原型中前端就会以提供
    UI 组件的方式参与，在实现了具体需求后也会参与到测试和发布的流程中，而服务端渲染等特性也要求前端去支持起一定的运维职责。
    
    维护 C 端产品的团队，可能更需要性能优化、监测告警方向的轮子，而开发 B 端中后台产品的团队，对状态管理、统一组件库一类的轮子需求度则会更高。
    在深入业务的过程中，几乎总能找到特定的场景能够抽取出特定的复用模块，或找到适合针对性优化的地方，这其实就相当于技术积累的起点了：
    在业务驱动下开始造（甚至发明）团队内部的轮子。
  
  ~~~
- [web前端资源文件的部署和优化]( https://mp.weixin.qq.com/s/dfKSwZg6VLAshFChGC452w )
  ~~~
  雅虎的14条优化原则
    尽可能的减少 HTTP 的请求数 content
    
    使用 CDN（Content Delivery Network） server
    
    添加 Expires 头(或者 Cache-control ) server
    
    Gzip 组件 server
    
    将 CSS 样式放在页面的上方 css
    
    将脚本移动到底部（包括内联的） javascript
    
    避免使用 CSS 中的 Expressions css
    
    将 JavaScript 和 CSS 独立成外部文件 javascript css
    
    减少 DNS 查询 content
    
    压缩 JavaScript 和 CSS (包括内联的) javascript css
    
    避免重定向 server
    
    移除重复的脚本 javascript
    
    配置实体标签（ETags） css
    
    使 AJAX 缓存
  
  
  优化方向	优化手段
  请求数量	合并脚本和样式表，CSS Sprites，拆分初始化负载，划分主域，字体图标，雪碧图片等
  请求带宽	开启服务器GZip，精简JavaScript，移除重复脚本，图像优化（包括图片大小kb）
  缓存利用	使用CDN，使用外部JavaScript和CSS，添加Expires头，减少DNS查找，配置ETag，使AjaX可缓存
  页面结构	将样式表放在顶部，将脚本放在底部，尽早刷新文档的输出
  代码校验	避免CSS表达式，避免重定向
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
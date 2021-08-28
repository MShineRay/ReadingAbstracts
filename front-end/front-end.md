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
- [浅谈流量劫持与防治 ](https://mp.weixin.qq.com/s/tTfCLt6-Yq8mXyj5R5xfXw  )
- [如何管理好10万行代码的前端单页面应用 ]( https://mp.weixin.qq.com/s/IpzOwjOcjyAWNnNzoLlTCQ )
- [SQL注入 ]( https://mp.weixin.qq.com/s/gcGotCuCgK044cD7QhE_pg )
- [XSS 跨站脚本攻击 ](https://mp.weixin.qq.com/s/V09sXxP-J23vKtNUrQccBg )
- [web中的性能指标 ]( https://mp.weixin.qq.com/s/Sjo8cT0xADCwBeL_jnNDZw )
- [把前端监控做到极致]( https://mp.weixin.qq.com/s/AZB2jnmgz8L-LJNXQoaYuA)
- [更快地构建 DOM: 使用预解析async, defer 以及 preload ](  https://mp.weixin.qq.com/s/EprLQzV4i6PhnGjb8GFXTw )
- [我们是如何做好前端工程化和静态资源管理 ]( https://mp.weixin.qq.com/s/PnXj7ZhJK__ycsqVbbOQfw )
- [浅谈前后端路由与前后端渲染]( https://mp.weixin.qq.com/s/wQJAY58ArUOfQyGCJiFS4A )
- [前端工程师为什么要学习编译原理？]( https://mp.weixin.qq.com/s/bO-7CS0J0SAUQx7DKVh1iQ )
- [什么是函数式编程？]( https://mp.weixin.qq.com/s/dWBnXbZvw6avB4ibXVKMgg)
- [前端开发-领域驱动设计]( https://mp.weixin.qq.com/s/y0_aNlD0ILzWpgY0H7-K-w)
- [未来的前端工程师]( https://mp.weixin.qq.com/s/o7WyaZhL5NHDRzuHOnS3lQ)
- [前端数据采集与分析]( https://mp.weixin.qq.com/s/1_Gp0amnou1PS4PevlcVkA )
- 小网站尽量不要托管在大型云服务商那里，流量费用实在吃不消。如果不得不放在上面，那就必须设法降低或转移流量，比如使用 CDN。
  引申：前端可以优化，将公共资源库（js、css等）使用cdn方式引入
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [用户登录状态 验证权限的时代变迁 ]( https://mp.weixin.qq.com/s/w_683JT3DxsNXDyTNWy1AA )
- ~~~
- Cookie\Session\Token Based
- ~~~
- [](https://mp.weixin.qq.com/s/gJeIM5V3QQItkdlOYTeIuw)
  ~~~
  “开闭原则”
	软件系统应当对扩展开放，对修改封闭
	开闭原则就是：软件系统的核心逻辑都不应该轻易改变，否则会破坏系统的稳定性和增加测试成本。我们应当建立合适的抽象并统一接口，当业务需要扩展时，我们可以通过增加实体类来完成。
	
	“开闭原则”在前端框架中的应用： Ant Design 组件库中的 Form 表单组件。
	和其它组件不同，Form 组件并没有具体的形态，它更像是一个容器，提供了接入的标准，并提供了校验、表单提交等功能。
	
	Single Responsibility Principle 单一责任原则
	
	The Open Closed Principle 开放封闭原则
	
	The Liskov Substitution Principle 里氏替换原则
	
	The Dependency Inversion Principle 依赖倒置原则
	
	The Interface Segregation Principle 接口分离原则
  “函数式编程”
	函数为“一等公民”
	
	模块化、组合
	
	引用透明避免状态改变
	
	避免共享状态
	
	分别实现数组所有元素相加、相乘、相与:
		var ops = { 
		  "plus": (x,y)=>x+y,
		  "mul" : (x,y)=>x*y,
		  "and" : (x,y)=>x&y
		}
		
		function operation(op, array) {
		  return array.slice(1).reduce(ops[op], array[0]);
		} 
		operation("plus", array);
		operation("mul",  array);
		operation("and",  array);
		
		
	React 其实是应用数据对UI的一种映射，不同的数据会映射出不同样式的 UI 界面，我们可以得出如下的表达式：
		$UI = React(data)$
	React 的本质其实是一种函数，并且还是符合 FP 要求的“引用透明”函数。所谓“引用透明”就是指函数的输出仅依赖函数参数，不受任何外部环境影响。这样的函数可测试性强，也非常容易进行组合。
	在 React 的体系下，任何组件都可由一个个更小的组件构成，每个组件都只关心自己的输入，他们不断地接受新的数据并输出对应的新的UI界面。React 框架中常用的“高阶组件”可以看作引用透明”函数的组合模式。
	在具体业务中我们通常还需要权衡 React 组件的复用性和开发体验，如果组件被拆分的过于细，固然复用性会提升，但文件数量会增加，对应的文档和沟通成本也会增加，这也是 FP 在实践过程中经常遭人诟病的点，即复用性提升后带来的额外开发成本。
  
  “消息机制”
	使用消息机制最大的好处在于可以做到业务模块间安全解耦，模块间通过发送消息的方式进行协作
  ~~~
- [2019 - Web开发技术指南和趋势]( https://mp.weixin.qq.com/s/XY36_YmpG-AfNPGp4RLmlQ )
- [前端与编译原理：用 JS 写一个 JS 解释器]( https://mp.weixin.qq.com/s/-N1TlfFsk_Ahxn5NGKSpdw )
  ~~~
  JS编译器有 babylon， acorn
  ~~~
- (已整理)[从不同角度看前端]( https://mp.weixin.qq.com/s/yosssjBOpLEy1rbjUTeQAQ )
  ~~~
  前端领域：
    框架和组件库
    工程体系：构建、发布、持续集成、容器管理
    NodeJS实现的框架、中间件、服务
    围绕前后端协作展开的一系列探索：BaaS、BFF、函数计算、GraphQL等
    跨端实践
  
  前端有一套东西，完整的组件化、构建、发布、依赖管理
  
  
  前端主导的流程
    让后端退化为配置，借助 BaaS，FaaS 这样的基础架构，舍弃后端的构建与发布环节
    后端成为了一种流程无感的环节，前端是整个项目的集成方，后端成为了一种配置化的东西，成为了前端体系下的附属。
    这种模式是否能行得通，最大的先决条件就是后端接口是否稳定。在互联网企业中，尤其是领域模型关联关系较少的情况下，
    有不少系统在往这个方向走。
      轻量业务：完全 BaaS
      较重的业务：通过 Faas 调用微服务

  前后端合一的研发模式
    根据后端的服务生成前端的调用接口，并且附带 TypeScript 类型描述
    根据后端的单元测试生成前端的 mock 数据
    前后端合一的工程中，最大优势就是后端接口的变更一定会自动传导到前端，服务接口字段变更会导致：
      前端类型校验出错
      前端的单元测试出错
  
  后端主导的流程
    尽可能地把视图弱化，让它成为后端模型的附属物。
    视图成为了领域模型的附属物，当领域模型产生变动的时候，视图自然跟着变动，即使是视图之间的联动关系，也是经由领域模型之间的关系控制的。
    前端成为了一种流程无感的环节，后端是整个项目的集成方，前端成为了一种配置化的东西。这条路径的先决条件是前端的模式相对固定，可穷举，
    不会存在太多的个性化交互。通常，会有一些企业软件的研发过程采用这种模式。这种模式对人的需求是领域建模能力较强。
  ~~~

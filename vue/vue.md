# vue
- 双向绑定
  ~~~
  vue 实现数据双向绑定主要是：采用数据劫持结合“发布者 - 订阅者”模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter、 getter，
  在数据变动时发布消息给订阅者，触发相应监听回调。
  
  解释单向数据流和双向数据绑定
    单向数据流：
      数据流是单向的。数据流动方向可以跟踪，流动单一，追查问题的时候可以更快捷。
      缺点就是写起来不太方便。要使 UI 发生变更就必须创建各种 action 来维护对应的 state。
  
    双向数据绑定：
      数据之间是相通的，将数据变更的操作隐藏在框架内部。
      优点是在表单交互较多的场景下，会简化大量与业务无关的代码。
      缺点就是无法追踪局部状态的变化，增加了出错时 debug 的难度。
  
  
  对比 jQuery ，Vue 有什么不同
    jQuery 专注视图层，通过操作 DOM 去实现页面的一些逻辑渲染； Vue 专注于数据层，通过数据的双向绑定，
    最终表现在 DOM 层面，减少了 DOM 操作。
    Vue 使用了组件化思想，使得项目子集职责清晰，提高了开发效率，方便重复利用，便于协同开发。
  
  17. Vue 中 key 的作用
    key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 
    会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 
    的变化重新排列元素顺序，并且会移除 key 不存在的元素。
    
    有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。
    
    具体参考官方API(https://cn.vuejs.org/v2/api/#key)。
  
  18. Vue 的核心是什么
    数据驱动、组件系统。
  
  19. Vue 等单页面应用的优缺点
      优点
        良好的交互体验
        良好的前后端工作分离模式
        减轻服务器压力
      缺点
        SEO 难度较高
        前进、后退管理
        初次加载耗时多
  ~~~
### vue
- [面试官：Vue3.0的设计目标是什么？做了哪些优化?]( https://mp.weixin.qq.com/s/Qn9lJD7wlw8z9hNle4XJOQ )
    ~~~
    - 数据劫持
        - 在vue2中，数据劫持是通过Object.defineProperty，这个 API 有一些缺陷，并不能检测对象属性的添加和删除。
          尽管Vue为了解决这个问题提供了 set和delete实例方法，但是对于用户来说，还是增加了一定的心智负担。同时在面对嵌套层级比较深的情况下，就存在性能问题
        - vue3是通过proxy监听整个对象，那么对于删除还是监听当然也能监听到
          同时Proxy 并不能监听到内部深层次的对象变化，而 Vue3 的处理方式是在getter 中去递归响应式，这样的好处是真正访问到的内部对象才会变成响应式，而不是无脑递归
    - composition API
    - VUE3是基于typescipt编写的，可以享受到自动的类型定义提示
    - 引入tree-shaking，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了
    ~~~
- [Scoped Style解决方案之deep深入理解]( https://mp.weixin.qq.com/s/f-sLKqlY-qzXYdVkJSTswQ )
    ~~~
    - deep的主要作用是「css样式选择器作用域」的提升
    - 错误的嵌套deep
        「嵌套deep」的错误用法而导致的移动端真机样式失效问题
         部分样式在本地使用谷歌浏览的手机模拟窗口调试时正常，但是真机上就完全样式不生效
    - [说一说VUE中的/deep/用法]( https://zhuanlan.zhihu.com/p/77112977 )
    ~~~
- [面试官：Vue3有了解过吗？能说说跟Vue2的区别吗？]( https://mp.weixin.qq.com/s/f2Ak88PtGbEnN5cVjD3ZXw )
    ~~~
    framents
    在 Vue3.x 中，组件现在支持有多个根节点
    
    ~~~
- [1.1万字从零解读Vue3.0源码响应式系统]( https://mp.weixin.qq.com/s/egPjrURLj8go9HJHXykkSA )
- [34条我能告诉你的Vue之实操篇]( https://mp.weixin.qq.com/s/MchD5YiXvuIjhvkj86hTlg )
- [Vue不同编译输出文件的区别]( https://mp.weixin.qq.com/s/K4w4AcX3vHnST0JDfKc3Aw )
    ~~~
    rollup是默认使用ES Module规范而非CommonJS,如果要引入只遵循了CommonJs规范的第三包的话，还需要使用相关的插件，插件会帮你将CommonJs规范的代码转为ES Module
    
    rollup提供了多种文件输出类型：
      iife: 立即执行函数
      cjs: 遵循CommonJs Module规范的文件输出
      amd: 遵循AMD Module规范的文件输出
      umd: 支持外链/CommonJs Module/AMD Module规范的文件输出
      es: 将多个遵循ES6 Module的文件编译成1个ES6 Module
    ~~~
- [Vue3.0终终终于要来了！！]( https://mp.weixin.qq.com/s/qJI_RhI4w-p3VQVo6eVZ5Q )
    slot
- [面试之加分项vue]( https://mp.weixin.qq.com/s/dosZKhcSsroW8AU7mpflzg )
- [前端 Vue.js 快速开发微信小程序，基于 Vue 的小程序开发框架：Megalo发布！]( https://mp.weixin.qq.com/s/fCWKniSNX4GFSPA6rO7Dtw )
- 用jsx写vue组件
  ~~~
  template，
    优势：简洁
    劣势：模版调试麻烦
  
  jsx：
    方便调试，但可读性差
  ~~~
- [实测Vue SSR的渲染性能：避开20倍耗时]( https://mp.weixin.qq.com/s/EaJDaORMlmHZaaw3OVUISg )
  ~~~
  为了提高首屏渲染速度，wns缓存+直出 是必不可少的。
    如果没有 server-side-render 方案，直出需要专门给写一份首屏非Vue语法的模板。
  
  当前常用的模板渲染方案可以归结成两类：
  a类：string-based （基于字符串拼接）
  b类：virtual-dom-based（基于虚拟dom对象）
  
  ~~~
- [面试官：Vue3.0 性能提升主要是通过哪几方面体现的？]( https://mp.weixin.qq.com/s/8NaPkJQUTF-T7MegVOLp2g )
  ~~~
  Vue3在编译阶段，做了进一步优化。主要有如下：
  diff算法优化
      vue3在diff算法中相比vue2增加了静态标记
      关于这个静态标记，其作用是为了会发生变化的地方添加一个flag标记，下次发生变化的时候直接找该地方进行比较
  静态提升
      Vue3中对不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用
      这样就免去了重复的创建节点，大型应用会受益于这个改动，免去了重复的创建操作，优化了运行时候的内存占用
  事件监听缓存
  SSR优化
  ~~~
- [Vue.js 父子组件通信的十种方式]( https://mp.weixin.qq.com/s/LQoPWxOrLz0al4piQ6rxUQ )
    ~~~
    Prop（常用）
        通过 Prop 向子组件传递数据
         Vue 的设计理念之单向数据流
    
    $emit (组件封装用的较多)
    
    .sync语法糖 （较少）
        它会被扩展为一个自动更新父组件属性的 v-on 监听器。
        说白了就是让我们手动进行更新父组件中的值了，从而使数据改动来源更加的明显。
        下面引入自官方的一段话：
            在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。
            不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。
        
        <text-document  v-bind:title="doc.title"  v-on:update:title="doc.title = $event"></title>
        精简为：
        <text-document v-bind:title.sync="doc.title"></text-document>
        
    $attrs 和 $listeners (组件封装用的较多)
        https://cn.vuejs.org/v2/api/#vm-attrs
        https://cn.vuejs.org/v2/guide/components-props.html#%E7%A6%81%E7%94%A8-Attribute-%E7%BB%A7%E6%89%BF
        
    provide 和 inject （高阶组件/组件库用的较多）
        https://cn.vuejs.org/v2/api/#provide-inject
        
    EventBus
        https://cn.vuejs.org/v2/guide/migration.html#dispatch-%E5%92%8C-broadcast-%E6%9B%BF%E6%8D%A2
        $emit，$on，$off 分别来分发、监听、取消监听事件
        
    Vuex
    
    $parent\$children
        https://cn.vuejs.org/v2/api/#parent
    
    $root
        https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E7%88%B6%E7%BA%A7%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B
    ~~~
- [使用 Vue与React 创建同一款 App，差别究竟有多大？]( https://mp.weixin.qq.com/s/JQU22X17xW0zGbgWs9lL3g )
- [[译]Vue 最黑暗的一天]( https://mp.weixin.qq.com/s/x2NLAJ2Iv8rjiqrrxGePSw )（已整理）
  ~~~
  setup函数的优点：
  很容易把相关的东西放到一起；（更聚合）
  通过查看 setup 函数的返回值，很容易地知道模板中可以获取什么变量；（利于维护）
  避免暴露模板不需要获取的内部状态（touched）。（利于维护）
  新语法有Typescript 支持，在 Vue 2.x 基于对象的语法中很难实现，轻易地把可重用的逻辑提取为可重用的函数。（更复用）
  ~~~
- [Vue源码解析之深度剖析computed属性]( https://mp.weixin.qq.com/s/7-SGo2k-JJxm-jply0gfDQ )(已整理至doc)
- (已整理)[【PPT】尤雨溪：State of Vue]( https://mp.weixin.qq.com/s/i9crL64Rywkk1tKyJqvtLg )
- (已整理)[尤雨溪 6 月 4 日的 Vue 技术分享]( https://mp.weixin.qq.com/s/EKKBg0K0YyA0S1G0deJj_Q )
- (已整理)[前端开发程序员选择Vue.js的5大理由]( https://mp.weixin.qq.com/s/oQhSfcZcjChMQnsz1DjrgQ )
- (已整理)[7个有用的Vue开发技巧]( https://mp.weixin.qq.com/s/oovvCa-Ld3iYyp5eWJGJng )
- (已整理)[Vue3.0的设计目标是什么？做了哪些优化?]( https://mp.weixin.qq.com/s/Bj2SRfS5cOuMSucquK3QrA )
- (已整理)[Vue.js 组件通信精髓归纳]( https://mp.weixin.qq.com/s/cLFsA160PdHyqblrTnxkOw )
- (已整理)[三招让你成为vue.js大师](  https://mp.weixin.qq.com/s/_jMmznzt8rRph1aEO0yAdQ )
- vue 知识点
  ~~~
  深入Vue组件设计与开发
  1. 组件设计理念
  2. 自定义组件的双向绑定
  3. 组件间通信机制
  4. 插槽的使用
  5. provide & inject API
  ~~~
- [深入 Vue 响应式原理，活捉一个 MVVM]( https://mp.weixin.qq.com/s/OzKwKeNG-BGPDIRJsgMnZg )
- [Vue 前端面试题]( https://mp.weixin.qq.com/s/PvRIx3jBG48R6qzgTt2lpQ )
- [Vue.js开源项目](https://github.com/Zulko/eagle.js )
	~~~
	
	~~~
- [Vue中mixin怎么理解]( https://mp.weixin.qq.com/s/pwESXATpHa9TcrasFujGlg )
  ~~~
  值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，
  取组件对象的键值对,Vue.extend() 也使用同样的策略进行合并。
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
- (已整理)[vue.js面试中常问知识点整理]( https://mp.weixin.qq.com/s/1j6pkj8AWOl-r3xQejZm7Q )
  ~~~
  对于MVVM的理解？
    MVVM 是 Model-View-ViewModel 的缩写。
    Model 代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。
    View 代表UI 组件，它负责将数据模型转化成UI 展现出来。
    ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。
    在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 
    因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
    ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，
    因此开发者只需关注业务逻辑，不需要手动操作DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
  二、Vue的生命周期
    beforeCreate（创建前），在数据观测和初始化事件还未开始
    created（创建后），完成数据观测，属性和方法的运算，初始化事件， $el 属性还没有显示出来
    beforeMount（载入前），在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。
    注意此时还没有挂载html到页面上。
    mounted（载入后），在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。
    完成模板中的html渲染到html页面中。此过程中进行ajax交互。
    beforeUpdate（更新前），在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
    updated（更新后），在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。
    然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
    beforeDestroy（销毁前），在实例销毁之前调用。实例仍然完全可用。
    destroyed（销毁后），在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。
    
    1、什么是vue生命周期？
    Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。
    
    2、vue生命周期的作用是什么？
    它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。
    
    3、vue生命周期总共有几个阶段？
    8个阶段：创建前/后、载入前/后、更新前/后、销毁前/销毁后。
    
    4、第一次页面加载会触发哪几个钩子？
    会触发下面这几个beforeCreate、created、beforeMount、mounted 。
    
    5、DOM 渲染在哪个周期中就已经完成？
    DOM 渲染在 mounted 中就已经完成了。
  三、 Vue实现数据双向绑定的原理：Object.defineProperty()
    vue实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()
    来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 
    对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty() 将它们转为 getter/setter。
    用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
    
    vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，
    通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；
    视图交互变化（input）—>数据model变更双向绑定效果。
    
    js实现简单的双向绑定：
      <body>
        <div id="app"> 
          <input type="text" id="txt"> 
          <p id="show"></p>
        </div>
      </body>
      <script type="text/javascript"> 
        var obj = {} 
        Object.defineProperty(obj, 'txt', { 
          get: function () { 
            return obj
          }, 
          set: function (newValue) { 
            document.getElementById('txt').value = newValue 
            document.getElementById('show').innerHTML = newValue 
          }) 
        document.addEventListener('keyup', function (e) { 
          obj.txt = e.target.value 
        })
      </script>
  五、Vue的路由实现：hash模式 和 history模式
    hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用 window.location.hash 读取。
    特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
    
    history模式：history采用HTML5的新特性；且提供了两个新方法： pushState()， replaceState()
    可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
  
  六、Vue与Angular以及React的区别？
    1、与AngularJS的区别
    相同点：都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览器。
    不同点：AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观；
          在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢；
          Vue.js使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。
    
    2、与React的区别
    相同点：React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，
          两者都需要编译后使用；
          中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数，可以让开发者定制化地去处理需求；
          都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载；在组件开发中都支持mixins的特性。
    不同点：React采用的Virtual DOM会对渲染出来的结果做脏检查；Vue.js在模板中提供了指令，过滤器等，可以非常方便，
          快捷地操作Virtual DOM。
  
  state：Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。
  
  $route和$router的区别
    $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
    而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等
  ~~~
- [ Vue 2.6]( https://mp.weixin.qq.com/s/CJNwgQteycseNmwGJzjPFw )
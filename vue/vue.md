# vue

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
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
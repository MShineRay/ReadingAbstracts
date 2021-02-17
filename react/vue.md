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
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )


### vuex
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )


### vue-router
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
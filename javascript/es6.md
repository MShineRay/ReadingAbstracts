# es6

- [近10000字的ES6语法知识点补充]( https://mp.weixin.qq.com/s/-xIdxWZKKSMQLHqo6cn87w )
- (已整理)[图解 Map、Reduce 和 Filter 数组方法]( https://mp.weixin.qq.com/s/gqag4xoKiu1THZfPEqnLFg )
    ~~~
  
    ~~~
- (已整理)[var let const的区别及使用场景](https://mp.weixin.qq.com/s/4KsWRzAFvH2MngLxJiCtZA  )
  ~~~
  首先3个都是js声明变量所用
  Var
    var 所声明的变量，作用域为该语句所在的函数内，且存在变量提升
    
    console.log(a) // 变量提升，var a 被提至所在作用域顶部， 所以这里输出的值为 undefined
    var a = 'ＪＳ每日一题'
    for (var i = 0; i <10; i++) {  
      setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
        console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
      }, 0);
    }
    
    10 ... 10 // 10个10
    
    console.log(i) // i 作用域全局 输出10
    后面声明的会覆盖之前声明的变量
    
    var a = 'JS'
    var a = 'JS每日一题' // JS每日一题
  
  Let
    let 所声明的变量，作用域为该语句的代码块内，不存在变量提升
    
    console.log(a) // 变量没有被提升， 输出 ReferenceError: a is not defined
    let a = 'JS每日一题'
    
    
    for (let i = 0; i <10; i++) {  
      setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
        console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
      }, 0);
    }
    
    1...10 // 1到10
    
    console.log(i) // i作用域for 块级内，输出 i is not defined
    不允许重复声明
    
    let a = 'JS每日一题'
    let a = 'JS' // 'a' has already been declared
  
  Const
    const 包含let 所有特性， 区别是const声明的变量是一个只读的不可修改的
    这里注意，const保证的不是所声明的值不得改动， 而是变量指向的内存不可改动
    代码示例
    
    const a = {
      content: 'JS每日一题'
    }
    
    a.content = 'JS'  // JS
    
    a = {
      content: 'JS' // 这里改变了内存， 所以报错 Assignment to constant variable
    }
  三句话总结
    使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象，后面的覆盖前面的
    使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升, 不能重复声明
    使用const声明的是常量，在后面出现的代码中不能再修改该常量的内存
  ~~~
- (已整理)[如何理解es6中的类？]( https://mp.weixin.qq.com/s/JjaLYzVva5VK6JPqgpVCPw )
  ~~~
  首先,JS作为一门非面向对象语言，在es6之前，并没有提供对类的支持，我们常用的做法是通过构造函数来模拟类的实现,
   通过将属性及方法定义在原型上共享给其实例

  简单实现:
    function JS(name) {
      this .name = name
    }
    
    JS.prototype.getName = function(){
    console.log(this .name)
    }
    
    const child = new JS('每日一题')
  ES6 中的Class
  es6中的class只是一个语法糖，class的写法只是让对象原型看起来更加清晰
  简单使用:
    class JS {
      constructor(name) {
        this.name = name
      }
    
      getName() {
        console.log(this .name)
      }
    }

    const child = new JS('每日一题')
  
  每个类中都有一个constructor方法，如果没有显示定义， 会默认添加一个空的constructor，
  等同于ES5中的构造函数, 类的所有方法都是定义在类的prototype属性上面，
  二者的主要区别在于Class必须使用new调用, ES5中构造函数不使用new也可以调用, 
  class 中新增静态方法(static)关键字, 静态方法不能被继承只有通过类本身来调用

  class JS {
    constructor(name) {
      this .name = name
    }
  
  
    static getName() {
      // static 方法只有类本身能调用，实例不能继承
      console.log(this.name)
    }
  }
  Extends 继承
  class 也可以通过extends 关键字实现继承

  代码示例:
    class JS {
      constructor(name) {
        this.name = name
      }
    
      getName() { 
        console.log(this.name)
      }
    }

    class Css extends Js {
      constructor() { 
        super();
      }
    }

    const child = new Css('JS每日一题')
    child.getName()// 'JS每日一题'
  
  extends 注意点
    使用extends 继承时，子类构造函数中必须调用super(), 代表调用父类的构造函数
    super虽然代码父类的constructor,但是返回的子类的实例
    super作为函数调用时，代表类的构造函数
    super作为对象调用时, 在普通方法中，指向父类的原型对象, 静态方法中指向父类
  ~~~
- (已整理)[如何理解es6中的Promise？]( https://mp.weixin.qq.com/s/piYDi6zYTDB3zy4C5NVGYA )
~~~
  js是单线程的，也就是说一次只能完成一个任务，为了解决这个问题，js将任务的执行模式分为两种， 同步和异步,
   在es5中我们处理异步只能通过的回调的方式进行处理，在多层异步中，回调会一层一层嵌套，也就是所谓的回调地狱，
   promise就是异步编程的一种解决方案

  Promise
    特点:
      对象的状态不受外界影响, promise对象代表一个异步操作，有三种状态pendding(进行中), 
      fulfilled(成功), rejected(失败)
      一旦状态改变，就不会再变, 状态的改变只有两种可能, pendding => fulfilled及pendding => rejected
    基本用法:
      const promise=new Promise(function(resolve,reject){
        // ... some code
        if(/* 异步操作成功 */){
          resolve(value);
          // 将状态从pendding变成fulfilled
        }else{
          reject(error);
          // 将状态从pendding变成rejected
        }
      });
    promise 生成实例后可以使用then方法接收resolved状态和rejected状态的回调函数

    promise.then(()=>{
      console.log('resolved')
    },()=>{
      console.log('rejected')
    })
    
    promise原型上具有catch方法， catch方法是rejection的别名， 用于指定发生错误时的回调函数

    promise.then(()=>{
      console.log('resolved')
      },
      ()=>{
        console.log('rejected')
      }).catch((err)=>{
        console.log('catch')
      })
    promise原型上具有finally方法，用于不管promise对象最后的状态如何，都会执行的操作

    promise.then(()=>{
      console.log('resolved')
    },()=>{
      console.log('rejected')
    }).finally((err)=>{
      console.log('end')
    })
  
  Promise.all
    Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

  简单使用:
    特点:
    参数都是promise实例，如果不是会调用promise.resolve方法将其转为promise实例
    p的奖态由传入的promise实例的状态决定
      promise实例状态都变成fulfilled,p状态为fulfilled
      promise实例状态一个变成rejected,p状态为rejected
  ~~~
- (已整理)[ 如何理解es6中的Proxy？]( https://mp.weixin.qq.com/s/kLSMpyPVJRpkpHqdDZQxBA )
  ~~~
  Proxy（代理） 定义
  可以理解为为目标对象架设一层拦截，外界对该对象的访问，都必须通过这层拦截
  示例:
    const obj = new
    Proxy({}, {
        get: (target, key, receiver) = >{
            return 'JS'
            console.log(`get $ {key}`)
        },
        set: (target, key, value, receiver) = >{
            console.log(`set $ { key }`)
        },
    })
    obj.name = 'JS 每日一题'
    // set name
    // JS 每日一题
    obj.name
  
    // 这里进入get的回调函数，所有直接返回 JS
  从上面的示例中可以看出，Proxy存在一种机制，可以对外界的读写操作进行改写
  
  Proxy 实例方法
  proxy除了代理get,set操作，还能代理其它的操作，如下
    handler.getPrototypeOf()
    // 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。
  
    handler.setPrototypeOf()
    // 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。
  
    handler.isExtensible()
    // 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。
  
    handler.preventExtensions()
    // 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。
  
    handler.getOwnPropertyDescriptor()
    // 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。
    
    handler.defineProperty()
    // 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。
    
    handler.has()
    // 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。
  
    handler.get()
    // 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。
  
    handler.set()
    // 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。
  
    handler.deleteProperty()
    // 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。
  
    handler.ownKeys()
    // 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。
  
    handler.apply()
    // 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。
  
    handler.construct()
    // 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。

  ~~~
- (已整理)[如何理解es6中的Decorator（装饰器？]( https://mp.weixin.qq.com/s/Atm1hcAfVQAIYrPwAveWDw )
~~~
  Decorator是ES7中的提案，概念借鉴于python， 它作用于一个目标类为其添加属性于方法
  我们用一个比喻来理解Decorator, 把孙悟空看成是一个类，那么棒子就是装饰器为其装备的武器
  代码理解:
    @stick class
    
    Monkey{
    
    }
    
    function stick(target) {
      // 第一个参数就是目标类的本身
      target.ATK = 100000
    }
    
    Monkey.ATK
    // 为悟空装备了棒子，攻击力提高了100000
    // 如果一个参数不够用，可以在装饰器外层再包一层
    function stick(atk) {
      return function(targt) {
        target.ATK = atk
      }
    }
    
    @stick(200000)
    // 这样我们就为悟空增加了200000攻击力
    class Monkey{
    
    }
    
  Decorator 不仅能修饰类，也能修饰类的方法
  class Monkey {
    @setName 
    name() {
        this.name = '孙悟空'
    }
  }
  
  Decorator 只能修饰类及类的方法,不能修饰于函数,因为存在函数提升

  Mixin
    在修饰器基础上，我们可以实现mixin(混入),意思在一个对象中混入另一个对象的方法
  
    代码示例:
      export function mixins(...list) {
          return function(target) {
              Object.assign(target.prototype, ...list)
          }
      }
      
      const skill = {
          shapeshifting() {
              console.log('72变')
          }
      }
      @mixins(skill) class Monkey {
      
      }
      
      Object.assign(Monkey.prototype, skill) 
      const swk = ne Monkey() 
      swk.shapeshifting()// 72变
  使用Decorator的好处
    扩展功能，相对于继承增加了更多的灵活性
    代码可读性更高，装饰器正确命名相当于注释
~~~
- (已整理)[vue有哪些生命周期及其使用场景？]( https://mp.weixin.qq.com/s/NMadbNTOogqH94Cn49Qw0A )
~~~
vue有哪些生命周期及其使用场景？

首先生命周期就是hook函数，简单理解就是在什么什么之前，在什么什么之后,
在vue中分为8个阶段：创建前/后、载入前/后、更新前/后、销毁前/销毁后

beforeCreate（创建前），在数据观测和初始化事件还未开始
created（创建后），完成数据观测，属性和方法的运算，初始化事件， $el 属性还没有显示出来
beforeMount（载入前），在挂载开始之前被调用，相关的render函数首次被调用。
实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。

mounted（载入后），在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。
实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。
完成模板中的html渲染到html页面中。此过程中进行ajax交互。

beforeUpdate（更新前），在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。
可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。

updated（更新后），在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，
所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。
该钩子在服务器端渲染期间不被调用。

beforeDestroy（销毁前），在实例销毁之前调用。实例仍然完全可用。

destroyed（销毁后），在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。
该钩子在服务器端渲染期间不被调用。

第一次页面加载会触发beforeCreate、created、beforeMount、mounted, mounted说明dom渲染完毕

~~~
- (已整理)[Vue组件间如何通信？]( https://mp.weixin.qq.com/s/kdAsv-inZS-BtY9dgd_axw )
~~~
Vue组件间如何通信？

首先搞清楚组件中的几种通信模式
  父向子级传递
  子向父级传递
  兄弟级传递
  传递的方式

  props传递
    代码示例:
    
      // parent
      < template > <child: content = "content" > </template>
      // child props:
      {
          content: String
      }
  
  $attrs, $listeners
  $attrs 和 $listeners 属性像两个收纳箱，一个负责收纳属性，一个负责收纳事件(不包含props声明过，以及内置特性绑定属性,如class,style等...)
  代码示例:
    // parent
    < template > <child: content = "content": bar = "bar"@one = "one"@two = "two"class = "child"style = "width:1rem" > </template>
    // child props: {
        content: String,
        one: Function
    }
    console.log(this.$attrs,this.$listeners)// bar, two

  $emit, $on
    代码理解:
      vm.$on('JS',function say(val) {
          // 执行事件并接收回传的参数
          console.log('JS, ' + 每日一题)
      })
      vm.$emit('JS', '每日一题')// 触发当前实例上的事件

  provide,inject
    主要为高阶组件及组件库所用，理解为允许一个祖先组件为其所有子孙组件注入依赖
    代码理解:
    // parent
    < template> <child/></template>
    provide:{
        name:'JS',
        value:'每日一题',
    },
    // child 
    inject:{
        name: String,
        value:String
    }
    console.log(this.name,this.value)// JS，每日一题

  EventBus
    思路就是声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上
    代码理解:
      // Global
      let EventBus=new Vue()
      // parent
      EventBus.$on('received',function(val){
          console.log('received: ' + val)
          // received: ＪＳ每日一题
      })
      // child
      EventBus.$emit('received','ＪＳ每日一题')
  Vuex
    Vuex解决大型项目复杂通信问题
~~~
- (已整理)[Vue双向绑定实现原理？]( https://mp.weixin.qq.com/s/9IC8hQXLlb7yNcSRiG4IrQ )
~~~
Vue双向绑定实现原理？

vue实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty() 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。

Observer 对所有数据的属性进行监听
Compile 对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数
Watcher 作为连接Observer 跟 Compile 之间的桥梁, 能够订阅接收到每个属性变动的通知,执行相应的回调函数
代码理解:
const Dep = function() {
  this.subs = [];
};
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
  },
  notify: function() {
    this.subs.forEach(sub = >{
      sub.update();
    });
  },
};
const Watcher = function(vm, node, name) {
  Dep.target = this;
  this.name = name;
  this.node = node;
  this.vm = vm;
  this.update();
  Dep.target = null;
};
Watcher.prototype = {
  update: function() {
    this.get();
    this.node.nodeValue = this.value;
  },
  get: function() {
    this.value = this.vm[this.name];
  },
};
const compile = function(node, vm) {
  if (node.nodeType === 1) {
    let attr = node.attributes;
    for (let i = 0; i < attr.length; i++) {
      if (attr[i].nodeName === 'v-model') {
        let name = attr[i].nodeValue;
        node.addEventListener('input', e = >{
          vm[name] = node.value;
        });
        node.value = vm[name];
        node.removeAttribute('v-model');
      }
    }
  }
  // Text 节点类型
  if (node.nodeType === 3) {
    if (///{//{(.*)//}//}/.test(node.nodeValue)) {
      let name = RegExp.$1;
      name = name.trim();
      node.nodeValue = vm[name];
      new Watcher(vm, node, name);
    }
  }
};
const observe = data = >{
  if (!data || typeof data !== 'object') return 3344;
  Object.keys(data).forEach(key = >defineReactive(data, key, data[key]));
};
const defineReactive = (data, key, value) = >{
  const dep = new Dep();
  observe(value);
  Object.defineProperty(data, key, {
    get: () = >{
      if (Dep.target) dep.addSub(Dep.target);
      return value;
    },
    set: function(newValue) {
      console.log(`数据已发生变化，新的值为$ {
        newValue
      }`);
      value = newValue;
      dep.notify();
    },
  });
};
function nodeToFragment(node, vm) {
  let flag = document.createDocumentFragment();
  let child;
  while ((child = node.firstChild)) {
    compile(child, vm);
    flag.appendChild(child);
  }
  return flag;
}
function Vue(options) {
  let data = this.data = options.data;
  observe(data, this);
  let id = options.el;
  let dom = nodeToFragment(document.getElementById(id), data);
  document.getElementById(id).appendChild(dom);
}
let vm = new Vue({
  el: 'app',
  data: {
    text: 'example text',
  },
});
~~~
- []( https://www.cnblogs.com/chenhuichao/p/10818396.html )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
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
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
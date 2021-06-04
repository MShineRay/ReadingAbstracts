# css

- [CSS实现水平垂直居中的10种方式]( https://yanhaijing.com/css/2018/01/17/horizontal-vertical-center/ )
- (已整理)[元素水平垂直居中的方式有哪些]( https://mp.weixin.qq.com/s/BwKdrbjAzErXXxDPoywCxA )
  ~~~
    absolute加margin方案
    fixed 加 margin 方案
    display:table 方案
    行内元素line-height方案
    flex 弹性布局方案
    transform 未知元素宽高解决方案
  
    absolute加margin方案
        div{
            position: absolute;
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%:
            margin-top: -50px;
            margin-left: -50px;
        }
  
    fixed 加 margin 方案
        div{
            position: fixed;
            width: 100px;
            height: 100px;
            top: 0;
            right:0;
            left: 0;
            bottom: 0;
            margin: auto;
        }
  
    display:table 方案
        div{
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 100px;
            height: 100px;
        }
  
    行内元素line-height方案
        div{
            text-align: center;
            line-height: 100px;
        }
  
    flex 弹性布局方案
        div{
            display: flex;
            align-items: center;
            justify-content:center
        }
  
    transform 未知元素宽高解决方案
        div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }
  ~~~
- [浅谈CSS模块化]( https://mp.weixin.qq.com/s/emB88gX1A2Xk0WrfvHBX8Q )
  ~~~
  .block {}// 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。
  .block__element{}// 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。
  .block--modifier{}// 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观。
  ~~~
- [浅谈CSS模块化]( https://mp.weixin.qq.com/s/xjmcv9AkwQ7QceJ-B6Q4pw )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )

- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
- [](  )
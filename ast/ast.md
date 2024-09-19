# AST
- [AST](https://github.com/CodeLittlePrince/blog/issues/19)
- [AST 抽象语法树](https://mp.weixin.qq.com/s/p2q_YGoyWSiATcdkDNwpyg)
  ~~~
    javascript转译、代码压缩、css预处理器、elint、pretiier
	第一步，词法分析，也叫做扫描scanner。它读取我们的代码，然后把它们按照预定的规则合并成一个个的标识tokens。同时，它会移除空白符，注释，等。最后，整个代码将被分割进一个tokens列表（或者说一维数组）。
	当词法分析源代码的时候，它会一个一个字母地读取代码，所以很形象地称之为扫描-scans；当它遇到空格，操作符，或者特殊符号的时候，它会认为一个话已经完成了。
	
	第二步，语法分析，也解析器。它会将词法分析出来的数组转化成树形的表达形式。同时，验证语法，语法如果有错的话，抛出语法错误。
	当生成树的时候，解析器会删除一些没必要的标识tokens（比如不完整的括号），因此AST不是100%与源码匹配的，但是已经能让我们知道如何处理了。说个题外话，解析器100%覆盖所有代码结构生成树叫做CST（具体语法树）
  
	
	github:
		the-super-tiny-compiler
		LangSandbox
		
		babylon
		
		JSCodeshift 自动代码重构工具
		
		codemods
		
		js2flowchart 将js代码转化生成svg流程图。


	
	babel是一个javascript编译器。宏观来说，它分3个阶段运行代码：解析（parsing），转译（transforming），生成（generation）。我们可以给babel 一些javascript代码，它修改代码然后生成新的代码返回。
    那它是怎样修改代码的呢？它创建了AST，遍历树，修改tokens，最后从AST中生成新的代码。
	~~~

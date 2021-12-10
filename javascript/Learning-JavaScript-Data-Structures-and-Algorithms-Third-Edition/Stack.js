class Stack {
  constructor() {
    this.items = []
    //push(element(s))：添加一个（或几个）新元素到栈顶。
    //pop()：移除栈顶的元素，同时返回被移除的元素。
    //peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
    //isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
    //clear()：移除栈里的所有元素。
    //size()：返回栈里的元素个数。该方法和数组的length属性很类似。
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length-1]
  }

  isEmpty(){
    return this.items.length === 0
  }

  size(){
    return this.items.length
  }
  clear(){
    this.items = []
  }
}

function Parent(){
  this.name = 'p1'
}
Parent.prototype.getName = function (){
  return this.name
}

function Child(){
  Parent.call(this)
  this.type = 'child'
}

let child = new Child()
console.log(child)
console.log(child.prototype)
console.log(child.__proto__ === Parent.prototype)
console.log(child.__proto__.getName())
// console.log(child.getName()) TypeError: child.getName is not a function
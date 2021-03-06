function test(arr) {
    return arr.slice().sort(() => Math.random() - 0.5)
}
var a = [1,2,3,4,5]
var b = test(a)
console.log(b)
console.log(a)
const data = {text: 'hi'}


let activeEffect;
let bucket = new WeakMap()

function effect(fn){
  console.log('effect')
  activeEffect = fn
  fn()
}

function track(target, key) {
  console.log('track')

  if(!activeEffect){
    return
  }
  let depsMap = bucket.get(target)
  if(!depsMap){
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if(!deps){
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  console.log('trigger')

  const depsMap = bucket.get(target)
  if(!depsMap){
    return
  }
  const effects = depsMap.get(key)
  effects && effects.forEach(fn=>fn())
}

const obj = new Proxy(data, {
  get(target, p, receiver) {
    console.log('get')
    track(target, p)
    return target[p]
  },
  set(target, p, value, receiver) {
    console.log('set')

    target[p] = value;
    trigger(target, p)
  }
})


effect(()=>{
  let d = null;
  d = obj.text
  console.log(d)
})

setTimeout(function (){
  obj.ddd = '3'
},1000)
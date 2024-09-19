/**
 * 降序
 * @param v1
 * @param v2
 * @returns {number}
 */
function compareDesc(v1, v2){
  console.log(v1, v2)
  if(v1 < v2){
    console.log(-1)
    return 1
  } else if(v1 > v2){
    console.log(1)
    return  -1
  } else {
    console.log(0)
    return 0
  }
}

/**
 * 升序
 * @param v1
 * @param v2
 * @returns {number}
 */
function compareAsc(v1, v2){
  console.log(v1, v2)
  if(v1 < v2){
    console.log(-1)
    return -1
  } else if(v1 > v2){
    console.log(1)
    return  1
  } else {
    console.log(0)
    return 0
  }
}

let  valu = [13,45, 1, 4, 8]
valu.sort(compareDesc)
console.log(valu)
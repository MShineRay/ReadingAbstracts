/**
 * 将多级数组对象扁平化为1级
 * @param arr
 * @returns {*[]}
 * @example
 */
function flat(arr){
    return [].concat(...arr.map(item => {
        if(Array.isArray(item.children)){
            return [].concat(item, ...flat(item.children))
        } else {
            return item
        }
    }));
}

var a = [
    {
        url: '/a',
        children: [
            {
                url:'/a/1'
            }
        ]
    },
    {
        url: '/b',
        children: [
            {
                url:'/b/1'
            }
        ]
    }
]
console.log(flat(a))



var zhangkunduanfei = {
  /**
   * 这个函数是干嘛的
   * @param {参数类型} [参数名字] [参数描述]
   * @param {参数类型} [参数名字] [参数描述]
   * @param {参数类型} [参数名字] [参数描述]
   * @param {参数类型} [参数名字] [参数描述]
   * @return {[type]} [description]
   */
iteratee:function(n){
  var a = Object.prototype.toString.call(n)
  if(a == '[object Object]'){return _.matches(n)}
   else if(a == "[object String]") {
    return _.property(n);
  } else if(a == "[object Array]") {
    return _.matchesProperty(n[0], n[1]);
  } else if(a == "[object Function]") {
    return n;
  } else if(a == "[object RegExp]") {
    return Boolean;
  }
}
,
chunk: function(array, size = 1) {
        var result = []
        var temp = [] 
        for (var i = 0; i < array.length; i++) {
            temp.push(array[i])
            if (temp.length == size) {
                result.push(temp)
                temp = []
            }
        }
        if (array.length % size != 0) {
            result.push(temp)
        }
        return result
    }
,
  compact: function(a){
    var result = []
    for(var i = 0;i <= a.length;i++){
      if(a[i]){//当他为true时显示出来 a[i] == (a[i] == true)
        result.push(a[i])
      }
    }return result
  }
,
  drop: function(arr,n){
    n = n === undefined ? 1 : n
    if(n > 0){
      arr.splice(0,n)
    }return arr
  }
,
filter:function(ary,test){

  var passed = []
  for(var i = 0;i<ary.length;i++){
    if(test(ary[i],i,ary)){
      passed.push(ary[i])
    }
  }
  return passed

}
,
//！！
 dropRight:function(arry,n=1){
     var i = arry.length - n
     if(i<0){i =0}
      arry.splice(i,n)
    return arry

 },

 dropRightWhile:function(n,v){
    var a  = this.iteratee(v)
    for(let i = n.length-1;i >= 0; i--){
      if(a(n[i]) == false){
          n.splice(i+1)
      return n
      }
    }
    return []
 }
 ,
dropWhile:function(array,value){
  let str = this.iteratee(value)
    for(let i = 0;i < array.length;i++){
        if(!str(array[i])){
          array.splice(0,i)
          return array
        }
    }
}
,//!!
pull:function(arry,n){
  for(var j =1;j< arguments.length;j++){
  var t = arguments[j]
  for(var i =0;i<arry.length;i++){
    if(arry[i] == t){
       arry.splice(i,1)
    }
  }
}return arry
  }
,
pullAll:function(arry,n){
  for(var j = 0;j < n.length;j++){
    var t = n[j]
    for(var i = 0;i < arry.length;i++){
      if(arry[i] == t){
        arry.splice(i,1)
      }
    }
  }return arry
}
,
pullAt:function(n,value){
  var result
  for(let i = 0;i < value.length;i++){
    result.push(n[value[i]])
  }
  return result
},
pullAllBy:function(array,values,pre){
  let str = this.iteratee(pre)
  for(let i = 0;i < values.length;i++){
    for(let j = 0;j < array.length;j++){
      if(str(array[j]) === str(values[i])){
        array.splice(j,1)
        j--
    }
  }
}
return array
},
pullAllWith:function(array,values,fn){
    for(var j = 0;j < values.length;j++){
      let t = values[j]
    for(var i = 0;i < array.length;i++){
      if(fn(array[i],t)){
        array.splice(i,1)
        i--
      }
    }
  }return array
}
,//66
remove:function(arry,n){
    result = []
    for(var i =0;i<arry.length;i++){
      if(arry[i] % 2 == 0){
       result.push(arry[i])
      }
    }return result
  }
,
 head:  function(arry){
  if(arry == undefined){
    return undefined
  }return arry[0]
 }
,
initial: function(arry){
  var b = arry.length-1
  var c = arry.splice(b,1) 
  return arry
}
,
intersection:function(...n){
  for(let i=0;i<n[0].length;i++){
    for(let j=0;j<n.length;j++){
      if(n[i][j] == n){}
    }
  }
}
,
sortedIndex:function(array,value){
  var left = 0 //第一个从左开始
  var right = array.length-1 //从右结束   下标位
  while(left<right){//当左边小于右边时
    var middle = parseInt((left+right)/2)// 取每次变换之后数组中间的值
    if(array[middle] >= value){
      right = middle 
    }else {
      left = middle +1 //既然middle小于value那么之前肯定也小于，直接剔除从它的加1位置开始
    }
  }
  return left
}
,
sortedIndexBy:function(array,value,iteratee){
  var a = this.iteratee(iteratee)
    var left = 0 //第一个从左开始
  var right = array.length-1 //从右结束   下标位
  while(left<right){//当左边小于右边时
    var middle = parseInt((left+right)/2)// 取每次变换之后数组中间的值
    if(a(array[middle]) >= value){
      right = middle 
    }else {
      left = middle +1 //既然middle小于value那么之前肯定也小于，直接剔除从它的加1位置开始
    }
  }
  return left
}
,
sortedIndexOf:function(array,value){
  var left = 0 
  var right = array.length-1 
  while(left<right){
    var middle = parseInt((left+right)/2)
    if(array[middle] >= value){
      right = middle 
    }else {
      left = middle +1 
    }
  }
  return left
}
,
sortedLastIndex:function(array,value){

}
,
sortedLastIndexOf(array,value){
   for(let i=array.length-1;i>=0;i--){
    if(array[i] == value){
      return i
    } 
  }return null
}
,
sortedUniq:function(array){
  var a = array.sort((a,b)=>(a-b))
  var b = new Set(a)
  return Array.from(b)
}
,
sortedUniqBy:function(array,iteratee){
  var a = this.iteratee(iteratee)
  var b = new Set(a)
  return Array.from(b)
}
,
union:function(...args){
  return Array.from(new Set(args[0].concat(...args)))
}
,
unionBy:function(array,pre){
 var a  = this.iteratee(pre)
  array = this.union(array)
  return array.map(it=>a(it))
}
,
unionWith:function(array,fn){
  var result = []
  for(let i = 0;i < array.length;i++){
      if(fn(array[i])){
        result.push(array[i])
      }
  }
  return result
}
,
without:function(array,...args){
  var result = Array.from(new Set(array))
for(let i=0;i<args.length;i++){
  var j = result.indexOf(args[i])
  if(j != -1){result.splice(j,1)}
}return result
}
,
xor:function(arr1,arr2){

}
,
 last: function(n){
  var b = n.length-1
  return Number(n.splice(b,1))
 }
,
take:function(m,n=1){
  return m.slice(0,n)
}
,
lowerCase:function(a){
  return  a.toLowerCase().replace(/[^a-zA-Z]/g,' ').trim()
  
}
,
lowerFirst:function(n){
  n = n.split()
  for(var i = 0;i<n.length;i++){
  if(typeof(n[0]) == 'string'){
    n[0]=n[0].toUpperCase()
    n = n.join('')
  }
else{
  break
}
return n
}
}
,
difference:function(arry,n){
  /* one var b = arry[i]
  var a = []
    for(var i =0;i<arry.length;i++){
      for(var j = 0;j<n.length;j++){
        if(arry[i] == n[j] ){
          arry.splice(i,1)
          a = arry
        }
      }
    }return a
 */
return arry.filter(function(i,arry){
  return n.indexOf(i) === -1?true:false })
}
,
forOwn:function(obj,iteratee){
  for(var key in obj){
    if(Object.prototype.hasOwnProperty.call(key,obj))//不能直接调用的原因万一obj的hasOwnProperty属性被覆盖了就取不到值了
      iteratee(obj[key],key)
  }
  return obj
}
,

differenceBy:function(arry,n,iteratee){
  var a,b
  if(typeof(iteratee) == 'function'){
      a = arry.map(iteratee)
      b = n.map(iteratee)
  }
  if(typeof(iteratee) == 'string'){
    a = arry.map(it=>it[iteratee])
    b = n.map(it=>it[iteratee])
  }
  for(let i=0;i<arry.length;i++){
    for(let j=0;j<n.length;j++){
      if(a[i] == b[j]){
        arry.splice(i,1)
      }
    }
  }
  return arry
},
differenceWith:function(arry,values,com){
  for(let i=0;i<arry.length;i++){
    for(let j=0;j<values.length;j++){
      if(com(arry[i],values[j])){
        arry.splice(i,1)
      }
    }
  }return arry
}
,
reverse:function(arry){
  result = []
  for(var i = 0;i < arry.length;i++){
  if(arry.length ==1){
    return arry
  }else{
   result.unshift(arry[i])
  }
 }return result
}

,
fill:function(x,y,st,end){
  if(arguments[2] == undefined){
     st = 0
  }
if(arguments[3] == undefined){
  end = x.length
}
for(var i = st;i < end;i++){
  x[i] = y
}
return x
}

,
nth:function(arry,n){
  if(arry != undefined){
    var t = arry.splice(n,1)
    return t.toString()
  }if(n < 0){
    n = (-n)-1
    var j = arry.reverse()
     var t = j.splice(n,1) 
     return t.toString()
  }
  }
,

m的n次方:function(m,n){
  return m**n
}
,

eq:function(m,n){
  if(arguments[0] == arguments[1]){
    return true
  } if((m == undefined && n == undefined) || (m == null && n == null)){
    return true
  }
  else {
    return false
  }
    for (var i in m){
      if (m[i]==n[i]){
        continue
      }else {return false}
    }
    for (var i in n){
      if (m[i]==n[i]){
        continue
      }else {return false}
    }
    return true

}
,
gt:function(m,n){
  if(m > n){
    return true
  }else {
    return false
  }
}
,

gte:function(m,n){
  if(m>n || m == n){
    return true 
  }else {
    return false
  }
}
,
isArguments:function(n){
 return Object.prototype.toString.call(n) ==='[object Arguments]'
}

,
isArray:function(n){
  return Object.prototype.toString.call(n) ==='[object Array]'
}
,
isBoolean:function(n){
 return Object.prototype.toString.call(n) ==='[object Boolean]'
}
,
isError: function(n){
return Object.prototype.toString.call(n) ==='[object Error]'
}
,
isFunction:function(n){
return Object.prototype.toString.call(n) ==='[object Function]'
}
,
isObject:function(n){
  return (typeof(n) == 'object' ||typeof(n) == 'function') && n!==null
}
,
isString:function(n){
  return Object.prototype.toString.call(n) ==='[object String]'
},
isSymbol:function(n){
  return Object.prototype.toString.call(n) ==='[object Symbol]'
}
,
isArrayBuffer:function(val){
  return Object.prototype.toString.call(val) === "[object ArrayBuffer]";
},
isMap:function(n){
  return Object.prototype.toString.call(n) ==='[object Map]'
}
,
isBuffer:function(n){
  return Object.prototype.toString.call(n) ==='[object Buffer]'
}
,
isDate:function(n){
   return Object.prototype.toString.call(n) ==='[object Date]'
}
,
isElement:function(n){
  return Object.prototype.toString.call(n) ==='[HTML Collection]'
}
,
isNaN:function(n){
  return Object.prototype.toString.call(n) === '[object NaN]'
}
,
isNumber:function(n){
  return Object.prototype.toString.call(n) === '[object Number]'
}
,
isRegExp:function(n){
  return Object.prototype.toString.call(n) === '[object RegExp]'
}
,
isNull:function(n){
  return  Object.prototype.toString.call(n) === '[object Null]'
}
,
isNil:function(n){
return  Object.prototype.toString.call(n) === '[object Null]'||
      Object.prototype.toString.call(n) === '[object Undefined]'
}
,
isUndefined:function(n){
  return Object.prototype.toString.call(n) === '[object Undefined]'
}
,
isNative:function(n){
  return n.constructor == Function.constructor ? true:false
}
,
isSet:function(n){
  return Object.prototype.toString.call(n) === '[object Set]'
}
,
isTypedArray:function(n){
  return Object.prototype.toString.call(n) === '[object Uint8Array]'
}
,
isWeakMap:function(n){
  return Object.prototype.toString.call(n) === '[object WeakMap]'
},
isWeakSet:function(n){
   return Object.prototype.toString.call(n) === '[object WeakSet]'
}
,
isObjectLike:function(n){
  if(n === null){return false}
    else if(typeof(n) == 'object'){
      return true
    }
    return false
}
,
isPlainObject:function(n){
  if(typeof(n) == 'object' && Object.prototype === n.__proto__){
    return true
  }
  return false
}
,
isEqual:function(m, n) {
  for (var i in m){
      if (m[i]==n[i]){
        continue
      }else {return false}
    }
    for (var i in n){
      if (m[i]==n[i]){
        continue
      }else {return false}
    }
    return true
}

,
isFinite:function(n){
  if(n < Infinity && n > -Infinity && typeof n == 'number'){
    return true
  }else{
    return false 
  }

}
,
fromPairs:function(m){
  result = {}
  for(var i =0;i<m.length;i++){
     result[m[i][0]]= m[i][1]
  }return result
}
,
findIndex:function(arry,m,from=0){
  let str = this.iteratee(m)
  for(let i = from;i < arry.length;i++){
    if(str(arry[i])){
      return i
    }
  } return -1
  }
,
findLastIndex:function(arry,pre,from=arry.length-1){
    let str = this.iteratee(pre)
    for(let i = from;i >=0 ;i--){
    if(str(arry[i])){
      return i
    } 
  }
    return false
  }

,
flatten:function(m){
  result = []
  for(var i =0;i<m.length;i++){
    result = result.concat(m[i])
  }return result
}
,
tail:function(m){
   m.splice(0,1)
   return m
}
,
takeRight:function(m,n=1){
  var result = []
  if(n==0){return result}
  result = m.slice(-n)
return result
}
,
takeRightWhile:function(array,pre){
  var a = this.iteratee(pre)
  //var result = []
  for(let i = array.length-1;i >= 0;i--){
    if(!a(array[i])){
          return array.splice(i+1)
    }
  }
},
takeWhile:function(array,pre){
  var a = this.iteratee(pre)
  for(let i = 0;i < array.length;i++){
    if(!a(array[i])){
      return array.splice(0,i)
    }
  }
}
,
uniq:function(m){
  /*for(var i =0;i<m.length;i++){
    for(var j = i+1;j<m.length;j++){
      if(m[i] == m[j]){
        m.splice(j,1)
      }
    }
  }
  return m*/
  return Array.from(new Set(m))

},
uniqBy:function(array,pre){
  var result =[]
  var a = this.iteratee(pre)
  for(let i = 0;i < array.length;i++){
    if(array.indexOf(array[a(i)]) == -1){
      result.push(array[i])
    }
  }
  return result
}

,
join:function(arry,m){
  var n = ''
  for(var i = 0;i<arry.length;i++){
    n = n+arry[i].toString()+m 
  } n = n.split('')
        n.pop()
        n = n.join('')
return n
} 
,
flattenDeep:function(ary) {
  ary = ary.reduce((num1,num2)=>{return num1.concat(Array.isArray(num2) ? zhangkunduanfei.flattenDeep(num2):num2)},[])
  return ary
}
,
flattenDepth:function(ary, depth = 1) {
  if (depth == 0) {
    return ary
  }
  return ary.reduce(function(result, value) {
    if (Array.isArray(value)) {
      return result.concat(zhangkunduanfei.flattenDepth(value, depth - 1))
    } else {
      return result.concat(value)
    }
  }, [])
}
,
indexOf:function(array,value,test=0){
  result = 0
  for(var i=test;i<array.length;i++){
    if(value == array[i]){
      result = i
      break
    }
  }return result
}
,
lastIndexOf:function(array,value,test=array.length-1){
  for(var i = test;i>=0;i--){
    if(value == array[i]){
      return i
    }
  }
}
,
lt:function(n,k){
  return n < k ? true:false
}
,
lte:function(n,k){
  return n<=k ? true:false
}
,
toArray:function(n){
  var result=[]
if(typeof(n) == 'string'){
  return n.split('')
}else if(typeof(n == 'object'))
{
  for(var key in n){
    result.push(n[key])
  }
  return result
}
else{return result}
},
toFinite:function(n){
  n = n*1
  if(n == Infinity){
    return 1.7976931348623157e+308
  }else if(n == -Infinity){
    return -1.7976931348623157e+308
  }else if(n == Number.MIN_VALUE){
    return 5e-324
  }else if(n == -Number.MIN_VALUE){
    return -5e-324
  }
  return n
},
toInteger:function(n){
  if(n == Infinity){
    return 1.7976931348623157e+308
  }
  if(n == -Infinity){
    return -1.7976931348623157e+308
  }
  return Math.trunc(n)
},
toLength:function(n){
  return zhangkunduanfei.toInteger(n)>4294967295 ? 4294967295 : zhangkunduanfei.toInteger(n)
}
,
toNumber:function(n){
  return n*1
}
,
add:function(n,j){
  return n+j
}
,
reduce:function(coll,reducer,init=0){
  for(var key in coll){
    init = reducer(init,coll[key],key,coll)
  }
  return init
}
,
size:function(n){
  var count =0
  for(var key in n){
    count++
  }
  return count
}
,
forEach:function(ary,fn){
  for(var key in ary){
    fn(ary[key],key)
  }
  return ary
}
,
divide:function(num1,num2){
  return num1/num2
}
,
max:function(arry){
  if(arry.length == 0 || arry == null || arry == undefined){
    return undefined
  }
  arry = arry.sort((a,b)=>(a-b))
  return arry[arry.length-1]
}
,
mean:function(arry){
 let nums = arry.reduce(function(a,b){return a+b},0)
 return nums/arry.length
}
,
meanBy:function(arry,n){

}
,
min:function(arry){
    if(arry.length == 0 || arry == null || arry == undefined){
    return undefined
  }
  arry = arry.sort((a,b)=>(b-a))
  return arry[arry.length-1]
}
,
subtract:function(min,sub){
  return min-sub
}
,sum:function(arry){
  return arry.reduce(function(a,b){return a+b},0)
}
,
sumBy:function(ary,n){}
,inRange:function(num,start,end){
  var f = end
  var g = start
  if(end == undefined){
    end = g
    start = 0
  }
  if(start > end){
    start = f 
    end  = g

  }
  if((num > start && num < end )|| (num<start && num>f)){
    return true
  }else false
}
,
once:function(fun){
  var count =0
  if(fun){
    return fun
    count++
  }
  if(count>1){
    return null
  }
}
,
delay:function(fn,wait,...args){
  return  setTimeout(function(){
  fn(...args)
},wait)
}
,
defer:function(fn,times,duration){
  return function(){
    var odd = setInterval(fn,duration)
    setTimeout(function(){
      clearInterval(odd)
    },times*duration)
  }
}
,
 parseJson:function(str){
    var i = 0 //重置i
    

    function parseValue(){

      if(str[i] === '{'){
        return parseObject(str)
      }else if (str[i] === '['){
      return parseArray(str)
      }else if(str[i] === 't'){
        return parseTrue(str)
      }else if(str[i] === 'f'){
        return parseFalse(str)
      }else if(str[i] === 'n'){
        return parseNull(str)
      }else if(str[i] === '"'){
        return parseString(str)
      }else {
        return parseNumber(str)
      }
    }

  function parseNull(){
    let  count = str.substr(i,4)
    if(count === 'null'){
      i+=4
      return null
    }else{
      throw new Error('_Unexpected char at pos:' + i)
    }
  }
  function parseTrue(){
    let count = str.substr(i,4)
    if(count === 'true'){
      i+=4
      return true
    }else{
      throw new Error('_Unexpected char at pos:' + i)
    }
  }
  function parseFalse(){
    let count = str.substr(i,5)
    if(count === 'false'){
      i+=5
      return false
    }else{
      throw new Error('_Unexpected char at pos:' + i)
    } 
  }



  function parseNumber(){
    let numStr = ''
    while(isNumberChar(str[i])){
      numStr += str[i++]
    }
    return parseFloat(numStr)
  }

  function isNumberChar(n){
    let nums = {
      '+':true,
      '-':true,
      'e':true,
      'E':true,
      '.':true,
    }
    if(nums[n]){
      return true 
    }
    if(n >= '0' && n <= '9'){//js里字符串是可以比大小的
      return true}
    return false
  }



  function parseString(){
    let result = ''
    i++
    while(str[i] != '"'){
      result += str[i++]
    }
    i++
    return result
  }

 function parseArray() {
    i++
    let result = []
    while(str[i] !== ']') {
      result.push(parseValue())
      if (str[i] === ',') {
        i++
      }
    }
    i++
    return result
  }

  function parseObject(){
    //{'a':1,'b':2}
    i++
    let result = {}
    while(str[i] !== '}'){
      let count = parseString(str)
      i++
      let value = parseValue(str)
      result[count] = value
      if(str[i] === ','){
        i++
      }
    }
    i++
    return result
  }

  return parseValue()
  }
,
values:function(obj){
  var result = []
  for(var key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key))
    result.push(obj[key])
  }
  return result
}
,
valuesIn:function(obj){
  var result = []
  for(var key in obj){
    result.push(obj[key])
  }
  return result
}
,
capitalize:function(str){
return str[0].toUpperCase()+str.toLowerCase().slice(1)
}
,
endsWith:function(str,value,index=1){
  str = str.split('')
  if(str.indexOf(value,-index) !== -1){
    return true
  }else{
    return false
  }
}
,
lowerFirst:function(str){
  return str[0].toLowerCase()+str.slice(1)
}
,
replace:function(str,pattern,ele){
  /*str = str.split(' ')
  for(let i=0;i<str.length;i++){
    if(str[i] == pattern){
      str[i] = ele
    }
  }
  return str.join(' ')*/
  var p= pattern
 return  str.replace(p,ele)
}
,
split:function(str,sp,count){
 var a = str.split(sp)
 a.length = count
return a
}
,
startsWith:function(str ,value,index=0){
  str = str.split('')
    if(str.indexOf(value,index) == index){
    return true
  }else{
    return false
  }
}
,
toLower:function(str){
  return str.toLowerCase()
}
,
toUpper:function(str){
  return str.toUpperCase()
}
,
trim:function(str,value=' '){
  return str.replace(/^[^a-zA-Z]*|[^a-zA-Z]*$/g,'')
}
,
trimEnd:function(str,value=' '){
  return str.replace(/[^a-zA-Z]*$/g,'')
}
,
trimStart:function(str,value=' '){
  return str.replace(/^[^a-zA-Z]*/g,'')
},
parseInt:function(n){
  if(typeof(n[0]*1) !== 'number'){
    return NaN
  }
  if(n[0] == '0'){
    var r = []
    if(typeof(n[1]*1) !== 'number'){
      return 0
    }
    for(let i = 0;i<n.length;i++){
        r.push(n[i])
        if(typeof(n[i]*1) !== 'number')
          break
    }
  }
  r.shift()
 return Number(r.join(''))
}
,
repeat:function(n,v){
  if(v == 0 )return ''
    var s = n
  for(let i=1;i<v;i++){
     n = n + s
  }
  return n  
}
,
multiply:function(...args){
  return args.reduce((a,b)=>(a*b))
}
,
zip:function(n){
  var result  = []
  for(let i =0;i<n.length;i++){
    n[j] = []
    for(let j=0;i<n[i].length;j++){
      result.push(n[j][i])
    }
  }
  return result
},
escape:function(n){
  var Symbol = {
    '&':'&amp;',
    '"':'&quot;',
    "'":'&acute;',
    '<':'&lt;',
    '>':'&gt;',
  }
  return n.replace(/[&<>"']/g,function(m){
    return Symbol[m]
  })
}
,
escapeRegExp:function(n){
  return n.replace(/(?=([\^\$\.\*\+\?\(\)\[\]\{\}\|]))/g,'\\')
}
,
/*property:function(path){
  var a = Object.prototype.toString.call(path)
  if(a == '[object Array]'){

  }
  else if(a == '[object String]'){

  }
}
*/






}
  

<!--
 * @FilePath: \Vue-Study-eaxmples\README.md
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-03-20 16:42:47
 * @email: 2742514076@qq.com
-->
<!--
 * @FilePath: \Vue-Study-eaxmples\README.md
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-03-20 16:42:47
 * @email: 2742514076@qq.com
-->

# js进阶

## 箭头函数
适用于原本使用匿名函数的地方
`箭头函数不会创建自己的this，会沿着作用链寻找this`
```javascript
fn = function() {
    console.log("匿名函数")
}

fn = () =>{
    console.log("箭头函数")
}
//只有一个参数的时候可以省略（）
//只有一行代码的时候可以省略{}
//只有一行代码的时候可以省略return
//可以直接返回一个对象
fn = (uname) => ({name:uname})
```
## this指向改变
`call`、`apply`改变函数指向，并立即执行函数
`bind`改变函数指向，不立即执行函数
## 数组函数
### forEach()
调用数组中的每个元素，并将元素返回给回调函数，`没有返回值`
```javascript
被遍历的数组.forEach(function(item,index){
  函数体
})
```
###  reduce()
返回累计处理的结果，常用于数组求和，`有返回值`
```javascript
数组.reduce(function(上一次的值,当前值){
        return 返回值
},初始值)
// 初始值为可选参数，可以省略，没有初始值是，第一个上一次的值为数组第一个值
```
### find()
返回第一个找到的数组元素
```javascript
const arr = [
  {name: "小米",price:1999},
  {name: "华为", price:3999}
]
const mi = arr.find(function (item){
   return item.name === "小米"
})
```
### every()
返回布尔值，所有元素均满足返回true
```javascript
const arr = [
  {name: "小米",price:1999},
  {name: "华为", price:3999}
]
const mi = arr.every(function (item){
   item.price>1000
})
```
### join()
拼接数组元素
```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
```

## 字符串函数
### split()
返回数组
### substring()
`substring(indexStart, indexEnd)`
`indexStart`
返回子字符串中第一个要包含的字符的索引。

`indexEnd` 可选
返回子字符串中第一个要排除的字符的索引。
截取部分字符
```javascript
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
```
### startWith()
判断字符串以..开头，返回布尔值
### includes()
判断是否包含某字符串，返回布尔值
## 构造函数
快速创建多个类似的对象
```javascript
function pig(name,age,gender){
  this.name = name,
  this.age = age,
  this.gender = gender
}
const Peiqi = new pig(Peiqi,18,male)
```

# Ajax
## axios
```javascript
<script type="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
axios({
  url: '目标资源地址',
  // 请求方式为get时，使用params
  params:{
    参数名:"值"
  }，
  method: '请求方法',
  // 请求方式为post时，使用params
  data: {
    参数名: 值
  }
}).then( result => {
  // 对服务器返回的数据做后续处理
}).catch(error => {
  // 处理失败错误
})
```

## form-serialize 插件
form-serialize 插件语法：

1. 引入 form-serialize 插件到自己网页中
2. 使用 serialize 函数
   - 参数1：要获取的 form 表单标签对象（要求表单元素需要有 name 属性-用来作为收集的数据中属性名）
   - 参数2：配置对象
     - hash：
       - true - 收集出来的是一个 JS 对象结构
       - false - 收集出来的是一个查询字符串格式
     - empty：
       - true - 收集空值
       - false - 不收集空值
```javascript
<!-- 引入插件 -->
<script src="./lib/form-serialize.js"></script>
const form = document.querySelector('.login-form')
const data = serialize(form, { hash: true, empty: true })
console.log(data)
// {username: 'itheima007', password: '7654321'}
const { username, password } = data
```

### XHR
#### 数据获取
```javascript
const xhr = new XMLHttpRequest()
xhr.open('请求方法', '请求url网址')
xhr.addEventListener('loadend', () => {
  // 响应结果
  console.log(xhr.response)
})
xhr.send()
```
#### 数据提交
1. 注意1：但是这次没有 axios 帮我们了，我们需要自己设置请求头 Content-Type：application/json，来告诉服务器端，我们发过去的内容类型是 JSON 字符串，让他转成对应数据结构取值使用
2. 注意2：没有 axios 了，我们前端要传递的请求体数据，也没人帮我把 JS 对象转成 JSON 字符串了，需要我们自己转换
3. 注意3：原生 XHR 需要在 send 方法调用时，传入请求体携带

```javascript
const xhr = new XMLHttpRequest()
xhr.open('请求方法', '请求url网址')
xhr.addEventListener('loadend', () => {
  console.log(xhr.response)
})

// 1. 告诉服务器，我传递的内容类型，是 JSON 字符串
xhr.setRequestHeader('Content-Type', 'application/json')
// 2. 准备数据并转成 JSON 字符串
const user = { username: 'itheima007', password: '7654321' }
const userStr = JSON.stringify(user)
// 3. 发送请求体数据
xhr.send(userStr)
```


### Promise 
`Promise`对象用于表示一个异步操作的最终完成（或失败）及其结构值
```javascript
// 1. 创建 Promise 对象
const p = new Promise((resolve, reject) => {
 // 2. 执行异步任务-并传递结果
 // 成功调用: resolve(值) 触发 then() 执行
 // 失败调用: reject(值) 触发 catch() 执行
})
// 3. 接收结果
p.then(result => {
 // 成功
}).catch(error => {
 // 失败
})
```

### async 函数和 await
1. 概念：在 async 函数内，使用 await 关键字取代 then 函数，等待获取 Promise 对象成功状态的结果值 
2. 做法：使用 async 和 await 解决回调地狱问题

```javascript
/**
 * 目标：掌握async和await语法，解决回调函数地狱
 * 概念：在async函数内，使用await关键字，获取Promise对象"成功状态"结果值
 * 注意：await必须用在async修饰的函数内（await会阻止"异步函数内"代码继续执行，原地等待结果）
*/
// 1. 定义async修饰函数
async function getData() {
  // 2. await等待Promise对象成功的结果
  const pObj = await axios({url: 'http://hmajax.itheima.net/api/province'})
  const pname = pObj.data.list[0]
  const cObj = await axios({url: 'http://hmajax.itheima.net/api/city', params: { pname }})
  const cname = cObj.data.list[0]
  const aObj = await axios({url: 'http://hmajax.itheima.net/api/area', params: { pname, cname }})
  const areaName = aObj.data.list[0]


  document.querySelector('.province').innerHTML = pname
  document.querySelector('.city').innerHTML = cname
  document.querySelector('.area').innerHTML = areaName
}

getData()
```
### Promise.all 静态方法
合并多个 Promise 对象，等待所有同时成功完成（或某一个失败），做后续逻辑
```javascript
const p = Promise.all([Promise对象, Promise对象, ...])
p.then(result => {
  // result 结果: [Promise对象成功结果, Promise对象成功结果, ...]
}).catch(error => {
  // 第一个失败的 Promise 对象，抛出的异常对象
})
```


## node.js
### fs模块
使用方法
- 加载 fs 模块，得到 fs 对象
```javascript
const fs = require('fs')
```
- 写入文件内容语法：
```js
fs.writeFile('文件路径', '写入内容', err => {
  // 写入后的回调函数
})
```
- 读取文件内容
```js
fs.readFile('文件路径', (err, data) => {
  // 读取后的回调函数
  // data 是文件内容的 Buffer 数据流
})
```
### 模块导出与导入
#### **CommonJS 标准语法导出和导入**
导出语法：
```js
module.exports = {
  对外属性名: 模块内私有变量
}
```
导入语法：
```js
const 变量名 = require('模块名或路径')
// Node.js 环境内置模块直接写模块名（例如：fs，path，http）
// 自定义模块：写模块文件路径（例如：./utils.js)
```
实例
utils.js：导出
```js
/**
 * 目标：基于 CommonJS 标准语法，封装属性和方法并导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// 导出
module.exports = {
  url: baseURL,
  arraySum: getArraySum
}
```
index.js：导入使用
```js
/**
 * 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
 */
// 导入
const obj = require('./utils.js')
console.log(obj)
const result = obj.arraySum([5, 1, 2, 3])
console.log(result)
```
#### ECMAScript 标准语法中，默认导出和导入的使用
>使用ECMAScript 标准语法需要新建`package.json`文件，设置`{ “type”: "module" }`

导出语法：
```js
export default {
  对外属性名: 模块内私有变量
}
```
导入语法：
```js
import 变量名 from '模块名或路径'
```
实例
utils.js：导出
```js
/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"默认"导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// 默认导出
export default {
  url: baseURL,
  arraySum: getArraySum
}
```
index.js：导入使用
```js
/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 默认导入
import obj from './utils.js'
console.log(obj)
const result = obj.arraySum([10, 20, 30])
console.log(result)
```

####  ECMAScript 标准语法中，命名导出和导入的使用
>使用ECMAScript 标准语法需要新建`package.json`文件，设置`{ “type”: "module" }`

导出语法：
```js
export 修饰定义语句
```
导入语法：
```js
import { 同名变量 } from '模块名或路径'
```
实例
utils.js：导出
```js
/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"命名"导出
 */
export const baseURL = 'http://hmajax.itheima.net'
export const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)
```
index.js：导入使用
```js
/**
 * 目标：基于 ECMAScript 标准语法，"命名"导入，工具属性和方法使用
 */
// 命名导入
import {baseURL, getArraySum} from './utils.js'
console.log(obj)
console.log(baseURL)
console.log(getArraySum)
const result = getArraySum([10, 21, 33])
console.log(result)
```
- 按需加载，使用命名导出和导入
- 全部加载，使用默认导出和导入


**得到需要的所有依赖软件包:**

直接在项目目录下，运行终端命令：npm i 即可安装 package.json 里记录的所有包和对应版本到本项目中的 node_modules

### npm全局软件包-nodemon
使用：

1. 安装：npm i nodemon -g （-g 代表安装到全局环境中）
2. 运行：nodemon 待执行的目标 js 文件


### Node.js 常用命令：
```js
执行js文件 node xxx
初始化package.json  npm init -y
下载本地软件包  npm i 包名
下载全局软件包  npm i 包名 -g
卸载本地软件包  npm uni 包名
```
## 创建vue实例

**核心步骤（4步）：**
1. 准备容器
2. 引包（官网） — 开发版本/生产版本
3. 创建Vue实例  new Vue()
4. 指定配置项，渲染数据
   1. el:指定挂载点
   2. data提供数据
```javascript
    <div id="app">
        {{ msg }}
    </div>
    <script src="../vue.js"></script>
    <script>
        const app = new Vue({
            el:'#app',
            data:{
                msg:"第一个vue实例"
            }
        })
    </script>
```

## 插值表达式
插值表达式语法：`{{ 表达式 }}`
1.在插值表达式中使用的数据 必须在data中进行了提供
`<p>{{hobby}}</p>`  //如果在data中不存在 则会报错

2.支持的是表达式，而非语句，比如：if   for ...
`<p>{{if}}</p>`

3.不能在标签属性中使用 {{  }} 插值 (插值表达式只能标签中间使用)
`<p title="{{username}}">我是P标签</p>`
```javascript
<h3>{{title}}<h3>

<p>{{nickName.toUpperCase()}}</p>

<p>{{age >= 18 ? '成年':'未成年'}}</p>

<p>{{obj.name}}</p>

<p>{{fn()}}</p>
```



##  vue指令

vue 中的指令按照不同的用途可以分为如下 6 大类：

- 内容渲染指令（v-html、v-text）
- 条件渲染指令（v-show、v-if、v-else、v-else-if）
- 事件绑定指令（v-on）
- 属性绑定指令 （v-bind）
- 双向绑定指令（v-model）
- 列表渲染指令（v-for）

内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下2 个：

### v-text（类似innerText）

- - 使用语法：<p v-text="uname">hello</p>，意思是将 uame 值渲染到 p 标签中
  - 类似 innerText，使用该语法，会覆盖 p 标签原有内容

### v-html（类似 innerHTML）

- - 使用语法：<p v-html="intro">hello</p>，意思是将 intro 值渲染到 p 标签中
  - 类似 innerHTML，使用该语法，会覆盖 p 标签原有内容
  - 类似 innerHTML，使用该语法，能够将HTML标签的样式呈现出来。

### v-show
1. 作用：  控制元素显示隐藏
2. 语法：  v-show = "表达式"   表达式值为 true 显示， false 隐藏
3. 原理：  切换 display:none 控制显示隐藏
4. 场景：频繁切换显示隐藏的场景

### v-if

1. 作用：  控制元素显示隐藏（条件渲染）
2. 语法：  v-if= "表达式"          表达式值 true显示， false 隐藏
3. 原理：  基于条件判断，是否创建 或 移除元素节点
4. 场景：  要么显示，要么隐藏，不频繁切换的场景

### v-else 和 v-else-if

1. 作用：辅助v-if进行判断渲染
2. 语法：v-else  v-else-if="表达式"
3. 需要紧接着v-if使用

### v-on
简写为 `@`，为DOM注册事件
### v-bind
1. 作用：动态设置html的标签属性 比如：src、url、title
2. 语法：v-bind:属性名=“表达式”
3. v-bind:可以简写成`:`
```javascript
<img v-bind:src="url" />
<img :src="url" />   （v-bind可以省略）
```

### v-model
所谓双向绑定就是：

1. 数据改变后，呈现的页面结果会更新
2. 页面结果更新后，数据也会随之而变

作用： 给表单元素（input、radio、select）使用，双向绑定数据，可以快速 获取 或 设置 表单元素内容

语法：v-model="变量"

需求：使用双向绑定实现以下需求

1. 点击登录按钮获取表单中的内容
2. 点击重置按钮清空表单中的内容

### v-for
Vue 提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。

v-for 指令需要使用 (item, index) in arr 形式的特殊语法，其中：

- item 是数组中的每一项
- index 是每一项的索引，不需要可以省略
- arr 是被遍历的数组

```javascript
//遍历对象
<div v-for="(value, key, index) in object">{{value}}</div>
// value:对象中的值key:对象中的键index:遍历索引从0开始
//遍历数字
<p v-for="item in 10">{{item}}</p>
// item从1 开始
 ```

### v-for中的key
语法： key="唯一值"

作用：给列表项添加的唯一标识。便于Vue进行列表项的正确排序复用。

为什么加key：Vue 的默认行为会尝试原地修改元素（就地复用）
```javascript
<ul>
  <li v-for="(item, index) in booksList" :key="item.id">
    <span>{{ item.name }}</span>
    <span>{{ item.author }}</span>
    <button @click="del(item.id)">删除</button>
  </li>
</ul>
```
1. key 的值只能是字符串 或 数字类型
2. key 的值必须具有唯一性
3. 推荐使用  id 作为 key（唯一），不推荐使用 index 作为 key（会变化，不对应）

### v-model
作用： 给表单元素（input、radio、select）使用，双向绑定数据，可以快速 获取 或 设置 表单元素内容

语法：v-model="变量"

需求：使用双向绑定实现以下需求

1. 点击登录按钮获取表单中的内容
2. 点击重置按钮清空表单中的内容
```javascript


    <div id="app">
        账户：<input type="text"> <br><br>
        密码：<input type="password"> <br><br>
        <button>登录</button>
        <button>重置</button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script>
        const app = new Vue({
          el: '#app',
          data: {
            username: '',
            password: ''
          },
        })
      </script>
```
## 指令修饰符
### 按键修饰符
- @keyup.enter  —>当点击enter键的时候才触发
### v-model修饰
- v-model.trim  —>去除首位空格
- v-model.number —>转数字
### 事件修饰符
- @事件名.stop —> 阻止冒泡
- @事件名.prevent  —>阻止默认行为
- @事件名.stop.prevent —>可以连用 即阻止事件冒泡也阻止默认行为


## v-bind对样式控制的增强-操作class、style
针对 class 类名 和 style 行内样式 进行控制 。

### 对象语法
当class动态绑定的是对象时，键就是类名，值就是布尔值，如果值是true，就有这个类，否则没有这个类

```javascript
    <div class="box" :class="{ 类名1: 布尔值, 类名2: 布尔值 }"></div>
    <div class="box" :style="{ CSS属性名1: CSS属性值, CSS属性名2: CSS属性值 }"></div>
```
适用场景：一个类名，来回切换


### 数组语法

当class动态绑定的是数组时 → 数组中所有的类，都会添加到盒子上，本质就是一个 class 列表
```javascript
    <div class="box" :class="[ 类名1, 类名2, 类名3 ]"></div>
```
   使用场景:批量添加或删除类

## computed 配置项
1.概念

基于现有的数据，计算出来的新属性。 依赖的数据变化，自动重新计算。

2.语法

1. 声明在 computed 配置项中，一个计算属性对应一个函数
2. 使用起来和普通属性一样使用  {{ 计算属性名}}  

3.注意

1. computed配置项和data配置项是同级的
2. computed中的计算属性虽然是函数的写法，但他依然是个属性
3. computed中的计算属性不能和data中的属性同名
4. 使用computed中的计算属性和使用data中的属性是一样的用法
5. computed中计算属性内部的this依然指向的是Vue实例

### computed完整写法
1. 计算属性默认的简写，只能读取访问，不能 "修改"
2. 如果要 "修改"  → 需要写计算属性的完整写法
```javascript
// 简单写法
computed:{
  计算属性名(){
    逻辑代码
    return 结果
  }
}

// 完整写法
computed:{
  计算属性名(){
    get(){
      逻辑代码
      return 结果
    },
    set(修改值){
      逻辑代码
    }
  }
}



```
### computed计算属性 VS methods方法
1.computed计算属性

作用：封装了一段对于数据的处理，求得一个结果

语法：

1. 写在computed配置项中
2. 作为属性，直接使用
   - js中使用计算属性： this.计算属性
   - 模板中使用计算属性：{{计算属性}}

2.methods计算属性

作用：给Vue实例提供一个方法，调用以处理业务逻辑。

语法：

1. 写在methods配置项中
2. 作为方法调用
   - js中调用：this.方法名()
   - 模板中调用 {{方法名()}}  或者 @事件名=“方法名”

3.计算属性的优势

1. 缓存特性（提升性能）
   计算属性会对计算出来的结果缓存，再次使用直接读取缓存，
   依赖项变化了，会自动重新计算 → 并再次缓存
2. methods没有缓存特性
3. 通过代码比较

## watch侦听器（监视器）

1.作用：

	监视数据变化，执行一些业务逻辑或异步操作

2.语法：

1. watch同样声明在跟data同级的配置项中
2. 简单写法： 简单类型数据直接监视
3. 完整写法：添加额外配置项
- deep:true 对复杂类型进行深度监听
-  immdiate:true 初始化 立刻执行一次

```javascript
// 简单配置
data: { 
  words: '苹果',
  obj: {
    words: '苹果'
  }
},

watch: {
  // 该方法会在数据变化时，触发执行
  数据属性名 (newValue, oldValue) {
    一些业务逻辑 或 异步操作。 
  },
  '对象.属性名' (newValue, oldValue) {
    一些业务逻辑 或 异步操作。 
  }
}


// 完整配置
data: {
  obj: {
    words: '苹果',
    lang: 'italy'
  },
},

watch: {// watch 完整写法
  对象: {
    deep: true, // 深度监视
    immdiate:true,//立即执行handler函数
    handler (newValue) {
      console.log(newValue)
    }
  }
}
```

## 小黑记事本实例
>与echarts进行异步交互
- 在`mounted()`函数中进行echarts实例化，将实例化对象设置到data中，以便在其他函数中进行调用
- 在调用函数中进行二次配置，通常仅需要设置data的配置，其他配置在函数内部完成
```js
this.myChart.setOption({
              
      // 更新图表
      // 数据项
      series: [
        { 
          // data: this.list.map(item => ({ value: item.price, name: item.name}))
          data: this.list.map(item => ({value: item.price, name: item.name}))
        }
      ]
      })
```

```js
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    /**
      * 接口文档地址：
      * https://www.apifox.cn/apidoc/shared-24459455-ebb1-4fdc-8df8-0aff8dc317a8/api-53371058
      * 
      * 功能需求：
      * 1. 基本渲染
      * 2. 添加功能
      * 3. 删除功能
      * 4. 饼图渲染
      */
    const app = new Vue({
      el: '#app',
      data: {
        list:[],
        name: "",
        price: "",
        myChart: null,
      },
      methods:{
        async getData(){
          const res = await axios.get('https://applet-base-api-t.itheima.net/bill', {
            params: {
              creator: 'great'
            }
          })
          this.list = res.data.data

          // console.log(this.list.map(item => ({value: item.price, name: item.name})))
          this.myChart.setOption({
              
              // 更新图表
            // 数据项
            series: [
              { 
                // data: this.list.map(item => ({ value: item.price, name: item.name}))
                data: this.list.map(item => ({value: item.price, name: item.name}))
              }
            ]
            })

        },

        async addData(){
          if(!this.name || !this.price){
            alert("请输入消费名称和价格")
            return
          }
          const res = await axios.post("https://applet-base-api-t.itheima.net/bill",{
            creator: "great",
            name : this.name,
            price : this.price
            }
            )     
          this.price = ""
          this.name = ""
          this.getData()
        },

        async delData(id){
          const res = await axios.delete(`https://applet-base-api-t.itheima.net/bill/${id}`)
          this.getData()
        },
        initChart() {
          const chartDom = document.querySelector("#main");
          this.myChart = echarts.init(chartDom);
          this.myChart.setOption({
              title: {
                text: '销售数据清单',
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
                  data: [
                    
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            })
        },

    
        
      },
      computed:{
          totalPrice(){
            return this.list.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
          }
      },
      created(){
        this.getData()
      },
      mounted(){
        this.initChart();
      }
      })
  </script>
```

## 脚手架Vue CLI
1. 全局安装（只需安装一次即可） yarn global add @vue/cli 或者 npm i @vue/cli -g
2. 查看vue/cli版本： vue --version
3. 创建项目架子：vue create project-name(项目名不能使用中文)
4. 启动项目：yarn serve 或者 npm run serve(命令不固定，找package.json)
### 脚手架操作文件

- main.js  入口文件
- App.vue  App根组件 
- index.html 模板文件

## 普通组件局部注册
1.特点：

只能在注册的组件内使用

2.步骤：

1. 创建.vue文件（三个组成部分）
2. 在使用的组件内先导入再注册，最后使用

3.使用方式：

当成html标签使用即可  <组件名></组件名>

4.注意：

组件名规范 —> 大驼峰命名法， 如 HmHeader
5.语法
```js
// 导入需要注册的组件
import 组件对象 from '.vue文件路径'
import HmHeader from './components/HmHeader'

export default {  // 局部注册
  components: {
   '组件名': 组件对象,
    HmHeader:HmHeaer,
    HmHeader
  }
}
```

### 全局组件注册
1.特点：

全局注册的组件，在项目的任何组件中都能使用

2.步骤

1. 创建.vue组件（三个组成部分）
2. main.js中进行全局注册

3.使用方式

当成HTML标签直接使用

<组件名></组件名>

4.注意

组件名规范 —> 大驼峰命名法， 如 HmHeader

5.语法

Vue.component('组件名', 组件对象)
```js
// 导入需要全局注册的组件
import HmButton from './components/HmButton'
Vue.component('HmButton', HmButton)
```

### scoped标注局部样式
写在组件中的样式会 全局生效 →  因此很容易造成多个组件之间的样式冲突问题。

1. 全局样式: 默认组件中的样式会作用到全局，任何一个组件中都会受到此样式的影响

1. 局部样式: 可以给组件加上scoped 属性,可以让样式只作用于当前组件
```js
<template>

</template>

<script>
export default {

}
</script>
<style scoped>
</style>
```

### data必须是一个函数
保证每个组件实例，维护独立的一份数据对象。
```js
<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 100,
    }
  },
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>
```

### prop
向子组件传递数据
特点
1. 可以 传递 任意数量 的prop
2. 可以 传递 任意类型 的prop

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
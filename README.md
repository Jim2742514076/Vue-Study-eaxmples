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

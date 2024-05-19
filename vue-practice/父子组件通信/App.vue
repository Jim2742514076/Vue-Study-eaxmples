<!--
 * @FilePath: \Vue-Study-eaxmples\vue-xlx\src\App.vue
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-19 16:04:50
 * @email: 2742514076@qq.com
-->
<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    {{ sonTitle }}
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <!-- <Son :title="myTitle" :sonTitle="sonTitle" @changeTitle="(val) => this.myTitle = val"></Son> -->
    <Son :title="myTitle" :sonTitle="sonTitle" @changeTitle="ChangeTitle"></Son>
    <button @click="sonTitle = 'hello world'">父传子</button>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就来黑马程序员',
      sonTitle:""
    }
  },
  components: {
    Son,
  },
  methods: {
    ChangeTitle(val){
      console.log('父组件的changeTitle方法被调用了')
      console.log(val)
      this.sonTitle = val
    }
  }
  
}
</script>

<style>
</style>
<!--
 * @FilePath: \Vue-Study-eaxmples\vue-xlx\src\components\Son.vue
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-19 16:05:21
 * @email: 2742514076@qq.com
-->
<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件 {{title}}
    {{ sonTitle }}
    <button @click="changeTitle" >子传父</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props:['title',"sonTitle"],
  methods:{
    changeTitle(){
      console.log('子组件的changeTitle方法被调用了')
      this.$emit('changeTitle','我是子组件传过来的值')
    }
  }
}
</script>

<style>

</style>
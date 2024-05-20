<!--
 * @FilePath: \Vue-Study-eaxmples\vue-practice\src\components\TodoHeader.vue
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-19 19:22:01
 * @email: 2742514076@qq.com
-->
<template>
      <!-- 输入框 -->
      <header class="header">
      <h1>小黑记事本</h1>
      <input @keyup.enter="addTaxt"  v-model="taxt" placeholder="请输入任务" class="new-todo" />
      <button @click="addTaxt" class="add">添加任务</button>
    </header>
</template>

<script>
export default {
    props:{
      list:{
        type:Array
      }
    },
    data(){
      return {
        taxt:""
      }
    },
    methods:{
      addTaxt(){
        // console.log("点击触发")
        if(!this.taxt) {

          alert("输入待办任务")
          return
        } 
        this.$emit("addTaxt",this.taxt);
        this.taxt = "";
      }
    }

}
</script>

<style>

</style>
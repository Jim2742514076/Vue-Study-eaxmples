<!--
 * @FilePath: \Vue-Study-eaxmples\vue-xlx\src\App.vue
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-19 17:00:06
 * @email: 2742514076@qq.com
-->
<template>
  <div class="app">
    <BaseCount :count="count" @changeCount="ChangeCount"></BaseCount>
  </div>
</template>

<script>
import BaseCount  from './components/BaseCount';
export default {
  components: {
  BaseCount 
    },
  data(){
    return {
      count: 500
    }
  },
  methods:{
    ChangeCount(val){
      this.count = val
    }
  }
}

</script>

<style>

</style>
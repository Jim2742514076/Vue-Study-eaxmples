<!--
 * @FilePath: \Vue-Study-eaxmples\vue-xlx\src\components\BaseCount.vue
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-19 17:01:56
 * @email: 2742514076@qq.com
-->
<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  BaseCount : "BaseCount",
  props : {
    count : Number
  },
  methods : {
    handleAdd(){
      this.$emit('changeCount', this.count+1)
    },
    handleSub(){
      this.$emit('changeCount', this.count-1)
    }
  }
}

</script>

<style>
.base-count {
  width: 100px;
  height: 50px; 
  margin: 20px;
}
</style>
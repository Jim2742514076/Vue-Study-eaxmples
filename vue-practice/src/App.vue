<!--
 * @FilePath: \Vue-Study-eaxmples\vue-practice\src\App.vue
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-19 19:22:01
 * @email: 2742514076@qq.com
-->
<template>
    <section id="app">
      <TodoHeader :list = "list" @addTaxt="addTaxt"></TodoHeader>
      <TodoMain :list = "list" @delTaxt="delTaxt"></TodoMain>
      <TodoFooter @clear="clearTaxt" :list = "list"></TodoFooter>
    </section>
    
 
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoMain
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: '打篮球' },
        { id: 2, name: '看电影' },
        { id: 3, name: '逛街' },
      ],
      id: +new Date(),
     todoName: '',
 }
  },
  methods: {
    addTaxt(val){
        this.list.unshift({id:+new Date(), name:val})
    },
    delTaxt(val){
      // console.log(val)
      this.list = this.list.filter((item) => item.id !== val)
    },
    clearTaxt(){
      // console.log("clear触发")
      this.list = []
    }
  }
}
</script>

<style>

</style>
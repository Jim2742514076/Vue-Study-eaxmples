<template>
  <!-- 列表区域 -->
  <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(item,index) in list" :key="item.id">
          <div class="view">
            <span class="index">{{ index+1 }}.</span> <label>{{ item.name }}</label>
            <button @click="delTaxt(item.id)" class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
    props:{
      list:{
        type:Array
      }
    },
    methods:{
      delTaxt(id){
        this.$emit("delTaxt",id)
        // console.log(id)
      }
    }
}
</script>

<style>

</style>
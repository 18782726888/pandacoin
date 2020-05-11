<template>
  <div id="app">
   <!-- 全局组件底部选项卡 -->
    <div>
           <tabbar :active="active"></tabbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
// 导入组件

export default {
      data(){
    return {
     
        //当前被激活的底部选项卡
        active:'home',
      
    }
  },
}
</script>
<style>

</style>

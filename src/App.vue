<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      transitionName:''//动画名
    }
  },
  watch:{
    //监听路由改变，通过判断路由上meat的index值判断页面是前进还是后退
    $route(to,from){
      if (to.meta.index > from.meta.index) {
        //前进
        this.transitionName = 'slide-left'
      } else if (to.meta.index == from.meta.index){
        this.transitionName = 'slide-left'
      } else {
        //后退
        this.transitionName = 'slide-right'
      }
    }
  },
  mounted(){
    // this.$api.home.getHome({home:'1'})
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
// 页面动画效果
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

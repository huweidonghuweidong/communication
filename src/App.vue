<template>
  <div id="app">
    <Header></Header>
    <transition :name='transitionName'>
      <div :class="code?'app_main':'app_box'">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  data(){
    return{
      transitionName:'',//动画名
      code:1
    }
  },
  components:{
    Header
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
  background:#fff;
  .app_main{
    height:calc(100vh - 100px);
    overflow-y:auto;
  }
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

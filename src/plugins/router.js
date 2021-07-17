import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        name:'home',
        component:() => import ('../pages/Home.vue'),meta:{index:0}
    },
    {
        path:'/details',
        name:'details',
        component:() => import ('../pages/Details.vue'),meta:{index:1}
    }
]
//设置router的参数
const router = new VueRouter({
    mode:'history', //设置成history模式
    routes,
    scrollBehavior(){
        //期望切换页面时滚动到什么位置
        return {x:0,y:0}
    }
})
export default router;
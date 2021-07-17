import Vue from 'vue'
import Vuex from 'vuex'
import {VIEW_HOME} from './type'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        home:[]
    },
    actions:{
        [VIEW_HOME]:({commit},payload) => {
            //可以做业务逻辑
            commit(VIEW_HOME,payload)
        }
    },
    mutations:{
        [VIEW_HOME]:(state,payload) => state.home = payload
    },
    getters:{
        home:(state) => state.home
    }
})
export default store;
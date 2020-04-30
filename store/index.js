import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        baseUrl:'http://192.168.0.103:8001',
        //baseUrl:'http://172.20.10.5:8001',
        imgBaseUrl:'https://fuss10.elemecdn.com',
        isLogin:false,
        user_id:'',
        order:[]
    },
    mutations: {},
    actions: {}
})
export default store
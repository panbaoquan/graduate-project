import Vue from 'vue'
import App from './App'
// import Icon from "./components/icon/index.js"
import Icon from "./components/icon/index.vue"
import {iconfontUrl,iconfontVersion} from "./config/env.js"
import { loadStyle } from './util/util.js'
import cuCustom from './common/colorui/components/cu-custom.vue'
import request from './request/request.js'
Vue.component('cu-custom',cuCustom)
Vue.component('Icon',Icon)
Vue.config.productionTip = false
// Vue.use(Icon)

Vue.prototype.request = request


App.mpType = 'app'
// iconfontVersion.forEach(ele => {
//   loadStyle(iconfontUrl.replace('$key', ele));
// })

const app = new Vue({
    ...App,
		
})
app.$mount()

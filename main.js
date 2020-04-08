import Vue from 'vue'
import App from './App'
import Icon from "./components/icon/index.js"
import {iconfontUrl,iconfontVersion} from "./config/env.js"
import { loadStyle } from './util/util.js'

Vue.config.productionTip = false
Vue.use(Icon)


App.mpType = 'app'
// iconfontVersion.forEach(ele => {
//   loadStyle(iconfontUrl.replace('$key', ele));
// })

const app = new Vue({
    ...App,
		
})
app.$mount()

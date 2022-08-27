import App from './App'
import {$http} from "@escook/request-miniprogram"

uni.$http = $http
$http.baseUrl = 'https://api-ugo-web.itheima.net'

// 自定义方法
uni.$showMsg = function(title='数据加载失败', duration=1000){
	uni.showToast({
		title,duration,
		icon:'none'
	})
}

// 配置拦截器
$http.beforeRequest = function(){
	uni.showLoading({
		title:'数据加载中。',
		
	})
}
$http.afterRequest = function(){
	uni.hideLoading()
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
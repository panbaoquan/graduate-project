/*
 * @Author: Panbaoquan
 * @Email: pbaoquan@163.com
 * @LastEditors: Panbaoquan
 * @LastEditTime: 2020-05-27 01:36:33
 * @Description: 请求数据
 * @Date: 2020-04-13 19:23:35
 * @FilePath: \graduate-project\request\request.js
 * @好好写代码
 */ 
 
// let baseUrl = 'http://47.100.185.82:8001/'
import config from '../config/env'
//获取
const shop ={
	//获取默认商家推荐列表
	getShopList:data=>{
		return uni.request({
			url: config.baseUrl+'/shopping/restaurants?latitude=32.22967&longitude=120.4762', //仅为示例，并非真实接口地址。
			// success: (res) => {
				
			// }
		});
	},
	//搜索餐馆
	searchRestaurant:data=>{
		return uni.request({
			//url: config.baseUrl+'/shopping/test/'+data, 
			url:'http://192.168.0.103:8001/shopping/test/'+data, 

		});
	}
}
export default shop

let baseUrl = 'http://47.100.185.82:8001/'
//获取
export default {
	getShopsList:function(requestUrl){
		let data = 'request'
		
		uni.request({
			url:baseUrl+requestUrl,
			success:(res)=>{
			    let test =  this.call(data)
				console.log(test)
			}
		})
		
	}
}

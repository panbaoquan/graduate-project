 
import config from '@/config/env'
//方法调用模式
const detail = {
    getCategory:data=>{
        return uni.request({
            url: config.baseUrl+'/shopping/getcategory/'+data,
        })    
    },
    getInfo:data=>{
        return uni.request({
            url: config.baseUrl+'/shopping/restaurant/'+data,
        }) 
    }
}
export default detail
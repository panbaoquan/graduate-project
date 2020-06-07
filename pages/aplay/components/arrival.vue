<!--
 * @Author: Panbaoquan
 * @Email: pbaoquan@163.com
 * @LastEditors: Panbaoquan
 * @LastEditTime: 2020-05-27 01:58:04
 * @Description: 送达时间组件
 * @Date: 2020-04-21 16:40:36
 * @FilePath: \graduate-project\pages\aplay\components\arrival.vue
 * @好好写代码
--> 
<template>
  <view class="arrival">
      <view class="arrival_left">送达时间</view>
      <view class="arrival_right">
          <view class="arrival_right_one">
              <span>尽快送达</span>
              <span>|</span>
              <span>预计 {{date}}</span>
          </view>
      </view>
  </view>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
         date:'123'
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
          this.date = this.arrivlDate()
          //console.log(this.arrivlDate())
          
    },
    watch: {

    },
    methods: {
       
       arrivlDate(){
           //当前时间晚半小时
        let currentDate = new Date().valueOf()
         currentDate+=1000*60*30
         
       let date = new Date(currentDate);
       console.log(date)
       //date+=1000*60*30
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let h = date.getHours();
      h = h < 10 ? "0" + h : h; //小时补0
      let m = date.getMinutes();

      m = m < 10 ? "0" + m : m; //分钟补0
      console.log(m)
      return h + ":" + m ;
       }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.arrival {
    background-color: #FFF;
    width: 100%;
    height: 93px;
    margin-top: 10px;
     padding: 0 2px;
     border-left: 5px solid #ee3f4d;
     display: flex;
     &_left {
         width: 50%;
         font-size: 18px;
         font-weight: 500;
         line-height: 93px;
        padding-left: 20px;
     }
     &_right {
         width: 50%;
         display: flex;
         align-items: center;
         &_one {
            color: #ee3f4d;
          
           &>span:nth-child(even){
               margin: 0 10px;
           }
         }
     }
}
</style>

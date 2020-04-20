<template>
  <view class="comment">
      <!--商家评分栏-->
    <view class="top">
      <view class="top_left">
        <view class="top_left_left">4.8</view>
        <view class="top_left_right">
          <view class="top_left_right_title">商家评分</view>
          <view class="top_left_right_rate">
            <!-- <Rate  disabled="true"/> -->
		      	<rate-test :value="rate" size="16" margin="3" disabled="true"></rate-test>
          </view>
        </view>
      </view>
      <view class="top_right">
          <view class="top_right_item" v-for="(item,index) in titles" :key="index">
              <view class="top_right_item_title" >{{item.name}}</view>
              <view class="top_right_item_rate" >{{item.rate}}</view>
         </view>
      </view>
    </view>
    <!--用户评分栏-->
    <view class="userReviews">暂无评论</view>
  </view>
</template>

<script>
import Rate from "@/components/sx-rate/index";
import rateTest from "@/components/uni-rate/uni-rate.vue"
export default {
  props: {},
  data() {
    return {
        titles:[
            {id:1,name:"味道",rate:'4.7'},
            {id:2,name:"包装",rate:'4.8'},
            {id:3,name:"配送",rate:'4.9'},
        ],
		rate:4.8
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {
	  
  },
  methods: {},
  components: {
    Rate,
	rateTest
  }
};
</script>

<style scoped lang="scss">
.top {
  display: flex;
  height: 100px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  background-color: #FFF;
 
   &_left {
    width: 45%;
    display: flex;
    &_left {
      font-size: 32px;
      text-align: center;
      width: 60%;
      line-height: 100px;
    }
    &_right {
      display: flex;
      flex-flow: column;
      justify-content: center;
      &_rate {
        padding-top: 10px;
      }
    }
  }
  &_right {
    width: 55%;
    display: flex;
    &_item {
        width: 30%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        &_title {
              
        }
        &_rate {
            font-size: 18px;
        }
    }
   &>view:nth-child(2){
       view {
    border-right: .5px solid #ccc;

       }
    }
    &>view:nth-child(3){
        width: 40%;
    }
  }
}
.userReviews {
    min-height: 50px;
    line-height: 50px;
    text-align: center;
    color: rgba($color: #000000, $alpha: 0.2);
}

</style>

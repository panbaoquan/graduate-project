<template>
  <view class="confirm">
    <cu-custom bgcolor="bg-gradual-white" :isBack="true" :height="70">
      <block slot="backText">
        <view class="goBack"></view>
      </block>
      <block slot="content">支付订单</block>
    </cu-custom>
    <view class="header">
      <view class="header_time">
        支付剩余时间
        <uni-countdown
          color="#000"
          :show-day="false"
          :hour="0"
          :minute="minute"
          :second="0"
          :reset="reset"
          @timeup="timeUp"
        ></uni-countdown>
      </view>
      <view class="header_total">
        ￥
        <span>{{total}}</span>
      </view>
    </view>
	<view class="content">
		<view class="content_type" v-for="item in types" :key="item.id" @click="select(item.id)">
			<view class="content_type_icon">
			<image :src="item.imgSrc" mode="" />
			</view>
			<view class="content_type_title" :class="[item.id==1?'bottomLine':'']">{{item.name}}</view>
			<view class="content_type_btn">
				<view class="content_type_btn_unselected" v-show="!item.selected"></view>
				<image v-show="item.selected" src="@/static/images/selected.png" mode="aspectFit" />
			</view>
		</view>
	</view>
	<view class="confirmBtn" @tap="confirm">
		确认支付
	</view>
  </view>
</template>

<script>
import uniCountdown from "@/components/linnian-CountDown/uni-countdown.vue";
export default {
  data() {
    return {
      total: "",
      minute: 0,
	  reset: false,
	  types:[
		  {id:1,name:'微信支付',imgSrc:'../../../static/images/wechatPay.png',selected:false},
		  {id:2,name:'支付宝支付',imgSrc:'../../../static/images/apliayPay.png',selected:true},
	  ]
    };
  },
  onLoad(option) {
    this.total = option.total;
    //我的项目中只赋值一次, 所以直接设为true了
    this.reset = !this.reset;
    //如果还要设置天, 时, 秒, 在上面声明绑定后, 在这里赋值即可
    this.minute = 30;
  },
  methods:{
	  select(id) {
		for(let i=0;i<this.types.length;i++){
			if(this.types[i].id==id){
				this.types[i].selected = true
			}else {
		     this.types[i].selected = false
			}
		}
		
	  },
	  confirm(){
		  let url = "/pages/aplay/confirm/success"
		  uni.navigateTo({
			   url: url,
		  });
	  }
  },
  components: {
    uniCountdown
  }
};
</script>
<style lang="scss">
.confirm {
 .cu-bar .action{
	align-items: flex-end;
}
.cu-bar .content {
   bottom: -70%;
}
}
</style>
<style lang="scss" scoped>
.header {
  text-align: center;

  &_time {
	padding-top: 10px;
  }
  &_total {
	padding: 10px 0;
    font-size: 16px;
    & > span {
      font-size: 36px;
      font-weight: bolder;
    }
  }
}
.content {
	width: calc(100% - #{20px});
	margin: 0 auto;
	background-color: #FFF;
	min-height: 100px;
	border-radius: 8px;
	&_type {
		width: 100%;
		display: flex;
		min-height: 50px;
		padding: 0 10px;
		align-items: center;
		&_icon {
			width: 12%;
			&>image {
				width: 30px;
				height: 30px;
			}
		}
		&_title {
			width: 78%;
		}
		&_btn {
			width: 10%;
			color: red;
			display: flex;
			justify-content: center;
			&>image {
				width: 30px;
				height: 30px;
			}
			&_unselected {
				border: 1px solid rgba(0,0,0,0.1);
				width: 17px;
				height: 17px;
				border-radius: 50%;
			}
		}
	}
}
.confirmBtn {
	position: fixed;
	height: 50px;
	text-align: center;
	line-height: 50px;
	bottom: 10px;
	width: 90%;
	color: #FFF;
	background-color: #ee3f4d;
    left: 5%;
	border-radius: 8px;
	font-size: 18px;
}
.bottomLine {
	border-bottom: 1px solid rgba(0,0,0,.05);
	padding: 15px 0;
}
</style>

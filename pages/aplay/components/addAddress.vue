<!--提交订单处,添加收货地址-->
<template>
  <view>
    <view class="addAddress" @tap="addAddress()">
      <view class="addAddress_left">
        <Icon icon="icon-dingwei" color="#ee3f4d" />
        <view class="addAddress_left_address">
			<view v-if="address==''?true:false">请添加一个收获地址{{mobilePhoneNumber}}</view>
			<view class="title" v-else>
            <view class="title_top">
              <text class="text-black text-bold">{{address.name}}</text>
              <text class="text-black">
				  <text v-if="address.sex==1?true:false">先生</text>
				  <text v-if="address.sex==2?true:false">女士</text>
			  </text>
              <text class="text-black">{{address.phone}}</text>
            </view>
            <view class="title_bottom">
				<!--无-->
              <view class="cu-tag bg-red" v-if="address.tag_type==1?true:false">{{address.tag}}</view>
                <!--家-->
			  <view class="cu-tag bg-red" v-if="address.tag_type==2?true:false">{{address.tag}}</view>
              <!--学校-->
			  <view class="cu-tag bg-blue" v-if="address.tag_type==3?true:false">{{address.tag}}</view>
              <!--公司-->
			  <view class="cu-tag bg-green" v-if="address.tag_type==4?true:false">{{address.tag}}</view>
              <text class="text-black">{{address.address_detail}}</text>
            </view>
          </view>
		</view>
      </view>
      <view class="addAddress_right">
        <Icon icon="icon-right" size="18" />
      </view>
      <view class="addAddress_bgCard"></view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
	  address:{
		  default:''
	  }
  },
  data() {
    return {
      mobilePhoneNumber:''
	};
  },
  computed: {},
  created() {},
  mounted() {
  },
  watch: {
	  address(val){
		  this.address = val
	  }
  },
  methods: {
    addAddress() {
	 if(this.$store.state.isLogin){
         uni.navigateTo({
		   url: '/pages/aplay/chooseAddress/chooseAddress'
	  });
	 }else {
		 uni.showToast({
			 title: '您尚未登录,请先登录后再操作',
			 duration: 3000,
			 icon:'none'
		 });
	 }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.addAddress {
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 85px;
  align-items: center;
  background-size: contain;
  &_left {
    display: flex;
	align-items: center;
    &_address {
      padding-left: 5px;
      font-size: 16px;
    }
  }
  &_bgCard {
    position: absolute;
    background-image: url("@/static/images/cardbg.png");
    background-size: 60px;
    height: 3px;
    width: 100%;
    bottom: 0;
    left: -2px;
  }
}
.title {
  height: 100%;
  padding-left: 5px;
  &_top {
    & > text {
      padding-right: 5px;
    }
  }
  &_bottom {
    & > text {
      padding-left: 5px;
    }
  }
}
</style>

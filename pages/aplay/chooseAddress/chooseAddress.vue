<!--选择地址-->
<template>
  <view class="chooseAddress">
    <!-- 导航栏 -->
    <cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
      <block slot="backText"><view class="goBack"></view></block>
      <block slot="content">选择地址</block>
    </cu-custom>
    <!--选择地址列表-->
    <view class="chooseAddress_list">
      <radio-group class="block" @change="RadioChange">
        <view class="cu-form-group" v-for="(item,index) in list" :key="index" @tap="selectAddress(item)">
          <radio :id="item.id" :class="radio==item.id?'checked':''" :checked="radio==item.id?true:false" :value="item.id"></radio>
		  <label :for="item.id">
		  <view class="title" >
            <view class="title_top">
              <text class="text-black text-bold">{{item.name}}</text>
              <text class="text-black">
				  <text v-if="item.sex==1?true:false">先生</text>
				  <text v-if="item.sex==2?true:false">女士</text>
			  </text>
              <text class="text-black">{{item.phone}}</text>
            </view>
            <view class="title_bottom">
				<!--无-->
              <view class="cu-tag bg-red" v-if="item.tag_type==1?true:false">{{item.tag}}</view>
                <!--家-->
			  <view class="cu-tag bg-red" v-if="item.tag_type==2?true:false">{{item.tag}}</view>
              <!--学校-->
			  <view class="cu-tag bg-blue" v-if="item.tag_type==3?true:false">{{item.tag}}</view>
              <!--公司-->
			  <view class="cu-tag bg-green" v-if="item.tag_type==4?true:false">{{item.tag}}</view>
              <text class="text-black">{{item.address_detail}}</text>
            </view>
          </view>
		  </label>
        </view>
        <!-- <view class="cu-form-group">
					<view class="title">单选操作(radio)</view>
					<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
        </view>-->
      </radio-group>
    </view>
    <!--新增地址-->
    <view class="chooseAddress_add">
		<view @tap="addNewAddress()"><text class="lg text-green cuIcon-roundadd" style="padding-right:4px"></text>新增加收获地址</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
	  radio: '1',
	  list:[]
    };
  },
  onLoad(){
	  this.getAddresses()
  },
  methods: {
    //
    RadioChange(e) {
	  this.radio = e.detail.value;
	  
    },
    //获取地址
    getAddresses() {
      uni.request({
        url:
          this.$store.state.baseUrl +
          "/v1/users/" +
          this.$store.state.user_id +
          "/addresses",
        success: res => {
		  this.list = res.data;
		  console.log(this.list)
        }
      });
	},
	//选中地址
	selectAddress(item){
		let address = JSON.stringify(item)
		//uni.setStorageSync('choosedAddress', address)
		uni.navigateTo({
			 url: '/pages/aplay/index?address='+address
		});
	},
	//增加新收货地址
	addNewAddress(){
		uni.navigateTo({
			 url: '/pages/aplay/addNewAddress/addNewAddress'
		});
	}
  }
};
</script>
<style lang="scss">
.chooseAddress {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
  .uni-label-pointer {
	  width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.chooseAddress {
	&_add {
		display: flex;
		justify-content: center;
		&>view {
			margin: 25px 0;
			color: #39b54a;
			font-size: 18px;
			font-weight: 500;
			border-radius: 4px;
			padding: 10px 35px;
		}
	}
}
.cu-form-group {
  justify-content: flex-start;
  min-height: 80px;
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

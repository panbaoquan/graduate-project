<template>
	<view class="addAddress">
	<cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
		    <block slot="backText"><view class="goBack"></view></block>
		    <block slot="content">添加地址</block>
	</cu-custom>
	<view class="content">
		    <view class="cu-form-group margin-top">
				<view class="title">姓名</view>
				<input placeholder="请填写你的姓名" name="input" v-model="name"></input>
			</view>
			<!-- <navigator url="/pages/mine/address/location/location" hover-class="none"> -->
			<view class="cu-form-group" @tap="chooseLocation">
				<view class="title">地址</view>
				<input placeholder="请输入小区/写字楼/学校/公司/" name="input" disabled v-model="address_detail"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			<!-- </navigator> -->
			<view class="cu-form-group">
				<view class="title">详细收货地址</view>
				<input placeholder="请填写详细送餐地址" name="input" v-model="address"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="输入框带标签" name="input" v-model="phoneNum"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
		     </view>
	</view>
	
     	<view class="padding flex flex-direction">
			<button class="cu-btn bg-green margin-tb-sm lg" @tap="addAddress">新增地址</button>
	    </view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				address_detail:'',
				//经纬度
				geohash:'',
				address:'',
				phoneNum:''
			}
		},
		methods: {
			//选择详细地址
		chooseLocation() {
                    let _this = this
					uni.chooseLocation({
                         success: function (res) {
					        console.log('位置名称：' + res.name);
							_this.address_detail = res.name
                            console.log('详细地址：' + res.address);
                            console.log('纬度：' + res.latitude);
							console.log('经度：' + res.longitude);
							_this.geohash = res.latitude+','+res.longitude
                        }
					});
					
			},
			//新增地址
		addAddress(){
			uni.request({
				url: this.$store.state.baseUrl+"/v1/users/"+this.$store.state.user_id+"/addresses", 
				method:'POST',
				data: {
					name:this.name,
					address_detail:this.address_detail,
					geohash:this.geohash,
					address:this.address,
					phone:this.phoneNum,
					//默认
					phone_bk: "", 
                    poi_type: 0,
					sex: 1,		
					tag: "公司",
                    tag_type: 4
				},
				success: (res) => {
					if(res.data.status==0){
						uni.showToast({
						title: res.data.message,
						duration: 3500,
						icon:'none'
					});
					}else if(res.data.status==1){
						uni.navigateTo({
							 url: '/pages/mine/address/address',
						});
					}
				}
			});
		},
		},
		
		watch:{
			geohash(val){
				this.geohash = val
			}
		}
	}
</script>
<style lang="scss">
 .addAddress {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
}
</style>
<style lanf="scss"  scoped>

</style>

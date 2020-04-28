<!--增加新的收货地址-->
<template>
	<view class="addNewAddress">
	 <!-- 导航栏 -->
    <cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
      <block slot="backText"><view class="goBack"></view></block>
      <block slot="content">添加地址</block>
    </cu-custom>
	<view class="addNewAddress_form">
		<view class="cu-form-group margin-top">
			<view class="title">联系人</view>
			<input placeholder="你的名字" name="input" v-model="name"></input>
		</view>
		 <radio-group class="block" @change="RadioChange">
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group" style="padding-left:45px;justify-content: flex-start;">
					<view class="title"></view>
					<view>
						<radio id="male" class='green margin-left-sm' :class="radio=='1'?'checked':''" :checked="radio=='1'?true:false" value="1" ></radio>
						<label for="male">先生</label>
						<radio id="female" class='green margin-left-sm' :class="radio=='2'?'checked':''" :checked="radio=='2'?true:false" value="2"></radio>
						<label for="female">女士</label>
					</view>
				</view>
				<!-- #endif -->
		</radio-group>
		<view class="cu-form-group margin-top">
			<view class="title">联系电话</view>
			<input placeholder="你的手机号码" name="input" v-model="phoneNum"></input>
		</view>
		<view class="cu-form-group" @tap="chooseLocation">
				<view class="title">送餐地址</view>
				<input placeholder="" name="input" disabled v-model="address_detail"></input>
				<text class='cuIcon-locationfill text-orange'></text>
		</view>
		<view class="cu-form-group">
			<view class="title">详细地址</view>
			<input placeholder="(如门牌号等)" name="input" v-model="address"></input>
		</view>
		<!--标签-->
		<view class="cu-form-group margin-top">
			<view class="title">标签</view>
			<view class='cu-tag' 
			v-for="(item,index) in tags" 
			:key="index"
			:class="[item.id==chooseTag?'bg-red':'line-gray']"
			@tap="chooseTag=item.id"
			>
			{{item.name}}</view>
		</view>
	</view>
	<!--confirm-->
	<view class="padding flex flex-direction">
		<button class="cu-btn bg-green margin-tb-sm lg" @tap="confirmAdd">确定</button>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chooseTag:1,
				tags:[
					{id:1,name:'无'},
					{id:2,name:'家'},
					{id:3,name:'学校'},
					{id:4,name:'公司'},
				],
				radio: '1',
				//经纬度
				geohash:'',
				address_detail:'',
				name:"",
				address:'',
				phoneNum:''
			}
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
			},
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
			confirmAdd(){
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
					sex: this.radio,		
					tag: this.tags[this.chooseTag-1].name,
                    tag_type: this.chooseTag
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
							 url: '/pages/aplay/chooseAddress/chooseAddress',
						});
					}
				}
			});
			}
		}
	}
</script>
 <style lang="scss">
 .addNewAddress {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }

 
}
 
 </style>
<style>

</style>

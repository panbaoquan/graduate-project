<!--修改密码-->
<template>
  <view class="modifyPassword">
	<cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
		    <block slot="backText"><view class="goBack"></view></block>
		    <block slot="content">重置密码</block>
	</cu-custom>
	<!--手机号码-->
	<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="" name="input" v-model="phoneNumber"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
	</view>
	<!--旧密码-->
	<view class="cu-form-group">
		<view class="title">旧密码</view>
		<input placeholder="" name="input" v-model="oldPassword" type="password"></input>
	</view>	
	<!--新密码-->
	<view class="cu-form-group">
		<view class="title">新密码</view>
		<input placeholder="" name="input" v-model="newPassword" type="password"></input>
	</view>		
	<!--确认新密码-->
	<view class="cu-form-group">
		<view class="title">确认新密码</view>
		<input placeholder="" name="input" v-model="confirmNewPwd" type="password" ></input>
	</view>	
	<!--确认重置-->
	<view class="padding flex flex-direction">
		<button class="cu-btn bg-red margin-tb-sm lg" @tap="changePwd">确认修改</button>
	</view>
	<!--模态框-->
	<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">提示</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{message}}
				</view>
			</view>
		</view>
  </view>
   
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:'',
				oldPassword:'',
				newPassword:'',
				confirmNewPwd:'',
				modalName:'null',
				message:''
			};
		},
		methods:{
			//隐藏模态框
			hideModal(e) {
				this.modalName = null
			},
			//重置密码
            changePwd(){
		
			 if (this.phoneNumber.length !=11) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
			}
			if(this.newPassword!=this.confirmNewPwd) {
				uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '两次密码输入不一致'
				    });
				    return false;
			}
			 uni.request({
				 url: this.$store.state.baseUrl+'/v2/changepassword',
				 method:'POST', 
				 data: {
					captcha_code:'1234',
                    confirmpassword: this.confirmNewPwd,
                    newpassword: this.newPassword,
                    oldpassWord: this.oldPassword,
                    username: this.phoneNumber
				 },
				 success: (res) => {
					 if(res.data.status==1){
						 this.message = res.data.success
					 }else {
					 this.message = res.data.message
					 }
					 this.modalName = 'Modal'
				 }
			 });
		 }
		},
		watch:{}
	}
</script>
<style lang="scss">
.modifyPassword {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
}
</style>
<style lang="scss" scoped>

</style>

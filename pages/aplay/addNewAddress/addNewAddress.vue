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
				<input placeholder="你的名字" name="input"></input>
		</view>
		 <radio-group class="block" @change="RadioChange">
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group" style="padding-left:45px;justify-content: flex-start;">
					<view class="title"></view>
					<view>
						<radio id="male" class='green margin-left-sm' :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
						<label for="male">先生</label>
						<radio id="female" class='green margin-left-sm' :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
						<label for="female">女士</label>
					</view>
				</view>
				<!-- #endif -->
		</radio-group>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: 'A',
			}
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
			},
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

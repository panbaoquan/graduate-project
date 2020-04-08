<template>
	<view class="storeDetail">
		<!--背景图片-->
		<view class="topBg">
			背景图片
		</view>
		<!--body-->
		<view class="bottomBody"></view>
		<!--商店信息-->
		<shop-info></shop-info>
	</view>
</template>

<script>
	import shopInfo from './components/shopInfo.vue'
	export default {
		data() {
			return {
			   data:''	
			};
		},
		onLoad(option) {
			console.log(option.id)
			this.data = option.id
		},
		components:{
			shopInfo
		}
	}
</script>

<style lang="scss">
.storeDetail{
	
}
//
.topBg{
	width: 100%;
	height: 160px;
	outline:  1px solid skyblue;
}
//
.bottomBody{
	width: 100%;
	height: 100%;
	outline: 1px solid #ccc;
}


</style>

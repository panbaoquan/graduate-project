<template>
	<view class="fixed">
		<cu-custom :isBack="true" bgColor="bg-shadeTop text-white" >
			<block slot="backText">返回</block>
			<block slot="content">垂直导航</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.fixed {
		position: fixed;
		z-index: 99;
		height: 80px;
		
	}
</style>

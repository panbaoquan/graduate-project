<template>
		<view class="top">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
		
			</view>
			<!-- 	<view class="header">
				<view class="header_location">
					<text class="iconfont icon_location"></text>
				</view>
				<view class="header_messageCenter">
					<text class="iconfont icon_tongzhi"></text>
				</view>
			</view> -->
			<!-- 给body做一个两角半圆的头 -->
			<!-- 	<view class="content_header"></view> -->
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

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-image: linear-gradient(-135deg, #DA4138 0%, #D43A32 100%);
	}
</style>

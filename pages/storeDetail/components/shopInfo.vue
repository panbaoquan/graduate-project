<template>
	<view>
		<!--商店名称栏-->
		<view class="shopInfo">
			<view class="shopInfo_logoImg">
				<image src="../../../static/images/shops/logo/yidiandian.jpg" mode="aspectFill"></image>
			</view>
			<view class="shopInfo_content">
				<view class="shopInfo_content_main">
					<view class="shopInfo_content_name">
						一點點
					</view>
					<view class="shopInfo_content_detail">
						配送时间
					</view>
					<view class="shopInfo_content_notice">
					    公告:
					</view>
					<view class="shopInfo_content_activity">
					   更多活动尽请期待
					</view>
				</view>
			</view>
		</view>
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
//shop Message商家信息栏
.shopInfo {
	width: 90%;
	position: absolute;
	left: 5%;
	top:85px;
	border: 1px solid skyblue;
	&_logoImg{
		position: absolute;
		right: 0;
		&>image{
		width: 50px;
		height: 50px;
		}
	}
	&_content{
		width: 100%;
		min-height: 100px;
		border-radius: 8px;
		border: 1px solid red;
		margin-top: 25px;
		&_main{
            margin: 10px;
		}
		&_detail,&_notice,&_activity{
			font-size: 12px;
		}
	}
	
}
</style>

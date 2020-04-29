<template>
	<view>
		<!--商店名称栏-->
		<view class="shopInfo">
			<view class="shopInfo_logoImg">
				<!-- <image src="../../../static/images/shops/logo/yidiandian.jpg" mode="aspectFill"></image> -->
				<image :src="'//elm.cangdu.org/img/'+data.image_path" mode="aspectFill" />
			</view>
			<view class="shopInfo_content">
				<view class="shopInfo_content_main">
					<view class="shopInfo_content_name">
						<!-- 一點點 -->
						{{data.name}}
					</view>
					<view class="shopInfo_content_detail">
						约45分钟
					</view>
					<view class="shopInfo_content_notice">
					    公告: {{data.promotion_info}}
					</view>
					<view class="shopInfo_content_activity">
					   <!-- 更多活动尽请期待 -->
					   {{data.description}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
        props:{
			data:''
		},
		data() {
			return {
				
			};
		},
		watch:{
			data(val){
				this.data = val
			}
		}
	}
</script>

<style lang="scss">
//shop Message商家信息栏
.shopInfo {
	width: 90%;
	position: absolute;
	left: 5%;
	top:100px;
	&_logoImg{
		position: absolute;
		right: 10px;
		&>image{
		width: 60px;
		height: 60px;
		}
	}
	&_content{
		width: 100%;
		min-height: 100px;
		border-radius: 8px;
		background-color: #FFF;
		margin-top: 25px;
		&_name {
			font-weight: 600;
			font-size: 20px;
		}
		&_main{
            margin: 10px;
		}
		&_detail,&_notice,&_activity{
			font-size: 12px;
		}
	}
	
}
</style>

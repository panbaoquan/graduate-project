<template>
<view class="swiper">
	<swiper indicator-dots="true" autoplay="true" interval="3000" duration="1000"
	 circular="true">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item" :style="{backgroundColor:item.bgcolor}">
				{{item.content}}
			</view>
		</swiper-item>
	</swiper>
</view>
</template>

<script>
	export default{
		data(){
			return{
				info: [{
					content: '',
					bgcolor: 'red'
				}, {
					content: '',
					bgcolor: 'green'
				}, {
					content: '',
					bgcolor: 'blue'
				},{
					content:'',
					bgcolor:'skyblue'
				}
				],
			}
		},
		methods:{}
	}
</script>

<style scoped lang="scss">
	.swiper {
		width: 100%;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
</style>

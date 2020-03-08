<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		会员
		<search></search>
	</view>
</template>

<script>
	import search from '../../components/zy-search/zy-search.vue'
	export default {
		data() {
			return {

			};
		},
		components:{
			search
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-image: linear-gradient(-135deg, #FFBD27 0%, #FFD161 100%);
	}
</style>

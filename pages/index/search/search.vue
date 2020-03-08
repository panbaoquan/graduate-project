<template>
	<view>
	
		    <view class="status_bar">
		    	<!-- 这里是状态栏 -->
		    </view>
			<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
			:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
	
		<text @tap='goBack'>返回</text>
	</view>
</template>

<script>
	import zySearch from '../../../components/zy-search/zy-search.vue'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['栏目1','栏目2','栏目3','栏目4']	//初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				uni.showToast({
					title:'回调的搜索信息: ' + e,
					icon:"none"
				})
			},
			goBack(){
				uni.navigateBack({
				    delta: 1
				});
			}
		},
	}
</script>
<style>

</style>

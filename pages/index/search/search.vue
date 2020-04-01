<template>
	<view>
		    <view class="status_bar">
		    	<!-- 这里是状态栏 -->
		    </view>
			<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
			:hot-list="hotList" @getSearchText="getSearchText"></zy-search>
	
		<text @tap='goBack'>返回</text>
		<view>
			Test远程接口
		</view>
	<!-- 	<view class="test">
			<span v-for="item in myTestData" :key="item.id">
				<span v-show="item.id==3?true:false">-</span>
				{{item.name}}
				<span v-show="item.id==1?true:false">,</span>
				<span v-show="item.id==3?true:false">-</span>
			</span>
		</view> -->
		<view class="" @tap="showMaps">
			地图显示
		</view>
	</view>
</template>

<script>
	import zySearch from '../../../components/zy-search/zy-search.vue'
	export default {
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['栏目1','栏目2','栏目3','栏目4'],	//初始化推荐列表
				myTestData:''
			}
		},
		onShow(){
			uni.request({
			    //url: 'http://rap2.taobao.org:38080/app/mock/248904/login//', //仅为示例，并非真实接口地址。
			   url:'http://47.100.185.82:38080/app/mock/16/post/test',
				// data: {
			 //        userName: 'Test',
				// 	password:'123'
			 //    },
			   method:'POST',
			    success: (res) => {
					// this.myTestData = res.data.data		
				  console.log(res)
			    }
			});

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
			},
			showMaps(){
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
				    }
				});
			}
			
		},
		components: {
			zySearch
		},
	}
</script>
<style>

</style>

<template>
	<view class="searchBarwidth">
		<view>
			<view class="bar" @tap="searchPage">
				<image src="@/static/images/search.png" mode=""></image>
			    <input type="text" value="" placeholder="请输入要搜索的内容" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				
			}
		},
		onReady(){
			
		},
		
		methods:{
			searchPage() {
				uni.navigateTo({
					url:'../search/search'	
				})
			},
		}
	}

</script>

<style scoped lang="scss">
	.searchBarwidth {
		 width:100%;
	}
	.bar {
	    width        : 95%;
	    height       : 40px;
	    border       : 1px solid #ccc;
	    border-radius: 20px;
	    display      : flex;
	    align-items  : center;
	    margin       : 10px auto;
	    &>image {
	        width : 20px;
	        height: 20px;
	        margin: 0 10px;
		
	
	    }
	}
</style>

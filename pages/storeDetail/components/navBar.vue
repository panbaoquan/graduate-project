<template>
	<view>
		<scroll-view scroll-x class="bg-white nav text-center myNav">
			<view class="cu-item " :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in navList" :key="item.id" @tap="tabSelect" :data-id="index">
				{{item.name}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				navList:[
					{id:1,name:'商品'},
					{id:2,name:'评论'},
					{id:3,name:'商家'},
					]
			};
		},
		mounted(){
			
		},
		methods:{
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			    this.$emit('func',this.TabCur)
			}
		},
		// watch:{
		// 	TabCur:(val,oldVal)=>{
		// 	     this.TabCur = val
		// 	 }
		// }
	}
</script>

<style lang="scss">
.myNav {
	margin-top: 70px;
	border-bottom: 1px solid #ccc;
	.cu-item {
		padding: 0;
		font-size: 16px;
		margin: 0 25px;
	}
}
</style>

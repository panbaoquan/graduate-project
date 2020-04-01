<template>
	<view>
		<top-bar></top-bar>
		会员
		<search></search>
	</view>
</template>

<script>
	import search from '../../components/zy-search/zy-search.vue'
	import topBar from '../../components/topbar/topBar.vue'
	export default {
		data() {
			return {

			};
		},
		components:{
			search,
			topBar
		}
	}
</script>

<style lang="scss">

</style>

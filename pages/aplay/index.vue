<template>
	<view class="aplay">
		<cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
		    <block slot="backText"><view class="goBack"></view></block>
		    <block slot="content">提交订单</block>
		</cu-custom>
		<!--添加收货地址-->
		<Address/>
		<!--送达时间-->
		<Arrival/>
		<!--付钱方式-->
		<Types/>
		<!--订单-->
		<Order :total="total" :list="list"/>
	</view>
</template>

<script>
import Address from "./components/addAddress.vue"
import Arrival from "./components/arrival.vue"
import Types from "./components/aplayTypes"
import Order from "./components/order.vue"
	export default {
		data() {
			return {
				total:0,
				list:[{}]
			};
		},
		onLoad(option){
			this.total = option.total
			this.list = JSON.parse(option.list)
		},
		components: {
			Address,
			Arrival,
			Types,
			Order
		}
	}
</script>
<style lang="scss">
.aplay {
 .cu-bar .action{
	align-items: flex-end;
}
.cu-bar .content {
   bottom: -70%;
}

}
</style>
<style lang="scss" scoped>

</style>

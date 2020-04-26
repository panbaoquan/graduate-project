<template>
  <view class="address">
	<cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
		    <block slot="backText"><view class="goBack"></view></block>
		    <block slot="content">地址管理中心</block>
	</cu-custom>
    <!--地址list组件-->
    <view></view>
    <!--新增地址-->
    <view class="address">
       	<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="/pages/mine/address/add/add">
						<text class="cuIcon-locationfill text-orange"></text>
						<text class="text-grey">新增地址</text>
					</navigator>
				</view>
		 </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    menuArrow: true,
	menuCard: false,
    };
  }
};
</script>
<style lang="scss">
.address {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
}
</style>
<style lang="scss" scoped>
.address{
	margin-top: 10px;
}
</style>

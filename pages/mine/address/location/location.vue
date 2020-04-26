<template>
  <view class="location">
    <cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
		    <block slot="backText"><view class="goBack"></view></block>
		    <block slot="content">搜索地址</block>
	</cu-custom>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    // uni.getLocation({
    //   type: "wgs84",
    //   success: function(res) {
    //     console.log("当前位置的经度：" + res.longitude);
    //     console.log("当前位置的纬度：" + res.latitude);
    //   }
	// });

  }
};
</script>
<style lang="scss">
.location {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
}
</style>
<style lang="scss" scoped>
</style>

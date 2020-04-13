<template>
  <view class="fixed">
    <cu-custom :isBack="true" bgcolor="text-white">
      <block slot="backText">返回</block>
      <block slot="content"></block>
    </cu-custom>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.fixed {
  position: fixed;
  z-index: 99;
  height: 80px;
  .cu-bar {
	min-height: 50px;
	.action:first-child{
		padding-top: 40px;
		color: #FFF;
	}
  }
}
</style>

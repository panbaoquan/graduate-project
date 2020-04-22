<template>
  <view class="success">
    <!-- <cu-custom bgcolor="bg-gradual-white" :isBack="true" :height="70">
      <block slot="backText">
        <view class="goBack"></view>
      </block>
	  <Icon icon="icon-fanhui" />
      <block slot="content">支付结果</block>
    </cu-custom>-->
    <view class="title">
      <view class="title-backIcon" @tap="goback">
        <Icon icon="icon-fanhui" color="#000" size="16" style="margin-left:10px;"></Icon>
      </view>
      <view class="title-content">支付结果</view>
      <view class="title-right"></view>
    </view>
    <view class="content">
      <image src="@/static/images/success.png" mode="aspectFit" />
      <view class="content_title">支付成功!</view>
      <view>{{time}}s后将自动返回首页</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      time: 5
    };
  },
  mounted() {
    // this.autoBack()
  },
  methods: {
    autoBack() {
      if (this.time >= 0) {
        let name = setInterval(() => {
          this.time--;
          if (this.time == 0) {
            clearInterval(name);
            let url = "/pages/index/index";
            uni.switchTab({
              url: url
            });
          }
        }, 1000);
      }
	},
	goback(){
		let url = "/pages/index/index";
            uni.switchTab({
              url: url
         });
	}
  }
};
</script>
<style lang="scss">
.success {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
}
</style>
<style lang="scss" scoped>
.content {
  text-align: center;
  margin-top: 50px;
  & > image {
    height: 100px;
    width: 100px;
  }
  &_title {
    font-size: 20px;
    font-weight: bold;
  }
}
.title {
  padding-top:40px;
  display: flex;
  height: 70px;
  align-items: center;
  &-backIcon {
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-content {
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #333333;
  }
  &-right {
    flex: 1;
  }
}
</style>

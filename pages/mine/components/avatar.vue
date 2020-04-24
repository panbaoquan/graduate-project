<template>
  <view class="avatar">
    <view class="avatar-left" @click="toPerson">
      <view>
        <Icon icon="icon-touxiang" size="30"></Icon>
      </view>
      <text v-if="isLogin">用户0291020192</text>
      <text v-if="!isLogin">登录/注册</text>
    </view>
    <view class="avatar-right">
      <!-- <Icon icon="icon-shezhi" size="20"></Icon> -->
      <Icon icon="icon-tongzhi" size="20" style="margin:0 20rpx"></Icon>
    </view>
  </view>
</template>

<script>
import Icon from "../../../components/icon/index.vue";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    toPerson() {
      //this.isLogin = !this.isLogin;
      if (this.isLogin) {
        uni.navigateTo({ url: "/pages/mine/personal-information/index" });
      }else {
        uni.navigateTo({ url: "/pages/mine/login/index" });
      }
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang="less">
.avatar {
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-left {
    display: flex;
    align-items: center;
    & > view {
      width: 90rpx;
      height: 90rpx;
      text-align: center;
      line-height: 100rpx;
      margin: 0 10rpx;
      border-radius: 50%;
      background-color: rgb(219, 215, 215);
    }
  }

  &-right {
    display: flex;
  }
}
</style>

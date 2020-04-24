<template>
  <view>
    <view class="status_bar"></view>
    <view class="title">订单</view>
    <view class="content">
      <view class="avator">
        <Icon icon="icon-touxiang1" size="184" />
      </view>
      <view class="tip">您还没有登录,请登录后查看订单</view>
      <view class="btn">
        <view class="btn_login">登录/注册</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  background-color: #f1f1f1;
}
.title {
  font-size: 18px;
  margin-top: 5px;
  text-align: center;
}
.content {
  text-align: center;
  margin-top: 100px;
  .tip {
    padding: 15px 0;
  }
  .btn {
	display: flex;
	justify-content: center;
    &_login {
	  width: 100px;
	  background-color: #D43A32;
      height: 30px;
      text-align: center;
	  line-height: 30px;
	  color: #FFF;
    }
}
}

</style>

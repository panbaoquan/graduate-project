<template>
  <view class="order">
    <cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
      <block slot="backText">
        <view class="goBack"></view>
      </block>
	  <Icon icon="icon-fanhui" />
      <block slot="content">订单</block>
    </cu-custom>
    <view class="content"  v-if="!this.$store.state.isLogin">
        <view class="avator">
          <Icon icon="icon-touxiang1" size="184" />
        </view>
        <view class="tip">您还没有登录,请登录后查看订单</view>
        <view class="btn">
          <view class="btn_login" @tap="login">登录/注册</view>
        </view>
    </view>
     <view v-if="this.$store.state.isLogin">
         <List v-for="(item,index) in this.$store.state.order" :key="index" :order="item"/>
     </view>
  </view>
</template>
<script>
import List from './components/list.vue'
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      uni.navigateTo({
        url: "/pages/mine/login/index"
      });
    }
  },
  components: {
    List
  }
};
</script>
<style lang="scss">
 .order {
 .cu-bar .action{
	align-items: flex-end;
   }
.cu-bar .content {
   bottom: -70%;
  }
}
</style>
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
      background-color: #d43a32;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #fff;
    }
  }
}
</style>

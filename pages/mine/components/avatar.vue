<template>
  <view class="avatar">
    <view class="avatar-left" @click="toPerson">
      <view>
        <Icon icon="icon-touxiang" size="30" v-if="!this.$store.state.isLogin"></Icon>
        <image :src="imgSrc" mode="aspectFit" v-if="this.$store.state.isLogin" />
      </view>
      <text v-if="this.$store.state.isLogin">{{userName}}</text>
      <text v-if="!this.$store.state.isLogin">登录/注册</text>
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
  props:{
    imgSrc:{
      default:''
    },
    userName:{
     default:'用户0291020192'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    //进入个人中心页面
    toPerson() {
      //是否登录成功,判断进入个人中心页面
      if (this.$store.state.isLogin) {
        //页面跳转传参
        uni.navigateTo({ 
          url: "/pages/mine/personal-information/index?imgSrc="+this.imgSrc+'&userName='+this.userName
        });
      } else {
        uni.navigateTo({ url: "/pages/mine/login/index" });
      }
    }
  },
  components: {
    Icon
  },
  mounted() {
     console.log(this.userName)
  },
  watch: {
    
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
      & > image {
        width: 90rpx;
        height: 90rpx;
        border-radius: 50%;
      }
    }
  }

  &-right {
    display: flex;
  }
}
</style>

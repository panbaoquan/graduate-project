<!--
 * @Author: wangzhongjie
 * @Date: 2020-03-31 10:26:54
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-03-31 10:27:10
 * @Description: 个人资料
 * @Email: UvDream@163.com
 -->
<template>
  <view class="person">
    <cu-custom bgcolor="bg-gradual-white" :isBack="true" :height="70">
      <block slot="backText">
        <view class="goBack"></view>
      </block>
      <block slot="content">个人资料</block>
    </cu-custom>
    <!--占位-->
    <view class="placehoder"></view>
    <List name="头像" :imgSrc="imgSrc" isImg="false" />
    <List name="用户名" :content="userName" />
    <List name="登录密码" content="修改" />

    <!--退出登录-->
    <view class="loginOut" @tap="loginOut">退出登录</view>
  </view>
</template>

<script>
import List from "./components/list";
export default {
  data() {
    return {
      imgSrc: "",
      userName: "",
      test:'123'
    };
  },
  onLoad(option) {
    //传值头像路径
    this.imgSrc = option.imgSrc;
    this.userName = option.userName;
  },
  onReady() {},
  watch: {},
  methods: {
    loginOut() {
      let url = this.$store.state.baseUrl+'/v2/signout'
      let _this = this
      uni.showModal({
        title: "提示",
        content: "是否退出登录",
        cancelText: "再等等",
        confirmText: "退出登录",
        confirmColor: "red",
        success: function(res) {
          //  点击确定
          if (res.confirm) {
           // 请求退出;
            uni.request({
              url: url,
              success: res => {
                if(res.data.status==1){
                  //消息提示
                  uni.showToast({
                    title: res.data.message,
                    duration: 2000
                  });
                  //路由跳转
                  
                  let count = setInterval(()=>{
                    uni.switchTab({
                     url: '/pages/mine/mine',
                   });
                  //权限退出
                   _this.$store.state.isLogin = false
                  //清空usrInfo
                  uni.removeStorageSync('usrInfo');
                  //清空计时器
                  clearInterval(count)
                  },2000)
                  
                }
              }
            });
          } 
        }
      });
    }
  },
  components: {
    List
  }
};
</script>
<style lang="scss">
.person {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
}
</style>
<style scoped lang="scss">
.placehoder {
  margin-top: 20px;
}
.loginOut {
  width: 95%;
  margin: 50px auto 0 auto;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background-color: #d43a32;
}
</style>

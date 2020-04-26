<template>
  <view class="my">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <!-- 顶部 -->
    <Avatar :isLogin="isLogin" :imgSrc="imgSrc" :userName="userName"></Avatar>
    <!-- 我的功能 -->
    <Block :list="listData" title="我的功能" />
    <!-- <MyFunction /> -->
    <Block :list="serviceData" title="我的服务" />
    <Block :list="moreData" title="更多推荐" />
  </view>
</template>

<script>
import Icon from "../../components/icon/index.vue";
import Avatar from "./components/avatar.vue";
import Block from "./components/block";
import topBar from "../../components/topbar/topBar.vue";
export default {
  data() {
    return {
      isLogin: false,
      imgSrc: "",
      userName:'',
      listData: [
        { id: 1, name: "我的地址", icon: "icon-dingwei" },
        { id: 2, name: "我的足迹", icon: "icon-zuji" },
        {
          id: 3,
          name: "收藏的店",
          icon: "icon-woshoucangdedianpu-mianxing"
        },
        { id: 4, name: "答谢记录", icon: "icon-jilu-selected" },
        { id: 5, name: "我的评价", icon: "icon-pingjia" }
      ],
      serviceData: [
        { id: 1, name: "帮助反馈", icon: "icon-bangzhufankui" },
        { id: 2, name: "客服中心", icon: "icon-32" }
      ],
      moreData: [
        { id: 1, name: "邀请有奖", icon: "icon-yaoqingyoujiang" },
        { id: 2, name: "商家入驻", icon: "icon-shangjiaruzhu" },
        { id: 3, name: "骑手招募", icon: "icon-qishouzhaomu" },
        { id: 4, name: "我要合作", icon: "icon-hezuo" },
        { id: 5, name: "餐饮加盟", icon: "icon-jiameng" },
        { id: 3, name: "拼拼手气", icon: "icon-youxi" }
      ]
    };
  },
  onLoad() {
    if (this.$store.state.isLogin) {
      this.getImgsrc();
    }
  },
  components: {
    Icon,
    Avatar,
    Block,
    topBar
  },
  methods: {
    getImgsrc() {
      //同步获取
      try {
        const value = uni.getStorageSync("usrInfo");
        if (value) {
          let result = JSON.parse(value);
          //获取头像图片
          this.imgSrc = this.$store.state.baseUrl + "/img/" + result.avatar;
          //全局传值Id
          this.$store.state.user_id = result.user_id;
          //获取username
          this.userName = result.username
        }
      } catch (e) {
        // error
        console.log(e);
      }
    }
  },
  watch: {
    //登录成功,就立刻替换mine头像
    "$store.state.isLogin": function(val, oldVal) {
      if (val == true) {
        this.getImgsrc();
      }
    }
  }
};
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  //background-image: linear-gradient(-135deg, #ffbd27 0%, #ffd161 100%);
  background-color: #f7f7f7;
}
.my {
  background-color: #f7f7f7;
}
</style>

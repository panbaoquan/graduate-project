<template>
  <view class="storeDetail">
    <!--顶部-->
    <Header />
    <!--背景图片-->
    <view class="topBg">
      <view></view>
    </view>
    <!--body-->
    <view class="bottomBody">
      <!--切换栏-->
      <nav-bar @func="getNavIndex"></nav-bar>
      <!--垂直导航 购物车组件也在这里-->
      <vertical-nav v-show="navIndex==0?true:false" :dataList="category" :shopInfo="shopInfo"></vertical-nav>
	  <!--评论组件-->
	  <Comment v-show="navIndex==1?true:false"/>
	  <!--商家组件-->
	  <shop-message v-show="navIndex==2?true:false" :data="shopInfo"></shop-message>
    </view>
    <!--商店名片-->
    <shop-info :data="shopInfo"></shop-info>
  </view>
</template>

<script>
import shopInfo from "./components/shopInfo";
import navBar from "./components/navBar.vue";
import verticalNav from "./components/verticalnav.vue";
import Header from "./components/header.vue";
import Comment from "./components/comment";
import shopMessage from "./components/shopMessage"
import apiDetail from "../../request/shopDetail"
export default {

  data() {
    return {
      data: "",
      navIndex: 0,
      category:'',
      shopInfo:''
    };
  },
  onLoad(option) {
     this.getStoreCategory(option.shopId)
     this.getStoreInfo(option.shopId)
    
  },
  methods: {
    getNavIndex(data) {
      this.navIndex = data;
     // console.log(this.navIndex);
    },
    getStoreCategory(id){
      //旧的写法
      // uni.request({
      //   //url:'https://elm.cangdu.org/shopping/getcategory/'+id,
      //   url:this.$store.state.baseUrl+'/shopping/getcategory/'+id,
        
      //   success: (res) => {
      //     this.category = res.data.category_list
      //   }
      // });
      //新的封装
      apiDetail.getCategory(id).then(res=>{
        this.category = res[1].data.category_list
      })

    },
    getStoreInfo(id){
      // uni.request({
      //   //url: 'https://elm.cangdu.org/shopping/restaurant/'+id, 
      //   url: this.$store.state.baseUrl+'/shopping/restaurant/'+id, 
      //   success: (res) => {
      //     this.shopInfo = res.data
      //   }
      // });

      //新的封装
      apiDetail.getInfo(id).then(res=>{
        console.log(res)
        this.shopInfo = res[1].data
      })
    }
  },
  components: {
    shopInfo,
    navBar,
    verticalNav,
	Header,
	Comment,
	shopMessage
  },
  watch:{
    category(val){
      this.category = val
    }
  }
};
</script>

<style lang="scss">
.storeDetail {
}
//
.topBg {
  width: 100%;
  height: 160px;
  background-image: url("@/static/images/shops/redWelcome.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  & > view {
    width: 100%;
    height: 100%;
  }
}
//
.bottomBody {
  width: 100%;
}
</style>

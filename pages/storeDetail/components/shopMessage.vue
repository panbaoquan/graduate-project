<template>
  <view class="shopMessage">
    <view class="one">
      <view class="item">
        <view class="item_icon">
          <Icon icon="icon-dingwei" size="20" color="#ccc" />
          <span>{{data.address}}</span>
        </view>
        <view class="item_phone" @click="phone(data.phone)">
          <Icon icon="icon-dianhua" size="20" color />
        </view>
      </view>
      <view class="one_shopImg">
          <!-- <view class="" v-for="(item,index) in 3" :key="index"></view> -->
          <image src="@/static/images/shops_01.jpg" mode="aspectFill" />
          <image src="@/static/images/shops_02.jpg" mode="aspectFill" />
          <image src="@/static/images/shops_03.jpg" mode="aspectFill" />
      </view>
    </view>
    <view class="two">
        <view class="item">
        <view class="item_icon">
          <Icon icon="icon-icon-" size="20" color="#ccc" />
          <span>配送服务:</span><span> 提供高品质送餐服务</span>
        </view>
      </view>
       <view class="item">
        <view class="item_icon">
          <Icon icon="icon-shijian" size="20" color="#ccc" />
          <span>配送时间:</span><span> {{data.opening_hours[0]}}</span>
        </view>
      </view>
    </view>
    <view class="three">
        <view class="item">
        <view class="item_icon">
          <Icon icon="icon-icon-" size="20" color="#ccc" />
          <span>亲爱的顾客们,很开心您光临我们小店...</span>
        </view>
      </view>
            <view class="item">
        <view class="item_icon">
          <Icon icon="icon-zhengque" size="20" color="#ccc" />
          <span>可开发票</span><span>跨天预定</span><span>到店自取(享优惠)</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Icon from "@/components/icon/index.vue";
export default {
  props: {
    data:''
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {
    data(val){
      this.data = val
      console.log(data)
    }
  },
  methods: {
    phone(phone) {
      uni.makePhoneCall({
        phoneNumber: phone //仅为示例
      });
    }
  },
  components: {
    Icon
  }
};
</script>

<style scoped lang="scss">
.item {
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_icon {
    display: flex;
    align-items: center;
    & > span {
      margin-left: 10px;
    }
  }
}
.one {
  background-color: #fff;
  padding: 0 10px;
  margin-top: 10px;
    &_shopImg {
       display: flex;
       justify-content: flex-start;
       &>image {
           width: 90px;
           height: 70px;
           margin-right: 10px;
       }
    }
}
.two,.three {
  background-color: #fff;
  padding: 0 10px;
  margin-top: 10px;  
}
</style>

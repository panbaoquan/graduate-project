<template>
  <view class="order">
    <view class="shop">
      <view class="shop_img"></view>
      <view class="shop_name">ewqdasd</view>
    </view>
    <view class="list">
      <view class="goodsList" v-for="item in list" :key="item.id">
        <view class="goodsList_name">{{item.name}}</view>
        <view class="goodsList_numbers">× {{item.numbers}}</view>
        <view class="goodsList_price">￥{{item.price}}</view>
      </view>
      <view class="list_deliveryFee">
        <view class="list_deliveryFee_name">配送费</view>
        <view>￥4</view>
      </view>
      <view class="list_deliveryFee">
        <view class="list_deliveryFee_name">包装费</view>
        <view>￥3</view>
      </view>
      <view class="list_total">
        <span>小计</span>
        ￥
        <span>57</span>
      </view>
    </view>
    <view class="other">
        
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list: [
        { id: 1, name: "德和衡好-但是-送达-为-发", numbers: "1", price: "10" },
        { id: 2, name: "123", numbers: "2", price: "13" },
        { id: 3, name: "123", numbers: "1", price: "12" }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.order {
  margin-top: 10px;
  background-color: #fff;
}
.shop {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
  &_img {
    width: 40px;
    height: 40px;
    border: 1px solid red;
    margin-left: 10px;
  }
  &_name {
    padding-left: 5px;
    font-weight: 500;
  }
}
.list {
  padding: 0 10px;

  &_deliveryFee {
    text-align: left;
    height: 40px;
    line-height: 40px;
    display: flex;
    & > view {
      width: 50%;
    }
    & > view:nth-child(2) {
      text-align: right;
    }
  }
  &_total {
    text-align: right;
    height: 40px;
    line-height: 40px;
    & > span:nth-child(2) {
      font-size: 20px;
      font-weight: 500;
    }
  }
}
.goodsList {
  display: flex;
  min-height: 40px;
  line-height: 40px;
  &_name {
    width: 60%;
  }
  &_numbers {
    width: 20%;
    text-align: right;
    color: salmon;
  }
  &_price {
    width: 20%;
    text-align: right;
  }
}
</style>

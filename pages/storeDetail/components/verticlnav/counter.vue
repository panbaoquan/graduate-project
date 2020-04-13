<template>
  <view class="counter">
    <view class="minus">-</view>
    <view class="counter">{{counter}}</view>
    <view class="add flexc bold" @tap="add($event,id)">+</view>
  
    <flyInCart ref="inCart" :cartBasketRect="rect"></flyInCart>
  </view>
</template>

<script>
import flyInCart from "./flyInCart";
export default {
  props: {
    id: "",
    rect:{}
  },
  data() {
    return {
      counter: 0,
      cartBasketRect: {}
    };
  },
  computed: {},
  created() {},
  mounted() {
    // const self = this;
    // let q = uni.createSelectorQuery();
    // setTimeout(function() {
    //   q.select("#cart")
    //     .boundingClientRect(data => {
    //       self.cartBasketRect = data;
    //     })
    //     .exec();
    // }, 100);
  },
  watch: {},
  methods: {
    add(e, id) {
      this.$refs.inCart.addToCart(e, id);
    }
  },
  components: {
    flyInCart
  }
};
</script>

<style scoped lang="scss">
.cart{
		width: 96%;
		position: fixed;
		bottom: 20px;
		height: 45px;
		background: #EE3F4D;
		margin: auto;
		border-radius: 20px;
		left: 2%;
	}
	.cart image{
		width: 160rpx;
		position: absolute;
		bottom: 0;
		left: 5%;
	}
.counter {
  display: flex;
}
.flexc {
  display: flex;
  align-content: center;
  justify-content: center;
}
.add,
.minus {
  background: #e54d42;
  color: #fff;
  width: 50rpx;
  height: 50rpx;
  border-radius: 45%;
  transition: all 0.13s;
  line-height: 50rpx;
}
.minus {
  background-color: #fff;
  border: 1px solid #ccc;
  color: black;
  font-weight: bold;
  font-size: 19px;
  line-height: 19px;
  text-align: center;
}
.add:active,
.minus:active {
  transform: scale(1.2);
}
</style>

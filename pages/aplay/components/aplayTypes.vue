<template>
  <view class="types">
    <view class="pay">
	  <view class="cu-form-group margin-top">
	  	<view class="title">支付方式</view>
	  	<picker @change="PickerChange" :value="index" :range="picker">
	  		<view class="picker">
	  			{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
	  		</view>
	  	</picker>
	  </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
		index: 0,
		picker: ['在线支付', '货到付款'],
	};
  },
  computed: {},
  created() {},
  mounted() {
  },
  watch: {},
  methods: {
	  PickerChange(e) {
      this.index = e.detail.value
      this.$emit('types',this.picker[this.index])
	  },
  },
  components: {}
};
</script>
<style lang="scss">
 .types {
     .cu-form-group {
         padding: 0;
     }
 }
</style>
<style scoped lang="scss">
.types {
  background-color: #fff;
  margin-top: 10px;
  padding: 0 10px;
}
.pay {
  &_one {
    display: flex;
    align-items: center;
    height: 50px;
    &_left {
      width: 50%;
    }
    &_right {
      width: 50%;
      text-align: right;
    }
  }
}
</style>

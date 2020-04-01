<!--
 * @Author: wangzhongjie
 * @Date: 2020-03-31 09:33:28
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-01 16:39:44
 * @Description: 我的功能
 * @Email: UvDream@163.com
 -->
<template>
  <view class="func">
    <view class="func-title">{{ title }}</view>
    <view class="func-content">
      <view v-for="(item, index) in list" :key="index">
        <view>
          <Icon :icon="item.icon" :color="'#ee3f4d'" :size="item.size" />
        </view>
        <view class="func-content-word">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Icon from "../../../components/icon/index.vue";
export default {
  props: {
    list: {},
    title: {}
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  watch: {},
  methods: {},
  components: { Icon }
};
</script>

<style scoped lang="less">
.func {
  width: ~"calc(100% - 40rpx)";
  margin: 20px auto;
  background-color: #fff;
  min-height: 200rpx;
  border-radius: 10rpx;
  &-title {
    font-size: 30rpx;
    height: 90rpx;
    padding-left: 30rpx;
    font-weight: 900;
    line-height: 90rpx;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    &-word {
      font-size: 20rpx;
      margin-top: 20rpx;
    }
    & > view {
      text-align: center;
      width: 25%;
      height: 120rpx;
      padding-top: 10rpx;
    }
  }
}
</style>

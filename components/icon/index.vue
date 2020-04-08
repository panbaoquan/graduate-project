<template>
  <view
    class="iconfont"
    :class="icon"
    :style="{ color: color, fontSize: size + 'px' }"
  ></view>
</template>

<script>
export default {
  props: {
    icon: {
      default: "icon-shouyewaimai"
    },
    color: {
      default: "#999"
    },
    size: {
      default: "20"
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="less"></style>

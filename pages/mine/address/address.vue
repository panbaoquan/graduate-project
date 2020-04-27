<template>
  <view class="address">
    <!-- 导航栏 -->
	<cu-custom bgColor="bg-gradual-red" :isBack="true" :height="70">
		    <block slot="backText"><view class="goBack"></view></block>
		    <block slot="content">地址管理中心</block>
	</cu-custom>
    <!--地址list组件-->
    <view class="address_list">
      <view class="cu-list menu-avatar">
        <view
          class="cu-item"
          :class="modalName=='move-box-'+ index?'move-cur':''"
          v-for="(item,index) in list"
          :key="index"
          @touchstart="ListTouchStart"
          @touchmove="ListTouchMove"
          @touchend="ListTouchEnd"
          :data-target="'move-box-' + index"
        >
          <!-- <view class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"></view> -->
          <view class="content">
            <view class="text-grey">
              <text class="cuIcon-locationfill text-red margin-right-xs"></text>
              {{item.address}}{{item.address_detail}}
            </view>
            <view class="text-gray text-sm">
              <text class="cuIcon-profile text-red margin-right-xs"></text>
              {{item.name}}
              <text class="cuIcon-mobile text-red margin-right-xs"></text>
              {{item.phone}}
            </view>
          </view>
          <!-- <view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-grey sm">5</view>
          </view>-->
          <view class="move">
            <!-- <view class="bg-grey">置顶</view> -->
            <view class="bg-red" @tap="deleteAddress(item)">删除</view>
          </view>
        </view>
      </view>
    </view>
    <!--新增地址-->
    <view class="address_add">
      <view
        class="cu-list menu"
        :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']"
      >
        <view class="cu-item" :class="menuArrow?'arrow':''">
          <navigator class="content" hover-class="none" url="/pages/mine/address/add/add">
            <text class="cuIcon-locationfill text-orange"></text>
            <text class="text-grey">新增地址</text>
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuArrow: true,
      menuCard: false,
      menuBorder: false,
      list: [],
      modalName: null,
      listTouchStart: 0,
      listTouchDirection: null
    };
  },
  onLoad() {
    this.getAddresses();
  },
  methods: {
    //获取地址
    getAddresses() {
      uni.request({
        url:
          this.$store.state.baseUrl +
          "/v1/users/" +
          this.$store.state.user_id +
          "/addresses",
        success: res => {
          this.list = res.data;
        }
      });
    },
    // ListTouch触摸开始
    ListTouchStart(e) {
      this.listTouchStart = e.touches[0].pageX;
    },

    // ListTouch计算方向
    ListTouchMove(e) {
      this.listTouchDirection =
        e.touches[0].pageX - this.listTouchStart > 0 ? "right" : "left";
    },

    // ListTouch计算滚动
    ListTouchEnd(e) {
      if (this.listTouchDirection == "left") {
        this.modalName = e.currentTarget.dataset.target;
      } else {
        this.modalName = null;
      }
      this.listTouchDirection = null;
    },
    //删除地址
    deleteAddress(item) {
		let _this  = this
      uni.showModal({
        title: "提示",
        content: "您确定删除该地址吗",
        success: function(res) {
          if (res.confirm) {
            //请求删除接口
            uni.request({
              url:
                _this.$store.state.baseUrl +
                "/v1/users/" +
                _this.$store.state.user_id +
                "/addresses/" +
                item.id,
              data: {
                user_id: _this.$store.state.user_id,
                address_id: ""
              },
              method: "DELETE",
              success: res => {
                if (res.data.status) {
                  uni.showToast({
                    title: "删除地址成功",
                    duration: 2000
                  });
                } else {
                  uni.showToast({
                    title: "删除失败",
                    duration: 2000,
                    icon: "none"
                  });
                }
              }
            });
            //重新加载list
            _this.getAddresses();
          } else if (res.cancel) {
            uni.showToast({
				title: '您已取消删除',
				duration: 2000
			});
          }
        }
      });
    }
  }
};
</script>
<style lang="scss">
.address {
  .cu-bar .action {
    align-items: flex-end;
  }
  .cu-bar .content {
    bottom: -70%;
  }
  .cu-list.menu-avatar > .cu-item .content {
    left: 10px;
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
.address {
  &_add {
    margin-top: 10px;
  }
}
</style>

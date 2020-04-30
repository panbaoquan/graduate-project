<template>
  <view class="list">
      <view class="list_left" @tap="detail(order)">
          <view class="list_left_header">
              <image :src="'https://elm.cangdu.org/img/'+order.shopInfo.image_path" mode="aspectFill" />
          </view>
      </view>
      <view class="list_right">
          <view class="list_right_one" @tap="detail(order)">
              <view class="list_right_one_top">
                  <view class="shopName">{{order.shopInfo.name}} <text class="cuIcon-right"></text></view>
                   <view class="aplay">支付成功</view>
              </view>
              <view class="list_right_one_bottom">
                  {{order.time}}
              </view>
          </view>
          <view class="list_right_two" @tap="detail(order)">
              <view class="list_right_two_goods">{{order.list[0].name}}等{{order.list.length}}件物品</view>
              <view class="list_right_two_price">￥{{order.total+7}}</view>
          </view>
          <view class="list_right_three">
              <view class="list_right_three_btn" @tap="orderMore(order.shopInfo.id)">再来一单</view>
          </view>
      </view>
  </view>
</template>

<script>
export default {
  props: {
      order:''
  },
  data() {
    return {
      time: "123"
    };
  },
  computed: {},
  created() {},
  mounted() {
    
  },
  watch: {},
  methods: {
       orderMore(id){
           uni.navigateTo({
                url: '/pages/storeDetail/index?shopId='+id
           });
       },
       detail(data){
          uni.navigateTo({
               url: '/pages/order/orderDetail/orderDetail?data='+JSON.stringify(data)
          });
       }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.list {
    display: flex;
    background-color: #FFF;
    padding: 10px 10px 0 10px;
    margin-bottom: 15px;
    &_left {
        width: 46px;
        &_header {
            &>image{
              width: 46px;
              height: 46px;
            }
        }
    }
    &_right {
        flex: 1;
        &_one {
            padding-left: 5px;
            height: 46px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            &_top {
                display: flex;
                justify-content: space-between;
                .shopName {
                    font-weight: bold;
                }
            }
            &_bottom {
                padding: 5px 0;
            }
        }
        &_two {
            display: flex;
            height: 46px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            &_goods {

            }
            &_price {
                font-size: 16px;
                color: #f60;
                font-weight: 700;
            }
        }
        &_three {
            display: flex;
            justify-content: flex-end;
            &_btn {
                border: 1px solid #ee3f4d;
                border-radius: 3px;
                color: #ee3f4d;
                padding: 3px 15px;
                margin-top:10px;
                margin-bottom: 5px;
            }
        }
    }
}
</style>

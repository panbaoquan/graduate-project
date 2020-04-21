<template>
  <view class="arrival">
      <view class="arrival_left">送达时间</view>
      <view class="arrival_right">
          <view class="arrival_right_one">
              <span>尽快送达</span>
              <span>|</span>
              <span>预计 18:30</span>
          </view>
      </view>
  </view>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.arrival {
    background-color: #FFF;
    width: 100%;
    height: 93px;
    margin-top: 10px;
     padding: 0 2px;
     border-left: 5px solid #ee3f4d;
     display: flex;
     &_left {
         width: 50%;
         font-size: 18px;
         font-weight: 500;
         line-height: 93px;
        padding-left: 20px;
     }
     &_right {
         width: 50%;
         display: flex;
         align-items: center;
         &_one {
            color: #ee3f4d;
          
           &>span:nth-child(even){
               margin: 0 10px;
           }
         }
     }
}
</style>

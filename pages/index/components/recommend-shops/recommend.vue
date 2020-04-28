<template>
  <view class="nearStone" :class="{nearStoneoffsetTop:isTop}">
    <view :class="{nearStoneoffsetTop_Content:isTop}">
      <!--title-->
      <view class="nearStone_title" :class="{nearStone_title_offset:isTop}">推荐商家</view>
      <!--筛选模块（封装）-->
      <view class="nearStone-select">
        <view
          class="nearStone-select-group"
          v-for="(item,index) in flags"
          :key="index"
          @tap="selectFlag(item.flagValue,item.flagName)"
        >
          {{item.name}}
          <text class="iconfont icon-arrowDown" v-show="item.flagValue"></text>
          <text class="iconfont icon-arrowTop" v-show="!item.flagValue"></text>
        </view>
      </view>
      <!--综合排序-下拉模块-->
      <view class="group-select-sort" v-show="flags[0].flag_dropdown_list">
        <view
          class="group-select-sort-item"
          @tap="changeRankContent(index)"
          v-for="(item,index) in flags[0].rankContent"
          :key="index"
        >{{item.name}}</view>
      </view>
      <!--品类-下拉模块-->
      <view class="group-select-kind" v-show="flags[1].flag_dropdown_list">
        <view class="group-select-kind-leftList">
          <view
            class="group-select-kind-leftList-item"
            @tap="choosedIndex=index"
            v-for="(item,index) in category"
            :key="index"
          >
            {{item.name}}
            <text v-show="choosedIndex==index" class="text-gray cuIcon-right"></text>
          </view>
        </view>
        <view class="group-select-kind-rightList">
          <view
            class="group-select-kind-rightList-item"
            v-for="(item,index) in category[choosedIndex].sub_categories"
            :key="index"
            @tap="choosedCategory(category[choosedIndex].sub_categories[index].id)"
            v-show="index!=0"
          >{{item.name}}</view>
        </view>
      </view>
      <!--速度-下拉面板-->
      <view class="group-select-speed" v-show="flags[2].flag_dropdown_list">
        <!--时间-->
        <view class="group-select-speed-onSpeed">
          <view
            class="group-select-speed-onSpeed-item"
            @tap="changeBackgroundColor(index,1)"
            v-for="(item,index) in flags[2].time"
            :key="index"
            :style="{backgroundColor:item.bgColor}"
          >{{item.content}}分钟内</view>
        </view>
        <!--距离-->
        <view class="group-select-speed-underDistance">
          <view
            class="group-select-speed-underDistance-item"
            @tap="changeBackgroundColor(index,2)"
            v-for="(item,index) in flags[2].distance"
            :key="index"
            :style="{backgroundColor:item.bgColor}"
          >{{item.content}}km以内</view>
        </view>
        <view class="group-select-btn">
          <view class="group-select-btn-resetBtn" @tap="reset">重置</view>
          <view class="group-select-btn-finishBtn" @tap="finish">
            完成
            <text v-show="count?true:false">（已选{{count}})</text>
          </view>
        </view>
      </view>
      <!--全部筛选-下拉面板-->
      <view class="group-select-all" v-show="flags[3].flag_dropdown_list">尽请期待</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    isTop: ""
  },
  data() {
    return {
      choosedIndex: 1,
      count: 0,
      flags: [
        {
          name: "综合排序",
          flagValue: true,
          flagName: "flagSort",
          flag_dropdown_list: false,
          rankContent: [
            {
              id: 0,
              name: "综合排序"
            },
            {
              id: 1,
              name: "销量优先"
            },
            {
              id: 2,
              name: "距离优先"
            },
            {
              id: 3,
              name: "评分优先"
            }
          ]
        },
        {
          name: "品类",
          flagValue: true,
          flagName: "flagKind",
          flag_dropdown_list: false
        },
        {
          name: "速度",
          flagValue: true,
          flagName: "flagSpeed",
          flag_dropdown_list: false,
          time: [
            {
              content: 30,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:0
			
            },
            {
              content: 40,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:1
			  
            },
            {
              content: 50,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:2
			  
            },
            {
              content: 60,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:3
			  
            }
          ],
          distance: [
            {
              content: 1,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:0
			  
            },
            {
              content: 2,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:1
			  
            },
            {
              content: 3,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:2
			  
            },
            {
              content: 5,
              bgColor: "#F1F1F1",
			  flagBg: true,
			  index:3
			  
            }
          ]
        },
        {
          name: "全部筛选",
          flagValue: true,
          flagName: "flagFilter",
          flag_dropdown_list: false
        }
      ],
	  category: [],
    };
  },
  mounted() {
    this.getAllCategory();
  },
  methods: {
    currentScroll() {
      uni.pageScrollTo({
        scrollTop: 386, //距离页面顶部的距离
        duration: 20
      });
    },
    //封装筛选模块
    selectFlag(flagValue, flagName) {
      //箭头的开关值
      flagValue = !flagValue;

      this.flags.forEach(item => {
        //每次初始化进来

        //让4个下拉面板都消失
        item.flag_dropdown_list = false;
        //除当前点击的面板，其它面板的箭头向下，即它的flag要为true
        item.flagValue = true;
        this.currentScroll();

        if (item.flagName === flagName) {
          //上下箭头改变的开关
          item.flagValue = flagValue;
          //下拉面板的显示开关
          item.flag_dropdown_list = !flagValue;
        }
      });
    },
    //改变综合排序出的值
    changeRankContent(index) {
      for (let i = 0; i < this.flags[0].rankContent.length; i++) {
        if (this.flags[0].rankContent[i].id == index) {
          //更换排名内容
          this.flags[0].name = this.flags[0].rankContent[i].name;
          //排名面板消失
          this.flags[0].flag_dropdown_list = false;
          //改变箭头方向,向下
          this.flags[0].flagValue = true;
          this.getRankList(this.flags[0].name);
        }
      }
    },
    //根据综合排序列出内容
    getRankList(name) {
      let order_by = 4;
      if (name == "评分优先") {
        order_by = 3;
      } else if (name == "销量优先") {
        order_by = 6;
      } else if (name == "距离优先") {
        order_by = 5;
      } else {
        order_by = 4;
      }
      uni.request({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762", //仅为示例，并非真实接口地址。
        data: {
          order_by: order_by
        },
        success: res => {
          this.$emit("rank", res.data);
        }
      });
    },
    //改变背景颜色
    changeBackgroundColor(index, group) {
      if (group == 1) {
        this.flags[2].time[index].flagBg = !this.flags[2].time[index].flagBg;
        if (this.flags[2].time[index].flagBg) {
          this.flags[2].time[index].bgColor = "#F1F1F1";
          this.count--;
        } else {
          this.flags[2].time[index].bgColor = "#FFBD27";
          this.count++;
        }
      } else if (group == 2) {
        this.flags[2].distance[index].flagBg = !this.flags[2].distance[index]
          .flagBg;
        if (this.flags[2].distance[index].flagBg) {
          this.flags[2].distance[index].bgColor = "#F1F1F1";
          this.count--;
        } else {
          this.flags[2].distance[index].bgColor = "#FFBD27";
          this.count++;
        }
      }
    },
    //重置
    reset() {
      this.count = 0;
      for (let i = 0; i < this.flags[2].time.length; i++) {
        this.flags[2].time[i].flagBg = "true";
        this.flags[2].time[i].bgColor = "#F1F1F1";
      }
      for (let i = 0; i < this.flags[2].distance.length; i++) {
        this.flags[2].distance[i].flagBg = "true";
        this.flags[2].distance[i].bgColor = "#F1F1F1";
      }
    },
    finish() {
	  //最小时间索引
	  let minTimeIndex = 0
	  let choosedTime =[]
	  this.flags[2].time.forEach(item=>{
		  if(item.bgColor=='#FFBD27'){
			choosedTime.push(item)
		  }else{
			   minTimeIndex = 0
		  }
	  })
	  minTimeIndex = choosedTime[0].index
	  
	  //最小距离索引
	  let minDistanceIndex = 0
	  let choosedDistance = []
	  this.flags[2].distance.forEach(item=>{
		  if(item.bgColor=='#FFBD27'){
			 choosedDistance.push(item)
		  }else {
			 minDistanceIndex = 0 
		  }
	  })
	  minDistanceIndex = choosedDistance[0].index
	  //
	  let time  = this.flags[2].time[minTimeIndex].content
	  let distance = this.flags[2].distance[minDistanceIndex].content
	 
	  //根据距离和时间获取数据
	   uni.request({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762", //仅为示例，并非真实接口地址。
        data: {
          order_by: 5
        },
        success: res => {
		  //对此数据进行判断
		    let data = []
            for(let i=0;i<res.data.length;i++){
			//    var minTime = parseFloat(res.data[i].order_lead_time)
			//    let minDistance = parseFloat(res.data[i].distance)
			 
			   if(parseFloat(res.data[i].order_lead_time)<=time 
				  && parseFloat(res.data[i].distance)<=distance
				  && res.data[i].order_lead_time.length<=4
				  && res.data[i].distance.length<=5
				  ){

				   data.push(res.data[i])
			      }
			}
				   this.$emit('speed',data)
        }
      }); 
      //箭头向下
      this.flags[2].flagValue = true;
      //关闭下拉面板
      this.flags[2].flag_dropdown_list = false;
    },
    //获取所有品类数据
    getAllCategory() {
      uni.request({
        url: "https://elm.cangdu.org/shopping/v2/restaurant/category",
        success: res => {
          this.category = res.data;
        }
      });
    },
    //根据类别 获取所有商品
    choosedCategory(id) {
      uni.request({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]=" +
          id,
        success: res => {
          this.$emit("category", res.data);
          //箭头向下
          this.flags[1].flagValue = true;
          //关闭下拉面板
          this.flags[1].flag_dropdown_list = false;
        }
      });
    }
  },
  watch:{
 
  }
};
</script>

<style lang="scss">
.nearStone {
  width: 100%;
  &_title {
    font-size: 20px;
    font-weight: 600;
    padding: 20px 0 20px 13px;
    &_offset {
      padding-left: 18px;
    }
  }

  &-select {
    font-size: 25rpx;
    display: flex;
    text-align: center;
    &-group {
      flex: 1;
    }
  }
}
//附近商家固定时候的样式
.nearStoneoffsetTop {
  background-color: #ffffff;
  position: fixed;
  top: 100px;
  z-index: 100;
  width: 100%;
  // min-height: 202px;
  &_content {
    margin: 0 10px;
  }
}
//箭头
.icon {
  &-arrowDown {
    font-size: 15rpx;
  }

  &-arrowTop {
    font-size: 15rpx;
  }
}
//下拉列表
.group-select {
  &-sort {
    font-size: 30rpx !important;
    color: #808080;
    &-item {
      padding: 7.09rpx 0 7.09rpx 0;
      border-bottom: 0.5px solid #ccc;
      margin: 0 13px;
    }
  }

  &-speed {
    font-size: 12px;
    &-onSpeed {
      padding-top: 15px !important;
    }
    &-onSpeed,
    &-underDistance {
      display: flex;
      justify-content: space-evenly;
      padding-top: 5px;

      &-item {
        width: 20%;
        text-align: center;
        padding: 5px 0;
        border-radius: 4px;
        background-color: #ffffff;
      }
    }
  }

  &-btn {
    display: flex;
    text-align: center;
    line-height: 40px;
    padding-top: 15px;
    font-size: 14px;
    letter-spacing: 2px;

    &-resetBtn {
      flex: 1;
      border-top: 0.5px solid #ccc;
    }

    &-finishBtn {
      flex: 1;
      border-top: 0.5px solid #ccc;
      border-left: 0.5px solid #ccc;
      background-color: #f0ad4e;
    }
  }
  &-all {
    margin: 0 13px;
  }
  &-kind {
    margin: 0 13px;
    display: flex;
    &-leftList {
      flex: 1;
      &-item {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    &-rightList {
      flex: 1;
      &-item {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>

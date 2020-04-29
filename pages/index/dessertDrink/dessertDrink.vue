<template>
  <view class="all">
    <view class="fixed">
      <!--标题栏-->
      <view class="title">
        <view class="title-backIcon" @tap="goback">
          <Icon icon="icon-fanhui" color="#FFF" size="20" style="margin-left:10px;"></Icon>
        </view>
        <view class="title-content">{{title}}</view>
        <view class="title-right">
          <!--占位-->
        </view>
      </view>
      <!--搜索栏-->
      <search-bar></search-bar>
      <!--过滤列表-->
      <filterList :data="filterList" @filterData="getFilterData"/>
      <!--过滤菜单-->
      <filter-menus></filter-menus>
      </view>
     <scroll-view class="dessertDrink">
      <view class="content">
        <!--商店列表-->
        <Store page="detail" v-for="(item, index) in testShops" :index="item.id" :shop="item" />
      </view>
     </scroll-view>
  </view>
</template>
<script>
import filterList from "../../../components/filterList.vue";
import Icon from "../../../components/icon/index.vue";
import filterMenus from "../../../components/filterMenus.vue";
import searchBar from "../../../components/searchBar.vue";
import Store from "../../../components/store.vue";
export default {
  data() {
    return {
      shops: [
        {
          id: 1,
          name: "一點點",
          logoSrc: "../../../static/images/yidiandian.jpg"
        },
        {
          id: 2,
          name: "奈雪の茶",
          logoSrc: "../../../static/images/yidiandian.jpg"
        },
        {
          id: 3,
          name: "贡茶",
          logoSrc: "../../../static/images/yidiandian.jpg"
        },
        {
          id: 4,
          name: "辛巴克",
          logoSrc: "../../../static/images/yidiandian.jpg"
        },
        {
          id: 5,
          name: "甜啦啦",
          logoSrc: "../../../static/images/yidiandian.jpg"
        }
	  ],
	  filterList:[],
	  testShops:''
    };
  },
  onLoad(option) {
	  this.title = option.name
	  this.getData(option.id)

  },
  onShow() {},
  methods: {
    goback() {
      uni.navigateBack({
        delta: 1,
        animationType: "pop-out",
        animationDuration: 200
      });
	},
	//获取指定类别
	getData(id){
		uni.request({
			//
			url: this.$store.state.baseUrl+'/shopping/v2/restaurant/category', 
			success: (res) => {
				for(let i=0;i<res.data.length;i++){
					if(id==res.data[i].id){
						//console.log(res.data[i])
						this.filterList = res.data[i]
						this.getShops(this.filterList.sub_categories[0].id)
						break;
					}
				}
			}
		});
	},
	//初始化 全部 类别商店
	getShops(id){
		// if(this.filterList){
		//   console.log(this.filterList.sub_categories)
		// }
		uni.request({
			url: 'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_id='+id, 
			success: (res) => {
			 this.testShops = res.data
			}
		});
	},
	//filterData
	getFilterData(val){
           this.testShops = val
	}
  },
  components: {
    filterList,
    Icon,
    filterMenus,
    searchBar,
    Store
  },
  watch:{
	  filterList(val){
		  this.filterList = val
	  }
  }
};
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
.status_bar {
  background-image: none;
  background-color: rgb(235, 89, 120);
}

.title {
  display: flex;
  background-color: rgb(235, 89, 120);
  padding-top: 50px;
  &-backIcon {
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-content {
    flex: 1;
    text-align: center;
    font-size: 21px;
    color: #ffffff;
  }
  &-right {
    flex: 1;
  }
}
.content {
  margin: 0 10px;
}
.all {
}
.fixed {
  position: fixed;
  z-index: 99;
  background-color: #f7f7f7;
  width: 100%;
}
.dessertDrink {
  padding-top: 250px;
}
</style>

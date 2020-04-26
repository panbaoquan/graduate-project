<template>
  <view class="list" @tap="change(name)">
    <view class="list_left">{{name}}</view>
    <view class="list_right">
      <view class="list_right_content">
        <span v-show="content?true:false">{{content}}</span>
        <image v-show="isImg" :src="imgSrc" mode />
      </view>
      <Icon icon="icon-right" size="16" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    name: {
      default: ""
    },
    content: {
      default: ""
    },
    isImg: {
      default: false
    },
    imgSrc: {
      default: ""
    }
  },
  data() {
    return {
        user_id:''
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    change(name) {
      //上传头像
      if (name == "头像") {
        uni.chooseImage({
          success: chooseImageRes => {
            const tempFilePaths = chooseImageRes.tempFilePaths;
            uni.uploadFile({
              url: this.$store.state.baseUrl + "/eus/v1/users/"+this.$store.state.user_id+"/avatar",
              filePath: tempFilePaths[0],
              name: "file",
              success: uploadFileRes => {
                let res = JSON.parse(uploadFileRes.data)
                this.imgSrc = this.$store.state.baseUrl+'/img/'+res.image_path
              }
            });
          }
        });
      }else if(name=='用户名'){
          //修改用户名
      }else if(name==='登录密码') {
         //重置密码
          uni.navigateTo({
           url: '/pages/mine/personal-information/modifyPassword/modifyPassword' 

        });
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  padding: 0 10px;
  min-height: 65px;
  align-items: center;
  background-color: #fff;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &_left {
    width: 50%;
  }
  &_right {
    width: 50%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &_content {
      margin-right: 10px;
      & > image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>

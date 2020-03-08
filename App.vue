<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
	
	/*字体样式*/
   @import './common/font/iconfont.css';
   
   .status_bar {
  	height: var(--status-bar-height);
  	width: 100%;
  	background-image: linear-gradient(-135deg, #FFBD27 0%, #FFD161 100%);
  }
  
</style>

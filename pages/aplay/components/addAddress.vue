<template>
  <view class="addAddress">
			<view class="addAddress_left">
                <Icon icon="icon-dingwei" color="#ee3f4d" />
				<view class="addAddress_left_address">请添加一个收获地址</view>
			</view>
			<view class="addAddress_right">
				<Icon icon="icon-right" size="18"/>
			</view>
			<view class="addAddress_bgCard"></view>
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
.addAddress {
    background-color: #FFF;
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 0 10px;
	height: 85px;
	align-items: center;
	background-size:contain;
	&_left {
		display: flex;
		&_address {
			padding-left: 5px;
			font-size: 16px;
		}
	}
	&_bgCard {
	position: absolute;
	background-image: url('@/static/images/cardbg.png');
	background-size: 60px;
    height: 3px;
    width: 100%;
    bottom: 0;
    left: -2px; 
	}
}
</style>

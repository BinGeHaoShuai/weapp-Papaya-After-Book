<template>
	<view class="content">
		<view class="list-item">
			<view class="header">
				<view class="headershot-img" />
				<text class="username">追风少年浪子彦</text>
			</view>
			<image src="../../static/right_icon.png" class="right-icon"></image>
		</view>
		<view style="margin-top: 30rpx;">
			<view class="list-item" v-for="item in list" :key="item.id">
				<view style="display: flex; align-items: center;">
					<van-icon :name="item.icon" size="22px"/>
					<text class="item_font">{{item.name}}</text>			
				</view>
				<image src="../../static/right_icon.png" class="right-icon"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	const list = [{
		id: 1,
		name: "消息通知",
		icon: "comment-o"
	}, {
		id: 2,
		name: "最近浏览",
		icon: "clock-o"
	}, {
		id: 3,
		name: "上传作品",
		icon: "upgrade"
	}, {
		id: 4,
		name: "分享应用",
		icon: "share-o"
	}, {
		id: 5,
		name: "设置",
		icon: "setting-o"
	}]
</script>

<style lang="scss" scoped>
	@import "../../styles/global.scss";

	.content {
		background-color: #f4f4f4;
		width: 100vw;
		height: 100vh;
	}

	.header {
		@include flex-xy-center;
	}

	.username {
		font-size: 45rpx;
		max-width: 30rem;
		margin-left: 30rpx;
	}

	.list-item {
		position: relative;
		padding: 25rpx;
		margin: 0 10rpx 1rpx 10rpx;
		display: flex;
		flex: 0;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
	}

	.item_font {
		margin-left: 20rpx;
		font-size: 35rpx;
	}

	.headershot-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 75rpx;
		background-image: url("https://img.yzcdn.cn/vant/cat.jpeg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.right-icon {
		height: 30rpx;
		width: 30rpx;
	}
</style>
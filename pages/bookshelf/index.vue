<template>
	<view class="v-content">
		<view class="category">
			<view class="category-switch-box">
				<view class="novel-button"><text class="font">小说</text></view>
				<view class="comic-button"><text class="font">漫画</text></view>
			</view>
		</view>
		<view class="content">
			<view class="bookshelf-none-content">
				<cover-image src="../../static/nobook.png" class="nobook-img" />
				<text class="bookshelf-isNone-info-text">用你喜欢的漫画装满书架吧</text>
				<button class="button" @click="gotoBookStore">去书城看看</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	let active = ref('home');

	function gotoBookStore() {
		uni.switchTab({
			url:"/pages/bookstore/index"
		})
	}
</script>

<style lang="scss" scoped>
	@import "../../styles/global.scss";
	.category{
		height: 100rpx;
	    width: 100%;
		background-color: #2cb5ff;
		@include flex-xy-center;
	}
	.category-switch-box{
		border-radius: 10rpx;
		border: 1rpx solid #ffffff;
		display: inline-flex;
	}
	.novel-button{
		background-color: #ffffff;
		@include flex-xy-center;
		border-radius: 9rpx 0 0 9rpx;
	}
	.comic-button{
		background-color: #2cb5ff;
		@include flex-xy-center;
		border-radius: 0 9rpx 9rpx 0;
	}
	.font{
		padding: 10rpx 20rpx;
	}
	.content{
		height: 100%;
		width: 100%;
	}
	.bookshelf-none-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 50%;
		transform: translateY(-70%);
	}
	.nobook-img{
		transform: scale(0.5);
	}
	.bookshelf-isNone-info-text{
		font-size: 1rem;
		color: #505005;
		margin-top: -80rpx;
		margin-bottom: 30rpx;
	}
	.button{
		background-color: #2cb5ff;
		color: #ffffff;
		font-size: 35rpx;
		width: 350rpx;
	}
</style>
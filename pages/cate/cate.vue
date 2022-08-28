<template>
	<view>
		<view class="scroll-view-container">
			<!-- 左侧 -->
			<scroll-view class="left-scroll" scroll-y="true" 
				:style="{height:wh+'px'}" >
				<view class="left-scroll-item active">xxx</view>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view class="right-scroll" scroll-y="true" 
				:style="{height:wh+'px'}">
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前设备可用高度
				wh:0
			};
		},
		onLoad() {
			// 获取当前使用设备的 信息
			const sysInfo = uni.getSystemInfoSync()
			console.log(sysInfo)
			this.wh = sysInfo.windowHeight
		}
	}
</script>

<style lang="scss" scoped>
.scroll-view-container{
	display: flex;
	.left-scroll{
		width: 120px;
		.left-scroll-item{
			background-color: #999999;
			line-height: 60px;
			text-align: center;
			font-size: 12px;
			position: relative;
			&.active{
				background-color: #ffffff;
				&::before{
					content:'';
					display: block;
					width:3px;height: 30px;
					background-color: red;
					position: absolute;
					top:50%;
					left:0;
					transform: translateY(-50%);
				}
			}
		}
		
	}
}
</style>

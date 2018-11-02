<template>
	<div v-gd="show">
		<div class="gotop" v-gotop v-if="show.value">
			<i class="iconfont icon-top1"></i>
		</div>
	</div>
</template>
<script>
	export default {
		name:"gotop",
		data(){
			return {
				show : {
					value : false
				}
			}
		}
	}
</script>
<style lang="scss">
	.gotop{
		position:fixed;
		right:1rem;
		bottom:1.4rem ;
		i{
			border-radius:50%;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 1.8rem;
			width: 1.8rem;
			color: white;
			font-size: 1rem;
			background-color: rgba(0,0,0,.6);
			opacity: .8;
		}
	}
</style>
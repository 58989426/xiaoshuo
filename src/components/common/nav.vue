<template>
	<!--<transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">-->
		<div class="mnav">
			<ul class="box">
				<li class="fl" @click="gopage('/')">
					<i class="iconfont icon-home"></i>
					<span>首页</span>
				</li>
				<li class="fl" @click="gopage('classify')">
					<i class="iconfont icon-leimupinleifenleileibie"></i>
					<span>分类</span>
				</li>
				<li class="fl" @click="gopage('rank')">
					<i class="iconfont icon-paihang"></i>
					<span>排行榜</span>
				</li>
				<li class="fl" @click="gopage('bookshelf')">
					<i class="iconfont icon-shu"></i>
					<span>书架</span>
				</li>
				<li class="fl" @click="gopage('mine')">
					<i class="iconfont icon-ren"></i>
					<span>我的</span>
				</li>
				<li class="fl" @click="gopage('recharge')">
					<i class="iconfont icon-jia1"></i>
					<span>充值</span>
				</li>
			</ul>
		</div>
	<!--</transition>-->
</template>

<script>

	export default{
		name:"mnav",
		data(){
			return{
				user_id : ""
			}
		},
		created(){
			if (localStorage.getItem("user_id")) {
				this.user_id = localStorage.getItem("user_id")
			}
		},
		components:{
		 	
		},
		methods:{
			gopage(path){
				if(path == "/" || "rank" || "recharge"){
					this.$router.push({path})
				}else{
					if (true) {
						this.$router.push({path,query:{user_id:this.user_id}})
					} else{
						this.$router.push({path:'login'})
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
        @return $px / 50px * 1rem;
    }
    *{
    	margin: 0;
    	padding: 0;
    	box-sizing: border-box;
    }
    a{
    	text-decoration: none;
    	color: black;
    	display: block;
    } 
    .mnav{
    	height: 6rem;
    	display: block;
    	padding: 0 0.5rem 0.5rem 0.5rem;
    	background: white;
    	z-index: 999999;
    	width: 100%;
    	position: absolute;
    	border: 0.04rem solid #F0F1F2;
    	    box-shadow: 0 0.08rem 0.04rem #d8d8d8;
    	.box{
    		display: flex;
    		justify-content: space-between;
    		flex-wrap:wrap;
    		.fl{
    			height: 2.8rem;
    			width: 33.33%;
    			list-style: none;
    			display: flex;
    			flex-direction: column;
    			align-items: center;
    			justify-content: space-around;
    			font-size: 0.7rem;
    			padding: 0.3rem 0;
    			i{
    				font-size: 0.9rem;
    				color: $color !important;
    			}
    			span{
    				font-size: 0.6rem;
    				color: grey;
    			}
    		}
    	}
    }
</style>
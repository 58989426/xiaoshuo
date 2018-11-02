<template>
	<div id="rank">
        <v-header><slot>排行榜</slot></v-header>
        <div class="container">
			<ul class="left">
				<li v-for="(item,index) in ranklist" class="dj" @click="rank(index)"><span :class="cur==index  ?'cur' : ''">{{item}}</span></li>
			</ul>
			<div class="right">
				<dl class="list">
		        	<dt>
		        		<img src="@/assets/images/test.jpg"/>
		        	</dt>
		        	<dd>
		        		<div class="name">最美的时光</div>
		        		<div class="rank_intro">重生七零：田妻影视非常狠嚣</div>
		        		<div class="box">
		        			<div class="left2">
		        				<i class="iconfont icon-ren"></i>
		        				<span class="name">烧浪尖</span>
		        			</div>
		        			<div class="right2">现代都市</div>
		        		</div>
		        	</dd>
	        	</dl>
	        	<dl class="list">
		        	<dt>
		        		<img src="@/assets/images/test.jpg"/>
		        	</dt>
		        	<dd>
		        		<div class="name">最美的时光</div>
		        		<div class="rank_intro">重生七零：田妻影视非常狠嚣的很哦哦</div>
		        		<div class="box">
		        			<div class="left2">
		        				<i class="iconfont icon-ren"></i>
		        				<span class="name">烧浪尖</span>
		        			</div>
		        			<div class="right2">现代都市</div>
		        		</div>
		        	</dd>
	        	</dl>
	        	<dl class="list">
		        	<dt>
		        		<img src="@/assets/images/test.jpg"/>
		        	</dt>
		        	<dd>
		        		<div class="name">最美的时光</div>
		        		<div class="rank_intro">重生七零：田妻影视非常狠嚣</div>
		        		<div class="box">
		        			<div class="left2">
		        				<i class="iconfont icon-ren"></i>
		        				<span class="name">烧浪尖</span>
		        			</div>
		        			<div class="right2">现代都市</div>
		        		</div>
		        	</dd>
	        	</dl>
			</div>
        </div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"rank",
		data(){
			return{
				ranklist:["点击榜","人气榜","订阅榜","完本榜"],
				cur:0
			}
		},
		components:{
		 vHeader
		},
		methods:{
			change(){
				console.log("dddd")
			},
			rank(num){
				this.cur = num
			},

		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #rank{
        .container{
        	/*height: 100%;*/
        	display: flex;
        	padding: 0.5rem 0.5rem 0 0rem;
        	.left{
        		width: 22%;
        		font-size: 0.6rem;
        		position:fixed;
        		top:2rem;
        		bottom:0;
        		border-right:0.5px solid #f0f1f2;
        		li{
        			height: 2rem;
        			display: flex;
        			text-align: center;
        			line-height: 1rem;
        			align-items: center;
        			span{
        				display: block;
        				height: 1rem;
        				width: 100%;
        			}
        			.cur{
                	border-left: 2px solid $color;
                	color: $color;
                  }
        		}
        	}
        	.right{
        		width: 100%;
        		padding-left: 26%;
				.list{
					height: 4.6rem;
					padding: 0.3rem 0;
					display: flex;
					dt{
						img{
							display: block;
							height: 4rem;
							width: 3rem;
						}
					}
					dd{
						height: 4rem;
						padding-left: 0.25rem;
						width: 100%;
						div{
							height: 1.33rem;
							width: 7.5rem;
							font-size: 0.5rem;
							line-height: 1.33rem;
							overflow: hidden;
							text-overflow: ellipsis;
							position: relative;
						}
						.name{
							font-size: 0.65rem;
							font-weight: 600;
						}
						.rank_intro{
							font-size: 0.56rem;
							white-space: nowrap;
							
						}
						.box{
							display: flex;
							align-items: center;
							justify-content: space-between;
							.left2{
								.name{
									font-size: 0.52rem;
									font-weight: normal;
								}
							}
							.right2{
								font-size: 0.4rem;
								line-height: 0.7rem;
								text-align: center;
								border: 0.5px solid #4284ee;
								height: 0.7rem;
								width: 3.3rem;
								color: #4284ee;
								border-radius: 10%;
							}
						}
					}
				}
        	}
        }
    }    
</style>
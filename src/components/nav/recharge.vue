<template>
	<div id="recharge">
        <v-header><slot>充值</slot></v-header>
        <div class="container">
        	<div class="top">
        		<div class="name">APPMkhYSKL</div>
        		<div class="balance">
        			余额:<span>4890</span>书币
				</div>
        	</div>
        	<div class="tabbar">
        		<div :class="tabnum==index?'tab_cur':''" v-for="(item,index) in tablist" @click="ctab(index)">
        			<i :class="item.icon"></i>
        			<span>{{item.ti}}</span>
        		</div>
        	</div>
        	<!--书币-->
        	<div class="coinbox">
        		<div>
        			<span >￥30</span>
        			<span>3000书币</span>
        			<span>赠送5000书币</span>
        			<span class="hot">热</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        			<span class="hot">热</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        			<span class="hot">热</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        			<span class="hot">热</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        			<span class="hot">热</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        			<span class="hot">热</span>
        		</div>
        	</div>
        	<!--会员-->
        	<div class="vipbox">
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        		</div>
        		<div>
        			<span>￥30</span>
        			<span>3000书币</span>
        			<span>￥50</span>
        		</div>
        	</div>
        	
        	<!--充值方式-->
        	<div class="payway">
        		<div v-for="(item,index) in payway" :key="index" @click="choose(index)">
        			<div id="current" v-if="index == paynum">
        				<div class="box">
        					<i class="iconfont icon-queren"></i>
        				</div>
        			</div>
        			<img :src="item.pic"/>
        			<span>{{item.ti}}</span>
        		</div>
        	</div>
        	
        	<div class="topay">
        		<div>确认支付</div>
        	</div>
        	
		</div>	
		<!--提示-->
		<div class="remind">
			<div>
				<h4>温馨提示</h4>
	            <p>1、书币充值比例 1元=100书币</p>
	            <p>2、充值后书币到账可能有延时，如遇超过10分钟未到账，或遇到其他充值问题，请与客服联系。</p>
	            <p>3、书币属于虚拟产品，购买即默认用户同意<a>《用户协议》</a>。</p>	
			</div>

     	</div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"	
	import weixin from "@/assets/images/wx.png"
	import zhb from "@/assets/images/ali.png"
	export default{
		name:"rank",
		data(){
			return{
				user_id:"",
				tabnum:0,
				paynum:0,
				tablist:[
					{
						ti:"充值书币",
						icon:"iconfont icon-qian"	
					},
					{
						ti:"加入会员",
						icon:"iconfont icon-huiyuan"	
					},],
				payway:[
					{
						pic:weixin,
						ti : '微信'
					},
					{
						pic:zhb,
						ti: "支付宝"
					}
					
				]
			}
		},
		components:{
		 vHeader
		},
		created(){
			this.user_id = this.$route.user_id
		},
		methods:{
			ctab(index){
				this.tabnum = index
			},
			choose(index){
				this.paynum = index
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #recharge{
        .container{
        	.top{
        		height: 2rem;
        		padding: 0 0.9rem;
        		display: flex;
        		font-size: 0.6rem;
        		align-items: center;
        		justify-content: flex-start;
        		
        		.name{
        			padding: 0 0.5rem;
        			height: 0.88rem;
        			line-height: 0.88rem;
        			border-left: 0.1rem solid $color;
        			color: $color;
        			font-weight: 600;
        		}
        		.balance{
        			span{
        				color: $color;
        				font-weight: 600;
        				padding: 0 0.2rem;
        			}
        		}
        	}
        	.tabbar{
        		padding: 0 2rem;
        		height: 1.6rem;
        		display: flex;
        		justify-content: space-around;
        		align-items: center;
        		font-size: 0.66rem;
        		.tab_cur{
        			color: $color;
        		}
        		div{
        			display: flex;
        			align-items: center;
        			i{
        				font-size: 0.6rem;
        				display: block;
        				height: 1.6rem;
        				line-height: 1.6rem;
        			}
        			span{
        				display: block;
        				height: 1.6rem;
        				line-height: 1.6rem;
        				padding-left: 0.25rem;
        			}
        		}
        	}
        	.coinbox{
        		padding: 0 0.5rem;
        		display: flex;
        		flex-wrap: wrap;
        		justify-content: space-around;
        		font-size: 0.6rem;
        		div{
        			border: 1px solid #F2F2F2;
        			border-radius: rf(12px);
        			padding: 0.18rem 0;
        			margin-top: 0.6rem;
        			height: 3rem;
        			width: 44%;
        			display: flex;
        			flex-direction: column;
        			justify-content: space-between;
        			text-align: center;
        			position: relative;
        			
        			.hot{
        				font-size: 0.5rem;
        				position: absolute;
        				display: flex;
        				align-items: center;
        				justify-content: center;
        				height: 0.8rem;
        				width: 0.8rem;
        				background: $color;
        				color: white;
        				border-radius: 50%;
        				right: -0.28rem;
        				top: -0.28rem;
        			}
        		}
        	}
        	.vipbox{
        		padding: 0 0.5rem;
        		display: flex;
        		flex-wrap: wrap;
        		justify-content: flex-start;
        		font-size: 0.6rem;
        		div{
        			border: 1px solid #F2F2F2;
        			border-radius: rf(12px);
        			padding: 0.18rem 0;
        			margin-top: 0.6rem;
        			height: 3rem;
        			width: 44%;
        			margin: 3%;
        			display: flex;
        			flex-direction: column;
        			justify-content: space-between;
        			text-align: center;
        		}
        	}
        	.payway{
        		padding: 0 0.5rem;
        		display: flex;
        		justify-content: space-around;
        		padding: 0.5rem 0.8rem;
        		height:4.6rem;
        		div{
        			display: flex;
        			flex-direction: column;
        			width: 4.6rem;
        			position: relative;
        			justify-content: space-around;
        			align-items: center;
        			font-size: 0.6rem;
        			border: 0.04rem  solid #F0F1F2;
        			overflow: hidden;
        			#current{
        				position: absolute;
        				right: -0.5rem;
        				top: -0.5rem;
        				height:1rem;
        				width:1rem;
        				transform:rotate(45deg);
        				border: none;
        				background:$color;
        				.box{
        					border: none;
        					height: 1rem;
        					width: 1rem;
        					position: relative;
        					i{
	        					display: block;
	        					text-align: center;
	        					line-height: 0.3rem;
	        					height: 0.3rem;
	        					width: 0.3rem;
	        					transform:rotate(-45deg);
	        					position: absolute;
	        					top: 0.72rem;
	        					font-size: 0.3rem;
	        					color: white;
        					}
        				}
        				
        			}
        			img{
        				height: 2rem;
        				width: 2rem;
        			}
        		}
        	}
        	.topay{
        		margin: 0.5rem 0;
        		height: 1.8rem;
        		font-size: 0.8rem;
        		color: white;
        		display: flex;
        		justify-content: center;
        		align-items: center;
        		div{
        			width: 12rem;
        			height: 1.6rem;
        			text-align: center;
        			line-height: 1.6rem;
        			border-radius: .9rem;
        			color: white;
        			background: $color;
        		}
        	}
        }
        
        .remind{
        	padding: 0.5rem;
        	div{
        		height: 8rem;
        		border: 1px solid #F2F2F2;
        		padding: 0.4rem;
        		h4{
	        		font-weight: 500;
	        		font-size: 0.7rem;
	        		padding-bottom: 0.2rem;
        		}
        		p{
        			display: block;
        			font-size: 0.6rem;
        			padding: 0.1rem 0 0.1rem 0.6rem;
        			a{
        				color: $color;
        				display: inline-block;
        			}
        		}
        	}
        	
        }
    }    
</style>
<template>
	<div id="record">
		<v-header><slot>{{txt}}</slot></v-header>
        <div class="record_container">
 			<div class="consume_box" v-if="type == 0">
 				<div class="box">
 					<div class="top">
 						<i class="iconfont icon-xiaofeijilu"></i>
 						<span class="time">2018-10-25 11:33:25</span>
 					</div>
 					<div class="detail">
 						<div class="name left"><span>书名 : </span> <span class="t"> 官梯</span></div>
 						<div class="coin right"><span>消费书币 : </span> <span class="t"> 4555书币</span></div>
 						<div class="chapter left"><span>章节 : </span> <span class="y"> 第一章 我是谁</span></div>
 						<div class="state right"><span>消费状态 : </span> <span class="y"> 已支付</span></div>
 					</div>
 				</div>
 				<div class="box">
 					<div class="top">
 						<i class="iconfont icon-xiaofeijilu"></i>
 						<span class="time">2018-10-25 11:33:25</span>
 					</div>
 					<div class="detail">
 						<div class="name left"><span>书名 : </span> <span class="t"> 官梯</span></div>
 						<div class="coin right"><span>消费书币 : </span> <span class="t"> 4555书币</span></div>
 						<div class="chapter left"><span>章节 : </span> <span class="y"> 第一章 我是谁</span></div>
 						<div class="state right"><span>消费状态 : </span> <span class="y"> 已支付</span></div>
 					</div>
 				</div>
 				<div class="box">
 					<div class="top">
 						<i class="iconfont icon-xiaofeijilu"></i>
 						<span class="time">2018-10-25 11:33:25</span>
 					</div>
 					<div class="detail">
 						<div class="name left"><span>书名 : </span> <span class="t"> 官梯</span></div>
 						<div class="coin right"><span>消费书币 : </span> <span class="t"> 4555书币</span></div>
 						<div class="chapter left"><span>章节 : </span> <span class="y"> 第一章 我是谁</span></div>
 						<div class="state right"><span>消费状态 : </span> <span class="y"> 已支付</span></div>
 					</div>
 				</div>
 			</div>
 			
 			<div class="pay_box" v-if="type == 1">
 				<div class="box">
 					<div class="top">
 						<i class="iconfont icon-zanwuchongzhijilu"></i>
 						<span class="time">2018-10-25 11:33:25</span>
 					</div>
 					<div class="detail">
 						<div class="name left"><span>充值方式 ：</span> <span class="y"> 支付宝</span></div>
 						<div class="coin right"><span>赠送书券 : </span> <span class="t"> 455558</span></div>
 						<div class="chapter left"><span>充值书币 : </span> <span class="t"> 55555555</span></div>
 						<div class="state right"><span>订单状态 : </span> <span class="y"> 已支付</span></div>
 					</div>
 				</div>
 				<div class="box">
 					<div class="top">
 						<i class="iconfont icon-zanwuchongzhijilu"></i>
 						<span class="time">2018-10-25 11:33:25</span>
 					</div>
 					<div class="detail">
 						<div class="name left"><span>充值方式 ：</span> <span class="y"> 支付宝</span></div>
 						<div class="coin right"><span>赠送书券 : </span> <span class="t"> 455558</span></div>
 						<div class="chapter left"><span>充值书币 : </span> <span class="t"> 55555555</span></div>
 						<div class="state right"><span>订单状态 : </span> <span class="y"> 已支付</span></div>
 					</div>
 				</div>
 				<div class="box">
 					<div class="top">
 						<i class="iconfont icon-zanwuchongzhijilu"></i>
 						<span class="time">2018-10-25 11:33:25</span>
 					</div>
 					<div class="detail">
 						<div class="name left"><span>充值方式 ：</span> <span class="y"> 支付宝</span></div>
 						<div class="coin right"><span>赠送书券 : </span> <span class="t"> 455558</span></div>
 						<div class="chapter left"><span>充值书币 : </span> <span class="t"> 55555555</span></div>
 						<div class="state right"><span>订单状态 : </span> <span class="y"> 已支付</span></div>
 					</div>
 				</div>
 			</div>
        </div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"record",
		data(){
			return{
				type : this.$route.params.type,
				txt : this.$route.params.txt
			}
		},
		created(){
			console.log()
			if (!this.$route.params.type) {
				this.type = localStorage.getItem("type")
				if(this.type == 0){
					this.txt = "消费记录"
				}else{
					this.txt = "充值记录"
				}
			}
		},
		components:{
		 	vHeader
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #record{
        .record_container{
        	width: 100%;
        	padding: 0 0.8rem;
        	.consume_box{
        		width: 100%;
        		height: auto;
        		.box{
        			height: 5.5rem;
        			padding-top: 0.2rem;
        			.top{
        				height: 1.5rem;
        				width: 100%;
        				display: flex;
        				justify-content:  space-between;
        				border-bottom:0.04rem solid #F0F1F2;
        				i{
        					display: flex;
        					justify-content: center;
        					align-items: center;
        					height: 1.5rem;
        					width: 1rem;
        					font-size: 0.8rem;
        					color: $color;
        				}	
        				span{
        					color: grey;
        					display: block;
        					height: 1.5rem;
        					line-height: 1.5rem;
        					font-size: 0.6rem;
        				}
        			}
        		}
        		.detail{
        			display: flex;
        			flex-wrap: wrap;
        			font-size: 0.56rem;
        			color: grey;
        			div{
        				line-height: 1.4rem;
        				display:flex;
        				span{
        					display: block;
        					height: 1.4rem;
        					line-height: 1.4rem;
        				}
        				.t{
        					padding-left: 0.1rem;
        					color: $color;
        				}
        				.y{
        					padding-left: 0.1rem;
        					color: #e88d54 ;
        				}
        			}
        			.left{
        				width: 60%;
        				overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
        			}
        			.right{
        				width: 40%;
        			}
        		}
        	}
        	.pay_box{
        		width: 100%;
        		height: auto;
        		.box{
        			height: 5.5rem;
        			padding-top: 0.2rem;
        			.top{
        				height: 1.5rem;
        				width: 100%;
        				display: flex;
        				justify-content:  space-between;
        				border-bottom:0.04rem solid #F0F1F2;
        				i{
        					display: flex;
        					justify-content: center;
        					align-items: center;
        					height: 1.5rem;
        					width: 1rem;
        					font-size: 0.8rem;
        					color: $color;
        				}	
        				span{
        					color: grey;
        					display: block;
        					height: 1.5rem;
        					line-height: 1.5rem;
        					font-size: 0.6rem;
        				}
        			}
        		}
        		.detail{
        			display: flex;
        			flex-wrap: wrap;
        			font-size: 0.56rem;
        			color: grey;
        			div{
        				line-height: 1.4rem;
        				display:flex;
        				span{
        					display: block;
        					height: 1.4rem;
        					line-height: 1.4rem;
        				}
        				.t{
        					padding-left: 0.1rem;
        					color: $color;
        				}
        				.y{
        					padding-left: 0.1rem;
        					color: #e88d54 ;
        				}
        			}
        			.left{
        				width: 55%;
        				overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
        			}
        			.right{
        				width: 45%;
        			}
        		}
        	}
        }
    }    
</style>
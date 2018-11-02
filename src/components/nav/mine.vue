<template>
	<div id="mine">
        <v-header><slot>个人中心</slot></v-header>
        <Tiao />
        <div class="mine_container">
        	<!--用户名头像-->
        	<div class="mine_top">
        		<div class="top_left">
        			<span class="name">APPMkhyYSKL</span>
        			<span class="id">ID:3802056</span>
        		</div>
        		<div class="top_img">
        			<img src="@/assets/images/tx.jpg"/>
        		</div>
        	</div>
        	<!--书币书券-->
			<div class="mine_account">
				<div class="mine_title">
					<i class="iconfont icon-weibiaoti5"></i>
					<div class="right">
						<span class="account">我的账户</span>
						<div class="coin"><span>1890 </span>书币/<span>1584 </span>书券</div>
					</div>
				</div>
				<div class="mine_btn">
					<div>充值</div>
				</div>
			</div>
			<!--会员开通-->
			<div class="mine_vip">
				<div class="mine_tit">
					<i class="iconfont icon-huiyuan"></i>
					<div class="vip_right">
						<span class="name">会员</span>
						<div class="state">未开通</div>
					</div>
				</div>
				<div class="mine_vip_btn">
					<div>开通</div>
				</div>
			</div>
			<!--列表-->
			<ul class="mine_list">
				<li>
					<div>
						<i class="iconfont icon-shouji"></i>
						<span>已绑定手机号136****3233</span>
					</div>
					<i class="iconfont icon-zuo1"></i>
				</li>
				<li @click="goshelf()">
					<div >
						<i class="iconfont icon-shoucang"></i>
						<span>收藏/历史</span>
					</div>
					<i class="iconfont icon-zuo1"></i>
				</li>
				<li @click="gorecord(0,'消费记录')">
					<div >
						<i class="iconfont icon-xiaofeijilu"></i>
						<span>消费记录</span>
					</div>
					<i class="iconfont icon-zuo1"></i>
				</li>
				<li @click="gorecord(1,'充值记录')">
					<div>
						<i class="iconfont icon-zanwuchongzhijilu"></i>
						<span>充值记录</span>
					</div>
					<i class="iconfont icon-zuo1"></i>
				</li>
				<li @click="clear()">
					<div>
						<i class="iconfont icon-qinglihuancun"></i>
						<span>清除缓存</span>
					</div>
					<i class="iconfont icon-zuo1"></i>
				</li>
			</ul>
			<!--登录/退出-->
			<div class="quit">
				<router-link to="/login/login">
					<div>退出登录</div>
				</router-link>
			</div>
        </div>
        <!--<Bottom/>-->
	</div>
</template>

<script>
	import Bottom from "@/components/common/bottom"
	import vHeader from "@/components/common/v_header"
	export default{
		name:"mine",
		data(){
			return{
				
			}
		},
		components:{
			Bottom,vHeader
		},
		methods:{
			goshelf(){
				
			},
			gorecord(type,txt){
				localStorage.setItem("type",type)
				this.$router.push({
			        name: "record",
			        params: { type , txt },
			       
			    });
			},
			clear(){
				
			}

		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #mine{
        .mine_container{
  			width: 100%;
  			padding: 0 0.8rem;
  			.mine_top{
  				height: 3.5rem;
  				display: flex;
  				justify-content: space-between;
  				border-bottom: 1px solid #F2F2F2;
  				.top_left{
  					padding: 0.8rem 0;
  					font-size: 0.6rem;
  					height: 3.5rem;
  					display: flex;
  					flex-direction: column;
  					justify-content: space-around;
  					.name{
  						font-size: 0.6rem;
  					}
  					.id{
  						color: $color;
  						font-size: 0.52rem;
  					}
  				}
  				.top_img{
  					height: 3.5rem;
  					display: flex;
  					width: 3.5rem;
  					align-items: center;
  					justify-content: center;
  					img{
  						height: 2.8rem;
  						width: 2.8rem;
  						border-radius: 50%;
  					}
  				}
  			}
  			.mine_account{
  				height: 2.5rem;
  				display: flex;
  				justify-content: space-between;
  				border-bottom: 1px solid #F2F2F2;
  				.mine_title{
  					font-size: 0.52rem;
  					display: flex;
  					justify-content: flex-start;
  					i{
  						display: flex;
  						align-items: center;
  						font-size: 0.66rem;
  						color: $color;
  					}
  					.right{
  						padding: 0.4rem;
  						display: flex;
  						flex-direction: column;
  						justify-content: space-around;
  						.coin{
  							span{
  								color: $color;
  								font-weight: 600;
  							}
  						}
  					}
  				}
	  			.mine_btn{
	  				height: 2.5rem;
	  				width: 2.4rem;
	  				display: flex;
	  				align-items: center;
	  				div{
	  					width: 2.4rem;
	  					height: 1.2rem;
	  					border-radius: 0.6rem;
	  					background: red;
	  					box-shadow: 0 0 3px red;
	  					font-size: 0.6rem;
	  					line-height: 1.2rem;
	  					color: white;
	  					text-align: center;
	  				}
	  			}
  			}
			/*会员*/
			.mine_vip{
				height: 2.5rem;
  				display: flex;
  				justify-content: space-between;
  				border-bottom: 1px solid #F2F2F2;
  				.mine_tit{
  					font-size: 0.52rem;
  					display: flex;
  					justify-content: flex-start;
  					i{
  						display: flex;
  						align-items: center;
  						font-size: 0.66rem;
  						color: orange;
  					}
  					.vip_right{
  						padding: 0.4rem;
  						display: flex;
  						flex-direction: column;
  						justify-content: space-around;
						
  					}
  				}
	  			.mine_vip_btn{
	  				height: 2.5rem;
	  				width: 2.4rem;
	  				display: flex;
	  				align-items: center;
	  				div{
	  					width: 2.4rem;
	  					height: 1.2rem;
	  					border-radius: 0.6rem;
	  					background: orange;
	  					box-shadow: 0 0 3px orange;
	  					font-size: 0.6rem;
	  					line-height: 1.2rem;
	  					color: white;
	  					text-align: center;
	  				}
	  			}
			}
			/*列表*/
			.mine_list{
				height: 10rem;
				li{
					height: 2rem;
					border-bottom: 1px solid #F2F2F2;
					font-size: 0.6rem;
					display: flex;
					justify-content: space-between;
					i{
						font-size: 0.7rem;
						height: 2rem;
						line-height: 2rem;
						color: $color;
						}
					div{
						height: 2rem;
						align-items: center;
						display: flex;
						
						span{
							padding-left: 0.4rem;
							color: #666;
							height: 2rem;
							line-height: 2rem;
						}
					}
				}
			}
			.quit{
				height: 2.7rem;
				padding: .5rem .5rem;
				display: flex;
				justify-content: center;
				div{
					height: 1.7rem;
					width: 5rem;
					font-size: 0.5rem;
					color: $color;
					border: 1px solid $color;
					border-radius: 1rem;
					text-align: center;
					line-height: 1.7rem;
				}
			}
        }
    }    
</style>
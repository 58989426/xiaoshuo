<template>
	<div id="login">
		<v-header><slot>登录</slot></v-header>
		<ul class="login_box">
			<li class="phone"><input type="number" placeholder="请输入手机号" id="" value="" /></li>
			<li class="code">
				<input type="number" placeholder="验证码" name="" id="" value="" />
				<button>获取验证码</button>
				<!--<button>60s后重新发送</button>-->
			</li>
		</ul>
		<div class="login_btn">
			<div>立即登录</div>
		</div>
		
    	<div class="tripartite">
    		<div class="qq_login">
    			<i class="iconfont icon-qq"></i>
    			<span>QQ</span>
    		</div>
    		<div class="wx_login">
    			<i class="iconfont icon-weixin"></i>
    			<span>微信登录</span>
    		</div>
    	</div>
    	
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"login",
		data(){
			return{
				
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
  	#login{
  		width: 100%;
  		.login_box{
  			height: 7rem;
  			width: 100%;
  			padding: 1rem;
  			li{
  				height: 2.5rem;
  				
  				display: flex;
  				align-items: center;
  				border-bottom: 0.04rem solid #F0F1F2;
  				input{
  					width: 70%;
  					height: 1rem;
  					font-size: 0.6rem;
  					outline: 0;
  					border: none;
  					text-indent: 2em;
  				}
  				button{
  					color: $color;
  					width: 30%;
  					height: 1rem;
  					outline: 0;
  					background: none;
  					border: none;
  				}
  			}
  		}
  		.login_btn{
  			height: 3.2rem;
  			width: 100%;
  			display: flex;
  			align-items: center;
  			justify-content: center;
  			div{
  				height: 1.8rem;
  				width: 80%;
  				text-align: center;
  				line-height: 1.8rem;
  				font-size: 0.72rem;
  				background: $color;
  				color: white;
  				border-radius: 0.9rem;
  			}
  		}
  		.tripartite{
  			height: 5.4rem;
  			width: 100%;
  			padding: 1rem 4.2rem;
  			display: flex;
  			justify-content: space-around;
  			div{
  				width: 2.2rem;
  				display: flex;
  				flex-direction: column;
  				justify-content: space-between;
  				i{
  					display: flex;
  					height: 2.2rem;
  					width: 2.2rem;
  					border: 0.08rem solid #ddedf5;
  					border-radius: 50%;
  					font-size: 1.2rem;
  					align-items: center;
  					justify-content: center;
  				}
  				span{
  					display: block;
  					font-size: 0.5rem;
  					width: 100%;
  					text-align: center;
  					color: #61708F;
  				}
  			}
  			.qq_login{
  				i{
  					font-size: 0.98rem;
  					color: #00adf5;
  					background: #ebf9ff;
  				}
  			}
  			.wx_login{
  				i{
  					color: #44B549;
  					background: #f7f9fb;
  				}
  			}
  		}
  	}
</style>
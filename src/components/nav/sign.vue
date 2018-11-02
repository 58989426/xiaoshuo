<template>
	<div id="sign-container">
		<v-header><slot>签到</slot></v-header>
		<div class="sign-record">
			<div class="sign_flex">
				<h4 class="sign_day">{{signcount}}</h4>
				<p>签到天数</p>
			</div>
			<div class="sign_line"></div>
			<div class="sign_flex">
				<h4 class="sign_quan">{{bookcoinsum}}</h4>
				<p>可用书券</p>
			</div>
		</div>
	
		<div class="sign_sevenday">
			<div class="line_sevenday"></div>
			<ul class="sign_list_day">
				<li class="sign_span" v-for="item in list">
         		  <span :style="item.ck? 'background:#4caf50;color:white': ''">{{item.day}}</span>
				</li>
			</ul>
		</div>
	
		<div  class="sign-btn" @click="sign()" v-if="flag"><div>点击签到</div></div>
        <div  class="sign-btn" v-if="!flag"><div>已签到</div></div>
		<p class="free_text">点击免费送书券啦</p>
	
	    <!-- 签到攻略 -->
	    <div class="strategy">
	      <div>
    			<h2>签到攻略</h2>
    			<p>1. 签到获得书券,书券可代替书币使用,书券有效期为30天。</p>
    			<p>2. 签到7天有效，7天后清零，签到次数越多，奖励越丰厚。</p>
	      </div>
	    </div>
	    <!-- 模态框 -->
	    <div class="mask" v-if="mflag"></div>
	    <div class="sign-hint" v-if="mflag">
	    	<h1>恭喜你，签到成功！</h1>
	    	<h2>获得<b class="bookcoin">{{rewards}}</b>个书券</h2>
	    	<p><a class="closed" @click="confirm()">我知道啦</a></p>
	    </div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"sign-container",
		data(){
			return{
				  uid:"",
		          flag:true, //显示当日是否签到
		          mflag:false, //模态框
		          signcount:0, //签到次数
		          bookcoinsum:0,//用户书券
		          rewards:88, //书币的奖励
		          list:[
		            {
		              day:1,
		              ck:false
		            },
		            {
		              day:2,
		              ck:false
		            },
		            {
		              day:3,
		              ck:false
		            },
		            {
		              day:4,
		              ck:false
		            },
		            {
		              day:5,
		              ck:false
		            },
		            {
		              day:6,
		              ck:false
		            },
		            {
		              day:7,
		              ck:false
		            },
		          ],
			}
		},
		components:{
		 	vHeader
		},
		methods:{
			sign(){
	           this.mflag = true
        		},
	        confirm(){
	           this.mflag = false
	        	}
			}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
	  #sign-container{
	  	
		.sign-record{
	        margin-top: 1.6rem;
	        height: 3.5rem;
	        width: 100%;
	        display: flex;
	        justify-content: space-between;
			.sign_flex{
		        height: 3.5rem;
		        width: 49.5%;
		        display: flex;
		        flex-direction: column;
		        justify-content: space-between;
		        h4{
		            width: 100%;
		            text-align: center;
		            height: 2.3rem;
		            line-height:2.3rem;
		        	} 
		        .sign_day{
			        font-size: 0.6rem;
			        color: #4caf50;
			      }	
			    .sign_quan{
				    font-size: 0.64rem;
			        color: $color;
			      }  
			    p{
			        width: 100%;
			        text-align: center;
			        height: 1rem;
			        font-size: 0.6rem;
			      }  
		    	}
		    .sign_line{
		      	border: 1px dashed #999;
		      }
      		}
      		
      		.sign_sevenday{
		        height: 4rem;
		        display: flex;
		        .sign_list_day{
				    display: flex;
				    width: 100%;
				    box-sizing: border-box;
				    padding: 1.8rem 0 0rem 1.8rem;
				}
				.sign_list_day{
					.sign_span{
				        width: 1.6rem;
				        height: 1.6rem;
			   	        display: flex;
				        justify-content: center;
				        align-items: center;
				        span{
					        display: block;
					        height: 1.2rem;
			  		        text-align: center;
					        line-height: 1.2rem;
  					        background: #f0f1f2;
					        width:1.2rem;
					        border-radius: 100%;
					        color: #999;
					        font-size: 0.6rem;
					    }
				    }
				}
		    }
		    
		    .sign-btn{
		        margin-top: 1rem;
		        width: 100%;
		        display: flex;
		        justify-content: center;
		        font-size: 0.64rem;
		        div{
			        height: 3.6rem;
			        width: 3.6rem;
			        text-align: center;
			        line-height: 3.6rem;
			        background-color: #ffb43c;
			        border-radius: 100%;
			        text-align: center;
			        -webkit-box-shadow: 0 0 0.3rem 0 #ffb43c;
			        box-shadow: 0 0 10px #ffb43c;
			        color: #fff;
			    }
		    }
		    
		    .free_text{
		    	font-size: 0.6rem;
		        height: 1rem;
		        line-height: 1rem;
		        text-align: center;
		        color: $color;
		        margin-top: 0.5rem;
		    }
		    .strategy{
		        margin-left: 6%;
		        width: 88%;
		        margin-top: 1rem;
		        border: 1px dashed #ead6d6;
		        padding: 0.1rem;
		        div{
			        border: 1px dashed #ead6d6;
			        padding: 0.5rem 0.5rem;
			        height: 7.5rem;
		        }
		        h2{
				    text-align: center;
				    font-size: 0.72rem;
				    color: #666;
				    margin: 0.5rem 0;
		    		}
		    	p{
			        font-size: 0.64rem;
			        color: #999;
			        line-height: 1rem;
			        }    
		    }
		    
			.mask{
	            position: fixed;
	            width: 100%;
	            height: 100%;
	            background-color: #000;
	            top: 0;
	            left: 0;
	            opacity: 0.2;
	            z-index: 99;
	        }
	        .sign-hint {
	            position: absolute;
	            width: 8rem;
	            height: 8rem;
	            background-color: #fef7f8;
	            top: 8.2rem;
	            left: 3.2rem;
	            -webkit-box-shadow: 0 0 0.2rem 0 #b3b3b3;
	            box-shadow: 0 0 0.2rem 0 #b3b3b3;
	            border-radius: 0.1rem;
	            z-index: 100;
	        }
	        .sign-hint h1 {
	            text-align: center;
	            margin-top: 1.4rem;
	            font-size: 0.6rem;
	            color: $color;
	        }
	        .sign-hint h2 {
	            text-align: center;
	            margin-top: 1.2rem;
	            font-size: 0.72rem;
	        }
	        .sign-hint h2 b {
	            font-size: 0.72rem;
	            font-style: italic;
	            color: $color;
	            margin: 0 3px;
	        }
	        .sign-hint p {
	            text-align: center;
	            margin-top: 1rem;
	        }
	        .sign-hint p a {
	            display: inline-block;
	            background-color: $color;
	            color: #fff;
	            padding: 0.2rem 0.4rem;
	            border-radius: 0.16rem;
	            font-size: 0.6rem;
	        }
	      }
     


   
</style>
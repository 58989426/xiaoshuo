<template>
  <div id="index">
  	<!--头部-->
  	<div class="header">
        <div class="left">
            <img src="@/assets/images/logo.gif"  class="logo">
            <span class="title">小说阅读网</span>
        </div>
        <div class="right">
            <router-link to="/mine"><i class="iconfont icon-ren"></i></router-link>
						<router-link to="/bookshelf"><i class="iconfont icon-xiaoshuowanben"></i></router-link>
        </div>
     </div>
    <!--轮播图-->
    	<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		        <div class="swiper-slide"><router-link to="/"><img src="@/assets/images/spic1.gif"/></router-link></div>
		    </div>
			</div> 
			<!--搜索-->
			<router-link to="/search"><div class="sea">倾城娇女</div></router-link>
			<!--导航-->
			<div class="nav">
				<router-link to="/classify">
					<div class="fl">
						<i class="iconfont icon-leimupinleifenleileibie"></i>
						<span>分类</span>
					</div>
				</router-link>
				<router-link to="/rank">
					<div class="fl">
						<i class="iconfont icon-paihang"></i>
						<span>排行榜</span>
					</div>
				</router-link>
				<router-link to="/mine">
					<div class="fl">
						<i class="iconfont icon-wode1"></i>
						<span>我的</span>
					</div>
				</router-link>
				<router-link to="/recharge">
					<div class="fl">
						<i class="iconfont icon-chongzhi"></i>
						<span>充值</span>
					</div>
				</router-link>
				<router-link to="/sign">
					<div class="fl">
						<i class="iconfont icon-qiandao"></i>
						<span>签到</span>
					</div>
				</router-link>
			</div>
	    
	    <Tiao />
	    <!--样式一-->
	    <div class="one">
				<div class="top">
					<div class="title">
						样式一
					</div>
					<router-link to="/">
						<div class="more">
							<span>更多</span>
							<i class="iconfont icon-right"></i>
						</div>
					</router-link>
				</div>
				<div class="content">
					<router-link to="/detail">
						<div class="box" >
			        <img class='pimg' src='@/assets/images/test.jpg' />
			        <div class='right'>
			          <div class='name'>  山里人家</div>
			          <div class='intro'>
			            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
			          </div>
			          <div class='author'>
				          <div class="left">
				          	<i class="iconfont icon-ren"></i><span class="at">前叉</span>
				          </div>
			              <div class="right2">
			              	<div>玄幻言情</div>
			              	<div>连载中</div>
			              </div>
			          </div>
			        </div>
					  </div>
				  </router-link>   
				    <div class="box" >
				        <img class='pimg' src='@/assets/images/test.jpg' />
				        <div class='right'>
				          <div class='name'>  山里人家</div>
				          <div class='intro'>
				            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
				          </div>
				          <div class='author'>
					          <div class="left">
					          	<i class="iconfont icon-ren"></i><span class="at">前叉</span>
					          </div>
				              <div class="right2">
				              	<div>玄幻言情</div>
				              	<div>连载中</div>
				              </div>
				          </div>
				        </div>
				      </div>
				    <div class="box" >
				        <img class='pimg' src='@/assets/images/test.jpg' />
				        <div class='right'>
				          <div class='name'>  山里人家</div>
				          <div class='intro'>
				            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
				          </div>
				          <div class='author'>
					          <div class="left">
					          	<i class="iconfont icon-ren"></i><span class="at">前叉</span>
					          </div>
				              <div class="right2">
				              	<div>玄幻言情</div>
				              	<div>连载中</div>
				              </div>
				          </div>
				        </div>
				      </div>
				</div>
			</div>
	 
	    <Tiao />
	    
	    <!--样式二-->
			<div class="two">
				<div class="top">
					<div class="title">样式二</div>
				</div>
				<div class="content">
				    <router-link  to="/detail">
				    	<div class='list' >
					      <div class='box1' >
					        <img src="@/assets/images/test.jpg" class='simg'></img>
				            <span class='name'>报告首长，我重生了</span>
					      </div>
				    	</div>
				    </router-link>
				    <div class='list' >
				      <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
				            <span class='name'>报告首长，我重生了</span>
				      </div>
				    </div>
				    <div class='list' >
				      <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
				            <span class='name'>报告首长，我重生了</span>
				      </div>
				    </div>
				    <div class='list' >
				      <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
				            <span class='name'>报告首长，我重生了</span>
				      </div>
				    </div>		    
				</div>
			</div>
	    <Tiao />
	   	 <!--样式三-->
	   	 <div class="three">
				<div class="top">
					<div class="title">样式三</div>
				</div>
				<ul class="content">
					<router-link  to="/detail">
						<li class="list">
							<span class="cate">[励志风云]</span>
							<span class="name">超级战兵</span>
						</li>
					</router-link>
					<li class="list">
						<span class="cate">[励志风云]</span>
						<span class="name">超级战兵</span>
					</li>
					<li class="list">
						<span class="cate">[励志风云]</span>
						<span class="name">超级战兵</span>
					</li>
					<li class="list">
						<span class="cate">[励志风云]</span>
						<span class="name">超级战兵</span>
					</li>
					<li class="list">
						<span class="cate">[励志风云]</span>
						<span class="name">超级战兵</span>
					</li>
					<li class="list">
						<span class="cate">[励志风云]</span>
						<span class="name">超级战兵</span>
					</li>
					<li class="list">
						<span class="cate">[励志风云]</span>
						<span class="name">超级战兵</span>
					</li>
				</ul>
			</div>
	    <Tiao />
	    <Bottom />
	    <Gotop />
  </div>
</template>

<script>
	import Swiper from 'swiper';
	import Bottom from "@/components/common/bottom"
export default {
  name: 'index',
  components:{
    Bottom
  },
  data(){
    return {
        list : []
    }
  },
  created(){
  	    this.$http({
          method:'get',
          url:'/ky/App/Home/Index/index',
          data:{}
        }).then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        })
  },
  mounted(){
     new Swiper ('.swiper-container', {
     autoplay: true,
     loop: true,
     // 如果需要分页器
     pagination: '.swiper-pagination',
    
     // 如果需要滚动条
     scrollbar: '.swiper-scrollbar',
  })        
  }
}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	/*#app{
		overflow-y: scroll;
	}*/
	 @function rf($px){//$px为需要转换的字号
            @return $px / 50px * 1rem; //25px为根字体大小
        }
    *{
    	margin: 0;
    	padding: 0;
    	box-sizing: border-box;
    }
    a{
    	text-decoration: none;
    	color: black;
    } 
#index{
    /*头部*/
    .header{
	    padding:0 rf(25px);
	    height: rf(88px);
	    .left{
	        width: rf(180px);
	        height: rf(88px);
	        font-size: rf(20px);
	        float: left;
	        line-height: rf(88px);
	
		        img{
		            display: block;
		            height: rf(40px);
		            width: rf(45px);
		            margin-top: rf(24px);
		            float: left;
		            padding-left: rf(5px);
		        }
		        span{
		            float: right;
		            display: block;
		            height: rf(88px);
		            width: rf(130px);
		            line-height: rf(88px);
		            text-align: center;
		        	}	
	        }
	    .right{
	        float: right;
	       width:rf(100px);
	       height: rf(88px);
	       padding-top: rf(21px);
	       display: flex;
	       justify-content: space-between;
	       a{
	       	display: block;
	       	height: rf(46px);
	       	 i{
	         display: block;
	         width: rf(46px);
	         height: rf(46px);
	         color: $color;
	         font-size: rf(46px);
	         box-sizing: border-box;
	       	}
	       }
	    }
            }
   /*轮播图*/
  	.swiper-container {
        width: rf(700px);
        height: rf(270px);
        .swiper-wrapper{
        	
        	.swiper-slide{
        		width: rf(700px);
        		height: rf(270px);
        		img{
        			width: rf(700px);
        			height: rf(270px);
        		}
        	}
        }
    }       
    /*搜索*/  
        .sea{
        	height:rf(66px);
        	width:rf(700px);
        	margin: rf(10px) rf(25px) 0 rf(25px);
        	background: #f7f7f7;
        	line-height: rf(66px);
        	font-size: rf(20px);
        	text-align: center;
        	background: url(../../assets/images/sea.gif) #f7f7f7 no-repeat  ;
        	background-position: rf(260px) center;
        	background-size: rf(36px);
        	padding: 0 rf(25px);
        	border-radius: rf(33px);
        	color: #CCCCCC;
        }
        
    /*导航*/ 
    .nav{
        	display: flex;
			    width: 100%;
			    height: 3rem;
			    justify-content: space-between;
			    -webkit-box-pack: justify;
			    background-color: #fff;
			    padding: 0 1rem;
			    align-items: center;
			    a{
			    	display: block;
			      width: 1.5rem;
				    height: 2rem;
				    text-align: center;
				    font-size: .75rem;
				    position: relative;
				    line-height: 1.5;
				    .fl{
					    	i{
					    		display: inline-block;
							    width: 1.5rem;
							    height: rf(60px);
							    text-align: center;
							    font-size: .75rem;
							    position: relative;
							    color: $color;
					    	}
					    	span{
					    		position: absolute;
							    left: 0;
							    right: 0;
							    bottom: .1875rem;
							    font-weight: 400;
							    font-size: rf(20px);
							    color: black;
					    	}
				    }
			    }
        }   
    /*样式一*/
    .one{
    	height: rf(795px);
    	width: 100%;
    	overflow: hidden;
    	padding: 0 0.5rem;
    	
        .top{
    		height: 1.5rem;
    		width: 100%;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		
    		.title{
    			height: 0.6rem;
    			font-size: 0.6rem;
    			line-height: 0.6rem;
    			width: 2.6rem;
    			text-align: center;
    			border-left: rf(6px) solid $color;;
    			font-weight: 700;
    		}
    		.more{
    			font-size: 0.5rem;
    			i{
    				font-size: 0.6rem;
    			}
    		}
        	}
        .content{
        	.box{
					  height: rf(240px);
					  border-bottom: rf(2px) solid #f2f2f2;
					  display: flex;
					  justify-content: space-around;
					  position: relative;
					  display: flex;
			}
			.box .pimg{
			  margin-top: rf(15px);
			  width: rf(160px);
			  height: rf(210px); 
			  overflow: hidden;
			}
			
			.box .right{
			  width: rf(510px);
			  height: rf(240px);
			  display: flex;
			  flex-direction: column;
			 .name{
			  font-size: 0.6rem;
			  height: rf(70px);
			  line-height: rf(75px);
			  font-weight: 700;
			}
			.author{
			  font-size: 0.56rem;
			  color: #999;
			  height: rf(70px);
			  line-height: rf(40px);
			  display: flex;
			  justify-content: space-between;
			  .left{
			  	padding-top:0.1rem;
			  	i{
			  		font-size: 0.6rem;
			  	}
			  }
			  .right2{
				  height: rf(70px);
				  font-size: rf(20px);
				  display: flex;
				  justify-content: space-around;
				  width: 6rem;
				  padding-top:0.2rem;
				  div{
				  border-radius: 0.1rem;
				  height: rf(30px);
				  text-align: center;
				  line-height: rf(20px);
				  padding: 0.05rem;
				  }
				  div:nth-child(1){
				  	color: #ffad33;
		  
				  	border:  1px solid #ffad33;
				  }
				  div:nth-child(2){
				    color: #5993f0;
				   	border:  1px solid #5993f0;
				  }
				  }
			}
			.intro{
			  text-indent: 0;
			  font-size: 0.56rem;
			  height: rf(100px);
			  overflow: hidden;
			  white-space: wrap; 
			  text-overflow: ellipsis;
			  color: #999;
			  line-height: rf(50px);
			  padding: 0;
			}
			}
        }	
    }  
    /*样式二*/  
    .two{
    	height: rf(360px);
    	width: 100%;
    	.top{
    		padding: 0 0.5rem;
    		height: 1.5rem;
    		width: 100%;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		.title{
    			height: 0.6rem;
    			font-size: 0.6rem;
    			line-height: 0.6rem;
    			width: 2.6rem;
    			text-align: center;
    			border-left: rf(6px) solid $color;
    			font-weight: 700;
    		}
    		.more{
    			font-size: 0.5rem;
    			i{
    				font-size: 0.6rem;
    			}
    		}
    	}
    		.content{
	    		padding:0 0.5rem;
	    		width: 100%;
	    		height: 6rem;
	    		display: flex;
	    		justify-content: space-around;
						.list{
						  height: rf(280px);
						  width: rf(160px);
						  box-sizing: border-box;
							  .box1{
							  display: flex;
							  flex-direction: column;
							  .simg{
							  height: rf(220px);
							  width: rf(160px);
									}
							 .name{
							  height: 1rem;
							  width: rf(160px);
							  font-size: rf(28px);
							  line-height: 1rem;
							  margin-top: rf(10px);
							  display: block;
							  overflow: hidden;
							  white-space: nowrap;
							  text-overflow: ellipsis;
							  text-align: center;
									}
							}
					}
    	}
    }
    /*样式三*/
    .three{
    	height: 9rem;
    	width: 100%;
    	.top{
    		padding: 0 0.5rem;
    		height: 1.5rem;
    		width: 100%;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		.title{
    			height: 0.6rem;
    			font-size: 0.6rem;
    			line-height: 0.6rem;
    			width: 2.6rem;
    			text-align: center;
    			border-left: rf(6px) solid $color;
    			font-weight: 700;
    		}
    		.more{
    			font-size: 0.5rem;
    			i{
    				font-size: 0.6rem;
    			}
    		}
    	}
    		.content{
	    		padding:0 0.5rem;
	    		box-sizing: border-box;
	    		width: 100%;
	    		height: 6rem;
	    		display: flex;
	    		height: 7rem;
	    		flex-direction: column;
	    		align-items: flex-start;
	    		overflow: hidden;
	    		.list{
	    			width: 100%;
	    			height: 1rem;
	    			font-size: 0.5rem;
	    			display:flex;
	    			span{
	    				display: block;
	    				height: 1rem;
	    				line-height: 1rem;
	    			}
	    			.cate{
	    				width: 3.5rem;
	    				text-align: center;
	    				color: #e88d54;
	    			}
	    			.name{
	    				width: 10rem;
	    			}
	    		}
    	}
    }      	
  }
</style>

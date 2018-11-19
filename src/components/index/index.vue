<template>
  <div id="index">
  	<!--头部-->
  	<div class="header">
        <div class="left">
            <img src="@/assets/images/logo.gif"  class="logo">
            <span class="title">小说阅读网</span>
        </div>
        <div class="right">
            <div @click="gopage('mine')"><i class="iconfont icon-ren"></i></div>
						<div @click="gopage('bookshelf')"><i class="iconfont icon-xiaoshuowanben"></i></div>
        </div>
     </div>
    <!--轮播图-->
    	<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
		        	<router-link :to="{name:'detail',query:{book_id:item.book_id}}">
		        		<img :src="item.path"/>
		        	</router-link>
		        </div>
		    </div>
		    <div class="swiper-pagination"></div>
			</div> 
			<!--搜索-->
			<router-link to="/search"> <div class="search">
				<div class="search_box">
					<i class="iconfont icon-sousuo"></i><span>倾城娇女</span>
				</div>
			</div></router-link>
			
			<!--导航-->
			<div class="nav">
				<div class="fl" @click="gopage('classify')">
					<i class="iconfont icon-leimupinleifenleileibie"></i>
					<span>分类</span>
				</div>
				<div class="fl" @click="gopage('rank')">
					<i class="iconfont icon-paihang"></i>
					<span>排行榜</span>
				</div>
				<div class="fl" @click="gopage('mine')">
					<i class="iconfont icon-wode1"></i>
					<span>我的</span>
				</div>
				<div class="fl" @click="gopage('recharge')">
					<i class="iconfont icon-chongzhi"></i>
					<span>充值</span>
				</div>
				<div class="fl" @click="gopage('sign')">
					<i class="iconfont icon-qiandao"></i>
					<span>签到</span>
				</div>
			</div>
			<div class="type_box" v-for="item in lists">
			<Tiao />
				<div class="top">
					<div class="title">{{item.class_name}}</div>
					<router-link to="/classify">
						<div class="more" >
							<span>更多</span>
							<i class="iconfont icon-right"></i>
						</div>
					</router-link>
				</div>
				
				<div class="one" v-if="item.type==1">
				<div class="content">
					<router-link :to="{name:'detail',query:{book_id:i.book_id}}" v-for="(i,index) in item.books"  :key="index">
						<div class="box">
			        <img class='pimg' :src='i.cover' />
			        <div class='right'>
			          <div class='name'>{{i.short_name}}</div>
			          <div class='intro'>{{i.intro}}</div>
			          <div class='author'>
				          <div class="left">
				          	<i class="iconfont icon-ren"></i><span class="at">{{i.author_name}}</span>
				          </div>
			              <div class="right2">
			              	<div class="kkk">{{i.cate_name}}</div>
			              	<div class="kkk">{{i.status==1?"已完结":"连载中"}}</div>
			              </div>
			          </div>
			        </div>
					  </div>
				  </router-link>
				</div>
			</div>
			
			
			<div class="two" v-if="item.type==3">
				<div class="content">
				    <router-link  :to="{name:'detail',query:{book_id:i.book_id}}" v-for="(i,index) in item.books" :key="index">
				    	<div class='list' >
					      <div class='box1' >
					        <img :src="i.cover" class='simg'></img>
				            <span class='name'>{{i.short_name}}</span>
					      </div>
				    	</div>
				    </router-link>	    
				</div>
			</div>
	  
	  
	   	<div class="three" v-if="item.type==2">
				
				<router-link :to="{name:'detail',query:{book_id:i.book_id}}" v-for="(i,index) in item.books" v-if="index == 0"  :key="index">
					<div class="box">
		        <img class='pimg' :src='i.cover' />
		        <div class='right'>
		          <div class='name'>{{i.short_name}}</div>
		          <div class='intro'>{{i.intro}}</div>
		          <div class='author'>
			          <div class="left">
			          	<i class="iconfont icon-ren"></i><span class="at">{{i.author_name}}</span>
			          </div>
		          </div>
		        </div>
				  </div>
			  </router-link>
				  
				<ul class="content">  
					<router-link  :to="{name:'detail',query:{book_id:i.book_id}}" v-for="(i,index) in item.books" v-if="index !== 0" :key='index'>
						<li class="list" >
							<span class="cate">[{{i.cate_name}}]</span>
							<span class="name">{{i.short_name}}</span>
						</li>
					</router-link>
				</ul>
			</div>
				
			</div>
	    <Tiao />
	    <Bottom />
	    <Gotop />
  </div>
</template>

<script>
	import Swiper from 'swiper';
	import axios from 'axios'
	import Bottom from "@/components/common/bottom"
export default {
  name: 'index',
  components:{
  	Bottom
  },
  data(){
    return {
    		bannerlist:[],
        //user_id:123456,
        lists:[]
        
    };
  },
  created(){
			this.getData()
//			localStorage.setItem("user_id",123456)
			
  },
  mounted(){
  	this.$nextTick(function(){
     var mySwiper = new Swiper ('.swiper-container', {
		     autoplay: true,
		     pagination: {
		      el: '.swiper-pagination',
		    },
		     observer:true,
		     autoplayDisableOnInteraction: false,
			})    
		})
  },
  methods:{
		getData(){
	    this.$http({
          method:'get',
          url:'/ky/App/Home/Index/index',
          data:{}
     }).then(res=>{
          this.bannerlist = res.data.data.banner
          this.lists = res.data.data.blocks
          console.log(this.lists)
        }).catch(err=>{
          console.log(err)
        })
		},
		gopage(path){
			if(path == "classify" || "rank"){
				this.$router.push({path})
			}else{
				if (true) {
					this.$router.push({path,query:{user_id:this.user_id}})
				} else{
					this.$router.push({path:'login'})
				}
			}
		},		
		
  }


}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	
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
	       div{
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
        .search{
        	margin-top: 0.5rem;
					display: flex;
					height: 1.6rem;      	
        	padding: 0 0.5rem;
        	.search_box{
        		width: 100%;
        		border-radius: 0.2rem;
        		background: #f7f7f7;
        		padding: 0 5.2rem;
        		display: flex;
        		justify-content: space-around;
        		align-items: center;
        		color:grey;
        		i{
        			height: 1.6rem;
        			line-height: 1.6rem;
        			font-size: 0.68rem;
        		}
        		span{
        			height: 1.6rem;
        			line-height: 1.6rem;
        			font-size: 0.54rem;
        		}
        	}
        }
        
    /*导航*/ 
    .nav{
    	display: flex;
	    width: 100%;
	    height: 3rem;
	    justify-content: space-between;
	    -webkit-box-pack: justify;
	    background-color: #fff;
	    padding: 0 0.5rem;
	    align-items: center;
		  /*a{
		   	display: block;*/
		   	.fl{
		   		display: flex;
		   		height: 2rem;
		   		flex-direction: column;
		   		justify-content: space-around;
		   		align-items:space-around;
		   		i{
		   			width: 2rem;
		   			display: flex;
		   			font-size: 0.76rem;
		   			color:$color;
		   			justify-content: center;
		   			align-items: center;
		   		}
		   		span{
		   			width: 2rem;
		   			text-align: center;
		   			display: block;
		   			font-size: 0.56rem;
		   			color:black;
		   		}
		   	}
		   /*}*/
    }   
  .type_box{
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
				padding-left: 0.4rem;
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
    /*样式一*/
   
    .one{
    	width: 100%;
    	overflow: hidden;
    	padding: 0 0.5rem;
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
			  font-size: 0.62rem;
			  height: rf(70px);
			  line-height: rf(75px);
			  font-weight: 700;
			  color: #333;
			}
			.author{
			  font-size: 0.56rem;
			  color: gray;
			  display: flex;
			  justify-content: space-between;
			  .left{
			  	padding-top:0.2rem;
			  	i{
			  		font-size: 0.6rem;
			  	}
			  }
			  .right2{
				  display: flex;
				  justify-content: space-around;
				  width: 6rem;
				  padding: 0.25rem 0rem 0 1rem;
				  .kkk{
				  	display: flex;
				  	align-items: center;
					  border-radius: 0.1rem;
					  height: 0.72rem;
					  text-align: center;
					  padding: 0.08rem;
					  font-size: 0.48rem;
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
    	width: 100%;
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
			padding-bottom: 1.2rem;
    	width: 100%;
    	.box{
    		padding: 0 0.5rem;
			  height: rf(240px);
			  border-bottom: rf(2px) solid #f2f2f2;
			  display: flex;
			  justify-content: space-around;
			  position: relative;
			  display: flex;
				border-bottom: none;
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
			  font-size: 0.62rem;
			  height: rf(70px);
			  line-height: rf(75px);
			  font-weight: 700;
			  color: #333;
			}
			.author{
			  font-size: 0.56rem;
			  color: gray;
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
    .content{
    		padding:0 0.2rem;
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
  }
</style>

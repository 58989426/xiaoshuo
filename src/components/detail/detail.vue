<template>
	<div id="detail">
        <v-header><slot>待你深情相许</slot></v-header>
        <Nav v-if="navflag"></Nav>
		<!--书图片-->
        <div class="detail-info" >
           <img src="@/assets/images/test.jpg" >
           <div class="cell">
               <h6>带你深情相许</h6>
               <p>灵气值</p>
               <p>现代言情/豪门世家</p>
               <p>24.24万字<span>|</span>连载 </p>
           </div>
        </div>
        <img id="bgpic" src="@/assets/images/test.jpg"/>
		<!--tab-->
		<div class="tab" >
			<router-link to="/book/read" >
				<div class="cur">立即阅读</div>
			</router-link>
			<div >VIP订阅</div>
			<div >加入书架</div>
			<div >捧场</div>
		</div>
		<!--简介-->
		<div class="intro"  >
			十四年情深似海，痴心交付，换来的是他江山稳固，她家破人亡。
			当她踏着鲜血步步重生，回归血债的开端……
			“狠毒？你可知亲眼看着双亲被野狗分食，是何等痛不欲生？”
			在这个世家与皇族共天下的浮华乱世，她是华陵凤家最尊贵的嫡女。
			一手折扇，半面浅笑，藏住满腹阴谋。
			一袭红裳，七弦着墨，结交天下名流。
			当她智斗族男，颠覆祖制，成为有史以来唯一一位女少主；
			当她跻身清流，被名士推崇，成为一代领袖；
			当她——将傲娇的狼骑战神养成人人垂涎的绝色男宠。
			凤举：“灼郎，我心悦你，你呢？”
			慕容灼：“她足下的尺寸之地，便是本王要守护的江山！”
			巍巍帝阙，谁将兴举盛世风骨？
			（读者群：232886807）
			<i class="iconfont icon-down"></i>
		</div>
		<div class="into" style="display: none;" >
			十四年情深似海，痴心交付，换来的是他江山稳固，她家破人亡。
			当她踏着鲜血步步重生，回归血债的开端……
			“狠毒？你可知亲眼看着双亲被野狗分食，是何等痛不欲生？”
			在这个世家与皇族共天下的浮华乱世，她是华陵凤家最尊贵的嫡女。
			一手折扇，半面浅笑，藏住满腹阴谋。
			一袭红裳，七弦着墨，结交天下名流。
			当她智斗族男，颠覆祖制，成为有史以来唯一一位女少主；
			当她跻身清流，被名士推崇，成为一代领袖；
			当她——将傲娇的狼骑战神养成人人垂涎的绝色男宠。
			凤举：“灼郎，我心悦你，你呢？”
			慕容灼：“她足下的尺寸之地，便是本王要守护的江山！”
			巍巍帝阙，谁将兴举盛世风骨？
			（读者群：232886807）
			
		</div>
		<!--目录-->
		 <router-link to="/book/catelog">
	        <div class="catelog">
	            <strong class="left">目录</strong>
	            <div class="right">
		            <p class="serial">连载中<span class="char-dot">·</span>第580章 一种执念</p>
		            <p class="end" v-if="false">已完结</p>
	        	</div>
	        </div>
        </router-link>
        <Tiao/>
  
  		<!--猜你喜欢-->
		<div class="like">
			<div class="top">
				<div class="title">猜你喜欢</div>
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
		<!--书评区-->
		<div class="comment">
			<div class="top">
				<div class="title">书评区</div>
				<div class="right">
					<span class="write">评论</span>
					<i class="iconfont icon-comment"></i>
				</div>
			</div>
			<ul class="content">
				<li class="list">
				    <div class="pic">
				        <img class="img" src="//shp.qpic.cn/readnovel/0/1/100" alt="小阅书友15175016932195538头像">
				    </div>
				    <div class="box">
				        <div class="name">小阅书友15175016932195538</div>
				        <time class="time">10-18 22:05</time>
				        <p class="pl">她跻身清流，被名士推崇，成为一代领袖；</p>
				    </div>
				</li>
				<li class="list">
				    <div class="pic">
				        <img class="img" src="//shp.qpic.cn/readnovel/0/1/100" alt="小阅书友15175016932195538头像">
				    </div>
				    <div class="box">
				        <div class="name">小阅书友15175016932195538</div>
				        <time class="time">10-18 22:05</time>
				        <p class="pl">她跻身清流，被名士推崇，成为一代领袖；</p>
				    </div>
				</li>
				<li class="list">
				    <div class="pic">
				        <img class="img" src="//shp.qpic.cn/readnovel/0/1/100" alt="小阅书友15175016932195538头像">
				    </div>
				    <div class="box">
				        <div class="name">小阅书友15175016932195538</div>
				        <time class="time">10-18 22:05</time>
				        <p class="pl">她跻身清流，被名士推崇，成为一代领袖；</p>
				    </div>
				</li>
			</ul>
		</div>
		<Tiao/>
		
		<Bottom/>
	</div>

</template>

<script>
	import Bottom from "@/components/common/bottom"
	import Nav from "@/components/common/nav"
	import vHeader from "@/components/common/v_header"
	export default{
		name:"detail",
		components:{
		    Bottom,Nav,vHeader
		  },
		data(){
			return{
				navflag:false,
				curIndex:0
			}
		},
		methods:{
				change(){
					if(this.navflag){
						this.navflag = false
					}else{
						this.navflag = true
					}
					
				},
				
			}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
        a{
        	text-decoration: none;
        	
        }
    #bgpic{
    	position: absolute;
	    top: 2rem;
	    width: 100%;
	    height: 13rem;
	    opacity: calc(.1 + .05);
	    z-index: 1;
	    filter: blur(calc(17px + 1px));
    }    
    div{
        .detail-info{
            height:6rem;
            width:100%;
            padding:  0.5rem;
            box-sizing:border-box;
            display: flex;

            img{
                height:4.6rem;
                width:3.5rem;
                margin-right:0.5rem;
            }
            .cell{
                font-size:0.4rem;
                width:10rem;
                height:4.6rem;
                box-sizing:border-box;
                padding-top:0.4rem;
                h6{
                    height:1rem;
                    font-size:0.6rem;
                    line-height:1rem;
                }
                p{
                    display: block;
                    height:0.9rem;
                    line-height:0.9rem;
                    span{
                    	padding: 0 0.2rem;
                    }
                }
            }
        }
        .tab{
        	height: 2rem;
        	width: 100%;
          	padding: 0 0.5rem;
        	box-sizing: border-box;
        	font-size: 0.5rem;
        	display: flex;
        	justify-content: space-between;
        	border-bottom: rf(1px) solid #CCCCCC;
        	z-index: 999;
        	a{
        		display: block;
        		height: 1.1rem;
        		width: 22%;
        		border-radius: 0.2rem;
        		z-index: 999;
        		div{
	        		color: black;
	        		height: 1.1rem;
	        		width: 100%;
	        		border: rf(1px) solid #CCCCCC;
	        		display: flex;
	        		justify-content: center;
	        		align-items: center;
	        		border-radius: 0.2rem;
        		}
        	}
        	div{
        		color: black;
        		height: 1.1rem;
        		width: 22%;
        		border: rf(1px) solid #CCCCCC;
        		display: flex;
        		justify-content: center;
        		align-items: center;
        		border-radius: 0.2rem;
        		z-index: 999;
        	}
        	.cur{
        		background: $color;
        		color: white;
        		border: none;
        	}
        }
        .intro{
        	padding:0.5rem 0.5rem 0 0.5rem;
        	height: 4.5rem;
        	font-size: 0.5rem;
        	line-height: 1rem;
        	position: relative;
        	overflow: hidden;
        	display: -webkit-box;
		    word-break: break-all;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp:4;
		    text-overflow: ellipsis;
		    text-indent: 1rem;
		    z-index: 999;
		    i{
        		position: absolute;
        		bottom: 0rem;
        		right: 0.5rem;
        		height: 1rem;
        		width: 2rem;
        		font-size: 0.88rem;
        		color: #CCCCCC;
        		background: white;	
			    background: -webkit-linear-gradient(left,rgba(255,255,255,0),#fff 1rem);
			    background: linear-gradient(to right,rgba(255,255,255,0),#fff 1rem);
			    position: absolute;
        	}
        }
        .into{
        	padding:0.5rem 0.5rem 0 0.5rem;
        	height: auto;
        	overflow: hidden;
        	font-size: 0.5rem;
        	line-height: 1rem;
        	z-index: 999;
        }
        /*目录*/
       	.catelog{
       		border-top: 1px solid #ccc;
       		box-sizing: border-box;
       		padding: 0 0.5rem;
       		display: flex;
       		justify-content: space-between;
       		font-size: 0.6rem;
       		margin-top: 0.5rem;
       		z-index: 999;
       		.left{
       			width: 20%;
       			height: 1.5rem;
       			line-height: 1.5rem;
       			text-align: center;
       			font-size: 0.6rem;
       		}
       		.right{
       			width: 80%;
       			height: 1.5rem;
       			line-height: 1.5rem;
       			text-align: right;
       			font-size: 0.52rem;
       			color: grey;
       		}
       	}
    /*猜你喜欢*/ 
    .like{
    	height: rf(380px);
    	width: 100%;
    	z-index: 999;
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
    			width: 3.3rem;
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
    /*评论区*/
   .comment{
    	height: 11rem;
    	width: 100%;
    	.top{
    		padding: 0 0.5rem;
    		height: 1.5rem;
    		width: 100%;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		margin-bottom:0.2rem;
    		.title{
    			height: 0.6rem;
    			font-size: 0.6rem;
    			line-height: 0.6rem;
    			width: 3.3rem;
    			text-align: center;
    			border-left: rf(6px) solid $color;
    			font-weight: 700;
    		}
			.right{
				width: 2.5rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				font-size: 0.5rem;
				.write{
					display: block;
					height: 1.5rem;
					line-height: 1.5rem;
					
				}
			}
    	}
    	.content{
    		height: 9rem;
    		overflow: hidden;
    		padding: 0 0.5rem;
    		.list{
    			height: 3rem;
    			display: flex;
    			justify-content: space-between;
    			.pic{
    				width: 1.7rem;
    				height: 1.7rem;
    				.img{
    					display: block;
    					height: 1.7rem;
    					width: 1.7rem;
    				}
    			}
    			.box{
    				width: 12rem;
    				display: flex;
    				font-size: 0.52rem;
    				flex-direction: column;
    				justify-content: flex-start;
    				.name{
    					height: 0.8rem;
    				}
    				.time{
    					height: 0.8rem;
    				}
    				.pl{
    					height: 1.4rem;
    					overflow: hidden;
			        	display: -webkit-box;
					    word-break: break-all;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp:2;
					    text-overflow: ellipsis;
					    /*text-indent: 1.04rem;*/
    				}
    			}
    		}
    	}
     }
    }

</style>
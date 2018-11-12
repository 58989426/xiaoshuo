<template>
	<div id="classify">
		<v-header><slot>分类</slot></v-header>
        <div class="container">
        	<ul class="menu">
        		<!--类型-->
        		<h3>类型</h3>
        		<li class="fl">
        			<div class="cur">全部</div>
        			<div>热血青春</div>
        			<div>现代都市</div>
        			<div>悬疑灵异</div>
        			<div>军事历史</div>
                    <div>热血青春</div>
        			<div>现代都市</div>
        			<div>悬疑灵异</div>
        			<div>玄幻历史</div>
        			<div>热血青春</div>
        			<div>现代都市</div>
        			<div>悬疑灵异</div>
        		</li>
				<!--字数-->
				<h3>字数</h3>
				<li class="word">
					<div class="cur">不限</div>
        			<div>30万以下</div>
        			<div>30-50万</div>
        			<div>50-100万</div>
        			<div>100万以上</div>
				</li>
				<!--状态-->
				<h3>状态</h3>
				<li class="state">
					<div class="cur">全部</div>
					<div>已完成</div>
					<div>连载中</div>
				</li>
				<!--排序-->
				<h3>排序</h3>
        		<li class="sort">
        			<div class="cur">默认</div>
					<div>字数</div>
					<div>点击</div>
        		</li>
        	</ul>
			
			<!--书籍-->
			<div class="booklist">
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
        <Gotop />
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"classify",
		data(){
			return{
				
			}
		},
		components:{
		 	vHeader
		},
		methods:{
			fl(){
				
			},
			word(){
				
			},
			state(){
				
			},
			sort(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #classify{
        .container{
        	
        	.menu{
        		font-size:0.55rem;
        		h3{
        			background: #fff;
				    font-size: 0.56rem;
				    color: #666;
				    height: 1.3rem;
				    line-height: 1.3rem;
				    display: -webkit-box;
				    padding: 0.1rem 0.8rem;
        		}
        		li{
        			height: 1.3rem;
        			display: flex;
        			justify-content: flex-start;
        			width: 100%;
        			background: #fafafa;
        			padding: 0 0.5rem;
        			.cur{
        				color: $color;
        			}
        			div{
        				height: 1.3rem;
        				line-height: 1.3rem;
        				float: left;
        				width: 20%;
        				text-align: center;
        				
        				color: #7b7b7b;
        				font-size: 0.5rem;
        			}
        		}
        		.fl{
        			height: 3.9rem;
        			display: block;
        			
        		}
        	}
        	.booklist{
        		padding-top: 0.5rem;
        		height: auto;
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
				   font-size: rf(30px);
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
					  font-size: rf(30px);
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

    }    
</style>
<template>
	<div id="bookshelf">
		<v-header><slot>书架</slot></v-header>
        <div class="bookshelf_container">
 			<div class="tab">
 				<div v-for="(item,index) in list" :class="num==index?'cur':'' " @click="change(index)">{{item}}</div>
 			</div>
 			
 			
 			<div class="collect_box" v-if="num == 0">
 				<div class="edit">
 					<div class="edit_btn" @click="edit()">编辑</div>
 					<div class="cancel" @click="cancel()" v-if="!edit_flag">取消</div>
 				</div>
 				<router-link  to="/detail" v-if="edit_flag">
			    	<div class='list' >
				      <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
			            <span class='name'>报告首长，我重生了</span>
				      </div>
			    	</div>
				</router-link>
				<router-link  to="/detail" v-if="edit_flag">
					
			    	<div class='list' >
				      <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
			            <span class='name'>报告首长，我重生了</span>
				      </div>
			    	</div>
				</router-link>
				
				
				<div class='list' v-if="!edit_flag">
					<div class="mask" @click="select()">
 						<div class="box">
 							<i class="iconfont icon-queren cur" ></i>
 						</div>
 					</div>
				    <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
			            <span class='name'>报告首长，我重生了</span>
				    </div>
			    </div>
			    
			    <div class='list' v-if="!edit_flag">
					<div class="mask" @click="select()">
 						<div class="box">
 							<i class="iconfont icon-queren"></i>
 						</div>
 					</div>
				    <div class='box1' >
				        <img src="@/assets/images/test.jpg" class='simg'></img>
			            <span class='name'>报告首长，我重生了</span>
				    </div>
			    </div>
			    
 			</div>
 			
 			
 			<div class="delete" @click="deletebook()" v-if="!edit_flag" >删除</div>
 			
 			<div class="history_box" v-if="num == 1">
 				<router-link to="/detail">
					<div class="box" >
				        <img class='pimg' src='@/assets/images/test.jpg' />
				        <div class='right'>
				            <div class='name'>  山里人家</div>
				            <div class='intro'>
				            　　顾水秀穿越到一个贫穷的山旮沓里，阴差阳错嫁给了猎户董成虎，夫妻相濡以沫，把日子过成诗，从家徒四壁，到有房有田有山。从毫无权势的底层百姓到隐世世族。两人一步一个脚印，创造属于自己的奇迹。
				          </div>
				          <div class='author'>上次阅读：2018-10-31 15:00:21</div>
				        </div>
					</div>
				</router-link> 
 			</div>
        </div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"bookshelf",
		data(){
			return{
				edit_flag:true,
				list:["我的收藏","历史记录"],
				num:0
			}
		},
		components:{
		 	vHeader
		},
		methods:{
			change(index){
				console.log(index)
				this.num = index
				this.edit_flag = true
			},
			edit(){
				this.edit_flag = false
			},
			cancel(){
				this.edit_flag = true
			},
			select(){
				console.log("选择")	
			},
			deletebook(){
				console.log("删除")
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #bookshelf{
    	
        .bookshelf_container{
        	
        	.tab{
        		padding: 0 2.5rem;
        		height: 2.2rem;
	        	display: flex;
	        	align-items: center;
	        	justify-content: space-around;
	        	font-size: 0.6rem;
	        	.cur{
	        		background: $color;
	        		color: white;
	        	}
	        	div{
	        		height: 1.2rem;
	        		width: 40%;
	        		border: 1px solid $color;
	        		line-height: 1.2rem;
	        		text-align: center;
	        		border-radius: 6%;
	        	}
	        	
        	}
        	
        	.delete{
        		position: fixed;
			    bottom: 0;
			    text-align: center;
			    color: $color;
			    width: 100%;
			    background: white;
			    border-top: 0.04px solid #f0f1f2;
			    height: 1.6rem;
			    line-height: 1.6rem;
				font-size: 0.6rem;
				font-weight: 600;
				box-shadow: -0.08rem -0.08rem 0.12rem #F0F1F2;
        	}
        	.collect_box{
	    		padding:0.2rem 0.5rem 0 0.5rem;
	    		width: 100%;
	    		display: flex;
	    		justify-content: flex-start;
	    		flex-wrap: wrap;
    			.edit{
	    			display: flex;
	    			width: 100%;
	    			height:1.6rem;
	    		    justify-content:space-between;
	    		    border-bottom:0.04rem solid #F0F1F2;
	    		    margin-bottom:0.5rem;
	    			div{
	    				height: 1.6rem;
	    				width: 2.6rem;
	    				line-height: 1.6rem;
	    				text-align: center;
	    				font-size: 0.6rem;
	    			}	
	    		}

				.list{
					
					.mask{
		    			height: rf(280px);
					    width: 3.2rem;
					    position: absolute;
					    background: rgba(0, 0, 0, 0.8);
					    opacity: 0.6;
					    z-index: 9999;
					    transition: opacity .3s,transform .3s;
					    .box{
					    	position: relative;
					    	height: 100%;
					    	width: 100%;
					    	.cur{
					    		background: $color;
					    	}
					    	i{
					    		display: block;
					    		height: 1rem;
					    		width: 1rem;
					    		text-align: center;
					    		line-height: 1rem;
					    		font-size: 0.6rem;
					    		position: absolute;
					    		right: 0;
					    		top: 0;
					    		border-radius: 50% ;
					    		background: grey;
					    		color: white;
					    	}
					    	
					    }    
		    		}
				    height: rf(280px);
				    width: rf(160px);
				    box-sizing: border-box;
				    margin:0 0.15rem 0.5rem 0.15rem;
				    margin-bottom: 0.5rem;
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
    		.history_box{
        	  a{
	        	.box{
					height: rf(240px);
					border-bottom: 0.04rem solid #f2f2f2;
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
				  color: grey;
				  height: rf(70px);
				  line-height: rf(50px);
				  display: flex;
				  justify-content: space-between;
				}
				.intro{
				  text-indent: 0;
				  font-size: 0.56rem;
				  height: rf(100px);
				  overflow: hidden;
				  white-space: wrap; 
				  text-overflow: ellipsis;
				  color: grey;
				  line-height: rf(50px);
				  padding: 0;
				}
			   }
	         }
    		}
        }
    }    
</style>
<template>
	<div id="sea">
	    <div class="header">
	        <div class="left">
	            <router-link to="/"><i class="iconfont icon-zuo"></i></router-link>
	            <span>搜索</span>
	        </div>
    	</div>
    	<div class="search">
    		<div id="box">
    			<input type="text" placeholder="输入关键字搜索" name="" id="" value="" v-model="sea_txt" />
				<button @click="search()">
					<i class="iconfont icon-sousuo"></i>
				</button>
    		</div>
        </div>
        <div id="hot_sea" v-if='history_flag'>
        	<h3>大家都在搜 :</h3>
        	<div class="sea_book">
        		<span>最强刀皇</span>
        		<span>摆渡人</span>
        		<span>最强刀皇大砍刀</span>
        		<span>摆渡</span>
        		<span>最强阶段刀皇</span>
        		<span>摆渡人</span>
        		<span>最强刀皇</span>
        	</div>
        </div>
        <div class="sea_list" v-if="list_flag">
        	<router-link :to="{name:'detail',query:{book_id:item.book_id}}" v-for="(item,index) in sea_lists" :key="index">
				<div class="box" >
			        <img class='pimg' :src='item.cover' />
			        <div class='right'>
			            <div class='name'>{{item.short_name}}</div>
			            <div class='intro'>{{item.intro}}</div>
			            <div class='author'>
					        <div class="left">
					        	<i class="iconfont icon-ren"></i><span class="at">{{item.author_name}}</span>
					        </div>
				            <div class="right2">
				            	<div>{{item.cate}}</div>
				             	<div>{{item.status}}</div>
				              </div>
			            </div>
			        </div>
				</div>
				  </router-link>
        </div>
        <div class="result_null" v-if="empty_flag">
        	搜索结果为空！！！
        </div>
	</div>

</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"sea",
		data(){
			return{
				history_flag:true,
				list_flag:false,
				empty_flag:false,
				sea_txt:"",
				sea_lists : []
			}
		},
		created:function(){
			this.flag = true
		},
		components:{
		 	vHeader
		},
		methods:{
			search(){
				console.log(this.sea_txt)
				if (this.sea_txt !== "") {
				    this.$http({
			          method:'get',
			          url:'/ky/App/Book/Book/search?search='+this.sea_txt,
			          data:{}
				    }).then(res=>{
				    	console.log(res.data.data)
					    	if(res.data.data.length !== 0){
					    		this.history_flag = false
								this.list_flag = true
								this.empty_flag = false
								this.sea_lists = res.data.data
					    	}else{
					    		console.log("搜索结果为空")
					    		this.history_flag = false
					    		this.empty_flag = true
					    	}
				        }).catch(err=>{
				          console.log(err)
				        })					
				} else{
					console.log("搜索词为空")
				}

			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
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
    #sea{
    	.header{
            padding:0 0.5rem;
            box-sizing:border-box;
            font-size:0.64rem;
            height:2rem;
            display: flex;
            align-items:center;
            justify-content:space-between;
            .left{
                display: flex;
                justify-content:space-between;
                a{
                    text-decoration:none;
                    color:$color;
                    display: block;
                    width:0.8rem;
                    height:0.8rem;
                    margin-right:0.4rem;
                    i{
                        font-size:0.8rem;

                    }
                }
            }
            .right{
                height:1rem;
                width:2.5rem;
                display: flex;
                justify-content:space-between;
                a{
                    color:$color;
                    display: flex;
                    width:1rem;
                    height:1rem;
                    justify-content: center;
                    align-items: center;
                    i{
                    	font-size:0.6rem
                    }
                }
            }
        }
        .search{
        	height: 3rem;
        	padding: 0.5rem 1rem;
        	border-bottom: 0.04rem solid #F0F1F2;
        	#box{
        		width: 100%;
        		border:0.04rem solid #CCCCCC;
        		background:#f6f7f9;
        		color:#808080;
        		display: flex;
	        	align-items: center;
	        	justify-content: space-between;
				input{
					height: 1.5rem;
					width: 87%;
					font-size: 0.6rem;
					text-indent: 1em;
					outline: 0;
	  			    border: none;
				}
				button{
					outline: 0;
					background: none;
					border: none;
					i{
						display: flex;
						height: 1.5rem;
						width: 1.5rem;
						font-size: 0.96rem;
						color:$color;
						align-items: center;
						justify-content: center;
					}
				}        		
        	}
        }
        #hot_sea{
        	min-height: 3rem;
        	width: 100%;
        	padding: 0 1rem;
        	h3{
        		height: 1.5rem;
        		width: 100%;
        		font-size: 0.68rem;
        		line-height: 1.5rem;
        		font-weight: normal;
        	}
        	.sea_book{
        		display: flex;
        		justify-content: flex-start;
        		flex-wrap: wrap;
        		span{
        			padding: 0.12rem 0.35rem;
        			height: 1rem;
        			font-size: 0.56rem;
        			display: flex;
        			align-items: center;
        			justify-content: center;
        			background: $color;
        			color: white;
        			border-radius:0.5rem ;
        			margin: 0.22rem;
        		}
        	}
        }
        .sea_list{
        	padding: 0 0.1rem;
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
        .result_null{
        	height: 3rem; 
        	width: 100%; 
        	line-height: 3rem;
        	text-align: center;
        	font-size: 0.72rem;
        	color: $color;
        	font-style: italic;
        }
    }   
</style>
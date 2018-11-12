<template>
	<div id="detail">
        <v-header><slot>{{book_info.short_name}}</slot></v-header>
        <Nav v-if="navflag"></Nav>
		<!--书图片-->
        <div class="detail-info" >
           <img :src="book_info.cover" >
           <div class="cell">
               <h6>{{book_info.short_name}}</h6>
               <p>{{book_info.username}}</p>
               <p>{{book_info.cate_name}}</p>
               <p>{{parseInt(book_info.word_count)}}万字<span>|</span>{{book_info.status}} </p>
           </div>
        </div>
        <img id="bgpic" :src="book_info.cover"/>
		<!--tab-->
		<div class="tab" >
			<router-link to="/book/read" >
				<div class="cur">立即阅读</div>
			</router-link>
			<div>VIP订阅</div>
			<div>{{book_info.bookshelf?'取消书架':'加入书架'}}</div>
			<div>捧场</div>
		</div>
		<!--简介-->
		<div class="intro" v-if="intro_flag">
			{{book_info.intro}}
			<i class="iconfont icon-down" @click="down()" ></i>
		</div>
		<div class="into" v-if="!intro_flag"  @click="up()">
			{{book_info.intro}}
		</div>
		<!--目录-->
		 <router-link to="/book/catelog">
	        <div class="catelog">
	            <strong class="left">目录</strong>
	            <div class="right">
		            <p class="serial">{{book_info.status}}<span class="char-dot">·</span>{{book_info.chapter_name}}</p>
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
			    <router-link  to="/detail" v-for="(item,index) in like" :key="index">
			    	<div class='list' >
				      <div class='box1' >
				        <img :src="item.cover" class='simg'></img>
			            <span class='name'>{{item.short_name}}</span>
				      </div>
			    	</div>
			    </router-link>
			</div>
		</div>
		<Tiao />
		<!--书评区-->
		<div class="comment">
			<div class="top">
				<div class="title">书评区</div>
				<div class="right" @click="godiscuss()">
					<span class="write">评论</span>
					<i class="iconfont icon-comment"></i>
				</div>
			</div>
			<div class="comment_null" v-if="comment_flag" 
				>
					<h3>暂无评论!!</h3>
			</div>
			<ul class="content" v-if="!comment_flag">
				<li class="list" >
				    <div class="pic">
				        <img class="img" src="//shp.qpic.cn/readnovel/0/1/100" alt="小阅书友15175016932195538头像">
				    </div>
				    <div class="box">
				        <div class="name">小阅书友15175016932195538</div>
				        <time class="time">10-18 22:05</time>
				        <p class="pl">她跻身清流，被名士推崇，成为一代领袖；</p>
				    </div>
				</li>
				<!--<li class="list">
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
				</li>-->
			</ul>
		</div>
		<Tiao/>
        <Gotop />
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
		inject:['reload'],
		data(){
			return{
				navflag:false,
				intro_flag:true,
				comment_flag:null,
				curIndex:0,
				book_id:null,
				user_id:null,
				book_info:"",
				like:[],
				commentlist:[]
			}
		},
		created(){
			this.navflag = false
			this.book_id = this.$route.query.book_id
			console.log(this.book_id)
			this.getData()
		},
		beforeMount(){
		
		},
		mounted(){
		
		},
		methods:{
			getData(){
				this.$http({
		            method:'get',
		            url:'/ky/App/Home/Index/details?id='+this.book_id+"&uid="+this.user_id,
		            data:{
		            }
		        }).then(res=>{
		            console.log(res.data)
		            this.book_info = res.data.data.books
		            this.like = res.data.data.groom
		            if(res.data.data.comment.lists.length == 0){
		            	this.comment_flag = true
		            }else{
		            	this.commentlist = res.data.data.comment
		            	this.comment_flag = false
		            }
		        }).catch(err=>{
		          console.log(err)
		        })
			},
			change(){
				this.navflag = !this.navflag
			},
			godiscuss(){
				this.$router.push({
					name:"discuss",
					params :{
						bookid : 611
					}
				})
			},
			down(){
				this.intro_flag = false
			},
			up(){
				this.intro_flag = true
			}
		
				
		},

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
	    top: 0rem;
	    width: 100%;
	    height: 13rem;
	    opacity: calc(.1 + .05);
	    z-index: 1;
	    filter: blur(calc(-15px + 31px));
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
		    text-indent: 2em;
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
        	position: relative;
        	padding:0.5rem 0.5rem 0 0.5rem;
        	text-indent: 2em;
        	font-size: 0.5rem;
        	line-height: 1rem;
        	z-index: 999;
        	min-height: 4.5rem;
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
    	/*height: 11rem;*/
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
    	.comment_null{
    		h3{
    			display: flex;
    			height: 4rem;
    			align-items: center;
    			justify-content: center;
    			font-size: 0.64rem;
    			color: gray;
    			font-style:italic;
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
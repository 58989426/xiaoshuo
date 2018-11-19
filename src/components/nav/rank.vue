<template>
	<div id="rank">
        <v-header><slot>排行榜</slot></v-header>
        <div class="container">
			<ul class="left">
				<li v-for="(item,index) in ranknav" class="dj" @click="initload(index,item.type)"><span :class="cur==index  ?'cur' : ''">{{item.tit}}</span></li>
			</ul>
			<div class="right">
				<dl class="list" v-for="(item,index) in ranklists" :key="index" @click="todetail(item.book_id)">
		        	<dt>
		        		<img :src="item.path"/>
		        	</dt>
		        	<dd>
		        		<div class="name">{{item.book_name}}</div>
		        		<div class="rank_intro">{{item.intro}}</div>
		        		<div class="box">
		        			<div class="left2">
		        				<i class="iconfont icon-ren"></i>
		        				<span class="name">{{item.author_name}}</span>
		        			</div>
		        			<div class="right2">{{item.cate_name}}</div>
		        		</div>
		        	</dd>
	            </dl>
			</div>
        </div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"rank",
		data(){
			return{
				ranknav:[
				{
					tit:"点击榜",
					type : 4
				},
				{
					tit:"人气榜",
					type : 5
				},
				{
					tit:"订阅榜",
					type : 6
				},
				{
					tit:"完本榜",
					type : 8
				}
				],
				cur:0,
				ranklists:[]
			}
		},
		components:{
		 vHeader
		},
		created(){
			this.initload(0,this.ranknav[0].type)
		},
		methods:{
			todetail(book_id){
				this.$router.push({name:"detail",query:{book_id}})
			},
			initload(index,type){
				this.cur = index
			    this.$http({
		          method:'get',
		          url:'/ky/App/Book/Book/rank?type='+type,
		          data:{}
		    	 	}).then(res=>{
		    	 		console.log(res)
			          if(res.data.code == 200){
			          	console.log(res.data.data)
			          	this.ranklists = res.data.data
			          }else{
			          	
			          }
			        }).catch(err=>{
			          console.log(err)
			        })				
			},

		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #rank{
        .container{
        	/*height: 100%;*/
        	display: flex;
        	padding: 0.5rem 0.5rem 0 0rem;
        	.left{
        		width: 22%;
        		font-size: 0.6rem;
        		position:fixed;
        		top:2rem;
        		bottom:0;
        		border-right:0.5px solid #f0f1f2;
        		li{
        			height: 2rem;
        			display: flex;
        			text-align: center;
        			line-height: 1rem;
        			align-items: center;
        			span{
        				display: block;
        				height: 1rem;
        				width: 100%;
        			}
        			.cur{
                	border-left: 2px solid $color;
                	color: $color;
                  }
        		}
        	}
        	.right{
        		width: 100%;
        		padding-left: 26%;
				.list{
					height: 4.6rem;
					padding: 0.3rem 0;
					display: flex;
					dt{
						img{
							display: block;
							height: 4rem;
							width: 3rem;
						}
					}
					dd{
						height: 4rem;
						padding-left: 0.25rem;
						width: 100%;
						div{
							height: 1.33rem;
							width: 7.5rem;
							font-size: 0.5rem;
							line-height: 1.33rem;
							overflow: hidden;
							text-overflow: ellipsis;
							position: relative;
						}
						.name{
							font-size: 0.65rem;
							font-weight: 600;
						}
						.rank_intro{
							font-size: 0.56rem;
							white-space: nowrap;
							
						}
						.box{
							display: flex;
							align-items: center;
							justify-content: space-between;
							.left2{
								i{
									height: 1.33rem;
									display: inline-block;
									line-height: 1rem;
									width: 0.6rem;
								}
								.name{
									display: inline-block;
									height: 1.33rem;
									line-height: 1rem;
									font-size: 0.52rem;
									font-weight: normal;
								}
							}
							.right2{
								font-size: 0.4rem;
								line-height: 0.7rem;
								text-align: center;
								border: 0.5px solid #4284ee;
								height: 0.7rem;
								width: 3.3rem;
								color: #4284ee;
								border-radius: 10%;
							}
						}
					}
				}
        	}
        }
    }    
</style>
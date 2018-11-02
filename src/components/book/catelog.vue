<template>
	<div id="catelog">
		<div class="catelog_header">
            <div class="left">
                <router-link to="/"><i class="iconfont icon-left "></i></router-link>
                <span> 小说名</span>
            </div>
            <div class="right" @click="change">
                <i class="iconfont icon-mulu " ></i>
            </div>
        </div>
        <div class="catelog_title">目录</div>
        <div class="catelog_count">
        	<span class="count">共233章</span>
        	<span class="sort">正序</span>
        </div>
        <Tiao/>
        <Tiao/>
        
        <ul class="catelog_container">
        	<router-link to="/book/read">
				<li>
					<span>第一章 我们又见面了</span>
					<i class="iconfont icon-huiyuan"></i>
				</li>
			</router-link>
			<li>
				<span>第一章 我们又见面了</span>
				<i class="iconfont icon-huiyuan"></i>
			</li>
			<li>
				<span>第一章 我们又见面了</span>
				<i class="iconfont icon-huiyuan"></i>
			</li>
			<li>
				<span>第一章 我们又见面了</span>
				<i class="iconfont icon-huiyuan"></i>
			</li>
			<li>
				<span>第一章 我们又见面了</span>
				<i class="iconfont icon-huiyuan"></i>
			</li>
			<li>
				<span>第一章 我们又见面了</span>
				<i class="iconfont icon-huiyuan"></i>
			</li>
        </ul>
        <!--分页-->
        <div class="catelog_pages">
            <div class="prev">上一页</div>
            <div class="pagenums">
                <select class="num" lay-filter="filter">
                    <option value="1">第1页/86页</option>
                    <option value="2">第2页/86页</option>
                    <option value="3">第3页/86页</option>
                    <option value="4">第4页/86页</option>
                    <option value="5">第5页/86页</option>
                    <option value="6">第6页/86页</option>
                    <option value="7">第7页/86页</option>
                    <option value="8">第8页/86页</option>
                    <option value="9">第9页/86页</option>
                    <option value="10">第10页/86页</option>
                    <option value="11">第11页/86页</option>
                    <option value="12">第12页/86页</option>
                </select>
            </div>
            <div class="next">下一页</div>
        </div>
	</div>
</template>

<script>
	import Tiao from "@/components/common/tiao"
	export default{
		name:"catelog",
		data(){
			return{

			}
		},
		components:{
		 Tiao
		},
		methods:{
			change(){
				console.log("dddd")
			},
		}
	}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #catelog{
    	.catelog_header{
            padding:0 0.5rem;
            box-sizing:border-box;
            font-size:0.4rem;
            height:2rem;
            display: flex;
            align-items:center;
            justify-content:space-between;
            border-bottom: 0.5px solid #f0f1f2;
            .left{
                display: flex;
                justify-content:space-between;
                a{
                    text-decoration:none;
                    color:#ff3955;
                    display: flex;
                    align-items: center;
                    width:0.8rem;
                    height:2rem;
                    margin-right:0.4rem;
                    i{
                        font-size:0.8rem !important;
                    }
                }
                
                span{
                	display: block;
                	height: 2rem;
                	line-height: 2rem;
                }
                
            }
            .right{
                height:1rem;
                width:1.2rem;
                display: flex;
                justify-content:space-between;
                color:#ff3955;
                align-items: center;
                i{
                	height: 1rem;
                	line-height: 1rem;
                	font-size:0.5rem;
                }
            }
        }
        .catelog_title{
        	height: 2rem;
        	width: 100%;
        	line-height: 2rem;
        	text-align: center;
        	font-size: 0.6rem;
        	color: #FF3955;
        	border-bottom: 1px solid #FF3955;
        }
        .catelog_count{
        	height: 1.8rem;
        	width: 100%;
        	padding: 0 0.66rem;
        	display: flex;
        	justify-content: space-between;
        	span{
        		display: block;
        		height: 1.8rem;
        		line-height: 1.8rem;
        		font-size: 0.6rem;
        	}
        	.count{
        		font-weight: 600;
        	}
        	.sort{
        		width: 1.8rem;
        		text-align: right;
        	}
        }
        .catelog_container{
        	padding-left: 0.66rem;
			/*min-height: 16rem;*/
			width: 100%;
			li{
				font-size: 0.56rem;
				height: 1.6rem;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #F2F2F2;
				span{
					display: block;
					height: 1.6rem;
					line-height: 1.6rem;
					width: 90%;
					overflow: hidden;
				    white-space: nowrap;
				    text-overflow: ellipsis;
				}
				i{
					margin-right: 0.66rem;
					display: block;
					height: 1.6rem;
					color: #FF3955;
					line-height: 1.6rem;
					font-size: 0.64rem;
				}
			}
        }
        .catelog_pages{
        	height: 3.6rem;
        	width: 100%;
        	padding: 0 2.3rem;
        	display: flex;
        	align-items: center;
        	justify-content: space-around;
        	font-size: 0.5rem;
        	.prev{
        		height: 1.4rem;
        		width: 2.2rem;
        		line-height: 1.4rem;
        		text-align: center;
        		border: 1px solid gainsboro;
        		color: #FF3955;
        	}
        	.pagenums{
        		.num{
        			height: 1.4rem;
        			width: 3.8rem;
        			border: 1px solid gainsboro;
        		}
        	}
        	.next{
        		width: 2.2rem;
        		height: 1.4rem;
        		line-height: 1.4rem;
        		text-align: center;
        		border: 1px solid gainsboro;
        		color: #FF3955;
        	}
        }
    }    
</style>
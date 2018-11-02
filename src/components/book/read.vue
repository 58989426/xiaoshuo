<template>
	<div id="read" :style="readsetting">
		<header class="header"  v-if="readset_flag">
            <router-link to="/detail">
               <i class="iconfont icon-zuo"></i>
            </router-link>
     	</header>
		<div class="read_mask" @click="closeset" v-if="readset_flag" @touchmove.prevent></div>
		<h3 class="chapter_name">第一章 我们又见面了</h3>
		<div class="read_content" v-html="bookcontent" @click="readset()">
			{{bookcontent}}
		</div>
		<div class="prev_next">
			<div class="prev">上一章</div>
			<div class="catelog" @click="toChapterMenu()">目录</div>
			<div class="next">下一章</div>
		</div>
		
        <div id="set-all" v-if="fontset_flag" >
            <div class="fs">
              <div class="minus" @click="minus(readsetting.fontSize)"><i class="iconfont icon-zitijian"></i></div>
              <div class="add" @click="add(readsetting.fontSize)"><i class="iconfont icon-zitijia"></i></div>
            </div>
            <div class="bg">
              <div v-for=" (item,index) in bgarr" :class="bgnum==index?'bgcur ':''" @click="changebg(index,item)" :style="'background:'+item" >
              	<i :class="bgnum==index?'iconfont icon-queren ':''"></i>
              </div>
            </div>
        </div>
        
		<footer class="footer"  v-if="readset_flag" >
		    <div class="item"  @click="toChapterMenu()" >
		        <i class="iconfont icon-mulu1"></i>
		        <div class="label">目录</div>
		    </div>
		    <div class="item"  @click="fontset()">
		        <i class="iconfont icon-shezhi" ></i>
		        <div class="label">设置</div>
		    </div>
		    <div class="item"  @click="setNight()" >
		        <i class="iconfont" :class="!msflag?'icon-yejianmoshi':'icon-rijianmoshi'"></i>
		        <div class="label">{{!msflag?'夜':'日'}}间</div>
		    </div>
		    <div class="item" @click="addstore()" >
		        <i class="iconfont icon-shoucang" ></i>
		        <div class="label" >收藏</div>
		    </div>
        </footer>
	</div>
</template>
`	
<script>
	export default{
		name:"read",
		data(){
			return{
				bookcontent:'<span>杨羽脱下内.裤露出来的时候，小美看得清清楚楚，她第一次见到男人的这东西，满脸恐慌和惊叹。</span></br><span>小美喘着气，心狂跳不止，那条小缝隙不知何时已经成了小河，这已经不是第一次这样了。小美眼睛都不敢眨一下，害怕错过什么精彩镜头。</span></br><span>虽然小美听不清杨老师在说什么，但是亲眼看着妈妈双手慢慢拿开，亲眼看着杨老师进入到妈妈的体内，看着妈妈从一声不吭到轻声呻吟到撕心裂肺的狂叫，看着妈妈从双手抓着被单到抱着杨老师的脖子到最后骑上去。</span></br><span>小美看得心都要跳出来了，心中充满了羡慕和渴望，自言自语起来：杨老师会不会像压在妈妈身上一样压在我身上呢？应该不会吧，杨老师肯定嫌弃我小，为什么还不快点长大。</span></br><span>小美看光了整个疯狂的过程，直到妈妈软瘫在床上，熄了灯。可小美怎么也睡不着，脑海里都是刚才的画面，想着杨老师帅气的脸，充满男人味的身躯，都是小美喜欢的，小美已经不知不觉把杨老师当成了自己的幻想对象。</span></br><span>直到小美累了，渐渐得进入了梦乡，甚至忘记把内.裤穿回去。</span></br><span>不知道睡了多久，也不知道外面天亮了没有，小美迷迷糊糊的感觉有人在摸自己的大腿，睁开眼睛一看，竟然是杨老师。</span></br><span>“杨老师，你怎么在这？天亮了吗？”小美的房间窗户贴了纸，再拉上窗帘透光性很差，即使外面天亮了房内也是漆黑一片，何况今天是周日。</span></br><span>杨羽摸了摸小美的脸蛋，笑着说道：“还没呢，你继续睡吧，妈妈已经出去干活了，所以杨老师来陪你睡。”</span></br><span>杨羽说了一半实话，现在差不多凌晨五点，公鸡鸣叫过三声了，可外面还是黑的，赵迎已经起床，又要去扛树，下午才能回来。而这个时候正是男人晨勃的时候，本来杨羽是拿赵迎发泄的，可她已经起床，而且昨晚她被玩虚脱了，等赵迎走后，杨羽悄悄的来到了小美的房间。',
				readset_flag:false, 
				readsetting:{
					fontSize:0.6+"rem",
					background:"#f7e3c2",
					color:"#333"
				},
				bgarr:["#f7e3c2","#cad9e8","#d1edd1","#FCEFFF"],
				bgnum:0,
				fontset_flag:false,
				msflag:null //默认日间
			}
		},
		created:function(){
			
			if(localStorage.getItem("readsetting")){
				let readsetting = localStorage.getItem("readsetting")
				this.readsetting = JSON.parse(readsetting)
				if(readsetting.background == "#212121"){
					this.msflag = true
				}else{
					this.msflag = false
				}
			}else{
				this.readsetting = {
					fontSize:0.6+"rem",
					background:"#f7e3c2",
					color:"#333"
				}
				this.msflag = false
			}
			
		},	
		mounted: function(){
			 
		},

		components:{
		
		},
		methods:{
			readset(){
				this.readset_flag = true
			},
			closeset(){
				this.readset_flag = false
				this.fontset_flag = false
				localStorage.setItem('readsetting',JSON.stringify(this.readsetting))
			},
			toChapterMenu(){
				
			},
			fontset(){
				this.fontset_flag = true
			},
			setNight(){
				  if (!this.msflag) { //夜间
                  this.msflag = !this.msflag
                  this.readsetting.background = "#212121"
                  this.readsetting.color = "#eee"
                  localStorage.setItem('readsetting',JSON.stringify(this.readsetting)) 
                } else {
                  this.msflag = !this.msflag
                  this.readsetting.background = "#f7e3c2"
                  this.readsetting.color = "#333"
                  localStorage.setItem('readsetting',JSON.stringify(this.readsetting))
                }
			},
			addstore(){
				
			},
			minus(size){
				var size = parseFloat(size)
				if( size > 0.48){
					this.readsetting.fontSize = size - 0.04 + "rem"
				}else{
					this.readsetting.fontSize = 0.48 + "rem"
				}
			},
			add(size){
				var size = parseFloat(size)
				if( size < 0.96){
					this.readsetting.fontSize = size + 0.04 + "rem"
				}else{
					this.readsetting.fontSize = 0.96 + "rem"
				}
			},
			changebg(index,item){
				this.bgnum = index
				this.readsetting.background = item
			}
		}
	}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem;
        }
        body{
        	height: 100%;
        	flex: 1;
        	
        }
    #read{
    	display: flex;
    	height: 100%;
    	flex-direction: column;
    	justify-content: space-between;
    	padding-top: 0.4rem 0.8rem 0 0.8rem;
    	min-height: 30rem;
    	.read_mask{
		    position: fixed;
		    width: 100%;
		    height: 100%;
		    top: 0;
		    left: 0;
		    background: rgba(0, 0, 0, 0.8);
		    opacity: 0.1;
		    z-index: 99;
		    transition: opacity .3s,transform .3s;
    	}
    	h3{
    		height: 2rem;
    		text-align: center;
    		font-size: 0.66rem;
    		line-height: 2rem;
    	}
    	.read_content{
    		padding: 0 0.8rem ;
    		height: 100%;
    		padding-top: 0.5rem;
    		span{
    			display: block;
    			text-indent: 2em;
    		}
    	}
    	.prev_next{
    		height: 2.6rem;
    		width: 100%;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		padding: 0 1rem;
    		div{
    			height: 1.4rem;
    			width: 25%;
    			display: flex;
    			align-items: center;
    			justify-content: center;
    			border: 1px solid #fbab80;
    			border-radius: 4%;
    			color: #fbab80;
    			font-size: 0.6rem;
    		}
    		.prev{
    			width: 30%;
    		}
    		.catelog{
    			margin: 0;
    		}
    		.next{
    			width: 30%;
    		}
    	}
    	.header{
    		display: flex;
		    height: 1.8rem;
		    /*border-bottom: 1px solid #f0f1f2;*/
			width: 100%;
		    position:fixed; top:0; 
		    background-color: rgba(0, 0, 0, 0.9);
		    z-index:9999;
		    color: #fff;
		    padding: 0 0.8rem;
		    a{
		    	display: block;
		    	i{
		    		height: 1.8rem;
			    	width: 1.8rem;
			    	display: flex;
			    	align-items: center;
			    	justify-content: flex-start;
			    	color: #fff;
			    	font-size: 0.6rem;
		    	}
		    }
    	}
    	.footer{
    		position: fixed;
    		bottom: 0;
			height: 2rem;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: rgba(0, 0, 0, 0.9);
		    color: #fff;
		    border-bottom: 0;
		    transition: opacity .15s,transform .15s,visibility .15s;
		    width: 100%;
		    z-index:999; 
		    .item{
		    	height: 2rem;
		    	width: 20%;
		    	padding: 0.15rem 0;
		    	display: flex;
		    	flex-direction: column;
		    	align-items: center;
		    	justify-content: space-around;
		    	i{
		    		font-size: 0.55rem;
		    	}
		    	.label{
		    		font-size: 0.5rem;
		    	}
		    }
		}
  		#set-all{
	        height: 5.5rem;
	        width: 100%;
	        background: #121212;
	        z-index: 9999;
	        position: fixed;
	        bottom: 2rem;
	        opacity: .9;
	        display: flex;
	        flex-direction: column;
	        justify-content: space-between;
	        color: white;
            .fs{
	            height: 2.5rem;
	            display: flex;
	            align-items: flex-end;
	            justify-content: space-around;
	            div{
		          
		          border: 1px solid white;

		          i{
		          	display: block;
		          	height: 1.8rem;
			        width: 1.8rem;
			        font-size: 0.8rem;
			        line-height: 2rem;
			        text-align: center;
		          }
		        }
        	}
        	.bg{
	            height: 2.5rem;
	            display: flex;
	            align-items: center;
	            justify-content: space-around;
	            .bgcur{
		           border: 1px solid #FF3955;
		        }
		        div{
		          i{
		          	display: block;
		          	color: #FF3955;
		          	font-size: 0.6rem;
		          	height: 1.6rem;
		          	width: 2rem;
		          	text-align: center;
		          	line-height: 1.6rem;
		          }
		        }
	        }
        }
    }    
</style>
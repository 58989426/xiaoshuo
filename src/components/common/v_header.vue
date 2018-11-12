<template>
    <div class="vheader">
        <div id="box">
	        <div class="left">
	           <i class="iconfont icon-left " @click="$router.go(-1)"></i>
	            <span><slot></slot></span>
	        </div>
	        <div class="right" @click="mnav()">
	            <i class="iconfont icon-mulu"></i>
	        </div>
        </div>
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutDown ">
        	<Mnav v-if="flag" />
        </transition>
    </div>
</template>

<script>
	import Mnav from "@/components/common/nav"
	export default{
		name:"v_header",
		components:{
		    Mnav
		  },
		data(){
			return{
				flag : false
			}
		},
		methods:{
			mnav(){
				this.flag = !this.flag
			}
				
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	.vheader{
        box-sizing:border-box;
        font-size:0.7rem;
        height:2rem;
        
        #box{
        	display: flex;
	        align-items:center;
	        justify-content:space-between;
        }
        .left{
            display: flex;
            justify-content:space-between;
            z-index: 999;
            i{
            	color:$color;
            	display: block;
                font-size:0.88rem;
                width:1.5rem;
            	height:2rem;
            	line-height: 2rem;
            	text-align: center;
            }
            span{
            	line-height: 2rem;
            	font-size: 0.6rem;
            }
        }
        .right{
            height:2rem;
            width:2rem;
            display: flex;
            justify-content:center;
            color:$color;
            align-items: center;
            margin-right: 0.3rem;
            i{
            	height: 1rem;
            	line-height: 1rem;
            	font-size:0.5rem;
            	z-index: 999;
            	}
        	}
        }
</style>
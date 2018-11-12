<template>
	<div id="discuss">
		<v-header><slot>评论</slot></v-header>
        <div class="discuss_container">
 			<textarea name="" rows="" cols="" v-model="content" placeholder="文明看书，理性发言" class="content">
 				
 			</textarea>
 			<p>还能输入<span>{{words}}</span>个字</p>
 			<div class="discuss_btn">
 				<div @click="publish()">发表评论</div>
 			</div>
		</div>
	</div>
</template>

<script>
	import vHeader from "@/components/common/v_header"
	export default{
		name:"discuss",
		data(){
			return{
				words:200,
				content:""
			}
		},
		watch:{
		    content: function (val) {
		      this.words = 200 - val.length
		    },
		 
		},
		components:{
		 	vHeader
		},
		methods:{
			publish(){
				 
			}
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/theme.scss";
	@function rf($px){
            @return $px / 50px * 1rem;
        }
    #discuss{
    	.discuss_container{
    		padding: 1rem;
    		width: 100%;
    		.content{
    			text-indent: 2em;
    			padding: 0.4rem 0.2rem;
    			height: 12rem;
    			width: 100%;
    			resize: none;
			    font-size: 0.6rem;
			    outline: none;
			    border: 0.04px solid #F0F1F2;
			    color: gray;
    		}
    		p{
    			height: 1.4rem;
    			font-size: 0.6rem;
    		}
    		.discuss_btn{
    			display: flex;
    			justify-content: center;
    			align-items: center;
    			height: 2.2rem;
    			div{
    				height: 1.6rem;
    				width: 14rem;
    				background: $color;
    				text-align: center;
    				justify-content: center;
    				font-size: 0.78rem;
    				line-height: 1.6rem;
    				color: white;
    				border-radius: 0.8rem;
    			}
    		}
    	}
    }
    
</style>
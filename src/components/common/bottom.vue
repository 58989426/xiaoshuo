<template>
	<div class="bottom">
		<div class="top">
			<div class="b_box" @click="gopage('bookshelf')">书架</div>
			<div class="b_box" @click="gopage('recharge')">充值</div>
			<div class="b_box" @click="gopage()">帮助</div>
			<div class="b_box" @click="gopage()">客户端</div>
		</div>
		<div class="copy">
             copyright © 2002-2018 m.readnovel.com
		</div>
	</div>
</template>

<script>
	export default{
		
		data(){
			return{
				user_id : ""
			}
		},
		created(){
			let user_id = localStorage.getItem("user_id")
			this.user_id = user_id
			console.log(this.user_id)
		},
		methods:{
			gopage(path){
			if (!true) {
				
				} else{
					this.$router.push({path,query:{user_id:this.user_id}})
				}
			}
		}
	}
</script>

<style lang="scss">
	@function rf($px){
            @return $px / 50px * 1rem; 
        }
    .bottom{
    	height: 3rem;
    	width: 100%;
    	.top{
    		padding: 0 0.5rem;
    		height: 1.5rem;
    		display: flex;
    		align-items: center;
    		justify-content: space-around;
    		font-size: rf(30px);
    		.b_box{
    			display: block;
    			text-decoration: none;
    			color: black;
    		}
    	}
    	.copy{
    		height: 1.5rem;
    		line-height: 1rem;
    		text-align: center;
    		color: #CCCCCC;
    		font-size: rf(30px);
    	}
    }    
</style>
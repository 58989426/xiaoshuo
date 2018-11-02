<template>
	<div class="bottom">
		<div class="top">
			<router-link to="/">书架</router-link>
			<router-link to="/">充值</router-link>
			<router-link to="/">帮助</router-link>
			<router-link to="/">客户端</router-link>
		</div>
		<div class="copy">
             copyright © 2002-2018 m.readnovel.com
		</div>
	</div>
</template>

<script>
	export default{
		
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
    		a{
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
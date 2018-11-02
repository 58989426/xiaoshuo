<template>
	<div class="slide">
		<div class='list' >
	      <div class='box1'  >
	        <img src="@/assets/images/test.jpg" class='simg'></img>
	            <span class='name'>报告首长，我重生了</span>
	            <span class="author">白鸟超峰</span>
	      </div>
    	</div>
    	<div class='list' >
	      <div class='box1'  >
	        <img src="@/assets/images/test.jpg" class='simg'></img>
	            <span class='name'>报告首长，我重生了</span>
	            <span class="author">白鸟超峰</span>
	      </div>
    	</div>
    	<div class='list' >
	      <div class='box1'  >
	        <img src="@/assets/images/test.jpg" class='simg'></img>
	            <span class='name'>报告首长，我重生了</span>
	            <span class="author">白鸟超峰</span>
	      </div>
    	</div>
    	<div class='list' >
	      <div class='box1'  >
	        <img src="@/assets/images/test.jpg" class='simg'></img>
	            <span class='name'>报告首长，我重生了</span>
	            <span class="author">白鸟超峰</span>
	      </div>
    	</div>
    	<div class='list' >
	      <div class='box1'  >
	        <img src="@/assets/images/test.jpg" class='simg'></img>
	            <span class='name'>报告首长，我重生了</span>
	            <span class="author">白鸟超峰</span>
	      </div>
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
        .slide{
        		padding-left: 0.5rem;
        		width: 30rem;
        		overflow:hidden;
				.list{
				  height: rf(320px);
				  width: rf(160px);
				  box-sizing: border-box;
				  float: left;
				  margin-right: 0.2rem;
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
				  font-size: rf(30px);
				  line-height: 1rem;
				  display: block;
				  overflow: hidden;
				  white-space: nowrap;
				  text-overflow: ellipsis;
				  text-align: center;
						}
				.author{
				   height: 1rem;
				  width: rf(160px);
				  font-size: rf(26px);
				  line-height: 1rem;
				  display: block;
				  overflow: hidden;
				  white-space: nowrap;
				  text-overflow: ellipsis;
				  text-align: center;
				}		
				}
				}
        	}
		
</style>
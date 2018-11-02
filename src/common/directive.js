import Vue from "vue"

Vue.directive("gd",(el, binding)=>{ //binding update 都会调用
	window.addEventListener("scroll",()=>{
		if(document.documentElement.scrollTop>200){
			binding.value.value = true;
		}
		else {
			binding.value.value = false;
		}
	})
})

Vue.directive("gotop", (el, binding)=>{
	el.onclick=function(){
		document.documentElement.scrollTop = 0;
	}
})
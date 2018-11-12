<template>
  <div id="app">
  	<keep-alive>
  		<router-view v-if="$route.meta.keepAlive"> </router-view>
  	</keep-alive>
  	
  		<router-view v-if="!$route.meta.keepAlive"> </router-view>
  </div>
</template>

<script>
	import Index from "./components/index/index"
export default {
  name: 'App',
  components:{
			Index
  },
  provide(){
  	return{
  		reload:this.reload
  	}
  },
  data(){
    return {
        isRouterAlive : true
    }
  },
  methods:{
  	reload(){
  		this.isRouterAlive = false
  		this.$nextTick(function(){
  			this.isRouterAlive = true
  		})
  	}
  }
}
</script>

<style>
	#app{
		overflow-y: scroll;
	}
</style>

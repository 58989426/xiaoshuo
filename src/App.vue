<template>
  <div id="app">
	   	<router-view/>
  </div>
</template>

<script>
	import Index from "./components/index/index"
export default {
  name: 'App',
  components:{
			Index
  },
  data(){
    return {
        list : []
    }
  }
}
</script>

<style>
	#app{
		overflow-y: scroll;
	}
</style>

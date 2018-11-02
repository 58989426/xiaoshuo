import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/components/index/index"
import Detail from "@/components/detail/detail"
import Search from "@/components/search/search"
import Classify from "@/components/nav/classify"
import Rank from "@/components/nav/rank"
import Recharge from "@/components/nav/recharge"
import Sign from "@/components/nav/sign"
import Mine from "@/components/nav/mine"
import Catelog from "@/components/book/catelog"
import Read from "@/components/book/read"
import Login from "@/components/login/login"
import Bookshelf from "@/components/bookshelf/bookshelf"
import Record from "@/components/record/record"
Vue.use(Router)
let router = new Router({
	  mode:"history",
	  routes: [
	    {
	      path: '/',
	      name: 'Index',
	      component: Index
	    },
	    {
	    	path:"/detail",
	    	name :"detail",
	    	component:Detail,
	    	props:true,
	    },
	    {
	    	path:"/search",
	    	name :"search",
	    	component:Search,
	    	props:true,
	    },
	    {
	    	path:"/classify",
	    	name :"classify",
	    	component:Classify,
	    	props:true,
	    },
	    {
	    	path:"/rank",
	    	name :"rank",
	    	component:Rank,
	    	props:true,
	    },
	    {
	    	path:"/sign",
	    	name :"sign",
	    	component:Sign,
	    	props:true,
	    },
	    {
	    	path:"/recharge",
	    	name :"recharge",
	    	component:Recharge,
	    	props:true,
	    },
	    {
	    	path:"/mine",
	    	name :"mine",
	    	component:Mine,
	    	props:true,
	    },
	    {
	    	path:"/book/catelog",
	    	name :"catelog",
	    	component:Catelog,
	    	props:true,
	    	
	    },
	    {
	    	path:"/book/read",
	    	name :"read",
	    	component:Read,
	    	props:true,
	    	
	    },
	    {
	    	path:"/login",
	    	name :"login",
	    	component:Login,
	    	props:true,
	    	
	    },
	    {
	    	path:"/bookshelf",
	    	name :"bookshelf",
	    	component:Bookshelf,
	    	props:true,
	    	
	    },
	    {
	    	path:"/record",
	    	name :"record",
	    	component:Record,
	    	props:true,
	    	
	    }
	  ],
		scrollBehavior (to, from, savedPosition) {
		    return { x: 0, y: 0 }
		}
})

export default router;
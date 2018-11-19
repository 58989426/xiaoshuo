<template>
	<div id="modal">
		
	</div>
	<div class="mask" v-if="mflag"></div>
    <div class="sign-hint" v-if="mflag">
    	<h1><><></h1>
    	<h2>获得<b class="bookcoin">{{rewards}}</b>个书券</h2>
    	<p><a class="closed" @click="confirm()">我知道啦</a></p>
    </div>
</template>
<script>
	export default {
		name:"gotop",
		data(){
			return {
				show : {
					value : false
				}
			}
		}
	}
</script>
<style lang="scss">
	#modal{
		.mask{
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: #000;
            top: 0;
            left: 0;
            opacity: 0.2;
            z-index: 99;
        }
        .sign-hint {
            position: absolute;
            width: 8rem;
            height: 8rem;
            background-color: #fef7f8;
            top: 8.2rem;
            left: 3.2rem;
            -webkit-box-shadow: 0 0 0.2rem 0 #b3b3b3;
            box-shadow: 0 0 0.2rem 0 #b3b3b3;
            border-radius: 0.1rem;
            z-index: 100;
        }
        .sign-hint h1 {
            text-align: center;
            margin-top: 1.4rem;
            font-size: 0.6rem;
            color: $color;
        }
        .sign-hint h2 {
            text-align: center;
            margin-top: 1.2rem;
            font-size: 0.72rem;
        }
        .sign-hint h2 b {
            font-size: 0.72rem;
            font-style: italic;
            color: $color;
            margin: 0 3px;
        }
        .sign-hint p {
            text-align: center;
            margin-top: 1rem;
        }
        .sign-hint p a {
            display: inline-block;
            background-color: $color;
            color: #fff;
            padding: 0.2rem 0.4rem;
            border-radius: 0.16rem;
            font-size: 0.6rem;
        }
      }		
	}
</style>
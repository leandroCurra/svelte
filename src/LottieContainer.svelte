<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Lottie from "lottie-web";
	import { createEventDispatcher } from 'svelte';
  let render = false;
  export let step = 0;
  export let anim;
	const dispatch = createEventDispatcher();
  let mount = false
  onMount(async () => {
    setTimeout(() => {
      mount = true;
    }, 900);
  })
function call(){
	dispatch('message', {
			text: 'Hello!'
		});
  }
</script>
<style>
   .animation{
          width:300px;
          height:521px;
    }
  @media only screen and (max-width: 600px) {
    .animation{
          width:auto;
          height:350px;
    }
  }
</style>
{#if mount}
<div class="w-100 h-100 overflow-hidden d-flex flex-column align-items-center justify-content-center">
        <div class="animation"
          id="{'bm' + step}"
          transition:fly={{ y: 600, duration: 1000 }}
          on:introstart={() => {
            const animation = Lottie.loadAnimation({
              container: document.getElementById('bm' + step),
              renderer: 'svg',
              loop: true,
              autoplay: true,
              path:  `./assets/${anim}.json`
            });
          }}
         on:outroend= {
           ()=>{
             console.log( 'transu' )

          call();
           }  
           
           
         } 

    />

  </div>
{/if}
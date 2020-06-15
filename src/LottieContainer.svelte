<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Lottie from "lottie-web";
  import { createEventDispatcher } from 'svelte';
  let render = false;
  export let step = 0;
  export let anim;
  const emiter = createEventDispatcher();
  let mount = false
  onMount(async () => {
    setTimeout(() => {
      mount = true;
    }, 900);
  })
</script>
{#if mount}
<div class="w-100 h-100 overflow-hidden d-flex flex-column align-items-center justify-content-center">
        <div
          id="{'bm' + step}"
          style="width:300px;height:521px"
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
             emiter( 'transitionEnd', {
               end: 'true'
             })

           }
           
           
         } 

    />

  </div>
{/if}
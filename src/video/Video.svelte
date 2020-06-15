<script>
    import { onMount } from 'svelte';
      import { createEventDispatcher } from 'svelte';
      import {fade } from 'svelte/transition';

    let paused = false;
    const dispatch = createEventDispatcher();

    onMount(()=>{
    const video = document.getElementById("video");
    video.onended = function(){
                dispatch('stop', {test: 'asd'})

    }
    })
    function start(){
        video.play();

    }
  function stop(){
      pause = true;
  }  
function handleKeydown({key}){
    if( key === 'Escape' ){
        dispatch('stop', {test: 'asd'})
    }
}
let duration
</script>
<svelte:window on:keydown={handleKeydown}/>

<style>
    div{
        top:0px;
        left:0px;
        background-color: rgba(0, 0, 0, 0.8);
    }
      @media only screen and (max-width: 600px) {
    .video{
          width:100%;
          height:auto;
    }
      div{

        background-color: rgba(0, 0, 0, 1);
    }
  }
</style>
<div class="w-100 h-100 d-flex flex-row justify-content-center position-absolute" transition:fade={{ duration: 1000 }}
        on:introend="{ start }"
        on:outroend="{ stop }">

	<video id="video" class="video"

		src="assets/video.mp4"
   		bind:paused
        bind:duration
	></video>
</div>
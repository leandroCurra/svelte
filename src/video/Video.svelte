<script>
	import { onMount } from 'svelte';
	let paused = false;
    onMount(()=>{
    const video = document.getElementById("video");
        video.play();
    })


</script>
<style>
    div{
        top:0px;
        left:0px;
         background-color: rgba(0, 0, 0, 0.8);
}
</style>
<div class="w-100 h-100 d-flex flex-row justify-content-center position-absolute" >
	<video id="video"
		poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
		src="assets/video.mp4"
   		bind:paused

    
	></video>
</div>
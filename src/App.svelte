<script>
	import Container from './Container.svelte';
	import Loader from './loader/Loader.svelte';
    import { fade } from 'svelte/transition';
	import Video from './video/Video.svelte'
	let loader = true;
	let play = false;
	setTimeout(() => {
		loader= false;
	}, 2000);

	function showVideo(){
		play = true;
	}

</script>
{#if loader}
<Loader />
{/if}
{#if !loader}
<Container on:play={showVideo}/>
{/if}
{#if play}
<Video on:stop="{ ()=>{ play = false } }"/>

{/if}
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
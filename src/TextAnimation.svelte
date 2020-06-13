<script>
	import { fly } from 'svelte/transition';
 import { onMount } from "svelte";
    let visible = false;

 onMount(  async()=>{
   visible = true;
   setTimeout(() => {
     visible = false;
   }, 4000);
 })

</script>
<style>
h1{
  font-size: 50px;
  font-weight: 700;
}
p{
  font-family: "Poppins",sans-serif;
  color: #707b8e;
}
</style>
<div

  class="w-100 h-100 d-flex flex-column justify-content-center
  align-items-center"
  style="height:100vh">
  <div class="w-50" >
  <!-- {#if visible} -->
    <h1 sttyle="margin-top:60px" transition:fly="{{ y: 200, duration: 2000 }}">PRuieba</h1>
    <p>prueba</p>
    <!-- {/if}  -->
  </div>
</div>

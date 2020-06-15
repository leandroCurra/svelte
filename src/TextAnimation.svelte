<script>
import { fly } from 'svelte/transition';
import { onMount } from "svelte";
  export let  step = 0;
 let endFirst = false;
 onMount(  async()=>{

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
  class="w-100 h-80 d-flex flex-column justify-content-center
  align-items-center ">
  {#if step === 0 }
  <div class="w-80 ml-4 overflow-hidden"  transition:fly="{{ y: 600, duration: 600 }}" 
    on:outroend="{
      ()=>{
        console.log( 'end' )
        endFirst = true;
      }
    }">
    <h1 sttyle="margin-top:60px ml-5">DIGITALIZÁ EL MENÚ DE TU NEGOCIO</h1>
    <p>prueba</p>
  </div>
  {/if}

  {#if step === 1 && endFirst }
  <div class="w-80 ml-4"  transition:fly="{{ y: 600, duration: 600 }}" >
    <h1 sttyle="margin-top:60px ml-5">Envía promociones a tus clientes</h1>
    <p>prueba</p>
  </div>
  {/if}

</div>

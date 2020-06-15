<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import TextAnimation from "./TextAnimation.svelte";
  import LottieContainer from "./LottieContainer.svelte";
  import Lottie from "lottie-web";

  let step = 0;
  function next() {
    step += 1;
  }
  let endFirst = false;
  	function handleMessage(event) {
      endFirst = true;
	}
</script>

<style>
button{
  padding:0.6em 2em;
  border-radius: 30px;
  color:#fff;
  background-image: linear-gradient(to right,#E8A486, #E55E7E);
  font-size:1.1em;
  border:0;
  cursor:pointer;
  margin:1em;
  box-shadow: 10px 10px 8px #888888;
}
button:active{
  outline: none;
}
button:focus{
  outline: none;
}
</style>

<div class="w-100 h-100 first" style="z-index:99" in:fade={{ duration: 1000 }}>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div
        class="col-6 d-flex flex-column justify-content-start align-items-center
        w-100 mt-4 overflow-hidden">
        <TextAnimation step="{step}" />
        <button
          class="d-flex align-self-end"
          style="margin-left: auto; margin-right:150px"
          on:click={next}>
          CONTINUAR
        </button>
      </div>
      {#if step=== 0}
      <div class="col-6">
        <LottieContainer step="{0}" anim="{'anim5'}"  on:message="{ handleMessage }"/>
      </div>
      {/if}
      {#if step=== 1 && endFirst}
      <div class="col-6">
        <LottieContainer step="{1}" anim="{'anim6'}" />
      </div>
      {/if}
    </div>

  </div>

</div>

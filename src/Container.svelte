<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import TextAnimation from "./TextAnimation.svelte";
  import LottieContainer from "./LottieContainer.svelte";
  import Form from "./form/Form.svelte";
  import Lottie from "lottie-web";
  import { createEventDispatcher } from 'svelte';
  import { pannable } from './click.js';


	const dispatch = createEventDispatcher();

  let step = 0;
  function next() {
    step += 1;
  }
  let endFirst = false;
  	function handleEvent(event) {
      endFirst = true;
  }
    let endSecond = false;
  	function handleEvent2(event) {
      endSecond = true;
  }
  function play(){
    	dispatch('play', {
			text: 'Hello!'
		});
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
  box-shadow:0 53px 99px 8px black;



}
  @media only screen and (max-width: 600px) {
    button{
    box-shadow:0 4px 14px 1px black;
    }
  }
button:active{
  outline: none;
}
button:focus{
  outline: none;
}
.play{
  width: 60px;
  height: 60px;
  background-image: linear-gradient(to right,#E8A486, #E55E7E);

  background-repeat: no-repeat;
  background-position: center;
  
}
.play img{
  width: 50px;
  height: 50px;
}
</style>

<div class="w-100 h-100 first" style="z-index:99" in:fade={{ duration: 1000 }}>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div
        class="col-12 col-md-6 col-lg-6  d-flex flex-column justify-content-center  align-items-center
        w-100 mt-4 overflow-hidden">
        <TextAnimation step="{step}" />
        <div class="d-flex flex-row justify-content-end align-self-end"   style="margin-left: auto; margin-right:150px" >
        <button
        	use:pannable

          class="d-flex align-self-end "
          on:click={next}>
          CONTINUAR
        </button>
         <button
                 	use:pannable

         class="play d-flex flex-column justify-content-center align-items-center"
          style="margin-left: auto; margin-right:150px"
          on:click={play}>
          <img src="./assets/play.svg" alt="flecha play" />
        </button>
        
        
        </div>
      </div>
      {#if step=== 0}
      <div class="col-6 col-12 col-md-6 col-lg-6">
        <LottieContainer step="{0}" anim="{'anim5'}"  on:message="{ handleEvent }"/>
      </div>
      {/if}
      {#if step=== 1 && endFirst}
      <div class="col-6 col-12 col-md-6 col-lg-6 ">
        <LottieContainer step="{1}" anim="{'anim6'}"  on:message="{ () => endSecond = true }" />
      </div>
      {/if}
      {#if step=== 2 && endSecond}
      <div class="col-6">
      <Form/>
      </div>
      {/if} 
    </div>

  </div>

</div>


<script>
import { onMount } from "svelte";
import { slide } from 'svelte/transition';
import TextAnimation from './TextAnimation.svelte';
import LottieContainer from './LottieContainer.svelte';

import Lottie from "lottie-web";
  onMount(async () => {
    const animation = Lottie.loadAnimation({
      container: document.getElementById("bm"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./assets/data.json"
    });
  });
</script>

<div class="w-100 h-100" style="z-index:99" in:slide="{{duration:1000}}">
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-start align-items-center w-100 mt-4" >
         <TextAnimation/>
      </div>
      <div class="col-6">
      <LottieContainer/>
      </div>

  </div>

</div>

</div>


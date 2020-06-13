
<script>
import { blur } from 'svelte/transition';

import { onMount } from "svelte";
import Lottie from "lottie-web";
  onMount(async () => {
    const animation = Lottie.loadAnimation({
      container: document.getElementById("loader"), 
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./assets/loader.json"
    });
  });
</script>
<style>


</style>

<div class="w-100 h-100 position-fixed d-flex flex-row justify-content-center" style="background-color:white;z-index:100">
<div id="loader" style="width:600px;hegth:600px" out:blur="{{ duration: 1000 }}">

</div>


</div>


<script>
import {slide} from 'svelte/transition';

import { onMount } from "svelte";
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

<div class="w-100 h-100"  in:slide="{{duration:1000}}">
     <div id="bm" style="width:600px;height:600px" >
    </div>
</div>





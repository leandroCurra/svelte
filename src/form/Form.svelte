<script>
let name = '';
</script>
<style>
.lhc-card{
    border-radius: 17px;
    height:40vh;
  box-shadow:0 53px 99px 8px black

}
input.rounded {
	border: 1px solid #ccc;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	-moz-box-shadow: 2px 2px 3px #666;
	-webkit-box-shadow: 2px 2px 3px #666;
	box-shadow: 2px 2px 3px #666;
	font-size: 20px;
	padding: 4px 7px;
    outline: 0;
    max-height: 30px;
    -webkit-appearance: none;
    
}
input.rounded:focus {
	border-color: #339933;
}

</style>

<div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center" > 
    <div class="lhc-card w-75 h-60 d-flex flex-column justify-content-center align-items-center " >
    <div class=" d-flex flex-column w-50  d-flex flex-column justify-content-center align-items-center ">
        <input class="rounded" bind:value={name} placeholder="enter your name">
    
        <input class="rounded" bind:value={name} placeholder="enter your name">
    
    </div>

    </div>


</div>
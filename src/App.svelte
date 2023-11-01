<script>
	export let name;
	let age = 30
	function incrementAge() {
	age ++
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}! and my age is {age}</h1>
<button on:click="{incrementAge}">change Age</button>

<script>
	import ContactCard from "./ContactCard.svelte";
	 let name = "Arezoo";
	 let jobTitle = "";
	 let description = "";
	 let age = 30
	 let userImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaNMAS5II3gRJVIo3iaHoNSIZbsUWWMQ8wx38icmEksXNdThpqibgwkQ4d36BVXuZzyM&usqp=CAU"	

	$: upperName = name.toUpperCase();

	$: console.log('%c name','background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px',name);
	$: if(name === "Arezoo Moradi") {
		console.log("It run!")
		age = 31
	}
	function incrementAge() {
	age ++
	}

	function changeName() {
		name = "Arezoo Moradi"
	}

	function inputName(e) {
		const enteredValue = e.target.value;
		name = enteredValue;
	}
	
</script>
<style global>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

<h1>Hello my name is {upperName}! and my age is {age}</h1>
<button on:click="{incrementAge}" class="p-2 text-white bg-pink-500 border-none outline-none">change Age</button>
<!-- <button on:click="{changeName}">Chnage name</button> -->
<!-- <input type="text" on:input="{inputName}" value="{name}" /> -->
<div class="w-1/2">
<form class="flex flex-col w-full my-5 gap-y-5">
<input type="text" bind:value={name} placeholder="name" class="px-5 py-2 border rounded-md " />
<input type="text" bind:value={jobTitle} placeholder="jobTitle" class="px-5 py-2 border rounded-md " />
<input type="text" placeholder="choose a photo" bind:value="{userImage}" class="px-5 py-2 border rounded-md ">
<textarea type="text" bind:value={description} placeholder="description" class="px-5 py-2 border rounded-md " />
</form>
</div>
<ContactCard 
userName="{name}" 
jobTitle="{jobTitle}" 
{description}
userImage = "{userImage}" />

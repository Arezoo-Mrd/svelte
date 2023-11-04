<script>
  import ContactCard from "./ContactCard.svelte";
  let name = "Arezoo";
  let jobTitle = "";
  let description = "";
  let age = 30;
  let userImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaNMAS5II3gRJVIo3iaHoNSIZbsUWWMQ8wx38icmEksXNdThpqibgwkQ4d36BVXuZzyM&usqp=CAU";
  let formState = "empty";
  let createdContacts = [];

  $: upperName = name.toUpperCase();

  $: console.log(
    "%c name",
    "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px",
    name
  );
  $: if (name === "Arezoo Moradi") {
    console.log("It run!");
    age = 31;
  }

  function changeName() {
    name = "Arezoo Moradi";
  }

  function inputName(e) {
    const enteredValue = e.target.value;
    name = enteredValue;
  }
  function AddContactCard() {
    if (
      name.length === 0 ||
      userImage.length === 0 ||
      jobTitle.length === 0 ||
      description.length === 0
    ) {
      formState = "invalid";
      return;
    }
    createdContacts = [
      ...createdContacts,
      {
        id: Math.random(),
        name,
        jobTitle,
        userImage,
        description,
      },
    ];
    formState = "done";
  }
  function deleteFirst() {
    createdContacts = createdContacts.slice(1);
  }
  function deletelast() {
    createdContacts = createdContacts.slice(0, -1);
  }
</script>

<!-- <h1>Hello my name is {upperName}! and my age is {age}</h1> -->
<!-- <button on:click="{incrementAge}" class="p-2 text-white bg-pink-500 border-none outline-none">change Age</button> -->
<!-- <button on:click="{changeName}">Chnage name</button> -->
<!-- <input type="text" on:input="{inputName}" value="{name}" /> -->
<div class="w-1/2">
  <form class="flex flex-col w-full my-5 gap-y-5">
    <input
      type="text"
      bind:value={name}
      placeholder="name"
      class="px-5 py-2 border rounded-md"
    />
    <input
      type="text"
      bind:value={jobTitle}
      placeholder="jobTitle"
      class="px-5 py-2 border rounded-md"
    />
    <input
      type="text"
      placeholder="choose a photo"
      bind:value={userImage}
      class="px-5 py-2 border rounded-md"
    />
    <textarea
      type="text"
      bind:value={description}
      placeholder="description"
      class="px-5 py-2 border rounded-md"
    />

    <div class="flex gap-x-5">
      <button
        on:click|preventDefault={AddContactCard}
        type="submit"
        class="p-2 text-white bg-pink-500 border-none outline-none"
        >Add Contact card</button
      >
      <button
        on:click={deleteFirst}
        class="p-2 text-white bg-pink-500 border-none outline-none"
        >Delete First</button
      >
      <button
        on:click={deletelast}
        class="p-2 text-white bg-pink-500 border-none outline-none"
        >Delete last</button
      >
    </div>
  </form>
</div>

{#if formState === "invalid"}
  <p class="my-2 font-semibold text-red-500 font-xs">invalid input</p>
{:else if formState === "empty"}
  <p class="my-2 font-semibold text-red-500 font-xs">
    enter valid data and submit
  </p>
{/if}
{#each createdContacts as contact, index (contact.id)}
  <h2>#{index + 1}</h2>
  <ContactCard
    userName={`${contact.name} `}
    jobTitle={contact.jobTitle}
    description={contact.description}
    userImage={contact.userImage}
  />
{:else}
  <p>Please start adding some contacts, we found none!</p>
{/each}

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

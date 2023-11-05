<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  export let id;

  const dispatch = createEventDispatcher();
</script>

<article class="flex flex-col w-full p-5 mt-5 border rounded-lg gap-y-5">
  <header class="h-20">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>
  <div class="h-52">
    <img class="object-cover w-full h-full" src={imageUrl} alt={title} />
  </div>
  <div class="overflow-y-auto h-36">
    <p>{description}</p>
  </div>
  <footer class="flex flex-wrap items-center w-full gap-5">
    <Button href="mailto:{address}">Contact</Button>
    <Button type="button">Show Details</Button>
    <Button
      on:click={() => dispatch("togglefavorite", id)}
      type="button"
      customClass="outline outline-indigo-400 bg-transparent !text-indigo-400"
      >Favorite</Button
    >
  </footer>
</article>

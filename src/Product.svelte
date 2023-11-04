<script>
  import { createEventDispatcher } from "svelte";
  export let title = "";
  export let price = "";

  const dispatch = createEventDispatcher();
</script>

<article>
  <h1>{title}</h1>
  <h1>${price}</h1>
  <button on:click={(e) => dispatch("add-to-card", { id: "p1" })} type="button"
    >Add to Cart</button
  >
  <button on:click={(e) => dispatch("delete", e)} type="button">Delete</button>
</article>

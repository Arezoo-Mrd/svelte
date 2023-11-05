<script>
  import cartItems from "../Cart/cart-store.js";
  import Button from "../UI/Button.svelte";

  export let id;
  export let title;
  export let price;
  export let description;

  function addToCart() {
    // cartItems.set([]);
    cartItems.update((items) => {
      return [
        ...items,
        {
          id,
          title,
          price,
          description,
        },
      ];
    });
  }
</script>

<div class="flex justify-between w-full p-5 border rounded-md shadow-2xl">
  <div class="flex flex-col">
    <h1>{title}</h1>
    <h2>{price}</h2>
    <p>{description}</p>
  </div>
  <div>
    <Button on:click={addToCart}>Add to Cart</Button>
  </div>
</div>

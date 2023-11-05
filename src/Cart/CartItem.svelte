<script>
  import products from "../Products/product-store";
  import Button from "../UI/Button.svelte";
  import cart from "./cart-store";
  import cartItems from "./cart-store";

  export let title;
  export let price;
  export let id;

  let showDescription = false;
  let description = "Not Available";

  function displayDescription() {
    showDescription = !showDescription;
    const unsubscribe = products.subscribe((prods) => {
      const product = prods.find((p) => p.id === id);
      description = product.description;
    });
    unsubscribe();
  }

  function removeFromCart() {
    cartItems?.update((carts) => {
      return carts.filter((cart) => cart.id !== id);
    });
  }
</script>

<li class="p-5 border rounded-md shadow-2xl">
  <h1>{title}</h1>
  <h2 class="my-5">{price}</h2>
  <div class="flex flex-wrap justify-center gap-5">
    <Button mode="outline" on:click={displayDescription}>
      {showDescription ? "Hide Description" : "Show Description"}
    </Button>
    <Button on:click={removeFromCart}>Remove from Cart</Button>
  </div>
  {#if showDescription}
    <p>{description}</p>
  {/if}
</li>

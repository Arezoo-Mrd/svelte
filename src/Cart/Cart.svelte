<script>
  import { onDestroy } from "svelte";
  import cartItems from "./cart-store.js";
  import CartItem from "./CartItem.svelte";

  // let items;

  // const unsubscribe = cartItems.subscribe((its) => {
  //   items = its;
  // });

  // onDestroy(() => {
  //   if (unsubscribe) {
  //     unsubscribe();
  //   }
  // });
  //   export let items = [
  //     {
  //       id: "p1",
  //       title: "Test",
  //       price: 9.99
  //     },
  //     {
  //       id: "p2",
  //       title: "Test",
  //       price: 9.99
  //     }
  //   ];
</script>

<section class="flex flex-col items-center justify-center w-full">
  <h1 class="text-xl font-bold text-slate-800">Cart</h1>
  <ul class="flex flex-col w-1/3 gap-5 my-5">
    {#each $cartItems as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p class="text-xs text-red-700">No items in cart yet!</p>
    {/each}
  </ul>
</section>

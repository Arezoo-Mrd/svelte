<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";
  import { tick } from "svelte";
  let showModal = false;
  let text = "This is some dummy text!";
  let products = [
    {
      id: "1",
      title: "A Book",
      price: "9.99",
    },
  ];

  function addToCart(event) {
    console.log(
      "%c event",
      "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px",
      event.detail
    );
  }

  function deleteCard(event) {
    console.log(
      "%c event",
      "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px",
      event.detail
    );
  }
  function transform(event) {
    if (event.which !== 9) {
      return;
    }
    event.preventDefault();
    const { selectionStart, selectionEnd, value } = event.target;
    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    tick().then(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
  }
</script>

{#each products as product}
  <Product {...product} on:add-to-cart={addToCart} on:delete={deleteCard} />
{/each}
<button
  class="px-5 py-3 text-white bg-indigo-400 border-none rounded-lg outline-none"
  on:click={() => (showModal = true)}>Show Modal</button
>
<textarea value={text} on:keydown={transform} cols="30" rows="10" />
{#if showModal}
  <Modal
    on:cancel={() => (showModal = false)}
    on:close={() => (showModal = false)}
  >
    <h1 slot="header">Hello</h1>
    <p>World</p>
    <button class="px-5 py-2" slot="footer" on:click={() => (showModal = false)}
      >confirm?</button
    >
  </Modal>
{/if}

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

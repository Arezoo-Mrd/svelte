<script>
  import {
    createEventDispatcher,
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
  } from "svelte";

  const dispatch = createEventDispatcher();
  let autoScroll = false;

  onMount(() => {
    console.log(
      "%c onMount",
      "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px"
    );
  });
  onDestroy(() => {
    console.log(
      "%c onDestroy",
      "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px"
    );
  });
  console.log(
    "%c script executed",
    "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px"
  );

  beforeUpdate(() => {
    console.log(
      "%c beforeUpdate",
      "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px"
    );
    autoScroll = true;
  });
  afterUpdate(() => {
    console.log(
      "%c afterUpdate",
      "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px"
    );
    if (autoScroll) {
      const modal = document.getElementById("modal");
      modal.scrollTo(0, modal.scrollHeight);
    }
  });
</script>

<div
  class="fixed top-0 bottom-0 left-0 right-0 z-10 w-full bg-black/80"
  on:click={() => dispatch("cancel")}
/>
<div
  id="modal"
  class="fixed top-[10vh] w-1/3 min-h-[15vh] left-[50%] -translate-x-1/2 p-5 max-h-[15vh] z-50 rounded-md bg-white shadow-lg overflow-y-auto"
>
  <header class="p-5 bg-gray-100 border-b">
    <slot name="header" />
  </header>
  <div class="h-[200px]">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <button on:click={() => dispatch("close")}>close</button>
    </slot>
  </footer>
</div>

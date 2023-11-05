<script>
  export let mode = "";
</script>

{#if mode === "outline"}
  <button
    class={`px-5 py-3  border outline rounded-md border-rose-600  text-rose-600 `}
    type="button"
    on:click
  >
    <slot />
  </button>
{:else}
  <button
    class={`px-5 py-3 text-white border-none rounded-md outline-none bg-rose-600 `}
    type="button"
    on:click
  >
    <slot />
  </button>
{/if}

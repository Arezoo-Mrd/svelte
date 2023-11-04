<script>
  export let type;
  export let caption;
  export let href;
  export let customClass;
</script>

{#if href}
  <a {href} class="w-full px-5 py-3 text-center text-indigo-400 rounded-xl"
    >{caption}</a
  >
{:else}
  <button
    {type}
    class={`w-full px-5 py-3 text-white  bg-indigo-400 border-none rounded-md outline-none ${customClass}`}
    >{caption}</button
  >
{/if}

<script>
  export let controlType;
  export let id = "";
  export let label = "";
  export let value = "";
  export let type = "text";
</script>

<div class="w-full mb-3">
  <label class="mb-3 text-xs font-semibold" for={id}>{label}</label>
  {#if controlType === "textarea"}
    <textarea
      row="5"
      {id}
      class="w-full px-5 py-1 border rounded-md"
      {value}
      on:input
    />
  {:else}
    <input
      class="w-full px-5 py-1 border rounded-md"
      {type}
      {id}
      {value}
      on:input
    />
  {/if}
</div>

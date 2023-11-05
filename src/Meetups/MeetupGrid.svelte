<script>
  import MeetUpItem from "./MeetUpItem.svelte";
  export let meetups;
  $: console.log("🚀 ~ file: MeetupGrid.svelte:4 ~ meetups:", meetups);
</script>

<section class="grid grid-cols-2 gap-5 mt-14">
  {#each meetups as meetup, index (meetup.id)}
    <MeetUpItem
      title={meetup.title}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      subtitle={meetup.subtitle}
      address={meetup.address}
      id={meetup.id}
      on:togglefavorite
    />
  {/each}
</section>

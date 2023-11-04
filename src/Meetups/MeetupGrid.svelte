<script>
  import MeetUpItem from "./MeetUpItem.svelte";
  export let meetups;
</script>

<section class="grid grid-cols-2 gap-5 mt-14">
  {#each meetups as meetup, index (meetup.id)}
    <MeetUpItem
      title={meetup.title}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      subtitle={meetup.subtitle}
      address={meetup.address}
    />
  {/each}
</section>

<script>
  import Header from "./UI/Header.svelte";
  import meetups from "./Meetups/meetups-store";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  import Button from "./UI/Button.svelte";
  import EditMeetup from "../../../../Desktop/learning/Udemy - Svelte.js - The Complete Guide (incl. Sapper.js) 2021-7/11 Course Project - Stores/prj-stores-02-custom-store/src/Meetups/EditMeetup.svelte";

  let title = "";
  let subtitle = "";
  let imageUrl = "";
  let description = "";
  let address = "";
  let contactEmail = "";
  let editMode;

  function addMeetUp() {
    editMode = null;
  }
  function cancelEdit() {
    editMode = null;
  }

  function toggleFavorite(id) {
    meetups.toggleFavorite(id.detail);
  }
</script>

<Header />
<main>
  <div class="mt-14">
    <Button on:click={() => (editMode = "add")}>New Meetup</Button>
  </div>
  {#if editMode === "add"}
    <EditMeetup on:save={addMeetUp} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid
    meetups={$meetups}
    on:togglefavorite={(id) => toggleFavorite(id)}
  />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

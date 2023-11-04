<script>
  import Header from "./UI/Header.svelte";
  import MeetUpItem from "./Meetups/MeetUpItem.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

  let title = "";
  let subtitle = "";
  let imageUrl = "";
  let description = "";
  let address = "";
  let contactEmail = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fHww",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "rjBkA@example.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some strokes!",
      imageUrl:
        "https://media.istockphoto.com/id/1498672637/nl/foto/professional-swimmers-in-a-swimming-pool.jpg?s=612x612&w=0&k=20&c=4MsneMyK2BpGS6FvdulbzofocV5ZHQT-Yuzo5T4kB1Y=",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "rjBkA@example.com",
    },
  ];
  function addMeetUp() {
    const newMeetUp = {
      id: Math.random().toString(),
      title,
      subtitle,
      imageUrl,
      description,
      address,
      contactEmail,
    };
    meetups = [newMeetUp, ...meetups];
  }
</script>

<Header />
<main>
  <div class="flex flex-col items-center justify-center w-full mt-14">
    <h3 class="mb-2 text-lg font-bold">Add MeetUp</h3>
    <form
      on:submit|preventDefault={addMeetUp}
      action=""
      class="w-1/2 p-5 bg-gray-300 rounded"
    >
      <TextInput
        id="title"
        label="Title"
        on:input={(e) => (title = e.target.value)}
      />
      <TextInput
        id="subtitle"
        label="Subtitle"
        on:input={(e) => (subtitle = e.target.value)}
      />
      <TextInput
        id="imageUrl"
        label="Image url"
        on:input={(e) => (imageUrl = e.target.value)}
      />
      <TextInput
        id="address"
        label="Address"
        on:input={(e) => (address = e.target.value)}
      />
      <TextInput
        type="email"
        id="contactEmail"
        label="Email"
        on:input={(e) => (contactEmail = e.target.value)}
      />
      <TextInput
        controlType="textarea"
        id="description"
        label="Description"
        on:input={(e) => (description = e.target.value)}
      />

      <Button caption={"Add MeetUp"} type="submit" />
    </form>
  </div>
  <MeetupGrid {meetups} />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

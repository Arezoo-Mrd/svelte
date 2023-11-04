<script>
  import Button from "../UI/Button.svelte";

  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
</script>

<article class="flex flex-col w-full p-5 mt-5 border rounded-lg gap-y-5">
  <header class="h-20">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>
  <div class="h-52">
    <img class="object-cover w-full h-full" src={imageUrl} alt={title} />
  </div>
  <div class="overflow-y-auto h-36">
    <p>{description}</p>
  </div>
  <footer class="flex items-center gap-x-5">
    <Button caption={"Contact"} href="mailto:{address}" />
    <Button caption={"Show Details"} type="button" />
    <Button
      caption={"Favorite"}
      type="button"
      customClass="outline outline-indigo-400 bg-transparent !text-indigo-400"
    />
  </footer>
</article>

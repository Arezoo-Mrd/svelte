<script>
  import Product from "../Products/Product.svelte";
  import products from "./product-store";
</script>

<section class="flex flex-col items-center justify-center w-full">
  <h1 class="text-xl font-bold text-slate-800">Products</h1>
  <div class="flex flex-col w-1/3 gap-5 my-5">
    {#each $products as product (product.id)}
      <Product
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    {/each}
  </div>
</section>

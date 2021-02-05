<script>
  import { url } from "@roxi/routify";
  import { allStores } from '../_data.js'
</script>

<div style="padding-top: 20px">
  <h1>Stores</h1>
</div>

{#each allStores as store, id}
  <a class="card" href={$url('./:id', { id })}>
    <img alt={store.name} src={`https://source.unsplash.com/${store.img_tag}/256x200`} />
    <h3 class="item">{store.name}</h3>
  </a>
{/each}

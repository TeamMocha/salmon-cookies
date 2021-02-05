<script>
  export let id;
  import { url } from "@roxi/routify";
  import { allStores } from '../../_data.js'
  let store = allStores[id];
</script>

<style>
  a {
    font-size: 1.5em;
    padding: 12px 24px;
  }
</style>

<div class="card" style="width: 512px; height: auto;">
  <img alt={store.name} src={`https://source.unsplash.com/${store.img_tag}/512x200`} />
  <h1>{store.name}</h1>
  <h2>Visit at: {store.address}</h2>
  <h2>Call Us: {store.phone}</h2>
</div>

<br />

<a href={$url('/')}>Go home</a>
<a href={$url('../')}>Go back</a>

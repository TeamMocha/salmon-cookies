<script>
  import { url, isActive } from "@roxi/routify";
  export let urls, height;
  let linkElems = [];
  let overlay;
  let clientWidth
  $: urlsWithElem = linkElems.map((elem, i) => ({ ...urls[i], elem }));
  $: activeUrl = urlsWithElem.find(({active}) => active)
  $: if (overlay && clientWidth && activeUrl) copyDimensions(activeUrl.elem, overlay);
  $: color = activeUrl && activeUrl.color

  function copyDimensions(source, target) {
    target.style.left = source.offsetLeft + "px";
    target.style.top = source.offsetTop + "px";
    target.style.width = source.clientWidth + "px";
    target.style.height = source.clientHeight + "px";
  }
</script>

<style>
  nav {
    width: 100%;
    background: rgb(18, 107, 148);
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    justify-content: space-evenly;
    z-index: 100;
  }
  h1 {
    font-size: 36px;
    padding: 0 8px;
    line-height: 30px;
    font-weight: 500;
    color: #ddd;
    text-transform: uppercase;
    text-decoration: none;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 10;
    transition: all 0.8s;
    /* transition-delay: 0.05s */
  }
</style>

<nav bind:clientWidth>
  <h1>Salmon Cookies</h1>
</nav>

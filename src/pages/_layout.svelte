<script>
  import { url, isActive } from "@roxi/routify";
  import { TabsTransition } from "@roxi/routify/decorators";
  import TopHeader from "./_components/TopHeader.svelte";
  import BottomNav from "./_components/BottomNav.svelte";

  const headerHeight = '90px';
  const footerNavHeight = '56px';

  const _urls = [
    ["./index", "Home", "#7fc5bb"],
    ["./stores", "Stores", "#0bf5cc"],
    ["./sales", "Sales Info", "#88f0d0"]
  ];
  $: urls = _urls.map(([path, name, color]) => ({
    name,
    href: $url(path),
    color,
    active: !!$isActive(path),
  }));
</script>

<!-- routify:options preload="proximity" -->

<style>
  :global(body) {
    padding: 0;
  }
  * :global(.inset) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  main.inset {
    overflow: hidden;
  }

  /* * :global(*) {
    text-align: center;
  } */
</style>

<div style="height: 100%">
  <TopHeader {urls} height="64px" />
  <main class="inset" style="top: { headerHeight }; bottom: { footerNavHeight };">    
    <slot decorator={TabsTransition} />    
  </main>
  <BottomNav {urls} height={ footerNavHeight } />
</div>
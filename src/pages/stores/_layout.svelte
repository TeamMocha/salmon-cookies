<style>
  main {
    background: #17d5a2;
    height: 100%;
    overflow-y: auto;
    text-align: center;
  }
  * :global(.card) {
    background: white;
    width: 256px;
    height: 256px;
    display: inline-block;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 24px;
    text-align: center;
  }
</style>

<!-- routify:options index=1 -->
<main>
  <slot />
</main>

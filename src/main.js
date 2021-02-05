import App from './App.svelte';

const app = new App({
  // Global Props
  target: document.body,
  props: {
    name: 'Pat',
    thingWeSell: 'Salmon Cookies'
  }
});

export default app;

import App from './App/App.svelte';

const app = new App({
	// Global Props
	target: document.body,
	props: {
		name: 'Pat',
		thingWeSell: 'salmon cookies'
	}
});

export default app;
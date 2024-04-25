<script lang="ts">
	import { setPoint } from '$lib/db';
	import { onMount } from 'svelte';
	import Footer from './../components/footer.svelte';
	import './../styles/globals.css';
	import Header from './Header.svelte';
	onMount(() => {
		const song = new Audio('./sounds/song.mp3');

		song.volume = 1;
		song.play();
	});
</script>

<div class="bg-[#30060F] min-h-screen relative scroll-smooth">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>

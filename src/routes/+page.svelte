<script lang="ts">
	import { onMount } from 'svelte';
	import About from '../components/about.svelte';
	import Carousel from '../components/carousel.svelte';
	import ContainerSection from '../components/container-section.svelte';
	import HowTo from '../components/how-to.svelte';
	import RewardModel from '../components/reward-model.svelte';
	import { itemCardDatas } from '../config/itemCards';

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<RewardModel />
	<About />
	<ContainerSection className="py-6 flex items-center justify-center">
		<div class="w-[70%] h-2 rounded-full bg-yellow-200/20"></div>
	</ContainerSection>
	<HowTo />
	<Carousel item={itemCardDatas} />
</main>

<style>
</style>

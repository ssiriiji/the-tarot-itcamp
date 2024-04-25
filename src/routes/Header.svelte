<script>
	import { getPoint } from '$lib/db';
	import { Home, Info, MessageCircleQuestion, PartyPopper, Star } from 'lucide-svelte';
	import { onMount } from 'svelte';
	const listLink = [
		{
			label: 'Home',
			icon: Home,
			href: '/'
		},
		{
			label: 'About',
			icon: MessageCircleQuestion,
			href: '#about'
		},
		{
			label: 'How To',
			icon: Info,
			href: '#how-to'
		},
		{
			label: 'Reward',
			icon: PartyPopper,
			href: '/reward'
		}
	];

	let points = 0;
	onMount(() => {
		setInterval(() => {
			points = parseInt(localStorage.getItem('the-tarot') || '0');
		}, 1000);
	});
</script>

<div
	class="flex container px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-6 items-center gap-4 justify-between sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:"
>
	<div class="size-16 ml-3 mr-10">
		<a href="/">
			<img src="./images/logo.webp" alt="" />
		</a>
	</div>
	<div
		class="min-w-[300px] px-2 bg-yellow-200/20 rounded-full h-12 flex items-center justify-center"
	>
		<div class="flex gap-4">
			{#each listLink as item, index}
				<a
					href={item.href}
					class="flex items-center justify-center gap-2 hover:bg-yellow-200/20 px-3 py-2 transition-all rounded-full"
				>
					<svelte:component this={item.icon} class="text-white" />
					<p class="text-white">{item.label}</p>
				</a>
			{/each}
		</div>
	</div>
	<div class="flex items-center px-5 justify-center gap-2 bg-white rounded-full">
		<Star class="text-yellow-600 fill-yellow-200" />
		<p class="py-2 text-base font-bold">{points}</p>
	</div>
</div>

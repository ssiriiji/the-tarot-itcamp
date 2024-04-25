<script lang="ts">
	import { gsap } from 'gsap';
	import { Spade } from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';
	import type { itemType } from '../types/itemCard';
	import ContainerSection from './container-section.svelte';
	let spin = false;
	let item: itemType[] = [];
	export { item };

	let deg = 0;
	let timer = 0;

	let container: any;
	let selectedCard: itemType;
	let showSelectedCard = false;
	let spinSound: HTMLAudioElement;

	onMount(() => {
		spinSound = new Audio('./sounds/spin-effect.mp3');
		spinSound.volume = 0.6;
		timer = setInterval(() => {
			deg = deg + 1 > 360 ? 0 : deg + 1;
		}, 35);

		return () => clearInterval(timer);
	});

	function onSpinComplete() {
		const randomIndex = Math.floor(Math.random() * item.length);
		selectedCard = item[randomIndex];
		showSelectedCard = true;
		let pointV = parseInt(localStorage.getItem('the-tarot') || '0');
		localStorage.setItem('the-tarot', String(pointV + selectedCard.point));
	}

	function handleSpin() {
		if (showSelectedCard) {
			selectedCard;
			showSelectedCard = false;
			timer = setInterval(() => {
				deg = deg + 1 > 360 ? 0 : deg + 1;
			}, 35);
		} else {
			item.forEach((el, index) => {
				if (index === item.length - 1) {
					spinSound.play();
					gsap.fromTo(
						el.ref,
						{
							'--radius': '20vh',
							'--op': 1
						},
						{
							'--radius': '0vh',
							'--op': 0,
							delay: index * 0.1,
							onComplete: () => {
								gsap.fromTo(container, { opacity: 1 }, { opacity: 0 });
								clearInterval(timer);
								onSpinComplete();
							}
						}
					);
				} else {
					gsap.fromTo(
						el.ref,
						{
							'--op': 1,
							'--radius': '20vh'
						},
						{
							'--op': 0,
							'--radius': '0vh',
							delay: index * 0.1
						}
					);
				}
			});
		}
	}

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<ContainerSection id="play" className="py-12 relative" bind:this={container}>
	<div
		class="font-mali flex flex-col justify-start items-center transition-all {showSelectedCard
			? 'h-[400px]'
			: 'h-[800px]'}"
	>
		{#if !showSelectedCard}
			<div class="carousel-wrap absolute top-[320px]">
				<div class="carousel">
					<div class="spinner" bind:this={container} style="transform: rotateY({deg}deg);">
						{#each item as data, i}
							{#if data}
								<div
									bind:this={data.ref}
									style="transform: rotateY({i *
										(360 / item.length)}deg) translateZ(var(--radius)) rotateY(-{i *
										(360 / item.length)}deg);"
								>
									<div class="item-wrap" style="transform: rotateY({-deg}deg);">
										<div class="item" style="opacity: var(--op);">
											<div class="item-img">
												<img src={data.image} alt="card" />
											</div>
										</div>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div class="flex justify-center gap-5">
				<img src={selectedCard.image} class="w-[350px] h-[340px] object-contain" alt="" />
				<div class="w-[500px]">
					<div class="overflow-y-scroll h-[320px] scroll-custom">
						<p class="text-white bg-transparent w-full">
							{@html selectedCard.description}
						</p>
					</div>
				</div>
			</div>
		{/if}
		<div class="absolute {showSelectedCard ? ' top-[400px]' : ' top-[700px]'} transition-all">
			<button
				on:click={() => handleSpin()}
				class="flex items-center justify-center gap-2 text-[#30060F] px-3 py-2 rounded-full bg-white"
			>
				<Spade class="fill-yellow-400 text-[#30060F]" />
				<span class="font-bold">{selectedCard ? 'รับคำทำนายอีกครั้ง' : 'เริ่มรับคำทำนาย'}</span>
			</button>
		</div>
	</div>
</ContainerSection>

<style>
	.scroll-custom::-webkit-scrollbar {
		display: none;
	}
	.carousel-wrap {
		position: absolute;
		perspective: 1000px;
		transform-style: preserve-3d;
		pointer-events: none;
		transform: translateY(-500px);
	}

	.carousel {
		transform: translateY(400px);
		transform-style: preserve-3d;
		transition: transform 0.1s;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-wrap,
	.spinner > div {
		transform: translateY(400px);
		transform-style: preserve-3d;
	}

	.item-img {
		width: 100%;
		height: 100%;
	}
	.item-img img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: contain;
	}
	.item-wrap {
		position: absolute;
		width: 180px;
		height: 220px;
	}
	.item {
		width: 100%;
		position: absolute;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		border-radius: 1vh;
	}

	.spinner {
		--radius: 200px;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		padding-right: 150px;
	}
</style>

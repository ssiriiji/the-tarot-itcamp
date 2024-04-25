<script lang="ts">
	import { browser } from '$app/environment';
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let open = false;

	let scrollTop: any = null;
	let scrollLeft: any = null;

	function disableScroll() {
		if (browser) {
			scrollTop = window.pageYOffset || window.document.documentElement.scrollTop;
			(scrollLeft = window.pageXOffset || window.document.documentElement.scrollLeft),
				(window.onscroll = function () {
					window.scrollTo(scrollLeft, scrollTop);
				});
		}
	}

	function enableScroll() {
		if (browser) {
			window.onscroll = function () {};
		}
	}

	$: if (open) {
		disableScroll();
	} else {
		enableScroll();
	}
	let checkin = false;

	const item = [
		...new Array(10).fill(0).map((_, i) => ({
			index: i + 1,
			check: false
		}))
	];

	onMount(() => {
		open = true;
	});
</script>

<section class="fixed inset-0 z-50 backdrop-blur transition-all {!open && 'hidden'}">
	<div
		class="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200"
	>
		<div class=" w-[80%] mx-auto font-mali flex justify-center items-center">
			<div class="w-[30rem] flex justify-center items-center flex-col rounded-xl">
				<div
					class="flex flex-col items-center justify-center relative bg-[#1603077e] px-5 py-10 rounded-xl bg-opacity-50"
				>
					<button
						on:click={() => (open = !open)}
						class="absolute z-10 text-white rounded-lg cursor-pointer bg-[#30060F] top-2 right-2"
					>
						<X />
					</button>
					<h1 class="text-3xl font-medium text-white">Check in</h1>
					<p class="text-xl text-white">- เพื่อรับรางวัล -</p>
					<div class="w-[90%] mt-5 cursor-pointer">
						<div class="grid grid-cols-4 gap-2 text-[#fff] font-semibold">
							<!-- {#each item as data }
								
							{/each} -->
							<div class="bg-[#740909] cursor-not-allowed flex flex-col items-center rounded-lg p-3">
								<h1 class="text-xl">Day 1</h1>
								<img class="" src="./icons/star.webp" alt="" />
								<p>x 1</p>
							</div>
							<div class="bg-[#991b1b] flex flex-col items-center rounded-lg p-3">
								<h1 class="text-xl">Day 2</h1>
								<img src="./icons/star.webp" alt="" />
								<p>x 1</p>
							</div>
							<div class="bg-[#991b1b] flex flex-col items-center rounded-lg p-3">
								<h1 class="text-xl">Day 3</h1>
								<img src="./icons/star.webp" alt="" />
								<p>x 1</p>
							</div>
							<div class="bg-[#991b1b] flex flex-col items-center rounded-lg p-3">
								<h1 class="text-xl">Day 4</h1>
								<img src="./icons/star.webp" alt="" />
								<p>x 1</p>
							</div>
							<div class="bg-[#991b1b] flex flex-col items-center rounded-lg p-3">
								<h1 class="text-xl">Day 5</h1>
								<img src="./icons/star.webp" alt="" />
								<p>x 1</p>
							</div>
							<div class="bg-[#991b1b] flex flex-col items-center rounded-lg p-3">
								<h1 class="text-xl">Day 6</h1>
								<img src="./icons/star.webp" alt="" />
								<p>x 1</p>
							</div>
							<div class="bg-[#991b1b] flex flex-col items-center rounded-lg p-3 col-span-2">
								<h1 class="text-xl">Day 7</h1>
								<img class="w-[5rem]" src="./icons/star.webp" alt="" />
								<p>x 3</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

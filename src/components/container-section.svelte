<script>
	export let className = '';
	export let id = ""
</script>

<section id={id} class="w-full">
	<div class="container px-4 sm:px-6 lg:max-w-7xl lg:px-8 {className}">
		<slot />
	</div>
</section>

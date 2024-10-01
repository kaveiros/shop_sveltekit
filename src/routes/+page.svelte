<script>
	// Example product data
	export let data;
	export let error;

	console.log("Items --->>", data);
	console.log("Error --->>", error);

	function addToCart(event) {
		console.log("Added to card ", event)
	}
</script>

<div class="container mx-auto px-4 py-8">
	{#if error}
		<p>Error loading items: {error.message}</p>
	{:else}
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{#await data}
			Loading items...
		{:then data}
			{#each data.items as product}
				<div class="card w-full">
					<img src={product.imageUrl} alt={product.name} class="h-48 w-full object-cover" />
					<div class="p-4">
						<h3 class="text-lg font-semibold">{product.name}</h3>
						<p class="text-gray-500">{product.price}</p>
					</div>
					<div class="card-footer">
						<button class="btn btn-primary w-full" on:click={addToCart}>Add to Cart</button>
					</div>
				</div>
			{/each}
		{/await}
	</div>
		{/if}
</div>


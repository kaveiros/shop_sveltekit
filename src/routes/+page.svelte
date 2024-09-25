<script>
	// Example product data
	const products = [
		{
			id: 1,
			name: 'Product 1',
			price: '$19.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 2,
			name: 'Product 2',
			price: '$29.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 3,
			name: 'Product 3',
			price: '$39.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 4,
			name: 'Product 4',
			price: '$49.99',
			image: 'https://via.placeholder.com/150',
		}
	];

	function addToCart(event) {
		console.log("Added to card ", event)
	}
</script>

<div class="container mx-auto px-4 py-8">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{#each products as product}
			<div class="card w-full">
				<img src={product.image} alt={product.name} class="h-48 w-full object-cover" />
				<div class="p-4">
					<h3 class="text-lg font-semibold">{product.name}</h3>
					<p class="text-gray-500">{product.price}</p>
				</div>
				<div class="card-footer">
					<button class="btn btn-primary w-full" on:click={addToCart}>Add to Cart</button>
				</div>
			</div>
		{/each}
	</div>
</div>


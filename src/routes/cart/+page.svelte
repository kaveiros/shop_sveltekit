<script>
    // Example cart data
    let cart = [
        {
            id: 1,
            name: 'Product 1',
            price: 19.99,
            quantity: 1,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 29.99,
            quantity: 2,
            image: 'https://via.placeholder.com/150',
        }
    ];

    // Function to calculate total price
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };

    // Handle updating quantity
    function updateQuantity(id, newQuantity) {
        const product = cart.find(item => item.id === id);
        if (product) product.quantity = newQuantity;
    }

    // Handle removing product
    function removeProduct(id) {
        cart = cart.filter(item => item.id !== id);
    }

    // Handle checkout (you can customize this logic)
    function handleCheckout() {
        console.log('Proceeding to checkout...');
    }
</script>

<div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>

    <!-- Cart Items List -->
    <div class="grid grid-cols-1 gap-6">
        {#each cart as product}
            <div class="card bg-base-100 shadow-xl p-4 flex">
                <img src={product.image} alt={product.name} class="w-24 h-24 object-cover mr-4" />
                <div class="flex-grow">
                    <h3 class="text-lg font-semibold">{product.name}</h3>
                    <p class="text-gray-500">Price: ${product.price.toFixed(2)}</p>

                    <!-- Quantity Input -->
                    <div class="mt-2 flex items-center">
                        <label class="mr-2">Quantity:</label>
                        <input type="number" min="1" value={product.quantity} class="input input-bordered w-16"
                               on:input={(e) => updateQuantity(product.id, +e.target.value)} />
                    </div>

                    <!-- Remove Button -->
                    <button class="btn btn-outline btn-error mt-4" on:click={() => removeProduct(product.id)}>
                        Remove
                    </button>
                </div>
            </div>
        {/each}
    </div>

    <!-- Cart Summary -->
    <div class="card bg-base-100 shadow-xl p-4 mt-6">
        <h3 class="text-xl font-semibold mb-4">Cart Summary</h3>
        <p class="text-lg font-bold">Total: ${calculateTotal()}</p>
        <button class="btn btn-primary w-full mt-4" on:click={handleCheckout}>Proceed to Checkout</button>
    </div>
</div>


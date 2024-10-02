

<script>
    import { enhance } from '$app/forms'; // Import the enhance action

        /** @type {import('./$types').PageData} */
        export let data;

        /** @type {import('./$types').ActionData} */
        export let form;

    let email = '';
    let password = '';

    function handleLogin() {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    }

    let message;
</script>
{#if form?.error}
<p>{form?.error}</p>
{/if}
<form method="POST" action="?/login" use:enhance>
    <div class="flex items-center justify-center min-h-screen bg-base-200">
        <div class="card w-full max-w-md bg-base-100 shadow-xl p-8">
            <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

            <!-- Email Field -->
            <div class="form-control mb-4">
                <label class="label" for="email">
                    <span class="label-text">Email</span>
                </label>
                <input type="email" id="email" name="email" placeholder="Enter your email" class="input input-bordered w-full" />
            </div>

            <!-- Password Field -->
            <div class="form-control mb-4">
                <label class="label" for="password">
                    <span class="label-text">Password</span>
                </label>
                <input type="password" id="password" name="password" placeholder="Enter your password" class="input input-bordered w-full" />
            </div>

            <!-- Login Button -->
            <div class="form-control mb-4">
                <button type="submit" class="btn btn-primary w-full">Login</button>
            </div>

            <!-- Additional Links -->
            <div class="text-center mt-4">
                <a href="#" class="link link-primary block">Forgot your password?</a>
                <a href="#" class="link link-secondary block">Don't have an account? Sign up</a>
            </div>
        </div>
    </div>
</form>



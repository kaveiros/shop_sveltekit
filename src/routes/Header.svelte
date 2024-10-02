<script>
	import { Avatar, AppBar } from '@skeletonlabs/skeleton';
	import {user} from "$lib/stores/user.js";

	export  let userFromStore = user;
	let userData = {}
	// Dummy user data for the avatar
	if (user){
		userData = {
			name: user.email,
			avatarUrl: 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop', // Replace with actual user image URL

		}
	}

	let menuVisible = false;
	let avatarMenuVisible = false;

	function toggleMenu() {
		const menu = document.querySelector('.menu-dropdown');
		console.log(menu)
		menu.hidden = !menu.hidden;
		menuVisible = !menuVisible;
	}

	function toggleAvatarMenu() {
		console.log("Avatar clicked")
		const avatarMenu = document.getElementById('#dropdown');
		console.log(avatarMenu)
		avatarMenu.hidden = !avatarMenu.hidden;
		avatarMenuVisible = !avatarMenuVisible;
	}
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="flex-container">
	<svelte:fragment slot="lead">
			<div class="menu-container">
				<button class="menu-btn" on:click="{toggleMenu}">
					☰
				</button>
				<div class="menu-dropdown" hidden>
					<ul>
						<li><a href="/">Products</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="/login">Login</a></li>
						<li><a href="/profile">Profile</a></li>
						<li><a href="/settings">Settings</a></li>
						<li><a href="protected/logout">Logout</a></li>
					</ul>
				</div>
			</div>
	</svelte:fragment>
	<!-- Title of the App -->
	<div class="app-title">
		<h1>My Application</h1>
	</div>
	<svelte:fragment slot="trail" >
		{#if userFromStore !== null}
		<div class="menu-container" >
			<Avatar size="lg" src={userData.avatarUrl} />
		</div>
		{/if}
	</svelte:fragment>

</AppBar>

<style>
	/* Flexbox container for the AppBar */
	.flex-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		height: 60px;
		background-color: var(--surface); /* Adjust color */
		width: 100%; /* Ensure the app bar spans full width */
		box-sizing: border-box;
	}

	/* Menu styles */
	.menu-container {
		display: flex;
		align-items: center;
		position: relative;
	}

	.menu-btn {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.menu-dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		background: white;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow-lg);
		padding: 0.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	ul li {
		margin: 0.5rem 0;
	}

	ul li a {
		text-decoration: none;
		color: inherit;
	}

	/* Title styles */
	.app-title {
		flex-grow: 1;
		text-align: center;
		font-size: 1.25rem;
	}

	/* Avatar styles */
	.avatar-container {
		display: flex;
		align-items: center;
		position: relative;
	}

	.avatar-dropdown {
		position: absolute;
		top: 100%;
		right: 0;
		background: white;
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow-lg);
		padding: 0.5rem;
	}

	h1 {
		margin: 0;
		font-size: 1.25rem;
	}
</style>

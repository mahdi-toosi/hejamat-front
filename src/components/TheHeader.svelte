<script>
	import logo from 'assets/icons/hejam-at-logo.png'
</script>

<header>
	<input type="checkbox" id="check" />
	<label for="check" class="icons">
		<svg
			id="menu-icon"
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 448 512"
		>
			<path
				fill="white"
				d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
			/>
		</svg>

		<svg
			id="close-icon"
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 384 512"
		>
			<path
				fill="white"
				d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
			/>
		</svg>
	</label>

	<nav class="navbar">
		<a href="#" class="nav-item" style="--i: 0">صفحه اصلی</a>
		<a href="#" class="nav-item" style="--i: 1">بلاگ</a>
	</nav>

	<nav />

	<a href="#">
		<img src={logo} alt="logo" class="logo" />
	</a>
</header>

<style>
	header {
		@apply sticky top-0 flex justify-between items-center;
		padding: 1rem 5%;
		z-index: 1;
	}

	.logo {
		height: 40px;
	}

	.nav-item {
		@apply relative;
		font-weight: 500;
		line-height: 25px;
		margin-left: 2.5rem;
		text-decoration: none;
		transition: all 0.5s ease;
	}

	.nav-item:hover {
		color: rgb(168, 239, 255, 0.9);
	}

	.nav-item::after {
		@apply absolute;
		content: '';
		bottom: -0.3rem;
		left: 50%;
		width: 0;
		height: 0.15rem;
		transform: translateX(-50%);
		background-color: rgb(168, 239, 255, 0.9);
		transition: all 0.5s ease;
	}

	.nav-item:hover::after {
		width: 100%;
	}

	.icons {
		position: absolute;
		right: 5%;
		font-size: 2.3rem;
		color: #fff;
		cursor: pointer;
		display: none;
	}

	#check {
		display: none;
	}

	@media (max-width: 900px) {
		header {
			padding: 1.3rem 5%;
		}
	}

	@media (max-width: 700px) {
		header::before {
			content: '';
			top: 0;
			right: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(50px);
			z-index: -1;
		}

		header::after {
			content: '';
			top: 0;
			right: -100%;
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				90deg,
				transparent,
				rgba(255, 255, 255, 0.4),
				transparent
			);
			transition: 0.8s;
		}

		.icons {
			display: inline-flex;
		}

		#check:checked ~ .icons #menu-icon {
			display: none;
		}

		.icons #close-icon {
			display: none;
		}

		#check:checked ~ .icons #close-icon {
			display: block;
		}

		.navbar {
			position: absolute;
			top: 100%;
			right: 0;
			width: 100%;
			height: 0%;
			background: rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(50px);
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
			overflow: hidden;
			transition: all 0.3s ease;
		}

		#check:checked ~ .navbar {
			height: calc(100vh - 82px);
		}

		.nav-item {
			display: block;
			font-size: 1.1rem;
			margin: 2rem 0;
			text-align: center;
			transform: translateY(-50px);
			opacity: 0;
			transition: all 0.3s ease;
		}

		.nav-item:hover::after {
			width: auto;
		}

		#check:checked ~ .navbar a {
			transform: translateY(0);
			opacity: 1;
			transition-delay: calc(0.15s * var(--i));
		}
	}
</style>

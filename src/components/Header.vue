<template>
	<header>
		<div class="navbar navbar-dark bg-dark shadow-sm">
			<div class="navbar-brad align-item-center d-flex">
				<router-link to="/">
					<i class="fas fa-shipping-fast" style="font-size: 30px"
						>&nbsp;<strong>e-kart</strong></i
					>
				</router-link>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						placeholder="Search Products"
					/>
				</div>
				<span class="fas fa-search search-item"></span>
			</div>
			<button class="btn btn-dark badge rounded-pill">
				<router-link to="/cart">
					<i class="fas fa-cart-plus cart">
						<div
							class="
								badge
								bg-danger
								top-20
								start-0
								translate-middle
								border border-light
								rounded-pill
							"
						>
							{{ $store.state.products.length }}
						</div>
					</i>
				</router-link>
			</button>
			<i
				class="fa fa-user bg-light rounded-pill btn-lg active top-0"
				aria-hidden="true"
			></i>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style>
.cart {
	font-size: 1.8rem;
}
.badge {
	font-size: 0.7rem;
}
.logo {
	color: aliceblue;
	font-size: 3rem;
	margin-left: 0.8rem;
}
strong {
	font-size: 2rem;
}
.form-control {
	margin-top: -0.5rem;
	margin-left: 2rem;
	width: 25rem;
	border-radius: 0.8rem;
}
.fas {
	color: aliceblue;
}
.search-item {
	margin-left: -2.5rem;
	margin-top: 0.2rem;
	color: rgb(151, 151, 243);
}
.navbar {
	z-index: 100;
	position: fixed;
	width: 100%;
	height: 3.8rem;
}
.btn-dark {
	margin-left: 37rem;
}
.fa-user {
	margin-top: -0.6rem;
}
</style>

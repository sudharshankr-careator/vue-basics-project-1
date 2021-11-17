<template>
	<header>
		<div class="navbar navbar-dark bg-dark shadow">
			<div class="navbar-brad align-item-center d-flex">
				<i class="fas fa-shipping-fast" style="font-size: 30px"
					>&nbsp;<strong>e-kart</strong></i
				>
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
				<i class="fas fa-cart-plus cart">
					<div class="badge bg-danger top-20 start-0 translate-middle  border border-light rounded-pill">5</div>
				</i>
			</button>
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
	margin-left: 2rem;
	width: 25rem;
	border-radius: 0.8rem;
}
.fas {
	color: aliceblue;
}
.search-item {
	margin-left: -2.5rem;
	margin-top: 0.7rem;
	color: rgb(151, 151, 243);
}
</style>

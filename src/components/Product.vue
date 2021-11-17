<template>
	<div class="card-top container-fluid">
		<div class="container d-flex">
			<div class="item">
				<a>
					<img
						src="https://i.pinimg.com/originals/f7/f2/a2/f7f2a27aa9d45b73d6b52a40eabb50ae.png"
						alt="Electroics"
					/>
					<h6>Electonics</h6>
				</a>
			</div>
			<div class="item">
				<a>
					<img
						src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg?size=626&ext=jpg"
						alt="Fashion"
					/>
					<h6>Fashion</h6>
				</a>
			</div>
			<div class="item">
				<a>
					<img
						src="https://cdn.w600.comps.canstockphoto.com/pet-shop-banner-cat-and-dog-accessories-clip-art-vector_csp84014063.jpg"
						alt="Product"
					/>
					<h6>Products</h6>
				</a>
			</div>
			<div class="item">
				<a>
					<img
						src="https://i.pinimg.com/originals/1e/5d/27/1e5d270c627074a21966cd113c3aa3d1.jpg"
						alt="Jwellery"
					/>
					<h6>Jewllery</h6>
				</a>
			</div>
		</div>
	</div>
    <div class="container">
        <div class="row">
            <div class="card col-md-3">
                <img src="" alt="">
                <h5 style="
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100ch;
          "> Iphone</h5>
                <p style="
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100ch;
          ">RAM 1Tb Memory 1Pb</p>
                <p><strong>Price:</strong>&nbsp; 26000</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "Product",
};
</script>

<style>
.card {
	margin: 2rem;
}
.item{
    margin: 0.5rem;
    text-align: center;
}
img {
	width: 6rem;
	height: 6rem;
	margin-bottom: 1rem;
}
</style>

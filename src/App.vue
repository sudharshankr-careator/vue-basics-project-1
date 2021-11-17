<template>
	<Header />
	<Product />
	<Cart />
</template>

<script>
import Header from "./components/Header";
import Product from './components/Product';
import Cart from './components/Cart';
export default {
	name: "App",
	components: {
		Header,
		Product,
		Cart,
	},
};
</script>

<style>
*{
	background-clip: border-box;
	background-origin: border-box;
}
</style>

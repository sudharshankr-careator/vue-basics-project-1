import { createRouter, createWebHistory } from "vue-router";
import Cart from "../components/Cart.vue";
import Login from "../components/Login.vue";
import Product from "../components/Product.vue";

const routes = [
	{
		path: "/",
		name: "Product",
		component: Product,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
];
const router = createRouter({
	history: createWebHistory("/"),
	routes,
});
export default router;

<template>
	<div
		class="card bg-light shadow-lg"
		style="top: 8rem; left: 30%; width: 25rem"
	>
		<h4 class="mv3 text-center bg-primary text-white">
			{{ login ? "Login" : "Sign Up" }}
		</h4>
		<div class="flex flex-column">
			<input v-show="!login" v-model="name" type="text" placeholder="Name" />
			<br />
			<input v-model="email" type="text" placeholder="Email" /><br />
			<input v-model="password" type="password" placeholder="Password" />
		</div>
		&nbsp;
		<div class="flex mt4">
			<button
				type="button"
				class="pointer mr2 button bg-secondary"
				@click="confirm()"
			>
				{{ login ? "login" : "create account" }}</button
			>&nbsp;
			<button
				type="button"
				class="pointer button bg-secondary"
				@click="login = !login"
			>
				{{ login ? "create an account?" : "already have an account?" }}
			</button>
		</div>
	</div>
</template>

<script>
//import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from './Constants/graphql'
export default {
	name: "Login",
	data() {
		return {
			email: "",
			login: true,
			name: "",
			password: "",
		};
	},
	methods: {
        confirm(){
            //look into it later
        }
	 },
};
</script>

<style>
input {
	border: none;
	margin-top: 2rem;
	height: 2rem;
	border-radius: 0.4rem;
	margin-left: 5rem;
	box-shadow: 2px 2px 2px;
}
button {
	border: none;
	border-radius: 0.4rem;
	margin-left: 5rem;
	color: aliceblue;
}
.card {
	border-block-color: black;
}
</style>

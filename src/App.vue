<template>
	<Login />
	<router-view />
</template>

<script>
import Login from "./component/Login.vue"
export default {
	name: "App",
  components:{
    Login
  }
};
</script>

<style>
* {
	background-clip: border-box;
	background-origin: border-box;
}
</style>

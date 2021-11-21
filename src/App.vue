<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
* {
	background-clip: border-box;
	background-origin: border-box;
}
</style>

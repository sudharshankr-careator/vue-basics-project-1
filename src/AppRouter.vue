<template>
<Header  />
<router-view  />
</template>
<script>
    import Header from "./components/Header.vue"
    export default{
        name: "AppRouter",
        components: {
            Header,
        },
    }
</script>
<style></style>
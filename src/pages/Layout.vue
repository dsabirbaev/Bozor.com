


<template>
    <MinHeader />
    <Header />
    <main>
        <router-view> </router-view>
    </main>
    <Footer  />
</template>



<script setup>
   import MinHeader from "@cmp/MinHeader/MinHeader.vue";
   import Header from "@cmp/Header/Header.vue";
   import Footer from "@cmp/Footer/Footer.vue";
</script>


<style lang="scss" scoped>

</style>
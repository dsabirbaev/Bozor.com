<template>
    <section>
        <div class="container">
            <Carousel class="intro-carousel" :value="images" :numVisible="1" :numScroll="1" :autoplayInterval="3000" indicatorButton="false">
                <template #item="slotProps">
                    <div class="carousel-data rounded-md relative">
                        <img :src="slotProps.data.src" class="w-full h-[250px] rounded-xl ">
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup>



    import { ref } from 'vue';
    import Carousel from 'primevue/carousel';
    const images = ref([
        { src: new URL('@ass/images/clear.png', import.meta.url) },
        { src: new URL('@ass/images/zateya.jpeg', import.meta.url) },
        { src: new URL('@ass/images/alpen.webp', import.meta.url) },
        
    ]);

    
</script>

<style lang="scss">
    .p-carousel-indicators{
        display: none;
    }
</style>
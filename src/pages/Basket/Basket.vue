


<template>
    <section class="pt-10">
        <div class="container">
            <div class="catalog-banner h-[185px] flex items-center justify-center flex-col mb-10">
                <router-link to="/" class="text-white text-[14px] font-['TTInterfaceMedium']" title="Bosh sahifa">
                    {{ $t('bosh sahifa') }}
                </router-link>
                <h1 class="text-white font-['TTInterfaceBold'] text-[35px] my-[16px]">{{ $t('savat') }}</h1>
                <p class="text-[16px] text-white font-['TTInterfaceSemiBold']">0 {{ $t('mahsulot') }}</p>
            </div>
        </div>
    </section>
</template>
  
<script setup>

</script>
  
<style lang="scss" scoped>
    .catalog-banner{
        background-color: rgb(43, 79, 171);;
        border-radius: 32px;
        background-image: url("https://bozor.com/_nuxt/img/bread-crumbs-left.2d5cb17.webp"),url("https://bozor.com/_nuxt/img/bread-crumbs-right.a731d04.webp");
        background-repeat: no-repeat;
        background-position: 100%,0;
        background-size: 600px;
    }
</style>
  
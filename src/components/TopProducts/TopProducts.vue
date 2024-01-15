<template>
    <section class="py-10">
        <div class="container">
            <h2 class="font-['TTInterfaceBold'] text-[20px] mb-5">{{ $t('ommabop tovarlar') }}</h2>

            <div class="grid grid-cols-6 gap-y-6 ">
                <TopProductCard  v-for="product in topProducts" :key="product.id" :data="product"/>     
            </div>
        </div>
    </section>
</template>

<script setup>
    import { TopProductCard } from '@cmp/UI/Card';

    import {topProducts} from "@/service/db.js";
</script>

<style lang="scss" scoped>

</style>
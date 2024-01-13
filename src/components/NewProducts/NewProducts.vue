<template>
    <section class="pt-5 pb-10">
        <div class="container">
            <h2 class="font-['TTInterfaceBold'] text-[20px] mb-5">{{ $t('yangi') }}</h2>

            <div class="grid grid-cols-6 gap-y-6 ">
                <div v-for="product in newProducts" :key="product.id">
                    <TopProductCard :data="product"/>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>

    import { TopProductCard } from '@cmp/UI/Card';
    import {newProducts} from "@/service/db.js";
</script>

<style lang="scss" scoped>

</style>
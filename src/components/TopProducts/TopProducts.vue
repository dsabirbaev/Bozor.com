<template>
    <section>
        <div class="container">
            <h2 class="font-['TTInterfaceBold'] text-[20px] mb-5">Ommabop tovarlar</h2>

            <div class="grid grid-cols-6 gap-y-6 ">
                <div v-for="product in topProducts">
                    <TopProductCard :data="product"/>
                </div>
                
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
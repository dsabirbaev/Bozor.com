<template>
    
     <header class="bg-[#F5F7FA]">
        <div class="container">
            <div class="flex items-center justify-between h-[40px]">
                <div class="flex items-center space-x-1 text-[12px]">
                    <span class="pi pi-map-marker text-[#9A999B] text-[14px]"></span>
                    <span class="text-[#9A999B]">Manzil: </span>
                    <p>Toshkent</p>
                </div>
                <div class="flex items-center text-[12px] gap-x-5">
                    
                        
                        <a class="flex items-center gap-x-[6px]" href="https://t.me/bozor_com" target="_blank" title="Bozor.com telegram">
                            <span class="pi pi-telegram text-blue-500 text-[18px]"></span>
                            <p class="text-[#5D5D5F]">t.me/bozor_com</p>
                        </a>

                        <a class="flex items-center gap-x-[6px]" title="+998 95 515 65 15" href="tel:+998 95 515 65 15">
                            <span class="pi pi-phone text-[18px]"></span> 
                            <p class="text-[#2B4FAB]">+998 95 515 65 15</p>
                        </a>

                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Uzb" class="w-fit text-[14px]" />
                </div>
                    
                
            </div>
     </div>
     </header>
    
</template>

<script setup>


import Dropdown from 'primevue/dropdown';

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'Рус', code: 'RU' },
    { name: 'Uzb', code: 'UZ' }
]);

</script>

<style lang="scss" scoped>

</style>
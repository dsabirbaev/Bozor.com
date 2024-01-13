<template>
    
     <header class="bg-[#F5F7FA]">
        <div class="container">
            <div class="flex items-center justify-between h-[40px]">
                <div class="flex items-center space-x-1 text-[12px]">
                    <span class="pi pi-map-marker text-[#9A999B] text-[14px]"></span>
                    <span class="text-[#9A999B]">{{ $t('manzil') }} : </span>
                    <p>{{ $t('toshkent') }}</p>
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

                        <Dropdown @change="switchLang" v-model="selectedLang" :options="lang" optionLabel="name" :placeholder="placeholderText" class="w-fit text-[12px] bg-transparent border-none ring-0" />
                </div>
                    
                
            </div>
     </div>
     </header>
    
</template>

<script setup>

import { useI18n } from 'vue-i18n';
import Dropdown from 'primevue/dropdown';

import { ref } from "vue";

const {locale} =useI18n({useScope: 'global'})

const switchLang = () => {
    locale.value === "uz" ? locale.value = "ru" : locale.value = "uz";
    localStorage.setItem("lang", locale.value);
}

const placeholderText = ref(localStorage.getItem("lang") === "ru" ? "Рус" : "Uzb");

const selectedLang = ref();
const lang = ref([
    { name: 'Рус'},
    { name: 'Uzb'}
]);

</script>

<style lang="scss" >
    
    
    .p-dropdown-label{
        font-size: 14px;
        color: #9A999B !important;
        padding: 0px;
        margin: 0px;
    }
</style>
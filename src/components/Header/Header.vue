<template>
    <header :class="{ 'fixed-header': isFixed}" class="bg-white">
     <div class="container">
        <div class="flex items-center justify-between h-[78px]">
            <router-link to="/" title="Bosh sahifa">
                <img class="w-[150px] h-[40px] object-contain"  src="https://bozor.com/_nuxt/img/logo.a6ecee7.webp" alt="Bozo.com logo">
            </router-link>

            <div class="flex items-center justify-between cursor-pointer">
                <router-link to="/catalog" title="Katalog" class="text-[12px] text-[#2B4FAB] flex items-center gap-x-2 h-[45px] px-[24px] rounded-md border-solid border-2 border-gray-100 font-bold">
                    <span class="pi pi-th-large"></span> 
                    <span class="font-['TTInterfaceSemiBold']">{{ $t('katalog') }}</span>
                </router-link>
            </div>

            <div class="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[22px] w-[340px]">
                <span class="pi pi-search text-[#000000DE]"></span>
                <input class="placeholder:text-gray-400 ml-[16px] border-none outline-none bg-transparent w-full" type="text" :placeholder="$t('mahsulotlarni topish')" autocomplete="off">
            </div>

            <button @click="openModalAddress" class="bg-[#2B4FAB] cursor-pointer hover:opacity-[0.8] transition-opacity text-white text-[12px] font-['TTInterfaceSemiBold'] flex items-center justify-center gap-x-2 rounded-md h-[45px] w-[190px] border-none outline-none">
                <span class="pi pi-telegram"></span>
                <span>{{ $t('manzilini kiriting') }}</span>
                <AddressModal :visibleAddress="visibleAddress" @closeModalAddress="closeModalAddress" />
            </button>

            <div class="dropdown relative flex items-center gap-x-1 text-[12px] rounded-md bg-[#F5F7FA] h-[45px] px-[13px] cursor-pointer">
                <p class="text-[#2B4FAB] font-['TTInterfaceMedium']">UZD</p>
                <span class="pi pi-angle-down text-[#d2d9eb]"></span>

                <div class="dropdown-menu  flex flex-col gap-y-5 absolute top-full left-[-20px] z-20 p-4 rounded-md w-[170px] bg-white">
                    <p class="text-[16px] text-[#020105] font-['TTInterfaceSemiBold']">{{ $t('valyutani tanlang') }}</p>
                    <button class="flex items-center gap-x-3 bg-transparent border-none outline-none cursor-pointer">
                        <img src="data:image/webp;base64,UklGRlQBAABXRUJQVlA4WAoAAAAQAAAAIwAAFAAAQUxQSBcAAAABD/DA/4iIQJBtc4P501bgABH9T2jvEABWUDggFgEAAPAFAJ0BKiQAFQA+USaQRiOiIaElaABwCglmAMovXWzVsmgiHudA9QH6Vgua/xb885LEDoqJZKhoAP7xlrvARClwvz/kAtrV7D8b25q6Ldti/8e/+UxSt7M2BQ3bPM5BX/BYsvnS9Xt0wpp/Z2cGgHdUf2t/9g364f84AlfvL7spOLVdU8HWqKIDgVQNkerd3pXfXPr5SUxKV+G/50Of/AOOXZLhFF/7Uj4F/mnE9YIg5KD+5fsBP/6fw7xwNs4eI/8G4rOx+tSj+JzRbzRFiubv0A9bbAIAZhe/MezQN6mPfBkJ8MyP7bgwYwf82EX/90V/009uJqBT9JnZY7f/lt/Zl1R/N5dj+VH/7nA/jYkxlUFggAAA" width="25" height="15" alt="Usd"> 
                        <p class="text-[14px] font-['TTInterfaceMedium']">USD</p>
                    </button>
                    <button class="flex items-center gap-x-3 bg-transparent border-none outline-none cursor-pointer">
                        <img src="data:image/webp;base64,UklGRhABAABXRUJQVlA4WAoAAAAQAAAAIwAAGAAAQUxQSBcAAAABD/DA/4iIQJhtdAbzpy3B/SP6n9AeIQBWUDgg0gAAAPAFAJ0BKiQAGQA+USaQRiOiIaElaABwCglqAMURAD8ANMB+AH5ABGyA0gr6KFoQh2fjxGDJtJJAAPw3BgdCTPIQaD0BU2Z6Zu0346yL9Fvs5gIPF+n6YNY4aOGOb4e3H/1vt/8Hqb8+bCNd7Ppkp//8Bp/X/US/Q0CPSPg2E4Y9hXCx60JA1MOprI99V16dTXiTWXn6frqzuiYTLYvy5pOEAH0AEzFkAOoLSisYkZUzCE5079gDQb7e/o5MVH/VU8+/scmKj+HKf8OBfAbWVWwAAA==" width="25" height="15" alt="Uzs"> 
                        <p class="text-[14px] font-['TTInterfaceMedium']">UZS</p>
                    </button>
                </div>
            </div>

            

            <router-link to="/favorites" title="Saralanganlar" class="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
                <span class="pi pi-heart text-[18px]"></span>
            </router-link>

            <router-link to="/basket" title="Savat" class="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
                <span class="pi pi-shopping-cart text-[18px]"></span>
            </router-link>

            <button @click="openModal" title="Profil" class="cursor-pointer rounded-md border-none bg-[#F5F7FA] h-[45px] px-[13px]">
                <span class="pi pi-user text-[18px]"></span>
                <ProfilModal :visible="visible" @closeModal="closeModal" />
            </button>
        </div>
     </div>
    </header>

    
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import {ProfilModal, AddressModal} from "@cmp/UI/Modal";
    
    import Dropdown from 'primevue/dropdown';

    /// profile modal
    const visible = ref(false);
    const openModal = () => {
        visible.value = true;
    };
    const closeModal = () => {
        visible.value = false;
    };


    /// address modal

    const visibleAddress = ref(false);
    const openModalAddress = () => {
        visibleAddress.value = true;
    };
    const closeModalAddress = () => {
        visibleAddress.value = false;
    };

    ////////////////////
    const isFixed = ref(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        isFixed.value = scrollY > 40;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<style lang="scss" scoped>
    .fixed-header {
        position: fixed;
        z-index: 999999;
        top: 0;
        width: 100%;
        
    }

    .dropdown-menu {
        display: none;
    }
    .dropdown:hover .dropdown-menu {
       
        display: flex;
    }
</style>
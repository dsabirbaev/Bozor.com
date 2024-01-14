<template>
    <header :class="{ 'fixed-header': isFixed}" class="bg-white">
     <div class="container">
        <div class="flex items-center justify-between h-[78px]">
            <a href="/" title="Bosh sahifa">
                <img class="w-[150px] h-[40px] object-contain"  src="https://bozor.com/_nuxt/img/logo.a6ecee7.webp" alt="Bozo.com logo">
            </a>

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

            <button class="bg-[#2B4FAB] cursor-pointer hover:opacity-[0.8] transition-opacity text-white text-[12px] font-['TTInterfaceSemiBold'] flex items-center justify-center gap-x-2 rounded-md h-[45px] w-[190px] border-none outline-none">
                <span class="pi pi-telegram"></span>
                <span>{{ $t('manzilini kiriting') }}</span>
            </button>
            <div class="flex items-center gap-x-1 text-[12px] rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
                <p class="text-[#2B4FAB]">UZS</p>
                <span class="pi pi-angle-down text-[#2B4FAB]"></span>
            </div>

            <a href="/favorites" title="Saralanganlar" class="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
                <span class="pi pi-heart text-[18px]"></span>
            </a>

            <a href="/basket" title="Savat" class="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
                <span class="pi pi-shopping-cart text-[18px]"></span>
            </a>

            <button title="Profil" class="rounded-md border-none bg-[#F5F7FA] h-[45px] px-[13px]">
                <span class="pi pi-user text-[18px]"></span>
            </button>
        </div>
     </div>
    </header>

    
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

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
</style>
<template>
    <header class="bg-white">
     <div class="container">
        <div class="flex items-center justify-between h-[78px]">
            <a href="/" title="Bosh sahifa">
                <img src="https://bozor.com/_nuxt/img/logo.a6ecee7.webp" alt="Bozo.com logo">
            </a>

            <div class="flex items-center justify-between">
                <a href="/catalog" title="Katalog" class="text-[12px] text-[#2B4FAB] flex items-center gap-x-1 py-[13px] px-[24px] rounded-md border-solid border-2 border-gray-100 font-bold">
                    <span class="pi pi-th-large"></span> 
                    <span>Katalog</span>
                </a>
            </div>

            <div class="flex items-center rounded-md bg-[#F5F7FA] p-[16px] w-[288px]">
                <span class="pi pi-search"></span>
                <input class="placeholder:text-gray-400 ml-[16px] border-none outline-none bg-transparent" type="text" placeholder="Mahsulotlarni topish" autocomplete="off">
            </div>

            <div class="flex items-center gap-x-1 text-[12px] rounded-md bg-[#F5F7FA] py-[16px] px-[13px]">
                <p class="text-[#2B4FAB]">UZS</p>
                <span class="pi pi-angle-down text-[#2B4FAB]"></span>
            </div>

            <a href="/favorites" title="Saralanganlar" class="rounded-md bg-[#F5F7FA] py-[16px] px-[13px]">
                <span class="pi pi-heart text-[18px]"></span>
            </a>

            <a href="/basket" title="Savat" class="rounded-md bg-[#F5F7FA] py-[16px] px-[13px]">
                <span class="pi pi-shopping-cart text-[18px]"></span>
            </a>

            <button title="Profil" class="rounded-md border-none bg-[#F5F7FA] py-[16px] px-[13px]">
                <span class="pi pi-user text-[18px]"></span>
            </button>
        </div>
     </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
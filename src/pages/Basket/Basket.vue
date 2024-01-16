


<template>
    <section class="pt-10 pb-20">
        <div class="container">
            <div class="catalog-banner h-[185px] flex items-center justify-center flex-col mb-12">
                <router-link to="/" class="text-white text-[14px] font-['TTInterfaceMedium']" title="Bosh sahifa">
                    {{ $t('bosh sahifa') }}
                </router-link>
                <h1 class="text-white font-['TTInterfaceBold'] text-[35px] my-[16px]">{{ $t('savat') }}</h1>
                <p class="text-[16px] text-white font-['TTInterfaceSemiBold']">0 {{ $t('mahsulot') }}</p>
            </div>

            <div class="flex  gap-x-4">
                <div class="rounded-[20px] py-[24px] px-[16px] bg-white w-[70%]">
                    <div class="flex items-center gap-x-4 cursor-pointer py-2 pb-6 relative">
                        <Checkbox v-model="checked" :binary="true" inputId="check-b"/>
                        <label for="check-b" class="text-[16px] text-[#00000099] cursor-pointer">Buyurtma berish uchun tanlang</label>
                        
                        <div class="w-full h-[1px] bg-gray-100 absolute top-full left-0">

                        </div>
                    </div>

                    <div class="flex items-center justify-center">
                        <h2 class="font-['TTInterfaceMedium'] text-[18px] text-[#020105] mt-[5%]">Savatda mahsulot yo‘q</h2>
                    </div>
                </div>
                <div class="bg-white w-[30%] rounded-[20px] py-[24px] px-[16px]">
                    <h4 class="text-[18px] text-[#353437] font-['TTInterfaceSemiBold'] mb-5">Sizning buyurtmangiz</h4>

                    <ul class="p-0">
                        <li class="flex items-center mb-5">
                            <span class="text-[14px] text-[#353437] font-['TTInterfaceLight']">Tovarlar</span>
                            <span class="split-bottom-dashed"></span> 
                            <strong class="font-['TTInterfaceMedium'] text-[14px] text-[#353437] w-[50px]">0 ta</strong>
                        </li> 
                        <li class="flex items-center mb-7">
                            <span class="text-[14px] text-[#353437] font-['TTInterfaceLight']">Jami</span> 
                            <span class="split-bottom-dashed"></span>
                            <strong class="font-['TTInterfaceMedium'] text-[14px] text-[#353437] w-[50px]">0</strong>
                        </li>
                    </ul>

                    <button disabled="disabled" class="cursor-pointer border-none outline-none bg-[#2b4fab] rounded-[12px] text-white font-['TTInterfaceSemiBold'] py-[12px] w-full opacity-[0.7]">
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
    import { useTitle } from '@vueuse/core'

    import Checkbox from 'primevue/checkbox';
    import { ref } from "vue";

    const checked = ref(false);
    const title = useTitle()
    title.value = "Bozor.com | Savat"
    useTitle(title)
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

    .split-bottom-dashed{
        border-bottom: 1px dashed #9a999b;
        height: 14px;
        display: flex;
        width: 100%;
        margin-left: 14px;
    }
</style>
  
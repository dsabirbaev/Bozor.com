

<template>
    <section class="py-10">
        <div class="container">
            <div class="catalog-banner h-[185px] flex items-center justify-center flex-col mb-10">
                <router-link to="/" class="text-white text-[14px] font-['TTInterfaceMedium']" title="Bosh sahifa">
                    {{ $t('bosh sahifa') }}
                </router-link>
                <h1 class="text-white font-['TTInterfaceBold'] text-[35px] my-[16px]">{{ $t('katalog') }}</h1>
                <p class="text-[16px] text-white font-['TTInterfaceSemiBold']">44 {{ $t('kategoriyalar') }}</p>
            </div>

            <div class="flex gap-x-6">
                <div>
                    <div class="mb-5 text-[14px] text-[#020105] font-['TTInterfaceSemiBold'] p-[14px] w-[200px] flex items-center justify-center cursor-pointer bg-white rounded-[12px]">
                        Kategoriyalarni yashirish
                    </div>

                    <div class="bg-white w-[300px] rounded-[20px] py-[32px] px-[24px]">
                        <h2 class="text-[#353437] font-['TTInterfaceBold'] text-[24px] mb-[23px]">Katalog</h2>
                        <PanelMenu :model="computedItems" class="w-[250px] bg-transparent" />
                    </div>
                </div>

                <div>
                    <div class="flex  gap-x-2">

                        <a v-for="item in typeCategory" :key="item?.id" :title="item?.title" class="w-[210px] h-[150px] p-4 relative rounded-[20px] bg-[#EDEEEF] cursor-pointer">
                            <h2 class="text-[#020105] font-['TTInterfaceMedium'] text-[12px]">{{ item?.title }}</h2>
                            <img class="w-[60%] h-[60%] absolute right-0 bottom-0" :src="item?.img" :alt="item?.title">
                        </a>
                    </div>

                    <div class="bg-[#f2c94c] rounded-[24px] p-10 banner mt-[32px] h-[170px]">
                        <p class="text-white max-w-[65%] text-[30px]">Endi siz mahsulotlarni bizdan arzon narxlarda xarid qilishingiz mumkin</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
    import {  computed} from "vue";
    
    //// usevue for title changing
     import { useTitle } from '@vueuse/core'

    //// render data
    import { category, typeCategory } from "@/service/db";

    //// primevue
    import PanelMenu from 'primevue/panelmenu';

    const title = useTitle()
    title.value = "Bozor.com | Katalog"
    useTitle(title)

    const computedItems = computed(() => {

        return category.map((d) => ({
            label: d.name,
            items: d.arr.map((item) => ({
            label: item,
            })),
        }));
    });
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

    .banner{
        background-image: url(https://bozor.com/_nuxt/img/bread-crumbs-left.2d5cb17.webp);
        background-repeat: no-repeat;
        background-position: right;
        background-size: 85%;
    }
</style>
  
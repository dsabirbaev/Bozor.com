

<template>
    <section class="pt-10 pb-10">
        <div class="container p-[12px]">
            <div class="catalog-banner h-[185px] flex items-center justify-center flex-col mb-10">
                <router-link to="/" class="text-white text-[14px] font-['TTInterfaceMedium']" title="Bosh sahifa">
                    {{ $t('bosh sahifa') }}
                </router-link>
                <h1 class="text-white font-['TTInterfaceBold'] text-[35px] my-[16px]">{{ $t('saralanganlar') }}</h1>
                <p class="text-[16px] text-white font-['TTInterfaceSemiBold']">0 {{ $t('mahsulot') }}</p>
            </div>

            <div>
                <div class="flex items-center justify-between mb-5">
                    <div class="text-[14px] text-[#020105] font-['TTInterfaceSemiBold'] p-[14px] w-[200px] flex items-center justify-center cursor-pointer bg-white rounded-[12px]">
                        Kategoriyalarni yashirish
                    </div>
                    <div title="Tozalash" class="flex items-center gap-x-2 cursor-pointer text-[#e45746]">
                        <span class="pi pi-trash text-[16px]"></span>
                        <span class="font-['TTInterfaceMedium'] text-[14px]">Tozalash</span>
                    </div>
                </div>

                <div>
                    <div class="bg-white w-[300px] rounded-[20px] py-[32px] px-[24px]">
                        <h2 class="text-[#353437] font-['TTInterfaceBold'] text-[24px] mb-[23px]">Katalog</h2>
                        <PanelMenu :model="computedItems" class="w-[250px] bg-transparent" />
                    </div>

                    <div>

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
    import { category } from "@/service/db";

    //// primevue
    import PanelMenu from 'primevue/panelmenu';

    const title = useTitle()
    title.value = "Bozor.com | Saralanganlar"
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
  
<style lang="scss" >
    .catalog-banner{
        background-color: rgb(43, 79, 171);;
        border-radius: 32px;
        background-image: url("https://bozor.com/_nuxt/img/bread-crumbs-left.2d5cb17.webp"),url("https://bozor.com/_nuxt/img/bread-crumbs-right.a731d04.webp");
        background-repeat: no-repeat;
        background-position: 100%,0;
        background-size: 600px;
    }

    .p-icon{
        width: 14px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .p-menuitem-text{
        color: #020105;
        font-family: TTInterfaceMedium;
        font-size: 14px;
    }
    .p-panelmenu-header-action{
        padding: 20px 0;
        background-color: white !important;
    }
   .p-menuitem-link span{
        font-size: 12px;
        font-family: TTInterfaceRegular;
   }
</style>
  
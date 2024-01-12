

<template>
    <div class="rounded-[16px] bg-white min-w-[377px] px-5 py-[18px]">
        <h2 class="text-[18px] font-['TTInterfaceSemiBold'] mb-5">{{ title }}</h2>
        <div class="mb-5">
            <div class="flex justify-between mb-3">
                <a href="/catalog/yo-masulotlari" class="" :title="name1">
                    <img class="rounded-[16px] w-[160px] h-[128px]" :src="img1" :alt="name1" style="background-color: rgb(239, 238, 237);"> 
                    <h3 class="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{{ name1 }}</h3>
                </a>
                <a href="/catalog/ketchuplarsouslar-mayonez" class="" :title="name2">
                    <img class="rounded-[16px] w-[160px] h-[128px] object-contain" :src="img2" :alt="name2" style="background-color: rgb(239, 238, 237);"> 
                    <h3 class="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{{ name2 }}</h3>
                </a>
            </div>
        
        <div class="flex justify-between mb-3">
                <a href="/catalog/suvichimliklar" class="" :title="name3">
                    <img class="rounded-[16px] w-[160px] h-[128px] object-contain" :src="img3" :alt="name3" style="background-color: rgb(239, 238, 237);"> 
                    <h3 class="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{{ name3 }}</h3>
                </a>
                <a href="/catalog/makaron" class="" :title="name4">
                    <img class="rounded-[16px] w-[160px] h-[128px] object-contain" :src="img4" :alt="name4" style="background-color: rgb(239, 238, 237);"> 
                    <h3 class="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{{ name4 }}</h3>
                </a>
        </div>
        </div>

        <a href="/catalog?show=ozi-ovat-masulotlari" class="text-[#2b4fab] underline text-[14px] font-['TTInterfaceMedium']" title="OZIQ OVQAT MAXSULOTLARI">
            Ko'proq
        </a>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['title', 'name1', 'name2', 'name3', 'name4', 'img1', 'img2', 'img3', 'img4']);
</script>

<style lang="scss" scoped>

</style>
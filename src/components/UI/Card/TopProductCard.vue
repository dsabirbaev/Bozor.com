<template>
    <div class="card bg-white w-[182px] h-[366px] rounded-[20px] overflow-hidden relative cursor-grab">
        <img class="w-full h-[225px] object-contain" :src="data?.img" :alt="data?.id">
        
        <span class="absolute top-4 right-4 w-[30px] h-[30px] bg-[#F5F5F7] rounded-full flex items-center justify-center"><i class="pi pi-heart text-[12px]"></i></span>
        <button class="absolute top-[90px] right-5 bg-[#F5F5F7] backdrop-blur-[2px] block border-none outline-none text-[12px] font-['TTInterfaceMedium'] border-[8px] w-[80%] py-[12px] text-[#020105]">
            Tezkor ko‘rish
        </button>
        <div class="p-[10px] flex flex-col justify-between">
            <div class="mb-2">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-[14px] text-[#2B4FAB] font-['TTInterfaceSemiBold']">{{ data?.price }}</span>
                    <span class="pi pi-plus-circle text-[20px] text-[#2B4FAB]"></span>
                </div>
                <p class="text-[#020105] text-[12px] h-[55px]">{{ data?.text }}</p>
            </div>
            <div class="text-[12px] text-[#9A999B] flex items-center gap-x-1">
                <img class="w-[16px] h-[16px]" src="data:image/webp;base64,UklGRpwBAABXRUJQVlA4WAoAAAAQAAAAFAAADwAAQUxQSHoAAAABcGJr26K8/5mGJ/cVQKO5bYDKAiZhGyCyCydxWMNkXDukiTjNYVx6REwAeKOVei1vg0ASKQ2Ob84j06QNf63jW+QuCJTf4k908C4Bk2i+RbMJIFE5iJnif6sHI47OXdjQwwFLtrF4cbEFAoEkVOzv34+2HaKpcIyAG1ZQOCD8AAAA8AUAnQEqFQAQAD5RHoxEI6GhGAQAOAUEtgBOmUI4G8gpgGoZkRP5He+AfrMKVRi51Ai1FFX3lQAA/mtVhd1mb282DPl7AzxDAkPn37n5SB3/UpNWrvdZIszp61SyPtaNm2nPujqMWbFjCUFBWp5/9JQx1luNmUrZ4WiKNVviPnNW8PMXquc6dJnR0//TV3MwefiQAxf8OAAAeHu1aXB3gpncLD78cpTdYpQmyHd0tP7yXR4iUDX+BX7nRCt+vxbACoZ/IHd2tOjVUlRS/ag+I76zj23LpkhXxSz3w0+eyl782N/9jUBa/xxSZVSz2xtHAa/6msfSn3IDAAAA" alt="box"> <span>{{ data?.count }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { defineProps } from 'vue';
    const props = defineProps(['data']);
</script>

<style lang="scss" scoped>
    button{
        visibility: hidden;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
        backdrop-filter: blur(10px);
    }
    .card:hover button{
        transition: all 0.3s ease;
        visibility: visible;
    }
</style>
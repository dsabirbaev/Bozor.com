

<template>
    <div class="card flex justify-content-center modal-profil">
       
        <Dialog :visible="visibleAddress" modal id="address" class="relative" header="Manzilini kiriting" :style="{ width: '1100px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <span @click="closeDialog" class="pi pi-times absolute top-8 right-5 text-[22px] cursor-pointer hover:text-gray-400" title="Close"></span>
            
            <p class="text-[16px] max-w-[614px] text-[#5d5d5f] mt-[12px] leading-[1.4] mb-6">Bozor.com hamma narsani o'z omborlaridan juda tez ko'chirganligi sababli, sizning hududingizdagi assortiment har xil bo'lishi mumkin.</p>
            
            <div class="bg-[#f5f5f7] w-full rounded-[10px] px-[22px]  flex items-center">
                <span class="pi pi-search text-[22px]"></span>
                <input type="text" class="outline-none border-none ring-0 bg-transparent w-full h-full py-[20px] pl-5 text-[18px] placeholder:text-gray-400" placeholder="Manzil toping">
            </div>
        </Dialog>

        
    </div>
</template>

<script setup>

    import Dialog from 'primevue/dialog';
   
    import { defineProps, defineEmits } from 'vue';

    const { visibleAddress } = defineProps(['visibleAddress']);
    const emit = defineEmits();

    const closeDialog = () => {
        emit('closeModalAddress');
    };
    
</script>


<style lang="scss">
    
    #address .p-dialog-title{
        font-size: 32px;
        color: #020105;
        font-family: TTInterfaceSemiBold;
    }

    #address button:nth-child(1) {
        display: none;
    }
</style>

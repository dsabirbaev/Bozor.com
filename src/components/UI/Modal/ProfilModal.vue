

<template>
    <div class="card flex justify-content-center modal-profil">
       
        <Dialog :visible="visible" modal id="profile" class="relative" header="Tizimga kiring yoki profil yarating" :style="{ width: '590px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <span @click="closeDialog" class="pi pi-times absolute top-8 right-5 text-[22px] cursor-pointer hover:text-gray-400" title="Close"></span>
            
            <div class="pt-8">
                <label>
                    <p class="mb-[10px] font-['TTInterfaceMedium'] text-[16px] text-[#5d5d5f]">Telefon raqami</p> 
                    <div class="relative">
                        <span class="absolute left-4 top-4 text-[#9a999b] font-['TTInterfaceRegular']">+998</span>
                        <InputMask class="ring-0 hover:border-gray-400 rounded-md pl-14 p-[16px] w-full text-[#9a999b] mb-7" id="basic" v-model="value" mask="99 999 99 99" placeholder=""/>
                        <button class="w-full border-none outline-none bg-[#2b4fab] text-white text-[16px] px-[80px] py-[15px] rounded-[12px] font-['TTInterfaceSemiBold'] hover:opacity-[0.8] cursor-pointer transition-opacity">
                            Kirish
                        </button>
                        
                    </div>
                   
                </label>
            </div>
        </Dialog>

        
    </div>
</template>

<script setup>

    import Dialog from 'primevue/dialog';
    import InputMask from 'primevue/inputmask';
    import { defineProps, defineEmits } from 'vue';

    const { visible } = defineProps(['visible']);
    const emit = defineEmits();

    const closeDialog = () => {
        emit('closeModal');
    };
    
</script>


<style lang="scss">
    
    #profile .p-dialog-title{
        font-size: 24px;
        color: #020105;
        font-family: TTInterfaceMedium;
    }

    #profile .p-dialog-header{
        background-color: #f5f5f7;
    }

    #profile button:nth-child(1) {
        display: none;
    }
</style>

<template>
    <footer class="pt-[48px] pb-3">
       <div class="container">
            <div class="flex flex-col gap-y-10">
                <a class="text-center" href="/">
                    <img src="https://bozor.com/_nuxt/img/logo.a6ecee7.webp" alt="Bozor.com logo">
                </a>

                <p class="text-center text-[14px] text-[#2B4FAB] font-['TTInterfaceMedium']">{{ $t('footer text') }}</p>
                
                <div class="flex  justify-between border-solid border-0 border-b-2 border-gray-100 pb-[40px]">
                    
                    <div>
                        <p class="text-[#5d5d5f] text-[12px] mb-[10px]">{{ $t('menyu') }}:</p> 
                        <div class="flex flex-col gap-y-[10px] text-[14px]">
                            <a href="/"  title="Bosh sahifa" class="">
                                {{ $t('bosh sahifa') }}
                            </a> 
                            <a href="/news" title="Yangiliklar" class="">
                                {{ $t('yangiliklar') }}
                            </a> 
                            <a title="Buyurtma holati">
                                {{ $t('buyurtma holati') }}
                            </a>
                        </div>
                    </div> 
                    <div>
                        <p class="text-[#5d5d5f] text-[12px] mb-[10px]">{{ $t('aloqa') }}:</p> 
                        <div class="flex flex-col gap-y-[10px] text-[14px]">
                            <a title="+998 95 515 65 15" href="tel:+998 95 515 65 15">
                                +998 95 515 65 15
                            </a> 
                            <a title="+998 95 195 55 75" href="tel:+998 95 195 55 75">+
                                998 95 195 55 75
                            </a>
                        </div>
                    </div> 
                    <div>
                        <p class="text-[#5d5d5f] text-[12px] mb-[10px]">{{ $t('email') }}:</p> 
                        <div class="text-[14px]">
                            <a title="info@bozor.com" href="mailto:info@bozor.com">info@bozor.com</a>
                        </div>
                    </div> 
                    <div>
                        <p class="text-[#5d5d5f] text-[12px] mb-[10px]">{{ $t('manzil') }}:</p> 
                        <div class="text-[14px]">
                            <p>Toshkent sh., Yashnobod tumani, Mumtoz. 5</p>
                        </div>
                    </div> 
                    <div class="mobile-links">
                        <p class="text-[#5d5d5f] text-[12px] mb-[10px]">{{ $t('ilovani yuklab oling') }}:</p> 
                        <div class="flex flex-col gap-y-[10px] text-[14px]">
                            <a title="Bozor.com Mobile Android App" href="https://play.google.com/store/apps/details?id=com.bozor.mobile&amp;hl=ru&amp;gl=US" target="_blank" rel="noopener noreferrer" class="mr-3">
                                <img src="https://bozor.com/_nuxt/img/google-play.3f8de72.svg" width="141" height="30" alt="Google play">
                            </a> 
                            <a title="Bozor.com Mobile IOS App" href="https://apps.apple.com/app/bozor-com-internet-dokoni/id1632430329" target="_blank" rel="noopener noreferrer">
                                <img src="https://bozor.com/_nuxt/img/app-store.2b43376.svg" width="122" height="30" alt="App store">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <p class="text-[12px]"> © 2024 bozor.com {{ $t('barcha huquqlar himoyalangan') }}</p>
                    <a class="flex items-center justify-center rounded-md w-[42px] h-[42px] bg-[#F5F7FA]" href="https://t.me/bozor_com" target="_blank" title="Bozor.com telegram">
                        <span class="pi pi-telegram text-blue-500 text-[18px]"></span>    
                    </a>
                </div>
            </div>
       </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    footer{
        background-image: url(../../assets/images/rectangle.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        
    }
</style>
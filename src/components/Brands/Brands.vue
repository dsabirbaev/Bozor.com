<template>
    <section class="pt-5 pb-10">
        <div class="container">
            <div class="flex flex-col">
                <div class="flex justify-between items-center mb-5">
                    <h2 class="font-['TTInterfaceBold'] text-[20px]">Brendlar</h2>
                    <a href="/brands" title="Brendlar" class="text-[#9a999b] text-[20px] font-['TTInterfaceMedium']">
                        Hammasini ko'rsatish
                    </a>
                </div>

                <div class="rounded-[20px] p-4 bg-white">
                    <ul class="flex brend-list__first">
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/samsung">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/samsungg.png" alt="samsung">
                            </a>
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/premier">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/premierr.png" alt="premier">
                            </a>  
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/nestle">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/nestle.png" alt="nestle">
                            </a>  
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/vitek">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/vitekk.png" alt="vitek">
                            </a>  
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/nivea">
                                <img class="w-[140px]" src="https://api.bozor.com/media/filer_public/f3/5f/f35f4239-dffb-4ecb-930e-8b0403f6c9c7/480px-nivea_logosvg.png" alt="nivea">
                            </a>  
                        </li>
                    </ul>

                    <ul class="flex brend-list__second">
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/garnier">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/garnier.png" alt="garnier">
                            </a>
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/markiz">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/makiz_COumaso.png" alt="markiz">
                            </a>  
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/crafers">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/crafers.png" alt="crafers">
                            </a>  
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/progum">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/dd_4FsaWyL.png" alt="progum">
                            </a>  
                        </li>
                        <li class="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/futbolchi">
                                <img class="w-[140px]" src="https://api.bozor.com/media/brands/yosh-fudbolchi.png" alt="yosh futbolchi">
                            </a>  
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    ul li img{
        transition: 0.5s;

        &:hover{
            transform: scale(1.2);
        }
    }
    .brend-list__first li{
        border: 1px solid #f5f5f7;
    }
    .brend-list__first li{
        border-top: none;
    }
    .brend-list__first li:nth-child(1), .brend-list__second li:nth-child(1){
        border-left: none;
    }
    .brend-list__first li:nth-child(5),.brend-list__second li:nth-child(5){
        border-right: none;
    }
   
    .brend-list__second li{
        border: 1px solid #f5f5f7;
    }

    .brend-list__second li{
        border-bottom: none;
    }
</style>
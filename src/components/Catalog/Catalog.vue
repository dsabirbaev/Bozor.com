<template>
    <section>
        <div class="container">
            <div class="flex justify-between mb-4">
                <CatalogCard title="Oziq ovqat maxsulotlari" name1="Yog' mahsulotlari" name2="Ketchup, mayonez, sous, sirka" name3="Suv/ichimliklar" name4="Makaron, spagetti va lapsha" img1="https://api.bozor.com/media/cache/8c/00/8c00d787510cf2cb06e25c58e30bdbd4.webp" img2="https://api.bozor.com/media/cache/0f/49/0f4982c2be2460115c57beb1ca931127.webp" img3="https://api.bozor.com/media/cache/70/58/70581fec250d97b2ce5f93c435db815d.webp" img4="https://api.bozor.com/media/cache/09/25/09250f58f7cec7cccda85133b1ce45ad.webp"/>
                <CatalogCard title="Maishiy mahsulotlar" name1="Kantselyariya mahsulotlari" name2="Gigiena" name3="Yuvish vositalari" name4="Ho'jalik mollari" img1="https://api.bozor.com/media/cache/0e/60/0e60be49899558949948333fb0d47977.webp" img2="https://api.bozor.com/media/cache/a7/cd/a7cdd0e9436e36f7430403a137bf689e.webp" img3="https://api.bozor.com/media/cache/90/8e/908ea08aebcc0aad31d1c38a9ff550cf.webp" img4="https://api.bozor.com/media/cache/92/9b/929b19ad85f5b1c31a2b85746400bc11.webp"/>
                <CatalogCard title="Maishiy texnika" name1="Konditsionerlar" name2="Muzlatgichlar" name3="Elektrli va mikroto'lqinli pechlar" name4="Kir yuvish mashinalari" img1="https://api.bozor.com/media/cache/49/5c/495ca97d14e6351374af7caaba3bcbc3.webp" img2="https://api.bozor.com/media/cache/8c/49/8c49e6f32c6a2c0f6dd87a5903171b3f.webp" img3="https://api.bozor.com/media/cache/e0/bf/e0bf03452ca6580ef0c1583b2b3df021.webp" img4="https://api.bozor.com/media/cache/1d/4a/1d4a24028d4ef951962a4d125bf037d5.webp"/>
                
            </div>

            <div class="flex justify-between">
                <div class="rounded-[16px] bg-white min-w-[377px] px-5 py-[18px]">
                    <h2 class="text-[18px] font-['TTInterfaceSemiBold'] mb-5">Televizor, foto-video va audio</h2>
                    <div class="mb-[26px]">
                        <a href="/catalog?show=televizor-foto-video-va-audio" class="" title="Televizor, foto-video va audio">
                            <img src="https://api.bozor.com/media/tv-1.webp" alt="Televizor, foto-video va audio" class="w-[335px] h-[308px] rounded-[16px]">
                        </a>
                    </div>

                    <a href="/catalog?show=ozi-ovat-masulotlari" class="text-[#2b4fab] underline text-[14px] font-['TTInterfaceMedium']" title="OZIQ OVQAT MAXSULOTLARI">
                        Ko'proq
                    </a>
                </div>
                <CatalogCard title="Smartfon, telefon, gadjet, aksesuarlar" name1="Radiotelefonlar" name2="Telefonlar" name3="Planshetlar" name4="Smartfonlar" img1="https://api.bozor.com/media/cache/07/1a/071a1e8cec1edc0ec8f59819649818ac.png" img2="https://api.bozor.com/media/cache/c9/c6/c9c673221bc244c4b17f46a574bcee42.png" img3="https://api.bozor.com/media/cache/a7/59/a7591063d640397a726b503d88752e1e.png" img4="https://api.bozor.com/media/cache/88/b3/88b3f9d881e06aef6be7857228a4b36f.png"/>
                
                <div class="rounded-[16px] bg-white min-w-[377px] px-5 py-[18px]">
                    <h2 class="text-[18px] font-['TTInterfaceSemiBold'] mb-5">Kompyuter qurilmalari</h2>
                    <div class="mb-[26px]">
                        <a href="/catalog?show=televizor-foto-video-va-audio" class="" title="Kompyuter qurilmalari">
                            <img src="https://api.bozor.com/media/450b51c6db2528f9dfe1c6c1172f1716.webp" alt="Kompyuter qurilmalari" class="w-[335px] h-[308px] rounded-[16px]">
                        </a>
                    </div>

                    <a href="/catalog?show=ozi-ovat-masulotlari" class="text-[#2b4fab] underline text-[14px] font-['TTInterfaceMedium']" title="OZIQ OVQAT MAXSULOTLARI">
                        Ko'proq
                    </a>
                </div>
            </div>


          
        </div>
    </section>

</template>

<script setup>
    import { CatalogCard } from '@cmp/UI/Card';
</script>

<style lang="scss" scoped>

</style>
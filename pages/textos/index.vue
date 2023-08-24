<template>
    <div>
        <LandHeader />
        <div class="w-full flex flex-wrap justify-center pt-12">
            <div class="w-11/12 sm:w-9/12 xl:w-9/12 2xl:w-6/12 3xl:w-5/12 py-4 text-blue-dark">
                <div class="shadow rounded-lg p-8 shadow-grey text-center xl:text-left flex flex-col items-center xl:items-start bg-main">
                    <small class=" text-sm font-semibold text-gray-600">Explore mais:</small>
                    <h1 class="text-4xl font-black text-blue mb-4">Profundidade Teórica do Fluxiv</h1>
                    <p class="text-gray-700 text-lg mb-8 xl:w-1/2">
                    Descubra os princípios fundamentais que impulsionam o Fluxiv e a revolução da liberdade digital. Nossa base teórica abrange uma série de tópicos essenciais que moldam nosso projeto, desde a horizontalidade cooperativa até a luta pela inclusão e diversidade. Conheça nossas raízes e visão de um mundo digital mais justo e colaborativo.
                    </p>
                    <NuxtLink to="/textos/o-fluxiv">
                        <button class="bg-blue ease-in-out duration-300 hover:drop-shadow hover:shadow py-2 px-8 text-base text-white rounded-ee-md rounded-es rounded-tl-md rounded-tr cursor-pointer font-bold">Conheça nosso texto</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center">
            <div class="w-11/12 sm:w-9/12 xl:w-9/12 2xl:w-6/12 3xl:w-5/12 grid gap-8 grid-cols-1 xl:grid-cols-2 py-4 text-blue-dark">
                <div class="shadow shadow-grey px-16 py-8 rounded-lg text-center" v-for="text in textos">
                    <div class="flex justify-center">
                        <img class="h-24 mb-8" :src="'/assets/texts/text/'+text.url+'.svg'" alt="">
                    </div>
                    
                    <h3 class=" font-bold text-blue text-2xl">{{text.title }}</h3>
                    <p v-html="text.shortDesc"></p>
                    <NuxtLink :to="'/textos/'+text.url">
                        <button class="bg-blue ease-in-out duration-300 hover:drop-shadow hover:shadow py-2 px-8 mt-8 text-base text-white rounded-ee-md rounded-es rounded-tl-md rounded-tr cursor-pointer font-bold">Leia nosso texto</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <HelpUs />
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import Textos from '../../assets/texts/texts.json'
    const textos = Textos
    useSeoMeta({
      title: "Todos os Textos do Fluxiv - Leia e Explore",
      ogTitle: "Explore Todos os Textos do Fluxiv para Reflexão e Insight",
      ogDescription: "Navegue por uma coleção de textos do Fluxiv que discutem vários tópicos relacionados à liberdade, colaboração e muito mais.",
    });
</script>
<style lang="scss">
    .bg-main{
        @media (min-width: 768px) {
            background-image: url("/assets/texts/bannerMain.svg");
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: 26%;
        }

    }
</style>
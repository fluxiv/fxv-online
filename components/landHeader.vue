<template>
        <header class="p-4 bg-blue-dark w-full flex flex-wrap  text-grey border-b-4 border-grey">
        <div class="w-1/4 hidden lg:flex items-center">
          <img class="w-8" src="/assets/flags/brazil.svg" alt="">  
        </div>
        
        <div class="w-full lg:w-1/2 xl:flex grid grid-cols-3 xl:justify-center items-center">
            <MenuMobile />
            <NuxtLink to="/">
                <img src="/assets/fluxiv.svg" class="h-8 cursor-pointer ease-in-out duration-150 hover:scale-105" alt="Fluxiv logo">
            </NuxtLink>
        </div>
        
        <div class="w-1/4 hidden lg:flex justify-end items-center">
            <NuxtLink to="/quem-somos" class="mx-4 cursor-pointer ease-in duration-100 underline-offset-4 hover:decoration-2 hover:underline hover:font-semibold">O projeto</NuxtLink>
            <NuxtLink to="/textos" class="mx-4 cursor-pointer ease-in duration-100 underline-offset-4 hover:decoration-2 hover:underline hover:font-semibold">Textos</NuxtLink>
            <button @click="scrollToHelp()" class="mx-4 bg-grey ease-in-out duration-300 hover:bg-blue hover:shadow-lg p-2 text-sm text-blue-dark rounded-ee-md rounded-es rounded-tl-md rounded-tr cursor-pointer font-bold">Participar</button>
        </div>
    </header>
</template>
<script setup lang="ts">
function scrollToHelp(){
    const helpElement = document.getElementById('help');
    if(helpElement){
        helpElement.scrollIntoView({behavior: 'smooth'})
    } else {
        navigateTo("/quem-somos")
    }
}

</script>
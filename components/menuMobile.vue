<template>
    <div>
        <div class="xl:hidden">
            <img @click="toggleOpen()" class=" w-8 h-8 invert" src="/assets/icon-menu.svg" alt="Menu Fluxiv">
        </div>
        <nav @click="hideOpen()" :class="navClasses">
        </nav>
        <aside :class="asideClasses">
            <div class="py-8 px-4">
                <button @click="hideOpen()" class=" text-white px-4 py-2 rounded flex justify-center items-center border border-white transition-all duration-100 focus:bg-blue">
                    <img class=" w-6 h-6 mr-1 invert" src="/assets/close.svg" alt="botão de fechar sidebar">
                    <p class=" underline underline-offset-4 font-bold">Fechar</p>
                </button>
            </div>
            <hr class=" border border-black">
            <div class="p-4">
                <NuxtLink to="/quem-somos" @click="hideOpen()">
                    <p class="underline underline-offset-4 font-bold">O Projeto</p>
                </NuxtLink>
            </div>
            <hr class=" border border-black">
            <div class="p-4">
                <NuxtLink to="/textos" @click="hideOpen()">
                    <p class="underline underline-offset-4 font-bold">Textos</p>
                </NuxtLink>
            </div>
            <hr class=" border border-black">
            <div class="p-4">
                <NuxtLink to="/textos" @click="hideOpen()">
                    <p class="underline underline-offset-4 font-bold">Apoie financeiramente</p>
                </NuxtLink>
            </div>
            <hr class=" border border-black">
            <div class="p-4">
                <NuxtLink to="/textos" @click="hideOpen()">
                    <p class="underline underline-offset-4 font-bold">Faça parte do projeto</p>
                </NuxtLink>
            </div>
            <hr class=" border border-black">
        </aside>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    const isOpen = ref(false);
    function toggleOpen() {
    isOpen.value = !isOpen.value;
  }

  function hideOpen() {
    isOpen.value = false;
  }
    const navClasses = computed(() =>
    isOpen.value
      ? 'translate-x-0 flex top-0 left-0 fixed w-screen h-screen items-center justify-between px-6 bg-black backdrop-opacity-25 z-[100]'
      : '-translate-x-full flex top-0 left-0 fixed w-screen h-screen items-center justify-between px-6 bg-black backdrop-opacity-25 z-[100]'
  );

  const asideClasses = computed(() =>
    isOpen.value
      ? 'translate-x-0 transform top-0 left-0 w-64 bg-blue-dark fixed h-full overflow-auto ease-in-out transition-all duration-300 z-[200]'
      : '-translate-x-full transform top-0 left-0 w-64 bg-blue-dark fixed h-full overflow-auto ease-in-out transition-all duration-300 z-[200]'
  );
</script>
<style lang="scss">
    
</style>
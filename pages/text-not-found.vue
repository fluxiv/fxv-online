<template lang="">
    <div>
        <LandHeader />
        <div class=" w-full flex flex-col items-center px-24 py-12 xl:p-24">
            <h6 class=" text-blue-dark text-lg">Ooops...</h6>
            <h1 class=" font-black text-center text-5xl">Texto não encontrado!</h1>
            <NuxtLink to="/textos">
                <p class="text-blue hover:underline underline-offset-4 font-bold my-4 cursor-pointer hover:bg-grey-100 rounded-lg py-3 px-5 ease-in duration-200">Volte para textos</p>
            </NuxtLink>
            <img class=" w-full md:w-8/12 xl:w-1/4" src="/assets/texts/textNotFound.svg" alt="Não achamos esse texto, volte para a página de textos">
    </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
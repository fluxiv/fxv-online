<template lang="">
    <div>
        <LandHeader />
        <iframe class="framezin" :src="file" frameborder="0"></iframe>
    </div>
</template>
<script setup lang="ts">
import Textos from '../../assets/texts/texts.json'
    debugger
    const route = useRoute()
    var textName = route.params.name
    var textParams = Textos.find((text:any) => text.url == textName)
    var file:any;
    async function resolveFile(textName:any){
        const module = await import (`../../assets/texts/text/${textName}.pdf`)
        return module.default
    }
    
    try {
        file = await resolveFile(textName)
    } catch (error) {
        console.log(error)
        navigateTo('/text-not-found')
    }
    if(textName != "o-fluxiv"){
        useSeoMeta({
        title: textParams?.seoTitle,
        ogTitle: textParams?.seoOgTitle,
        ogDescription: textParams?.seoDesc,
    });
    } else {
        useSeoMeta({
        title: "A linha teórica do fluxiv - Artigo completo",
        ogTitle: "Conheça nossa linha teórica, reflexões, pensamentos e modo de organização",
        ogDescription: "Conheça nossa linha teórica, reflexões, pensamentos e modo de organização",
    });
    }

    
        
</script>
<style lang="scss">
    .framezin{
        width: 100%;
        height: calc(100vh - 4.5rem);
    }
</style>
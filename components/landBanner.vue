<template>
    <div>
        <div class="bg-blue-dark text-white flex flex-wrap justify-center pt-5">
            <section class=" w-11/12 sm:w-9/12 xl:w-7/12 2xl:w-6/12 3xl:w-5/12  py-5 px-4">
                <div class="text-center pb-0">
                    <h6 class="text-xl pb-1 text-white">Construindo um ciberespaço livre e popular</h6>
                    <h1 class="text-5xl font-black text-blue ">Uma Nova Era de Liberdade Digital</h1>
                </div>
                <div class="text-center text-white pt-4 pb-4">
                    <p>Imagine um ciberespaço onde você tem o poder de escolher, criar e personalizar sua própria experiência online. Livre das amarras das grandes corporações e do monopólio dos dados, o Fluxiv está construindo uma nova era de liberdade digital. Aqui, todos têm voz e podem participar ativamente na construção de um ambiente online popular.</p>
                    <p class="font-bold underline decoration-2 underline-offset-4 cursor-pointer pt-2">Junte-se a nós nessa jornada para a construção de uma internet que é feita para você!</p>
                </div>
                <div class="pt-5">
                    <img class="relative z-10" src="/assets/mainBanner.svg" alt="Ilustração do Fluxiv representando a liberdade digital, onde pessoas diversas interagem e compartilham ideias e conhecimentos livremente em um ambiente aberto e colaborativo. A imagem mostra várias pessoas conectadas, simbolizando a união e o compartilhamento de informações em uma comunidade diversa e inclusiva. O conceito de liberdade digital é representado pelas conexões fluindo livremente entre os participantes, permitindo a troca de conhecimentos e a livre expressão de ideias, promovendo a democratização do acesso à informação e a promoção da criatividade e inovação.">
                </div>
            </section>
        </div>
        <div class="mobile-divider divider relative">
            <img class="w-screen" src="/assets/divider/mainDivider.svg" alt="Divisor entre o banner principal e o conteúdo sobre liberdade digital. O divisor é uma linha horizontal que simboliza a separação entre as seções do conteúdo. Ele representa a transição do banner para o conteúdo sobre liberdade digital, marcando o início de uma nova seção do site. O divisor é uma representação visual da mudança de contexto e tema, sinalizando aos leitores que estão passando de uma parte para outra do site.">
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="scss">

    .divider{
        top: -4rem;
        margin-bottom: -3rem;
        @media (min-width: 524px){
            top: -5.75rem;
            margin-bottom: -12rem;
        }
        @media (min-width: 1024px){
            top: -12.375rem;
            margin-bottom: -16.5625rem;
        }
        @media (min-width: 1788px){
            top: -18.375rem;
            margin-bottom: -18.5625rem;
        }
        @media (min-width:2121px){
            top: -22.375rem;
            margin-bottom: -19.5625rem;
        }

        //margin-bottom: -230px;
    }
</style>
<template lang="">
    <div class="relative z-20">
        <div class="w-full bg-blue-dark flex flex-wrap justify-center">
            <div class="w-11/12 sm:w-9/12 xl:w-9/12 2xl:w-6/12 3xl:w-5/12  px-4 text-grey">

                <div class="flex flex-wrap lg:justify-between flex-col lg:flex-row items-center lg:items-stretch mb-20">
                    <div class="text-left lg:w-6/12">
                        <h2 class="text-blue font-bold text-2xl">Cooperação</h2>
                        <p>No Fluxiv, a cooperação é a chave para construir um ambiente digital melhor. Como uma cooperativa, valorizamos a união e o trabalho em equipe. Através da cooperação, criamos um ecossistema de liberdade, onde diferentes soluções se conectam e se fortalecem. Juntos, colaboramos para garantir que cada pessoa tenha voz e contribua para moldar a internet de forma justa e inclusiva.</p>
                    </div>
                    <div class="w-full lg:w-1/3 pt-16 lg:pt-0">
                        <img src="/assets/cooperation.svg" alt="">
                    </div>
                </div>


                <div class="flex flex-wrap flex-col-reverse lg:flex-row items-center lg:items-stretch lg:justify-between mb-20 relative z-30">
                    <div class="w-full lg:w-1/3 pt-16 lg:pt-0">
                        <img src="/assets/phyloOpenSource.svg" alt="">
                    </div>
                    <div class="text-left lg:w-6/12">
                        <h2 class="text-blue font-bold text-2xl">Código Aberto Filosófico</h2>
                        <p>O código aberto filosófico é uma forma de fazer as coisas na internet pensando nas pessoas. É como um jeito justo e transparente de construir e compartilhar ideias, onde todos podem participar. Ele cria um ambiente digital mais justo, inclusivo e participativo, onde todos têm voz e podem contribuir para uma internet feita por e para as pessoas.</p>
                    </div>
                </div>


            </div>
        </div>
        <div class="eco-divider relative">
            <img src="/assets/divider/freeEcoDivider.svg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .eco-divider{
        top: -2rem;
        margin-bottom: -6rem;
        @media (min-width: 524px){
            top: -2rem;
            margin-bottom: -11.25rem;
        }
        @media (min-width: 1024px){
            top: -10.0625rem;
            margin-bottom: -27.0625rem;
        }
        @media (min-width: 1500px){
            top: -13.82438rem;
            margin-bottom: -40.5625rem;
        }
        @media (min-width:1921px){
            top: -18.0625rem;
            margin-bottom: -47.0625rem;
        }
    }
</style>
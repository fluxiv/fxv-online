<template >
    <div class="relative">
        <div class="w-full bg-custom bg-bottom pb-52 lg:pb-96 2xl:pb-[34rem] bg-no-repeat">
            <div class="flex flex-wrap justify-center pt-64">
                <div class="xl:w-7/12 2xl:w-6/12 3xl:w-5/12 px-4 text-blue-dark text-center">
                    <h2 class="text-4xl font-bold pb-2">Ajude a construir o Fluxiv</h2>
                    <p><span class="font-bold">Junte-se a nós na construção do Fluxiv:</span> crie conosco como voluntário ou faça uma doação e ajude a transformar a internet em um espaço mais livre e inclusivo!</p>
                </div>
            </div>
            <div id="help" class="flex flex-wrap justify-center pt-12">
                <div class="w-11/12 sm:w-9/12 xl:w-9/12 2xl:w-6/12 3xl:w-5/12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8 items-stretch">

                    <div class="shadow bg-white shadow-black rounded-lg flex justify-center text-blue-dark py-8 px-8 lg:px-16">
                        <div class="text-center flex flex-col justify-between">
                            <div><h3 class="text-2xl pb-4 font-bold">DOE!</h3>
                            <p class="text-center pb-8">Faça parte dessa mudança! Sua doação é fundamental para impulsionar o Fluxiv e construir um ciberespaço mais livre e acessível para todos. Contribua agora e ajude-nos a criar um futuro digital mais justo e participativo!</p>
                        </div>
                            <div>
                                <button class="bg-blue ease-in-out duration-300 hover:drop-shadow hover:shadow py-2 px-8 text-xl text-white rounded-ee-md rounded-es rounded-tl-md rounded-tr cursor-pointer font-bold">Faça a difença</button>
                            <small class="block text-sm pt-2">*abrirá a página do apoia-se do Fluxiv</small>
                            </div>

                        </div>
                    </div>

                    <div class="shadow bg-white shadow-black rounded-lg flex justify-center text-blue-dark py-8 px-8 lg:px-16">
                        <div class="text-center flex flex-col justify-between">
                            <div>
                                <h3 class="text-2xl pb-4 font-bold">PARTICIPE!</h3>
                            <p class="text-center pb-8">Junte-se a nós e faça parte da equipe Fluxiv! Estamos construindo um ciberespaço mais livre e justo, e contamos com sua ajuda. Se você é entusiasta de código aberto e quer contribuir com seu talento e criatividade, venha participar no desenvolvimento do Fluxiv. Vamos trabalhar juntos para criar um futuro digital mais brilhante!</p>
                            </div>
                            <div>
                                <button class="bg-blue ease-in-out duration-300 hover:drop-shadow hover:shadow py-2 px-8 text-xl text-white rounded-ee-md rounded-es rounded-tl-md rounded-tr cursor-pointer font-bold">Junte-se a nós</button>
                                <small class="block text-sm pt-2">*abrirá um formulário Google</small>
                            </div>
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .bg-custom{
        background-image: url("/assets/footer.svg");
        background-size: 100%;
        @media (min-width: 2000px){
            background-size: 100%;
            //background-color: #30aad8;
        }
    }
</style>
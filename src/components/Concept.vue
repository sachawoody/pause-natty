<template>
    <v-container id="section-concept" class="d-flex flex-column align-center text-center containerConcept" fluid role="region" aria-label="concept">
        <h3 class="text-h3 text-md-h2 my-8 text-secondary playfair" transition="v-tab-transition">CONCEPT</h3>
        <v-container class="d-flex flex-column flex-md-row bg-secondary rounded-lg">
            <p class="text-h6 text-md-h5 my-8 px-12 openSans text-white para">
                <span class="text-h4 openSans text-white d-inline-block mb-6">Sain</span><br>Toutes nos préparations sont réalisées à partir de produits bruts. Les viandes, les poissons et
                les
                légumes
                sont cuits à la vapeur pour préserver leurs nutriments, vitamines et sels minéraux.
            </p>
            <p class="text-h6 text-md-h5 my-8 px-12 openSans text-whit parae">
                <span class="text-h4 openSans text-white d-inline-block mb-6">Rapide</span><br>Lavez-vous les mains, choisissez la taille de votre bol en fonction de votre appétit et
                servez-vous
                directement ce qui vous fait envie.
            </p>

            <p class="text-h6 text-md-h5 my-8 px-12 openSans text-white para">
                <span class="text-h4 openSans text-white d-inline-block mb-6">Pas cher</span><br>Vous faire participer à la confection de votre repas nous permet de fonctionner en équipe
                réduite.
                Une
                économie qui se ressent sur nos prix, enfin un lieu où manger sain sans se ruiner !
            </p>
        </v-container>
    </v-container>
</template>

<script>

export default {

}
</script>

<style scoped>
    .alkatra{
        font-family: 'Alkatra', cursive !important;
    }
    .containerConcept{
        width: 90% ;
    }
    @media (max-width: 1200px) {
        .containerConcept{
            width: 100%;
        }
        .para{
            padding: 0 !important;
        }
    }
    .openSans{
    font-family: 'Open Sans', sans-serif !important;
    }
    .playfair{
        font-family: 'Playfair Display SC', serif !important;
    }
</style>
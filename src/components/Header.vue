<template>

    <div class="container" fluid role="main">

        <v-parallax src="../assets/natty7.webp" class="parallax d-flex align-center justify-center">
            <div class="d-flex flex-column align-center justify-center text-center mt-12 background">
                <div class="">
                    <h1 class="text-tertiary titre font-weight-bold my-8 px-4 playfair" role="header">Mangez en Conscience</h1>
                    <p class="text-white texte text-h5 text-md-h4 my-8 text playfairMin">Notre buffet libre-service est organisé en fonction des macro-nutriments contenus dans les ingrédients,
                    composez-vous un repas en parfaite adéquation avec les besoins de votre corps</p>
                </div>
                <v-btn size="x-large" class="mt-12 bg-secondary button text-h4 openSans">LIVRAISON</v-btn>
            </div>
        </v-parallax>
        

    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    margin: 0;
    width: 100%;
    height: 900px;
}
.text{
    margin: 10%;
    text-shadow: 0px 0px 10px black;
}
.openSans{
    font-family: 'Open Sans', sans-serif !important;
}
.playfair{
    font-family: 'Playfair Display SC', serif !important;
}
h1{
    letter-spacing: 2px !important;
}
.button{
    width: 250px;
    height: 70px;
}
.titre{
    font-size: 80px;
    border-radius: 10px;
}
.background{
    height: 120vh;
    background: rgba(0, 0, 0, 0.6);
}
.playfairMin {
  font-family: 'Playfair Display', serif !important;
}
.parallax{
    filter: saturate(1.5);
}

@media (max-width: 1200px) {
    .titre{
        font-size: 50px;
    }
    .parallax{
        position: absolute;
        top: 0;
    }
    .container{
        height: 80vh;
    }
}
</style>
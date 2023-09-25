<template>
    <v-container id="section-valeurs" class="d-flex flex-column align-center text-center my-12 containerValeurs" fluid role="region" aria-label="valeurs">
        <h3 class="text-h3 text-md-h2 my-8 text-secondary font-family playfair">NOS VALEURS</h3>
        <v-container class="d-flex flex-column bg-secondary rounded-lg">
            <p class="text-h6 text-md-h5 my-8 px-12 openSans text-white para">
                Natty est un terme anglais qui signifie “naturel” et “élégant”, et qui désigne dans le domaine sportif les
                athlètes

                qui ne se dopent pas. En cela, il correspond à la vision qui nous anime et que nous souhaitons défendre à
                travers ce
                projet : celle d’un un art de vivre à la fois paisible et exigeant.
            </p>
            <p class="text-h6 text-md-h5 my-8 px-12 openSans text-white para">
                Chez Pause Natty nous incitons les gens à manger correctement et faire du sport afin de se sculpter un
                physique
                agréable. L’obésité est en constante augmentation dans notre pays depuis 25 ans, un fléau qui menace autant
                nos
                corps que notre culture.
            </p>
            <p class="text-h6 text-md-h5 my-8 px-12 openSans text-white para">
                S’opposer à ce phénomène n’implique pas pour autant de se laisser embarquer dans le culte de l’apparence. La
                vie
                a
                bien plus à offrir qu’une obsession pour le nombre de calories que l’on ingurgite, ou la taille de nos
                muscles
                ou de
                nos fesses. La vie c’est l’éclat de rire d’un enfant, un rayon de soleil qui vous caresse la peau, l’odeur
                du
                barbecue chez le voisin… des milliers de plaisirs simples auxquels il faut savoir rester disponible, et que
                Pause
                Natty entend bien célébrer.
            </p>
        </v-container>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.alkatra {
    font-family: 'Alkatra', cursive !important;
}

.containerValeurs {
    width: 90%;
}

.openSans {
    font-family: 'Open Sans', sans-serif !important;
}

.playfair {
    font-family: 'Playfair Display SC', serif !important;
}
@media (max-width: 1200px) {
    .para{
        padding: 0 !important;
    }
}
</style>
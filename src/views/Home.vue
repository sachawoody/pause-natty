<template>
    <div class="main-page">
        <div class="bloc-navbar">
            <NavBar />
        </div>

        <div class="bloc-header">
            <img src="https://th.bing.com/th/id/OIP.k7zW8jygYG0rY6I0sQdXewHaE4?pid=ImgDet&rs=1" alt="image de fond"
                class="background-image">
            <div class="header-content">
                <h1 class="title">Mangez en Conscience</h1>
                <button class="button">Livraison</button>
                <div class="quote">
                    <p>Notre buffet libre-service est organisé en fonction des macro-nutriments contenus dans les
                        ingrédients,
                        composez-vous un repas en parfaite adéquation avec les besoins de votre corps</p>
                </div>
            </div>
        </div>

        <div class="bloc-concept">
            <Concept />
        </div>

        <!-- Deux v-if pour ne pas afficher les post et/ou avis si api ou db en panne  -->

        <PostInsta :post="postInsta" />
        <div class="bloc-insta" v-if="postInsta">
            <PostInsta :post="postInsta" />
        </div>

        <AvisGoogle :post="avisGoogle" />
        <div class="bloc-avis" v-if="avisGoogle">
            <AvisGoogle :post="avisGoogle" />
        </div>

        <div class="bloc-valeurs">
            <Valeurs />
        </div>

        <div class="bloc-calories">
            <HealthForm />
        </div>

    </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Concept from '@/components/Concept.vue'
import PostInsta from '@/components/PostInsta.vue'
import AvisGoogle from '@/components/AvisGoogle.vue'
import Valeurs from '@/components/Valeurs.vue'
import HealthForm from '@/components/HealthForm.vue'


import getPostInsta from '@/composables/GetPostInsta'
import getAvisGoogle from '@/composables/GetAvis'

export default {
    components: { NavBar, Concept, PostInsta, AvisGoogle, Valeurs, HealthForm },
    setup(props) {
        const { post: postInsta, error: errorPostInsta, load: loadPostInsta } = getPostInsta('pausenatty') // l'id du compte insta à afficher
        const { post: avisGoogle, error: errorAvisGoogle, load: loadAvisGoogle } = getAvisGoogle()
        // loadPostInsta()
        // loadAvisGoogle()
        return {
            postInsta, errorPostInsta, avisGoogle, errorAvisGoogle
        }
    }
}
</script>

<style>
.main-page {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.main-page div {

    background: gainsboro;
    border-radius: 10px;

}

.bloc-header {
    position: relative;
    height: 400px;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.header-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: center;
}

.title {
    font-size: 36px;
    margin-bottom: 20px;
}

.button {
    padding: 12px 20px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 4px;
    margin-right: 20px;
}

.quote {
    margin-top: 40px;
    font-size: 18px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.quote p:first-of-type {
    margin-bottom: 10px;
}
</style>
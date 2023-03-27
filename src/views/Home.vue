<template>
    <div>
        <img src="" alt="">
        <p>“Mangez en Conscience” </p>
        <button>Livraison</button>
        <p>“Notre buffet libre-service est organisé en fonction des macro-nutriments contenus dans les ingrédients,
            composez-vous un repas en parfaite adéquation avec les besoins de votre corps”
        </p>
    </div>


    <NavBar />
    <Concept />
    <PostInsta :post="postInsta" />
    <AvisGoogle :post="avisGoogle"/>
    <Valeurs />
    <HealthForm />
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
        loadPostInsta()
        loadAvisGoogle()
        return {
            postInsta, errorPostInsta, avisGoogle, errorAvisGoogle
        }
    }
}
</script>

<style></style>
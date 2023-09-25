<template>
    <div class="main-page">
        <div class="bloc-navbar">
            <!-- <NavBar /> -->
        </div>

        <div class="bloc-header">
            <Header />
            
        </div>

        <div class="bloc-concept">
            <Concept />
        </div>

        <!-- Deux v-if pour ne pas afficher les post et/ou avis si api ou db en panne  -->
        <PostInsta />

        <AvisGoogle />

        <div class="bloc-valeurs">
            <Valeurs />
        </div>

        <div class="bloc-calories">
            <HealthForm />
        </div>

        <div class="bloc-footer">
            <!-- <Footer /> -->
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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'



import getPostInsta from '@/composables/GetPostInsta'
import getAvisGoogle from '@/composables/GetAvis'

export default {
    components: { NavBar, Concept, PostInsta, AvisGoogle, Valeurs, HealthForm, Header, Footer },
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

<style scoped>
.main-page {
    display: flex;
    flex-direction: column;
    /* gap: 50px; */
}

.background-image {
    position: absolute;

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

.parallax{
    z-index: -10;
}
    .alkatra{
        font-family: 'Alkatra', cursive !important;
    }
</style>
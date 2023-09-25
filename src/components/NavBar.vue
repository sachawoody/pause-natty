<template>
    <nav class="d-flex overflow-hidden justify-center justify-md-start align-center px-12 py-2 navbar"
        role="navigation">

        <router-link :to="{ name: 'Home' }">
            <img src="../assets/pause-natty-logo-2.webp" alt="" class="navbarContent logo">
        </router-link>

        <div class="navbarContent navButtons btns">
            <v-btn variant="plain" class="text-h5 text-md-h4 mx-8 openSans my-2 btn" href="#section-concept">Concept</v-btn>
            <v-btn variant="plain" class="text-h5 text-md-h4 mx-8 openSans my-2 btn" href="#section-valeurs">Valeurs</v-btn>
            <v-btn variant="plain" class="text-h5 text-md-h4 mx-8 openSans my-2 btn" href="#section-calories">Compteur de
                calories</v-btn>
            <v-btn variant="plain" class="text-h5 text-md-h4 mx-8 openSans my-2 btn2" :to="{ name: 'Menu' }">Menu</v-btn>
            <v-btn variant="plain" class="text-h5 text-md-h4 mx-8 openSans my-2 btn2"
                :to="{ name: 'Contact' }">Contact</v-btn>
        </div>
    </nav>
    <div class="waveContainer d-none d-lg-flex">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav img {
    width: 150px;
    position: absolute;
    top: 5px;
}

.navButtons {
    margin-left: 25%;
}

.navbar {
    height: 125px;
}

.navbarContent {
    z-index: 2;
}

.waveContainer {
    width: 100vw;
    height: 129px;
    position: absolute;
    top: 100px;
    overflow: hidden;
    z-index: 1;
}

.wave {
    position: absolute;
    width: 100%;
    height: 129px;
    background: url(../assets/wave.png);
    background-size: 1000px 129px;
}

.wave1 {
    animation: animate 30s linear infinite;
}

.wave2 {
    animation: animate2 15s linear infinite;
    opacity: 0.5;
    animation-delay: -5s;
    z-index: 4;
}

.wave3 {
    animation: animate 30s linear infinite;
    opacity: 0.2;
    animation-delay: -2s;
    z-index: 3;
}

.wave4 {
    animation: animate2 15s linear infinite;
    opacity: 0.7;
    animation-delay: -5s;
    z-index: 2;
}

@keyframes animate {
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: 1000px;
    }
}

@keyframes animate2 {
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: -1000px;
    }
}

.openSans {
    font-family: 'Open Sans', sans-serif !important;
}

.playfair {
    font-family: 'Playfair Display SC', serif !important;
}

@media (max-width: 1200px) {
    .logo {
        justify-self: left;
        position: relative;
    }

    .navbar {
        height: 200px;
        background: rgba(0, 0, 0, 0.5);
        width: 100vw;
    }

    .btn {
        display: none;
    }

    .btn2 {
        color: white;
    }

    .navButtons {
        margin: 0;
    }
}
</style>
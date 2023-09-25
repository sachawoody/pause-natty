<template>
    <div class="waveContainer2 d-none d-md-flex">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </div>
  <footer class="bg-secondary d-flex flex-column align-center py-6 footer" role="contentinfo">
    <div class="footer-menu d-flex justify-center flex-wrap">
      <v-btn class="openSans" variant="plain" size="large" :to="{ name: 'Menu' }">Menu</v-btn>
      <v-btn class="openSans" variant="plain" size="large" :to="{ name: 'Contact' }">Contact</v-btn>
      <v-btn class="openSans" variant="plain" size="large" :to="{ name: 'CGV' }">CGV</v-btn>
      <v-btn class="openSans" variant="plain" size="large" :to="{ name: 'Mentions légales' }">Mentions légales</v-btn>
    </div>
      <v-btn variant="plain" size="large" href="https://www.instagram.com/pausenatty/"><v-icon icon="mdi-instagram"></v-icon></v-btn>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-menu{
  border-bottom: 1px solid #a8ddd9;
}
/* @media (max-width: 1200px) {
    .footer-menu{
        width: 300px !important;
    }
} */


.waveContainer2{
    width: 100vw;
    height: 103px;
    position: relative;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
}

.wave{
    position: absolute;
    width: 100%;
    height: 103px;
    background: url(../assets/wave4.png);
    background-size: 1000px 103px;
}
.wave1{
    animation: animate 30s linear infinite ;
}
.wave2{
    animation: animate2 15s linear infinite ;
    opacity: 0.5;
    animation-delay: -5s;
    z-index: 4;
}
.wave3{
    animation: animate 30s linear infinite ;
    opacity: 0.2;
    animation-delay: -2s;
    z-index: 3;
}
.wave4{
    animation: animate2 15s linear infinite ;
    opacity: 0.7;
    animation-delay: -5s;
    z-index: 2;
}
@keyframes animate {
    0%{
        background-position-x: 0;
    }
    100%{
        background-position-x: 1000px;
    }
}
@keyframes animate2 {
    0%{
        background-position-x: 0;
    }
    100%{
        background-position-x: -1000px;
    }
}
.openSans{
    font-family: 'Open Sans', sans-serif !important;
}
.playfair{
    font-family: 'Playfair Display SC', serif !important;
}
.footer{
    width: 100vw;
}
</style>
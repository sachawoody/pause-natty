<template>
  <NavBar />

  <div v-if="!cookiesAccepted && !cookiesRefused" class="cookie-banner">

    <v-banner lines="one" class="bg-tertiary pb-4">
      <p class="text-white my-4 text-h6">
        Notre site utilise des cookies pour vous garantir une meilleure navigation, vous proposer des offres et services
        personnalisés et pour réaliser des statistiques de visite pour améliorer votre expérience client
      </p>

      <v-btn @click="acceptCookies" class="bg-secondary mx-3" size="x-large">
        Accepter
      </v-btn>

      <v-btn @click="refuseCookies" class="bg-secondary mx-3" size="x-large">
        Refuser
      </v-btn>
    </v-banner>
  </div>
  <router-view />
  <Footer />
</template>

<script>

import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { NavBar, Footer },
  setup() {
    // récupérer les cookies (s'ils sont acceptés)
    // cookie pour 12 mois (13 mois max)
    const cookiesAccepted = ref(document.cookie.includes('accept_cookies=true'))
    const cookiesRefused = ref(false)

    function acceptCookies() {
      const date = new Date()
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))
      document.cookie = 'accept_cookies=true; expires=' + date.toUTCString() + '; path=/'
      cookiesAccepted.value = true
    }
    function refuseCookies() {
      document.cookie = 'accept_cookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;' // supprime le cookie
      cookiesRefused.value = true
    }

    if (cookiesRefused.value) {
      document.cookie = 'accept_cookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }

    return { acceptCookies, refuseCookies, cookiesAccepted, cookiesRefused }
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alkatra:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.playfair {
  font-family: 'Playfair Display SC', serif !important;
}


.cookie-banner {
  position: fixed;
  z-index: 10 !important;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: #4ab8b0; */
  text-align: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
  width: 100vw;
}
</style>

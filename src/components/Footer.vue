<template>
  <div>
    <router-link :to="{ name: 'Home' }">Accueil</router-link>
    <router-link :to="{ name: 'Menu' }">Menu</router-link>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
    <router-link :to="{ name: 'CGV' }">CGV</router-link>
    <router-link :to="{ name: 'Mentions légales' }">Mentions légales</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style></style>
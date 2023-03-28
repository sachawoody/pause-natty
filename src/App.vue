<template>
  <router-view />
  <Footer />
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
  components: { Footer }
}
</script>
<style>
body {
  margin: 0;
}

#app {
  text-align: center;
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

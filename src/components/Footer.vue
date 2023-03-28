<template>
  <footer>

    <div class="footer-menu">
      <router-link :to="{ name: 'Home' }">Accueil</router-link>
      <router-link :to="{ name: 'Menu' }">Menu</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <router-link :to="{ name: 'CGV' }">CGV</router-link>
      <router-link :to="{ name: 'Mentions légales' }">Mentions légales</router-link>
    </div>
    <div class="footer-separator"></div>
    <div class="footer-links">
      <a href="https://www.youtube.com/channel/moncompteyoutube"><img src="../assets/youtube.png" alt="Youtube"></a>
      <a href="https://www.instagram.com/moncompteinstagram/"><img src="../assets/instagram.png" alt="Instagram"></a>
      <a href="https://www.facebook.com/moncomptefacebook/"><img src="../assets/facebook.png" alt="Facebook"></a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
}

footer div a {
  margin: 10px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links {
  display: flex;
}

footer img {
  height: 56px;
}

footer div a:hover {
  color: #777;
}

.footer-separator {
  border-top: 1px solid black;
  width: 300px;
  margin: 0 20px;
}
</style>
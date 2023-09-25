<template>
    <v-container class="bloc-mentions">
        <div class="legal">
            <h1 class="text-center text-secondary py-4 text-h3 playfair">Mentions légales</h1>
            <v-card class="px-5 py-7 my-2 bg-secondary">
                <h2>Informations légales</h2>
                <p>Société Pause Natty</p>
                <p>Siège social : 421 Rue Léon Blum, 34000 Montpellier</p>
                <p>SIRET : 919 085 423 00029</p>
                <p>Téléphone : 04 99 54 63 10</p>
                <p>E-mail : email</p>
            </v-card>
            <v-card class="px-5 py-7 my-2 bg-secondary">
                <h2>Hébergement</h2>
                <p>Notre site est hébergé chez XXX, dont le siège social est situé adresse.</p>
            </v-card>
            <v-card class="px-5 py-7 my-2 bg-secondary">
                <h2>Données personnelles</h2>
                <p>Nous collectons des données personnelles dans le cadre de la gestion de notre site web et de la relation
                    avec
                    nos clients. Les données collectées ne seront pas transmises à des tiers sans votre consentement exprès.
                </p>
            </v-card>
            <v-card class="px-5 py-7 my-2 bg-secondary">
                <h2>Propriété intellectuelle</h2>
                <p>L'ensemble du contenu de notre site webit sans (textes, images, vidéos, logo, etc.) est protégé par la
                propriété
                intellectuelle et ne peut être reprodu notre autorisation préalable.</p>
            </v-card>
        </div>
    </v-container>
</template>
  
<script>
export default {

}
</script>
  
<style>
.bloc-mentions {
    margin: 100px;
}

.legal {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
}

.text-center {
    text-align: center;
}

.v-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
  
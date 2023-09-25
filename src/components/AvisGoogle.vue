<template>
    <div v-if="loading">
    </div>
    <div v-else role="region" aria-label="avis">
        <!-- <h3 class="text-h2 my-8 text-primary text-center mt-12 playfair">NOS DERNIERS AVIS</h3> -->

        <v-parallax src="../assets/natty6.webp" class="parallax d-flex align-center justify-center">
            <v-carousel :show-arrows="false" cycle hide-delimiters class="d-flex justify-center" height="600px">
                <v-carousel-item v-for="(document, index) in documents" :key="index" class="d-flex align-center">
                    <v-card class="d-flex flex-column align-center bg-secondary card my-2">
                        <v-card-title class="text-h5 text-white openSans">{{ document.author }}</v-card-title>
                        <v-card-subtitle class="star text-tertiary">
                            {{ document.rating }}
                        </v-card-subtitle>
                        <v-card-text class="text-h6 openSans text-center">{{ document.text }}</v-card-text>
                    </v-card>
                    <v-card v-if="index + 1 < documents.length" class="d-flex flex-column align-center bg-secondary card">
                        <v-card-title class="text-h5 text-white openSans">{{ documents[index + 1].author }}</v-card-title>
                        <v-card-subtitle class="star text-tertiary">
                            {{ documents[index + 1].rating }}
                        </v-card-subtitle>
                        <v-card-text class="text-h6 openSans text-center">{{ documents[index + 1].text }}</v-card-text>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-parallax>
    </div>
</template>

<script>

import getCollection from '../composables/getCollection'

export default {
    setup() {
        const { error, documents } = getCollection('avis')
        const loading = !documents.value

        return {
            error,
            documents,
            loading,
        };

    },
};
</script>

<style scoped>
.card {
    height: auto;
    width: 400px;
    padding: 3%;
}
@media (max-width: 1200px) {
    .card{
        width: 350px;
    }
}

.star {
    font-size: 20px;
    opacity: 1;
}

.parallax {
    height: 600px;
}

.blur {
    filter: blur(4px);
}
</style>
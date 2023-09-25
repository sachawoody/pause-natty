<template>
    <h3 class="text-h3 text-md-h2 my-8 text-tertiary text-center my-12 playfair">POST INSTA</h3>
    <v-container class="d-flex flex-column align-center posts" role="region" aria-label="post instagram">
        <v-row class="d-flex align-center my-4">
            <!-- <h3 class="mr-4 openSans text-secondary text-h4">Suivez-nous</h3> -->
            <v-btn href="https://www.instagram.com/pausenatty/" size="x-large" class="bg-secondary text-h6 button openSans">SUIVEZ-NOUS<v-icon icon="mdi-instagram" class="ml-4"></v-icon></v-btn>
        </v-row>
        <v-container class="bg-tertiary my-8 rounded-lg" v-if="posts.length">
            <v-row no-gutters class=" d-flex justify-center">
                <v-col v-for="post in posts" :key="post.url" class="d-flex justify-center a" sm="4">
                    <v-sheet class="ma-2 pa-2 rounded-lg a">
                        <a :href="post.redirect" target="_blank" class="a d-flex">
                            <v-card :text="post.like"></v-card>
                            <v-img :width="300" aspect-ratio="16/9" cover :src="post.url" alt="url post" class="rounded"></v-img>
                        </a>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
  
<script>
import usePostInsta from "@/composables/usePostInsta"

export default {
    setup() {
        const { posts, fetchPosts } = usePostInsta()
        fetchPosts()
        return {
            posts,
            fetchPosts,
        }
    },
};
</script>

<style scoped>
.alkatra{
    font-family: 'Alkatra', cursive !important;
}
.openSans{
    font-family: 'Open Sans', sans-serif !important;
}
.button{
    width: 200px;
    text-align: center;
}
.a{
    max-width: 400px !important;
    max-height: 400px !important;
}
.playfair{
    font-family: 'Playfair Display SC', serif !important;
}
.posts{
    max-width: 1200px;
}
</style>
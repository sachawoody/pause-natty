<template>
    <div>
        <h3>SUIVEZ-NOUS</h3>

        <h2>Derniers posts Instagram de {{ nomCompte }}</h2>
        <div v-for="post in derniersPosts" :key="post.id">
            <img :src="post.imageUrl" alt="post">
            <p>{{ post.caption }}</p>
            <p>{{ post.date }}</p>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            nomCompte: 'pausenatty',
            derniersPosts: []
        }
    },

}
</script>

<style></style>
<template>
    <h3>AVIS CLIENT</h3>

    <!-- <iframe src="//gmb.reviewsmaker.com/widget/load/?pid=ChIJ77aZrOWvthIRGchk0AGXsg4" frameborder="0"
        style="min-height:600px;min-width:600px;"></iframe> -->
    <iframe src="//gmb.reviewsmaker.com/widget/v2/?pid=ChIJ77aZrOWvthIRGchk0AGXsg4" scrolling="no" frameborder="0"></iframe>
    <!-- <h3>Moyenne avis {{ avisGoogle.result.rating }} / 5</h3>
    <div v-for="avis in avisGoogle" :key="avis">
        <p>Author: {{ avis.reviews[0].author_name }}</p>
        <p>Rating: {{ avis.reviews[0].rating }}</p>
        <img :src="avis.reviews[0].profile_photo_url" alt="">
        <p>Avis: {{ avis.reviews[0].text }}</p>
        <p>Avis posté le {{ formatDate(avis.reviews[0].time) }}</p>
    </div> -->
</template>

<script>
// Template du fetch des avis
// {
//     "html_attributions": [],
//         "result": {
//     ...
//         "rating": 4.6,
//             "reviews": [
//                 {
//                     "author_name": "John Smith",
//                     "author_url": "https://www.google.com/maps/contrib/106615704148318066456/reviews",
//                     "language": "en",
//                     "profile_photo_url": "https://lh4.googleusercontent.com/-2t1b0vo3t-Y/AAAAAAAAAAI/AAAAAAAAAHA/0TUB0z30s-U/s150-c0x00000000-cc-rp-mo/photo.jpg",
//                     "rating": 5,
//                     "relative_time_description": "in the last week",
//                     "text": "Great time! 5 stars!",
//                     "time": 1508340655
//                 }
//             ]
//     }
// }


export default {
    props: {
        avisGoogle: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatDate(timestamp) {
            const date = new Date(timestamp * 1000);
            return date.toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }
    }
}
</script>

<style>
div .row {
    display: none;
}

iframe {
    min-height: 550px;
    min-width: 1000px;
}

.reviews-slider__text {
    background: antiquewhite;
}
</style>
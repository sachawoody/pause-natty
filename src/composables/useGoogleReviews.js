import { ref } from 'vue';

const useGoogleReviews = () => {
    const reviews = ref([]);

    const fetchReviews = async () => {
        try {
            const response = await fetch('/db/data.json');
            const data = await response.json();
            reviews.value = data.reviews;
        } catch (error) {
            console.error(error);
        }
    }

    return { reviews, fetchReviews };
}
export default useGoogleReviews

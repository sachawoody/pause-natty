import { ref } from 'vue';

const usePostInsta = () => {
    const posts = ref([])

    const fetchPosts = async () => {
        try {
            const response = await fetch('/db/data.json')
            const data = await response.json()
            posts.value = data.instagram
        } catch (error) {
            console.error(error)
        }
    }

    return { posts, fetchPosts }
}
export default usePostInsta
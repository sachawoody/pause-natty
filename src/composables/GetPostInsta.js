import { ref } from 'vue'

const getPostInsta = (id) => {

    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const accessToken = '' // mettre le token de l'application fb
            // id correspond à l'id du compte insta: ici pausenatty
            let data = await fetch('https://graph.facebook.com/v16.0/' + id + `/media?access_token=${accessToken}`)
            if (!data.ok) {
                throw Error(`${id} not found`)
            }
            post.value = await data.json()
            console.log(post.value)

        }
        catch (err) {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default getPostInsta
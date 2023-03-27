import { ref } from 'vue'

const getPostInsta = (id) => {

    const postInsta = ref(null)
    const errorPostInsta = ref(null)

    const loadPostInsta = async () => {
        try {
            const accessToken = '' // mettre le token de l'application fb
            // id correspond à l'id du compte insta: ici pausenatty
            let data = await fetch('https://graph.facebook.com/v16.0/' + id + `/media?access_token=${accessToken}`)
            if (!data.ok) {
                throw Error(`${id} not found`)
            }
            postInsta.value = await data.json()
            console.log(postInsta.value)

        }
        catch (err) {
            errorPostInsta.value = err.message
        }
    }

    return { post: postInsta, error: errorPostInsta, load: loadPostInsta }
}

export default getPostInsta
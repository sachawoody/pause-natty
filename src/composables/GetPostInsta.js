import { ref } from 'vue'

const getPostInsta = (id) => {

    const postInsta = ref(null)
    const errorPostInsta = ref(null)

    const loadPostInsta = async () => {
        try {
            const accessToken = ''
            let data = await fetch('https://graph.facebook.com/v16.0/' + id + `/media?access_token=${accessToken}`)
            if (!data.ok) {
                throw Error(`${id} not found`)
            }
            postInsta.value = await data.json()

        }
        catch (err) {
            errorPostInsta.value = err.message
        }
    }

    return { post: postInsta, error: errorPostInsta, load: loadPostInsta }
}

export default getPostInsta
import { ref } from 'vue'

const getAvisGoogle = (id) => {

    const avisGoogle = ref(null)
    const errorAvisGoogle = ref(null)

    const loadAvisGoogle = async () => {
        try {
            const accessToken = '' // mettre le token de l'application fb
            let data = await fetch(
                "https://www.reviewsmaker.com/api/v1/google-reviews",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        place_id: "ChIJ77aZrOWvthIRGchk0AGXsg4",
                        api_key: "Votre clé d'API pour ReviewsMaker",
                        limit: 10,
                    }),
                }
            );
            if (!data.ok) {
                throw Error(`${id} not found`)
            }
            avisGoogle.value = await data.json()
            console.log(avisGoogle.value)

        }
        catch (err) {
            errorAvisGoogle.value = err.message
        }
    }

    return { post: avisGoogle, error: errorAvisGoogle, load: loadAvisGoogle }
}

export default getAvisGoogle
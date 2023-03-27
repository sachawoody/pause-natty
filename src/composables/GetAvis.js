import { ref } from 'vue'

const getAvisGoogle = (id) => {

    const avis = ref(null)
    const error = ref(null)

    const load = async () => {
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
            avis.value = await data.json()
            console.log(avis.value)

        }
        catch (err) {
            error.value = err.message
        }
    }

    return { post: avis, error, load }
}

export default getAvisGoogle
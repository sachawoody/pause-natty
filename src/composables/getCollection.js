import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {

    const documents = ref(null)
    const error = ref(null)
    let results = []

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('author')

    collectionRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            results.push(doc.data())
        });
    });

    documents.value = results
    console.log(documents.value)

    return { error, documents }
}

export default getCollection

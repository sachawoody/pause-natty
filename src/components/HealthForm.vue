<template>
    <v-container class="d-flex flex-column flex-md-row align-center text-center formContainer" role="form" aria-label="compteur de calories">
        <v-container id="section-calories" class="d-flex flex-column align-center text-center bg-secondary rounded-lg"
            fluid>
            <h3 class="text-h3 text-md-h2 my-8 text-white playfair">COMPTEUR DE CALORIES</h3>

            <p class="text-h6 text-md-h5 my-8 px-12 openSans para" v-if="submitted"><span class="text-h3 openSans">{{ result }} !</span>
                <br>
                C’est
                le nombre de calories que brûle votre corps
                quotidiennement. Si vous souhaitez perdre de la graisse il vous faudra en consommer un petit peu moins,
                et
                si vous souhaitez vous muscler il vous faudra en consommer un peu plus.

                Un processus simple à comprendre mais compliqué à mettre en œuvre dans la vie de tous les jours.
                Contactez-nous ici (lien vers la page contact) pour que l’on vous accompagne.
            </p>


            <p v-else class="text-h6 text-md-h5 my-8 px-12 openSans para">Lorsque l’on souhaite perdre de la graisse ou construire du
                muscle, la
                première
                étape
                consiste à évaluer notre dépense énergétique, c'est-à-dire la quantité d’énergie que dépense notre corps au
                cours de la journée. Celle-ci dépend de notre âge, notre poids, notre sexe et bien évidemment de notre
                niveau
                d’activité physique.

                Renseignez le formulaire ci-dessous pour connaître votre dépense énergétique, nous vous expliquerons ensuite
                comment utiliser cette information.
            </p>
        </v-container>

        <v-container class=" d-flex flex-column align-center ">
            <v-form class="form mt-8">
                <v-select color="secondary" v-model="genre" ref="genre" label="Sexe" item-title="title" item-value="value"
                    :items="[
                        { value: 'male', title: 'Homme' },
                        { value: 'female', title: 'Femme' }]" required></v-select>

                <v-text-field color="secondary" v-model="age" label="Age :" ref="age"
                    :rules="[...inputRules, age => age <= 100 || 'L\'âge ne doit pas dépasser 100 ans.']" type="number"
                    required></v-text-field>
                <v-text-field color="secondary" v-model="taille" ref="taille" label="Taille :"
                    :rules="[...inputRules, taille => taille <= 200 || 'La taille de doit pas dépasser 200cm (2m)']"
                    type="number" required></v-text-field>
                <v-text-field color="secondary" v-model="poids" ref="poids" label="Poids :"
                    :rules="[...inputRules, poids => poids <= 400 || 'Le poids ne doit pas dépasser 400 kg']" type="number"
                    required></v-text-field>

                <v-select color="secondary" v-model="coeff" ref="coeff" label="Activité" item-title="title" item-value="value"
                    :items="[
                        { value: 1, title: 'Journée passée au repos allongé' },
                        { value: 1.2, title: 'Travail sédentaire assis, pas de sport, moins de 30 min de marche' },
                        { value: 1.4, title: 'Travail sédentaire avec 30 min de marche' },
                        { value: 1.6, title: 'Travail sédentaire et 1 h à 1 h 15 de sport' },
                        { value: 1.7, title: 'Travail sédentaire et 1 h 30 à 2 h de sport' },
                        { value: 1.8, title: 'Travail physique avec beaucoup de déplacements et 1 h 30 à 2 h de sport' },
                        { value: 2, title: 'Travail physique et 3 à 4 h de sport' }
                    ]" required>
                </v-select>

                <v-select color="secondary" v-model="metabolisme" label="Métabolisme" item-title="title" item-value="value"
                    :items="[
                        { value: 'fast', title: 'Métabolisme qui brûle rapidement (plutôt maigre et sec)' },
                        { value: 'slow', title: 'Métabolisme plus lent (prise de poids plus facile)' }
                    ]"></v-select>

                <v-btn @click="handleSubmit(); handleChange()" color="secondary" size="x-large" :disabled="!formIsValid" href="#section-calories">
                    CALCULER
                </v-btn>
            </v-form>

        </v-container>

    </v-container>
</template>

<script>
export default {

    data() {
        return {
            genre: null,
            age: "",
            poids: "",
            taille: "",
            result: null,
            coeff: 1,
            metabolisme: null,
            submitted: false,

            inputRules: [
                v => v.length >= 2 || 'Informations manquantes'
            ]
        };
    }, computed: {
        formIsValid() {
            return (
                this.genre !== '' &&
                this.age !== '' &&
                this.taille !== '' &&
                this.poids !== '' &&
                this.coeff !== ''
            )
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.genre)
            console.log(this.coeff)
            console.log(this.age)
            console.log(this.poids)
            console.log(this.taille)
            if (this.$refs.age.validate() &&
                this.$refs.taille.validate() &&
                this.$refs.poids.validate()) {
                if (this.genre == "female") {
                    this.result = Math.round(665.1 + (9.56 * this.poids) + (1.85 * this.taille) - (4.67 * this.age) * this.coeff)
                } else if (this.genre == "male") {
                    this.result = Math.round(66.5 + (13.75 * this.poids) + (5 * this.taille) - (6.77 * this.age) * this.coeff)
                }
                console.log(this.result)
                if (this.result != null) {
                    this.submitted = true
                }
            }
        },
        handleChange() {
            if (this.metabolisme == 'fast') {
                this.result = this.result + (0.1 * this.result)
            } else if (this.metabolisme == 'slow') {
                this.result = this.result - (0.1 * this.result)
            }
        },

    },
};
</script>

<style>
.alkatra {
    font-family: 'Alkatra', cursive !important;
}

.form {
    width: 80%;
}

.textForm {
    width: 90%;
}

.fade-in {

    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.openSans {
    font-family: 'Open Sans', sans-serif !important;
}

.playfair {
    font-family: 'Playfair Display SC', serif !important;
}

.formContainer {
    max-width: 1681px;
}
#section-calories{
    min-height: 552px;
}
@media (max-width: 1200px) {
    .para{
        padding: 0 !important;
    }
}
</style>
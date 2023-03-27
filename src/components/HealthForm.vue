<template>
    <div id="section-calories">
        <h3>Calcul de vos besoin en calories</h3>

        <form @submit.prevent="handleSubmit">

            <p>Merci de renseigner toutes les informations</p>
            <select v-model="genre" required>
                <option value="default">Choisir un sexe :</option>
                <option value="male">Homme</option>
                <option value="female">Femme</option>
            </select>

            <label>Age :<input placeholder='En années' v-model="age" required></label>
            <label>Poids :<input placeholder='En Kg' v-model="poids" required></label>
            <label>Taille :<input placeholder='En cm' v-model="taille" required></label>

            <select v-model="coeff" required>
                <option value="1">Journée passée au repos allongé</option>
                <option value="1.2">Travail sédentaire assis, pas de sport, moins de 30 min de marche</option>
                <option value="1.4">Travail sédentaire avec 30 min de marche</option>
                <option value="1.6">Travail sédentaire et 1 h à 1 h 15 de sport</option>
                <option value="1.7">Travail sédentaire et 1 h 30 à 2 h de sport</option>
                <option value="1.8">Travail physique avec beaucoup de déplacements et 1 h 30 à 2 h de sport</option>
                <option value="2">Travail physique et 3 à 4 h de sport</option>
            </select>

            <div class="submit">
                <button>Calculer</button>
            </div>

            <div v-if="result">
                <p>{{ result }} ! C’est le nombre de calories que brûle votre corps quotidiennement. Si vous souhaitez
                    perdre de
                    la graisse
                    il vous faudra en consommer un petit peu moins, et si vous souhaitez vous muscler il vous faudra en
                    consommer un peu plus.

                    Un processus simple à comprendre mais compliqué à mettre en œuvre dans la vie de tous les jours.
                    Contactez-nous ici (lien vers la page contact) pour que l’on vous accompagne.</p>
                <form>
                    <label>
                        + 10 % ou - 10 % (en fonction du métabolisme)
                        <select @change="handleChange" v-model="metabolism">
                            <option value="fast">Métabolisme qui brûle rapidement (plutôt maigre et sec)</option>
                            <option value="long">Métabolisme plus lent (prise de poids plus facile)</option>
                        </select>
                    </label>
                </form>
                <p v-if="tempResult">Nouveau truc : {{ tempResult }}</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            genre: "default",
            age: "",
            poids: "",
            taille: "",
            coeff: 1,
            result: null,
            tempResult: null,
            metabolism: null
        };
    },
    methods: {
        handleChange() {
            if (this.metabolism == 'fast') {
                this.tempResult = this.result + (0.1 * this.result)
            } else {
                this.tempResult = this.result - (0.1 * this.result)
            }
        },
        handleSubmit() {
            if (this.genre == "default") return
            if (this.genre == "female") {
                this.result = Math.round(665.1 + (9.56 * this.poids) + (1.85 * this.taille) - (4.67 * this.age) * this.coeff)
            } else {
                this.result = Math.round(66.5 + (13.75 * this.poids) + (5 * this.taille) - (6.77 * this.age) * this.coeff)
            }

        }
    },
};
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}


button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}
</style>

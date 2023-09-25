<template>
    <v-form @submit.prevent="submitForm" class="bloc-form overflow-hidden">
        <v-text-field v-model="name" label="Nom" required></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
        <v-textarea v-model="message" label="Message" required></v-textarea>
        <v-btn type="submit" class="bg-secondary" size="x-large">Envoyer</v-btn>
    </v-form>
</template>
  
<script>


export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            // Do something with the form data, such as sending an email
            console.log('Name:', this.name)
            console.log('Email:', this.email)
            console.log('Message:', this.message)

            // Clear the form fields
            this.name = ''
            this.email = ''
            this.message = ''
        }
    }
}
</script>

<style scoped>
.bloc-form {
    margin: 100px;
    margin-top: 200px;
}
.waveContainer{
    overflow: hidden;
}
</style>
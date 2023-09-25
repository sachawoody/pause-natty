<template>
    <div class="bloc-menu">
        <h1 class="text-secondary text-h3 playfair my-4">Menu</h1>
        <v-card class="bg-secondary">
            <v-card-title>Entrées</v-card-title>
            <v-list class="text-secondary">
                <v-list-item v-for="item in entrees" :key="item.id">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <span class="font-weight-bold">{{ item.price }} €</span>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>

        <v-card class="bg-secondary my-4">
            <v-card-title>Plats principaux</v-card-title>
            <v-list class="text-secondary">
                <v-list-item v-for="item in plats" :key="item.id">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <span class="font-weight-bold">{{ item.price }} €</span>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>

        <v-card class="bg-secondary my-4">
            <v-card-title>Desserts</v-card-title>
            <v-list class="text-secondary">
                <v-list-item v-for="item in desserts" :key="item.id">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <span class="font-weight-bold">{{ item.price }} €</span>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            entrees: [
                { id: 1, name: 'lorem', description: 'lorem', price: 1 },
                { id: 2, name: 'lorem', description: 'lorem', price: 1 },
                { id: 3, name: 'lorem', description: 'lorem', price: 1 }
            ],
            plats: [
                { id: 1, name: 'lorem', description: 'lorem', price: 1 },
                { id: 2, name: 'lorem', description: 'lorem', price: 1 },
                { id: 3, name: 'lorem', description: 'lorem', price: 1 }
            ],
            desserts: [
                { id: 1, name: 'lorem', description: 'lorem', price: 1 },
                { id: 2, name: 'lorem', description: 'lorem', price: 1 },
                { id: 3, name: 'lorem', description: 'lorem', price: 1 }
            ]
        }
    }
}
</script>


<style scoped>
.bloc-menu {
    margin: 100px;
}
.waveContainer{
    display: none !important;
}
</style >
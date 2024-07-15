<template>
    <CreateAccessories @doc-created="getSavedAccessories()" />
    <v-container>
        <v-row justify="center">
            <v-card class="mt-4 rounded-lg mx-4" max-width="250" v-for="accessories in accessoryList" :key="accessories.name"
                style="background-color: #eeeef0">
                <v-card-item>
                    <v-img width="250px" height="250px" :src="accessories.imageURL" />
                </v-card-item>
                <v-divider />
                <v-card-item>
                    <v-card-title>{{ accessories.name }}</v-card-title>
                    <v-card-subtitle>{{ accessories.brand }}</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    {{ accessories.size }}
                </v-card-text>

                <v-card-actions>
                    <v-container>
                        <v-row justify="end" class="d-flex">
                            <v-btn color="blue">
                                Edit
                            </v-btn>
                            <DeleteAccessory/>
                        </v-row>
                    </v-container>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
//imports
import CreateAccessories from '@/components/Accessories/CreateAccessories.vue';
import { onMounted, ref } from 'vue';
import { query, collection, getDocs, } from "firebase/firestore"
import db from '@/firebase/init.js'
import DeleteAccessory from '@/components/Accessories/DeleteAccessory.vue';

//declaration
const accessoryList = ref([])

onMounted(() => {
    getSavedAccessories();
})

//Create 
async function getSavedAccessories() {
    console.log('retrieve')
    const colRef = collection(db, 'accessories')
    const accessoryQuery = await getDocs(query(colRef))

    accessoryList.value = []
    accessoryQuery.forEach((doc) => {
        accessoryList.value.push(doc.data())
    })
}

//Delete





</script>
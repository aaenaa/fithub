<template>
    <CreateClothing @doc-created="getSavedClothes()" />
    <v-container>
        <v-row justify="center">
            <v-card class="mt-4 rounded-lg mx-4" max-width="250" v-for="clothes in clothList" :key="clothes.name" style="background-color: #eeeef0">
                <v-card-item>
                    <v-img width="250px" height="250px" :src="clothes.imageURL" />
                </v-card-item>
                <v-divider />
                <v-card-item>
                    <v-card-title>{{ clothes.name }}</v-card-title>
                    <v-card-subtitle>{{ clothes.brand }}</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    {{ clothes.size }}
                </v-card-text>

                <v-card-actions>
                    <v-container>
                        <v-row justify="end" class="d-flex">
                            <v-btn color="blue">
                                Edit
                            </v-btn>
                            <v-btn color="red">
                                Delete
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
//imports
import CreateClothing from '@/components/Clothing/CreateClothing.vue';
import { onMounted, ref } from 'vue';
import { query, collection, getDocs } from "firebase/firestore"
import db from '@/firebase/init.js'

//declaration
const clothList = ref([])

onMounted(() => {
    getSavedClothes();
})

async function getSavedClothes() {
    console.log('retrieve')
    const colRef = collection(db, 'clothes')
    const clothQuery = await getDocs(query(colRef))

    clothList.value = []
    clothQuery.forEach((doc) => {
        clothList.value.push(doc.data())
    })
}


</script>
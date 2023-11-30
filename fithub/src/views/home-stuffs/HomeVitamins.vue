<template>
    <CreateVitamins @doc-created="getSavedVitamins()" />
    <v-container>
        <v-row justify="center">
            <v-card class="mt-4 rounded-lg mx-4" max-width="250" v-for="vitamins in vitaminList" :key="vitamins.name">
                <v-card-item>
                    <v-img width="250px" height="250px" :src="vitamins.imageURL" />
                </v-card-item>
                <v-divider />
                <v-card-item>
                    <v-card-title>{{ vitamins.name }}</v-card-title>
                    <v-card-subtitle>{{ vitamins.brand }}</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    {{ vitamins.description }}
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
import CreateVitamins from '@/components/Vitamins/CreateVitamins.vue';
import { onMounted, ref } from 'vue';
import { query, collection, getDocs } from "firebase/firestore"
import db from '@/firebase/init.js'

//declaration
const vitaminList = ref([])

onMounted(() => {
    getSavedVitamins();
})

async function getSavedVitamins() {
    console.log('retrieve')
    const colRef = collection(db, 'vitamins')
    const vitaminQuery = await getDocs(query(colRef))

    vitaminList.value = []
    vitaminQuery.forEach((doc) => {
        vitaminList.value.push(doc.data())
    })
}


</script>
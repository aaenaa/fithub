<template>
    <CreateSupplements @doc-created="getSavedSupplements()" />
    <v-container>
        <v-row justify="center">
            <v-card class="mt-4 rounded-lg mx-4" max-width="250" v-for="supplements in supplementList" :key="supplements.name">
                <v-card-item>
                    <v-img width="250px" height="250px" :src="supplements.imageURL" />
                </v-card-item>
                <v-divider />
                <v-card-item>
                    <v-card-title>{{ supplements.name }}</v-card-title>
                    <v-card-subtitle>{{ supplements.brand }}</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    {{ supplements.category }}
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
import CreateSupplements from '@/components/Supplements/CreateSupplements.vue';
import { onMounted, ref } from 'vue';
import { query, collection, getDocs } from "firebase/firestore"
import db from '@/firebase/init.js'

//declaration
const supplementList = ref([])

onMounted(() => {
    getSavedSupplements();
})

async function getSavedSupplements() {
    console.log('retrieve')
    const colRef = collection(db, 'supplements')
    const supplementQuery = await getDocs(query(colRef))

    supplementList.value = []
    supplementQuery.forEach((doc) => {
        supplementList.value.push(doc.data())
    })
}


</script>
<template>
    <v-dialog width="800">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="mt-8" prepend-icon="mdi-plus" color="#a855f7" variant="flat">
                Add Supplement
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card>
                <div class="s-100 d-flex justify-space-between">
                    <v-card-title class="ma-4x">
                        Add Supplements
                    </v-card-title>
                    <v-btn class="ma-4" @click="isActive.value=false" icon="mdi-close" variant="flat" rounded="0">

                    </v-btn>
                </div>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="8">
                                <v-text-field v-model="newSupplement.name" label="Name" hide-details />
                            </v-col>
                            <v-col cols="4">
                                <v-text-field v-model="newSupplement.brand" label="Brand" hide-details />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-select v-model="newSupplement.category" label="Select Categories" :items="preWorkOutItems"></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field  v-model="newSupplement.imageURL" label="Image URL" hide-details />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-container>
                        <v-btn class="mx-4" @click="isActive.value=false; createSupplement()" size="large" variant="tonal"
                            color="#a855f7">Submit</v-btn>
                    </v-container>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup>
//imports
import { ref, defineEmits, watch } from 'vue';
import { doc, setDoc } from "firebase/firestore";
import db from '@/firebase/init.js';

const emits = defineEmits(['docCreated']);
const preWorkOutItems = ['Pre-workout', 'Intra-workout', 'Protein Whey', 'Creatine', 'EAA', 'BCAA'];

//declaration
const newSupplement = ref(
    {
        name: "",
        brand: "",
        category: "",
        imageURL: ""
    }
)

async function createSupplement() {
    console.log('create');
    const docRef = doc(db, 'supplements', newSupplement.value.name)
    await setDoc(docRef, newSupplement.value).then(() => {
            emits('docCreated');
            
        }
    );

    newSupplement.value.name = "",
    newSupplement.value.brand = "",
    newSupplement.value.category = "",
    newSupplement.value.imageURL = ""
}

watch(newSupplement.value, () => {
    console.log(newSupplement);
});

</script>
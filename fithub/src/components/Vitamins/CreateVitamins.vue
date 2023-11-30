<template>
    <v-dialog width="800">
        <template v-slot:activator="{ props }">
            <div class="text-right mr-15">
                <v-btn v-bind="props" class="mt-8" prepend-icon="mdi-plus" color="green" variant="flat">
                    Add Vitamins
                </v-btn>
            </div>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card>
                <div class="s-100 d-flex justify-space-between">
                    <v-card-title class="ma-4x">
                        Add Vitamins
                    </v-card-title>
                    <v-btn class="ma-4" @click="isActive.value = false" icon="mdi-close" variant="flat" rounded="0">

                    </v-btn>
                </div>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="8">
                                <v-text-field v-model="newVitamin.name" label="Name" hide-details />
                            </v-col>
                            <v-col cols="4">
                                <v-text-field v-model="newVitamin.brand" label="Brand" hide-details />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                               <v-text-field v-model="newVitamin.description" label="Uses" hide-details />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="newVitamin.imageURL" label="Image URL" hide-details />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-container>
                        <v-btn class="mx-4" @click="isActive.value = false; createVitamin()" size="large" variant="tonal"
                            color="#a855f7">Submit</v-btn>
                    </v-container>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup>
//imports
import { ref, watch } from 'vue';
import { doc, setDoc } from "firebase/firestore";
import db from '@/firebase/init.js';

const emits = defineEmits(['docCreated']);

//declaration
const newVitamin = ref(
    {
        name: "",
        brand: "",
        description: "",
        imageURL: ""
    }
)

async function createVitamin() {
    console.log('create');
    const docRef = doc(db, 'vitamins', newVitamin.value.name)
    await setDoc(docRef, newVitamin.value).then(() => {
        emits('docCreated');

    }
    );

        newVitamin.value.name = "",
        newVitamin.value.brand = "",
        newVitamin.value.description = "",
        newVitamin.value.imageURL = ""
}

watch(newVitamin.value, () => {
    console.log(newVitamin);
});

</script>
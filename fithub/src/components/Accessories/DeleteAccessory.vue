<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="red" rounded="0">Delete</v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card>
                <v-card-text>
                    <h3 class="text-center mt-4">Do you want to delete?</h3>
                </v-card-text>

                <v-card-actions>
                    <v-container class="d-flex justify-center">
                        <v-btn class="mx-4" text="Delete" variant="tonal" color="red" @click="deleteItem()"></v-btn>
                        <v-btn class="mx-4" @click="isActive.value = false" text="Cancel" variant="tonal">

                        </v-btn>
                    </v-container>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup>


</script>
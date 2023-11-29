<template>
    <v-dialog width="800">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="tonal" color="blue" class="ma-3" rounded="0" icon="mdi-pencil-outline"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card>
                <div class="s-100 d-flex justify-space-between">
                    <v-card-title class="ma-4x">
                        Update Stationary Item
                    </v-card-title>
                    <v-btn class="ma-4" @click="isActive.value = false" icon="mdi-close" variant="flat" rounded="0">
                    </v-btn>
                </div>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="stationaryEntity.name" label="Name" hide-details />
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="stationaryEntity.price" label="Price" hide-details />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea v-model="stationaryEntity.description" label="Description" hide-details />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="stationaryEntity.image" label="Image URL" hide-details />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-container>
                        <v-btn class="mx-4" text="Submit" @click=update() size="large" variant="tonal"
                            color="primary"></v-btn>
                    </v-container>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup>
//imports

</script>
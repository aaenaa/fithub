<template>
    <!-- <v-app-bar color="#111827">
        <v-app-bar-nav-icon to="/home">
            <v-icon icon="mdi-store"></v-icon>
        </v-app-bar-nav-icon>

        <v-app-bar-title>Fithub</v-app-bar-title>

        <v-btn to="/statistics">Statistics</v-btn>
        <v-btn to="/logs">Logs</v-btn>
    </v-app-bar> -->

    <v-app-bar color="#111827">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>FitHub</v-toolbar-title>

        <v-btn to="/statistics">Statistics</v-btn>
        <v-btn to="/logs">Logs</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary width="225">
        <!-- <v-list :items="items"></v-list> -->
        <div class="mt-5">
            <v-list-item>
                <v-btn class="w-100" variant="flat" to="/home/supplements">Supplements</v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn class="w-100" variant="flat" to="/home/vitamins">Vitamins</v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn class="w-100" variant="flat" to="/home/clothing">Clothing</v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn class="w-100" variant="flat" to="/home/program">Program</v-btn>
            </v-list-item>
        </div>

    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
    }),
    watch: {
        group() {
            this.drawer = false;
        },
    },
}
</script>
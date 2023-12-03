<template>
    <v-app-bar color="#111827" fixed>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Fithub</v-toolbar-title>

        <v-btn to="/statistics">Statistics</v-btn>
        <v-btn to="/logs">Logs</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="250" @click.stop>
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

    <v-main>
        <div class="my-fluid-div">
            <router-view></router-view>
        </div>
    </v-main>
</template>

<style>
.my-fluid-div {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>

<script>
// export default {
//     data: () => ({
//         drawer: false,
//         group: null,
//     }),
// }
export default {
    data() {
        return {
            drawer: true,
            miniVariant: false,
        };
    },
};
</script>